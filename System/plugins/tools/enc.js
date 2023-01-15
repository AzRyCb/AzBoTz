import obs from 'obfuscator'

let handler = async (m, { conn, text }) => {
	if (!text) throw 'Mana text nya?'
	let enc = await obs.utils.hex(text)
	conn.reply(m.chat, enc)
}
handler.help = ['enc2', 'encrypt2'].map(v => v + ' <text>')
handler.tags = ['tools']
handler.command = /^(enc2|encrypt2)$/i
export default handler