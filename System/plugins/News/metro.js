import fetch from "node-fetch"
let handler = async(m, { conn }) => {
   var a = await require('dhn-api').metroNews()
   var b = JSON.parse(JSON.stringify(a))
   var c = await conn.rand(b)
   //var c = b[Math.floor(Math.random() * b.length)]
   var { berita, berita_url, berita_thumb, berita_jenis, berita_diupload } = c
   var sell = `📺 *Metro News*
📢 *Berita:* ${berita}
📁 *Type News:* ${berita_jenis}
⌚ *Uploded:* ${berita_diupload}
🛰 *Source Url:* ${berita_url}`
   conn.sendButton(m.chat, sell, set.wm, berita_thumb, [['Metro News', '.metronews']], m, {jpegThumbnail: await(await fetch(berita_thumb)).buffer()})
}
handler.help = ['metronews']
handler.tags = ['news']
handler.command = /^metro(news)?$/i
handler.limit = true

export default handler