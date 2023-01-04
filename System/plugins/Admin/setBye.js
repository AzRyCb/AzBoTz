import db from '../../lib/database.js'
let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) conn.bye = text
    else if (isOwner) conn.bye = text
    else db.data.chats.sBye = text
    conn.reply(m.chat, 'Bye berhasil diatur\n@user (Mention)')
  } else throw 'Teksnya mana?'
}
handler.help = ['setbye <teks>']
handler.tags = ['admin']
handler.command = /^setbye$/i

handler.botAdmin = handler.group = handler.admin = true

export default handler
