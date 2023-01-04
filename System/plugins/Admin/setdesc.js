let handler = async (m, { conn, text }) => {
  if (text) {
    conn.groupUpdateDescription(m.chat, text)
  await conn.reply(m.chat, `Description group now changed !`)
  } else throw 'where text to change desc group?'
}
handler.help = ['setdesc', 'setdesk'].map(v => "<teks>" + v)
handler.tags = ['admin']
handler.command = /^set(desk)?(desc)$/i

handler.botAdmin = handler.group = handler.admin = true

export default handler
