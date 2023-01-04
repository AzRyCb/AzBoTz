import finder from 'lyrics-finder'
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} kepastian rasa`
  let error = `Maaf tidak di temukan lirik *${text}*`
  let res = await finder("", text)
  if (!res) throw error

  conn.reply(m.chat, res)
}
handler.help = ['lirik2'].map(v => v + ' <teks>')
handler.tags = ['internet']
handler.command = /^(lirik2|lyrics2|lyric2)$/i
handler.limit = true

export default handler

