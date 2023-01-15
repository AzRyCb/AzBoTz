import { xpRange } from '../../lib/levelling.js'
import db from '../../lib/database.js'
let handler = async (m, { conn, usedPrefix }) => {
	let usr = db.data.users[m.sender]
    let users = db.data.users[m.sender]
	let { lasthourly, lastberburu, lastbansos, lastadventure, lastfishing, lastwar, lastduel, lastmining, lastdungeon, lastclaim, lastweekly, lastmonthly } = usr
	
    let healt = usr.healt
    let stamina = usr.stamina
    let armor = usr.armor 
    let sword = usr.sword
    let sdurability = usr.sworddurability
    let warn = usr.warn
    let tprem = usr.tprem
    let pancing = usr.pancing
    let fdurability = usr.fishingroddurability
    let role = usr.role
    let pickaxe = usr.pickaxe
    let pdurability = usr.pickaxedurability

    let psepick = usr.psepick
    let psenjata = usr.psenjata

    let ikan= usr.ikan
    let nila= usr.nila
    let bawal= usr.bawal
    let lele= usr.lele
    let udangb= usr.udang

    let apel = usr.apel
    let ayamg = usr.ayamg
    let ayamb = usr.ayamb
    let sapir = usr.sapir
    let ssapi = usr.ssapi
    let kayu = usr.kayu
    let string = usr.string
    let emas = usr.emas
    let besi = usr.iron
    let batu = usr.batu
    let sapi = usr.sapi
    let ayam = usr.ayam
    let babi = usr.babi
    let banteng = usr.banteng
    let pet = usr.pet
    let kucing = usr.kucing
    let _kucing = usr.anakkucing
    let rubah = usr.rubah
    let _rubah = usr.anakrubah
    let kuda = usr.kuda
    let _kuda = usr.anakkuda
    let diamond = usr.diamond
    let potion = usr.potion
    let common = usr.common
    let makananpet = usr.makananpet
    let uncommon = usr.uncommon
    let mythic = usr.mythic
    let legendary = usr.legendary
    let level = usr.level
    let money = usr.money
    let exp = usr.exp
    let atm = usr.atm
    let arlok = usr.arlok
    let limit = usr.limit
    let glimit = usr.glimit
    let sampah = usr.sampah
    let { max } = xpRange(level, exp, set.multiplier)
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let name = await conn.getName(who)
    let sortedmoney = Object.entries(users).sort((a, b) => b[1].money - a[1].money)
    let sortedgold = Object.entries(users).sort((a, b) => b[1].gold - a[1].gold)
    let sortedarlok = Object.entries(users).sort((a, b) => b[1].arlok - a[1].arlok)
    let sortedlevel = Object.entries(users).sort((a, b) => b[1].level - a[1].level)
    let sorteddiamond = Object.entries(users).sort((a, b) => b[1].diamond - a[1].diamond)
    let sortedpotion = Object.entries(users).sort((a, b) => b[1].potion - a[1].potion)
    let sortedsampah = Object.entries(users).sort((a, b) => b[1].sampah - a[1].sampah)
    let sortedcommon = Object.entries(users).sort((a, b) => b[1].common - a[1].common)
    let sorteduncommon = Object.entries(users).sort((a, b) => b[1].uncommon - a[1].uncommon)
    let sortedmythic = Object.entries(users).sort((a, b) => b[1].mythic - a[1].mythic)
    let sortedlegendary = Object.entries(users).sort((a, b) => b[1].legendary - a[1].legendary)
    let usersmoney = sortedmoney.map(v => v[0])
    let usersgold = sortedgold.map(v => v[0])
    let usersarlok = sortedarlok.map(v => v[0])
    let usersdiamond = sorteddiamond.map(v => v[0])
    let userspotion = sortedpotion.map(v => v[0])
    let userssampah = sortedsampah.map(v => v[0])
    let userslevel = sortedlevel.map(v => v[0])
    let userscommon = sortedcommon.map(v => v[0])
    let usersuncommon = sorteduncommon.map(v => v[0])
    let usersmythic = sortedmythic.map(v => v[0])
    let userslegendary = sortedlegendary.map(v => v[0])
    let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Inventory'
    let str = `
*—「 🕖 Cooldown 」—*
*Last Berburu :* ${lastberburu > 0 ? '❌' : '✅'}
*Last Memancing :* ${lastfishing > 0 ? '❌' : '✅'}
*Last Adventure :* ${lastadventure > 0 ? '❌' : '✅'}
*Last Duel :* ${lastduel > 0 ? '❌' : '✅'}
*Last War :* ${lastwar > 0 ? '❌'  : '✅'}
*Last Dungeon :* ${lastdungeon > 0 ? '❌' : '✅'}
*Last Mining :* ${lastmining > 0 ? '❌' : '✅'}
*Last Bansos :* ${lastbansos > 0 ? '❌' : '✅'}
*Last Hourly :* ${lasthourly > 0 ? '❌' : '✅'}
*Last Claim :* ${lastclaim > 0 ? '❌' : '✅'}
*Last Weekly :* ${lastweekly > 0 ? '❌' : '✅'}
*Last Monthly :* ${lastmonthly > 0 ? '❌' : '✅'}
\n${readMore}
⚠️ *Warn:* ${warn}
⛔ *Banned:* No
`.trim()
    await conn.sendButton(m.chat, str, set.wm2, null, [[`Inventory`, `.inv`, `Profile`, `.profile`]], m)
}
handler.help = ['cooldown']
handler.tags = ['rpg']
handler.command = /^(cd|cooldown)$/i
handler.register = false
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4201)

