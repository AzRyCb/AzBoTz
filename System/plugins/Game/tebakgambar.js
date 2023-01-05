import { tebakgambar } from '@bochilteam/scraper'

let timeout = 120000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
    let id = m.chat
    if (id in conn.tebakgambar) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', set.wm, null, buttons, conn.tebakgambar[id][0], fakes, adReply)
        throw false
    }
    let json = await tebakgambar()
    // if (!json.status) throw json
    let caption = `
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hint untuk hint
Bonus: ${poin} XP
    `.trim()
    conn.tebakgambar[id] = [
        await conn.sendButton(m.chat, caption, set.wm, json.img, buttons, fakes, adReply),
        json, poin,
        setTimeout(() => {
            if (conn.tebakgambar[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, set.wm, null, [
                ['tebakgambar', '/tebakgambar']
            ], conn.tebakgambar[id][0], fakes, adReply)
            delete conn.tebakgambar[id]
        }, timeout)
    ]
}
handler.help = ['tebakgambar']
handler.tags = ['game']
handler.command = /^tebakgambar/i

export default handler

const buttons = [
    ['hint', '/hint'],
    ['nyerah', 'menyerah']
]