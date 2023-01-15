import db from '../../lib/database.js'
let handler = async (m, {
	conn,
	usedPrefix
}) => {
	let user = db.data.users[m.sender]
	let banteng = user.banteng
	let harimau = user.harimau
	let gajah = user.gajah
	let kambing = user.kambing
	let panda = user.panda
	let buaya = user.buaya
	let kerbau = user.kerbau
	let sapi = user.sapi
	let monyet = user.monyet
	let babihutan = user.babihutan
	let babi = user.babi
	let ayam = user.ayam

	let ndy = `
*${set.htki} KANDANG ${set.htka}*
    
 *➡️   ️ 🐂 = [ ${banteng} ] Ekor Banteng*
 *➡️   ️ 🐅 = [ ${harimau} ] Ekor Harimau*
 *➡️   ️ 🐘 = [ ${gajah} ] Ekor Gajah*
 *➡️   ️ 🐐 = [ ${kambing} ] Ekor Kambing*
 *➡️   ️ 🐼 = [ ${panda} ] Ekor Panda*
 *➡️   ️ 🐊 = [ ${buaya} ] Ekor Buaya*
 *➡️   ️ 🐃 = [ ${kerbau} ] Ekor Kerbau*
 *➡️   ️ 🐮 = [ ${sapi} ] Ekor Sapi*
 *➡️   ️ 🐒 = [ ${monyet} ] Ekor Monyet*
 *➡️   ️ 🐗 = [ ${babihutan} ] Ekor Babi Hutan*
 *➡️   ️ 🐖 = [ ${babi} ] Ekor Babi*
 *➡️   ️ 🐓 = [ ${ayam} ] Ekor Ayam*
 
 `.trim()
	await conn.sendButton(m.chat, ndy, set.wm, null, [['Menu', `${usedPrefix}menu`],['Owner', `${usedPrefix}owner`]], m)

}
handler.help = handler.command = ['kandang']
handler.tags = ['rpg']

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
