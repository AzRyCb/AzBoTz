import { snapchat } from "social_media_downloader"
let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (!args[0]) throw 'Masukkan Link'
let p = await snapchat(text)
throw p

  }
handler.help = ['snapchat'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^snap(chat|dl)$/i

export default handler
