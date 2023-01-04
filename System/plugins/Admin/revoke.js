let handler = async (m, { conn }) => {
  conn.reply(m.sender, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(m.chat), m)
}
handler.help = ['revoke']
handler.tags = ['admin']
handler.command = /^re(voke|new)(invite|link)?$/i

handler.botAdmin = handler.group = handler.admin = true

export default handler
