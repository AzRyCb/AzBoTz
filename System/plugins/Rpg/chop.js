import db from '../../lib/database.js'
let handler = async (m, { conn, usedPrefix, DevMode }) => { 
        let users = db.data.users[m.sender]
        let __timers = (new Date - users.lastmining)
        let _timers = (180000 - __timers) 
        let timers = clockString(_timers)

        if (users.healt > 79) {
            if (new Date - users.lastmining > 180000) {
            let armor = users.armor
            let rubah = users.rubah
            let kuda = users.kuda
            let kucing = users.kucing
            let ____health = `${Math.floor(Math.random() * 101)}`.trim()
            let ___health = (____health * 1)
            let kucingnya = (kucing == 0? 0 : '' || kucing == 1 ? 5 : '' || kucing == 2 ? 10 : '' || kucing == 3 ? 15 : '' || kucing == 4 ? 21 : ''  || kucing == 5 ? 30 : '')
            let armornya = (armor == 0 ? 0 : '' || armor == 1 ? 5 : '' || armor == 2 ? 10 : '' || armor == 3 ? 15 : '' || armor == 4 ? 21 : '' || armor == 5 ? 30 : '')
            let __health = (___health > 60 ? ___health - kucingnya - armornya : ___health)
            let healt = (kucing == 0 && armor == 0 ? pickRandom(['100', '99', '98', '97', '96', '95', '94', '93', '92', '91', '90']) : kucing > 0 && armor > 0 ? __health : ___health)
            let _potion = `${Math.floor(Math.random() * 2)}`.trim()
            let potion = (_potion * 1)
            let _common = `${Math.floor(Math.random() * 3)}`.trim()
            let common = (_common * 1)
            let _uncommon = `${Math.floor(Math.random() * 2)}`.trim()
            let uncommon = (_uncommon * 1) 
            let _mythic = `${pickRandom(['1', '0', '0', '1'])}`
            let mythic = (_mythic * 1)
            let _legendary = `${pickRandom(['1', '0', '0', '0'])}`
            let sampah = `${Math.floor(Math.random() * 300)}`.trim()
            let legendary = (_legendary * 1)
            let diamond =  `${Math.floor(Math.random() * 10)}`.trim()
            let kayu =  `${Math.floor(Math.random() * 150)}`.trim() 
            let batu =  `${Math.floor(Math.random() * 100)}`.trim() 
            let iron = `${Math.floor(Math.random() * 100)}`.trim()
            let exp = `${Math.floor(Math.random() * 500)}`.trim() 
            let uang = `${Math.floor(Math.random() * 500)}`.trim() 
            conn.reply(m.chat, '↓Chopping:', m)
            let str = `
❤️ While you chopping, you got:
🗡️wood: ${kayu}
🔩Iron: ${iron}
💵Gold: ${uang}
⚜️Xp: ${exp}
and you got Additional gifts
💎diamond: ${diamond}
`.trim()
            await conn.sendButton(m.chat, str, set.wm, null, [['INVENTORY', '/inv']], m)
            
            users.kayu += kayu * 1
            users.diamond += diamond * 1
            users.batu += batu * 1
            users.iron += iron * 1
            users.exp += exp * 1
            users.money += uang * 1
            users.lastmining = new Date * 1
            } else conn.reply(m.chat, `Please wait  ${timers} again`, m)
        } else conn.reply(m.chat, 'minimum 80 healt to do choping', m)

}
handler.help = ['chop', 'chopig']
handler.tags = ['rpg']
handler.command = /^(chop|choping)$/i

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}