import { jadwalsholat } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} semarang`
    const res = await jadwalsholat(text)
    conn.reply(m.chat, `
Jadwal Sholat *${text}*

${Object.entries(res.today).map(([name, data]) => `*Sholat ${name}:* ${data}`).join('\n').trim()}
`.trim())
}
handler.help = ['jadwalshalat <daerah>']
handler.tags = ['islam']
handler.command = /^(jadwal)?s(a|o|ha|ho)lat$/i

export default handler