import fetch from 'node-fetch'
import { sticker } from '../../lib/sistem.js'
import { Sticker, StickerTypes } from 'wa-sticker-formatter'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

let urut = text.split`|`
  let one = urut[0]
  let two = urut[1]

if (command == 'nhentai') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} 344253`
  let gas = await fetch(`https://api.lolhuman.xyz/api/nhentai/${args[0]}?apikey=${set.lolkey}`)
    let json = await gas.json()
    let hasil = json.result.image
	let row = Object.keys(hasil).map((v, index) => ({
		title: index + json.result.title_native,
		description: '\n*Color:* ' + json.result.title_romaji + '\n*Slug:* ' + json.result.read + '\n*Description:* ' + Array.from(json.result.tags) + '\n*Image:* ' + hasil[v],
		rowId: usedPrefix + 'get ' + hasil[v]
	}))
	let button = {
		buttonText: `☂️ ${command} Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: set.wm
	}
	return await conn.sendListM(m.chat, button, row, m)

}
/*
if (command == 'hmtai') {

let links = 'https://hmtai.herokuapp.com/'
try {
  let gas = await fetch(links + 'endpoints')
let listSections = []
let json = await gas.json()
let xfw = json['/sfw']
let nxfw = json['/nsfw']
	Object.keys(xfw, nxfw).map((v, index) => {
	listSections.push(['HMTAI ' + index, [
          ['SFW ' + xfw[v], usedPrefix + 'gethmtai ' + links + 'sfw/' + xfw[v]],
          ['NSFW ' + nxfw[v], usedPrefix + 'gethmtai ' + links + 'nsfw/' + nxfw[v]]
        ]])
	})
	return conn.sendList(m.chat, set.htki + ' 📺 HMTAI Search 🔎 ' + set.htka, `⚡ Silakan pilih HMTAI Search di tombol di bawah...`, set.wm, `☂️ HMTAI Search Disini ☂️`, listSections, m)
} catch (e) {
m.reply('Error kan')
console.error(e)
}
}
*/
if (command == 'gethmtai') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} url`
let gas = await fetch(args[0])
let json = await gas.json()
try {
let stiker = await sticker(null, json.url, set.packname, set.author)
  if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', fakes, adReply, { asSticker: true })
  throw stiker.toString()
							} catch {
				const stek = new Sticker(json.url, { pack: set.packname, author: set.author, type: StickerTypes.FULL })
				const buffer = await stek.toBuffer()
				conn.sendFile(m.chat, buffer, 'sticker.webp', '', fakes, adReply, { asSticker: true })
			}

}

if (command == 'nhentaipdf') {
if (!text) throw 'Masukkan Kode Hentai'
let tobat = 'https://pdf.lolhuman.xyz/download/' + text + '.pdf'
await conn.sendMessage(m.chat, {document: { url: tobat }, mimetype: 'application/pdf', fileName: `${text}.pdf`}, {quoted:fakes})
}

if (command == 'apiksearch') {
if (!text) throw `Masukin Text sebagai Judul !!`
    let res = await fetch(`https://api-xcoders.xyz/api/filmapik/search?query=${text}&apikey=xcoders`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let keqing = json.result.map((v, i) => `#${i + 1}. \n*Title:* ${v.title}\n*rating:* ${v.rating}\n*Link Url:* ${v.url}\n*Deskrisi:* ${v.description}\n\n`).join('\n') 
    if (json.status) await
conn.reply(m.chat, keqing, fakes)
    else throw json
    }

if (command == 'apiktren') {
    let res = await fetch(`https://api-xcoders.xyz/api/filmapik/trending?apikey=xcoders`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let keqing = json.result.map((v, i) => `#${i + 1}. \n*Title:* ${v.title}\n*Rsting:* ${v.info}\n*Link:* ${v.url}\n\n`).join('\n') 
    if (json.status) await
conn.reply(m.chat, keqing, fakes)
    else throw json
    }

if (command == 'lk21ftv') {
    let res = await fetch(`https://api-xcoders.xyz/api/lk21/ftv?apikey=xcoders`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let keqing = json.result.map((v, i) => `${i + 1}. \n*Judul:* ${v.title}\n*Link:* ${v.url}\n\n`).join('\n') 
    if (json.status) await conn.reply(m.chat, keqing, fakes)
    else throw json
    }
    
if (command == 'lk21search') {
    if (!text) throw `Masukin Text sebagai Judul !!`
    let res = await fetch(`https://api-xcoders.xyz/api/lk21/search?query=${text}&apikey=xcoders`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let keqing = json.result.map((v, i) => `#${i + 1}. \n*Title:* ${v.title}\n*Genre:* ${v.genre}\n*rating:* ${v.rating}\n*Link Url:* ${v.url}\n\n`).join('\n') 
    if (json.status) await
conn.reply(m.chat, keqing, fakes)
    else throw json
    }
    
if (command == 'idfreefire') {
    let res = await fetch(API('xteam', '/search/freefire', {id: args[0]}, 'APIKEY'))
  let json = await res.json()
  if (json.result.name) m.reply(`\nNama : ${json.result.name}\nID : ${args[0]}\n`)
    else throw `Error!\n\n${json}`
    }

    if (command == 'artinama') {
      let res = await fetch(`https://api.lolhuman.xyz/api/artinama?apikey=${set.lolkey}&nama=${text}`)
        let x = await res.json()
        await conn.sendButton(m.chat, `*Artinama:*
        ${x.result}`, set.wm, null, [
                      ['Next', `${usedPrefix + command}`],
                      ['Translate', `${usedPrefix}tr id ${x.result}`]
                  ], m)
      }

}
//handler.command = handler.help = ['nhentaipdf', 'nhentai', 'hmtai', 'gethmtai', 'apiksearch', 'apiktren', 'lk21ftv', 'lk21search', 'idfreefire']
handler.command = handler.help = ['nhentaipdf', 'nhentai', 'gethmtai', 'apiksearch', 'apiktren', 'lk21ftv', 'lk21search', 'idfreefire', 'artinama']
handler.tags = ['internet']

export default handler