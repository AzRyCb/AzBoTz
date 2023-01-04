import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {

if (!text) throw `Contoh penggunaan ${usedPrefix}${command} query`
conn.sendButton(m.chat, `Random *${command}*`, wm, `https://api.lolhuman.xyz/api/random2/${text}?apikey=${set.lolkey}`, [['🔄 Next 🔄', `/${command}`]], m)

}
handler.command = /^(dlrandom2)$/i
handler.help = ['dlrandom2']
handler.tags = ['tools']

export default handler