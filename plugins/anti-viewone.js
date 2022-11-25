let { downloadContentFromMessage } = (await import('@adiwajshing/baileys'));
import fetch from 'node-fetch'
import db from '../lib/database.js'

export async function before(m) {
 
let chat = db.data.chats[m.chat]
    if (!chat.viewonce) return
    if (m.mtype == 'viewOnceMessage') {
        let msg = m.message.viewOnceMessage.message
        let type = Object.keys(msg)[0]
        let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
        let buffer = Buffer.from([])
        for await (const chunk of media) {
            buffer = Buffer.concat([buffer, chunk])
        }
        if (/video/.test(type)) {
            return this.sendFile(m.chat, buffer, wm, msg[type].caption || '', m, null, fakefb)
            throw '[View Once Video] Detected'
            
        } else if (/image/.test(type)) {
            return this.sendFile(m.chat, buffer, wm, msg[type].caption || '', m, null, fakefb)
            throw '[View Once Image] Detected'
        }
    }
}
