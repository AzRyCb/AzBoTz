import { sticker } from '../../lib/sistem.js'
import fetch from 'node-fetch'
const { API } = (await import('../../lib/helper.js')).default 

let handler = async (m, { conn, command }) => {
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': set.wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${set.wm},;;;\nFN:${set.wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': set.thumb, thumbnail: set.thumb ,sendEphemeral: true}}}

//m.reply(`Wait ${command} sedang proses🐦`)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who)
let stiker = await sticker(null, API(`https://telegra.ph/file/d34b2ab2cb233c749776c.png`), set.packname, set.author)

 conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, null, { fileLength: 100, contextInfo: {
   externalAdReply :{
   showAdAttribution: true,
    mediaUrl: set.gcbot,
    mediaType: 2,
    description: set.ucapan, 
    title: `${command} Sedang Di Proses`,
    body: set.botdate,
    thumbnail: set.thumb,
    sourceUrl: set.gcbot
     }}
  })
  
let audio = `https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/${command}.mp3`

await conn.sendFile(m.chat, audio, 'error.mp3', null, fkontak, true, {
type: 'audioMessage', 
ptt: false, seconds: 0,contextInfo: {
   externalAdReply: { showAdAttribution: true,
 mediaUrl: set.web,
    mediaType: 2, 
    description: set.web,
    title: '◄⟬ ●━━━ ⧏ ⧎ ⧐ ━━━● ⟭►',
    body: 'Now Playing...', 
    thumbnail: await (await fetch('https://telegra.ph/file/c72133b197a68d3ea514d.jpg')).buffer(),
    sourceUrl: set.web
}
     }
    })
}
handler.help = handler.command = ['mangkane1','mangkane2','mangkane3','mangkane4','mangkane5','mangkane6','mangkane7','mangkane8','mangkane9','mangkane10','mangkane11','mangkane12','mangkane13','mangkane14','mangkane15','mangkane16','mangkane17','mangkane18','mangkane19','mangkane20','mangkane21','mangkane22','mangkane23','mangkane24']
handler.tags = ['audio']
//handler.command = /^(mangkane1|mangkane2|mangkane3|mangkane4|mangkane5|mangkane6|mangkane7|mangkane8|mangkane9|mangkane10|mangkane11|mangkane12|mangkane13|mangkane14|mangkane15|mangkane16|mangkane17|mangkane18|mangkane19|mangkane20|mangkane21|mangkane22|mangkane23|mangkane24)$/i
handler.owner = false
export default handler
