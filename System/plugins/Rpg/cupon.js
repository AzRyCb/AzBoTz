import db from '../../lib/database.js'
let handler = async ( m, { conn, args, command}) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
    conn.reply(m.chat, `${db.data.users[who].cupon} Your cupon\nCupon ini adalah sebuah hadiah dari owner\n\nCara menggunakan:\n/open cupon 1`)
}
handler.help = ['cupon [@user]']
handler.tags = ['xp']
handler.command = /^(cupon)$/i
handler.limit = true

export default handler
