import fetch from 'node-fetch'

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
if (!args[0]) throw `Use example ${usedPrefix}${command} http://i.coco.fun/short/1513tui/`
if (!args[1]) return conn.sendButton(m.chat, set.htki + ' COCOFUN ' + set.htka, null, null, [['❌ NO WM', `.cocofun ${args[0]} nowm`],['✅ WITH WM', `.cocofun ${args[0]} withwm`]],m)
let res = await fetch(`https://api.lolhuman.xyz/api/cocofun?apikey=${lolkey}&url=${args[0]}`)
    let x = await res.json()
  if (args[1] == 'withwm') {
    conn.sendButtonVid(m.chat, x.result.withwm, `*${set.htki} COCOFUN ${set.htka}*
*title:* ${x.result.title}
*tag:* ${x.result.tag}
*likes:* ${x.result.likes}
*dislike:* ${x.result.dislike}
*views:* ${x.result.views}
*uploader:* ${x.result.uploader}
*duration:* ${x.result.duration}
*dislike:* ${x.result.dislike}`, x.result.title + '.mp4', 'To mp3', '.tomp3', fakes, adReply)
  }
  if (args[1] == 'nowm') {
    conn.sendButtonVid(m.chat, x.result.nowm, `*${set.htki} COCOFUN ${set.htka}*
*title:* ${x.result.title}
*tag:* ${x.result.tag}
*likes:* ${x.result.likes}
*dislike:* ${x.result.dislike}
*views:* ${x.result.views}
*uploader:* ${x.result.uploader}
*duration:* ${x.result.duration}
*dislike:* ${x.result.dislike}`, x.result.title + '.mp4', 'To mp3', '.tomp3', fakes, adReply)
  }
  }
handler.help = ['cocofun'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^c(oco(fun(d(own(load(er)?)?|l))?|d(own(load(er)?)?|l))|cfun(d(own(load(er)?)?|l))?)$/i

export default handler