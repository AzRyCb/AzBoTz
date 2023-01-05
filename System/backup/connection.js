// @ts-check
//-- MODULE EKSTERNAL
import P from 'pino' //tdk bisa
import fs, { existsSync, readdirSync } from 'fs'
import green from 'chalk'
import ws from 'ws'
import { resolve, join } from 'path'
import get from 'axios'
import { hostname, platform, totalmem, freemem, cpus} from 'os'
import { Boom } from '@hapi/boom'
import fromstring from 'lolcatjs';

//-- MODULE INTERNAL
import Helper from './helper.js'
import storeSystem from './store.js'
import { HelperConnection } from './socket.js'
import importFile from './import.js' //gk bisa
import db, { loadDatabase } from './database.js'

const { opts, checkFileExists } = (await import('./helper.js')).default 
const { fixFileName, JSONreplacer, KEY_MAP } = (await import('./store.js')).default 
const { starts } = (await import('./mywab.js')).default 

/** @type {import('@adiwajshing/baileys')} */
// @ts-ignore
const {
    DisconnectReason,
    Browsers,
    BufferJSON,
    delay,
    fetchLatestBaileysVersion,
    fetchLatestWaWebVersion,
    useMultiFileAuthState,
    // @ts-ignore
    MessageRetryMap,
    //msgRetryCounterMap,
    makeInMemoryStore,
    default: WASocket
    // useSingleFileAuthState
} = (await import('@adiwajshing/baileys')).default

const logger2 = P({
    level: 'silent', //fatal,error, atau debug
    timestamp: () => `,"time":"${new Date().toJSON()}"`
    }).child({ class: 'baileys' })

const logger = P({
    level: 'silent', //fatal,error, atau debug
    timestamp: () => `,"time":"${new Date().toJSON()}"`,
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

//settng
let usestoreinternal = true
const store = (usestoreinternal) ? storeSystem.makeInMemoryStore() : makeInMemoryStore({  }) //logger: P().child({ level: 'silent', stream: 'store'
let { version, isLatest } = await fetchLatestBaileysVersion()
const authFolder = (`System/${opts._[0] || ''}sessions`)
//const authFolder = fixFileName(`System/${opts._[0] || ''}sessions`)
const authFile = `System/${opts._[0] || 'session'}.data.json`
const storeFile = `System/${opts._[0] || 'data'}.store.json`
store.readFromFile(storeFile)

let [
    isCredsExist,
    isAuthSingleFileExist,
    authState
] = await Promise.all([
    checkFileExists(authFolder + '/creds.json'),
    checkFileExists(authFile),
    useMultiFileAuthState(authFolder)
])

// Convert single auth to multi auth
if (opts['singleauth'] || opts['singleauthstate']) {
    if (!isCredsExist && isAuthSingleFileExist) {
        console.debug('- singleauth -', 'creds.json not found', 'compiling singleauth to multiauth...')
        await single2multi(authFile, authFolder, authState)
        console.debug('- singleauth -', 'compiled successfully')
        // @ts-ignore
        authState = useMultiFileAuthState(authFolder)
    } else if (!isAuthSingleFileExist) console.error('- singleauth -', 'singleauth file not found')
}
///** @type {import('@adiwajshing/baileys').MessageRetryMap} */
//const msgRetryCounterMap: MessageRetryMap = { }
/** @type {import('@adiwajshing/baileys').UserFacingSocketConfig} */
const connectionOptions = {
    printQRInTerminal: true,
    auth: authState.state,
    version: version,

    browser: ['baileys', 'Safari', ''], //cutom brwser,version
    //browser: Browsers.macOS('Desktop'),  //ubuntu
    syncFullHistory: false,
    markOnlineOnConnect: true,

    msgRetryCounterMap: MessageRetryMap,
    connectTimeoutMs: 60_000,
    defaultQueryTimeoutMs: 0,
    keepAliveIntervalMs: 10000,
    generateHighQualityLinkPreview: true,
    logger,
    patchMessageBeforeSending: (message) => {
    const requiresPatch = !!(
        message.buttonsMessage 
        || message.templateMessage
        || message.listMessage
    );
    if (requiresPatch) {
        message = {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadataVersion: 2,
                        deviceListMetadata: {},
                    },
                    ...message,
                },
            },
        };
    }

    return message;
}
}

/** 
 * @typedef {{ 
 *  handler?: typeof import('../handler').handler; 
 *  participantsUpdate?: typeof import('../handler').participantsUpdate; 
 *  groupsUpdate?: typeof import('../handler').groupsUpdate; 
 *  onDelete?:typeof import('../handler').deleteUpdate; 
 *  onCall?:typeof import('../handler').callUpdate;
 *  connectionUpdate?: typeof connectionUpdate; 
 *  credsUpdate?: () => void 
 * }} EventHandlers
 * @typedef {Required<import('@adiwajshing/baileys').UserFacingSocketConfig>['logger']} Logger
 * @typedef {ReturnType<typeof WASocket> & EventHandlers & { 
 *  isInit?: boolean; 
 *  isReloadInit?: boolean; 
 *  msgqueque?: import('./queque').default;
 *  logger?: Logger
 * }} Socket 
 * @typedef {{ 
 *  handler?: typeof import('../handler')
 *  isChild?: boolean; 
 *  connectionOptions?: Partial<import('@adiwajshing/baileys').UserFacingSocketConfig>; 
 *  logger?: Logger;
 *  store: typeof store;
 *  authState: Awaited<ReturnType<typeof useMultiFileAuthState>>
 * }} StartOptions
 */
//authState: Awaited<ReturnType<typeof storeSystem['useMultiFileAuthState']>>

/** @type {Map<string, Socket>} */
let conns = new Map();
/** 
 * @param {Socket?} oldSocket 
 * @param {StartOptions} opts
 */
async function start(oldSocket = null, opts = { store, logger, authState }) {
    /** @type {Socket} */
    let conn = WASocket({
        ...connectionOptions,
        ...opts.connectionOptions,
        logger: opts.logger,
        auth: opts.authState.state,
        getMessage: async (key) => (
            opts.store.loadMessage(/** @type {string} */(key.remoteJid), key.id) ||
            opts.store.loadMessage(/** @type {string} */(key.id)) || {}
        ).message || null // || { conversation: 'Please send messages again' },
    })
    logger?.info(`using WA v${version.join('.')}, isLatest: ${isLatest}`)
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
    await reload(conn, false, opts)//.then((success) => logger?.info('- bind handler event -', success))

    return conn
}


let OldHandler = null
/** 
 * @param {Socket} conn 
 * @param {boolean} restartConnection
 * @param {StartOptions} opts
 */
async function reload(conn, restartConnection, opts = { store, authState }) {
    if (!opts.handler) opts.handler = importFile(Helper.__filename(resolve('./handler.js'))).catch(console.error)
    if (opts.handler instanceof Promise) opts.handler = await opts.handler;
    if (!opts.handler && OldHandler) opts.handler = OldHandler
    OldHandler = opts.handler
    // const isInit = !!conn.isInit
    const isReloadInit = !!conn.isReloadInit
    if (restartConnection) {
        try { conn.ws.close() } catch { }
        // @ts-ignore
        conn.ev.removeAllListeners()
        Object.assign(conn, await start(conn, opts) || {})
    }

    // Assign message like welcome, bye, etc.. to the connection
    Object.assign(conn, getMessageConfig())

    if (!isReloadInit) {
        if (conn.handler) conn.ev.off('messages.upsert', conn.handler)
        if (conn.participantsUpdate) conn.ev.off('group-participants.update', conn.participantsUpdate)
        // @ts-ignore
        if (conn.groupsUpdate) conn.ev.off('groups.update', conn.groupsUpdate)
        if (conn.onDelete) conn.ev.off('messages.delete', conn.onDelete)
        if (conn.onCall) conn.ws.off('CB:call', conn.onCall)
        // @ts-ignore
        if (conn.connectionUpdate) conn.ev.off('connection.update', conn.connectionUpdate)
        if (conn.credsUpdate) conn.ev.off('creds.update', conn.credsUpdate)
    }
    if (opts.handler) {
        conn.handler = /** @type {typeof import('../handler')} */(opts.handler).handler.bind(conn)
        conn.participantsUpdate = /** @type {typeof import('../handler')} */(opts.handler).participantsUpdate.bind(conn)
        conn.groupsUpdate = /** @type {typeof import('../handler')} */(opts.handler).groupsUpdate.bind(conn)
        conn.onDelete = /** @type {typeof import('../handler')} */(opts.handler).deleteUpdate.bind(conn)
        conn.onCall = /** @type {typeof import('../handler')} */(opts.handler).callUpdate.bind(conn)
    }
    if (!opts.isChild) conn.connectionUpdate = connectionUpdate.bind(conn, opts)
    conn.credsUpdate = authState.saveCreds.bind(conn)

    /** @typedef {Required<EventHandlers>} Event */
    conn.ev.on('messages.upsert', /** @type {Event} */(conn).handler)
    conn.ev.on('group-participants.update', /** @type {Event} */(conn).participantsUpdate)
    // @ts-ignore
    conn.ev.on('groups.update', /** @type {Event} */(conn).groupsUpdate)
    conn.ev.on('messages.delete', /** @type {Event} */(conn).onDelete)
    conn.ws.on('CB:call', /** @type {Event} */(conn).onCall)
    // @ts-ignore
    if (!opts.isChild) conn.ev.on('connection.update', /** @type {Event} */(conn).connectionUpdate)
    conn.ev.on('creds.update', /** @type {Event} */(conn).credsUpdate)

    conn.isReloadInit = false
    return true

}

/**
 * @this {Socket}
 * @param {StartOptions} opts
 * @param {import('@adiwajshing/baileys').BaileysEventMap['connection.update']} update
 */
async function connectionUpdate(opts, update) {
    this.logger?.info(update)
    const { qr, receivedPendingNotifications, connection, lastDisconnect, isNewLogin, isOnline } = update
    //if (isNewLogin) this.isInit = true
    if (connection == 'close') this.logger?.error('⏱️Connection stopped and tried to reconnect...')
    global.set.timestamp.connect = new Date
    if (connection == 'connecting') this.logger?.info('⚡Activate the Bot, please wait a moment...')
    if (connection == 'open') this.logger?.info('✅Connected To WhatsApp Web')
    if (isOnline == true) this.logger?.info('📱Status Online')
    if (isOnline == false) this.logger?.info('📱Status Offline') 

    // @ts-ignore
    const code = lastDisconnect?.error?.output.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
    if (code && code !== DisconnectReason.loggedOut && this?.ws.readyState !== ws.CONNECTING) {
        this.logger?.info(await reload(this, true, opts).catch(this.logger?.error))
        //global.set.timestamp.connect = new Date
    }
    if (db.data == null) loadDatabase()
    //this.logger?.info("MENGONEKSIKAN KE DATABASE...")

    try{
        if (connection) { console.log("Connection Status: ", connection); }
		if (connection === 'close') {
			let reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (reason === DisconnectReason.badSession) {
				this.logger?.info(`Bad Session File, Please Delete ${authFolder} and Scan Again`); 
                this.logout(); 
                //this.end
                //global.set.timestamp.connect = new Date
			} else if (reason === DisconnectReason.connectionClosed) {
				this.logger?.info("Connection closed, reconnecting....");
                this.logger?.info(await reload(this, true, opts).catch(this.logger?.error))
                //global.set.timestamp.connect = new Date
			} else if (reason === DisconnectReason.connectionLost) {
				this.logger?.info("Connection Lost from Server, reconnecting...");
                this.logger?.info(await reload(this, true, opts).catch(this.logger?.error))
                //global.set.timestamp.connect = new Date
			} else if (reason === DisconnectReason.connectionReplaced) {
				this.logger?.info("Connection Replaced, Another New Session Opened, Please Close Current Session First");
                this.logout();
                //global.set.timestamp.connect = new Date
			} else if (reason === DisconnectReason.loggedOut) {
				this.logger?.info(`Device Logged Out, Please Scan Again And Run.`);
                this.logout();
                //this.end
                //global.set.timestamp.connect = new Date
            } else if (reason === DisconnectReason.multideviceMismatch) {
				this.logger?.info("multideviceMismatch");
                //this.logger?.info(await reload(this, true, opts).catch(this.logger?.error))
                //global.set.timestamp.connect = new Date    
			} else if (reason === DisconnectReason.restartRequired) {
				this.logger?.info("Restart Required, Restarting...");
                this.logger?.info(await reload(this, true, opts).catch(this.logger?.error))
                //global.set.timestamp.connect = new Date
			} else if (reason === DisconnectReason.timedOut) {
				this.logger?.info("Connection TimedOut, Reconnecting...");
                this.logger?.info(await reload(this, true, opts).catch(this.logger?.error))
                //global.set.timestamp.connect = new Date
			} else this.end(`Unknown DisconnectReason: ${reason}|${lastDisconnect.error}`)
		}
		if (connection == "connecting" || receivedPendingNotifications == false) {
			// @ts-ignore
			fromstring(`[🕛 Mengaktifkan Bot, Harap tunggu sebentar...']`)
            // @ts-ignore
            fromstring(`[Connecting to] WhatsApp web`)
		}
		if (connection == "open" || receivedPendingNotifications == true) {
			// @ts-ignore
			fromstring(`[Connected] ` + JSON.stringify(this.user, null, 2))
            this.logger?.info('💬Waiting New Messages')
        }
        if (receivedPendingNotifications == true) {
          //-- MESSAGE CONNECT --
        var gip = await get("https://api64.ipify.org?format=json")
        var ip = gip.data.ip
        var gdet = await get(`http://ip-api.com/json/${ip}`)
        var srv = gdet.data
        var mir = "```"
        let pesan = `*MyWA BOT CONNECTED*

Halo, Kak 👋
MyWA BOT berhasil dinyalakan!!

*Detail Server:*${mir}
IP: ${ip}
HOSTNAME: ${hostname}
PLATFORM: ${platform()}
CPU: ${cpus().length}
TOTAL MEMORY: ${bytes(totalmem())}
FREE MEMORY: ${bytes(freemem())}
============================
COUNTRY: ${srv.country}
CODE: ${srv.countryCode}
REGION: ${srv.regionName}
CITY: ${srv.city}
TIMEZONE: ${srv.timezone}
ISP: ${srv.isp}
ORG: ${srv.org}
AS: ${srv.as}
${mir}`
this.sendButton('6281358919342@s.whatsapp.net', pesan, 'MyWA BOT HOSTING', ["MENU", ".menu"], null, { mentions: ['0@s.whatsapp.net', '6285346545126@s.whatsapp.net'] }) 
await this.sendButton('6285722037770@s.whatsapp.net', pesan, 'MyWA BOT HOSTING', ["MENU", ".menu"], null, { mentions: ['0@s.whatsapp.net', '6285722037770@s.whatsapp.net'] }) 
// pale db kurang cum:v
    if (!existsSync('System/jadibot')) return 
        let listJadiBot = readdirSync('System/jadibot').filter(v => !isNaN(v))
        if (!listJadiBot.length) return 
            this.logger?.info(`Loading connect ${listJadiBot.length} users jadibot`)
            for (let jid of listJadiBot) {
                await delay(3000) //supaya gk load platform 
                await starts(jid + '@s.whatsapp.net').catch(_=>_)
	        }
        }
        if (receivedPendingNotifications) {
            this.logger?.info('🚩 Berhasil mengaktifkan bot.')
            //this.sendButton('120363024208795001@g.us', 'AzBoTz Sudah aktif\nGunakan BOT Dengan Bijak 😉', null, null, ['MENU', '/menu'])
            //await hehe('6285795035419@s.whatsapp.net').catch(err => { return !0 }) //ubah ini masuk neraka
        }
	    /*
        if (update.qr != 0 && update.qr != undefined) {
           this.logger?.info('🚩 Scan QR Dibawah, Qr Expired Dalam 20 Detik.')
           this.logger?.info('\nQR : ', green(update.qr)) // have no idea
        }
        */
} catch (e) {
      this.logger?.info('error di connection.update' + e)
	  reload
	}
	
}

/**
 * 
 * @param {string} fileSingle 
 * @param {string} folderMulti
 * @param {Awaited<ReturnType<import('./store').MultiFileAuthStateStore>>} authState
 */
async function single2multi(fileSingle, folderMulti, authState) {
    const authSingleResult = JSON.parse(await fs.promises.readFile(fileSingle, 'utf8'), BufferJSON.reviver)
    const authSingleCreds = authSingleResult.creds || {}
    const authSingleKeys = authSingleResult.keys || {}

    const writeData = (data, file) => {
        return fs.promises.writeFile(join(folderMulti, fixFileName(file)), JSON.stringify(data, JSONreplacer))
    }

    const getKeyByValue = (obj, value) => {
        return Object.keys(obj).find(key => obj[key] === value)
    }

    const keys = Object.fromEntries(Object.entries(authSingleKeys).map(([key, value]) => (value && [getKeyByValue(KEY_MAP, key), value])).filter(Boolean))

    await Promise.all([
        writeData(authSingleCreds, 'creds.json'),
        authState.state.keys.set(keys),
    ])
}

function bytes(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (bytes === 0) return 'n/a'
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
    if (i === 0) return `${bytes} ${sizes[i]})`
        return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`
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

const conn = start(null, { store, logger, authState }).catch(console.error)

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
