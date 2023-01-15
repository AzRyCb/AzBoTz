let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!m.quoted) throw 'reply pesan!'
    let q = await m.getQuotedObj()
    if (!q.quoted) throw 'pesan yang anda reply tidak mengandung reply!'
    await q.quoted.copyNForward(m.chat, true)
}
handler.command = handler.help = ['q']
handler.tags = ['Baileys']
export default handler