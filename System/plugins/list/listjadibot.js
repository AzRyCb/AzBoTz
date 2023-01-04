import Connection from '../../lib/connection.js'

let handler = async (m, { conn, usedPrefix }) => {
    let users = [...Connection.conns.entries()].filter(([_, conn]) => conn.user?.id).map(([_, conn]) => conn.user)
    if (!users.length) return m.reply(`Halo, *${m.name}*
Saat ini belum ada partner bot yang dijalankan pada server ${set.name}`)
    conn.reply(m.chat, `List Jadibot *${Connection.conn.user.name}*\nTotal *${users.length}* user 👥\n\n` + users.map(v => 'wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}menu\n(${v.name})`).join('\n\n'))
}
handler.help = ['listjadibot']
handler.tags = ['jadibot']
handler.command = /^listbot|listjadibot$/i
export default handler
