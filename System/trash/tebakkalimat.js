import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {

    conn.tebakkalimat = conn.tebakkalimat ? conn.tebakkalimat : {}
    let id = m.chat
    if (id in conn.tebakkalimat) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', set.wm, null, buttons, conn.tebakkalimat[id][0],fakes, adReply)
        throw false
    }
    let res = await fetch('https://anabotofc.herokuapp.com/api/kuis/siapaaku?apikey=AnaBot')
    let json = await res.json()
    let caption = `*${command.toUpperCase()}*
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hkal untuk bantuan
Bonus: ${poin} XP
    `.trim()
    conn.tebakkalimat[id] = [
        await conn.sendButton(m.chat, caption, set.wm, `${set.fla + command}`, buttons, fakes, adReply),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkalimat[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, set.wm, null, [
                ['tebakkalimat', '/tebakkalimat']
            ], conn.tebakkalimat[id][0],fakes, adReply)
            delete conn.tebakkalimat[id]
        }, timeout)
    ]
}
handler.help = ['tebakkalimat']
handler.tags = ['game']
handler.command = /^tebakkalimat/i

export default handler

const buttons = [
    ['Hint', '/hkal'],
    ['Nyerah', 'menyerah']
]