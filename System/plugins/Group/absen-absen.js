let handler = async (m, { conn, groupMetadata, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        conn.sendButton(m.chat, `Tidak ada absen berlangsung!`, set.wm, null, [
        ['Mulaiabsen', `${usedPrefix}mulaiabsen`]
    ], m)
        throw false
    }
    
    let absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw 'Kamu sudah absen!'
    absen.push(m.sender)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    
    let list = absen.map((v, i) => `┊• ${i + 1}.  @${v.split`@`[0]}`).join('\n')
            let caption = `*⫹⫺ TANGGAL ⫹⫺*\n${date}
${conn.absen[id][2]}

*⫹⫺ DAFTAR ABSEN ⫹⫺*
*Total:* ${absen.length}

❏─┅──┅〈
${list}
┗┅────────┅✦
`
conn.sendButton(m.chat, caption, set.wm, null, [['absen', `${usedPrefix}absen`], ['cekabsen', `${usedPrefix}cekabsen`]], m, { mentions: conn.parseMention(caption) })


}
handler.help = ['absen']
handler.tags = ['absen']
handler.command = /^(absen|hadir)$/i

export default handler
