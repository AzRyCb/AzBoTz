import db from '../../lib/database.js'
let handler = (m, { conn, command, args, usedPrefix }) => {
    let totalreg = Object.keys(db.data.users).length
    let rtotalreg = Object.values(db.data.users).filter(user => user.registered == true).length
    conn.reply(m.chat, `*Jumlah pengguna database saat ini adalah ${totalreg} dari ${rtotalreg} user*`)
}
handler.help = ['database']
handler.tags = ['info']
handler.command = /^(database|jumlahdatabase|user)$/i
handler.limit = true

export default handler
