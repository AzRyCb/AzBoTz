import db from '../../lib/database.js'
export async function before(m, { conn, isAdmin, isBotAdmin }) {

let chat = db.data.chats[m.chat]
let bot = db.data.settings[this.user.jid] || {}
let regVirtex = /(PLHIPS|৭৭|๑๑|๒๒|[Đৡดผ๖⃝-⃟⃢-⃤㜸])/i
let isVirtexOn = regVirtex.exec(m.text)

if (chat.antiVirtex && isVirtexOn && !m.fromMe) {
    if (m.isBaileys && m.fromMe) return !0
    if (!m.isGroup) return !1
        conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
            await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
            await conn.sendButton(m.chat, `*Font Virtext detect!*${isBotAdmin ? '' : '\n\n_Bot bukan admin_'}`, set.wm, ['off antivirtex', '/disable antivirtex'], m)
        if (isBotAdmin && bot.restrict) {
            conn.reply(m.chat, 'Kick!')
                await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return conn.reply(m.chat, 'Mungkin dia atmin!')
    }
    return !0
}