let handler = async (m, { conn, usedPrefix, command }) => {
let api = `https://api.zacros.my.id/randomimg/${command}`
conn.sendButton(m.chat, 'Nih kak', wm, api, [['Next', `${usedPrefix}${command}`]])
}
handler.help = ['cosplay', 'waifu', 'husbu', 'loli', 'milf']
handler.tags = ['anime']
handler.command = /^(cosplay|waifu|husbu|loli|milf)$/i

export default handler