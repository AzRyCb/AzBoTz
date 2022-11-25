let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (!text) throw "gimme a name grup"
  await conn.groupUpdateSubject(m.chat, text)
 m.reply(`${text ? `${text}` : 'None'} Now is name this groups`)
}
handler.help = ['setname <teks>']
handler.tags = ['admin']
handler.command = /^setname$/i

handler.botAdmin = handler.group = handler.admin = true

export default handler
