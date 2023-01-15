import db from '../../lib/database.js'
let handler = async (m, { conn, args, usedPrefix }) => {
    let user = db.data.users[m.sender]
    let type = (args[0] || '').toLowerCase()
    let timebah = 600000
    let timeda = 600000
    let timela = 600000
    let timega = 600000
    let timebi = 600000
    let timeur = 600000
    let timenix = 600000
    let timefin = 600000
    let timecing = 600000
    let timeher = 600000
    let rubah = user.rubah
    let kuda = user.kuda
    let serigala = user.serigala
    let naga = user.naga
    let kucing = user.kucing
    let phonix = user.phonix
    let kyubi = user.kyubi
    let centaur = user.centaur
    let griffin = user.griffin
    let hero = user.hero
    switch (type) {
        case 'rubah':
            if (rubah == 0) return conn.reply(m.chat, '*Kamu belum memiliki Pet Rubah*')
            if (rubah == 5) return conn.reply(m.chat, '*Pet kamu dah lvl max*')
            let __waktur = (new Date - user.ramuanrubahlast)
            let _waktur = (600000 - __waktur)
            let waktur = clockString(_waktur)
            if (new Date - user.ramuanrubahlast > 600000) {
                if (user.ramuan > 0) {
                    user.ramuan -= 1
                    user.anakrubah += 200
                    user.ramuanrubahlast = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi ramuan pet ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi ramuan pet *Rubah*', m)
                    }, timebah)
                    if (rubah > 0) {
                        let naiklvl = ((rubah * 1000) - 1)
                        if (user.anakrubah > naiklvl) {
                            user.rubah += 1
                            user.anakrubah -= (rubah * 1000)
                            conn.reply(m.chat, `*Selamat Pet Rubah kamu naik level*`, m)
                        }
                    }
                } else conn.reply(m.chat, `Ramuan pet kamu tidak cukup`)
            } else conn.reply(m.chat, `Pet kamu sudah meminum ramuan, coba beberapa ${waktur} lagi`)
            break
        case 'kuda':
            if (kuda == 0) return conn.reply(m.chat, '*Kamu belum memiliki Pet Kuda*')
            if (kuda == 5) return conn.reply(m.chat, '*Pet kamu dah lvl max*')
            let __waktuk = (new Date - user.ramuankudalast)
            let _waktuk = (600000 - __waktuk)
            let waktuk = clockString(_waktuk)
            if (new Date - user.ramuankudalast > 600000) {
                if (user.ramuan > 0) {
                    user.ramuan -= 1
                    user.anakkuda += 200
                    user.ramuankudalast = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi ramuan pet ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi ramuan pet *Kuda*', m)
                    }, timeda)
                    if (kuda > 0) {
                        let naiklvl = ((kuda * 1000) - 1)
                        if (user.anakkuda > naiklvl) {
                            user.kuda += 1
                            user.anakkuda -= (kuda * 1000)
                            conn.reply(m.chat, `*Selamat Pet Kuda kamu naik level*`, m)
                        }
                    }
                } else conn.reply(m.chat, `Ramuan pet kamu tidak cukup`)
            } else conn.reply(m.chat, `Pet kamu sudah meminum ramuan, coba beberapa ${waktuk} lagi`)
            break
        case 'serigala':
            if (serigala == 0) return conn.reply(m.chat, '*Kamu belum memiliki Pet Serigala*')
            if (serigala == 15) return conn.reply(m.chat, '*Pet kamu dah lvl max*')
            let __waktus = (new Date - user.ramuanserigalalast)
            let _waktus = (600000 - __waktus)
            let waktus = clockString(_waktus)
            if (new Date - user.ramuanserigalalast > 600000) {
                if (user.ramuan > 0) {
                    user.ramuan -= 1
                    user.anakserigala += 200
                    user.ramuanserigalalast = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi ramuan pet ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi ramuan pet *Serigala*', m)
                    }, timela)
                    if (serigala > 0) {
                        let naiklvl = ((serigala * 10000) - 1)
                        if (user.anakserigala > naiklvl) {
                            user.serigala += 1
                            user.anakserigala -= (serigala * 10000)
                            conn.reply(m.chat, `*Selamat Pet Serigala kamu naik level*`, m)
                        }
                    }
                } else conn.reply(m.chat, `Ramuan pet kamu tidak cukup`)
            } else conn.reply(m.chat, `Pet kamu sudah meminum ramuan, coba beberapa ${waktus} lagi`)
            break
        case 'naga':
            if (naga == 0) return conn.reply(m.chat, '*Kamu belum memiliki Pet naga*')
            if (naga == 20) return conn.reply(m.chat, '*Pet kamu dah lvl max*')
            let __waktug = (new Date - user.ramuannagalast)
            let _waktug = (600000 - __waktug)
            let waktug = clockString(_waktug)
            if (new Date - user.ramuannagalast > 600000) {
                if (user.ramuan > 0) {
                    user.ramuan -= 1
                    user.anaknaga += 200
                    user.ramuannagalast = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi ramuan pet ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi ramuan pet *Naga*', m)
                    }, timega)
                    if (naga > 0) {
                        let naiklvl = ((naga * 10000) - 1)
                        if (user.anaknaga > naiklvl) {
                            user.naga += 1
                            user.anaknaga -= (naga * 10000)
                            conn.reply(m.chat, `*Selamat Pet Naga kamu naik level*`, m)
                        }
                    }
                } else conn.reply(m.chat, `Ramuan pet kamu tidak cukup`)
            } else conn.reply(m.chat, `Pet kamu sudah meminum ramuan, coba beberapa ${waktug} lagi`)
            break 
      case 'kyubi':
            if (kyubi == 0) return conn.reply(m.chat, '*Kamu belum memiliki Pet kyubi*')
            if (kyubi == 20) return conn.reply(m.chat, '*Pet kamu dah lvl max*')
            let __waktuyu = (new Date - user.ramuankyubilast)
            let _waktuyu = (600000 - __waktuyu)
            let waktuyu = clockString(_waktuyu)
            if (new Date - user.ramuankyubilast > 600000) {
                if (user.ramuan > 0) {
                    user.ramuan -= 1
                    user.anakkyubi += 200
                    user.ramuankyubilast = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi ramuan pet ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi ramuan pet *Kyubi*', m)
                    }, timebi)
                    if (kyubi > 0) {
                        let naiklvl = ((kyubi * 10000) - 1)
                        if (user.anakkyubi > naiklvl) {
                            user.kyubi += 1
                            user.anakkyubi -= (kyubi * 10000)
                            conn.reply(m.chat, `*Selamat Pet Kyubi kamu naik level*`, m)
                        }
                    }
                } else conn.reply(m.chat, `Ramuan pet kamu tidak cukup`)
            } else conn.reply(m.chat, `Pet kamu sudah meminum ramuan, coba beberapa ${waktuyu} lagi`)
            break 
      case 'centaur':
            if (centaur == 0) return conn.reply(m.chat, '*Kamu belum memiliki Pet centaur*')
            if (centaur == 20) return conn.reply(m.chat, '*Pet kamu dah lvl max*')
            let __waktuur = (new Date - user.ramuancentaurlast)
            let _waktuur = (600000 - __waktuur)
            let waktuur = clockString(_waktuur)
            if (new Date - user.ramuancentaurlast > 600000) {
                if (user.ramuan > 0) {
                    user.ramuan -= 1
                    user.anakcentaur += 200
                    user.ramuancentaurlast = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi ramuan pet ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi ramuan pet *Centaur*', m)
                    }, timeur)
                    if (centaur > 0) {
                        let naiklvl = ((centaur * 10000) - 1)
                        if (user.anakcentaur > naiklvl) {
                            user.centaur += 1
                            user.anakcentaur -= (centaur * 10000)
                            conn.reply(m.chat, `*Selamat Pet Centaur kamu naik level*`, m)
                        }
                    }
                } else conn.reply(m.chat, `Ramuan pet kamu tidak cukup`)
            } else conn.reply(m.chat, `Pet kamu sudah meminum ramuan, coba beberapa ${waktuur} lagi`)
            break 
         case 'phonix':
            if (phonix == 0) return conn.reply(m.chat, '*Kamu belum memiliki Pet Phonix*')
            if (phonix == 15) return conn.reply(m.chat, '*Pet kamu dah lvl max*')
            let __waktux = (new Date - user.ramuanphonixlast)
            let _waktux = (600000 - __waktux)
            let waktux = clockString(_waktux)
            if (new Date - user.ramuanphonixlast > 600000) {
                if (user.ramuan > 0) {
                    user.ramuan -= 1
                    user.anakphonix += 200
                    user.ramuanphonixlast = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi ramuan pet ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi ramuan pet *Phonix*', m)
                    }, timenix)
                    if (phonix > 0) {
                        let naiklvl = ((phonix * 10000) - 1)
                        if (user.anakphonix > naiklvl) {
                            user.phonix += 1
                            user.anakphonix -= (phonix * 10000)
                            conn.reply(m.chat, `*Selamat Pet Phonix kamu naik level*`, m)
                        }
                    }
                } else conn.reply(m.chat, `Ramuan pet kamu tidak cukup`)
            } else conn.reply(m.chat, `Pet kamu sudah kenyang, coba beberapa ${waktux} lagi`)
            break
        case 'griffin':
            if (griffin == 0) return conn.reply(m.chat, '*Kamu belum memiliki Pet Griffin*')
            if (griffin == 15) return conn.reply(m.chat, '*Pet kamu dah lvl max*')
            let __waktufin = (new Date - user.ramuangriffinlast)
            let _waktufin = (600000 - __waktufin)
            let waktufin = clockString(_waktufin)
            if (new Date - user.ramuangriffinlast > 600000) {
                if (user.ramuan > 0) {
                    user.ramuan -= 1
                    user.anakgriffin += 200
                    user.ramuangriffinlast = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi ramuan pet ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi ramuan pet *Griffin*', m)
                    }, timefin)
                    if (griffin > 0) {
                        let naiklvl = ((griffin * 10000) - 1)
                        if (user.anakgriffin > naiklvl) {
                            user.griffin += 1
                            user.anakgriffin -= (griffin * 10000)
                            conn.reply(m.chat, `*Selamat Pet Greffin kamu naik level*`, m)
                        }
                    }
                } else conn.reply(m.chat, `Ramuan pet kamu tidak cukup`)
            } else conn.reply(m.chat, `Pet kamu sudah meminum ramuan, coba beberapa ${waktufin} lagi`)
            break
        case 'kucing':
            if (kucing == 0) return conn.reply(m.chat, '*Kamu belum memiliki Pet Kucing*')
            if (kucing == 5) return conn.reply(m.chat, '*Pet kamu dah lvl max*')
            let __waktu = (new Date - user.ramuankucinglast)
            let _waktu = (600000 - __waktu)
            let waktu = clockString(_waktu)
            if (new Date - user.ramuankucinglast > 600000) {
                if (user.ramuan > 0) {
                    user.ramuan -= 1
                    user.anakkucing += 200
                    user.ramuankucinglast = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi ramuan pet ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi ramuan pet *Kucing*', m)
                    }, timecing)
                    if (kucing > 0) { 
                        let naiklvl = ((kucing * 1000) - 1)
                        if (user.anakkucing > naiklvl) {
                            user.kucing += 1
                            user.anakkucing -= (kucing * 1000)
                            conn.reply(m.chat, `*Selamat Pet Kucing kamu naik level*`, m)
                        }
                    }
                } else conn.reply(m.chat, `Ramuan pet kamu tidak cukup`)
            } else conn.reply(m.chat, `Pet kamu sudah meminum ramuan, coba beberapa ${waktu} lagi`)
            break
        case 'hero':
            if (hero == 0) return conn.reply(m.chat, '*Kamu belum memiliki Hero*')
            if (hero == 100) return conn.reply(m.chat, '*Hero kamu dah lvl max*')
            let __waktuher = (new Date - user.ramuanherolast)
            let _waktuher = (600000 - __waktuher)
            let waktuher = clockString(_waktuher)
            if (new Date - user.ramuanherolast > 600000) {
                if (user.ramuan > 0) {
                    user.ramuan -= 1
                    user.exphero += 100
                    user.ramuanherolast = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi ramuan kepada ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi ramuan *Hero*', m)
                    }, timeher)
                    if (hero > 0) { 
                        let naiklvl = ((hero * 500) - 1)
                        if (user.exphero > naiklvl) {
                            user.hero += 1
                            user.exphero -= (kucing * 500)
                            conn.reply(m.chat, `*Selamat Hero kamu naik level*`, m)
                        }
                    }
                } else conn.reply(m.chat, `Ramuan hero kamu tidak cukup`)
            } else conn.reply(m.chat, `Hero kamu sudah meminum ramuan, coba beberapa ${waktuher} lagi`)
            break
        default:
            return conn.reply(m.chat, `${usedPrefix}ramuan [hero | kucing | rubah | kuda | naga | centaur | phonix | serigala]\nContoh penggunaan: *${usedPrefix}ramuan kucing*`, m)
    }
}
handler.help = ['ramuan [pet type]']
handler.tags = ['rpg']
handler.command = /^(ramuan)$/i
handler.limit = handler.group = true

export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}
