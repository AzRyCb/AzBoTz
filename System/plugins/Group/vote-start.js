let handler = async (m, { conn, text, usedPrefix, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    }
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) await conn.sendButton(m.chat, `*Masih ada vote di chat ini!*`, set.wm, null, [
                ['hapus', `${usedPrefix}-vote`]
            ], fakes, adReply)
            let caption = `${set.htjava} MULAI VOTE ${set.htjava}
${set.dmenub} *${usedPrefix}upvote* - untuk setuju
${set.dmenub} *${usedPrefix}devote* - untuk tidak setuju
${set.dmenub} *${usedPrefix}cekvote* - untuk mengecek vote
${set.dmenub} *${usedPrefix}hapusvote* - untuk menghapus vote
${set.dmenuf}`
            await conn.sendButton(m.chat, caption, set.wm, null, [
                ['upvote', `${usedPrefix}upvote`],
                ['devote', `${usedPrefix}devote`]
            ], fakes, adReply)
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['mulaivote [alasan]']
handler.tags = ['vote']
handler.command = /^(start|mulai|\+)vote$/i
handler.group = handler.admin = true
export default handler