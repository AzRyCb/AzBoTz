import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {

    conn.asahotak = conn.asahotak ? conn.asahotak : {}
    let id = m.chat
    if (id in conn.asahotak) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', set.wm, null, buttons, conn.asahotak[id][0], fakes, adReply)
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  let caption = `*${command.toUpperCase()}*
  ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hasa untuk bantuan
Bonus: ${poin} XP
    `.trim()
    conn.asahotak[id] = [
        await conn.sendButton(m.chat, caption, set.wm, `${set.fla + command}`, buttons, fakes, adReply),
        json, poin,
        setTimeout(() => {
            if (conn.asahotak[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, set.wm, null, [
                ['asahotak', '/asahotak']
            ], conn.asahotak[id][0],fakes, adReply)
            delete conn.asahotak[id]
        }, timeout)
    ]
}
handler.help = ['asahotak']
handler.tags = ['game']
handler.command = /^asahotak/i

export default handler

const buttons = [
    ['Hint', '/hasa'],
    ['Nyerah', 'menyerah']
]