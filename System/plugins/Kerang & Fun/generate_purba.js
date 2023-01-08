let handler = async (m, { conn, text, command, usedPrefix }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    conn.reply(m.chat, teks.replace(/[aiueo]/gi, '$&ve'))
}
handler.help = ['purba <teks>']
handler.tags = ['fun']
handler.command =  /^(purba)$/i


export default handler