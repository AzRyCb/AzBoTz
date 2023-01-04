import fetch from 'node-fetch'
let handler = async(m, {
	conn, text, usedPrefix, command, args
}) => {

	if (args.length > 14) throw 'Nomor Kepanjangan'
	if (args.length < 7) throw 'Nomor Kependekan'
	if (args[0].startsWith('0')) throw 'Gunakan format 62'
	if (!args[0]) throw 'Masukkan Teks'
	
    let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[0] ? (args[0].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
	let txt = (args.length > 1 ? args.slice(1).join(' ') : '') || ''
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	let tujuan = `👋 Saya *${conn.user.name}*, Pesan Untuk Kamu
👥 Dari : *PENGIRIM RAHASIA*

${set.htki} 💌 Pesan ${set.htka}
${set.htjava} ${txt}
`
	let cap = `${set.htki} PESAN RAHASIA ${set.htka}
Anda Ingin Mengirimkan Pesan ke pacar/sahabat/teman/doi/
mantan?, tapi Tidak ingin tau siapa Pengirimnya?
Kamu bisa menggunakan Bot ini
Contoh Penggunaan: ${usedPrefix + command} ${set.nomorown} pesan untuknya

Contoh: ${usedPrefix + command} ${set.nomorown} hai`
	if (!m.quoted) {
		await conn.sendButton(mention, tujuan, cap, null, [['Menu', '/menu']], m)
	} else {
		await conn.sendButton(mention, tujuan, cap, null, [['Menu', '/menu']], m)
		let media = q ? await m.getQuotedObj() : false || m
		await conn.copyNForward(mention, media, false).catch(_ => _)
	}
	let suks = `Mengirim Pesan *${mime ? mime : 'Teks'}*
👥 Dari : @${m.sender.replace(/@.+/, '')}
👥 Untuk : @${mention.replace(/@.+/, '')}

${set.htki} 💌 Pesan ${set.htka}
${set.htjava} ${txt}
`
	await conn.sendButton(m.chat, suks, set.wm, null, [['Menu', '/menu']], m, { mentions: conn.parseMention(suks) })
}
handler.help = ['menfess <pesan>']
handler.tags = ['pribadi']
handler.command = /^(men(fess?|cret)|chat)$/i
export default handler
