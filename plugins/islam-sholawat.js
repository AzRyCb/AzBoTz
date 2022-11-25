import axios from "axios";

let handler = async(m, { conn, text }) => {

  await m.reply('Searching...')

	axios.get(`http://zekais-api.herokuapp.com/tahlil`).then ((res) => {
	 	let hasil = `*${res.data.title}*\n\n${res.data.arabic}\n\nArtinya :\n${res.data.translate}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['sholawat']
handler.tags = ['islam']
handler.command = /^(sholawat)$/i

export default handler
