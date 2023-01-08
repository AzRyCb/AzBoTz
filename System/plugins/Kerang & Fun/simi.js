import fetch from 'node-fetch'

let handler = async (m, {conn, text, args}) => {
  if (!args[0]) throw `Use example .simi halo`
  let api = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=id`)
  let res = await api.json()
  conn.reply(m.chat, res.success, m)
}
handler.command = ['simi']
handler.tags = ['fun']
handler.help = ['simi']

export default handler