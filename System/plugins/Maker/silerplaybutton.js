import axios from 'axios';
const { API } = (await import('../../lib/helper.js')).default 

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
    conn.reply(m.chat, 'ᴘʀᴏꜱᴇꜱ...')
    const response = await axios.get(API('https://api.lolhuman.xyz', '/api/ephoto1/silverplaybutton', { apikey: set.lolkey, text: text })).catch(() => { throw response.data })
    await conn.sendFile(m.chat, response.data, 'Reina.jpg', 'ꜱᴜᴅᴀʜ ᴊᴀᴅɪ', m)
}
handler.help = ['SilverButton', 'spb'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(SilverButton|sb)$/i
handler.limit = true
export default handler