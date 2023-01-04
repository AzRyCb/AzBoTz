import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {
let play_list = ['37i9dQZEVXbObFQZ3JLcXt', '37i9dQZEVXbMDoHDwVN2tF', '37i9dQZF1DXa2EiKmMLhFD', '37i9dQZF1DXdHrK6XFPCM1', '3AaKHE9ZMMEdyRadsg8rcy', '4mFuArYRh3SO8jfffYLSER']
let spotify_id = play_list.getRandom()

    conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}
    let id = m.chat
    if (id in conn.tebaklagu) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', set.wm, null, buttons, conn.tebaklagu[id][0],fakes, adReply)
        throw false
    }
    let res = await fetch('https://api.xteam.xyz/game/tebaklagu?id=' + spotify_id + '&apikey=' + set.xteamkey)
    let ress = await fetch('https://raw.githubusercontent.com/qisyana/scrape/main/tebaklagu.json')
    
    if (res.code == 200) {
    let result = await res.json()
    let json = result.result
    if (json.artist !== '404') {
    // if (!json.status) throw json
    let caption = `*${command.toUpperCase()}*
Penyanyi: ${json.artist}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}hlag* untuk bantuan
Bonus: ${poin} XP
*Balas pesan ini untuk menjawab!*`.trim()
    conn.tebaklagu[id] = [
        await conn.sendButton(m.chat, caption, set.wm, `${set.fla + command}`, buttons, fakes, adReply),
        json, poin,
        setTimeout(() => {
            if (conn.tebaklagu[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.judul}*`, set.wm, null, [
                ['tebaklagu', '/tebaklagu']
            ], conn.tebaklagu[id][0],fakes, adReply)
            delete conn.tebaklagu[id]
        }, timeout)
    ]
    await conn.sendFile(m.chat, json.preview, 'coba-lagi.mp3', '', m)
    } else if (json.artist == '404') {
    conn.reply(m.chat, `*Ulangi! Command ${usedPrefix + command} Karena ${json.judul}*`)
    }
   } else {
   let data = await ress.json()
    let json = data[Math.floor(Math.random() * data.length)]
    // if (!json.status) throw json
    let caption = `*${command.toUpperCase()}*
Penyanyi: ${json.artis}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}hlag* untuk bantuan
Bonus: ${poin} XP
*Balas pesan ini untuk menjawab!*`.trim()
    conn.tebaklagu[id] = [
        await conn.sendButton(m.chat, caption, set.wm, `${set.fla + command}`, buttons, fakes, adReply),
        json, poin,
        setTimeout(() => {
            if (conn.tebaklagu[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.judul}*`, set.wm, null, [
                ['tebaklagu', '/tebaklagu']
            ], conn.tebaklagu[id][0], fakes, adReply)
            delete conn.tebaklagu[id]
        }, timeout)
    ]
    await conn.sendFile(m.chat, json.lagu, 'coba-lagi.mp3', '', m)
   }
}
handler.help = ['tebaklagu']
handler.tags = ['game']
handler.command = /^tebaklagu/i

export default handler

const buttons = [
    ['Hint', '/hlag'],
    ['Nyerah', 'menyerah']
]