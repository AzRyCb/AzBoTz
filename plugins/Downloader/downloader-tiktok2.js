import { tiktokdl } from '@bochilteam/scraper'
import { aiovideodl } from '../lib/scrape.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
try {
    const { wm: { nickname }, video, description } = await tiktokdl(args[0])
    const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
let caption = `*Nickname:* ${nickname}
*Description:* ${description}`
  conn.sendButtonVid(m.chat, url, caption, wm, 'To mp3', '.tomp3', fakes, adReply)
} catch {
const { res } = await aiovideodl(args[0])
    const urll = res.data.url
    if (!urll) throw 'Can\'t download video!'
let caption = `*Nickname:* ${wm}`
  conn.sendButtonVid(m.chat, urll, caption, wm, 'To mp3', '.tomp3', fakes, adReply)
}
}
handler.help = ['tiktok2'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^t(iktok(d(own(load(er)?2|2)|l2)|2)|td(own(load(er)?2|2)|l2))$/i

export default handler