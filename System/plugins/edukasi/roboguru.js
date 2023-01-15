import fetch from 'node-fetch'
let handler = async (m, { conn, text, command, usedPrefix }) => {
    if (!text) throw `uhm.. teksnya mana?\n\ncontoh:\n${usedPrefix + command} membaca`
    let res = await fetch(`https://api.lolhuman.xyz/api/roboguru?apikey=${set.lolkey}&query=boedi%20oetomo&grade=sma&subject=sejarah`)
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    conn.reply(m.chat, json.jawaban)
}
handler.help = ['roboguru <teks>']
handler.tags = ['edukasi']
handler.command = /^roboguru$/i

export default handler