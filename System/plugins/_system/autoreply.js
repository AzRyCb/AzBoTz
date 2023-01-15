import db from '../../lib/database.js'
import {readFileSync} from 'fs'

let handler = m => m
handler.all = async function (m, { conn, text, isOwner, usedPrefix: _p })  {

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
let name = await this.getName(who)
let chat = db.data.chats[m.chat]
let user = db.data.users[m.sender]
let setting = db.data.settings[this.user.jid]
let num = ['1', '2', '3', '4', '5', '6', '7', '8', '9'].getRandom()
let stc1 = readFileSync('System/src/sticker/ynkts' + num + '.webp')
let pp = await this.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')

//autoskak
if (m.isBaileys) return
    let MengSkak = /^(skak|halah|cih|cuih|yaha|erorr|kasian|dek|gajelas|bokep)$/i.test(m.text)
        if (MengSkak && m.isGroup) {
//Teks Skak
let f = await fetch('https://api.kanye.rest/')
let x = await f.json()
return this.reply(m.chat, x.quote)
}

//autoytknts
if (m.isBaileys) return
if (m.chat.endsWith('broadcast')) return
let TandaTanya = /^(what|who|why|when|where|how|apa|dimana|kapan|siapa|mengapa|bagaimana)$/i.test(m.text)
if (TandaTanya && m.isGroup) {
    await this.sendMessage(m.chat, { sticker : stc1, thumbnail: pp , contextInfo:{  externalAdReply: { 
showAdAttribution: true,
mediaType:  1,
mediaUrl: set.web,
title: '「 ❔ 」',
body: set.wm,
sourceUrl: set.web,
thumbnail: pp
}
}}, { quoted: m })
}

// sistem antiinvite
if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i
    let [_, code, expired] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'

    //expired = Math.floor(Math.min(999, Math.max(1, isOwner ? isNumber(expired) ? parseInt(expired) : 0 : 3)))
let nyulik = `Berhasil join ke grup ini
dan  menetapkan trial 3hari

untuk memperpanjang masa aktif
beli premium atau sewabot aja gan
        
SewaBot
• 1 minggu / Rp 5k
• 30 Day / Rp 8k
• Permanen 12k

Jika berminat hubungi: @${set.mods} untuk order:)
`
this.groupAcceptInvite(code)
this.sendButton(m.chat, nyulik.trim(), set.wm, null, [['Pemilik Bot', '.owner']], m, { mentions: [m.sender] })
await this.reply(set.mods, `Ada Yang Mau Nyulik nih :v \n\ndari: @${m.sender.split("@")[0]} \n\npesan: ${m.text}`, m, { mentions: [m.sender] })
}

// ketika ada yang kirim anu
if (m.mtype === 'reactionMessage') {
    let caption = `Terdeteksi ${name} @${who.split("@")[0]} Lagi Mengirim Reaction [ ${m.text} ]`
        this.sendButton(m.chat, caption, set.wm, null, [[user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '/owner' : '/menu']], m, { mentions: this.parseMention(caption) })
    }
    
    if (m.mtype === 'paymentMessage') {
    let caption = `Terdeteksi ${name} @${who.split("@")[0]} Lagi Meminta Uang :> [ ${m.text} ]`
        this.sendButton(m.chat, caption, set.wm, null, [[user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '/owner' : '/menu']], m, { mentions: this.parseMention(caption) })
    }
    
    if (m.mtype === 'productMessage') {
    let caption = `Terdeteksi ${name} @${who.split("@")[0]} Lagi Promosi :> [ ${m.text} ]`
        this.sendButton(m.chat, caption, set.wm, null, [[user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '/owner' : '/menu']], m, { mentions: this.parseMention(caption) })
    }
    
    if (m.mtype === 'orderMessage') {
    let caption = `Terdeteksi ${name} @${who.split("@")[0]} Lagi Meng Order :> [ ${m.text} ]`
        this.sendButton(m.chat, caption, set.wm, null, [[user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '/owner' : '/menu']], m, { mentions: this.parseMention(caption) })
    }
    /*
    // ketika ada yang kirim anu
    if (m.mtype === 'stickerMessage') {
    this.sendMessage(m.chat, {
            react: {
            text: '🗿',
            key: m.key
        }})
    }
                */
    // ketika ada yang kirim anu
    if (m.text.includes('🗿')) {
    this.sendMessage(m.chat, {
            react: {
            text: '🗿',
            key: m.key
        }})
    }
            
// salam
let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
let isSalam = reg.exec(m.text)
if (isSalam && !m.fromMe) {
this.reply(m.chat, `وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa\'alaikumussalam wr.wb._`)
}

if (/^assalam(ualaikum)?|(salamualaiku|(sa(lamu|m)liku|sala))m$/i.test(m.text)) {
let info = ` 📚 *Wa'alaikumsalam*`
this.send2ButtonDoc(m.chat, `${set.htki} ᴜ s ᴇ ʀ s ${set.htka}`, info, 'ℹ️ Sapa', '.tts id Waalaikumsalam', 'ℹ️ Menu', '.menu', m)
    await this.sendMessage(m.chat, {
        react: {
            text: '🙏',
        key: m.key,
    }})
}

//autoreact
let res = JSON.parse(readFileSync('System/src/json/emoji.json'))
let em = res.emoji
if (/^anjir|((bil|ad)e|dec)k|tytyd|laik|banh|nihh$/i.test(m.text)) {
this.sendMessage(m.chat, {
    react: {
        text: em.getRandom(),
    key: m.key,
    }})
}

if (/^@zry|@Az|@6285795035419|6285795035419|@6285722037770|6285722037770$/i.test(m.text)) {
this.send3ButtonImg(m.chat, 'https://telegra.ph/file/816fe31b3d02ff785dddf.jpg', "*Ada Apa Tag owner Gua Ngab?🤨*", '=====『 TAG TERDETEKSI 』=====', 'OWNER', '.owner', 'KEMBALI', '.menu', 'STORE', '.store', m)
}

if (/^salken$/i.test(m.text)) {
this.sendButton(m.chat, `Halo Kak👋\nSaya adalah AzBotZ, AzBotZ adalah Sebuah Bot yang bisa membantumu di grup ini, klik tombol dibawah ini jika kamu ingin menggunakan bot!`.trim(), null, 'Menu', '.menu', m)
}

if (/^canda|becanda|bejanda$/i.test(m.text)) {
this.sendStimg(m.chat, 'https://telegra.ph/file/f72c4c64d3a896cfc7dea.png', m, { packname: set.packname, author: set.author  })
}

if (/^sabar$/i.test(m.text)) {
this.sendStimg(m.chat, 'https://telegra.ph/file/5c66c2f9d2b75dc5bd30a.png', m, { packname: set.packname, author: set.author  })
}

if (/^Nanii$/i.test(m.text)) {
this.sendStimg(m.chat, 'https://telegra.ph/file/e11bfe8bb3d1d3e741f4c.png', m, { packname: set.packname, author: set.author  })
}

if (/^kontol|ngentod|ngentot|memek|pepek|peler$/i.test(m.text)) {
this.sendStimg(m.chat, 'https://telegra.ph/file/298c47c103f0bca3c1369.png', m, { packname: set.packname, author: set.author  })
}

if (/^turu$/i.test(m.text)) {
this.sendStimg(m.chat, 'https://telegra.ph/file/c98503d281e1e251211a0.jpg', m, { packname: set.packname, author: set.author  })
    }

if (/^mengsesat|sesad|mengsesad|sesat$/i.test(m.text)) {
this.sendStimg(m.chat, 'https://telegra.ph/file/3cb8a5814d019e0692d89.png', m, { packname: set.packname, author: set.author  })
}

if (/^senin|Senin|Besok senin$/i.test(m.text)) {
this.sendStimg(m.chat, 'https://telegra.ph/file/ad8fb789710d18515e37d.png', m, { packname: set.packname, author: set.author  })
}

if (/^sabar|yang sabar$/i.test(m.text)) {
this.sendStimg(m.chat, 'https://telegra.ph/file/5c66c2f9d2b75dc5bd30a.png', m, { packname: set.packname, author: set.author  })
}

if (/^ok|wokei|wokey|baik$/i.test(m.text)) {
this.sendStimg(m.chat, 'https://telegra.ph/file/e9f2deab6243e78ec54e3.png', m, { packname: set.packname, author: set.author  })
}

if (/^nyimak|menyimak$/i.test(m.text)) {
this.sendStimg(m.chat, 'https://telegra.ph/file/b9907b917e10db107e464.png', m, { packname: set.packname, author: set.author  })
}

if (/^nani|AkuwibuElit|SyIniWibuElite|wibu$/i.test(m.text)) {
this.sendStimg(m.chat, 'https://telegra.ph/file/133d80c6c852427d7a7ff.png', m, { packname: set.packname, author: set.author  })
}

if (/^nice|nice bro|Nice$/i.test(m.text)) {
this.sendStimg(m.chat, 'https://telegra.ph/file/f4ff2dcf458c7b871dd4e.png', m, { packname: set.packname, author: set.author  })
}

if (/^😭|😭😭|😭😭😭|😭😭😭😭|😭😭😭😭😭|😭😭😭😭😭😭$/i.test(m.text)) {
    this.sendStimg(m.chat, 'https://telegra.ph/file/3e49a66125d766426ee5f.png', m, { packname: set.packname, author: set.author  })
}

if (/^wk|wkwk|wkwkwk|wkwkwkwkwk|lucu|ngakak|ngabrut|lawak|lawack$/i.test(m.text)) {
    this.sendStimg(m.chat, 'https://telegra.ph/file/3e49a66125d766426ee5f.png', m, { packname: set.packname, author: set.author  })
}

if (/^keplak$/i.test(m.text)) {
    this.sendStimg(m.chat, 'https://telegra.ph/file/c9800b1e32b8edcd206d6.png', m, { packname: set.packname, author: set.author  })
}

if (/^mau|pingin|mauu|ikut$/i.test(m.text)) {
    this.sendStimg(m.chat, 'https://telegra.ph/file/a37cf478514a5e3173118.png', m, { packname: set.packname, author: set.author  })
}

if (/^boti|boty|boty binal$/i.test(m.text)) {
    this.sendStimg(m.chat, 'https://telegra.ph/file/9bc8b84760a433b4d26a3.jpg', m, { packname: set.packname, author: set.author  })
}

if (/^(bot|robot|woi|Cok|ngab|tod|bang|hai|hi|hii)$/i.test(m.text)) {
    this.sendStimg(m.chat, 'https://telegra.ph/file/70f95bcad271d303bf982.png', m, { packname: set.packname, author: set.author  })
    }

if (/^bot$/i.test(m.text)) {
    this.sendButton(m.chat, !(m.isGroup || m.isPrems) && setting.group ? 'hanya grup' : chat.isBanned ? 'chat banned' : user.banned ? 'user banned' : 'AzBoTz aktif', set.wm, !(m.isGroup || m.isPrems) && setting.group ? 'donasi' : chat.isBanned ? 'unban' : user.banned ? 'minta owner kalo mau di unban' : 'donasi', !(m.isGroup || m.isPrems) && setting.group ? '.donasi' : chat.isBanned ? '.unban' : user.banned ? '.owner' : '.donasi', m)
}

}

export default handler
