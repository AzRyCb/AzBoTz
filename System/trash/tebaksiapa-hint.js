let handler = async (m, { conn }) => {
    conn.tebaksiapa = conn.tebaksiapa ? conn.tebaksiapa : {}
    let id = m.chat
    if (!(id in conn.tebaksiapa)) throw false
    let json = conn.tebaksiapa[id][1]
    conn.sendButton(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', set.wm, null, [
        ['Nyerah', 'menyerah']
    ], fakes, adReply)
}
handler.command = /^hsia$/i

handler.limit = true

export default handler