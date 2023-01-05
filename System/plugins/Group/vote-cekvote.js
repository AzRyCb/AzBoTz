
let handler = async (m, { conn, groupMetadata, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) await conn.sendButton(m.chat, `Tidak ada voting digrup ini!`, author, null, [
    ['vote', `${usedPrefix}+vote`],
    ['menu', `${usedPrefix}menu`]
], fakes, adReply)

    let [reason, upvote, devote] = conn.vote[id]
    let caption = `*${set.htjava} DAFTAR VOTE ${set.htjava}*
*Alasan:* ${reason}

*${set.htjava} UPVOTE ${set.htjava}*
*Total:* ${upvote.length}
${set.dmenut}
${upvote.map((v, i) => `${set.dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')}
${set.dmenuf}

*${set.htjava} DEVOTE ${set.htjava}*
*Total:* ${devote.length}
${set.dmenut}
${devote.map((v, i) => `${set.dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')}
${set.dmenuf}
`.trim()
await conn.sendButton(m.chat, caption, set.wm, null, [
        ['upvote', `${usedPrefix}upvote`],
        ['devote', `${usedPrefix}devote`],
        ['hapusvote', `${usedPrefix}-vote`]
    ], fakes, adReply, { mentions: conn.parseMention(caption) })
}
handler.help = ['cekvote']
handler.tags = ['vote']
handler.command = /^cekvote$/i
handler.group = true
export default handler