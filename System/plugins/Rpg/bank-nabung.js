import db from '../../lib/database.js'
const xpperlimit = 1
let handler = async (m, { conn, command, args }) => {
	let user = db.data.users[m.sender]
  let count = command.replace(/^nabung/i, '')
  count = count ? /all/i.test(count) ? Math.floor(db.data.users[m.sender].money / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (user.atm == 0) return conn.reply(m.chat, 'kamu belum mempuyai atm !')
  if (user.bank > user.fullatm) return conn.reply(m.chat, 'Uang dibankmu sudah penuh!')
  if (count > user.fullatm - user.bank) return conn.reply(m.chat, 'Uangnya ga muat dibank')
  if (db.data.users[m.sender].money >= xpperlimit * count) {
    db.data.users[m.sender].money -= xpperlimit * count
    db.data.users[m.sender].bank += count
    conn.reply(m.chat, `Sukses menabung sebesar ${count} Money 💹`, m)
  } else conn.reply(m.chat, `[❗] Uang anda tidak mencukupi untuk menabung ${count} money 💹`, m)
}
handler.help = ['nabung'].map(v => v + ' <jumlah>')
handler.tags = ['bank']
handler.command = /^nabung([0-9]+)|nabung|nabungall$/i

export default handler