import { truth } from '@bochilteam/scraper'

let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, await truth(), set.wm, [
    ['Truth', `${usedPrefix}truth`],
    ['Dare', `${usedPrefix}dare`]
], m)

handler.help = ['truth']
handler.tags = ['fun']
handler.command = /^(truth)$/i

export default handler