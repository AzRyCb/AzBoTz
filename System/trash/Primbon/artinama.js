
import axios from "axios"

let handler = async (m, {
	conn,
	text,
	command,
	usedPrefix
}) => {
	if (!text) throw `*masukan namanya...*\n*example*\n*${usedPrefix+command} benny*`
	var a = await axios.request("https://rest-beni.herokuapp.com/api/artinama?nama=" + text, {
		method: "GET"
	})
	m.reply(`${a.data.result}`)
}

handler.help = ['artinama [nama]']
handler.tags = ['primbon']
handler.command = /^artinama/i

export default handler