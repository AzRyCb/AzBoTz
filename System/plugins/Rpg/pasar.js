
const Skepiting = 7000
const Slobster = 7000
const Sudang = 7000
const Scumi = 7000
const Sgurita = 7000
const Sbuntal = 7000
const Sdory = 7000
const Sorca = 7000
const Slumba = 7000
const Spaus = 7000
const Sikan = 7000
const Shiu = 7000
const Sbanteng = 9000
const Sharimau = 9000
const Sgajah = 9000
const Skambing = 9000
const Spanda = 9000
const Sbuaya = 9000
const Skerbau = 9000
const Ssapi= 9000
const Smonyet = 9000
const Sbabihutan = 9000
const Sbabi = 9000
const Sayam = 9000
import db from '../../lib/database.js'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    let user = db.data.users[m.sender]
    const _armor = user.armor
    const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kchat = `⛊━─┈────────┈─━⛊
*🌱 Hewan   | 💲 Harga Jual*\n⛊━─┈────────┈─━⛊\n
🦀 Kepiting:      ${Skepiting}
🦞 Lobster:       ${Slobster}
🦐 Udang:         ${Sudang}
🦑 Cumi:           ${Scumi}
🐙 Gurita:         ${Sgurita}
🐡 Buntal:         ${Sbuntal}
🐠 Dory:            ${Sdory}
🐳 Orca:            ${Sorca}
🐬 Lumba:        ${Slumba}
🐋 Paus:           ${Spaus}
🦈 Hiu:              ${Shiu}
⛊━─┈────────┈─━⛊
🐃 Banteng:      ${Sbanteng}
🐅 Harimau:      ${Sharimau}
🐘 Gajah:           ${Sgajah}
🐐 Kambing:     ${Skambing}
🐼 Panda:         ${Spanda}
🐃 Kerbau:        ${Skerbau}
🐊 Buaya:         ${Sbuaya}
🐂 Sapi:            ${Ssapi}
🐒 Monyet:       ${Smonyet}
🐗 Babi Hutan: ${Sbabihutan}
🐖 Babi:             ${Sbabi}
🐔 Ayam:           ${Sayam}\n⛊━─┈────────┈─━⛊\n⛊━─┈────────┈─━⛊
🧪 *Contoh penggunaan :*
#pasar jual ayam
`.trim()
        if (/pasar|toko/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const sampah = user.sampah
            switch (jualbeli) {
           /* case 'buy':
                switch (_type) {
                    case 'potion':
                            if (user.money >= potion * count) {
                                user.money -= potion * count
                                user.potion += count * 1
                                conn.reply(m.chat, `Sukses Membeli ${count} Potion Dengan Harga ${potion * count} money\n\nGunakan Potion Dengan Ketik: *${usedPrefix}use potion <jumlah>*`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Potion Dengan Harga ${potion * count} Money `,)
                        break
                    case 'diamond':
                            if (user.money >= Bdiamond * count) {
                                user.diamond += count * 1
                                user.money -= Bdiamond * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Diamond Dengan Harga ${Bdiamond * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        
                        break
                    case 'common':
                            if (user.money >= Bcommon * count) {
                                user.common += count * 1
                                user.money -= Bcommon * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Common Crate Dengan Harga ${Bcommon * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Common Crate Dengan Harga ${Bcommon * count} Money \n\nBuka Crate Dengan Ketik: *${usedPrefix}open common*`, m)
                        
                        break
                    case 'uncommon':
                            if (user.money >= Buncommon * count) {
                                user.uncommon += count * 1
                                user.money -= Buncommon * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} Money \n\nBuka Crate Dengan Ketik: *${usedPrefix}open uncommon*`, m)
                        
                        break
                    case 'mythic':
                            if (user.money >= Bmythic * count) {
                                    user.mythic += count * 1
                                user.money -= Bmythic * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Mythic Crate Dengan Harga ${Bmythic * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Mythic Crate Dengan Harga ${Bmythic* count} Money\n\nBuka Crate Dengan Ketik:*${usedPrefix}open mythic*`, m)
                        
                        break
                    case 'legendary':
                            if (user.money >= Blegendary * count) {
                                user.legendary += count * 1
                                user.money -= Blegendary * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Legendary Crate Dengan Harga ${Blegendary * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Legendary Crate Dengan Harga ${Blegendary * count} Money \n\nBuka Crate Dengan Ketik: *${usedPrefix}open legendary*`, m)
                        
                        break
                    case 'sampah':
                            if (user.money >= Bsampah * count) {
                                user.sampah += count * 1
                                user.money -= Bsampah * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Sampah Dengan Harga ${Bsampah * count} Money `, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Sampah Dengan Harga ${Bsampah * count} Money`.trim(), m)
                        
                        break
                    case 'armor':
                            if (user.armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                            if (user.money > armor) {
                                user.armor += 1
                                user.money -= armor * 1
                                conn.reply(m.chat, `Sukses Membeli Armor Seharga ${armor} Money` ,m)
                            } else conn.reply(m.chat, `Uang Mu Tidak Cukup Untuk Membeli Armor Seharga ${armor} Money`, m)
                        
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break*/
            case 'jual': 
                switch (_type) {                  
                     case 'banteng':
                        if (user.banteng >= count * 1) {
                            user.money += Spaus * count
                            user.banteng -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Banteng Dengan Harga ${Sbanteng * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Banteng Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'harimau':
                        if (user.harimau >= count * 1) {
                            user.money += Sharimau * count
                            user.harimau -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Harimau Dengan Harga ${Sharimau * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Harimau Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'gajah':
                        if (user.gajah >= count * 1) {
                            user.money += Sgajah * count
                            user.gajah -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Gajah Dengan Harga ${Sgajah * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Gajah Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'kambing':
                        if (user.kambing >= count * 1) {
                            user.money += Skambing * count
                            user.kambing -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Kambing Dengan Harga ${Skambing * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Kambing Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'panda':
                        if (user.panda >= count * 1) {
                            user.money += Spanda * count
                            user.panda -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Panda Dengan Harga ${Sbuaya * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Panda Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'buaya':
                        if (user.buaya >= count * 1) {
                            user.money += Sbuaya * count
                            user.buaya -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Buaya Dengan Harga ${Sbuaya * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Buaya Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'kerbau':
                        if (user.kerbau >= count * 1) {
                            user.money += Skerbau * count
                            user.kerbau -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Kerbau Dengan Harga ${Skerbau * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Kerbau Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'sapi':
                        if (user.sapi >= count * 1) {
                            user.money += Ssapi * count
                            user.sapi -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Sapi Dengan Harga ${Ssapi * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Sapi Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'monyet':
                        if (user.monyet >= count * 1) {
                            user.money += Smonyet * count
                            user.monyet -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Monyet Dengan Harga ${Smonyet * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Monyet Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'babi':
                        if (user.babi >= count * 1) {
                            user.money += Skepiting * count
                            user.babi -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Babi Dengan Harga ${Sbabi * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Babi Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'babihutan':
                        if (user.babihutan >= count * 1) {
                            user.money += Sbabihutan * count
                            user.babihutan -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Babi Hutan Dengan Harga ${Sbabihutan * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Babi Hutan Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'ayam':
                        if (user.ayam >= count * 1) {
                            user.money += Sayam * count
                            user.ayam -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Ayam Dengan Harga ${Sayam * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Ayam Kamu Tidak Cukup`.trim(), m)
                        break
                        //mancing
                        case 'kepiting':
                        if (user.kepiting >= count * 1) {
                            user.money += Skepiting * count
                            user.kepiting -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Kepiting Dengan Harga ${Skepiting * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Kepiting Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'ikan':
                        if (user.ikan >= count * 1) {
                            user.money += Skepiting * count
                            user.ikan -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Ikan Dengan Harga ${Sikan * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Ikan Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'dory':
                        if (user.dory >= count * 1) {
                            user.money += Sdory * count
                            user.dory -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Ikan Dory Dengan Harga ${Sdory * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Ikan Dory Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'gurita':
                        if (user.gurita >= count * 1) {
                            user.money += Skepiting * count
                            user.gurita -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Gurita Dengan Harga ${Sgurita * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Gurita Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'buntal':
                        if (user.buntal >= count * 1) {
                            user.money += Sbuntal * count
                            user.buntal -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Ikan Buntal Dengan Harga ${Sbuntal * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Ikan Buntal Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'hiu':
                        if (user.hiu >= count * 1) {
                            user.money += Shiu * count
                            user.hiu -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Hiu Dengan Harga ${Shiu * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Hiu Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'orca':
                        if (user.orca >= count * 1) {
                            user.money += Sorca * count
                            user.orca -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Paus Orca Dengan Harga ${Sorca * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Paus Orca Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'lumba':
                        if (user.lumba >= count * 1) {
                            user.money += Skepiting * count
                            user.lumba -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Lumba Lumba Dengan Harga ${Slumba * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Lumba Lumba Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'paus':
                        if (user.paus >= count * 1) {
                            user.money += Spaus * count
                            user.paus -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Paus Dengan Harga ${Spaus * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Paus Kamu Tidak Cukup`.trim(), m)
                        break
                  case 'lobster':
                        if (user.lobster >= count * 1) {
                            user.money += Slobster * count
                            user.lobster -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Lobster Dengan Harga ${Slobster * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Lobster Kamu Tidak Cukup`.trim(), m)
                        break
                     case 'udang':
                        if (user.udang >= count * 1) {
                            user.money += Sudang * count
                            user.udang -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Udang Dengan Harga ${Sudang * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Udang Kamu Tidak Cukup`.trim(), m)
                        break
                      case 'cumi':
                        if (user.cumi >= count * 1) {
                            user.money += Scumi * count
                            user.cumi -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Cumi Dengan Harga ${Scumi * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Cumi Kamu Tidak Cukup`.trim(), m)
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            default:
                return conn.sendButton(m.chat, Kchat, wm, [['Kolam', '#kolam']], m)
            }
      /*  } else if (/beli|buy/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                        if (user.money >= potion * count) {
                            user.money -= potion * count
                            user.potion += count * 1
                            conn.reply(m.chat, `Sukses membeli ${count} Potion Dengan Harga ${potion * count} Money \n\nGunakan Potion Dengan Ketik: *${usedPrefix}use potion <jumlah>*`, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Potion Dengan Harga ${potion * count} Money`,m)
                    
                    break
                case 'diamond':
                        if (user.money >= Bdiamond * count) {
                            user.diamond += count * 1
                            user.money -= Bdiamond * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Diamond Dengan Harga ${Bdiamond * count} Money `, m)
                        } else conn.reply(m.chat, `Money Anda Tidak Cukup `, m)
                    
                    break
                case 'common':
                        if (user.money >= Bcommon * count) {
                            user.common += count * 1
                            user.money -= Bcommon * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Common Crate Dengan Harga ${Bcommon * count} Money `, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Common Crate Dengan Harga ${Bcommon * count} Money \n\nBuka Crate Dengan Ketik : *${usedPrefix}open common*`, m)
                    
                    break
                case 'uncommon':
                        if (user.money >= Buncommon * count) {
                            user.uncommon += count * 1
                            user.money -= Buncommon * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} Money `, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} Money \n\nBuka Crate Dengan Ketik: *${usedPrefix}open uncommon*`, m)
                   
                    break
                case 'mythic':
                        if (user.money >= Bmythic * count) {
                            user.mythic += count * 1
                            user.money -= Bmythic * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Mythic Crate Dengan Harga ${Bmythic * count} Money `, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Mythic Crate Dengan Harga ${Bmythic* count} money\n\nBuka Crate Dengan Ketik: *${usedPrefix}open mythic*`, m)
                    
                    break
                case 'legendary':
                        if (user.money >= Blegendary * count) {
                            user.legendary += count * 1
                            user.money -= Blegendary * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Legendary Crate Dengan Harga ${Blegendary * count} Money`, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Legendary Crate Dengan Harga ${Blegendary * count} Money \n\nBuka Crate Dengan Ketik: *${usedPrefix}open legendary*`, m)
                    
                    break
                case 'sampah':
                        if (user.money >= Bsampah * count) {
                            user.sampah += count * 1
                            user.money -= Bsampah * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Sampah Dengan Harga ${Bsampah * count} money`, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Sampah Dengan Harga ${Bsampah * count} Money `.trim(), m)
                    
                    break
                case 'armor':
                        if (user.armor == 5) return conn.reply(m.chat, 'Armormu Telah *Level Max*', m)
                        if (user.money > armor * 1) {
                            user.armor += 1
                            user.money -= armor * 1
                            conn.reply(m.chat, `Sukses Membeli Armor Seharga ${armor} Money` ,m)
                          
                        } else conn.reply(m.chat, `Uang Mu Tidak Cukup Untuk Membeli Armor Seharga ${armor} Money`, m)
                    
                    break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }*/
        } else if (/sell|jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) { 
                       case 'banteng':
                        if (user.banteng >= count * 1) {
                            user.money += Spaus * count
                            user.banteng -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Banteng Dengan Harga ${Sbanteng * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Banteng Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'harimau':
                        if (user.harimau >= count * 1) {
                            user.money += Sharimau * count
                            user.harimau -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Harimau Dengan Harga ${Sharimau * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Harimau Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'gajah':
                        if (user.gajah >= count * 1) {
                            user.money += Sgajah * count
                            user.gajah -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Gajah Dengan Harga ${Sgajah * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Gajah Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'kambing':
                        if (user.kambing >= count * 1) {
                            user.money += Skambing * count
                            user.kambing -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Kambing Dengan Harga ${Skambing * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Kambing Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'panda':
                        if (user.panda >= count * 1) {
                            user.money += Spanda * count
                            user.panda -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Panda Dengan Harga ${Sbuaya * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Panda Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'buaya':
                        if (user.buaya >= count * 1) {
                            user.money += Sbuaya * count
                            user.buaya -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Buaya Dengan Harga ${Sbuaya * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Buaya Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'kerbau':
                        if (user.kerbau >= count * 1) {
                            user.money += Skerbau * count
                            user.kerbau -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Kerbau Dengan Harga ${Skerbau * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Kerbau Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'sapi':
                        if (user.sapi >= count * 1) {
                            user.money += Ssapi * count
                            user.sapi -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Sapi Dengan Harga ${Ssapi * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Sapi Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'monyet':
                        if (user.monyet >= count * 1) {
                            user.money += Smonyet * count
                            user.monyet -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Monyet Dengan Harga ${Smonyet * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Monyet Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'babi':
                        if (user.babi >= count * 1) {
                            user.money += Sbabi * count
                            user.babi -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Babi Dengan Harga ${Sbabi * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Babi Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'babihutan':
                        if (user.babihutan >= count * 1) {
                            user.money += Sbabihutan * count
                            user.babihutan -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Babi Hutan Dengan Harga ${Sbabihutan * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Babi Hutan Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'ayam':
                        if (user.ayam >= count * 1) {
                            user.money += Sayam * count
                            user.ayam -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Ayam Dengan Harga ${Sayam * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Ayam Kamu Tidak Cukup`.trim(), m)
                        break
                        //mancing
                        case 'kepiting':
                        if (user.kepiting >= count * 1) {
                            user.money += Skepiting * count
                            user.kepiting -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Kepiting Dengan Harga ${Skepiting * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Kepiting Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'ikan':
                        if (user.ikan >= count * 1) {
                            user.money += Skepiting * count
                            user.ikan -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Ikan Dengan Harga ${Sikan * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Ikan Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'dory':
                        if (user.dory >= count * 1) {
                            user.money += Sdory * count
                            user.dory -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Ikan Dory Dengan Harga ${Sdory * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Ikan Dory Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'gurita':
                        if (user.gurita >= count * 1) {
                            user.money += Skepiting * count
                            user.gurita -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Gurita Dengan Harga ${Sgurita * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Gurita Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'buntal':
                        if (user.buntal >= count * 1) {
                            user.money += Sbuntal * count
                            user.buntal -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Ikan Buntal Dengan Harga ${Sbuntal * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Ikan Buntal Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'hiu':
                        if (user.hiu >= count * 1) {
                            user.money += Shiu * count
                            user.hiu -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Hiu Dengan Harga ${Shiu * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Hiu Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'orca':
                        if (user.orca >= count * 1) {
                            user.money += Sorca * count
                            user.orca -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Paus Orca Dengan Harga ${Sorca * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Paus Orca Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'lumba':
                        if (user.lumba >= count * 1) {
                            user.money += Skepiting * count
                            user.lumba -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Lumba Lumba Dengan Harga ${Slumba * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Lumba Lumba Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'paus':
                        if (user.paus >= count * 1) {
                            user.money += Spaus * count
                            user.paus -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Paus Dengan Harga ${Spaus * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Paus Kamu Tidak Cukup`.trim(), m)
                        break
                  case 'lobster':
                        if (user.lobster >= count * 1) {
                            user.money += Slobster * count
                            user.lobster -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Lobster Dengan Harga ${Slobster * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Lobster Kamu Tidak Cukup`.trim(), m)
                        break
                     case 'udang':
                        if (user.udang >= count * 1) {
                            user.money += Sudang * count
                            user.udang -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Udang Dengan Harga ${Sudang * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Udang Kamu Tidak Cukup`.trim(), m)
                        break
                      case 'cumi':
                        if (user.cumi >= count * 1) {
                            user.money += Scumi * count
                            user.cumi -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Cumi Dengan Harga ${Scumi * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Cumi Kamu Tidak Cukup`.trim(), m)
                        break                                        
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        }
}

handler.help = ['pasar <jual> <args>']
handler.tags = ['rpg']
    
handler.command = /^(pasar|jual)$/i
export default handler 
