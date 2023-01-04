import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {

    conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}
    let id = m.chat
    if (id in conn.tebakkimia) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', set.wm, null, buttons, conn.tebakkimia[id][0], fakes, adReply)
        throw false
    }
    let res = await fetch('https://anabotofc.herokuapp.com/api/kuis/tebakkimia?apikey=AnaBot')
    let json = await res.json()
    let caption = `*${command.toUpperCase()}*
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hkim untuk bantuan
Bonus: ${poin} XP
    `.trim()
    conn.tebakkimia[id] = [
        await conn.sendButton(m.chat, caption, set.wm, `${set.fla + command}`, buttons, fakes, adReply),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkimia[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, set.wm, null, [
                ['tebakkimia', '/tebakkimia']
            ], conn.tebakkimia[id][0], fakes, adReply)
            delete conn.tebakkimia[id]
        }, timeout)
    ]
}
handler.help = ['tebakkimia']
handler.tags = ['game']
handler.command = /^tebakkimia/i

export default handler

const buttons = [
    ['Hint', '/hkim'],
    ['Nyerah', 'menyerah']
]