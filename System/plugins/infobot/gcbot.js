import fetch from 'node-fetch'
let handler = async (m, { conn, command, usedPrefix }) => {
conn.sendButton(m.chat, set.gcbot, set.wm, await(await fetch(set.qrgc)).buffer(), [['menu', `${usedPrefix}`]], m) 
//conn.reply(m.chat, set.gcbot) 
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^(gcbot|gcazbotz|grupbot|groupbot|botgroup)$/i

export default handler
