let handler = async (m, { conn }) => {
    conn.tebaklogo = conn.tebaklogo ? conn.tebaklogo : {}
    let id = m.chat
    if (!(id in conn.tebaklogo)) throw false
    let json = conn.tebaklogo[id][1]
    conn.sendButton(m.chat, '```' + json.hasil.data.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', set.wm, null, [
        ['Nyerah', 'menyerah']
    ], fakes, adReply)
}
handler.command = /^hani$/i

handler.limit = true

export default handler