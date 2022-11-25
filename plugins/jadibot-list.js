import Connection from '../lib/connection.js'
import ws from 'ws'
let handler = async (m, { conn, usedPrefix }) => {
    const users = [...new Set(
        [...Connection.conns.entries()]
            .filter(([_, conn]) => conn.user?.id && conn.ws.readyState === ws.OPEN)
            .map(([_, conn]) => conn.user)
    )]
    if (!users.length) return m.reply(`Belum ada cabang di bot ${conn.user.name}`)
    m.reply(`List Cabang *${Connection.conn.user.name}*\nTotal: *${users.length}* users\n\n` + users.map(v => 'wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}menu\n(${v.name})`).join('\n'))
}

handler.help = ['listjadibot']
handler.tags = ['jadibot']
handler.command = /^listjadibot$/i
handler.limit = true

export default handler