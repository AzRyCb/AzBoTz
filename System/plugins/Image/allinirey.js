import fetch from "node-fetch";

let handler = async (m, { conn, usedPrefix, command }) => {
let g = await fetch(`https://raw.githubusercontent.com/inirey/RESTAPI/master/data/${command}.json`)
let f = await g.json()
let a = f[Math.floor(Math.random() * f.length)]
conn.sendButton(m.chat, set.caption, set.wm, a, [['Next', `${usedPrefix}${command}`]], m)
}
handler.help = ['deidara', 'Mountain', 'hekel', 'Islamic']
handler.tags = ['image']
handler.command = /^deidara|Mountain|hekel|Islamic$/i

export default handler