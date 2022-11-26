import axios from "axios";
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan No Telpon yang akan di SpamSms!\n\nMisal : !spamsms 123457890', m)

	axios.get(`https://arugaz.herokuapp.com/api/spamsms?no=${text}&jum=20`).then ((res) => {
	 	let hasil = `${res.data.logs}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['spamsms'].map(v => v + ' <no hp>')
handler.tags = ['premium']
handler.command = /^(spamsms)$/i

handler.premium = true
handler.limit = true

export default handler