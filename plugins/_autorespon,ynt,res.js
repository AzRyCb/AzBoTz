import moment from 'moment-timezone'
import {readFileSync} from 'fs'
import fetch from 'node-fetch'
import db from '../lib/database.js'
import Helper from '../lib/helper.js'

let handler = m => m
handler.all = async function (m, {conn,}) {
//export async function all(m) {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
let name = await this.getName(who)
let { isBanned } = db.data.chats[m.chat]
let user = db.data.users[m.sender]
let { banned } = db.data.users[m.sender]
let { group } = db.data.settings[this.user.jid]
let setting = db.data.settings[this.user.jid]
let chat = db.data.chats[m.chat]
let scori = "AzBoTz-MD" //terkutuk kalian yg ubah ini
let pp = await this.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let vr = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
let num = vr.getRandom()
let stc = readFileSync('./src/sticker/ress' + num + '.webp')
let stc1 = await readFileSync('./src/sticker/ynkts' + num + '.webp')

// auto clear ketika terdapat pesan yang tidak dapat dilihat di wa desktop
if (m.messageStubType === 68) {
    let log = {
        key: m.key,
        content: m.msg,
        sender: m.sender
    }
    await this.chatModify(m.chat, 'clear', {
        includeStarred: false
    }).catch(console.log)
}

//antispam
if (!m.message)
return
this.spam = this.spam ? this.spam : {}
if (chat.antispam) {
if (m.sender in this.spam) {
this.spam[m.sender].count++
if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 8) {
    if (this.spam[m.sender].count > 8) {
       db.data.users[m.sender].banned = true
let caption = `👋 Kamu Telah di Banned *@${who.split("@")[0]}*\nDikarenakan spam berulang kali!`
this.sendButton(m.chat, caption, "Silahkan minta owner untuk di unban", null, ['Owner', '/nomorowner'], m, { mentions: [m.sender] })
    }
    this.spam[m.sender].count = 0
    this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
}
}
else
this.spam[m.sender] = {
    jid: m.sender,
    count: 0,
    lastspam: 0
}
}
//anticall
const { WAMessageStubType } = (await import('@adiwajshing/baileys')).default
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))
if (m.fromMe && m.isBaileys) return !0
if(chat.antiCall) return
if (m.messageStubType === (WAMessageStubType.CALL_MISSED_VOICE || WAMessageStubType.CALL_MISSED_VIDEO)) {
	let cap = 'Kamu Di banned + block + warn + kick oleh bot karena telah melanggar aturan bot\n\n*📮Dilarang menelepon Bot!*'
    await conn.send2ButtonDoc(m.chat, cap, wm, '🔖 Matikan Fitur', '.off anticall', 'ℹ️ Menu', '.menu', null, adReply)
	await delay(1000)
	db.data.users[ban].banned = true
    db.data.users[ban].warning = 1
	await conn.updateBlockStatus(m.chat, "block")
	await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}

// autosetstatus
if (new Date() * 1 - setting.status > 1000) {
    let _uptime = process.uptime() * 1000
    let uptime = await set.clockString(_uptime);
    let totalreg = Object.keys(db.data.users).length
    let rtotalreg = Object.values(db.data.users).filter(user => user.registered == true).length
    let bio = `🚀 Aktif selama: ${uptime} | Mode: ${Helper.opts['self'] ? 'Private' : setting.self ? 'Private' : Helper.opts['gconly'] ? 'Hanya Grup' : 'Publik'} | ${rtotalreg} user dari ${totalreg} pengguna | 🌸 Sc By ${scori}`
    
    this.updateProfileStatus(bio).catch(_ => _)
    setting.status = new Date() * 1
}

//autopresence
if (chat.autoPresence) {
    if (m.text) {
    /* Mengetik */
    let ran = ['unavailable', 'available', 'composing', 'recording', 'paused']
	return this.sendPresenceUpdate(ran.getRandom(), m.chat)
  }
}

//autodelvn
if (chat.autodelvn && !m.fromMe && m.isBaileys && m.mtype === 'audioMessage' && m.msg.ptt && m.quoted) {
    let { key } = await m.reply('.delete', null, {
        messageId: '3EB0' + require('crypto').randomBytes(12).toString('hex')
    }).catch(_ => {})
    if (key) this.deleteMessage(m.chat, key)
}


//autoskak
if (m.isBaileys) return
    let MengSkak = /^(skak|halah|cih|cuih|yaha|erorr|kasian|dek|gajelas|bokep)$/i.test(m.text)
        if (MengSkak && m.isGroup) {
//Teks Skak
let f = await fetch('https://api.kanye.rest/')
let x = await f.json()
return m.reply(x.quote)
}
if (chat.autoReply) {
if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
let nyulik2 = `${set.htjava} *Undang Bot ke Grup* ${set.htjava}
${set.dmenub} 7 Hari / Rp 5,000
${set.dmenub} 30 Hari / Rp 15,000
${set.dmenuf}
`
this.sendButton(m.chat, nyulik2.trim(), wm, null, [['Pemilik Bot', '.owner']], m)
await this.reply(set.owner, `Ada Yang Mau Nyulik nih :v \n\ndari: @${m.sender.split("@")[0]} \n\npesan: ${m.text}`, m, { mentions: [m.sender] })
}}
            
// ketika ada yang kirim anu
if (m.mtype === 'reactionMessage') {
let caption = `Terdeteksi ${name} @${who.split("@")[0]} Lagi Mengirim Reaction [ ${m.text} ]`
    this.sendButton(m.chat, caption, wm, null, [[user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '/owner' : '/menu']], m, { mentions: this.parseMention(caption) })
}

if (m.mtype === 'paymentMessage') {
let caption = `Terdeteksi ${name} @${who.split("@")[0]} Lagi Meminta Uang :> [ ${m.text} ]`
    this.sendButton(m.chat, caption, wm, null, [[user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '/owner' : '/menu']], m, { mentions: this.parseMention(caption) })
}

if (m.mtype === 'productMessage') {
let caption = `Terdeteksi ${name} @${who.split("@")[0]} Lagi Promosi :> [ ${m.text} ]`
    this.sendButton(m.chat, caption, wm, null, [[user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '/owner' : '/menu']], m, { mentions: this.parseMention(caption) })
}

if (m.mtype === 'orderMessage') {
let caption = `Terdeteksi ${name} @${who.split("@")[0]} Lagi Meng Order :> [ ${m.text} ]`
    this.sendButton(m.chat, caption, wm, null, [[user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '/owner' : '/menu']], m, { mentions: this.parseMention(caption) })
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


// sistem antiinvite
if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
let nyulik = `Invite Group Detected

Kalo mau bot masuk ke gc mu
beli premium atau sewabot aja gan
        
SewaBot
• 1 minggu / Rp 5k
• 30 Day / Rp 8k
• Permanen 12k

Jika berminat hubungi: @${owner[0]} untuk order:)
`
this.sendButton(m.chat, nyulik.trim(), wm, null, [['Pemilik Bot', '.owner']], m)
await this.reply(set.owner, `Ada Yang Mau Nyulik nih :v \n\ndari: @${m.sender.split("@")[0]} \n\npesan: ${m.text}`, m, { mentions: [m.sender] })
}


//firstchat
if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup || db.data.settings[this.user.jid].group) return
    const cooldown = 86400000
    if (new Date - user.pc < cooldown) return // setiap 24 jam sekali
    let caption = `👋 Hai ${name} @${who.split("@")[0]}, ${user.banned ? 'kamu dibanned' : `Ada yang bisa *${this.user.name}* bantu?\nKetik *.menu* untuk melihat list fitur bot`}`.trim()
    this.sendButton(m.chat, caption, wm, null, [[user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '/owner' : '/menu']], m, { mentions: this.parseMention(caption) })
    user.pc = new Date * 1

// ketika ditag
if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
    this.send2Button(m.chat,
    isBanned ? 'AzBoTz 𝗍𝗂𝖽𝖺𝗄 𝖺𝗄𝗍𝗂𝖿' : banned ? 'kamu dibanned' : 'Ada Apa ya tag-tag saia ?\nApakah Ada Bansos ?',
    wm,
    isBanned ? 'Unban' : banned ? 'Pemilik Bot' : 'Menu',
    isBanned ? '.unban' : banned ? '.owner' : '.?',
    m.isGroup ? 'Ban' : isBanned ? 'Unban' : 'Donasi',
    m.isGroup ? '.ban' : isBanned ? '.unban' : '.donasi', m)
}

//autores
if (m.isBaileys) return
if (m.chat.endsWith('broadcast')) return
if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
    await this.sendMessage(m.chat, { sticker : stc, thumbnail: await( await fetch(pp)).buffer() , contextInfo:{  externalAdReply: { 
showAdAttribution: true,
mediaType:  1,
mediaUrl: sosmed,
title: '「 ❔ 」',
body: wm,
sourceUrl: sosmed,
thumbnail: await( await fetch(pp)).buffer()
  }
 }}, { quoted: m })
}

//autoytknts
if (m.isBaileys) return
if (m.chat.endsWith('broadcast')) return
let TandaTanya = /^(what|who|why|when|where|how|apa|dimana|kapan|siapa|mengapa|bagaimana)$/i.test(m.text)
if (TandaTanya && m.isGroup) {
    await this.sendMessage(m.chat, { sticker : stc1, thumbnail: await( await fetch(pp)).buffer() , contextInfo:{  externalAdReply: { 
showAdAttribution: true,
mediaType:  1,
mediaUrl: sosmed,
title: '「 ❔ 」',
body: wm,
sourceUrl: sosmed,
thumbnail: await( await fetch(pp)).buffer()
}
}}, { quoted: m })
}

// autobackupdb
if (setting.backup) {
    if (new Date() * 1 - setting.backupDB > 1000 * 60 * 60) {
        let d = new Date
        let date = d.toLocaleDateString('id', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
            await db.write()
            this.reply(owner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
            let data = readFileSync('./database.json')
            //this.sendFile(owner[0] + '@s.whatsapp.net', readFileSync('./database.json'), 'database.json', '', 0, 0, { mimetype: 'application/json' })
            await this.sendMessage(owner[0] + '@s.whatsapp.net', { document: data, mimetype: 'application/json', fileName: 'database.json' }, { quoted: null })
            setting.backupDB = new Date() * 1
        }
    }
    return !0
}
export default handler
