let handler = async(m, { conn, usedPrefix, text, args, command }) => {

if (!text) throw `Contoh penggunaan ${usedPrefix}${command} query`
conn.sendButton(m.chat, `Random *${command}*`, wm, `https://api.lolhuman.xyz/api/random/nsfw/${text}?apikey=${set.lolkey}`, [['🔄 Next 🔄', `/${command}`]], m)

}
handler.command = handler.help = ['dlrandom']
handler.tags = ['download']
export default handler