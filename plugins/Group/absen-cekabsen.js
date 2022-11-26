
let handler = async (m, { conn, groupMetadata, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) await conn.sendButton(m.chat, `_*Tidak ada absen berlangsung digrup ini!*_\n\n*${usedPrefix}mulaiabsen* - untuk memulai absen`, wm, null, [
                ['Mulaiabsen', `${usedPrefix}mulaiabsen`]
            ], m)
            
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let absen = conn.absen[id][1]
    let list = absen.map((v, i) => `┊• ${i + 1}.  @${v.split`@`[0]}`).join('\n')
            let caption = `*⫹⫺ TANGGAL ⫹⫺*\n${date}
${conn.absen[id][2]}

*⫹⫺ SUDAH ABSEN ⫹⫺*
*Total:* ${absen.length}

❏─┅──┅〈
${list}
┗┅────────┅✦
`
await conn.sendButton(m.chat, caption, wm, null, [['absen', `${usedPrefix}absen`], ['cekabsen', `${usedPrefix}cekabsen`]], m, { mentions: conn.parseMention(caption) })

}
handler.help = ['cekabsen']
handler.tags = ['absen']
handler.command = /^cekabsen$/i
handler.group = true
export default handler