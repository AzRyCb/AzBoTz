import db from '../lib/database.js'
import fetch from 'node-fetch'

export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = db.data.chats[m.chat]
    let bot = db.data.settings[this.user.jid] || {}
    if (chat.simi) {
        let api = await fetch(`https://api.simsimi.net/v2/?text=${m.text}&lc=id`)
  let res = await api.json()
  m.reply(`*Simi:* ${res.success}`)
    }
}
