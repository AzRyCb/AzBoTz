const { API } = (await import('../../lib/helper.js')).default 
let handler = async (m, { conn, text }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  await conn.sendFile(m.chat, API('xteam', '/videomaker/glowing', { text: teks }, 'apikey'), 'glowing.mp4', teks, m)
}
handler.help = ['glowing'].map((v) => v + " <text>")
handler.tags = ['maker']
handler.command = /^glowing$/i

export default handler