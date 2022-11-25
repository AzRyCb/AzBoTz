// @ts-check
import * as ws from 'ws'
import path from 'path'
import storeSystem from './store.js'
import Helper from './helper.js'
import { HelperConnection } from './simple.js'
import importFile from './import.js'
import db, { loadDatabase } from './database.js'
import single2multi from './single2multi.js'
import P from 'pino'
import chalk from 'chalk'
import {Boom} from '@hapi/boom'
import lolcatjs from 'lolcatjs'

/** @type {import('@adiwajshing/baileys')} */
// @ts-ignore
const {
    DisconnectReason,
    Browsers,
    fetchLatestBaileysVersion,
    default: makeWASocket,
    useMultiFileAuthState
    // useSingleFileAuthState
} = (await import('@adiwajshing/baileys')).default

let { version, isLatest } = await fetchLatestBaileysVersion()
const authFolder = storeSystem.fixFileName(`${Helper.opts._[0] || ''}sessions`)
const authFile = `${Helper.opts._[0] || 'session'}.data.json`
const storeFile = `${Helper.opts._[0] || 'data'}.store.json`
const store = storeSystem.makeInMemoryStore()
store.readFromFile(storeFile)

let [
    isCredsExist,
    isAuthSingleFileExist,
    authState
] = await Promise.all([
    Helper.checkFileExists(authFolder + '/creds.json'),
    Helper.checkFileExists(authFile),
    //storeSystem.useMultiFileAuthState(authFolder)
    useMultiFileAuthState(authFolder)
])

// Convert single auth to multi auth
if (Helper.opts['singleauth'] || Helper.opts['singleauthstate']) {
    if (!isCredsExist && isAuthSingleFileExist) {
        console.debug('- singleauth -', 'creds.json not found', 'compiling singleauth to multiauth...')
        await single2multi(authFile, authFolder, authState)
        console.debug('- singleauth -', 'compiled successfully')
        //authState = await storeSystem.useMultiFileAuthState(authFolder)
        authState = await useMultiFileAuthState(authFolder)
    } else if (!isAuthSingleFileExist) console.error('- singleauth -', 'singleauth file not found')
}

// from: https://github.com/adiwajshing/Baileys/blob/master/src/Utils/logger.ts

const logger2 = P({
   // level: 'silent',
    timestamp: () => `,"time":"${new Date().toJSON()}"`
}).child({ class: 'baileys' })

const logger = P({
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        levelFirst: true, 
        ignore: 'hostname', 
        translateTime: true
      }
    }
  })//.child({ class: 'baileys'})

//const logger1 = P({ prettyPrint: { levelFirst: true, ignore: 'hostname', translateTime: true },  prettifier: import('pino-pretty') })

/** @type {import('@adiwajshing/baileys').UserFacingSocketConfig} */
const connectionOptions = {
    printQRInTerminal: true,
    auth: authState.state,
    defaultQueryTimeoutMs: undefined,
    connectTimeoutMs: 60_000,
    //browser: ['baileys', 'Safari', ''], //cutom brwser,version
    //logger: P({ level: 'silent'}), //agar terlihat chatnya sj
    //browser: Browsers.baileys('Safari'), //custom browser
    //version: [2, 2208, 14], //v esm
    //version: [2, 2204, 13], //v cjs
    version: version,
    //receivedPendingNotifications: false, //biar g lag
    generateHighQualityLinkPreview: true,
    browser: Browsers.macOS('Desktop'),
    syncFullHistory: true, //kalo mau aktifkan 
    logger
}

/** 
 * @typedef {{ 
 *  handler?: typeof import('../handler').handler; 
 *  participantsUpdate?: typeof import('../handler').participantsUpdate; 
 *  groupsUpdate?: typeof import('../handler').groupsUpdate; 
 *  onDelete?:typeof import('../handler').deleteUpdate; 
 *  connectionUpdate?: typeof connectionUpdate; 
 *  credsUpdate?: () => void 
 * }} EventHandlers
 * @typedef {Required<import('@adiwajshing/baileys').UserFacingSocketConfig>['logger']} Logger
 * @typedef {ReturnType<typeof makeWASocket> & EventHandlers & { 
 *  isInit?: boolean; 
 *  isReloadInit?: boolean; 
 *  msgqueque?: import('./queque').default;
 *  logger?: Logger
 * }} Socket 
 */


/** @type {Map<string, Socket>} */
let conns = new Map();
/** 
 * @param {Socket?} oldSocket 
 * @param {{ 
 *  handler?: typeof import('../handler'); 
 *  isChild?: boolean; 
 *  connectionOptions?: Partial<import('@adiwajshing/baileys').UserFacingSocketConfig>; 
 *  store: typeof store 
 * }} opts
 */
async function start(oldSocket = null, opts = { store }) {
    /** @type {Socket} */
    let conn = makeWASocket({
        ...connectionOptions,
        ...opts.connectionOptions,
        getMessage: async (key) => (
            opts.store.loadMessage(/** @type {string} */(key.remoteJid), key.id) ||
            opts.store.loadMessage(/** @type {string} */(key.id)) || {}
        ).message || { conversation: 'Please send messages again' },
    })
    console.log(`using WA v${version.join('.')}, isLatest: ${isLatest}`)
    HelperConnection(conn, { store: opts.store, logger })

    if (oldSocket) {
        conn.isInit = oldSocket.isInit
        conn.isReloadInit = oldSocket.isReloadInit
    }
    if (conn.isInit == null) {
        conn.isInit = false
        conn.isReloadInit = true
    }

    store.bind(conn.ev, {
        groupMetadata: conn.groupMetadata
    })
    await reload(conn, false, opts).then((success) => console.log('- bind handler event -', success))

    return conn
}


let OldHandler = null
/** 
 * @param {Socket} conn 
 * @param {boolean} restartConnection
 * @param {{ 
 *  handler?: Promise<typeof import('../handler')> | typeof import('../handler'); 
 *  isChild?: boolean 
 * }} opts
 */
async function reload(conn, restartConnection, opts = {}) {
    if (!opts.handler) opts.handler = importFile(Helper.__filename(path.resolve('./handler.js'))).catch(console.error)
    if (opts.handler instanceof Promise) opts.handler = await opts.handler;
    if (!opts.handler && OldHandler) opts.handler = OldHandler
    OldHandler = opts.handler
    // const isInit = !!conn.isInit
    const isReloadInit = !!conn.isReloadInit
    if (restartConnection) {
        try { conn.ws.close() } catch { }
        // @ts-ignore
        conn.ev.removeAllListeners()
        Object.assign(conn, await start(conn) || {})
    }

    // Assign message like welcome, bye, etc.. to the connection
    Object.assign(conn, getMessageConfig())

    if (!isReloadInit) {
        if (conn.handler) conn.ev.off('messages.upsert', conn.handler)
        if (conn.participantsUpdate) conn.ev.off('group-participants.update', conn.participantsUpdate)
        if (conn.groupsUpdate) conn.ev.off('groups.update', conn.groupsUpdate)
        if (conn.onDelete) conn.ev.off('messages.delete', conn.onDelete)
        if (conn.connectionUpdate) conn.ev.off('connection.update', conn.connectionUpdate)
        if (conn.credsUpdate) conn.ev.off('creds.update', conn.credsUpdate)
    }
    if (opts.handler) {
        conn.handler = /** @type {typeof import('../handler')} */(opts.handler).handler.bind(conn)
        conn.participantsUpdate = /** @type {typeof import('../handler')} */(opts.handler).participantsUpdate.bind(conn)
        conn.groupsUpdate = /** @type {typeof import('../handler')} */(opts.handler).groupsUpdate.bind(conn)
        conn.onDelete = /** @type {typeof import('../handler')} */(opts.handler).deleteUpdate.bind(conn)
    }
    if (!opts.isChild) conn.connectionUpdate = connectionUpdate.bind(conn)
    conn.credsUpdate = authState.saveCreds.bind(conn)
    // conn.credsUpdate = authState.saveState.bind(conn)

    /** @typedef {Required<EventHandlers>} Event */
    conn.ev.on('messages.upsert', /** @type {Event} */(conn).handler)
    conn.ev.on('group-participants.update', /** @type {Event} */(conn).participantsUpdate)
    conn.ev.on('groups.update', /** @type {Event} */(conn).groupsUpdate)
    conn.ev.on('messages.delete', /** @type {Event} */(conn).onDelete)
    if (!opts.isChild) conn.ev.on('connection.update', /** @type {Event} */(conn).connectionUpdate)
    conn.ev.on('creds.update', /** @type {Event} */(conn).credsUpdate)

    conn.isReloadInit = false
    return true

}

/**
 * @this {Socket}
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['connection.update']} update
 */
async function connectionUpdate(update) {
    console.log(update)
    const { connection, lastDisconnect, isNewLogin } = update
    if (isNewLogin) this.isInit = true
    if (connection == 'open') { console.log(chalk.green('Successfully connected ✅'))}
    //if (connection == 'connecting') console.log(chalk.redBright('))
    //if (connection == 'open') { console.log(chalk.green('Successfully connected ✅'))}
    //if (update.isOnline == true) console.log(chalk.green('Status Online'))
    if (update.isOnline == false) console.log(chalk.red('Status Offline'))
    // @ts-ignore
    const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
    if (code && code !== DisconnectReason.loggedOut && this?.ws.readyState !== ws.CONNECTING) {
        console.log(await reload(this, true).catch(console.error))
        global.timestamp.connect = new Date
    }
    if (db.data == null) loadDatabase()
    
    try{
		if (connection === 'close') {
			let reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (reason === DisconnectReason.badSession) {
				console.log(`Bad Session File, Please Delete Session and Scan Again`);
                console.log(await reload(this, true).catch(console.error))
                global.timestamp.connect = new Date
			} else if (reason === DisconnectReason.connectionClosed) {
				console.log("Connection closed, reconnecting....");
                console.log(await reload(this, true).catch(console.error))
                global.timestamp.connect = new Date
			} else if (reason === DisconnectReason.connectionLost) {
				console.log("Connection Lost from Server, reconnecting...");
                console.log(await reload(this, true).catch(console.error))
                global.timestamp.connect = new Date
			} else if (reason === DisconnectReason.connectionReplaced) {
				console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
                console.log(await reload(this, true).catch(console.error))
                global.timestamp.connect = new Date
			} else if (reason === DisconnectReason.loggedOut) {
				console.log(`Device Logged Out, Please Scan Again And Run.`);
                console.log(await reload(this, true).catch(console.error))
                global.timestamp.connect = new Date
			} else if (reason === DisconnectReason.restartRequired) {
				console.log("Restart Required, Restarting...");
                console.log(await reload(this, true).catch(console.error))
                global.timestamp.connect = new Date
			} else if (reason === DisconnectReason.timedOut) {
				console.log("Connection TimedOut, Reconnecting...");
                console.log(await reload(this, true).catch(console.error))
                global.timestamp.connect = new Date
			} else this.end(`Unknown DisconnectReason: ${reason}|${connection}`)
		}
		if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
			lolcatjs.fromString(`[🕛 Mengaktifkan Bot, Harap tunggu sebentar...']`)
            lolcatjs.fromString(`[Connecting to] WhatsApp web`)
		}
		if (update.connection == "open" || update.receivedPendingNotifications == "true") {
			lolcatjs.fromString(`[Connected] ` + JSON.stringify(this.user, null, 2))
            console.log(chalk.yellow('Waiting New Messages'))
		}
        if (update.receivedPendingNotifications) {
            console.log('🚩 Berhasil mengaktifkan bot.')
            //this.sendButton('120363024208795001@g.us', 'AzBoTz Sudah aktif\nGunakan BOT Dengan Bijak 😉', null, null, ['MENU', '/menu'])
            //await hehe('6285795035419@s.whatsapp.net').catch(err => { return !0 }) //ubah ini masuk neraka
        }
        if (update.qr != 0 && update.qr != undefined) {
            console.log('🚩 Scan QR Dibawah, Qr Expired Dalam 20 Detik.')
            console.log('\nQR : ', chalk.green(update.qr)) // have no idea
        }
	
} catch (err) {
	  console.log('error di connection.update'+ err)
	  reload
	}
	
}

function getMessageConfig() {
    const welcome = 'Hai @user 👋\n𝗦𝗲𝗹𝗮𝗺𝗮𝘁 𝗗𝗮𝘁𝗮𝗻𝗴 𝗗𝗶 𝗚𝗿𝗼𝘂𝗽\n@subject\n\nIntro Dulu Yuk Biar Keren 🤙\n\n📛 Nama :\n🔞 Umur :\n🏙️ Askot :\n\nSemoga Kamu Senang Berada\nDisini Serta Jangan Lupa Untuk\nMembaca Dan Mematuhi Rules Yang Ada\n\n*⪼ Deskripsi Group ミ*\n@desc'
    const bye = 'Bye @user 👋\nSemoga kamu baik baik saja\n\nKalo Balik Jangan Lupa Bawa Gorengan Untuk Kita Ya 🤙 😉'
    const spromote = '╭─֍ 〔 ıll *PROMOTE* llı 〕 ֍──\n│╭───────────\n││─⬣ Name : @user\n││─⬣ Status : Sekarang Admin\n│╰───────────\n╰────────────────────\n\n📮 Hello | Titip Group nya 😉\n📮 Semoga kau dapat dipercaya'
    const sdemote = '╭─֍ 〔 ıll *DEMOTE* llı 〕 ֍──\n│╭───────────\n││─⬣ Name : @user\n││─⬣ Status : Bukan admin lagi\n│╰───────────\n╰────────────────────\n\n📮 Hello | Kasian deh 😉\n📮 Makanya yang amanah'
    const sDesc = '––––––『 Detection 』––––––\nGroup description has been changed to\n@desc'
    const sSubject = '––––––『 Detection 』––––––\nGroup name has been changed to\n@subject'
    const sIcon = '––––––『 Detection 』––––––\nGroup icon has been changed!'
    const sRevoke = '––––––『 Detection 』––––––\nGroup link has been changed to\n@revoke'
    const sAnnounceOn = '––––––『 announce 』––––––\nThe group has been closed, now only admins can send messages'
    const sAnnounceOff = '––––––『 announce 』––––––\nThe group has been opened, now all participants can send messages'
    const sRestrictOn = '––––––『 Detection 』––––––\nEdit Group Info changed to admin only!'
    const sRestrictOff = '––––––『 Detection 』––––––\nEdit Group Info changed to all participants'

    return {
        welcome,
        bye,
        spromote,
        sdemote,
        sDesc,
        sSubject,
        sIcon,
        sRevoke,
        sAnnounceOn,
        sAnnounceOff,
        sRestrictOn,
        sRestrictOff
    }
}

const conn = start(null, { store }).catch(console.error)


export default {
    start,
    reload,

    conn,
    conns,
    logger,
    connectionOptions,

    authFolder,
    storeFile,
    authState,
    store,

    getMessageConfig
}
export {
    conn,
    conns,
    logger
}
