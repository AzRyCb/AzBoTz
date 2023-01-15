import db from '../../lib/database.js'
let handler = async (m, { conn }) => {
  let user = db.data.users[m.sender]
let LastClaim = user.lastclaim
let cdm = `${MeNit(new Date - LastClaim)}`
let cds = `${DeTik(new Date - LastClaim)}`
let cd1 = Math.ceil(44 - cdm)
let cd2 = Math.ceil(59 - cds)
  if (new Date - user.lastclaim > 2700000) {
    user.uang += 7000
    user.exp += 100
    conn.reply(m.chat, 'Nih gaji lu +Rp7000')
    user.lastclaim = new Date * 1
  } else throw `Lu udah ambil jatah hari ini.\n\nTunggu ${cd1} Menit ${cd2} Detik!`
}
handler.help = ['gaji']
handler.tags = ['rpg']
handler.command = /^(gaji|gajian)$/i
handler.group = true
handler.private = false
handler.register = true

export default handler 

function JaM(ms) {
  let h = isNaN(ms) ? '60' : Math.floor(ms / 3600000) % 60
  return [h].map(v => v.toString().padStart(2, 0) ).join(':')
}

function MeNit(ms) {
  let m = isNaN(ms) ? '60' : Math.floor(ms / 60000) % 60
  return [m].map(v => v.toString().padStart(2, 0) ).join(':')
}

function DeTik(ms) {
  let s = isNaN(ms) ? '60' : Math.floor(ms / 1000) % 60
  return [s].map(v => v.toString().padStart(2, 0) ).join(':')
}
