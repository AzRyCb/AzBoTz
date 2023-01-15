import db from '../../lib/database.js'

let handler = async(m, { conn, args, usedPrefix }) => {
    let user = db.data.users[m.sender]
    if (args.length == 0) return conn.reply(m.chat, `Harap masukan Kode FreeGiftmu!`, m)
    if (args[0] == 'azbot' || args[0] == 'ketcheh' || args[0] == 'BloowwXx' || args[0] == 'BbL016JJQBCSr54OwwW0' || args[0] == 'giftkey01389320007' || args[0] == 'kode013923') {

    if (new Date - user.lastgift > 86400000) {
       conn.reply(m.chat, '*🎉 SELAMAT!*\nKamu telah mendapatkan\n1000 XP ✨\n 1 Limit! 🎫\n1000 Money 💹\n1 Potion 🥤', m)
    user.exp += 1000
    user.limit += 1
    user.money +=1000
    user.potion += 1
    user.lastclaim = new Date * 1
} else conn.reply(m.chat, '[❗] Kode Gift Gratis hanya dapat digunakan sehari sekali ! dan kode hanya bisa di pakai sekali !\n\nKetik *!buygift* untuk membeli kodegift premium', m)
   } else {
        conn.reply(m.chat, `*「 KODE FREE TIDAK VALID 」*\n\nSilahkan daftar terlebih dahulu untuk mendapatkan kodegift gratis!\n\nKetik !daftar namamu|umurmu`, m)
    }
}
handler.help = ['freegift <kode>']
handler.tags = ['rpg']
handler.command = /^(freegift)$/i

export default handler 
