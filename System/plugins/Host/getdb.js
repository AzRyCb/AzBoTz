import {readFileSync} from 'fs'
let handler = async (m, { conn, text }) => {
    conn.reply(m.chat, 'Tunggu Sebentar, Sedang mengambil file Database')
    let sesi = readFileSync('./database.json')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'database.json' }, { quoted: m })
}
handler.help = ['getdb']
handler.tags = ['host']
handler.command = /^(getdb|getdatabase)$/i

handler.rowner = true

export default handler