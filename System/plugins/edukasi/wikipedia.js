import { wikipedia } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
try {
  if (!text) throw `Contoh penggunaan ${usedPrefix}${command} Minecraft`
  let json = await wikipedia(text)
  m.reply(`
*${json.title}*
_Gambar:_ ${json.img}

${json.articles}
`.trim())
} catch (e) {
conn.reply(m.chat, "Not found")
 }
}
handler.help = ['wikipedia'].map(v => v + ' <apa>')
handler.tags = ['edukasi']
handler.command = /^(wiki|wikipedia)$/i

export default handler
