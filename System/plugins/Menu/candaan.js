import fetch from 'node-fetch'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, isPrems, isOwner, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

let urut = text.split`|`
  let one = urut[1]
  let two = urut[2]
  let three = urut[3]
  
let template = (args[0] || '').toLowerCase()
if (!args[0] || !one) {
let caption = `*Contoh Penggunaan Single*
${usedPrefix + command} cecan

*Contoh Penggunaan Multi*
${usedPrefix + command} pinterest |wibu

*List:*
• ${usedPrefix + command} gombal
• ${usedPrefix + command} gombal2
• ${usedPrefix + command} image
• ${usedPrefix + command} image2
`
await conn.sendButtonVid(m.chat, logo, caption, 'Nih.mp4', 'Back', '.menulist', fakes, adReply)
	}
            
if (command) {
switch (template) {
        
            case 'gombal':
        let ab = await fetch('https://candaan-api-h590oa540-ardhptr21.vercel.app/api/text')
        let ac = await ab.json()
    let ad = ac.data
	conn.reply(m.chat, ad.getRandom)
            break
            case 'gombal2':
        let ab2 = await fetch('https://candaan-api-h590oa540-ardhptr21.vercel.app/api/text/random')
        let ac2 = await ab2.json()
    let ad2 = ac2.data
	conn.reply(m.chat, ad2)
            break
            case 'image':
        let bb = await fetch('https://candaan-api-h590oa540-ardhptr21.vercel.app/api/image')
        let bc = await bb.json()
    let bd = bc.data
	let be = Object.values(bd).map((v, index) => ({
		title: '📌 ' + v.ayat,
		description: '\nSourcw: ' + v.source + '\nLink: ' + v.url,
		rowId: usedPrefix + 'get ' + v.url
	}))
	let bf = {
		buttonText: `☂️ ${args[0]} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${args[0]} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: set.wm
	}
	return await conn.sendListM(m.chat, bf, be, m)
            case 'image2':
        let puk = 'https://candaan-api-h590oa540-ardhptr21.vercel.app/api/image/random'
        let ima = await fetch(puk)
        let kes = await ima.json()
        conn.sendButton(m.chat, 'Nih.jpg', kes.source, kes.url, ['To Sticker', '.s'], fakes, adReply)
            break
            
            
}
}
}
handler.help = ['cand <command> <teks>']
handler.tags = ['tools'] 
handler.command = /^cand$/i
export default handler

