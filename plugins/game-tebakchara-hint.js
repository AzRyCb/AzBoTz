let handler = async (m, { conn }) => {
    conn.tebakchara = conn.tebakchara ? conn.tebakchara : {}
    let id = m.chat
    if (!(id in conn.tebakchara)) throw false
    let json = conn.tebakchara[id][1]
    conn.sendButton(m.chat, '```' + json.name.replace(/[AIUEOaiueo]/ig, '_') + '```', wm, null, [
        ['Nyerah', 'menyerah']
    ], m)
}
handler.command = /^hcha$/i

handler.limit = true

export default handler