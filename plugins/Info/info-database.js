import { plugins } from  '../lib/plugins.js'
import db from '../lib/database.js'
let handler = async (m) => {
    let totalreg = Object.keys(db.data.users).length
    let rtotalreg = Object.values(db.data.users).filter(user => user.registered == true).length
    m.reply(`*Jumlah pengguna database saat ini adalah ${totalreg} user*`)
}
handler.help = ['database']
handler.tags = ['info']
handler.command = /^(database|jumlahdatabase|user)$/i
handler.limit = true

export default handler
