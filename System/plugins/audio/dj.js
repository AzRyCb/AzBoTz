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
  
let audio = `https://raw.githubusercontent.com/Aisyah-Aldi/Sound/main/${command}.mp3`

await conn.sendFile(m.chat, audio, 'error.mp3', null, fkontak, true, {
type: 'audioMessage', 
ptt: false, seconds: 0,contextInfo: {
   externalAdReply: { showAdAttribution: true,
 mediaUrl: set.web,
    mediaType: 2, 
    description: set.web,
    title: "Now Playing...",
    body: set.wm,
    thumbnail: await (await fetch('https://telegra.ph/file/c72133b197a68d3ea514d.jpg')).buffer(),
    sourceUrl: set.web
 	  /*   sourceUrl: set.ig,
           title: '◄⟬ ●━━━ ⧏ ⧎ ⧐ ━━━● ⟭►',  
            body: 'Now Playing...', 
           thumbnail: await (await fetch('https://telegra.ph/file/c72133b197a68d3ea514d.jpg')).buffer()*/
}
     }
    })
}
/*fgclink, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: set.ig,
    mediaType: 2, 
    description: set.gcbot,
    title: "Join Sini Juga Cuy!",
    body: set.set.wm,
    thumbnail: thm,
    sourceUrl: set.gcbot
     }}
  })*/
handler.command = /^(sound1|sound2|sound3|sound4|sound5|sound6|sound7|sound8|sound9|sound10|sound11|sound12|sound13|sound14|sound15|sound16|sound17|sound18|sound19|sound20|sound21|sound22|sound23|sound24|sound25|sound26|sound27|sound28|sound29|sound30|sound31|sound32|sound33|sound34|sound35|sound36|sound37|sound38|sound39|sound40|sound41|sound42|sound43|sound44|sound45|sound46|sound47|sound48|sound49|sound50|sound51|sound52|sound53|sound54|sound55|sound56|sound57|sound58|sound59|sound60sound61|sound62|sound63|sound64|sound65|sound66|sound67|sound68|sound69|sound70|sound71|sound72|sound73|sound74|sound75|sound76|sound77|sound78|sound79|sound80|sound81|sound82|sound83|sound84|sound85|sound86|sound87|sound88|sound89|sound90|sound91|sound92|sound93|sound94|sound95|sound96|sound97|sound98|sound99|sound100|sound101|sound102|sound103|sound104|sound105|sound106|sound107|sound108|sound109|sound110|sound111|sound112|sound113|sound114|sound115|sound116|sound117|sound118|sound119)$/i

export default handler

