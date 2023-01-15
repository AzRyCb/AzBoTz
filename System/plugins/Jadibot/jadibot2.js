import fs from 'fs'
import path from 'path'
import { toBuffer } from 'qrcode'
import ws from 'ws'
import Connection from '../../lib/connection.js'
import Store from '../../lib/store.js'
import chalk from 'chalk'
import { Boom } from '@hapi/boom'

/** @type {import('@adiwajshing/baileys')} */
// @ts-ignore
const { default: WASocket, areJidsSameUser, useMultiFileAuthState, DisconnectReason, BufferJSON, fetchLatestBaileysVersion, Browsers, delay, MessageRetryMap } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn: _conn, __dirname }) => {

    const parent = await Connection.conn
    if (!areJidsSameUser(parent.user.id, _conn.user.id))
        throw 'Tidak bisa membuat bot didalam bot!\n\nhttps://wa.me/' + parent.user.jid.split`@`[0] + '?text=.jadibot'


    const id = Connection.conns.size
    const logger = Connection.logger.child({ jadibot: id })
    const store = Store.makeInMemoryStore()
    const folder = path.join(__dirname, '../data/jadibot', m.chat.split('@')[0].toString())
    const authState = await useMultiFileAuthState(folder)
    const opts = { store, logger, isChild: true, authState }

    let conn = await Connection.start(null, opts),
        lastQr

    // if it's been 2 minutes but there is nobody connect, just close it
    const timeout = setTimeout(() => {
        if (conn?.user) return
        logout()
    }, 2 * 60 * 1000)
    const logout = async () => {
        if (conn?.user?.jid) {
            await _conn.reply(conn.user.jid || m.chat, 'Koneksi terputus...')
        }
        try { conn.ws.close() } catch { }
        Connection.conns.delete(id)
        clearTimeout(timeout)
        // Remove session folder
        await fs.promises.rm(folder, { force: true, recursive: true })
    }
    const sendSuccesLoginMessage = async () => {
        let waiting = 0
        // Wait until user exist in conn object
        const wait = () => new Promise((resolve) => conn.user?.id ? resolve() : (waiting++, setTimeout(() => resolve(wait()), 500)))
        await wait()
        await _conn.reply(conn.user.jid || m.chat, `
Berhasil tersambung dengan WhatsApp - mu.
*NOTE: Ini cuma numpang*
Join grup khusus user jadibot :
https://chat.whatsapp.com/LDbagidU44zFuvm5QxIstq

\`\`\`
${JSON.stringify(conn.user, null, 2)}
\`\`\`
`.trim())
        clearTimeout(timeout)
    }

    conn.ev.on('connection.update', async (update) => {
        const { qr, receivedPendingNotifications, connection, lastDisconnect, isNewLogin, isOnline } = update
        console.log(update)
        if (isNewLogin) {
            sendSuccesLoginMessage()
            // conn.isInit = true
        }
        if (isOnline == true) conn.logger.info('📱 Status Online')
        if (isOnline == false) conn.logger.info('📱 Status Offline')
        if (receivedPendingNotifications == false) conn.logger.warn('💬 Loading Old Messages')
        if (connection == "connecting" || receivedPendingNotifications == false) console.log(chalk.redBright('🕛 Mengaktifkan Bot, Harap tunggu sebentar...'))
        // @ts-ignore
        const code = update.lastDisconnect?.error?.output?.statusCode || update.lastDisconnect?.error?.output?.payload?.statusCode
        if (code && code !== DisconnectReason.loggedOut && code !== DisconnectReason.badSession && code !== DisconnectReason.connectionReplaced && conn?.ws.readyState !== ws.CONNECTING) {
            conn.logger.info(await Connection.reload(conn, true, opts).catch(conn.logger.error))
        } else if (code && code == DisconnectReason.loggedOut) {
            await logout()
            // Maybe release some of memory?
            conn = null
        }
        if (qr) {
            if (lastQr) {
                lastQr.delete()
                lastQr = null
            }
            lastQr = await _conn.reply2(m.chat,`
Scan QR ini untuk jadi bot sementara
1. Klik titik tiga di pojok kanan atas
2. Ketuk perangkat tertaut
3. Scan QR ini 
QR akan Expired !
`.trim(), m, {title: 'Scan QR ini', thumb: await toBuffer(qr, { scale: 4 })})
            //lastQr = await _conn.sendFile(m.chat, , 'qrcode.png',  m)
        }

        if (connection == 'open' || receivedPendingNotifications == true) {
let pesan = `*CONNECTED*
  
Halo, Kak 👋
Saya berhasil menjadibot`
_conn.sendButton('6285722037770@s.whatsapp.net', pesan, set.wm, ["MENU", ".menu"], null, { mentions: ['0@s.whatsapp.net', '6285722037770@s.whatsapp.net'] }) 
  // @ts-ignore
  //hehe('6285722037770@s.whatsapp.net').catch(err => { return !0 }) //ubah ini masuk neraka
        }

        if (connection === 'close') {
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            conn.logger.error('⏱️ Connection stopped and tried to reconnect...')
            //global.set.timestamp.connect = new Date
            if (reason === DisconnectReason.badSession) {conn.logger.info(`Bad Session File, Please Delete ${folder} and Scan Again`); 
                //this.logout(); 
            } else if (reason === DisconnectReason.connectionReplaced) {conn.logger.info("Connection Replaced, Another New Session Opened, Please Close Current Session First");
                //this.logout();
            } else if (reason === DisconnectReason.loggedOut) {conn.logger.info(`Device Logged Out`);
                //this.logout();
            } else if (reason === DisconnectReason.connectionLost) {conn.logger.info("Connection Lost from Server, please check connetion");
                //this.logout();
            } else if (reason === DisconnectReason.multideviceMismatch) {conn.logger.info("multideviceMismatch, Restarting..."); 
            } else if (reason === DisconnectReason.connectionClosed) {conn.logger.info("Connection closed, reconnecting....");
            } else if (reason === DisconnectReason.restartRequired) {conn.logger.info("Restart Required, Restarting...");
            } else if (reason === DisconnectReason.timedOut) {conn.logger.info("Connection TimedOut, Reconnecting...");
            } else conn.logger.error(`Unknown DisconnectReason: ${reason}|${lastDisconnect?.error}`)
            }


    })

    Connection.conns.set(id, conn)
    sendSuccesLoginMessage()
}

handler.tags = ['jadibot']
handler.help = handler.command = ['jadibot2']
handler.limit = true

export default handler