let handler = async (m, { conn, usedPrefix, command }) => {
let nyenye = `https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${set.lolkey}`
conn.sendButton(m.chat, 'Nih kak', set.wm, nyenye, [['Next', `${usedPrefix}${command}`]])
}
handler.help = ['hollolewd', 'sideoppai', 'animefeets', 'animebooty', 'animethighss', 'animearmpits', 'lewdanimegirls', 'biganimetiddies','lewd', 'eron', 'solo', 'anal', 'keta', 'tits', 'kuni', 'solog', 'erok', 'feetg', 'lewdk', 'erofeet', 'holoero', 'classic', 'erokemo', 'futanari', 'eroyuri', 'yaoi']
handler.tags = ['nsfw']
handler.command = /^(hollolewd|sideoppai|animefeets|animebooty|animethighss|animearmpits|lewdanimegirls|biganimetiddieslewd|eron|solo|anal|keta|tits|kuni|solog|erok|feetg|lewdk|erofeet|holoero|classic|erokemo|futanari|eroyuri|yaoi)$/i
//buatan hyzer, jgn hapus atuh 😊
export default handler