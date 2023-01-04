import fetch from 'node-fetch'
import {ttdownloader, chara} from 'hxz-api'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, isPrems, isOwner, command }) => {

if (command == 'tthnowm') {
if (!text) return m.reply(`Example: ${usedPrefix + command} https://vt.tiktok.com/ZSenkFefe`)

let p = await ttdownloader(text)
let { nowm, wm, audio } = p
conn.sendFile(m.chat, nowm, null, 'No Wm', m)
}
if (command == 'tthwm') {
if (!text) return m.reply(`Example: ${usedPrefix + command} https://vt.tiktok.com/ZSenkFefe`)

let p = await  ttdownloader(text)
let { nowm, wm, audio } = p
conn.sendFile(m.chat, wm, null, 'Wm', m)
}
if (command == 'tthaudio') {
if (!text) return m.reply(`Example: ${usedPrefix + command} https://vt.tiktok.com/ZSenkFefe`)

let p = await  ttdownloader(text)
let { nowm, wm, audio } = p
conn.sendFile(m.chat, audio, null, 'Audio', m)
}
/*
if (command == 'ttbnowm') {
if (!text) return m.reply(`Example: ${usedPrefix + command} https://vt.tiktok.com/ZSenkFefe`)
let res = await fetch(`https://rest-beni.herokuapp.com/api/tiktok?url=${text}`)
let v = await res.json()
conn.sendFile(m.chat, v.result.nowm, null, 'No Wm', m)
}
if (command == 'ttbwm') {
if (!text) return m.reply(`Example: ${usedPrefix + command} https://vt.tiktok.com/ZSenkFefe`)
let res = await fetch(`https://rest-beni.herokuapp.com/api/tiktok?url=${text}`)
let v = await res.json()
conn.sendFile(m.chat, v.result.wm, null, 'Wm', m)
}
if (command == 'ttbaudio') {
if (!text) return m.reply(`Example: ${usedPrefix + command} https://vt.tiktok.com/ZSenkFefe`)
let res = await fetch(`https://rest-beni.herokuapp.com/api/tiktok?url=${text}`)
let v = await res.json()
conn.sendFile(m.chat, v.result.audio, null, 'Audio', m)
}
*/
if (command == 'chara') {
let p = await  chara(text)
conn.sendFile(m.chat, p.result, null, 'Chara', m)
}

}
//handler.command = handler.help = ['tthnowm', 'tthwm', 'tthaudio', 'ttbnowm', 'ttbwm', 'ttbaudio', 'chara']
handler.command = handler.help = ['tthnowm', 'tthwm', 'tthaudio', 'chara']
handler.tags = ['downloader']

export default handler