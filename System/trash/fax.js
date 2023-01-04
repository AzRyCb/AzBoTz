import fetch from 'node-fetch'

import uploadFile from '../../lib/uploadFile.js'
import uploadImage from '../../lib/uploadImage.js'
import { webp2png } from '../../lib/sistem.js'
import { Sticker, StickerTypes } from 'wa-sticker-formatter'

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
• ${usedPrefix + command} alkitabsearch
• ${usedPrefix + command} animeidsearch
• ${usedPrefix + command} asupanloli
• ${usedPrefix + command} asupan
• ${usedPrefix + command} china
• ${usedPrefix + command} hijab
• ${usedPrefix + command} indon
• ${usedPrefix + command} japan
• ${usedPrefix + command} korea
• ${usedPrefix + command} ahegao
• ${usedPrefix + command} anal
• ${usedPrefix + command} ass
• ${usedPrefix + command} bdsm
• ${usedPrefix + command} blowjob
• ${usedPrefix + command} cuckold
• ${usedPrefix + command} cum
• ${usedPrefix + command} ecchi
• ${usedPrefix + command} ero
• ${usedPrefix + command} eroyuri
• ${usedPrefix + command} feet
• ${usedPrefix + command} femdom
• ${usedPrefix + command} foot
• ${usedPrefix + command} futanari
• ${usedPrefix + command} gangbang
• ${usedPrefix + command} glasses
• ${usedPrefix + command} hentai
• ${usedPrefix + command} hntgifs
• ${usedPrefix + command} holo
• ${usedPrefix + command} holoero
• ${usedPrefix + command} jahy
• ${usedPrefix + command} kuni
• ${usedPrefix + command} loli2
• ${usedPrefix + command} loli
• ${usedPrefix + command} manga
• ${usedPrefix + command} masturbation
• ${usedPrefix + command} milf
• ${usedPrefix + command} neko
• ${usedPrefix + command} orgy
• ${usedPrefix + command} panties
• ${usedPrefix + command} pussy
• ${usedPrefix + command} tentacles
• ${usedPrefix + command} thighs
• ${usedPrefix + command} tits
• ${usedPrefix + command} trap
• ${usedPrefix + command} waifu
• ${usedPrefix + command} yaoi
• ${usedPrefix + command} yuri
• ${usedPrefix + command} zettairyouiki
• ${usedPrefix + command} asupan
• ${usedPrefix + command} pinterest
• ${usedPrefix + command} pinterests
• ${usedPrefix + command} black
• ${usedPrefix + command} bp
• ${usedPrefix + command} breakwall
• ${usedPrefix + command} circuit
• ${usedPrefix + command} fiction
• ${usedPrefix + command} glitch
• ${usedPrefix + command} matrix
• ${usedPrefix + command} neon
• ${usedPrefix + command} neonlight
• ${usedPrefix + command} neonpl
• ${usedPrefix + command} toxic
• ${usedPrefix + command} wanted
`
await conn.sendButtonVid(m.chat, logo, caption, 'Nih.mp4', 'Back', '.menulist', fakes, adReply)
	}
            
try {
if (command) {
switch (template) {
        
            case 'asupan':
    let ad = ['bocil',
'gheayubi',
'hijaber',
'random',
'rikagusriani',
'santuy',
'ukhty']
	let ae = Object.keys(ad).map((v, index) => ({
		title: '📌 ' + (ad[v]).toUpperCase(),
		description: '',
		rowId: usedPrefix + 'get ' + 'https://fax-home.herokuapp.com/api/asupan/' + ad[v] + '?apikey=921a7l9pho2'
	}))
	let af = {
		buttonText: `☂️ ${args[0]} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${args[0]} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: set.wm
	}
	return await conn.sendListM(m.chat, af, ae, m)
            case 'cecan':
    let bd = ['china',
'hijaber',
'indonesia',
'japan',
'korea',
'malaysia',
'random',
'thailand',
'vietnam']
	let be = Object.keys(bd).map((v, index) => ({
		title: '📌 ' + (bd[v]).toUpperCase(),
		description: '',
		rowId: usedPrefix + 'get ' + 'https://fax-home.herokuapp.com/api/cecan/' + bd[v] + '?apikey=921a7l9pho2'
	}))
	let bf = {
		buttonText: `☂️ ${args[0]} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${args[0]} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: set.wm
	}
	return await conn.sendListM(m.chat, bf, be, m)
            case 'oogway':
case 'pikachu':
case 'sadcat':
case 'facts':
case 'biden':
        let nsf = `https://fax-home.herokuapp.com/api/canvas/${args[0]}?text=${one}&apikey=921a7l9pho2`
        conn.sendButtonImg(m.chat, nsf, set.wm, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'facebook':
        let db = await fetch(`https://fax-home.herokuapp.com/api/downloader/facebook?url=${one}&apikey=921a7l9pho2`)
        let dc = await db.json()
    let dd = dc.result.links
	let de = Object.values(dd).map((v, index) => ({
		title: 'quality ' + v.quality + 'type ' + v.type + 'size ' + v.size,
		description: '\ntitle: ' + dc.result.title + '\nthumbnail: ' + dc.result.thumbnail,
		rowId: usedPrefix + 'get ' + v.url
	}))
	let df = {
		buttonText: `☂️ ${args[0]} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${args[0]} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: set.wm
	}
	return await conn.sendListM(m.chat, df, de, m)
            break
            
            case 'pantun':
        let eb = await fetch('https://fax-home.herokuapp.com/api/game/pantun?apikey=921a7l9pho2')
        let ec = await eb.json()
        conn.sendButtonImg(m.chat, logo, ec.result.pantun + '\n' + ec.result.author, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'randomimage':
        let fb = await fetch('https://fax-home.herokuapp.com/api/islamic/randomimage?apikey=921a7l9pho2')
        let fc = await fb.json()
        conn.sendButtonImg(m.chat, fc.result, set.wm, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'ahegao':
case 'bdsm':
case 'blowjob':
case 'cockold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'hentai':
case 'hentaigif':
case 'jahy':
case 'neko':
case 'orgy':
case 'panties':
case 'pussy':
case 'yuri':
        let gb = await fetch('https://fax-home.herokuapp.com/api/nsfw/' + args[0] + '?apikey=921a7l9pho2')
        let gc = await gb.json()
        conn.sendButtonImg(m.chat, gc.result, set.wm, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'butterfly':
case 'carved-wood':
case 'coffee-cup':
case 'flaming':
case 'flower-typography':
case 'harry-potter':
case 'illuminated-metallic':
case 'metallic':
case 'naruto':
case 'night-sky':
case 'picture-of-love':
case 'shadow-sky':
case 'sweet-candy':
case 'under-grass':
let hb = 'https://fax-home.herokuapp.com/api/photooxy/' + args[0] + '?text=' + one + '&apikey=921a7l9pho2'
        conn.sendButtonImg(m.chat, hb, set.wm, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'coffee':
            case 'dadu':
let ib = 'https://fax-home.herokuapp.com/api/random/' + args[0] + '?apikey=921a7l9pho2'
        conn.sendButtonImg(m.chat, ib, set.wm, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'couplepp':
let jb = await fetch('https://fax-home.herokuapp.com/api/random/couplepp?apikey=921a7l9pho2')
let jc = await jb.json()
        conn.sendButtonImg(m.chat, jc.result.female, set.wm, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            conn.sendButtonImg(m.chat, jc.result.male, set.wm, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'ad':
case 'alert':
case 'blur':
case 'greyscale':
case 'gun':
case 'invert':
case 'uncover':
            let a_ = m.quoted ? m.quoted : m
  let b_ = (a_.msg || a_).mimetype || ''
  if (!b_) throw 'No media found'
  let c_ = await a_.download()
  let e_ = new Sticker(c_, { pack: set.packname, author: set.author, type: StickerTypes.FULL })
  let d_
  try {
  if (/webp/g.test(b_)) d_ = await webp2png(c_)
        else if (/image/g.test(b_)) d_ = await uploadImage(c_)
        else if (/video/g.test(b_)) d_ = await uploadFile(c_)
        else if (/viewOnce/g.test(b_)) d_ = await uploadFile(c_)
        if (typeof d_ !== 'string') d_ = await uploadImage(c_)
        else if (/gif/g.test(b_)) d_ = e_
        } catch (e) {
        throw eror
        }
        let wnt = `https://fax-home.herokuapp.com/api/canvas/${args[0]}?url=${d_}&apikey=921a7l9pho2`
        conn.sendButtonImg(m.chat, wnt, set.wm, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
}
}
} catch (e) {
throw eror
}
}
handler.help = ['fax <command> <teks>']
handler.tags = ['trash'] 
handler.command = /^fax$/i
export default handler

