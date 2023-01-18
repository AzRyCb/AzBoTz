import {writeFileSync} from 'fs'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `uhm.. teksnya mana?\n\npenggunaan:\n${usedPrefix + command} <teks>\n\ncontoh:\n${usedPrefix + command} menu`
    if (!m.quoted.text) throw `balas pesan nya!`
    let path = `System/plugins/${text}.js`
    writeFileSync(path, m.quoted.text)
    await conn.reply(m.chat, `Sukses tersimpan di ${path}`)
}
handler.help = ['saveplugin'].map(v => v + ' <teks>')
handler.tags = ['host']
handler.command = /^sfp|sfplugin|sfplugins|saveplugin$/i

handler.rowner = true
export default handler