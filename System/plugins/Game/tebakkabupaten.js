import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakkabupaten = conn.tebakkabupaten ? conn.tebakkabupaten : {}
    let id = m.chat
    if (id in conn.tebakkabupaten) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', set.wm, null, buttons, conn.tebakkabupaten[id][0],fakes, adReply)
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  let caption = `*${command.toUpperCase()}*
Kabupaten apakah ini?
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hkab untuk bantuan
Bonus: ${poin} XP
    `.trim()
    conn.tebakkabupaten[id] = [
        await conn.sendButton(m.chat, caption, set.wm, json.url, buttons, fakes, adReply),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkabupaten[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.title}*`, set.wm, null, [
                ['tebakkabupaten', '/tebakkabupaten']
            ], conn.tebakkabupaten[id][0], fakes, adReply)
            delete conn.tebakkabupaten[id]
        }, timeout)
    ]
}
handler.help = ['tebakkabupaten']
handler.tags = ['game']
handler.command = /^tebakkabupaten/i

export default handler

const buttons = [
    ['Hint', '/hkab'],
    ['Nyerah', 'menyerah']
]