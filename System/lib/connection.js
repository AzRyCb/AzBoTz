// @ts-check
/** @type {import('@adiwajshing/baileys')} */
// @ts-ignore
const { default: WASocket, useMultiFileAuthState, DisconnectReason, BufferJSON, fetchLatestBaileysVersion, Browsers, delay, MessageRetryMap } = (await import('@adiwajshing/baileys')).default
const { opts, checkFileExists, __filename} = (await import('./helper.js')).default 
const { fixFileName, JSONreplacer, KEY_MAP, makeInMemoryStore } = (await import('./store.js')).default 

//-- MODULE EKSTERNAL
import P from 'pino' //tdk bisa
import {promises, existsSync, readdirSync } from 'fs'
import chalk from 'chalk'
import * as ws from 'ws'
import { resolve, join } from 'path'
import axios from 'axios'
import { hostname, platform, totalmem, freemem, cpus} from 'os'
import { Boom } from '@hapi/boom'
import lolcatjs from 'lolcatjs';

//-- MODULE INTERNAL
import { HelperConnection } from './socket.js'
import importFile from './import.js' //gk bisa
import db, { loadDatabase } from './database.js'
import jadibot from './mywab.js'

//-- setting
const msgRetryCounterMap = MessageRetryMap || { }
//const msgRetryCounterMap = MessageRetryMap => { }
const { version, isLatest } = await fetchLatestBaileysVersion()
const authFolder = `System/data/${opts._[0] || ''}sessions`
const authFile = `System/data/${opts._[0] || 'session'}.data.json`
const storeFile = `System/data/${opts._[0] || 'data'}.store.json`
const store = makeInMemoryStore() 
store.readFromFile(storeFile)

const logger = P({
    //level: 'debug', //fatal, atau debug
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

const hehe = async (conn, jid, options) => {
    //const peth = (await import('node-fetch')).default
    const txt = `\n[ ✅ ] Berhasil terhubung ke SC AzBoTz-MD.\n\nsaya berjanji tidak akan menjual belikan script ini.\nterimakasih @${jid.split`@`[0]}, karena sudah memberikan script gratis ini.\n\n\n📑Sumber Script:\nhttps://tinyurl.com/2apdztcj`
        // @ts-ignore
        return conn.sendMessage(jid, { text: txt, mentions: [jid], ...options }, { quoted: set.fkontak, ephemeralExpiration: 86400, ...options })
  }

  let [
    isCredsExist,
    isAuthSingleFileExist,
    authState
] = await Promise.all([
    checkFileExists(authFolder + '/creds.json'),
    checkFileExists(authFile),
    useMultiFileAuthState(authFolder)
])

/** @type {import('@adiwajshing/baileys').UserFacingSocketConfig} */
const connectionOptions = {
browser: ['AzBotz', 'Edge', ''], //cutom brwser,version
//browser: Browsers.macOS('Desktop'),  //ubuntu
//syncFullHistory: true,
version: version,
logger,
msgRetryCounterMap,
printQRInTerminal: true,
auth: authState.state,
connectTimeoutMs: 60_000,
defaultQueryTimeoutMs: 0,
keepAliveIntervalMs: 10000,
generateHighQualityLinkPreview: true,
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
//  
/** 
 * @typedef {{ 
 *  handler?: typeof import('../handler').handler; 
 *  participantsUpdate?: typeof import('../handler').participantsUpdate; 
 *  groupsUpdate?: typeof import('../handler').groupsUpdate; 
 *  onDelete?:typeof import('../handler').deleteUpdate; 
 *  onCall?:typeof import('../handler').callUpdate;
 *  connectionUpdate?: (update: import('@adiwajshing/baileys').BaileysEventMap['connection.update']) => any; 
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
 *  handler?: Promise<typeof import('../handler')> | typeof import('../handler'); 
 *  isChild?: boolean; 
 *  connectionOptions?: Partial<import('@adiwajshing/baileys').UserFacingSocketConfig>; 
 *  logger?: Logger;
 *  store: typeof store;
 *  authState: Awaited<ReturnType<typeof useMultiFileAuthState>>
 * }} StartOptions
 */
  
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
        ).message || { conversation: 'Please send messages again' },
    })
    logger.info(`Using WA v${version.join('.')}, isLatest: ${isLatest}`)
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
    if (!opts.handler) opts.handler = importFile(__filename(resolve('./System/handler.js'))).catch(console.error)
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
    conn.credsUpdate = opts.authState.saveCreds.bind(conn)

    /** @typedef {Required<EventHandlers>} Event */
    conn.ev.on('messages.upsert', /** @type {Event} */(conn).handler)
    conn.ev.on('group-participants.update', /** @type {Event} */(conn).participantsUpdate)
    // @ts-ignore
    conn.ev.on('groups.update', /** @type {Event} */(conn).groupsUpdate)
    conn.ev.on('messages.delete', /** @type {Event} */(conn).onDelete)
    conn.ws.on('CB:call', /** @type {Event} */(conn).onCall)
    if (!opts.isChild) conn.ev.on('connection.update', /** @type {Event} */(conn).connectionUpdate)
    conn.ev.on('creds.update', /** @type {Event} */(conn).credsUpdate)

    conn.isReloadInit = false
    return true

}
let timestamp = {
    start: Date.now()
  }
const connect = async() => {
    start()
}

/**
 * @this {Socket}
 * @param {StartOptions} opts
 * @param {import('@adiwajshing/baileys').BaileysEventMap['connection.update']} update
 */
async function connectionUpdate(opts, update) {
    //this.logger?.info(update)
    const { qr, receivedPendingNotifications, connection, lastDisconnect, isNewLogin, isOnline } = update
    //if (isNewLogin) this.isInit = true
    //if (connection) this.logger?.info(chalk.yellow("Connection: " + connection))
    if (isOnline == true) this.logger?.info('📱 Status Online')
    if (isOnline == false) this.logger?.info('📱 Status Offline')
    if (receivedPendingNotifications == false) this.logger?.warn('💬 Loading Old Messages')
    if (connection == "connecting" || receivedPendingNotifications == false) console.log(chalk.redBright('🕛 Mengaktifkan Bot, Harap tunggu sebentar...'))
    if (connection == 'open') this.logger?.info(`[Connected] ` + JSON.stringify(this.user, null, 2))
    //lolcatjs.fromstring(`[Connected] ` + JSON.stringify(this.user, null, 2))
    const code = new Boom(lastDisconnect?.error)?.output.statusCode || new Boom(lastDisconnect?.error)?.output?.payload?.statusCode
    if (code && code !== DisconnectReason.loggedOut && code !== DisconnectReason.badSession && code !== DisconnectReason.connectionReplaced && this?.ws.readyState !== ws.CONNECTING) {
        this.logger?.info(await reload(this, true, opts).catch(this.logger?.error))
        timestamp.connect = new Date
    }
    if (db.data == null) loadDatabase() 
    //this.logger?.info(JSON.stringify(update, null, 4))
    //this.logger?.info("MENGONEKSIKAN KE DATABASE...")
    
    try{
	if (connection === 'close') {
		let reason = new Boom(lastDisconnect?.error)?.output.statusCode
        this.logger?.error('⏱️ Connection stopped and tried to reconnect...')
        //global.set.timestamp.connect = new Date
		if (reason === DisconnectReason.badSession) {this.logger?.info(`Bad Session File, Please Delete ${authFolder} and Scan Again`); 
            this.logout(); 
		} else if (reason === DisconnectReason.connectionReplaced) {this.logger?.info("Connection Replaced, Another New Session Opened, Please Close Current Session First");
            this.logout();
		} else if (reason === DisconnectReason.loggedOut) {this.logger?.info(`Device Logged Out, Please Scan Again And Run.`);
            this.logout();
        } else if (reason === DisconnectReason.connectionLost) {this.logger?.info("Connection Lost from Server, please check connetion");
            this.logout();
        } else if (reason === DisconnectReason.multideviceMismatch) {this.logger?.info("multideviceMismatch, Restarting..."); 
        } else if (reason === DisconnectReason.connectionClosed) {this.logger?.info("Connection closed, reconnecting....");
		} else if (reason === DisconnectReason.restartRequired) {this.logger?.info("Restart Required, Restarting...");
		} else if (reason === DisconnectReason.timedOut) {this.logger?.info("Connection TimedOut, Reconnecting...");
		} else this.logger?.error(`Unknown DisconnectReason: ${reason}|${lastDisconnect?.error}`)
		}
		
        if (connection == 'open' || receivedPendingNotifications == true) {
          //-- MESSAGE CONNECT --
        var gip = await axios.get("https://api64.ipify.org?format=json")
        var ip = gip.data.ip
        var gdet = await axios.get(`http://ip-api.com/json/${ip}`)
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
// @ts-ignore
this.sendButton('6281358919342@s.whatsapp.net', pesan, 'MyWA BOT HOSTING', ["MENU", ".menu"], null, { mentions: ['0@s.whatsapp.net', '6285346545126@s.whatsapp.net'] }) 
// @ts-ignore
//this.sendButton('6285722037770@s.whatsapp.net', pesan, 'MyWA BOT HOSTING', ["MENU", ".menu"], null, { mentions: ['0@s.whatsapp.net', '6285722037770@s.whatsapp.net'] }) 
// @ts-ignore
//this.sendButton('120363024208795001@g.us', 'AzBoTz Sudah aktif\nGunakan BOT Dengan Bijak 😉', null, null, ['MENU', '/menu'], global.fakes, global.adReply)
// @ts-ignore
//hehe('6285722037770@s.whatsapp.net').catch(err => { return !0 }) //ubah ini masuk neraka

// pale db kurang cum:v
//if (db.data.users[who].jadibot == true) return
    if (!existsSync('System/data/jadibot')) return 
        // @ts-ignore
        let listJadiBot = readdirSync('System/data/jadibot').filter(v => !isNaN(v))
        if (!listJadiBot.length) return 
            this.logger?.info(`Loading connect ${listJadiBot.length} users jadibot`)
            for (let jid of listJadiBot) {
                await delay(3000) //supaya gk load platform 
                await jadibot.starts(jid + '@s.whatsapp.net').catch(_=>_)
	        }
            this.logger?.info('💬 Waiting New Messages')   
        }
        if (qr != null && qr != undefined) {
           this.logger?.info('🚩 Scan QR Dibawah, Qr Expired Dalam 20 Detik.')
           this.logger?.info('\nQR : ', chalk.green(qr)) // have no idea
        }
        
} catch (e) {
      this.logger?.error(e)
      //this.logger?.info(await reload(this, true, opts).catch(this.logger?.error))
	}
	
}

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

/**
 * 
 * @param {string} fileSingle 
 * @param {string} folderMulti
 * @param {Awaited<ReturnType<import('./store').MultiFileAuthStateStore>>} authState
 */
async function single2multi(fileSingle, folderMulti, authState) {
    const authSingleResult = JSON.parse(await promises.readFile(fileSingle, 'utf8'), BufferJSON.reviver)
    const authSingleCreds = authSingleResult.creds || {}
    const authSingleKeys = authSingleResult.keys || {}

    const writeData = (data, file) => {
        return promises.writeFile(join(folderMulti, fixFileName(file)), JSON.stringify(data, JSONreplacer))
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
        // @ts-ignore
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024))/ 10)
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
