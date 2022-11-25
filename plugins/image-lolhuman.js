let handler = async (m, { conn, usedPrefix, command }) => {
let api = `https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`
conn.sendButton(m.chat, 'Nih kak', wm, api, [['Next', `${usedPrefix}${command}`]])
}
handler.help = ['blush', 'cringe', 'dance', 'poke', 'wink', 'happy', 'slap', 'kill', 'glomp', 'bite', 'nom', 'handhold', 'highfive', 'wave', 'smile', 'yeet', 'bonk', 'smug', 'pat', 'lick', 'kiss', 'awoo', 'hug', 'cry', 'cuddle', 'bully']
handler.tags = ['image']
handler.command = /^(blush|cringe|dance|poke|wink|happy|slap|kill|glomp|bite|nom|handhold|highfive|wave|smile|yeet|bonk|smug|pat|lick|kiss|awoo|hug|cry|cuddle|bully)$/i
//buatan hyzer, jgn hapus atuh 😊
export default handler