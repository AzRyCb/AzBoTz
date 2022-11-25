let handler = async (m, { conn, usedPrefix, command }) => {
let api = `https://api.lolhuman.xyz/api/random/estetic?apikey=${set.lolkey}`
conn.sendButton(m.chat, 'Nih kak', wm, api, [['Next', `${usedPrefix}${command}`]])
}
handler.help = ['aesthetic']
handler.tags = ['image']
handler.command = /^(aesthetic)$/i

export default handler
