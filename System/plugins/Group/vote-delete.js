let handler = async (m, { conn, usedPrefix, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    }
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) await conn.sendButton(m.chat, `Tidak ada voting digrup ini!`, set.wm, null, [
    ['vote', `${usedPrefix}+vote`],
    ['menu', `${usedPrefix}menu`]
], fakes, adReply)
    delete conn.vote[id]
    conn.reply(m.chat, `Berhasil!`)
}
handler.help = ['hapusvote']
handler.tags = ['vote']
handler.command = /^(delete|hapus|-)vote$/i
handler.group = handler.admin = true

export default handler