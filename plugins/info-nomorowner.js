let handler = async (m)  => {
  const data = set.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['nomorowner']
handler.tags = ['info']
handler.command = /^nomorowner$/i

export default handler
