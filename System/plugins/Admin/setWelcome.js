import db from '../../lib/database.js'
let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) conn.welcome = text
    else if (isOwner) conn.welcome = text
    else db.data.chats.sWelcome = text
    conn.reply(m.chat, 'Welcome berhasil diatur\n@user (Mention)\n@subject (Judul Grup)')
  } else throw 'Teksnya mana?'
}
handler.help = ['setwelcome <teks>']
handler.tags = ['admin']
handler.command = /^setwelcome$/i

handler.group = handler.admin = true

export default handler
