let handler = async (m, { conn }) => {
  let res = await conn.groupRevokeInvite(m.chat)
  let gruf = m.chat
  conn.reply(m.sender, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(gruf), m)
}
handler.help = ['revoke']
handler.tags = ['admin']
handler.command = /^re(voke|new)(invite|link)?$/i

handler.botAdmin = handler.group = handler.admin = true

export default handler
