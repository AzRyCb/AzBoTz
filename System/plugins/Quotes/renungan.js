import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/kata-kata/renungan.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  await conn.sendButton(m.chat, "[ RENUNGAN ]", set.wm, json, [
                ['Next', `${usedPrefix + command}`],
            ], m)
}
handler.command = handler.help = ['renungan']
handler.tags = ['quotes']

export default handler