let handler = async (m, { conn, text, usedPrefix, command }) => {
let str = `${set.htjava}\n${set.dmenub} ${conn.user.name} Source Code:\n${set.dmenub} ${set.gh}\n${set.dmenuf}`
await conn.sendPayment(m.chat, set.fsizedoc, 'USD', str, m.sender, set.logo, m)
let str2 = `*[ Source Code ]*
- My Github:
${set.gh}`
await conn.sendPayment(m.chat, set.fsizedoc, 'USD', str, '0@s.whatsapp.net', set.logo, m)
}
handler.tags = ['info']
handler.help = ['Script']
handler.command = /^sc(ript(bot)?|bot)?$/i
export default handler