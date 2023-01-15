
const timeout = 604800000
import db from '../../lib/database.js'
let handler = async (m, { conn, usedPrefix, text }) => {
	    let time = db.data.users[m.sender].lastmulung + 604800000
  if (new Date - db.data.users[m.sender].lastmulung< 604800000) throw `📮Anda sudah merampok bank\nTunggu selama ⏲️ ${msToTime(time - new Date())} lagi`
	let botolnye = `${Math.floor(Math.random() * 30000)}`.trim()
	let kalengnye = `${Math.floor(Math.random() * 999)}`.trim()
	let kardusnye = `${Math.floor(Math.random() * 1000)}`.trim()
	db.data.users[m.sender].money += botolnye * 1
	db.data.users[m.sender].exp += kalengnye * 1
	db.data.users[m.sender].kardus += kardusnye * 1
	db.data.users[m.sender].lastmulung = new Date * 1
  conn.reply(m.chat, `Selamat kamu mendapatkan : \n💰+${botolnye} Money\📦n+${kardusnye} Kardus\n✨+${kalengnye} Exp`)
  setTimeout(() => {
					conn.reply(m.chat, `Yuk waktunya Maling lagi 👋…`, m)
					}, timeout)
}
handler.help = handler.command = ['maling']
handler.tags = ['work']
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

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}