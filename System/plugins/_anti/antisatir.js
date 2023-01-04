import db from '../../lib/database.js'
const isSatir = /(([Kk]enao|[Bb]ims|[Aa]v)a|tumlul|Tumlul|[Gg]wejh|[Oo]kgey|[Ss]iava|[Kk]avan|tenan|[Aa](msu|f[ah])|[Mm]gak|lmao|[Pp]edo|([Bb]an|hoo)h|[Kk]nf)/i // tambahin sendiri

export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
let chat = db.data.chats[m.chat]
let bot = db.data.settings[this.user.jid] || {}
const isAntiSatir = isSatir.exec(m.text)

if (chat.antiSatir && isAntiSatir) {
    if (m.isBaileys && m.fromMe) return !0
    if (!m.isGroup) return !1
        conn.sendButton(m.chat, `*Kata Satir Terdeteksi!* ${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, wm, ['off antisatir', '/disable antisatir'], fakes, adReply)
        if (isBotAdmin && bot.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    db.data.users[m.sender].warn += 1
    //db.data.users[m.sender].banned = true
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        } else if (!bot.restrict) return conn.reply(m.chat, 'Biar ngapa kek gitu!')
    }
    return !0
}