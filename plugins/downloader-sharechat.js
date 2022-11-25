import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://sharechat.com/video/pDExqga`
        let res = await fetch(`https://api.lolhuman.xyz/api/sharechat?apikey=${set.lolkey}&url=${args[0]}`)
    let x = await res.json()
  conn.sendButtonVid(m.chat, x.result.link_dl, `*${htki} ShareChat ${htka}*
*title:* ${x.result.title}
    `, wm, 'To mp3', '.tomp3', fakes, adReply)
  
}
handler.help = ['sharechat'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^((sharechat)(downloder|dl)?)$/i

export default handler
