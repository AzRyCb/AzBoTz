let handler = async (m, { conn }) => {
    if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
    if (conn.user.jid == conn.user.jid) {
    await conn.reply(m.chat, '```R E S T A R T . . .```')
    process.send('reset')
  } else throw '_eeeeeiiittsssss..._'
}
handler.help = ['restart']
handler.tags = ['host']
handler.command = /^(res(tart)?)$/i

handler.rowner = true

export default handler