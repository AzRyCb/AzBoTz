const CLIENT_ID = 'zZeR6I5DM5NMAYEhk7J9vveMqZzpCIym'
import soundcloud from 'soundcloud-downloader'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who)
let name = await conn.getName(who)
    if (!args[0]) throw `Use example ${usedPrefix}${command} link`
await soundcloud.download(args[0], CLIENT_ID).then(async (buff) => {
            let hasil = await fetch(buff)
        await conn.sendFile(m.chat, hasil, command + '.mp3', '', m, null, { fileLength: set.fsizedoc, seconds: set.fsizedoc, contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: set.web,
    mediaType: 2,
    description: set.wm, 
    title: '👋 Hai, ' + name + ' ' + set.ucapan,
    body: set.botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: hasil
        }}
  })
  })
}
handler.help = ['soundcloud'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^s(oundcloud(d(own|l)2|2)|cd(own|l)2)$/i

export default handler