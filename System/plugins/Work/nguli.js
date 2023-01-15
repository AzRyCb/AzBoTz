import db from '../../lib/database.js'
let handler = async (m, { conn }) => {
    if (new Date - db.data.users[m.sender].lastnguli > 86400000) {
      db.data.users[m.sender].limit += 10
      conn.reply(m.chat, '_Selamat kamu mendapatkan +10 limit_')
      db.data.users[m.sender].lastnguli = new Date * 1
    } else conn.reply(m.chat, 'Anda sudah mengklaim upah nguli hari ini')
  }
  handler.help = handler.command = ['nguli']
  handler.tags = ['work']
  handler.group = true
  
  export default handler