import tp from "../../lib/scrape.js"
let  handler = async (m, {
	conn,
	args
}) => {
	var txt = args.join` `
	if (!txt) return conn.reply(m.chat, 'harap masukan teksnya!!!', m)
	if (txt.length > 15) return conn.reply(m.chat, 'maksimal 15', m)
	var a = await tp("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", txt)
	console.log(a)
	try {
		var buffer = await axios.request(a, {
			method: "GET",
			responseType: "arraybuffer",
			headers: {
				"user-agent": "GoogleBot"
			}
		})
		console.log(buffer.status)
		conn.reply(m.chat, "tunggu sebentar")
		conn.sendFile(m.chat, buffer.data, "", "nih bruh", false)
	} catch (e) {
		if (e.response) {
			console.error(e.response.statusText)
			throw "emror bruh"
		}
	}
}
handler.help = ['neonlight [text]']
handler.tags = ['textpro']
handler.command = /^neonlight$/i


export default handler
