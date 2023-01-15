import fetch from 'node-fetch'
import db from '../../lib/database.js'
let handler = async(m, { conn, args, usedPrefix, command, text }) => {
    let user = db.data.users[m.sender]
             let timeoute = 1000
             let timeoutem = 60000
             let timeoutu = 600000
             let timeouto = 1000
             let timeouten = 60000
             let timeoutum = 600000
             let timeoutol = 1000
             let timeoutel = 60000
             let timeoutul = 600000
             let timeoutog = 1000
             let timeouteg = 60000
             let timeoutug = 600000
             let timeoutoy = 1000
             let timeoutey = 60000
             let timeoutuy = 600000
             let timeoutst = 1000
             let timeoutstt = 60000
             let timeoutsttt = 600000
             let timeoutww = 1000
             let timeoutwww = 60000
             let timeoutwwww = 600000
             let type = (args[0] || '').toLowerCase()
                 switch (type) {
                     case 'ramuan': 
                                     let apelu = user.apel
                                     let angguru = user.anggur
                                     let manggau = user.mangga
                                     let pisangu = user.pisang
                                     let jeruku = user.jeruk 
                                     let __waktuga = (new Date - user.lastramuanclaim)
                                     let _waktuga = (600000 - __waktuga)
                                     let waktuga = clockString(_waktuga)
                                     if (apelu == 0 || angguru == 0 || manggau == 0 || pisangu == 0 || jeruku == 0) return conn.reply(m.chat, '*Pastikan kamu memiliki semua buah buahan*\n*Seperti Apel, Mangga, Jeruk, Pisang, Anggur*')
                                     if (new Date - user.lastramuanclaim > 600000) {
                                 	if (user.mangga > 499) {
                                 	if (user.apel > 499) {
                                 	if (user.pisang > 499) {
                                 	if (user.jeruk > 499) {
                                 	if (user.anggur > 499) {
                                     let _manggas = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _anggurs = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _jeruks = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _apels = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _pisangs = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _ramuans = `${pickRandom(['1','2','3','4','5'])}`.trim()
                                     let ramuans = (_ramuans * 1)
                                     let manggas = (_manggas * 1)
                                     let anggurs = (_anggurs * 1)
                                     let jeruks = (_jeruks * 1)
                                     let apels = (_apels * 1)
                                     let pisangs = (_pisangs * 1)
                                     user.mangga -= manggas * 1
                                     user.anggur -= anggurs * 1
                                     user.jeruk -= jeruks * 1
                                     user.apel -= apels * 1
                                     user.pisang -= pisangs * 1
                                     user.ramuan += ramuans * 1
                                     user.lastramuanclaim = new Date * 1
                                     let srcs = `
Berhasil meracik ramuan:
-${apels} Apel
-${manggas} Mangga
-${anggurs} Anggur
-${jeruks} Jeruk
-${pisangs} Pisang

Selamat kamu mendapatkan ramuan: 
+${ramuans}
`.trim()
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Yuk meracik lagi..', m)
                                      }, timeoutu)
                                     setTimeout(() => {
                                          conn.reply(m.chat, srcs, m)
                                      }, timeoutem)
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Mohon tunggu sedang mengaduk ramuan', m)
                                      }, timeoute)
                                      } else conn.reply(m.chat, `Pastikan anggur kamu *500* untuk bisa meracik ramuan`)
                                   } else conn.reply(m.chat, `Pastikan jeruk kamu *500* untuk bisa meracik ramuan`)
                                } else conn.reply(m.chat, `Pastikan pisang kamu *500* untuk bisa meracik ramuan`)
                             } else conn.reply(m.chat, `Pastikan apel kamu *500* untuk bisa meracik ramuan`)
                          } else conn.reply(m.chat, `Pastikan mangga kamu *500* untuk bisa meracik ramuan`)
                       } else conn.reply(m.chat, `Kamu sudah meracik, tidak bisa meracik kembali..\nMohon tunggu ${waktuga} lagi untuk meracik kembali `)
                     break 
                     /*case 'cupon':
                                     let gemses = user.gems 
                                     let __waktutiones = (new Date - user.lastgemsclaim)
                                     let _waktutiones = (600000 - __waktutiones)
                                     let waktutiones = clockString(_waktutiones)
                                     if (gemses == 0) return conn.reply(m.chat, '*Pastikan kamu memiliki gems*')
                                     if (new Date - user.lastgemsclaim > 600000) {
                                     if (user.gems > 1000000) {
                                   //  let cupon = `${pickRandom(['1','1','1','1','1','2','1','1','1','1','1','2'])}`.trim()
                                     user.gems -= 1000000
                                     user.cupon += 1
                                     user.lastgemsclaim = new Date * 1
                                     let gmss = `
Berhasil meracik cupon:
-1 Juta gems 

Selamat kamu mendapatkan cupon:
+1 Cupon
`.trim()
                                     conn.reply(m.chat, gmss, m)
                                     } else conn.reply(m.chat, 'Pastikan kamu memiliki 1 Juta gems untuk bisa meracik cupon')
                                  } else conn.reply(m.chat, `Kamu sudah meracik, tidak bisa meracik kembali..\nMohon tunggu ${waktutiones} lagi untuk meracik kembali `)
                     break 
                     case 'gems':
                                     let eleksirbh = user.eleksirb 
                                     let __waktutioneso = (new Date - user.lastgemsclaim)
                                     let _waktutioneso = (600000 - __waktutioneso)
                                     let waktutioneso = clockString(_waktutioneso)
                                     if (eleksirbh == 0) return conn.reply(m.chat, '*Pastikan kamu memiliki eleksir biru*')
                                     if (new Date - user.lastgemsclaim > 600000) {
                                     if (user.eleksirb > 10000) {
                                     let _gemss = `${Math.floor(Math.random() * 500)}`.trim()
                                     let gemss = (_gemss * 1)
                                     user.eleksirb -= 10000
                                     user.gems += gemss * 1
                                     user.lastgemsclaim = new Date * 1
                                     let gamse = `
Berhasil meracik gems:
-10000 Eleksir Biru

Selamat kamu mendapatkan gems:
+${gemss} Gems
`.trim()
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Yuk meracik lagi..', m)
                                      }, 600000)
                                     setTimeout(() => {
                                          conn.reply(m.chat, gamse, m)
                                      }, 30000)
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Mohon tunggu sedang mengaduk gems', m)
                                      }, 0)
                                      } else conn.reply(m.chat, `Pasti kan kamu memiliki eleksir biru 10000, untuk bisa meracik gems`)
                                   } else conn.reply(m.chat, `Kamu sudah meracik, tidak bisa meracik kembali..\nMohon tunggu ${waktutioneso} lagi untuk meracik kembali `)
                     break 
                     case 'troops':
                                     let pendudukkes = user.penduduk 
                                     let __waktutionkes = (new Date - user.lastpotionclaim)
                                     let _waktutionkes = (600000 - __waktutionkes)
                                     let waktutionkes = clockString(_waktutionkes)
                                     if (pendudukkes == 0) return conn.reply(m.chat, '*Pastikan kamu memiliki penduduk untuk menjadikan prajurit*')
                                     if (new Date - user.lastpotionclaim > 600000) {
                                     if (user.penduduk > 9) {
                                     user.penduduk -= 10
                                     user.archer += 5
                                     user.shadow += 5
                                     user.lastpotionclaim = new Date * 1 
                                     let cdskes = `
Berhasil menukar pasukan:
-10 Penduduk 
+5 Archer
+5 Shadow
`.trim()
                                     conn.reply(m.chat, cdskes, m)
                                     } else conn.reply(m.chat, `Minimal penduduk kamu 10 untuk menukar sebuah pasukan`)
                                  } else conn.reply(m.chat, `Kamu sudah meracik, tidak bisa meracik kembali..\nMohon tunggu ${waktutionkes} lagi untuk meracik kembali `)
                     break 
                     case 'penduduk':
                                     let apeleks = user.apel 
                                     let anggureks = user.anggur
                                     let manggaeks = user.mangga
                                     let pisangeks = user.pisang
                                     let jerukeks = user.jeruk 
                                     let __waktuteks = (new Date - user.lastpotionclaim)
                                     let _waktuteks = (600000 - __waktuteks)
                                     let waktuteks = clockString(_waktuteks)
                                     if (apeleks == 0 || anggureks == 0 || manggaeks == 0 || pisangeks == 0 || jerukeks == 0) return conn.reply(m.chat, '*Pastikan kamu memiliki semua buah buahan*\n*Seperti Apel, Mangga, Jeruk, Pisang, Anggur*')
                                     if (new Date - user.lastpotionclaim > 600000) {
                                     if (user.mangga > 499) {
                                 	if (user.apel > 499) {
                                 	if (user.pisang > 499) {
                                 	if (user.jeruk > 499) {
                                 	if (user.anggur > 499) {
                                 	let _manggaahs = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _apelahs = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _anggurahs = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _pisangahs = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _jerukahs = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _pendudukahs = `${Math.floor(Math.random() * 501)}`.trim()
                                     let pendudukahs = (_pendudukahs * 1)
                                     let manggaahs = (_manggaahs * 1)
                                     let apelahs = (_apelahs * 1)
                                     let anggurahs = (_anggurahs * 1)
                                     let pisangahs = (_pisangahs * 1)
                                     let jerukahs = (_jerukahs * 1)
                                     user.mangga -= manggaahs * 1
                                     user.anggur -= anggurahs * 1
                                     user.jeruk -= jerukahs * 1
                                     user.apel -= apelahs * 1
                                     user.pisang -= pisangahs * 1
                                     user.penduduk += pendudukahs * 1
                                     user.lastpotionclaim = new Date * 1 
                                     let psnan = `
Berhasil menghabiskan buah buahan:
-${manggaahs} Mangga
-${apelahs} Apel
-${anggurahs} Anggur
-${pisangahs} Pisang
-${jerukahs} Jeruk

Berhasil menambahkan penduduk:
+${pendudukahs} Penduduk
`.trim()
                                     conn.reply(m.chat, psnan, m)
                                      } else conn.reply(m.chat, `Pastikan anggur kamu *500* untuk bisa menambahkan penduduk`)
                                   } else conn.reply(m.chat, `Pastikan jeruk kamu *500* untuk bisa menambahkan penduduk`)
                                } else conn.reply(m.chat, `Pastikan pisang kamu *500* untuk bisa menambahkan penduduk`)
                             } else conn.reply(m.chat, `Pastikan apel kamu *500* untuk bisa menambahkan penduduk`)
                          } else conn.reply(m.chat, `Pastikan mangga kamu *500* untuk bisa menambahkan penduduk`)
                       } else conn.reply(m.chat, `Kamu sudah menambahkan penduduk, tidak bisa menambahkan penduduk kembali..\nMohon tunggu ${waktuteks} lagi untuk menambahkan penduduk kembali `)
                     break*/
                     case 'potion':
                                     let apele = user.apel
                                     let anggure = user.anggur
                                     let manggae = user.mangga
                                     let pisange = user.pisang
                                     let jeruke = user.jeruk 
                                     let __waktution = (new Date - user.lastpotionclaim)
                                     let _waktution = (600000 - __waktution)
                                     let waktution = clockString(_waktution)
                                     if (apele == 0 || anggure == 0 || manggae == 0 || pisange == 0 || jeruke == 0) return conn.reply(m.chat, '*Pastikan kamu memiliki semua buah buahan*\n*Seperti Apel, Mangga, Jeruk, Pisang, Anggur*')
                                     if (new Date - user.lastpotionclaim > 600000) {
                                     if (user.mangga > 499) {
                                 	if (user.apel > 499) {
                                 	if (user.pisang > 499) {
                                 	if (user.jeruk > 499) {
                                 	if (user.anggur > 499) {
                                     let _manggan = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _anggurn = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _jerukn = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _apeln = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _pisangn = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _potionn = `${pickRandom(['1','2','3','4','5','6','7','8','9','10'])}`.trim()
                                     let potionn = (_potionn * 1)
                                     let manggan = (_manggan * 1)
                                     let anggurn = (_anggurn * 1)
                                     let jerukn = (_jerukn * 1)
                                     let apeln = (_apeln * 1)
                                     let pisangn = (_pisangn * 1)
                                     user.mangga -= manggan * 1
                                     user.anggur -= anggurn * 1
                                     user.jeruk -= jerukn * 1
                                     user.apel -= apeln * 1
                                     user.pisang -= pisangn * 1
                                     user.potion += potionn * 1
                                     user.lastpotionclaim = new Date * 1
                                     let srcn = `
Berhasil meracik potion:
-${apeln} Apel
-${manggan} Mangga
-${anggurn} Anggur
-${jerukn} Jeruk
-${pisangn} Pisang

Selamat kamu mendapatkan potion: 
+${potionn}
`.trim()
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Yuk meracik lagi..', m)
                                      }, timeoutum)
                                     setTimeout(() => {
                                          conn.reply(m.chat, srcn, m)
                                      }, timeouten)
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Mohon tunggu sedang mengaduk potion', m)
                                      }, timeouto)
                                      } else conn.reply(m.chat, `Pastikan anggur kamu *500* untuk bisa meracik potion`)
                                   } else conn.reply(m.chat, `Pastikan jeruk kamu *500* untuk bisa meracik potion`)
                                } else conn.reply(m.chat, `Pastikan pisang kamu *500* untuk bisa meracik potion`)
                             } else conn.reply(m.chat, `Pastikan apel kamu *500* untuk bisa meracik potion`)
                          } else conn.reply(m.chat, `Pastikan mangga kamu *500* untuk bisa meracik potion`)
                       } else conn.reply(m.chat, `Kamu sudah meracik, tidak bisa meracik kembali..\nMohon tunggu ${waktution} lagi untuk meracik kembali `)
                     break
                     case 'string':
                                     let apelg = user.apel
                                     let anggurg = user.anggur
                                     let manggag = user.mangga
                                     let pisangg = user.pisang
                                     let jerukg = user.jeruk 
                                     let __waktutiong = (new Date - user.laststringclaim)
                                     let _waktutiong = (600000 - __waktutiong)
                                     let waktutiong = clockString(_waktutiong)
                                     if (apelg == 0 || anggurg == 0 || manggag == 0 || pisangg == 0 || jerukg == 0) return conn.reply(m.chat, '*Pastikan kamu memiliki semua buah buahan*\n*Seperti Apel, Mangga, Jeruk, Pisang, Anggur*')
                                     if (new Date - user.laststringclaim > 600000) {
                                     if (user.mangga > 499) {
                                 	if (user.apel > 499) {
                                 	if (user.pisang > 499) {
                                 	if (user.jeruk > 499) {
                                 	if (user.anggur > 499) {
                                     let _manggang = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _anggurng = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _jerukng = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _apelng = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _pisangng = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _strings = `${pickRandom(['1','2','3','4'])}`.trim()
                                     let strings = (_strings * 1)
                                     let manggang = (_manggang * 1)
                                     let anggurng = (_anggurng * 1)
                                     let jerukng = (_jerukng * 1)
                                     let apelng = (_apelng * 1)
                                     let pisangng = (_pisangng * 1)
                                     user.mangga -= manggang * 1
                                     user.anggur -= anggurng * 1
                                     user.jeruk -= jerukng * 1
                                     user.apel -= apelng * 1
                                     user.pisang -= pisangng * 1
                                     user.string += strings * 1
                                     user.laststringclaim = new Date * 1
                                     let srcng = `
Berhasil meracik string:
-${apelng} Apel
-${manggang} Mangga
-${anggurng} Anggur
-${jerukng} Jeruk
-${pisangng} Pisang

Selamat kamu mendapatkan string: 
+${strings}
`.trim()
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Yuk meracik lagi..', m)
                                      }, timeoutul)
                                     setTimeout(() => {
                                          conn.reply(m.chat, srcng, m)
                                      }, timeoutel)
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Mohon tunggu sedang mengaduk string', m)
                                      }, timeoutol)
                                      } else conn.reply(m.chat, `Pastikan anggur kamu *500* untuk bisa meracik string`)
                                   } else conn.reply(m.chat, `Pastikan jeruk kamu *500* untuk bisa meracik string`)
                                } else conn.reply(m.chat, `Pastikan pisang kamu *500* untuk bisa meracik string`)
                             } else conn.reply(m.chat, `Pastikan apel kamu *500* untuk bisa meracik string`)
                          } else conn.reply(m.chat, `Pastikan mangga kamu *500* untuk bisa meracik string`)
                       } else conn.reply(m.chat, `Kamu sudah meracik, tidak bisa meracik kembali..\nMohon tunggu ${waktutiong} lagi untuk meracik kembali `)
                     break
                     case 'sword':
                                     let iron = user.iron
                                     let kayu = user.kayu
                                     let string = user.string
                                     let __waktutions = (new Date - user.lastswordclaim)
                                     let _waktutions = (600000 - __waktutions)
                                     let waktutions = clockString(_waktutions)
                                     if (iron == 0 || kayu == 0 || string == 0) return conn.reply(m.chat, '*Pastikan kamu memiliki semua*\n*Seperti Iron, Kayu, String*')
                                     if (new Date - user.lastswordclaim > 600000) {
                                     if (user.iron > 4) {
                                 	if (user.kayu > 499) {
                                 	if (user.string > 9) {
                                     let _ironn = `${pickRandom(['1','2','3','4'])}`.trim()
                                     let _kayunn = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _stringn = `${pickRandom(['1','2','3','4','5','6','7','8','9'])}`.trim()
                                     let _swordn = `${pickRandom(['1','2'])}`.trim()
                                     let swordn = (_swordn * 1)
                                     let ironn = (_ironn * 1)
                                     let kayun = (_kayunn * 1)
                                     let stringn = (_stringn * 1)
                                     user.iron -= ironn * 1
                                     user.kayu -= kayun * 1
                                     user.string -= stringn * 1
                                     user.sword += swordn * 1
                                     user.lastswordclaim = new Date * 1
                                     let srcngs = `
Berhasil meracik sword:
-${ironn} Iron
-${kayun} Kayu
-${stringn} String

Selamat kamu mendapatkan sword: 
+${swordn}
`.trim()
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Yuk meracik lagi..', m)
                                      }, timeoutug)
                                     setTimeout(() => {
                                          conn.reply(m.chat, srcngs, m)
                                      }, timeouteg)
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Mohon tunggu sedang mengaduk sword', m)
                                      }, timeoutog)
                                 } else conn.reply(m.chat, `Pastikan string kamu *10* untuk bisa meracik sword`)
                             } else conn.reply(m.chat, `Pastikan kayu kamu *500* untuk bisa meracik sword`)
                          } else conn.reply(m.chat, `Pastikan iron kamu *5* untuk bisa meracik sword`)
                       } else conn.reply(m.chat, `Kamu sudah meracik, tidak bisa meracik kembali..\nMohon tunggu ${waktutions} lagi untuk meracik kembali `)
                     break
                     case 'weapon':
                                     let ironw = user.iron
                                     let kayuw = user.kayu
                                     let stringw = user.string
                                     let swordw = user.sword
                                     let __waktutionsw = (new Date - user.lastweaponclaim)
                                     let _waktutionsw = (600000 - __waktutionsw)
                                     let waktutionsw = clockString(_waktutionsw)
                                     if (ironw == 0 || kayuw == 0 || stringw == 0 || swordw == 0) return conn.reply(m.chat, '*Pastikan kamu memiliki semua*\n*Seperti Iron, Kayu, String, Sword*')
                                     if (new Date - user.lastweaponclaim > 600000) {
                                     if (user.iron > 9) {
                                 	if (user.kayu > 999) {
                                 	if (user.string > 9) {
                                 	if (user.sword > 9) {
                                     let _ironnw = `${pickRandom(['1','2','3','4','5','6','7','8','9','10'])}`.trim()
                                     let _kayunnw = `${Math.floor(Math.random() * 1001)}`.trim()
                                     let _stringnnw = `${pickRandom(['1','2','3','4','5','6','7','8','9','10'])}`.trim()
                                     let _swordnnw = `${pickRandom(['1','2','3','4','5','6','7','8','9','10'])}`.trim()
                             //        let _weaponnw = `${pickRandom(['1','1','1','2','1','1','1','1','1','1','3'])}`.trim()
                                     let swordnnw = (_swordnnw * 1)
                                     let ironnw = (_ironnw * 1)
                                     let kayunnw = (_kayunnw * 1)
                                     let stringnnw = (_stringnnw * 1)
                           //          let weaponnw = (_weaponnw * 1)
                                     user.iron -= ironnw * 1
                                     user.kayu -= kayunnw * 1
                                     user.string -= stringnnw * 1
                                     user.sword -= swordnnw * 1
                                     user.weapon += 1
                                     user.lastweaponclaim = new Date * 1
                                     let srcngsw = `
Berhasil meracik weapon:
-${ironnw} Iron
-${kayunnw} Kayu
-${stringnnw} String
-${swordnnw} Sword

Selamat kamu mendapatkan weapon: 
+1
`.trim()
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Yuk meracik lagi..', m)
                                      }, timeoutwwww)
                                     setTimeout(() => {
                                          conn.reply(m.chat, srcngsw, m)
                                      }, timeoutwww)
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Mohon tunggu sedang mengaduk weapon', m)
                                      }, timeoutww)
                                     } else conn.reply(m.chat, `Pastikan sword kamu *10* untuk bisa meracik weapon`)
                                 } else conn.reply(m.chat, `Pastikan string kamu *10* untuk bisa meracik weapon`)
                             } else conn.reply(m.chat, `Pastikan kayu kamu *1000* untuk bisa meracik weapon`)
                          } else conn.reply(m.chat, `Pastikan iron kamu *10* untuk bisa meracik weapon`)
                       } else conn.reply(m.chat, `Kamu sudah meracik, tidak bisa meracik kembali..\nMohon tunggu ${waktutionsw} lagi untuk meracik kembali `)
                     break
                     case 'iron':
                                     let emasbiasa = user.emas
                                     let stringk = user.string
                                     let __waktutionsk = (new Date - user.lastsironclaim)
                                     let _waktutionsk = (600000 - __waktutionsk)
                                     let waktutionsk = clockString(_waktutionsk)
                                     if (emasbiasa == 0 || stringk == 0) return conn.reply(m.chat, '*Pastikan kamu memiliki semua*\n*Seperti Emas, String*')
                                     if (new Date - user.lastsironclaim > 600000) {
                                     if (user.emas > 4) {
                                 	if (user.string > 4) {
                                     let _emasbiasak = `${pickRandom(['1','2','3','4'])}`.trim()
                                     let _stringk = `${pickRandom(['1','2','3','4'])}`.trim()
                                     let _ironk = `${pickRandom(['1','2'])}`.trim()
                                     let ironk = (_ironk * 1)
                                     let emasbiasak = (_emasbiasak * 1)
                                     let stringk = (_stringk * 1)
                                     user.emas -= emasbiasak * 1
                                     user.string -= stringk * 1
                                     user.iron += ironk * 1
                                     user.lastsironclaim = new Date * 1
                                     let srcngsk = `
Berhasil meracik iron:
-${emasbiasak} Emas
-${stringk} String

Selamat kamu mendapatkan iron: 
+${ironk}
`.trim()
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Yuk meracik lagi..', m)
                                      }, timeoutuy)
                                     setTimeout(() => {
                                          conn.reply(m.chat, srcngsk, m)
                                      }, timeoutey)
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Mohon tunggu sedang mengaduk iron', m)
                                      }, timeoutoy)
                                 } else conn.reply(m.chat, `Pastikan string kamu *5* untuk bisa meracik iron`)
                          } else conn.reply(m.chat, `Pastikan emas kamu *5* untuk bisa meracik iron`)
                       } else conn.reply(m.chat, `Kamu sudah meracik, tidak bisa meracik kembali..\nMohon tunggu ${waktutionsk} lagi untuk meracik kembali `)
                     break
                     case 'pancingan':
                                     let kayuh = user.kayu
                                     let stringh = user.string
                                     let batuh = user.batu 
                                     let pancingan = user.pancingan
                                     let __waktutionskh = (new Date - user.lastsmancingclaim)
                                     let _waktutionskh = (600000 - __waktutionskh)
                                     let waktutionskh = clockString(_waktutionskh)
                                     if (kayuh == 0 || stringh == 0 || batuh == 0) return conn.reply(m.chat, '*Pastikan kamu memiliki semua*\n*Seperti Kayu, Batu, String*')
                                     if (pancingan == 5) return conn.reply(m.chat, '*Pancingan kamu dah lvl max*')
                                     if (new Date - user.lastsmancingclaim > 600000) {
                                     if (user.kayu > 499) {
                                 	if (user.string > 4) {
                                 	if (user.batu > 9) {
                                     user.kayu -= 500
                                     user.string -= 5
                                     user.batu -= 10
                                     user.anakpancingan += 150
                                     user.lastsmancingclaim = new Date * 1
                                     let srcngsk = `
Berhasil meracik pancingan:
-10 Batu
-5 String
-500 Kayu

Selamat kamu mendapatkan Exp: 
+150 Exp Pancingan
`.trim()
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Yuk meracik lagi..', m)
                                      }, timeoutuy)
                                     setTimeout(() => {
                                          conn.reply(m.chat, srcngsk, m)
                                      }, timeoutey)
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Mohon tunggu sedang mengaduk pancingan', m)
                                      }, timeoutoy)
                                      if (pancingan > 0) {
                                      let naiklvl = ((pancingan * 10000) - 1)
                                      if (user.anakpancingan > naiklvl) {
                                      user.pancingan += 1
                                      user.anakpancingan -= (pancingan * 10000)
                                      conn.reply(m.chat, `*Selamat pancingan kamu naik level*`, m)
                                      }
                                    }
                                 } else conn.reply(m.chat, `Pastikan batu kamu *10* untuk bisa meracik pancingan`)
                              } else conn.reply(m.chat, `Pastikan string kamu *5* untuk bisa meracik pancingan`)
                          } else conn.reply(m.chat, `Pastikan kayu kamu *500* untuk bisa meracik pancingan`)
                       } else conn.reply(m.chat, `Kamu sudah meracik, tidak bisa meracik kembali..\nMohon tunggu ${waktutionskh} lagi untuk meracik kembali `)
                     break
                           default:
                                  return conn.reply(m.chat, `${usedPrefix + command} [ramuan | potion | string | iron | sword | weapon | pancingan]\nContoh penggunaan: *${usedPrefix + command} ramuan*`, m)
                           }
                        }

handler.help = ['meracik [type]']
handler.tags = ['rpg']
handler.command = /^(meracik|racik)$/i
handler.limit = true
handler.group = true

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
