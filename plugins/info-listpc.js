let handler = async(m, { conn }) => {
let pc = Object.entries(await conn.chats)
let niorg = pc.filter(([jid]) => jid.endsWith('@s.whatsapp.net'))
let thumbListpc = `https://telegra.ph/file/d5a1cc2ab8af9bf5acf83.jpg`
let txt = ''
    for (let [jid] of niorg)
txt += `${set.htjava} ${await conn.getName(jid)}\n${set.dmenub} ${'@' + jid.replace(/@.+/, '')}\n${set.cmenua}\n\n`
return conn.sendButton(m.chat, set.htki + ' *CHAT PRIVATE* ' + set.htka + '\n' + set.bottime, '*Total:* ' + niorg.length + '\n\n' + txt.trim(), wm, [['Sewa Bot', '.sewa'],['Groups List', '.groups']], m, { mentions: conn.parseMention(txt) })
}
handler.help = ['listpc']
handler.tags = ['info']
handler.command = /^listpc|pclist|daftarpc|pc$/i
handler.owner = true

export default handler
