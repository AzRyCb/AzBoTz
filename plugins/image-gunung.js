import fetch from "node-fetch";
let handler = async (m, usedPrefix, command) => {
 let g = await fetch(`https://raw.githubusercontent.com/inirey/RESTAPI/master/data/Mountain.json`)
let f = await g.json()
let a = f[Math.floor(Math.random() * f.length)]
conn.sendButton(m.chat, 'Nih kak', wm, a, [['Next', `${usedPrefix}${command}`]])
}
handler.help = ['gunung']
handler.tags = ['image']
handler.command = /^gunung$/i

export default handler