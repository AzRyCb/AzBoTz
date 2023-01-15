import fetch from 'node-fetch'
const potion = 500
const Sgold = 3000
const Bgold = 6000
const Bstring = 500
const Sstring = 200
const Bbatu = 500
const Sbatu = 200
const Bkayu = 500
const Skayu = 200
const Sarloji = 9000000
const Biron = 800
const Siron = 700
const Spotion = 150 
const Bdiamond = 900
const Sdiamond = 750
const Bcommon = 200
const Scommon = 20
const Suncommon = 100
const Buncommon = 600
const Bmythic = 2500 
const Smythic = 900
const Blegendary = 7500 
const Slegendary = 3000
const Bsampah = 10
const Ssampah = 2
const Bjagung = 20
const Bjeruk = 20
const Bapel = 20
const Bmangga = 20
const Banggur = 20
const Sjagung = 100
const Sjeruk = 100
const Sapel = 100
const Smangga = 100
const Sanggur = 100
const Baqua = 50
const Bumpan = 150
const Bkucing = 5
const Banjing = 5
const Bkuda = 7
const Bfox = 10
const Bserigala = 10
const Bphonix = 20
const Bcentaur = 35
const Bgriffin = 35
const Bnaga = 1000
const Bfood = 500
const Bpet = 1500
const Spet = 750
import db from '../../lib/database.js'

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    let user = db.data.users[m.sender]
    let wibu = set.flaaa.getRandom()
let thumb = await(await fetch(wibu + 'Shop')).buffer()
    const _armor = user.armor
    const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
    const uparmor = (_armor == 0 ? 'Kamu belum mempunyai Armor' : '' || _armor == 1 ? 135 : '' || _armor == 2 ? 175 : '' || _armor== 3 ? 250 : '' || _armor == 4 ? 320 : '')
    const _pancing = user.pancing
    const pancing = (_pancing == 0 ? 1700 : '' || _pancing == 1 ? 3000 : '' || _pancing == 2 ? 5500 : '' || _pancing == 3 ? 10500 : '')
    const uppancing = (_pancing == 0 ? 0 : '' || _pancing == 1 ? 25 : '' || _pancing == 2 ? 55 : '' || _pancing == 3 ? 75 : '')
    const durfishingrod = (_pancing == 0 ? 0 : '' || _pancing == 1 ? 50 : '' || _pancing == 2 ? 70 : '' || _pancing == 3 ? 100 : '')
    const refishingrod = (_pancing == 0 ? 0 : '' || _pancing == 1 ? 10 : '' || _pancing == 2 ? 35 : '' || _pancing == 3 ? 65 : '')
    const drefishingrod = (_pancing == 0 ? 0 : '' || _pancing == 1 ? 10 : '' || _pancing == 2 ? 25 : '' || _pancing == 3 ? 40 : '')
    
    const _pickaxe = user.pickaxe
    const pickaxe = (_pickaxe == 0 ? 1700 : '' || _pickaxe == 1 ? 3000 : '' || _pickaxe == 2 ? 5500 : '' || _pickaxe == 3 ? 10500 : '' || _pickaxe == 4 ? 27000 : '')
    const uppickaxe = (_pickaxe == 0 ? 0 : '' || _pickaxe == 1 ? 25 : '' || _pickaxe == 2 ? 55 : '' || _pickaxe == 3 ? 75 : '' || _pickaxe == 4 ? 120 : '')
    const durpickaxe = (_pickaxe == 0 ? 0 : '' || _pickaxe == 1 ? 40 : '' || _pickaxe == 2 ? 60 : '' || _pickaxe == 3 ? 80 : '' || _pickaxe == 4 ? 100 : '')
    const repickaxe = (_pickaxe == 0 ? 0 : '' || _pickaxe == 1 ? 10 : '' || _pickaxe == 2 ? 35 : '' || _pickaxe == 3 ? 65 : '' || _pickaxe == 4 ? 100 : '')
    const drepickaxe = (_pickaxe == 0 ? 0 : '' || _pickaxe == 1 ? 10 : '' || _pickaxe == 2 ? 25 : '' || _pickaxe == 3 ? 40 : '' || _pickaxe == 4 ? 60 : '')
    
    const _sword = user.sword
    const sword = (_sword == 0 ? 1700 : '' || _sword == 1 ? 3000 : '' || _sword == 2 ? 5500 : '' || _sword == 3 ? 10500 : '' || _sword == 4 ? 27000 : '')
    const upsword = (_sword == 0 ? 0 : '' || _sword == 1 ? 15 : '' || _sword == 2 ? 40 : '' || _sword== 3 ? 65 : '' || _sword == 4 ? 100 : '')
    const dursword = (_sword == 0 ? 0 : '' || _sword == 1 ? 40 : '' || _sword == 2 ? 60 : '' || _sword == 3 ? 80 : '' || _sword == 4 ? 100 : '')
    const resword = (_sword == 0 ? 0 : '' || _sword == 1 ? 10 : '' || _sword == 2 ? 35 : '' || _sword == 3 ? 65 : '' || _sword == 4 ? 100 : '')
    const dresword = (_sword == 0 ? 0 : '' || _sword == 1 ? 10 : '' || _sword == 2 ? 25 : '' || _sword == 3 ? 40 : '' || _sword == 4 ? 60 : '')
    
    let upgrd = (args[0] || '').toLowerCase()
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kchat = `
*🎒 S H O P*
*🧪 Penggunaan :*
_${usedPrefix}toko <Buy|sell> <item> <jumlah>_
Contoh penggunaan: _*${usedPrefix}toko buy potion 1*_
*📮 Note :* 
bila sudah tidak ada harganya, berarti sudah tidak bisa dibeli / sudah level max
🛍️ List Barang:
⛊━━━┄┄┄┄┄┄┄┄┄━━━⛊
*♻ Barang   | 💲 Harga beli*
⛊━━━┄┄┄┄┄┄┄┄┄━━━⛊
*🥤 Potion:* ${potion}
*🍶 Aqua:* ${Baqua}
*🪙  Gold :* ${Bgold}
*💎 Diamond:* ${Bdiamond}
*🪨 Batu:* ${Bbatu}
*🪵 Kayu:* ${Bkayu}
*🕸️ String:* ${Bstring}
*⛓️ Iron:* ${Biron}
*🗑️ Sampah:* ${Bsampah}
*📦 Common:* ${Bcommon} 
*🛍️ Uncommon:* ${Buncommon}
*🎁 Mythic:* ${Bmythic}
*🧰 Legendary:* ${Blegendary}
*📫 Pet:* ${Bpet}
*🥼 Armor:* ${armor}
*🎣 Fishingrod:* ${pancing}
*🪱 Umpan:* ${Bumpan}
*🌾 Bibit mangga:* ${Bjagung}
*🌾 Bibit apel:* ${Bapel}
*🌾 Bibit jeruk:* ${Bjeruk}
*🌾 Bibit pisang:* ${Bapel}
*🌾 Bibit anggur:* ${Banggur}
⛊━━━┄┄┄┄┄┄┄┄┄━━━⛊
*♻ Barang   | 💲 Harga Jual*
⛊━━━┄┄┄┄┄┄┄┄┄━━━⛊
*🥤 Potion:* ${Spotion}
*🪙 Gold:* ${Sgold}
*🧭 Arloji:* ${Sarloji}
*🪨 Batu:* ${Sbatu}
*🪵 Kayu:* ${Skayu}
*🕸️ String:* ${Sstring}
*⛓️ Iron:* ${Siron}
*💎 Diamond:* ${Sdiamond}
*🗑️ Sampah:* ${Ssampah}
*📦 Common:* ${Scommon}
*🛍️ Uncommon:* ${Suncommon}
*🎁 Mythic:* ${Smythic}
*🧰 Legendary:* ${Slegendary}
*📫 Pet:* ${Spet}
*🥭 Mangga:* ${Sjagung}
*🍎 Apel:* ${Sapel}
*🍊 Jeruk:* ${Sjeruk}
*🍌 Pisang:* ${Sapel}
*🍇 Anggur:* ${Sanggur}
⛊━━━┄┄┄┄┄┄┄┄┄━━━⛊
*🦊 Pet.      | 💲 Harga Beli*
⛊━━━┄┄┄┄┄┄┄┄┄━━━⛊
*🐱 Kucing:* ${Bkucing} 🪙
*🐶 Anjing:* ${Banjing} 🪙
*🦊 Fox:* ${Bfox} 🪙 
*🐴 Kuda:* ${Bkuda} 🪙 
*🐺 Serigala:* ${Bserigala} 🪙
*🦜 Phonix:* ${Bphonix} 🪙
*🐎 Centaur:* ${Bcentaur} 🪙
*🦅 Griffin:* ${Bgriffin} 🪙
*🐉 Naga:* ${Bnaga} 🪙
*🥩 Foodpet:* ${Bfood} 💲
⛊━━━┄┄┄┄┄┄┄┄┄━━━⛊
*🔨 Upgrade & Repair | 💲 Harga*
⛊━━━┄┄┄┄┄┄┄┄┄━━━⛊
*◪ Upgrade ⏫*
*🥼 Armor:* ${uparmor} 💎 ${_armor == 0 ? '(Belum memiliki)' : _armor == 5 ? '( *Level max* )' : ''}
*🎣 Fishingrod:* ${uppancing} 💎
╰▸ *Durability:* ${durfishingrod} ${_pancing == 0 ? '(Belum memiliki)' : _pancing == 5 ? '( *Level max* )' : ''}
*⛏️ Pickaxe:* ${uppickaxe} 💎
╰▸ *Durability:* ${durpickaxe} ${_pickaxe == 0 ? '(Belum memiliki)' : _pickaxe == 5 ? '( *Level max* )' : ''}
*🗡️ Sword:* ${upsword} 💎
╰▸ *Durability:* ${dursword} ${_sword == 0 ? '(Belum memiliki)' : _sword == 5 ? '( *Level max* )' : ''}
⛊━━━┄┄┄┄┄┄┄┄┄━━━⛊
*◪ Repair 🔨*
*🎣 Fishingrod:* ${refishingrod} 💎 ${_pancing == 0 ? '(Belum memiliki)' : _pancing == 5 ? '( *Level max* )' : ''}
 + ${drefishingrod} Durability 
*⛏️ Pickaxe:* ${repickaxe} 💎 ${_pickaxe == 0 ? '(Belum memiliki)' : _pickaxe == 5 ? '( *Level max* )' : ''}
 + ${drepickaxe} Durability
*🗡️ Sword:* ${resword} 💎 ${_sword == 0 ? '(Belum memiliki)' : _sword == 5 ? '( *Level max* )' : ''}
 + ${dresword} Durability
⛊━━━┄┄┄┄┄┄┄┄┄━━━⛊
`.trim()
    try {
        if (/toko|buy/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999999999999999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const sampah = user.sampah
            switch (jualbeli) {
            case 'buy':
                switch (_type) {
                	case 'kucing':
                if (user.kucing == 1) return conn.reply(m.chat, 'Kamu sudah memiliki pet ini', m)
                            if (user.emas >= Bkucing * count) {
                                user.kucing += count * 1
                                user.emas -= Bkucing * count
                                conn.reply(m.chat, `✔️ Sukses Membeli Pet Kucing 🐱 Dengan Harga ${Bkucing * count} Gold 🪙`, m)
                            } else conn.reply(m.chat, `Gold Anda Tidak Cukup`, m)
                        
                        break
                    case 'anjing':
                    if (user.anjing == 1) return conn.reply(m.chat, 'Kamu sudah memiliki pet ini', m)
                            if (user.emas >= Bkucing * count) {
                                user.anjing += count * 1
                                user.emas -= Bkucing * count
                                conn.reply(m.chat, `✔️ Sukses Membeli Pet Anjing 🐶 Dengan Harga ${Bkucing * count} Gold 🪙`, m)
                            } else conn.reply(m.chat, `Gold Anda Tidak Cukup`, m)
                        
                        break
                    case 'kuda':
                    if (user.kuda == 1) return conn.reply(m.chat, 'Kamu sudah memiliki pet ini', m)
                            if (user.emas >= Bkuda * count) {
                                user.kuda += count * 1
                                user.emas -= Bkuda * count
                                conn.reply(m.chat, `✔️ Sukses Membeli Pet Kuda 🐴 Dengan Harga ${Bkuda * count} Gold 🪙`, m)
                            } else conn.reply(m.chat, `Gold Anda Tidak Cukup`, m)
                        
                        break
                    case 'fox':
                    if (user.rubah == 1) return conn.reply(m.chat, 'Kamu sudah memiliki pet ini', m)
                            if (user.emas >= Bfox * count) {
                                user.rubah += count * 1
                                user.emas -= Bfox * count
                                conn.reply(m.chat, `✔️ Sukses Membeli Pet Rubah 🦊 Dengan Harga ${Bfox * count} Gold 🪙`, m)
                            } else conn.reply(m.chat, `Gold Anda Tidak Cukup`, m)
                        
                        break
                 case 'serigala':
                 if (user.serigala == 1) return conn.reply(m.chat, 'Kamu sudah memiliki pet ini', m)
                            if (user.emas >= Bserigala * count) {
                                user.serigala += count * 1
                                user.emas -= Bserigala * count
                                conn.reply(m.chat, `✔️ Sukses Membeli Pet Serigala 🐺 Dengan Harga ${Bserigala * count} Gold 🪙`, m)
                            } else conn.reply(m.chat, `Gold Anda Tidak Cukup`, m)
                        
                        break
                    case 'phonix':
                    if (user.phonix == 1) return conn.reply(m.chat, 'Kamu sudah memiliki pet ini', m)
                            if (user.emas >= Bphonix * count) {
                                user.phonix += count * 1
                                user.emas -= Bphonix * count
                                conn.reply(m.chat, `✔️ Sukses Membeli Pet Phonix 🦜 Dengan Harga ${Bphonix * count} Gold 🪙`, m)
                            } else conn.reply(m.chat, `Gold Anda Tidak Cukup`, m)
                        
                        break
                case 'centaur':
                if (user.centaur == 1) return conn.reply(m.chat, 'Kamu sudah memiliki pet ini', m)
                            if (user.emas >= Bcentaur * count) {
                                user.centaur += count * 1
                                user.emas -= Bcentaur* count
                                conn.reply(m.chat, `✔️ Sukses Membeli Pet Centaur 🐎 Dengan Harga ${Bcentaur * count} Gold 🪙`, m)
                            } else conn.reply(m.chat, `Gold Anda Tidak Cukup`, m)
                        
                        break
                 case 'griffin':
                 if (user.griffin == 1) return conn.reply(m.chat, 'Kamu sudah memiliki pet ini', m)
                            if (user.emas >= Bgriffin * count) {
                                user.griffin += count * 1
                                user.emas -= Bgriffin * count
                                conn.reply(m.chat, `✔️ Sukses Membeli Pet Griffin 🦅 Dengan Harga ${Bgriffin * count} Gold 🪙`, m)
                            } else conn.reply(m.chat, `Gold Anda Tidak Cukup`, m)
                        
                        break
               case 'naga':
               if (user.naga == 1) return conn.reply(m.chat, 'Kamu sudah memiliki pet ini', m)
                            if (user.emas >= Bnaga * count) {
                                user.naga += count * 1
                                user.emas -= Bnaga * count
                                conn.reply(m.chat, `✔️ Sukses Membeli Pet Naga 🐉 Dengan Harga ${Bnaga * count} Gold 🪙`, m)
                            } else conn.reply(m.chat, `Gold Anda Tidak Cukup`, m)
                        
                        break
                case 'foodpet':
                            if (user.money >= Bfood * count) {
                                user.makananpet += count * 1
                                user.money -= Bfood * count
                                conn.reply(m.chat, `✔️ Sukses Membeli FoodPet 🥩 Dengan Harga ${Bfood * count} Money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        
                        break
                    case 'potion':
                            if (user.money >= potion * count) {
                                user.money -= potion * count
                                user.potion += count * 1
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} Potion 🥤 Dengan Harga ${potion * count} money 💹\n\n📍 Gunakan Potion Dengan Ketik: *${usedPrefix}use potion <jumlah>*`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Potion Dengan Harga ${potion * count} Money `,)
                        break
                    case `gold`:
                            if (user.money >= Bgold * count) {
                            user.money -= Bgold * count
                            user.emas += count * 1
                            conn.reply(m.chat, `Sukses Membeli ${count} Gold 🪙 Dengan Harga ${Bgold * count} money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Gold Dengan Harga ${Bgold * count} Money `,)
                        break
                    case 'bibitmangga':
                            if (user.money >= Bjagung * count) {
                            user.money -= Bjagung * count
                            user.bibitmangga += count * 1
                            conn.reply(m.chat, `✔️ Sukses Membeli ${count} Bibit Mangga 🌾\nDengan Harga ${Bapel * count} money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Bibit Mangga 🌾\nDengan Harga ${Bapel * count} Money 💹`,)
                        break
                    case 'bibitapel':
                            if (user.money >= Bapel * count) {
                            user.money -= Bapel* count
                            user.bibitapel += count * 1
                            conn.reply(m.chat, `✔️ Sukses Membeli ${count} Bibit Apel🌾\nDengan Harga ${Bapel * count} money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Bibit Apel 🌾\nDengan Harga ${Bapel * count} Money 💹`,)
                        break
                    case 'bibitjeruk':
                            if (user.money >= Bapel * count) {
                            user.money -= Bapel* count
                            user.bibitjeruk += count * 1
                            conn.reply(m.chat, `✔️ Sukses Membeli ${count} Bibit Jeruk🌾\nDengan Harga ${Bapel * count} money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Bibit Jeruk 🌾\nDengan Harga ${Bapel * count} Money 💹`,)
                        break
                     case 'bibitpisang':
                            if (user.money >= Bapel * count) {
                            user.money -= Bapel* count
                            user.bibitpisang += count * 1
                            conn.reply(m.chat, `✔️ Sukses Membeli ${count} Bibit Pisang🌾\nDengan Harga ${Bapel * count} money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Bibit Pisang 🌾\nDengan Harga ${Bapel * count} Money 💹`,)
                        break
                    case 'bibitanggur':
                            if (user.money >= Bapel * count) {
                            user.money -= Bapel* count
                            user.bibitanggur += count * 1
                            conn.reply(m.chat, `✔️ Sukses Membeli ${count} Bibit Anggur🌾\nDengan Harga ${Bapel * count} money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Bibit Anggur 🌾\nDengan Harga ${Bapel * count} Money 💹`,)
                        break
                    case 'diamond':
                            if (user.money >= Bdiamond * count) {
                                user.diamond += count * 1
                                user.money -= Bdiamond * count
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} Diamond 💎 Dengan Harga ${Bdiamond * count} Money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                    case 'batu':
                           if (user.money >= Bbatu * count) {
                               user.batu += count * 1
                               user.money -= Bbatu * count
                               conn.reply(m.chat, `✔️ Sukses Membeli ${count} Batu 🪨 Dengan Harga ${Bbatu * count} Money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                    case 'umpan':
                           if (user.money >= Bumpan * count) {
                               user.umpan += count * 1
                               user.money -= Bumpan * count
                               conn.reply(m.chat, `✔️ Sukses Membeli ${count} Umpan 🪱 Dengan Harga ${Bumpan * count} Money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                    case 'kayu':
                            if (user.money >= Bkayu * count) {
                                user.kayu += count * 1
                                user.money -= Bkayu * count
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} Kayu 🪵 Dengan Harga ${Bkayu * count} Money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                     case 'aqua':
                            if (user.money >= Baqua * count) {
                                user.aqua += count * 1
                                user.money -= Bkayu * count
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} Aqua 🍶 Dengan Harga ${Baqua * count} Money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                    case 'string':
                            if (user.money >= Bstring * count) {
                                user.string += count * 1
                                user.money -= Bstring * count
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} String 🕸️ Dengan Harga ${Bstring * count} Money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                    case 'iron':
                           if (user.money >= Biron * count) {
                               user.iron += count * 1
                               user.money -= Biron * count
                               conn.reply(m.chat, `✔️ Sukses Membeli ${count} Iron ⛓️ Dengan Harga ${Biron * count} Money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                    case 'common':
                            if (user.money >= Bcommon * count) {
                                user.common += count * 1
                                user.money -= Bcommon * count
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} Common Crate 📦 Dengan Harga ${Bcommon * count} Money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Common Crate 📦 Dengan Harga ${Bcommon * count} Money 💹 \n\n📍 Buka Crate Dengan Ketik: *${usedPrefix}open common*`, m)
                        
                        break
                    case 'uncommon':
                            if (user.money >= Buncommon * count) {
                                user.uncommon += count * 1
                                user.money -= Buncommon * count
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} Money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Uncommon Crate 🛍️ Dengan Harga ${Buncommon * count} Money 💹\n\n📍 Buka Crate Dengan Ketik: *${usedPrefix}open uncommon*`, m)
                        
                        break
                    case 'mythic':
                            if (user.money >= Bmythic * count) {
                                    user.mythic += count * 1
                                user.money -= Bmythic * count
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} Mythic Crate 🎁 Dengan Harga ${Bmythic * count} Money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Mythic Crate 🎁 Dengan Harga ${Bmythic* count} Money\n\n📍 Buka Crate Dengan Ketik:*${usedPrefix}open mythic*`, m)
                        
                        break
                    case 'legendary':
                            if (user.money >= Blegendary * count) {
                                user.legendary += count * 1
                                user.money -= Blegendary * count
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} Legendary Crate 🧰 Dengan Harga ${Blegendary * count} Money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Legendary Crate 🧰 Dengan Harga ${Blegendary * count} Money  💹\n\n📍 Buka Crate Dengan Ketik: *${usedPrefix}open legendary*`, m)
                        
                        break
                    case 'pet':
                            if (user.money >= Bpet * count) {
                                user.pet += count * 1
                                user.money -= Bpet * count
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} Pet Crate 📫 Dengan Harga ${Bpet * count} Money 💹`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Pet Crate 📫 Dengan Harga ${Bpet * count} Money  💹\n\n📍 Buka Crate Dengan Ketik: *${usedPrefix}open legendary*`, m)
                        
                        break
                    case 'sampah':
                            if (user.money >= Bsampah * count) {
                                user.sampah += count * 1
                                user.money -= Bsampah * count
                                conn.reply(m.chat, `✔️ Sukses Membeli ${count} Sampah 🗑️ Dengan Harga ${Bsampah * count} Money 💹 `, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Sampah 🗑️ Dengan Harga ${Bsampah * count} Money 💹`.trim(), m)
                        
                        break
                    case 'armor':
                            if (user.armor == 1) return conn.reply(m.chat, 'Kamu sudah memiliki Armor', m)
                            if (user.money > armor) {
                                user.armor += 1
                                user.money -= armor * 1
                                conn.reply(m.chat, `✔️ Sukses Membeli Armor 🥼 Seharga ${armor} Money` ,m)
                            } else conn.reply(m.chat, `Uang Mu Tidak Cukup Untuk Membeli Armor 🥼 Seharga ${armor} Money 💹`, m)
                        
                        break
                     case 'fishingrod':
                            if (user.pancing == 1) return conn.reply(m.chat, 'Kamu sudah memiliki pancingan', m)
                            if (user.money > armor) {
                                user.pancing += 1
                                user.money -= armor * 1
                                user.fishingroddurability = durfishingrod
                                conn.reply(m.chat, `✔️ Sukses Membeli Pancingan 🎣 Seharga ${pancing} Money` ,m)
                            } else conn.reply(m.chat, `Uang Mu Tidak Cukup Untuk Membeli Pancingan 🎣 Seharga ${pancing} Money 💹`, m)
                        
                        break
                    default:
                        return conn.sendButton(m.chat, Kchat, set.wm,  null,[[ 'Ngechit', '.ngechit']], m, { contextInfo: { externalAdReply: { showAdAttribution: true,
                    mediaUrl: set.ig,
                    mediaType: "VIDEO",
                    description: set.ucapan, 
                    title: set.wm,
                    body: set.bottime,
                    thumbnail: set.thumb,
                    sourceUrl: set.gcbot
                }
                } })
                }
                break
            case 'sell': 
                switch (_type) {
                    case 'potion':
                        if (user.potion >= count * 1) {
                            user.money += Spotion * count
                            user.potion -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Potion 🥤 Dengan Harga ${Spotion * count} Money 💹 `.trim(), m)
                        } else conn.reply(m.chat, `🥤 Potion Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'gold':
                        if (user.gold >= count * 1) {
                            user.money += Sgold * count
                            user.gold -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Gold 🪙 Dengan Harga ${Sgold * count} Money 💹`.trim(), m)
                        } else conn.reply(m.chat, `Gold Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'arloji':
                        if (user.arlok >= count * 1) {
                            user.money += Sarloji * count
                            user.arlok -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Arloji 🧭 Dengan Harga ${Sarloji * count} Money 💹`.trim(), m)
                        } else conn.reply(m.chat, `🧭 Arloji Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'batu':
                        if (user.batu >= count * 1) {
                            user.money += Sbatu * count
                            user.batu -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Batu 🪨 Dengan Harga ${Sbatu * count} Money 💹`.trim(), m)
                        } else conn.reply(m.chat, `🪨 Batu Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'kayu':
                        if (user.kayu >= count * 1) {
                            user.money += Skayu * count
                            user.kayu -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Kayu 🪵 Dengan Harga ${Skayu * count} Money 💹`.trim(), m)
                        } else conn.reply(m.chat, `🪵 Kayu Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'string':
                        if (user.string >= count * 1) {
                            user.money += Sstring * count
                            user.string -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} String 🕸️ Dengan Harga ${Sstring * count} Money 💹`.trim(), m)
                        } else conn.reply(m.chat, `🕸️ String Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'iron':
                        if (user.iron >= count * 1) {
                            user.money += Siron * count
                            user.iron -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Iron ⛓️ Dengan Harga ${Siron * count} Money 💹`.trim(), m)
                        } else conn.reply(m.chat, `⛓️ Iron Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'common':
                        if (user.common >= count * 1) {
                            user.money += Scommon * count
                            user.common -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Common Crate 📦 Dengan Harga ${Scommon * count} Money 💹`.trim(), m)
                        } else conn.reply(m.chat, `📦 Common Crate Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'uncommon':
                        if (user.uncommon >= count * 1) {
                            user.money += Suncommon * count
                            user.uncommon -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Uncommon Crate 🛍️ Dengan Harga ${Suncommon * count} Money 💹`.trim(), m)
                        } else conn.reply(m.chat, `🛍️ Uncommon Crate Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'mythic':
                        if (user.mythic >= count * 1) {
                            user.money += Smythic * count
                            user.mythic -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Mythic Crate 🎁 Dengan Harga ${Smythic * count} Money 💹`.trim(), m)
                        } else conn.reply(m.chat, `🎁 Mythic Crate Kamu Tidak Cukup `.trim(), m)
                        break
                    case 'legendary':
                        if (user.legendary >= count * 1) {
                            user.money += Slegendary * count
                            user.legendary -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Legendary Crate 🧰 Dengan Harga ${Slegendary * count} Money 💹`.trim(), m)
                        } else conn.reply(m.chat, `🧰 Legendary Crate Kamu Tidak Cukup `.trim(), m)
                        break
                     case 'pet':
                        if (user.pet >= count * 1) {
                            user.money += Spet * count
                            user.pet -= count * 1
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Pet Crate 📫 Dengan Harga ${Spet * count} Money 💹`.trim(), m)
                        } else conn.reply(m.chat, `📫 Pet Crate Kamu Tidak Cukup `.trim(), m)
                        break
                    case 'sampah':
                        if (user.sampah >= count * 1) {
                            user.sampah -= count * 1
                            user.money += Ssampah * count
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Sampah 🗑️ Dengan Harga ${Ssampah * count} Money 💹`, m)
                        } else conn.reply(m.chat, `🗑️ Sampah Anda Tidak Cukup `, m)
                        break
                    case 'diamond':
                        if (user.diamond >= count * 1) {
                            user.diamond -= count * 1
                            user.money += Sdiamond * count
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Diamond 💎 Dengan Harga ${Sdiamond * count} Money 💹`, m)
                        } else conn.reply(m.chat, `💎 Diamond Anda Tidak Cukup `, m)
                        break
                     case 'mangga':
                        if (user.mangga >= count * 1) {
                            user.mangga -= count * 1
                            user.money += Smangga * count
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Mangga 🥭 Dengan Harga ${Smangga * count} Money 💹`, m)
                        } else conn.reply(m.chat, `🥭 Mangga Anda Tidak Cukup `, m)
                        break
                     case 'apel':
                        if (user.apel >= count * 1) {
                            user.apel -= count * 1
                            user.money += Smangga * count
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Apel 🍎 Dengan Harga ${Smangga * count} Money 💹`, m)
                        } else conn.reply(m.chat, `🍎 Apel Anda Tidak Cukup `, m)
                        break
                     case 'jeruk':
                        if (user.jeruk >= count * 1) {
                            user.jeruk -= count * 1
                            user.money += Smangga * count
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Jeruk 🍊 Dengan Harga ${Smangga * count} Money 💹`, m)
                        } else conn.reply(m.chat, `🍊 Jeruk Anda Tidak Cukup `, m)
                        break
                     case 'anggur':
                        if (user.anggur >= count * 1) {
                            user.anggur -= count * 1
                            user.money += Smangga * count
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Anggur 🍇 Dengan Harga ${Smangga * count} Money 💹`, m)
                        } else conn.reply(m.chat, `🍇 Anggur Anda Tidak Cukup `, m)
                        break
                     case 'pisang':
                        if (user.pisang >= count * 1) {
                            user.pisang -= count * 1
                            user.money += Smangga * count
                            conn.reply(m.chat, `✔️ Sukses Menjual ${count} Pisang 🍌 Dengan Harga ${Smangga * count} Money 💹`, m)
                        } else conn.reply(m.chat, `🍌 Pisang Anda Tidak Cukup `, m)
                        break
                    default:
                        return conn.sendButton(m.chat, Kchat, set.wm,  null,[[ 'Ngechit', '.ngechit']], m, { contextInfo: { externalAdReply: { showAdAttribution: true,
                    mediaUrl: set.ig,
                    mediaType: "VIDEO",
                    description: set.ucapan, 
                    title: set.wm,
                    body: set.bottime,
                    thumbnail: set.thumb,
                    sourceUrl: set.gcbot
                }
                } })
                }
                break
            case 'upgrade': 
                switch (_type) {
                	case 'armor':
                            if (user.armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                            if (user.armor == 0) return conn.reply(m.chat, 'Kamu belum mempunyai Armor', m)
                            if (user.diamond > uparmor) {
                                user.armor += 1
                                user.diamond -= uparmor * 1
                                conn.reply(m.chat, `✔️ Sukses Mengupgrade Armor 🥼 Seharga ${uparmor} Diamond 💎` ,m)
                            } else conn.reply(m.chat, `Diamond Mu Tidak Cukup Untuk Mengupgrade Armor 🥼 Seharga ${uparmor} Diamond 💎`, m)
                        
                        break
                        case 'fishingrod':
                            if (user.fishingrod == 4) return conn.reply(m.chat, 'Pancingan mu udah *Level Max*', m)
                            if (user.fishingrod == 0) return conn.reply(m.chat, 'Kamu belum mempunyai Pancingan', m)
                            if (user.diamond > uppancing) {
                                user.pancing += 1
                                user.diamond -= uppancing * 1
                                user.fishingroddurability = durpancing
                                conn.reply(m.chat, `✔️ Sukses Mengupgrade Fishingrod 🎣  Seharga ${uppancing} Diamond 💎` ,m)
                            } else conn.reply(m.chat, `Diamond Mu Tidak Cukup Untuk Mengupgrade Fishingrod 🎣  Seharga ${uppancing} Diamond 💎`, m)
                        
                        break
                        
                            case 'sword':
                            if (user.sword == 5) return conn.reply(m.chat, 'Sword mu udah *Level Max*', m)
                            if (user.sword == 0) return conn.reply(m.chat, 'Kamu belum mempunyai Sword', m)
                            if (user.diamond > upsword) {
                                user.sword += 1
                                user.diamond -= upsword * 1
                                user.sworddurability = dursword
                                conn.reply(m.chat, `✔️ Sukses Mengupgrade Sword 🗡️ Seharga ${upsword} Diamond 💎` ,m)
                            } else conn.reply(m.chat, `Diamond Mu Tidak Cukup Untuk Mengupgrade Sword 🗡️ Seharga ${upsword} Diamond 💎`, m)
                            break
                            case 'pickaxe':
                            if (user.pickaxe == 5) return conn.reply(m.chat, 'Pickaxe mu udah *Level Max*', m)
                            if (user.pickaxe == 0) return conn.reply(m.chat, 'Kamu belum mempunyai Pickaxe', m)
                            if (user.diamond > uppickaxe) {
                                user.pickaxe += 1
                                user.diamond -= uppickaxe * 1
                                user.pickaxedurability = durpickaxe
                                conn.reply(m.chat, `✔️ Sukses Mengupgrade Pickaxe ⛏️ Seharga ${uppickaxe} Diamond 💎` ,m)
                            } else conn.reply(m.chat, `Diamond Mu Tidak Cukup Untuk Mengupgrade Pickaxe ⛏️  Seharga ${uppickaxe} Diamond 💎`, m)
                            break
                            default:
                            return conn.sendButton(m.chat, Kchat, set.wm,  null,[[ 'Ngechit', '.ngechit']], m, { contextInfo: { externalAdReply: { showAdAttribution: true,
                    mediaUrl: set.ig,
                    mediaType: "VIDEO",
                    description: set.ucapan, 
                    title: set.wm,
                    body: set.bottime,
                    thumbnail: set.thumb,
                    sourceUrl: set.gcbot
                }
                } })
                            }
                            break
                            case 'repair': 
                switch (_type) {
                	case 'fishingrod':
                            if (user.fishingroddurability == 80) return conn.reply(m.chat, 'Pancingan mu belum ada kerusakan', m)
                            if (user.fishingrod == 0) return conn.reply(m.chat, 'Kamu belum mempunyai Pancingan', m)
                            if (user.diamond > refishingrod) {
                                user.pancing += 1
                                user.diamond -= refishingrod * 1
                                user.fishingroddurability += drefishingrod
                                conn.reply(m.chat, `✔️ Sukses Mengrepair Fishingrod 🎣  Seharga ${refishingrod} Diamond 💎\n➕ ${drefishingrod} Durability` ,m)
                            } else conn.reply(m.chat, `Diamond Mu Tidak Cukup Untuk Merepair Fishingrod 🎣  Seharga ${refishingrod} Diamond 💎`, m)
                        
                        break
                        case 'pickaxe':
                            if (user.pickaxedurability == 80) return conn.reply(m.chat, 'Pickaxe mu belum ada kerusakan', m)
                            if (user.pickaxe == 0) return conn.reply(m.chat, 'Kamu belum mempunyai Pickaxe', m)
                            if (user.diamond > repickaxe) {
                                user.pickaxe += 1
                                user.diamond -= repickaxe * 1
                                user.pickaxedurability += drepickaxe
                                conn.reply(m.chat, `✔️ Sukses Mengrepair Pickaxe ⛏️ Seharga ${repickaxe} Diamond 💎\n➕ ${drepickaxe} Durability` ,m)
                            } else conn.reply(m.chat, `Diamond Mu Tidak Cukup Untuk Merepair Pickaxe ⛏️  Seharga ${repickaxe} Diamond 💎`, m)
                        
                        break
                            case 'sword':
                            if (user.sworddurability == 80) return conn.reply(m.chat, 'Sword mu belum ada kerusakan', m)
                            if (user.sword == 0) return conn.reply(m.chat, 'Kamu belum mempunyai Sword', m)
                            if (user.diamond > resword) {
                                user.sword += 1
                                user.diamond -= resword * 1
                                user.sworddurability += dresword
                                conn.reply(m.chat, `✔️ Sukses Mengrepair Sword 🗡️ Seharga ${resword} Diamond 💎\n➕ ${dresword} Durability` ,m)
                            } else conn.reply(m.chat, `Diamond Mu Tidak Cukup Untuk Merepair Sword 🗡️  Seharga ${resword} Diamond 💎`, m)
                        
                        break
                            
                            default:
                            return conn.sendButton(m.chat, Kchat, set.wm,  null,[[ 'Ngechit', '.ngechit']], m, { contextInfo: { externalAdReply: { showAdAttribution: true,
                    mediaUrl: set.ig,
                    mediaType: "VIDEO",
                    description: set.ucapan, 
                    title: set.wm,
                    body: set.bottime,
                    thumbnail: set.thumb,
                    sourceUrl: set.gcbot
                }
                } })
                            }
                            break
            default:
                return conn.sendButton(m.chat, Kchat, set.wm,  null,[[ 'Invetory', '.inv']], m, { contextInfo: { externalAdReply: { showAdAttribution: true,
                    mediaUrl: set.ig,
                    mediaType: "VIDEO",
                    description: set.ucapan, 
                    title: set.wm,
                    body: set.bottime,
                    thumbnail: set.thumb,
                    sourceUrl: set.gcbot
                }
                } })
                
                        }
        } else if (/beli|buy/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                        if (user.money >= potion * count) {
                            user.money -= potion * count
                            user.potion += count * 1
                            conn.reply(m.chat, `Sukses membeli ${count} Potion Dengan Harga ${potion * count} Money \n\nGunakan Potion Dengan Ketik: *${usedPrefix}use potion <jumlah>*`, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Potion Dengan Harga ${potion * count} Money`,m)
                    
                    break
                case 'tprem':
                            if (user.money >= Btprem * count) {
                                user.tprem += count * 1
                                user.money -= Btprem * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Tiket Premium Dengan Harga ${Btprem * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
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
                    return conn.sendButton(m.chat, Kchat, set.wm,  null,[[ 'Ngechit', '.ngechit']], m, { contextInfo: { externalAdReply: { showAdAttribution: true,
                    mediaUrl: set.ig,
                    mediaType: "VIDEO",
                    description: set.ucapan, 
                    title: set.wm,
                    body: set.bottime,
                    thumbnail: set.thumb,
                    sourceUrl: set.gcbot
                }
                } })
            }
        } else if (/sell|jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                    if (user.potion >= count * 1) {
                        user.money += Spotion * count
                        user.potion -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Potion Dengan Harga ${Spotion * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Potion Kamu Tidak Cukup `.trim(), m)
                    break
                case 'common':
                    if (user.common >= count * 1) {
                        user.money += Scommon * count
                        user.common -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Common Crate Dengan Harga ${Scommon * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Common Crate Kamu Tidak Cukup `.trim(), m)
                    break
                case 'uncommon':
                    if (user.uncommon >= count * 1) {
                        user.money += Suncommon * count
                        user.uncommon -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Uncommon Crate Dengan Harga ${Suncommon * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Uncommon Crate Kamu Tidak Cukup`.trim(), m)
                    break
                case 'mythic':
                    if (user.mythic >= count * 1) {
                        user.money += Smythic * count
                        user.mythic -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Mythic Crate Dengan Harga ${Smythic * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Mythic Crate Kamu Tidak Cukup `.trim(), m)
                    break
                case 'legendary':
                    if (user.legendary >= count * 1) {
                        user.money += Slegendary * count
                        user.legendary -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Legendary Crate Dengan Harga ${Slegendary * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Legendary Crate Kamu Tidak Cukup`.trim(), m)
                    break
                case 'sampah':
                    if (user.sampah >= count * 1) {
                        user.sampah -= count * 1
                        user.money += Ssampah * count
                        conn.reply(m.chat, `Sukses Menjual ${count} Sampah, Dan Anda Mendapatkan ${Ssampah * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Sampah Anda Tidak Cukup`.trim(), m)
                    break
                case 'diamond':
                    if (user.diamond >= count * 1) {
                        user.diamond -= count * 1
                        user.money += Sdiamond * count
                        conn.reply(m.chat, `Sukses Menjual ${count} Diamond, Dan Anda Mendapatkan ${Sdiamond * count} Money`, m)
                    } else conn.reply(m.chat, `Diamond Anda Tidak Cukup `, m)
                    break
                default:
                    return conn.sendButton(m.chat, Kchat, set.wm,  null,[[ 'Ngechit', '.ngechit']], m, { contextInfo: { externalAdReply: { showAdAttribution: true,
                    mediaUrl: set.ig,
                    mediaType: "VIDEO",
                    description: set.ucapan, 
                    title: set.wm,
                    body: set.bottime,
                    thumbnail: set.thumb,
                    sourceUrl: set.gcbot
                }
                } })
            }
        } else if (/up|upgrade/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'armor':
                            if (user.armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                            if (user.armor == 0) return conn.reply(m.chat, 'Kamu belum mempunyai Armor', m)
                            if (user.diamond > uparmor) {
                                user.armor += 1
                                user.diamond -= uparmor * 1
                                conn.reply(m.chat, `✔️ Sukses Mengupgrade Armor 🥼 Seharga ${uparmor} Money` ,m)
                            } else conn.reply(m.chat, `Uang Mu Tidak Cukup Untuk Mengupgrade Armor 🥼 Seharga ${uparmor} Money 💹`, m)
                        
                        break
                        default:
                    return conn.sendButton(m.chat, Kchat, set.wm,  null,[[ 'Ngechit', '.ngechit']], m, { contextInfo: { externalAdReply: { showAdAttribution: true,
                    mediaUrl: set.ig,
                    mediaType: "VIDEO",
                    description: set.ucapan, 
                    title: set.wm,
                    body: set.bottime,
                    thumbnail: set.thumb,
                    sourceUrl: set.gcbot
                }
                } })
                         }
                    }else if (/repair/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'armor':
                            if (user.armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                            if (user.armor == 0) return conn.reply(m.chat, 'Kamu belum mempunyai Armor', m)
                            if (user.diamond > uparmor) {
                                user.armor += 1
                                user.diamond -= uparmor * 1
                                conn.reply(m.chat, `✔️ Sukses Mengupgrade Armor 🥼 Seharga ${uparmor} Money` ,m)
                            } else conn.reply(m.chat, `Uang Mu Tidak Cukup Untuk Mengupgrade Armor 🥼 Seharga ${uparmor} Money 💹`, m)
                        
                        break
                        default:
                    return conn.sendButton(m.chat, Kchat, set.wm,  null,[[ 'Ngechit', '.ngechit']], m, { contextInfo: { externalAdReply: { showAdAttribution: true,
                    mediaUrl: set.ig,
                    mediaType: "VIDEO",
                    description: set.ucapan, 
                    title: set.wm,
                    body: set.bottime,
                    thumbnail: set.thumb,
                    sourceUrl: set.gcbot
                }
                } })
                    
                    }
            }
    } catch (e) {
        conn.sendButton(m.chat, Kchat, set.wm,  null,[[ 'Ngechit', '.ngechit']], m, { contextInfo: { externalAdReply: { showAdAttribution: true,
                    mediaUrl: set.ig,
                    mediaType: "VIDEO",
                    description: set.ucapan, 
                    title: set.wm,
                    body: set.bottime,
                    thumbnail: set.thumb,
                    sourceUrl: set.gcbot
                }
                } })
        console.log(e)
        if (DevMode) {
            for (let jid of set.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.reply(jid, 'toko.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
            }
        }
    }
}

handler.help = ['toko <sell | buy | upgrade | repair> <args>', 'toko <sell | buy | upgrade | repair> <args>']
handler.tags = ['rpg']
    
handler.command = /^(toko)$/i
export default handler