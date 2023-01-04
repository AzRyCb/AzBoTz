import fetch from "node-fetch";
const { API } = (await import('../../lib/helper.js')).default 

let handler = async (m, { conn }) => {
  await conn.reply(m.chat, wait)
  let res = await fetch(API('xteam','/religi/tahlil', {}, 'APIKEY'))
  let json = await res.json()
  if (res.status != 200) throw json
  if (json.result.error) throw json.result.message
  let {
    title,
    id,
    arabic,
    translation
  } = json.result
  let caption = `
*「 Tahlil 」*
${id}. ${title}
${arabic}
Artinya:
_"${translation}"_
`.trim()
  await conn.reply(m.chat, caption)
}
handler.help = ['tahlil']
handler.tags = ['islam']
handler.command = /^(tahlil)$/i

handler.limit = true

export default handler
