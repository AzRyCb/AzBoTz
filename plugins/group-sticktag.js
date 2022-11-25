import fetch from 'node-fetch'
import { sticker } from '../lib/sistem.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/sistem.js'
import moment from 'moment-timezone'

let handler = async (m, { conn, text, usedPrefix, command, participants}) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who)
let name = await conn.getName(who)
let stiker = false

    if (!m.quoted) throw 'reply stikernya...'
  let mime = m.quoted.mimetype || ''
  if (!/webp/.test(mime)) throw 'stiker invalid'
  let media = await m.quoted.download()
  let out = Buffer.alloc(0)
    try {
    out = await uploadImage(media)
    } catch {
    out = await webp2png(media)
    }
    
    stiker = await sticker(false, out, set.packname, set.author)
    if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, null, { fileLength: set.fsizedoc, contextInfo: {
    mentions: participants.map(a => a.id),
    externalAdReply :{
    showAdAttribution: true,
    mediaUrl: web,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + set.ucapan,
    body: set.botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: web
     }}
  })
}
//lo mau apa??
handler.help = ['stickertag (caption|reply media)', 'sticktag <url>']
handler.tags = ['tag']
handler.command = /^(stickertag|sticktag)$/i
export default handler
