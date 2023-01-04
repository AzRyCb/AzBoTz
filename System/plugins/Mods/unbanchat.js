import db from '../../lib/database.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    db.data.chats[m.chat].isBanned = false
    conn.reply(m.chat,'Done!')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat$/i
handler.rowner = true

export default handler