import fetch from "node-fetch"
const { API } = (await import('../../lib/helper.js')).default 
let handler = async (m, { conn, command }) => {
  let res = await fetch(API('xteam', '/news/' + command, {}, 'APIKEY'))
  if (res.status != 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
conn.sendFile(m.chat, json.thumb, 'news.jpeg', `
_*${json.judul}*_
_${json.tanggal}_\n
${json.artikel}\n\n
${json.url}
`.trim(),m)
}
handler.help = ['kompas', 'liputan6', 'tribun', 'jalantikus', 'detik']
handler.tags = ['news']
handler.command = /^kompas|liputan6|tribun|jalantikus|detik$/i
handler.limit = true
export default handler
