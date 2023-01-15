import db from '../../lib/database.js'
let handler = async (m, { conn }) => {
    let __timers = (new Date - db.data.users[m.sender].lastngojek)
    let _timers = (300000 - __timers)
    let order = db.data.users[m.sender].ojekk
    let timers = clockString(_timers) 
let name = conn.getName(m.sender)
    let user = db.data.users[m.sender]
    
     if (new Date - db.data.users[m.sender].lastngojek > 300000) {
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
let rbrb5 = (randomaku5 * 20000)

var zero1 = `${rbrb1}`
var zero2 = `${rbrb2}`
var zero3 = `${rbrb3}`
var zero4 = `${rbrb4}`
var zero5 = `${rbrb5}`

var dimas = `
✔️ Mendapatkan pelanggan....
`

var dimas2 = `
🥵 Mulai mengocok.....
`

var dimas3 = `     
🥵Ahhhh, Sakitttt!! >////<
 💦Crotttt.....
`

var dimas4 = `
🥵💦💦Ahhhhhh😫
`

var hsl = `
*—[ Hasil Ngewe ${name} ]—*
 ➕ 💹 Uang = [ ${zero4} ]
 ➕ ✨ Exp = [ ${zero5} ] 
 ➕ 📛 Warn = +1		 
 ➕ 😍 Order Selesai = +1
➕  📥Total Order Sebelumnya : ${order}
${wm}
`


db.data.users[m.sender].warn += 1
db.data.users[m.sender].money += rbrb4
db.data.users[m.sender].exp += rbrb5
db.data.users[m.sender].ojekk += 1


setTimeout(() => {
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
    } else conn.sendButton(m.chat, `Sepertinya Anda Sudah Kecapekan Silahkan Istirahat Dulu sekitar\n🕔 *${timers}*`, set.wm, 'inventory', '.inv', m )
}
handler.help = ['ngewe']
handler.tags = ['work']
handler.command = /^(ngewe|anu)$/i
handler.register = handler.premium = true

export default handler


function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
