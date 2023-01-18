import fetch from 'node-fetch'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {

if (command == 'trengif') {
        let url = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=SdX60eTdyvdo0aAyJMQ5u87Qh7mTz7bG`)
        let res = await url.json()
        let ul = res.data[0]
        let caption = `*[ RESULT ]*
*- type:* ${ul.type}
*- id:* ${ul.id}
*- url:* ${ul.url}
*- bitly_url:* ${ul.bitly_url}
*- username:* ${ul.username}
*- title:* ${ul.title}
`
  await conn.sendButton(m.chat, caption, set.wm, ul.images.original.url, [
                ['Next', `${usedPrefix + command}`],
                ['Sticker', `${usedPrefix}s`]
            ], fakes, adReply)
}

if (command == 'searchgif') {
if (!text) throw `Masukkan teks`
let url = await fetch(`https://api.giphy.com/v1/gifs/search?q=${text}&api_key=SdX60eTdyvdo0aAyJMQ5u87Qh7mTz7bG`)
        let res = await url.json()
        let ul = res.data[0]
        let caption = `*[ RESULT ]*
*- type:* ${ul.type}
*- id:* ${ul.id}
*- url:* ${ul.url}
*- bitly_url:* ${ul.bitly_url}
*- username:* ${ul.username}
*- title:* ${ul.title}
`
  await conn.sendButton(m.chat, caption, set.wm, ul.images.original.url, [
                ['Next', `${usedPrefix + command}`],
                ['Sticker', `${usedPrefix}s`]
            ], fakes, adReply)
}

}
handler.command = handler.help = ['trengif', 'searchgif']
handler.tags = ['tools']
export default handler