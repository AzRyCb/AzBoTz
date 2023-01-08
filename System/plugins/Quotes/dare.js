import { dare } from '@bochilteam/scraper'

let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, await dare(), set.wm, [
    ['Dare', `${usedPrefix}dare`], 
    ['Truth', `${usedPrefix}truth`]
], m)

handler.help = ['dare']
handler.tags = ['fun']
handler.command = /^(dare)$/i

export default handler
