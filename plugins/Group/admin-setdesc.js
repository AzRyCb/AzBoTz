let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    await conn.groupUpdateDescription(m.chat, text)
  m.reply(`Description group now changed !`)
  } else throw 'where text to change desc group?'
}
handler.help = ['setdesc', 'setdesk'].map(v => "<teks>" + v)
handler.tags = ['admin']
handler.command = /^set(desk)?(desc)$/i

handler.botAdmin = handler.group = handler.admin = true

export default handler
