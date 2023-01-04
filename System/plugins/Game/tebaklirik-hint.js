let handler = async (m, { conn }) => {
    conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {}
    let id = m.chat
    if (!(id in conn.tebaklirik)) throw false
    let json = conn.tebaklirik[id][1]
    conn.sendButton(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', set.wm, null, [
        ['Nyerah', 'menyerah']
    ], fakes, adReply)
}
handler.command = /^hlir$/i

handler.limit = true

export default handler