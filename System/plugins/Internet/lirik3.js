import fetch from 'node-fetch'
const { API } = (await import('../../lib/helper.js')).default 
let handler = async (m, { text }) => {
  let res = await fetch(API('https://some-random-api.ml', '/lyrics', {
    title: text
  }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  conn.reply(m.chat, `*${json.title}*
_${json.author}_\n
${json.lyrics}\n\n
${json.links.genius}
`, m)
}
handler.help = ['lirik3'].map(v => v + ' <judul>')
handler.tags = ['internet']
handler.command = /^(lirik3|lyrics3|lyric)3$/i
handler.limit = true

export default handler