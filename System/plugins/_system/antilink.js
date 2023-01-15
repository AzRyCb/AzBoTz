import db from '../../lib/database.js'
const isLinkTik = /tiktok.com/i // tambahin sendiri
const isLinkYt = /youtube.com|youtu.be/i // tambahin sendiri
const isLinkTel = /t.me/i // tambahin sendiri
const isLinkFb = /facebook.com|fb.me/i // tambahin sendiri
const isLinkIg = /instagram.com/i // tambahin sendiri
const isLinkWa = /tiktok.com/i // tambahin sendiri
const isLinkHttp = /http|https/i // tambahin sendiri

export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
let chat = db.data.chats[m.chat]
let user = db.data.users[m.sender]
let bot = db.data.settings[this.user.jid] || {}

const isAntiLinkTik = isLinkTik.exec(m.text)
const isAntiLinkYt = isLinkYt.exec(m.text)
const isAntiLinkTel = isLinkTel.exec(m.text)
const isAntiLinkFb = isLinkFb.exec(m.text)
const isAntiLinkIg = isLinkIg.exec(m.text)
const isAntiLinkHttp = isLinkHttp.exec(m.text)
 
if (chat.antiLinkTik && isAntiLinkTik) {
    await conn.sendButton(m.chat, `*Link Terdeteksi!* ${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, set.wm, ['off antilinktik', '/disable antilinktik'], m)
    if (isBotAdmin && bot.restrict) {
    user.warn += 1
    //user.banned = true
    await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
    return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    } else if (!bot.restrict) return conn.reply(m.chat, '*Anda Atmin Anda Aman :v!*!')
}
    
if (chat.antiLinkYt && isAntiLinkYt) {
    await conn.sendButton(m.chat, `*Link Terdeteksi!* ${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, set.wm, ['off antilinkyt', '/disable antilinkyt'], m)
        if (isBotAdmin && bot.restrict) {
    user.warn += 1
    //user.banned = true
    await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
    return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return conn.reply(m.chat, '*Anda Atmin Anda Aman :v!*!')
    }
    
if (chat.antiLinkTel && isAntiLinkTel) {
        await conn.sendButton(m.chat, `*Link Terdeteksi!* ${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, set.wm, ['off antilinktel', '/disable antilinktel'], m)
        if (isBotAdmin && bot.restrict) {
    user.warn += 1
    //user.banned = true
    await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
    return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    } else if (!bot.restrict) return conn.reply(m.chat, '*Anda Atmin Anda Aman :v!*!')
}
    
if (chat.antiLinkFb && isAntiLinkFb) {
        await conn.sendButton(m.chat, `*Link Terdeteksi!* ${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, set.wm, ['off antilinkfb', '/disable antilinkfb'], m)
        if (isBotAdmin && bot.restrict) {
    user.warn += 1
    //user.banned = true
    await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
    return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return conn.reply(m.chat, '*Anda Atmin Anda Aman :v!*!')
}
    
if (chat.antiLinkIg && isAntiLinkIg) {
        await conn.sendButton(m.chat, `*Link Terdeteksi!* ${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, set.wm, ['off antilinkig', '/disable antilinkig'], m)
        if (isBotAdmin && bot.restrict) {
    user.warn += 1
    //user.banned = true
    await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
    return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return conn.reply(m.chat, '*Anda Atmin Anda Aman :v!*!')
}
    
if (chat.antiLinkWa && isAntiLinkWa) {
        await conn.sendButton(m.chat, `*Link Terdeteksi!* ${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, set.wm, ['off antilinkwa', '/disable antilinkwa'], m)
        if (isBotAdmin && bot.restrict) {
    user.warn += 1
    //user.banned = true
    await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
    return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return conn.reply(m.chat, '*Anda Atmin Anda Aman :v!*!')
}
    
if (chat.antiLinkHttp && isAntiLinkHttp) {
        await conn.sendButton(m.chat, `*Link Terdeteksi!* ${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, set.wm, ['off antihatetepe', '/disable antihatetepe'], m)
        if (isBotAdmin && bot.restrict) {
    user.warn += 1
    //user.banned = true
    await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
    return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return conn.reply(m.chat, '*Anda Atmin Anda Aman :v!*!')
}
    return !0
}