import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
    if (command == 'nenen2') {
    if (!text) throw `Masukkan query!`
              let awikwok = `NENEN NENEN KEPENGEN NENEN SAMA ${text}. TETEK GEDE NAN KENCANG MILIK ${text} MEMBUATKU KEPENGEN NENEN. DIBALUT PAKAIAN KETAT YANG ADUHAI CROOOOTOTOTOTOTOT ANJING SANGE GUA BANGSAT. ${text}, PLIS DENGERIN BAIK BAIK. TOLONG BUKA BAJU SEBENTAR SAJA PLISSS TOLOOONG BANGET, BIARKAN MULUT KERINGKU BISA MENGECAP NENEN ${text}. BIARKAN AKU MENGENYOT NENENMU ${text}. AKU RELA NGASIH SESEMBAHAN APA AJA BERAPAPUN ITU DUIT YANG AKU BAKAR KHUSUS TERKHUSUS BUATMU. TAPI TOLOOOONG BANGET BUKA BAJUMU AKU MAU NENEN. NENEN NENEEEEN NENEN ${text} WANGIIII`
              conn.reply(m.chat, awikwok, null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})
}
/*
if (command == 'lastanime') {
let f = await fetch(`https://bx-hunter.herokuapp.com/api/anime/getlastanime?apikey=W46QBtQGOhiqfiClaxHqyAaIR`)
let xx = await f.json()
let str = xx.result.map((v, index) => {
        return `${1 + index}. Judul *${v.title}*
status: ${v.status}
episode: ${v.episode}
type: ${v.type}
link: ${v.link}
`.trim()
    }).join('\n\n')
    conn.sendButton(m.chat, str, set.wm, null, [
                ['SS!', `${usedPrefix}ssweb ${xx.result[0].link}`]
            ], fakes, adReply)
}
*/
}
handler.command = handler.help = ['nenen2']//'lastanime'
handler.tags = ['fun']

handler.limit = true

export default handler