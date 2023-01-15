import db from '../../lib/database.js'
let handler = async (m, { conn }) => {
  let user = db.data.users[m.sender]
    let __timers = (new Date - user.lastngojek)
    let _timers = (300000 - __timers)
    let order = user.ojekk
    let timers = clockString(_timers) 
let name = conn.getName(m.sender)
    
     if (new Date - user.lastngojek > 300000) {
let randomaku1 = `${Math.floor(Math.random() * 10)}`
let randomaku2 = `${Math.floor(Math.random() * 10)}`
let randomaku4 = `${Math.floor(Math.random() * 5)}`
let randomaku3 = `${Math.floor(Math.random() * 10)}`
let randomaku5 = `${Math.floor(Math.random() * 10)}`

.trim()

let rbrb1 = (randomaku1 * 2)
let rbrb2 = (randomaku2 * 10) 
let rbrb3 = (randomaku3 * 1)
let rbrb4 = (randomaku4 * 15729)
let rbrb5 = (randomaku5 * 120)

var zero1 = `${rbrb1}`
var zero2 = `${rbrb2}`
var zero3 = `${rbrb3}`
var zero4 = `${rbrb4}`
var zero5 = `${rbrb5}`

var dimas = `
👮Mengejar Pencuri....
`

var dimas2 = `
👮Menangkap pencuri....
`

var dimas3 = `
🚔Membawa ke kantor polisi\nDan di penjara
`

var dimas4 = `
➕ 💹Menerima gaji....
`

var hsl = `
*—[ Hasil Polisi ${name} ]—*
 ➕ 💹 Uang = [ ${zero4} ]
 ➕ ✨ Exp = [ ${zero5} ] 		 
 ➕ 😍 Order Selesai = +1
➕  📥Total Order Sebelumnya : ${order}
${wm}
`

var dimas5 = `
*👋HALLO, Waktunya misi Polisi lagi kak....*
`

user.money += rbrb4
user.exp += rbrb5
user.ojekk += 1


setTimeout(() => {
                     setTimeout(() => {
                      conn.reply(m.chat, `${dimas5}`)
                      }, 79200000)

                      conn.reply(m.chat, `${hsl}`)
                     }, 27000) 
               
                     setTimeout(() => {
                      conn.reply(m.chat, `${dimas4}`)
                      }, 25000)
                
                     setTimeout(() => {
                      conn.reply(m.chat, `${dimas3}`)
                     }, 20000) 
                        
                     setTimeout(() => {
                      conn.reply(m.chat, `${dimas2}`)
                     }, 15000) 
                    
                     setTimeout(() => {
                      conn.reply(m.chat, `${dimas}`)
                     }, 10000) 
                     
                     setTimeout(() => {
                      conn.reply(m.chat, '🔍Mencari pelanggan.....')
                     }, 0) 
  user.lastngojek = new Date * 1
    } else conn.sendButton(m.chat, `Sepertinya Anda Sudah Kecapekan Silahkan Istirahat Dulu sekitar\n🕔 ${timers}`, set.wm, [['🧺inventory', '.inv']], m )
}
handler.tags = ['rpg']
handler.command = handler.help = ['polisi']
handler.register = true

export default handler


function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}