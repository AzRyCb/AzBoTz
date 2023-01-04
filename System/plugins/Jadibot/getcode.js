import Connection from '../../lib/connection.js'
let handler = async (m, { conn, usedPrefix }) => {
  if (Connection.conn.user.jid == conn.user.jid) conn.reply(m.chat, 'Command ini hanya untuk yang jadi bot', m)
  else conn.reply(conn.user.jid, `${usedPrefix}jadibot ${Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64')}`, m)
}
handler.help = ['getcode']
handler.tags = ['jadibot']
handler.command = /^(getcode)$/i

handler.private = true


export default handler