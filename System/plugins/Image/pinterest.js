import fetch from 'node-fetch'
import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
    let type = (args[0] || '').toLowerCase()
    let urut = text.split`|`
    let one = urut[1]
    let caption = `*Hasil pencarian* ${one}`
    if (!text) throw 'Masukkan Teks\nApa yang kamu cari?'
  
const sections = [
    {
	title: set.htjava + ' List Pinterest Search ' + set.htjava,
	rows: [
{title: set.emojis + " Powered By api.lolhuman.xyz", rowId: usedPrefix + command + ' pinterest |' + text},
{title: set.emojis + " Powered By bochilteam", rowId: usedPrefix + command + ' pinterest1 |' + text},
{title: set.emojis + " Powered By api.lolhuman.xyz", rowId: usedPrefix + command + ' pinterest2 |' + text},
{title: set.emojis + " Powered By api.vhtear.com", rowId: usedPrefix + command + ' pinterest3 |' + text},
{title: set.emojis + " Powered By violetics.pw", rowId: usedPrefix + command + ' pinterest4 |' + text}
	]
    }
]

const listMessage = {
  text: '👋 Hai, ' + name + ' ' + set.ucapan + '\n⚡ Silakan pilih pencarian di bawah...',
  footer: set.wm,
  title: `${set.htki} ${command} ${set.htka}`,
  buttonText: `☂️ Klik Disini ☂️`,
  sections
}

               if (/pinterest|pin/i.test(command)) {
          switch (type) {
case 'pinterest':
let js0 = await fetch(`https://api.lolhuman.xyz/api/pinterest?apikey=${set.lolkey}&query=${one}`)
let jp0 = await js0.json()
let x0 = jp0.result
await conn.sendButton(m.chat, caption, set.wm, x0, [
      ['Pinterest', usedPrefix + command + ' ' + one]
    ], fakes)
    break

case 'pinterest1':
let js6 = await pinterest(one)
  await conn.sendButton(m.chat, caption, set.wm, js6.getRandom(), [
      ['Pinterest', usedPrefix + command + ' ' + one]
    ], fakes)
break

case 'pinterest2':
let js7 = await fetch(`https://api.lolhuman.xyz/api/pinterest2?apikey=${set.lolkey}&query=${one}`)
let jp7 = await js7.json()
let x7 = jp7.result
await conn.sendButton(m.chat, caption,set.wm, x7.getRandom(), [
      ['Pinterest', usedPrefix + command + ' ' + one]
    ], fakes)
    break

case 'pinterest3':
let js9 = await fetch(`https://api.vhtear.com/pinterest?query=${one}&apikey=nekobotofficial`)
let jp9 = await js9.json()
let x9 = jp9.result
await conn.sendButton(m.chat, caption, set.wm, x9.getRandom(), [
      ['Pinterest', usedPrefix + command + ' ' + one]
    ], fakes)
break

case 'pinterest4':
let js10 = await fetch(`https://violetics.pw/api/downloader/pinterest2?apikey=beta&url=${one}`)
let jp10 = js10.data
let x10 = jp10.result
await conn.sendButton(m.chat, caption, set.wm, x10, [
      ['Pinterest', usedPrefix + command + ' ' + one]
    ], fakes)
break


                       default:
                        return conn.sendMessage(m.chat, listMessage, {quoted: fakes})
                }
        }
}
handler.help = ['pinterest <query>']
handler.command = /^pin(terest)$/i
handler.tags = ['image']

export default handler