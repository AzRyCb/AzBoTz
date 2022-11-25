import fetch from 'node-fetch'

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who)
let name = await conn.getName(who)
if (!args[0]) throw `Use example ${usedPrefix}${command} http://i.coco.fun/short/1513tui/`
if (!args[1]) return conn.sendButton(m.chat, '––––––『 SMULE 』––––––', null, null, [['🎥 VIDEO', `${usedPrefix}smule ${args[0]} video`],['🎙️ AUDIO', `${usedPrefix}smule ${args[0]} audio`]],m)
let res = await fetch(`https://api.lolhuman.xyz/api/smule?apikey=${set.lolkey}&url=${args[1]}`)
    let x = await res.json()
  if (args[1] == 'video') {
    await conn.sendButtonVid(m.chat, x.result.video, `*––––––『 SMULE 』––––––*
*title:* ${x.result.title}
    `, wm, 'To mp3', '.tomp3', fakes, adReply)
  }
  if (args[1] == 'audio') {
    await conn.sendFile(m.chat, x.result.audio, 'audio.mp3', '', m, null, { fileLength: set.fpagedooc, seconds: set.fsizedoc, contextInfo: {
    mimetype: 'audio/mp4',
    externalAdReply :{
    mediaUrl: web,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + set.ucapan,
    body: set.botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: x.result.audio
     }}
  })
  }
  }
handler.help = ['smule'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^((smule)(downloder|dl)?)$/i

export default handler
