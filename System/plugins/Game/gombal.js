import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {

    conn.tebakgombal = conn.tebakgombal ? conn.tebakgombal : {}
    let id = m.chat
    if (id in conn.tebakgombal) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', set.wm, null, buttons, conn.tebakgombal[id][0],fakes, adReply)
        throw false
    }
    let res = await fetch(`https://sekha.me/api/game/tebakgombal?apikey=apirey`)
    let json = await res.json()
  let caption = `*${command.toUpperCase()}*
  ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hgom untuk bantuan
Bonus: ${poin} XP
    `.trim()
    conn.tebakgombal[id] = [
        await conn.sendButton(m.chat, caption, set.wm, `${set.fla + command}`, buttons, fakes, adReply),
        json, poin,
        setTimeout(() => {
            if (conn.tebakgombal[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, set.wm, null, [
                ['tebakgombal', '/tebakgombal']
            ], conn.tebakgombal[id][0],fakes, adReply)
            delete conn.tebakgombal[id]
        }, timeout)
    ]
}
handler.help = ['tebakgombal']
handler.tags = ['game']
handler.command = /^tebakgombal/i

export default handler

const buttons = [
    ['Hint', '/hgom'],
    ['Nyerah', 'menyerah']
]