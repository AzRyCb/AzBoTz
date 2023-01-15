import { readFileSync } from 'fs'
import fetch from 'node-fetch'
import db from '../lib/database.js'
const { opts } = (await import('../lib/helper.js')).default 

let handler = m => m
handler.all = async function (m) {
//export async function all(m) {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
let name = await this.getName(who)
let chat = db.data.chats[m.chat]
let user = db.data.users[m.sender]
let setting = db.data.settings[this.user.jid]

let pp = await this.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let num = ['1', '2', '3', '4', '5', '6', '7', '8', '9'].getRandom()
let stc = readFileSync('System/src/sticker/ress' + num + '.webp')
/*
if (setting.autoMessage) {
    if (!m.chat.endsWith('.net') || m.fromMe || m.key.remoteJid.endsWith('status@broadcast')) return
    if (chat.isBanned) return
    if (user.banned) return
    if (m.isBaileys) return
    let msgs = db.data.msgs
    if (!(m.text in msgs)) return
    let _m = this.serializeM(JSON.parse(JSON.stringify(msgs[m.text]), (_, v) => {
        if (
            v !== null &&
            typeof v === 'object' &&
            'type' in v &&
            v.type === 'Buffer' &&
            'data' in v &&
            Array.isArray(v.data)) {
            return Buffer.from(v.data)
        }
        return v
    }))
    await _m.copyNForward(m.chat, true)
}
*/
//antibug
if ((user.money * 1) > 99999998) {
    user.money = 99999999
} else if ((user.money * 1) < 0) {
    user.money = 0
}
if ((user.healt * 1) > 100) {
    user.healt = 100
} else if ((user.money * 1) < 0) {
    user.healt = 0
}

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
if (setting.security) {
if (!m.message)return
    this.spam = this.spam ? this.spam : {}   
if (m.sender in this.spam) {
this.spam[m.sender].count++
if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 8) {
    if (this.spam[m.sender].count > 8) {
       user.banned = true
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
/** @type {import('@adiwajshing/baileys')} */
// @ts-ignore
const { WAMessageStubType } = (await import('@adiwajshing/baileys')).default
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))

if (setting.security) {
if (m.fromMe && m.isBaileys) return !0
if (m.messageStubType === (WAMessageStubType.CALL_MISSED_VOICE || WAMessageStubType.CALL_MISSED_VIDEO)) {
	let cap = 'Kamu Di banned + block + warn + kick oleh bot karena telah melanggar aturan bot\n\n*📮Dilarang menelepon Bot!*'
    this.send2ButtonDoc(m.chat, cap, set.wm, '🔖 Matikan Fitur', '.off anticall', 'ℹ️ Menu', '.menu', fakes, adReply)
	await delay(1000)
	db.data.users[ban].banned = true
    db.data.users[ban].warning = 1
	await this.updateBlockStatus(m.chat, "block")
	await this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}}

// autosetstatus
if (setting.statusUpdate) {
    if (new Date() * 1 - setting.status > 1000) {
        let _uptime = process.uptime() * 1000
        let uptime = await set.clockString(_uptime);
        let totalreg = Object.keys(db.data.users).length
        let rtotalreg = Object.values(db.data.users).filter(user => user.registered == true).length
        let bio = `🚀 Aktif selama: ${uptime} | Mode: ${opts['self'] ? 'Private' : setting.self ? 'Private' : opts['gconly'] ? 'Hanya Grup' : 'Publik'} | ${rtotalreg} user dari ${totalreg} pengguna | 🌸 Sc By AzBot-MD`
        this.updateProfileStatus(bio).catch(_ => _)
        setting.status = new Date() * 1
    }    
}

//firstchat
if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup || setting.group) return
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    let caption = `👋 Hai ${name} @${who.split("@")[0]}, ${user.banned ? 'kamu dibanned' : `Ada yang bisa *${this.user.name}* bantu?\nKetik *.menu* untuk melihat list fitur bot`}`.trim()
    this.sendButton(m.chat, caption, set.wm, null, [[user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '.owner' : '.menu']], m, { mentions: this.parseMention(caption) })
    user.pc = new Date * 1

// ketika ditag
if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
    this.send2Button(m.chat,
    chat.isBanned ? 'AzBoTz 𝗍𝗂𝖽𝖺𝗄 𝖺𝗄𝗍𝗂𝖿' : user.banned ? 'kamu dibanned' : 'Ada Apa ya tag-tag saia ?\nApakah Ada Bansos ?', set.wm,
    chat.isBanned ? 'Unban' : user.banned ? 'Pemilik Bot' : 'Menu',
    chat.isBanned ? '.unban' : user.banned ? '.owner' : '.?',
    m.isGroup ? 'Ban' : chat.isBanned ? 'Unban' : 'Donasi',
    m.isGroup ? '.ban' : chat.isBanned ? '.unban' : '.donasi', m)
}
let autores = true
//autores
if (autores) {
if (m.isBaileys) return
if (m.chat.endsWith('broadcast')) return
if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
    await this.sendMessage(m.chat, { sticker : stc, thumbnail: await( await fetch(pp)).buffer() , contextInfo:{  externalAdReply: { 
showAdAttribution: true,
mediaType:  1,
mediaUrl: set.web,
title: '「 ❔ 」',
body: set.wm,
sourceUrl: set.web,
thumbnail: await( await fetch(pp)).buffer()
  }
 }}, { quoted: m })
}
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
            this.reply(set.mods + '@s.whatsapp.net', `Database: ${date}`)
            let data = readFileSync('System/data/database.json')
            //this.sendFile(owner[0] + '@s.whatsapp.net', readFileSync('./database.json'), 'database.json', '', 0, 0, { mimetype: 'application/json' })
            await this.sendMessage(set.mods + '@s.whatsapp.net', { document: data, mimetype: 'application/json', fileName: 'database.json' }, { quoted: null })
            setting.backupDB = new Date() * 1
        }
    }
    return !0
}
export default handler
