let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) conn.sendButton(m.chat, `_*Tidak ada absen berlangsung digrup ini!*_\n\n*${usedPrefix}mulaiabsen* - untuk memulai absen`, set.wm, null, [
                ['mulaiabsen', `${usedPrefix}mulaiabsen`]
            ], fakes, adReply)
    delete conn.absen[id]
    conn.reply(m.chat, `Done!`, m)
}
handler.help = ['hapusabsen']
handler.tags = ['absen']
handler.command = /^(delete|hapus)absen$/i
handler.group = handler.admin = true

export default handler
