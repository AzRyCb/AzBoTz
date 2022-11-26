import fetch from "node-fetch";
let handler = async (m, { text }) => {
if (!text) return conn.reply(m.chat, 'Harap Masukan nama nabi\n\nContoh: .kisahnabi muhammad', m)
  let res = await fetch(`https://leyscoders-api.herokuapp.com/api/nabi?q=${text}&apikey=MIMINGANZ`)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.result.image) throw json    
  let more = String.fromCharCode(8206)
  let readMore = more.repeat(4001)
  let anu = `*── 「 KISAH NABI 」 ──*
▢ *Nabi*: ${json.result.nabi}
${readMore}
${json.result.kisah}`    
  conn.sendButtonImg(m.chat, json.result.image, anu, wm, 'Back List Menu', '.help', m) 
}
handler.help = ['kisahnabi'].map(v => v + ' <nama nabi>')
handler.tags = ['islam']
handler.command = /^(kisahnabi)$/i

export default handler