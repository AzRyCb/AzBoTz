const isToxic = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole|a(su|sw|syu)/i // tambahin sendiri
import db from '../../lib/database.js'
export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {

let chat = db.data.chats[m.chat]
let bot = db.data.settings[this.user.jid] || {}
const isAntiToxic = isToxic.exec(m.text)
    
if (chat.antiToxic && isAntiToxic) {
    if (m.isBaileys && m.fromMe) return !0
    if (!m.isGroup) return !1
        conn.sendButton(m.chat, `*Kata Kasar Terdeteksi!* ${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, 'Utamakan kesopanan dalam mengetik', ['off antitoxic', '.off antitoxic'], fakes, adReply)
        if (isBotAdmin && bot.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    db.data.users[m.sender].warn += 1
    //db.data.users[m.sender].banned = true
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id:  m.key.id, participant: m.key.participant }})
        } else if (!bot.restrict) return conn.reply(m.chat, 'bertaubatlah sebelum kematian')
    }
    return !0
}