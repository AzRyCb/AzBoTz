
let handler = async (m, { conn, groupMetadata, usedPrefix, command }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) await conn.sendButton(m.chat, `Tidak ada voting digrup ini!`, set.wm, null, [
    ['vote', `${usedPrefix}+vote`],
    ['venu', `${usedPrefix}menu`]
], fakes, adReply)
    let isVote = conn.vote[id][1].concat(conn.vote[id][2])
    const wasVote = isVote.includes(m.sender)
    if (wasVote) throw 'Kamu sudah vote!'
    if (/up/i.test(command)) {
        conn.vote[id][1].push(m.sender)
    } else if (/de/i.test(command)) {
        conn.vote[id][2].push(m.sender)
    }
    
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
        ['devote', `${usedPrefix}devote`]
    ], fakes, adReply, { mentions: conn.parseMention(caption) })
}
handler.help = ['upvote', 'devote']
handler.tags = ['vote']
handler.command = /^(up|de)vote$/i
handler.group = true

export default handler
