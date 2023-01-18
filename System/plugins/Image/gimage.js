import fetch from 'node-fetch'
import { googleImage } from '@bochilteam/scraper'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
if (!text) return conn.reply(m.chat, `Example : ${usedPrefix + command} query`)
let url = `https://api.lolhuman.xyz/api/gimage2?apikey=${set.lolkey}&query=${text}`
let js = await fetch(url)
let jp = await js.json()
let x = jp.result
const res = await googleImage(text)

if (command == 'image') {
let cari = ['https://api.lolhuman.xyz/api/gimage?apikey=' + set.lolkey + '?query=' + text,
x.getRandom(),
res.getRandom()]
let listSections = []
	Object.keys(cari).map((v, index) => {
	listSections.push([' [ IMAGE ' + ++index + ' ]', [
          ['Get: ' + cari[v].slice(8, 1), usedPrefix + 'imageget ' + cari[v], set.wm]
        ]])
	})
	return conn.sendList(m.chat, set.htki + ' 📺 [ IMAGE ] 🔎 ' + set.htka, 'SEARCH', set.wm, 'P I L I H', listSections, m)
	}
if (command == 'imageget') {
    await conn.sendButton(m.chat, `
*── 「 IMAGE 」 ──*
`.trim(), set.wm, text, [
      ['Next', usedPrefix + 'image ' + text]
    ], m)
}

}
handler.help = handler.command = ['image', 'imageget', 'gimage']
handler.tags = ['image']

export default handler