import db from '../../lib/database.js'
let handler = async (m, { conn }) => {
let user = db.data.users[m.sender]
let name = user.name
let level = user.level
let exp = user.exp
let paus = user.paus
let kepiting = user.kepiting
let gurita = user.gurita
let cumi = user.cumi
let buntal = user.buntal
let dory = user.dory
let lumba = user.lumba
let lobster = user.lobster
let hiu = user.hiu
let udang = user.udang
let ikan = user.ikan
let orca = user.orca
let past = `*—「 KOLAM 🏝️ 」—*
  
*💌 Name :* ${name}
*📊 Level :* ${level}
*✨ Exp :* ${exp}

⛊━─┈────────┈─━⛊
🐳 Paus: *${paus}*   
🦀 Kepiting: *${kepiting}*   
🐙 Gurita: *${gurita}*   
🦑 Cumi: *${cumi}*   
🐡 Buntal: *${buntal}*  
🐠 Dory: *${dory}*
🐬 Lumba: *${lumba}*
🦞 Lobster: *${lobster}*
🦈 Hiu: *${hiu}*
🦐 Udang: *${udang}*
🐟 Ikan: *${ikan}*
🐋 Orca: *${orca}*
⛊━─┈────────┈─━⛊
🎏 Total Isi: *${paus + kepiting + gurita + cumi + buntal + dory + lumba + lobster + hiu + udang + ikan + orca}* Jenis`
let isi = ` *🦀Kepiting = ${kepiting}*
*🐠Dory = ${dory}*
*🦞Lobster = ${lobster}*
*🐟Ikan = ${ikan}*
*🦐Udang = ${udang}*
*🐬Lumba² = ${lumba}*
*🦑Cumi² = ${cumi}*
*🐋Paus = ${paus}*
*🐙Gurita = ${gurita}*
*🦈Hiu = ${hiu}*
*🐡Buntal = ${buntal}*
*🐳Orca = ${orca}*`.trim()
  conn.sendButton(m.chat, past, set.wm, [['Pasar', '#pasar']], m)
  }
  handler.help = ['kotakikan', 'kolam', 'kolamikan']
  handler.tags = ['rpg']
  handler.command = /^(kotak(ikan)?|kolam(ikan)?)$/i
  handler.register = true
export default handler 


const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
