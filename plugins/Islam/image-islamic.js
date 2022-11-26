import fetch from "node-fetch";
let handler = async (m, usedPrefix, command) => {
 let g = await fetch(`https://raw.githubusercontent.com/inirey/RESTAPI/master/data/Islamic.json`)
let f = await g.json()
let a = f[Math.floor(Math.random() * f.length)]
this.sendButton(m.chat, 'Nih kak', wm, a, [['Next', `${usedPrefix}${command}`]])
}
handler.help = ['islamic']
handler.tags = ['image']
handler.command = /^islamic$/i

export default handler