let handler = async (m, { conn, text }) => {
  if (!text) throw "gimme a name grup"
  conn.groupUpdateSubject(m.chat, text)
 await conn.reply(m.chat, `${text ? `${text}` : 'None'} Now is name this groups`)
}
handler.help = ['setnamegc <teks>']
handler.tags = ['admin']
handler.command = /^setnamegc$/i

handler.botAdmin = handler.group = handler.admin = true

export default handler
