import { sticker } from '../../lib/sistem.js'
const { API } = (await import('../../lib/helper.js')).default 
let handler = async (m, { conn, text }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    let stiker = await sticker(null, API('xteam', '/ttp', { file: '', text: teks }), set.packname, set.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
handler.help = ['ttp <teks>']
handler.tags = ['sticker']
handler.command = /^ttp$/i

export default handler