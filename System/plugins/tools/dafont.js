import { dafontSearch, dafontDown } from '../../lib/scrape.js'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw 'Harap Masukan Query'
  if (command == 'dafonts') {
    let res = await dafontSearch(text)
	let row = Object.values(res).map((v, index) => ({
		title: v.judul,
		description: '\n⌚ style: ' + v.style + '\n⏲️ total: ' + v.total + '\n📎 link: ' + v.link,
		rowId: usedPrefix + 'dafontsdown ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: set.wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'dafontsdown') {
let res = await dafontDown(text)
let row = Object.values(res).map((v, index) => ({
		title: v.judul,
		description: '\n⌚ style: ' + v.style + '\n⏲️ isi: ' + v.isi + '\n⏲️ output: ' + v.output + '\n📎 down: ' + v.down,
		rowId: usedPrefix + 'get ' + v.down
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Silakan pilih apkpure ${command} di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: set.wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

}
handler.tags = ['tools']
handler.command = /^(dafont|dafonts|dafontsdown)$/i
handler.limit = true

export default handler