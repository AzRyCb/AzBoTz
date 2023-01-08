let handler = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  const data = set.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['nomorowner']
handler.tags = ['info']
handler.command = /^nomorowner$/i

export default handler
