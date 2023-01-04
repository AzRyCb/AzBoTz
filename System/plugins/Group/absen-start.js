let handler = async (m, { conn, usedPrefix, text }) => {
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
         conn.sendButton(m.chat, `_*Masih ada absen di chat ini!*_\n\n*${usedPrefix}hapusabsen* - untuk menghapus absen`, set.wm, null, [
                ['hapusabsen', `${usedPrefix}hapusabsen`]
            ], fakes, adReply)
    }
    conn.absen[id] = [
        conn.sendButton(m.chat, `Berhasil memulai absen!\n\n*${usedPrefix}absen* - untuk absen\n*${usedPrefix}cekabsen* - untuk mengecek absen\n*${usedPrefix}hapusabsen* - untuk menghapus data absen`, set.wm, null, [
                ['absen', `${usedPrefix}absen`]
            ], fakes, adReply),
        [],
        text
    ]
}
handler.help = ['mulaiabsen [teks]']
handler.tags = ['absen']
handler.command = /^(start|mulai)absen$/i
handler.group = handler.admin = true

export default handler
