import {readFileSync} from 'fs'
let handler = async (m, { conn}) => {
    conn.reply(m.chat, 'Tunggu Sebentar, Sedang mengambil file sesi mu')
    let sesi = readFileSync('./session.data.json')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'session.data.json' }, { quoted: m })
}
handler.help = ['getsessi']
handler.tags = ['host']
handler.command = /^(g(et)?ses?si(on)?(data.json)?)$/i

handler.rowner = true

export default handler