
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
if (!args[0]) throw `Masukkan paramenter
List:
kanji
words
reading`
if (!args[1]) throw `Masukkan teks atau kanji`
let tes = args[1].replaceAll(' ','').replaceAll('\n','').split('')
let pesan = `*Result :*`

  if (args[0] == 'kanji') {
	for (let x of tes) {
		let res = await fetch('https://kanjiapi.dev/v1/' + args[0] + '/' + encodeURIComponent(x))
		let json = await res.json()
		let { kanji, grade, stroke_count, meanings, kun_readings, on_readings, name_readings, jlpt, unicode, heisig_en } = json
		pesan += `\n\nKanji : ${kanji}\n`
		pesan += `Arti : ${meanings}\n`
		pesan += `Kun-Reading : ${kun_readings}\n`
		pesan += `On-Reading : ${on_readings}\n`
		pesan += `Name Reading : ${name_readings}\n`
		pesan += `grade : ${grade}, stroke : ${stroke_count}, JLPT : ${jlpt}\n`
		pesan += `${set.cmenuf}`
	}
	await conn.sendPayment(m.chat, set.fsizedoc, 'USD', pesan, m.sender, await conn.resize(set.logo, 300, 150), m)
    }
  if (args[0] == 'words') {
  let res = await fetch('https://kanjiapi.dev/v1/' + args[0] + '/' + encodeURIComponent(tes))
  let json = await res.json()
  for (let i = 0; i < json.length; i++) {
	let row = Object.values(json).map((v, index) => ({
		title: index + ' ' + v.variants[i].written,
		description: '\nWritten ' + v.variants[i].written + '\nPronounced ' + v.variants[i].pronounced + '\nMeanings ' + (Array.from(v.meanings[i].glosses)),
		rowId: usedPrefix + 'tts ' + v.variants[i].written
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: set.wm
	}
	return conn.sendListM(m.chat, button, row, m)
	}
	}
  if (args[0] == 'reading') {
	for (let x of tes) {
		let res = await fetch('https://kanjiapi.dev/v1/' + args[0] + '/' + encodeURIComponent(x))
		let json = await res.json()
		let { reading, main_kanji, name_kanji } = json
		pesan += `\n\nReading : ${reading}\n`
		pesan += `Main Kanji : ${main_kanji}\n`
		pesan += `Name Kanji : ${name_kanji}\n`
		pesan += `${set.cmenuf}`
	}
	await conn.sendPayment(m.chat, set.fsizedoc, 'USD', pesan, '0@s.whatsapp.net', set.logo, m)
    }
}
handler.help = ['kanji'].map(v => v + ' <kanji>')
handler.tags = ['internet']
handler.command =/^(kanji)$/i

export default handler