import { family100 } from '@bochilteam/scraper'
const winScore = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.game = conn.game ? conn.game : {}
    let id = 'family100_' + m.chat
    if (id in conn.game) {
        conn.reply(m.chat, 'Masih ada kuis yang belum terjawab di chat ini', conn.game[id].msg)
        throw false
    }
    const json = await family100()
    let caption = `
*Soal:* ${json.soal}
Terdapat *${json.jawaban.length}* jawaban${json.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}
+${winScore} XP tiap jawaban benar
    `.trim()
    conn.game[id] = {
        id,
        msg: await conn.sendButton(m.chat, caption, set.wm, null, [['Nyerah', 'nyerah']], m, adReply),
        ...json,
        terjawab: Array.from(json.jawaban, () => false),
        winScore,
    }
}
handler.help = handler.command = ['family100']
handler.tags = ['game']

export default handler