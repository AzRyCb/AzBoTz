import db from '../../lib/database.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `gunakan *${usedPrefix}liststore* untuk melihat daftar pesan yg tersimpan.`
	let msgs = db.data.msgs
	if (!(text in msgs)) throw `'${text}' tidak terdaftar di daftar pesan.`
	delete msgs[text]
	conn.reply(m.chat, `\n  [💬] berhasil menghapus pesan di daftar List dengan nama '${text}'.\n`)
}
handler.help = ['list'].map(v => 'del' + v + ' <teks>')
handler.tags = ['store']
handler.command = /^listdel|dellist$/i
handler.group = handler.admin = true

export default handler