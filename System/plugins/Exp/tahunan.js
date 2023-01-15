import db from '../../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let time = db.data.users[m.sender].lastcode + 86400000
  if (new Date - db.data.users[m.sender].lastcode < 86400000) throw `Anda sudah mengambil hadiah tahun baru 😅`
let cupon = db.data.users[m.sender].cupon += 10
conn.reply(m.chat, 'Berhasil mendapatkan 10 cupon')
db.data.users[m.sender].lastcode = new Date * 1
}
handler.customPrefix = /^(Happy New Years)$/i
handler.command = new RegExp
handler.limit = true

export default handler 

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}