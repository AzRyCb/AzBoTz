import axios from "axios";

let handler = async(m, { conn, text }) => {
    try {
  await conn.reply(m.chat, 'Searching...')

	axios.get(`http://zekais-api.herokuapp.com/tahlil`).then ((res) => {
	 	let hasil = `*${res.data.title}*\n\n${res.data.arabic}\n\nArtinya :\n${res.data.translate}`

    conn.reply(m.chat, hasil, m)
	})
} catch (e) {
	m.reply('rest api mati')
	conn.reply(set.owner, 'carikan api zekais untuk sholawat')
}
}
handler.help = ['sholawat']
handler.tags = ['islam']
handler.command = /^(sholawat)$/i

export default handler
