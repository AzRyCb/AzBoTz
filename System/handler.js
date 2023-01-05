
//-- module internal
import './config.js'
import { smsg } from './lib/socket.js'
import { plugins } from './lib/plugins.js'
import printMessage from './lib/print.js'
import Queque from './lib/queque.js'
import db, { loadDatabase } from './lib/database.js'
import {isNumber} from './lib/function.js'
import Func from './lib/func.js'

const { API, opts, prefix, __filename } = (await import('./lib/helper.js')).default 
const { store, conn, reload }= (await import('./lib/connection.js')).default 

//-- module eksternal
import {format} from 'util'
import {fileURLToPath} from 'url'
import {join, dirname} from 'path'
import {watchFile, unwatchFile} from 'fs'
import chalk from 'chalk'
import moment from 'moment-timezone'
moment.tz.setDefault('Asia/Jakarta').locale('id')

/** @type {import('@adiwajshing/baileys')} */
// @ts-ignore
const { getContentType, delay } = (await import('@adiwajshing/baileys')).default
  
//const isNumber = x => typeof x === 'number' && !isNaN(x)
/**
 * Handle messages upsert
 * @this {import('./lib/connection').Socket}
 * @param {import('@adiwajshing/baileys').BaileysEventMap['messages.upsert']} chatUpdate
 */
export async function handler(chatUpdate) {
if (db.data == null) await loadDatabase()
    this.msgqueque = this.msgqueque || new Queque()
if (!chatUpdate) return
//this.pushMessage(chatUpdate.messages).catch(console.error)
// if (!(chatUpdate.type === 'notify' || chatUpdate.type === 'append')) return
//if (chatUpdate.messages.length > 1) this.logger?.info(chatUpdate.messages)
let m = chatUpdate.messages[chatUpdate.messages.length - 1]
if (!m) return
const Tnow = (new Date()/1000).toFixed(0)
const sel = Tnow - m.messageTimestamp  
if (sel > global.Intervalmsg) return this.logger?.info(new ReferenceError(`Pesan ${global.Intervalmsg} detik yang lalu diabaikan agar tidak spam`))
try {
    m = smsg(this, m) || m
    if (!m) return
    m.exp = 0
    m.limit = false
try {
    if (moment(new Date).format('HH:mm') == '17:00') {
    Object.entries(db.data.users).filter(([_, data]) => !data.limit < 10 && !data.premium).map(([_, data]) => data.limit = 10)}
    // TODO: use loop to insert data instead of this
    let user = db.data.users[m.sender]
    if (typeof user !== 'object') db.data.users[m.sender] = {}
    if (user) {
    if (!('BannedReason' in user)) user.BannedReason = ''
    if (!('Banneduser' in user)) user.Banneduser = false
    if (!('afkReason' in user)) user.afkReason = ''
    if (!('autolevelup' in user)) user.autolevelup = false
    if (!('banned' in user)) user.banned = false
    if (!('catatan' in user)) user.catatan = ''
    if (!('job' in user)) user.job = ''
    if (!('kingdom' in user)) user.kingdom = true
    if (!('misi' in user)) user.misi = ''
    if (!('pasangan' in user)) user.pasangan = ''
    if (!('premium' in user)) user.premium = false
    if (!('registered' in user)) user.registered = false
    if (!('role' in user)) user.role = 'Beginner'
    if (!('sewa' in user)) user.sewa = false
    if (!('skill' in user)) user.skill = ''
    if (!('title' in user)) user.title = ''
    if (!('language' in user)) user.language = m.sender.startsWith('62') ? 'id' : 'en'
    if (!('languageSimi' in user)) user.languageSimi = m.sender.startsWith('62') ? 'id' : 'en'
    if (!('languageCountry' in user)) user.languageCountry = m.sender.startsWith('62') ? 'Indonesia' : 'English'
    if (!('registered' in user)) user.registered = false
                
    if (!user.registered) {
        if (!('name' in user)) user.name = m.name
        if (!('email' in user)) user.email = ''
        if (!('label' in user)) user.label = ''
        if (!('nyimak' in user)) user.nyimak = false
        if (!('jadibot' in user)) user.jadibot = false
        if (!isNumber(user.timeBot)) user.timeBot = 0
        if (isNumber(user.nobot)) user.nobot = 0
        if (!isNumber(user.premiumDate)) user.premiumDate = -1
        if (!isNumber(user.regTime)) user.regTime = -1
        if (!isNumber(user.age)) user.age = -1
        if (!isNumber(user.anggur)) user.anggur = 0
        if (!isNumber(user.apel)) user.apel = 0
        if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
        if (!isNumber(user.bibitapel)) user.bibitapel = 0
        if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
        if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
        if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
        if (!isNumber(user.emas)) user.emas = 0
        if (!isNumber(user.jeruk)) user.jeruk = 0
        if (!isNumber(user.kayu)) user.kayu = 0
        if (!isNumber(user.makanan)) user.makanan = 0
        if (!isNumber(user.mangga)) user.mangga = 0
        if (!isNumber(user.pisang)) user.pisang = 0
        if (!isNumber(user.semangka)) user.semangka = 0
        if (!isNumber(user.stroberi)) user.stroberi = 0
    }           
    if (!isNumber(user.limitspam)) user.limitspam = 0
    if (!isNumber(user.bannedDate)) user.bannedDate = 0
    if (!isNumber(user.usebot)) user.usebot = 0
    if (!isNumber(user.lastkerja)) user.lastkerja = 0
    if (!isNumber(user.lastjob)) user.lastjob = 0
    if (!isNumber(user.otp)) user.otp = 0
    if (!('ojek' in user)) user.ojek = false
    if (!('pedagang' in user)) user.pedagang = false
    if (!('dokter' in user)) user.dokter = false
    if (!('petani' in user)) user.petani = false
    if (!('montir' in user)) user.montir = false
    if (!('kuli' in user)) user.kuli = false
    if (!('polisi' in user)) user.polisi = false
    if (!('created' in user)) user.created = false

    if (!isNumber(user.area)) user.area = 0
    if (!isNumber(user.afk)) user.afk = -1
    if (!isNumber(user.agility)) user.agility = 0
    if (!isNumber(user.anakanjing)) user.anakanjing = 0
    if (!isNumber(user.anakcentaur)) user.anakcentaur = 0
    if (!isNumber(user.anakgriffin)) user.anakgriffin = 0
    if (!isNumber(user.anakkucing)) user.anakkucing = 0
    if (!isNumber(user.anakkuda)) user.anakkuda = 0
    if (!isNumber(user.anakkyubi)) user.anakkyubi = 0
    if (!isNumber(user.anaknaga)) user.anaknaga = 0
    if (!isNumber(user.anakpancingan)) user.anakpancingan = 0
    if (!isNumber(user.anakphonix)) user.anakphonix = 0
    if (!isNumber(user.anakrubah)) user.anakrubah = 0
    if (!isNumber(user.anakserigala)) user.anakserigala = 0
    if (!isNumber(user.anggur)) user.anggur = 0
    if (!isNumber(user.anjing)) user.anjing = 0
    if (!isNumber(user.anjinglastclaim)) user.anjinglastclaim = 0
    if (!isNumber(user.antispam)) user.antispam = 0
    if (!isNumber(user.antispamlastclaim)) user.antispamlastclaim = 0
    if (!isNumber(user.apel)) user.apel = 0
    if (!isNumber(user.aqua)) user.aqua = 0
    if (!isNumber(user.arc)) user.arc = 0
    if (!isNumber(user.arcdurability)) user.arcdurability = 0
    if (!isNumber(user.arlok)) user.arlok = 0
    if (!isNumber(user.armor)) user.armor = 0
    if (!isNumber(user.armordurability)) user.armordurability = 0
    if (!isNumber(user.armormonster)) user.armormonster = 0
    if (!isNumber(user.as)) user.as = 0
    if (!isNumber(user.atm)) user.atm = 0
    if (!isNumber(user.axe)) user.axe = 0
    if (!isNumber(user.axedurability)) user.axedurability = 0
    if (!isNumber(user.ayam)) user.ayam = 0
    if (!isNumber(user.ayamb)) user.ayamb = 0
    if (!isNumber(user.ayambakar)) user.ayambakar = 0
    if (!isNumber(user.ayamg)) user.ayamg = 0
    if (!isNumber(user.ayamgoreng)) user.ayamgoreng = 0
    if (!isNumber(user.babi)) user.babi = 0
    if (!isNumber(user.babihutan)) user.babihutan = 0
    if (!isNumber(user.babipanggang)) user.babipanggang = 0
    if (!isNumber(user.bandage)) user.bandage = 0
    if (!isNumber(user.bank)) user.bank = 0
    if (!isNumber(user.banteng)) user.banteng = 0
    if (!isNumber(user.batu)) user.batu = 0
    if (!isNumber(user.bawal)) user.bawal = 0
    if (!isNumber(user.bawalbakar)) user.bawalbakar = 0
    if (!isNumber(user.bayam)) user.bayam = 0
    if (!isNumber(user.berlian)) user.berlian = 10
    if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
    if (!isNumber(user.bibitapel)) user.bibitapel = 0
    if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
    if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
    if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
    if (!isNumber(user.botol)) user.botol = 0
    if (!isNumber(user.bow)) user.bow = 0
    if (!isNumber(user.bowdurability)) user.bowdurability = 0
    if (!isNumber(user.boxs)) user.boxs = 0
    if (!isNumber(user.brick)) user.brick = 0
    if (!isNumber(user.brokoli)) user.brokoli = 0
    if (!isNumber(user.buaya)) user.buaya = 0
    if (!isNumber(user.buntal)) user.buntal = 0
    if (!isNumber(user.call)) user.call = 0  
    if (!isNumber(user.cat)) user.cat = 0
    if (!isNumber(user.catexp)) user.catexp = 0
    if (!isNumber(user.catlastfeed)) user.catlastfeed = 0
    if (!isNumber(user.centaur)) user.centaur = 0
    if (!isNumber(user.centaurexp)) user.centaurexp = 0
    if (!isNumber(user.centaurlastclaim)) user.centaurlastclaim = 0
    if (!isNumber(user.centaurlastfeed)) user.centaurlastfeed = 0
    if (!isNumber(user.clay)) user.clay = 0
    if (!isNumber(user.coal)) user.coal = 0
    if (!isNumber(user.coin)) user.coin = 0
    if (!isNumber(user.common)) user.common = 0
    if (!isNumber(user.crystal)) user.crystal = 0
    if (!isNumber(user.cumi)) user.cumi = 0
    if (!isNumber(user.cupon)) user.cupon = 0
    if (!isNumber(user.diamond)) user.diamond = 0
    if (!isNumber(user.dog)) user.dog = 0
    if (!isNumber(user.dogexp)) user.dogexp = 0
    if (!isNumber(user.doglastfeed)) user.doglastfeed = 0
    if (!isNumber(user.dory)) user.dory = 0
    if (!isNumber(user.dragon)) user.dragon = 0
    if (!isNumber(user.dragonexp)) user.dragonexp = 0
    if (!isNumber(user.dragonlastfeed)) user.dragonlastfeed = 0
    if (!isNumber(user.emas)) user.emas = 0
    if (!isNumber(user.emerald)) user.emerald = 0
    if (!isNumber(user.enchant)) user.enchant = 0
    if (!isNumber(user.esteh)) user.esteh = 0
    if (!isNumber(user.exp)) user.exp = 0
    if (!isNumber(user.expg)) user.expg = 0
    if (!isNumber(user.exphero)) user.exphero = 0
    if (!isNumber(user.fishingrod)) user.fishingrod = 0
    if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
    if (!isNumber(user.fortress)) user.fortress = 0
    if (!isNumber(user.fox)) user.fox = 0
    if (!isNumber(user.foxexp)) user.foxexp = 0
    if (!isNumber(user.foxlastfeed)) user.foxlastfeed = 0
    if (!isNumber(user.fullatm)) user.fullatm = Infinity
    if (!isNumber(user.gadodado)) user.gadodado = 0
    if (!isNumber(user.gajah)) user.gajah = 0
    if (!isNumber(user.gamemines)) user.gamemines = false
    if (!isNumber(user.ganja)) user.ganja = 0
    if (!isNumber(user.gardenboxs)) user.gardenboxs = 0
    if (!isNumber(user.gems)) user.gems = 0
    if (!isNumber(user.glass)) user.glass = 0
    if (!isNumber(user.glimit)) user.glimit = 20
    if (!isNumber(user.glory)) user.glory = 0
    if (!isNumber(user.gold)) user.gold = 0
    if (!isNumber(user.griffin)) user.griffin = 0
    if (!isNumber(user.griffinexp)) user.griffinexp = 0
    if (!isNumber(user.griffinlastclaim)) user.griffinlastclaim = 0
    if (!isNumber(user.griffinlastfeed)) user.griffinlastfeed = 0
    if (!isNumber(user.gulai)) user.gulai = 0
    if (!isNumber(user.gurita)) user.gurita = 0
    if (!isNumber(user.harimau)) user.harimau = 0
    if (!isNumber(user.haus)) user.haus = 100
    if (!isNumber(user.healt)) user.healt = 100
    if (!isNumber(user.health)) user.health = 100
    if (!isNumber(user.healthmonster)) user.healthmonster = 0
    if (!isNumber(user.healtmonster)) user.healtmonster = 0
    if (!isNumber(user.hero)) user.hero = 1
    if (!isNumber(user.herolastclaim)) user.herolastclaim = 0
    if (!isNumber(user.hiu)) user.hiu = 0
    if (!isNumber(user.horse)) user.horse = 0
    if (!isNumber(user.horseexp)) user.horseexp = 0
    if (!isNumber(user.horselastfeed)) user.horselastfeed = 0
    if (!isNumber(user.ikan)) user.ikan = 0
    if (!isNumber(user.ikanbakar)) user.ikanbakar = 0
    if (!isNumber(user.intelligence)) user.intelligence = 0
    if (!isNumber(user.iron)) user.iron = 0
    if (!isNumber(user.jagung)) user.jagung = 0
    if (!isNumber(user.jagungbakar)) user.jagungbakar = 0
    if (!isNumber(user.jeruk)) user.jeruk = 0
    if (!isNumber(user.joinlimit)) user.joinlimit = 1
    if (!isNumber(user.joincount)) user.joincount = 1
    if (!isNumber(user.judilast)) user.judilast = 0
    if (!isNumber(user.kaleng)) user.kaleng = 0
    if (!isNumber(user.kambing)) user.kambing = 0
    if (!isNumber(user.kangkung)) user.kangkung = 0
    if (!isNumber(user.kapak)) user.kapak = 0
    if (!isNumber(user.kardus)) user.kardus = 0
    if (!isNumber(user.katana)) user.katana = 0
    if (!isNumber(user.katanadurability)) user.katanadurability = 0
    if (!isNumber(user.kayu)) user.kayu = 0
    if (!isNumber(user.kentang)) user.kentang = 0
    if (!isNumber(user.kentanggoreng)) user.kentanggoreng = 0
    if (!isNumber(user.kepiting)) user.kepiting = 0
    if (!isNumber(user.kepitingbakar)) user.kepitingbakar = 0
    if (!isNumber(user.kerbau)) user.kerbau = 0
    if (!isNumber(user.kerjadelapan)) user.kerjadelapan = 0
    if (!isNumber(user.kerjadelapanbelas)) user.kerjadelapanbelas = 0
    if (!isNumber(user.kerjadua)) user.kerjadua = 0
    if (!isNumber(user.kerjaduabelas)) user.kerjaduabelas = 0
    if (!isNumber(user.kerjaduadelapan)) user.kerjaduadelapan = 0
    if (!isNumber(user.kerjaduadua)) user.kerjaduadua = 0
    if (!isNumber(user.kerjaduaempat)) user.kerjaduaempat = 0
    if (!isNumber(user.kerjaduaenam)) user.kerjaduaenam = 0
    if (!isNumber(user.kerjadualima)) user.kerjadualima = 0
    if (!isNumber(user.kerjaduapuluh)) user.kerjaduapuluh = 0
    if (!isNumber(user.kerjaduasatu)) user.kerjaduasatu = 0
    if (!isNumber(user.kerjaduasembilan)) user.kerjaduasembilan = 0
    if (!isNumber(user.kerjaduatiga)) user.kerjaduatiga = 0
    if (!isNumber(user.kerjaduatujuh)) user.kerjaduatujuh = 0
    if (!isNumber(user.kerjaempat)) user.kerjaempat = 0
    if (!isNumber(user.kerjaempatbelas)) user.kerjaempatbelas = 0
    if (!isNumber(user.kerjaenam)) user.kerjaenam = 0
    if (!isNumber(user.kerjaenambelas)) user.kerjaenambelas = 0
    if (!isNumber(user.kerjalima)) user.kerjalima = 0
    if (!isNumber(user.kerjalimabelas)) user.kerjalimabelas = 0
    if (!isNumber(user.kerjasatu)) user.kerjasatu = 0
    if (!isNumber(user.kerjasebelas)) user.kerjasebelas = 0
    if (!isNumber(user.kerjasembilan)) user.kerjasembilan = 0
    if (!isNumber(user.kerjasembilanbelas)) user.kerjasembilanbelas = 0
    if (!isNumber(user.kerjasepuluh)) user.kerjasepuluh = 0
    if (!isNumber(user.kerjatiga)) user.kerjatiga = 0
    if (!isNumber(user.kerjatigabelas)) user.kerjatigabelas = 0
    if (!isNumber(user.kerjatigapuluh)) user.kerjatigapuluh = 0
    if (!isNumber(user.kerjatujuh)) user.kerjatujuh = 0
    if (!isNumber(user.kerjatujuhbelas)) user.kerjatujuhbelas = 0
    if (!isNumber(user.korbanngocok)) user.korbanngocok = 0
    if (!isNumber(user.kubis)) user.kubis = 0
    if (!isNumber(user.kucing)) user.kucing = 0
    if (!isNumber(user.kucinglastclaim)) user.kucinglastclaim = 0
    if (!isNumber(user.kuda)) user.kuda = 0
    if (!isNumber(user.kudalastclaim)) user.kudalastclaim = 0
    if (!isNumber(user.kyubi)) user.kyubi = 0
    if (!isNumber(user.kyubiexp)) user.kyubiexp = 0
    if (!isNumber(user.kyubilastclaim)) user.kyubilastclaim = 0
    if (!isNumber(user.kyubilastfeed)) user.kyubilastfeed = 0
    if (!isNumber(user.labu)) user.labu = 0
    if (!isNumber(user.laper)) user.laper = 100
    if (!isNumber(user.lastadventure)) user.lastadventure = 0
    if (!isNumber(user.lastbansos)) user.lastbansos = 0
    if (!isNumber(user.lastberbru)) user.lastberbru = 0
    if (!isNumber(user.lastberkebon)) user.lastberkebon = 0
    if (!isNumber(user.lastbunga)) user.lastbunga = 0
    if (!isNumber(user.lastbunuhi)) user.lastbunuhi = 0
    if (!isNumber(user.lastclaim)) user.lastclaim = 0
    if (!isNumber(user.lastclaim2)) user.lastclaim2 = 0  
    if (!isNumber(user.lastcode)) user.lastcode = 0
    if (!isNumber(user.lastcodereg)) user.lastcodereg = 0
    if (!isNumber(user.lastcrusade)) user.lastcrusade = 0
    if (!isNumber(user.lastdagang)) user.lastdagang = 0
    if (!isNumber(user.lastduel)) user.lastduel = 0
    if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
    if (!isNumber(user.lasteasy)) user.lasteasy = 0
    if (!isNumber(user.lastfight)) user.lastfight = 0
    if (!isNumber(user.lastfishing)) user.lastfishing = 0
    if (!isNumber(user.lastgift)) user.lastgift = 0
    if (!isNumber(user.lastgojek)) user.lastgojek = 0
    if (!isNumber(user.lastgrab)) user.lastgrab = 0
    if (!isNumber(user.lasthourly)) user.lasthourly = 0
    if (!isNumber(user.lasthunt)) user.lasthunt = 0
    if (!isNumber(user.lastIstigfar)) user.lastIstigfar = 0
    if (!isNumber(user.lastjb)) user.lastjb = 0
    if (!isNumber(user.lastkill)) user.lastkill = 0
    if (!isNumber(user.lastlink)) user.lastlink = 0
    if (!isNumber(user.lastlumber)) user.lastlumber = 0
    if (!isNumber(user.lastmancingeasy)) user.lastmancingeasy = 0
    if (!isNumber(user.lastmancingextreme)) user.lastmancingextreme = 0
    if (!isNumber(user.lastmancinghard)) user.lastmancinghard = 0
    if (!isNumber(user.lastmancingnormal)) user.lastmancingnormal = 0
    if (!isNumber(user.lastmining)) user.lastmining = 0
    if (!isNumber(user.lastmisi)) user.lastmisi = 0
    if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
    if (!isNumber(user.lastmulung)) user.lastmulung = 0
    if (!isNumber(user.lastnambang)) user.lastnambang = 0
    if (!isNumber(user.lastnebang)) user.lastnebang = 0
    if (!isNumber(user.lastngocok)) user.lastngocok = 0
    if (!isNumber(user.lastngojek)) user.lastngojek = 0
    if (!isNumber(user.lastnyampah)) user.lastnyampah = 0
    if (!isNumber(user.lastopen)) user.lastopen = 0
    if (!isNumber(user.lastowner)) user.lastowner = 0
    if (!isNumber(user.lastpekerjaan)) user.lastpekerjaan = 0
    if (!isNumber(user.lastpotionclaim)) user.lastpotionclaim = 0
    if (!isNumber(user.lastrampok)) user.lastrampok = 0
    if (!isNumber(user.lastramuanclaim)) user.lastramuanclaim = 0
    if (!isNumber(user.lastrob)) user.lastrob = 0
    if (!isNumber(user.lastroket)) user.lastroket = 0
    if (!isNumber(user.lastsda)) user.lastsda = 0
    if (!isNumber(user.lastseen)) user.lastseen = 0
    if (!isNumber(user.lastSetStatus)) user.lastSetStatus = 0
    if (!isNumber(user.lastsironclaim)) user.lastsironclaim = 0
    if (!isNumber(user.lastsmancingclaim)) user.lastsmancingclaim = 0
    if (!isNumber(user.laststringclaim)) user.laststringclaim = 0
    if (!isNumber(user.lastswordclaim)) user.lastswordclaim = 0
    if (!isNumber(user.lastturu)) user.lastturu = 0
    if (!isNumber(user.lastwar)) user.lastwar = 0
    if (!isNumber(user.lastwarpet)) user.lastwarpet = 0
    if (!isNumber(user.lastweaponclaim)) user.lastweaponclaim = 0
    if (!isNumber(user.lastweekly)) user.lastweekly = 0
    if (!isNumber(user.lastwork)) user.lastwork = 0
    if (!isNumber(user.legendary)) user.legendary = 0
    if (!isNumber(user.lele)) user.lele = 0
    if (!isNumber(user.leleb)) user.leleb = 0
    if (!isNumber(user.lelebakar)) user.lelebakar = 0
    if (!isNumber(user.leleg)) user.leleg = 0
    if (!isNumber(user.level)) user.level = 0
    if (!isNumber(user.limit)) user.limit = 25
    if (!isNumber(user.limitjoinfree)) user.limitjoinfree = 1
    if (!isNumber(user.lion)) user.lion = 0
    if (!isNumber(user.lionexp)) user.lionexp = 0
    if (!isNumber(user.lionlastfeed)) user.lionlastfeed = 0
    if (!isNumber(user.lobster)) user.lobster = 0
    if (!isNumber(user.lumba)) user.lumba = 0
    if (!isNumber(user.magicwand)) user.magicwand = 0
    if (!isNumber(user.magicwanddurability)) user.magicwanddurability = 0
    if (!isNumber(user.makanancentaur)) user.makanancentaur = 0
    if (!isNumber(user.makanangriffin)) user.makanangriffin = 0
    if (!isNumber(user.makanankyubi)) user.makanankyubi = 0
    if (!isNumber(user.makanannaga)) user.makanannaga = 0
    if (!isNumber(user.makananpet)) user.makananpet = 0
    if (!isNumber(user.makananphonix)) user.makananphonix = 0
    if (!isNumber(user.makananserigala)) user.makananserigala = 0
    if (!isNumber(user.mana)) user.mana = 0
    if (!isNumber(user.mangga)) user.mangga = 0
    if (!isNumber(user.money)) user.money = 0
    if (!isNumber(user.monyet)) user.monyet = 0
    if (!isNumber(user.mythic)) user.mythic = 0
    if (!isNumber(user.naga)) user.naga = 0
    if (!isNumber(user.nagalastclaim)) user.nagalastclaim = 0
    if (!isNumber(user.net)) user.net = 0
    if (!isNumber(user.nila)) user.nila = 0
    if (!isNumber(user.nilabakar)) user.nilabakar = 0
    if (!isNumber(user.ojekk)) user.ojekk = 0
    if (!isNumber(user.oporayam)) user.oporayam = 0
    if (!isNumber(user.orca)) user.orca = 0
    if (!isNumber(user.pancing)) user.pancing = 0
    if (!isNumber(user.pancingan)) user.pancingan = 1
    if (!isNumber(user.panda)) user.panda = 0
    if (!isNumber(user.paus)) user.paus = 0
    if (!isNumber(user.pausbakar)) user.pausbakar = 0
    if (!isNumber(user.pc)) user.pc = 0
    if (!isNumber(user.pepesikan)) user.pepesikan = 0
    if (!isNumber(user.pertambangan)) user.pertambangan = 0
    if (!isNumber(user.pertanian)) user.pertanian = 0
    if (!isNumber(user.pet)) user.pet = 0
    if (!isNumber(user.petFood)) user.petFood = 0
    if (!isNumber(user.phonix)) user.phonix = 0
    if (!isNumber(user.phonixexp)) user.phonixexp = 0
    if (!isNumber(user.phonixlastclaim)) user.phonixlastclaim = 0
    if (!isNumber(user.phonixlastfeed)) user.phonixlastfeed = 0
    if (!isNumber(user.pickaxe)) user.pickaxe = 0
    if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
    if (!isNumber(user.pillhero)) user.pillhero= 0
    if (!isNumber(user.pisang)) user.pisang = 0
    if (!isNumber(user.pointxp)) user.pointxp = 0
    if (!isNumber(user.potion)) user.potion = 0
    if (!isNumber(user.psenjata)) user.psenjata = 0
    if (!isNumber(user.psepick)) user.psepick = 0
    if (!isNumber(user.ramuan)) user.ramuan = 0
    if (!isNumber(user.ramuancentaurlast)) user.ramuancentaurlast = 0
    if (!isNumber(user.ramuangriffinlast)) user.ramuangriffinlast = 0
    if (!isNumber(user.ramuanherolast)) user.ramuanherolast = 0
    if (!isNumber(user.ramuankucinglast)) user.ramuankucinglast = 0
    if (!isNumber(user.ramuankudalast)) user.ramuankudalast = 0
    if (!isNumber(user.ramuankyubilast)) user.ramuankyubilast = 0
    if (!isNumber(user.ramuannagalast)) user.ramuannagalast = 0
    if (!isNumber(user.ramuanphonixlast)) user.ramuanphonixlast = 0
    if (!isNumber(user.ramuanrubahlast)) user.ramuanrubahlast = 0
    if (!isNumber(user.ramuanserigalalast)) user.ramuanserigalalast = 0
    if (!isNumber(user.reglast)) user.reglast = 0
    if (!isNumber(user.rendang)) user.rendang = 0
    if (!isNumber(user.rhinoceros)) user.rhinoceros = 0
    if (!isNumber(user.rhinocerosexp)) user.rhinocerosexp = 0
    if (!isNumber(user.rhinoceroslastfeed)) user.rhinoceroslastfeed = 0
    if (!isNumber(user.robo)) user.robo = 0
    if (!isNumber(user.roboxp)) user.roboxp = 0
    if (!isNumber(user.rock)) user.rock = 0
    if (!isNumber(user.roket)) user.roket = 0
    if (!isNumber(user.roti)) user.roti = 0
    if (!isNumber(user.rubah)) user.rubah = 0
    if (!isNumber(user.rubahlastclaim)) user.rubahlastclaim = 0
    if (!isNumber(user.rumahsakit)) user.rumahsakit = 0
    if (!isNumber(user.skata)) user.skata = 0
    if (!isNumber(user.sampah)) user.sampah = 0
    if (!isNumber(user.sand)) user.sand = 0
    if (!isNumber(user.sapi)) user.sapi = 0
    if (!isNumber(user.sapir)) user.sapir = 0
    if (!isNumber(user.seedbayam)) user.seedbayam = 0
    if (!isNumber(user.seedbrokoli)) user.seedbrokoli = 0
    if (!isNumber(user.seedjagung)) user.seedjagung = 0
    if (!isNumber(user.seedkangkung)) user.seedkangkung = 0
    if (!isNumber(user.seedkentang)) user.seedkentang = 0
    if (!isNumber(user.seedkubis)) user.seedkubis = 0
    if (!isNumber(user.seedlabu)) user.seedlabu = 0
    if (!isNumber(user.seedtomat)) user.seedtomat = 0
    if (!isNumber(user.seedwortel)) user.seedwortel = 0
    if (!isNumber(user.serigala)) user.serigala = 0
    if (!isNumber(user.serigalalastclaim)) user.serigalalastclaim = 0
    if (!isNumber(user.shield)) user.shield = false
    if (!isNumber(user.skillexp)) user.skillexp = 0
    if (!isNumber(user.snlast)) user.snlast = 0
    if (!isNumber(user.soda)) user.soda = 0
    if (!isNumber(user.sop)) user.sop = 0
    if (!isNumber(user.spammer)) user.spammer = 0
    if (!isNumber(user.spinlast)) user.spinlast = 0
    if (!isNumber(user.ssapi)) user.ssapi = 0
    if (!isNumber(user.stamina)) user.stamina = 100
    if (!isNumber(user.steak)) user.steak = 0
    if (!isNumber(user.stick)) user.stick = 0
    if (!isNumber(user.strength)) user.strength = 0
    if (!isNumber(user.string)) user.string = 0
    if (!isNumber(user.superior)) user.superior = 0
    if (!isNumber(user.suplabu)) user.suplabu = 0
    if (!isNumber(user.sushi)) user.sushi = 0
    if (!isNumber(user.sword)) user.sword = 0
    if (!isNumber(user.sworddurability)) user.sworddurability = 0
    if (!isNumber(user.tigame)) user.tigame = 50
    if (!isNumber(user.tiketcoin)) user.tiketcoin = 0
    if (!isNumber(user.title)) user.title = 0
    if (!isNumber(user.tomat)) user.tomat = 0
    if (!isNumber(user.tprem)) user.tprem = 0
    if (!isNumber(user.trash)) user.trash = 0
    if (!isNumber(user.trofi)) user.trofi = 0
    if (!isNumber(user.troopcamp)) user.troopcamp = 0
    if (!isNumber(user.tumiskangkung)) user.tumiskangkung = 0
    if (!isNumber(user.udang)) user.udang = 0
    if (!isNumber(user.udangbakar)) user.udangbakar = 0
    if (!isNumber(user.umpan)) user.umpan = 0
    if (!isNumber(user.uncommon)) user.uncommon = 0
    if (!isNumber(user.unreglast)) user.unreglast = 0
    if (!isNumber(user.upgrader)) user.upgrader = 0
    if (!isNumber(user.vodka)) user.vodka = 0
    if (!isNumber(user.wallet)) user.wallet = 0
    if (!isNumber(user.warn)) user.warn = 0
    if (!isNumber(user.warning)) user.warning = 0
    if (!isNumber(user.weapon)) user.weapon = 0
    if (!isNumber(user.weapondurability)) user.weapondurability = 0
    if (!isNumber(user.wolf)) user.wolf = 0
    if (!isNumber(user.wolfexp)) user.wolfexp = 0
    if (!isNumber(user.wolflastfeed)) user.wolflastfeed = 0
    if (!isNumber(user.wood)) user.wood = 0
    if (!isNumber(user.wortel)) user.wortel = 0
    
    if (!user.lbars) user.lbars = '[▒▒▒▒▒▒▒▒▒]'
    if (!user.job) user.job = 'Pengangguran'
    if (!user.premium) user.premium = false
    if (!user.premium) user.premiumTime = 0
    if (!user.rtrofi) user.rtrofi = 'Perunggu'

} else
    db.data.users[m.sender] = {
        joincount: 1,
        skata: 0,
        usebot: 0,
        otp: 0,
        lastclaim2: 0,
        lastnyampah: 0,
        lastowner: 0,
        limitspam: 0,
        call: 0,
        area: 0,
        email: '',
        label: '',
        lastjob: 0,
        lastkerja: 0,
        ojek: false,
        pedagang: false,
        dokter: false,
        petani: false,
        montir: false,
        kuli: false,
        polisi: false,
        created: false,
        bannedDate: 0,
                    afk: -1,
                    afkReason: '',
                    age: -1,
                    agility: 16,
                    anakanjing: 0,
                    anakcentaur: 0,
                    anakgriffin: 0,
                    anakkucing: 0,
                    anakkuda: 0,
                    anakkyubi: 0,
                    anaknaga: 0,
                    anakpancingan: 0,
                    anakphonix: 0,
                    anakrubah: 0,
                    anakserigala: 0,
                    anggur: 0,
                    anjing: 0,
                    anjinglastclaim: 0,
                    antispam: 0,
                    antispamlastclaim: 0,
                    apel: 0,
                    aqua: 0,
                    arc: 0,
                    arcdurability: 0,
                    arlok: 0,
                    armor: 0,
                    armordurability: 0,
                    armormonster: 0,
                    as: 0,
                    atm: 0,
                    autolevelup: false,
                    axe: 0,
                    axedurability: 0,
                    ayam: 0,
                    ayamb: 0,
                    ayambakar: 0,
                    ayamg: 0,
                    ayamgoreng: 0,
                    babi: 0,
                    babihutan: 0,
                    babipanggang: 0,
                    bandage: 0,
                    bank: 0,
                    banned: false,
                    BannedReason: '',
                    Banneduser: false,
                    banteng: 0,
                    batu: 0,
                    bawal: 0,
                    bawalbakar: 0,
                    bayam: 0,
                    berlian: 100,
                    bibitanggur: 0,
                    bibitapel: 0,
                    bibitjeruk: 0,
                    bibitmangga: 0,
                    bibitpisang: 0,
                    botol: 0,
                    bow: 0,
                    bowdurability: 0,
                    boxs: 0,
                    brick: 0,
                    brokoli: 0,
                    buaya: 0,
                    buntal: 0,
                    cat: 0,
                    catlastfeed: 0,
                    catngexp: 0,
                    centaur: 0,
                    centaurexp: 0,
                    centaurlastclaim: 0,
                    centaurlastfeed: 0,
                    clay: 0,
                    coal: 0,
                    coin: 0,
                    common: 0,
                    crystal: 0,
                    cumi: 0,
                    cupon: 0,
                    diamond: 0,
                    dog: 0,
                    dogexp: 0,
                    doglastfeed: 0,
                    dory: 0,
                    dragon: 0,
                    dragonexp: 0,
                    dragonlastfeed: 0,
                    emas: 0,
                    emerald: 0,
                    esteh: 0,
                    exp: 0,
                    expg: 0,
                    exphero: 0,
                    expired: 0,
                    fishingrod: 0,
                    fishingroddurability: 0,
                    fortress: 0,
                    fox: 0,
                    foxexp: 0,
                    foxlastfeed: 0,
                    fullatm: Infinity,
                    gadodado: 0,
                    gajah: 0,
                    gamemines: false,
                    ganja: 0,
                    gardenboxs: 0,
                    gems: 0,
                    glass: 0,
                    gold: 0,
                    griffin: 0,
                    griffinexp: 0,
                    griffinlastclaim: 0,
                    griffinlastfeed: 0,
                    gulai: 0,
                    gurita: 0,
                    harimau: 0,
                    haus: 100,
                    healt: 100,
                    health: 100,
                    healtmonster: 100,
                    hero: 1,
                    herolastclaim: 0,
                    hiu: 0,
                    horse: 0,
                    horseexp: 0,
                    horselastfeed: 0,
                    ikan: 0,
                    ikanbakar: 0,
                    intelligence: 10,
                    iron: 0,
                    jadibot: false,
                    jagung: 0,
                    jagungbakar: 0,
                    jeruk: 0,
                    job: 'Pengangguran',
                    joinlimit: 1,
                    judilast: 0,
                    kaleng: 0,
                    kambing: 0,
                    kangkung: 0,
                    kapak: 0,
                    kardus: 0,
                    katana: 0,
                    katanadurability: 0,
                    kayu: 0,
                    kentang: 0,
                    kentanggoreng: 0,
                    kepiting: 0,
                    kepitingbakar: 0,
                    kerbau: 0,
                    kerjadelapan: 0,
                    kerjadelapanbelas: 0,
                    kerjadua: 0,
                    kerjaduabelas: 0,
                    kerjaduadelapan: 0,
                    kerjaduadua: 0,
                    kerjaduaempat: 0,
                    kerjaduaenam: 0,
                    kerjadualima: 0,
                    kerjaduapuluh: 0,
                    kerjaduasatu: 0,
                    kerjaduasembilan: 0,
                    kerjaduatiga: 0,
                    kerjaduatujuh: 0,
                    kerjaempat: 0,
                    kerjaempatbelas: 0,
                    kerjaenam: 0,
                    kerjaenambelas: 0,
                    kerjalima: 0,
                    kerjalimabelas: 0,
                    kerjasatu: 0,
                    kerjasebelas: 0,
                    kerjasembilan: 0,
                    kerjasembilanbelas: 0,
                    kerjasepuluh: 0,
                    kerjatiga: 0,
                    kerjatigabelas: 0,
                    kerjatigapuluh: 0,
                    kerjatujuh: 0,
                    kerjatujuhbelas: 0,
                    korbanngocok: 0,
                    kubis: 0,
                    kucing: 0,
                    kucinglastclaim: 0,
                    kuda: 0,
                    kudalastclaim: 0,
                    kumba: 0,
                    kyubi: 0,
                    kyubilastclaim: 0,
                    labu: 0,
                    laper: 100,
                    lastadventure: 0,
                    lastberbru: 0,
                    lastberkebon: 0,
                    lastbunga: 0,
                    lastbunuhi: 0,
                    lastclaim: 0,
                    lastcode: 0,
                    lastcrusade: 0,
                    lastdagang: 0,
                    lastduel: 0,
                    lastdungeon: 0,
                    lasteasy: 0,
                    lastfight: 0,
                    lastfishing: 0,
                    lastgojek: 0,
                    lastgrab: 0,
                    lasthourly: 0,
                    lasthunt: 0,
                    lastjb: 0,
                    lastkill: 0,
                    lastlink: 0,
                    lastlumber: 0,
                    lastmancingeasy: 0,
                    lastmancingextreme: 0,
                    lastmancinghard: 0,
                    lastmancingnormal: 0,
                    lastmining: 0,
                    lastmisi: 0,
                    lastmonthly: 0,
                    lastmulung: 0,
                    lastnambang: 0,
                    lastnebang: 0,
                    lastngocok: 0,
                    lastngojek: 0,
                    lastopen: 0,
                    lastpekerjaan: 0,
                    lastpotionclaim: 0,
                    lastramuanclaim: 0,
                    lastrob: 0,
                    lastroket: 0,
                    lastseen: 0,
                    lastSetStatus: 0,
                    lastsironclaim: 0,
                    lastsmancingclaim: 0,
                    laststringclaim: 0,
                    lastswordclaim: 0,
                    lastturu: 0,
                    lastwarpet: 0,
                    lastweaponclaim: 0,
                    lastweekly: 0,
                    lastwork: 0,
                    lbars: '[▒▒▒▒▒▒▒▒▒]',
                    legendary: 0,
                    lele: 0,
                    leleb: 0,
                    lelebakar: 0,
                    leleg: 0,
                    level: 0,
                    limit: 25,
                    limitjoinfree: 1,
                    lion: 0,
                    lionexp: 0,
                    lionlastfeed: 0,
                    lobster: 0,
                    lumba: 0,
                    language: m.sender.startsWith('62') ? 'id' : 'en',
                    languageSimi: m.sender.startsWith('62') ? 'id' : 'en', 
                    languageCountry: m.sender.startsWith('62') ? 'Indonesia' : 'English',
                    magicwand: 0,
                    magicwanddurability: 0,
                    makanan: 0,
                    makanancentaur: 0,
                    makanangriffin: 0,
                    makanankyubi: 0,
                    makanannaga: 0,
                    makananpet: 0,
                    makananphonix: 0,
                    makananserigala: 0,
                    mana: 20,
                    mangga: 0,
                    misi: '',
                    money: 0,
                    monyet: 0,
                    mythic: 0,
                    nobot: 0,
                    nyimak: false,
                    naga: 0,
                    nagalastclaim: 0,
                    name: m.name,
                    net: 0,
                    nila: 0,
                    nilabakar: 0,
                    catatan: '',
                    ojekk: 0,
                    oporayam: 0,
                    orca: 0,
                    pancingan: 1,
                    panda: 0,
                    pasangan: '',
                    paus: 0,
                    pausbakar: 0,
                    pc: 0,
                    pepesikan: 0,
                    pet: 0,
                    phonix: 0,
                    phonixexp: 0,
                    phonixlastclaim: 0,
                    phonixlastfeed: 0,
                    pickaxe: 0,
                    pickaxedurability: 0,
                    pillhero: 0,
                    pisang: 0,
                    pointxp: 0,
                    potion: 10,
                    premium: false,
                    premiumTime: 0,
                    ramuan: 0,
                    ramuancentaurlast: 0,
                    ramuangriffinlast: 0,
                    ramuanherolast: 0,
                    ramuankucinglast: 0,
                    ramuankudalast: 0,
                    ramuankyubilast: 0,
                    ramuannagalast: 0,
                    ramuanphonixlast: 0,
                    ramuanrubahlast: 0,
                    ramuanserigalalast: 0,
                    registered: false,
                    reglast: 0,
                    regTime: -1,
                    rendang: 0,
                    rhinoceros: 0,
                    rhinocerosexp: 0,
                    rhinoceroslastfeed: 0,
                    robo: 0,
                    roboxp: 0,
                    rock: 0,
                    roket: 0,
                    role: 'Beginner',
                    roti: 0,
                    rtrofi: 'perunggu',
                    rubah: 0,
                    rubahlastclaim: 0,
                    rumahsakit: 0,
                    sampah: 0,
                    sand: 0,
                    sapi: 0,
                    sapir: 0,
                    seedbayam: 0,
                    seedbrokoli: 0,
                    seedjagung: 0,
                    seedkangkung: 0,
                    seedkentang: 0,
                    seedkubis: 0,
                    seedlabu: 0,
                    seedtomat: 0,
                    seedwortel: 0,
                    semangka: 0,
                    serigala: 0,
                    serigalalastclaim: 0,
                    sewa: false,
                    shield: 0,
                    skill: '',
                    skillexp: 0,
                    snlast: 0,
                    soda: 0,
                    sop: 0,
                    spammer: 0,
                    spinlast: 0,
                    ssapi: 0,
                    stamina: 100,
                    steak: 0,
                    stick: 0,
                    strength: 30,
                    string: 0,
                    stroberi: 0,
                    superior: 0,
                    suplabu: 0,
                    sushi: 0,
                    sword: 0,
                    sworddurability: 0,
                    timeBot: 0,
                    tigame: 50,
                    tiketcoin: 0,
                    title: '',
                    tomat: 0,
                    tprem: 0,
                    trash: 0,
                    trofi: 0,
                    troopcamp: 0,
                    tumiskangkung: 0,
                    udang: 0,
                    udangbakar: 0,
                    umpan: 0,
                    uncommon: 0,
                    unreglast: 0,
                    upgrader: 0,
                    vodka: 0,
                    wallet: 0,
                    warn: 0,
                    warning: 0,
                    weapon: 0,
                    weapondurability: 0,
                    wolf: 0,
                    wolfexp: 0,
                    wolflastfeed: 0,
                    wood: 0,
                    wortel: 0,    
                }
            let chat = db.data.chats[m.chat]
            if (typeof chat !== 'object') db.data.chats[m.chat] = {}
            if (chat) {
                if (!('name' in chat)) chat.name = await this.getName(m.chat)
                if (!('closeGroup' in chat)) chat.closeGroup = false
                if (!('openGroup' in chat)) chat.openGroup = false

                if (!('mute' in chat)) chat.mute = true 
                if (!('download' in chat)) chat.download = false 

                if (!('mature' in chat)) chat.mature = false
                if (!('game' in chat)) chat.game = false
                if (!('clear' in chat)) chat.clear = true
                if (!isNumber(chat.cleartime)) chat.clearTime = 0 
                if (!isNumber(chat.closeTime)) chat.closeTime = 0.0
                if (!isNumber(chat.openTime)) chat.openTime = 0.6
                if (!isNumber(chat.admin)) chat.admin = 0
                if (!isNumber(chat.onlyNumber)) chat.onlyNumber = 62

                if (!('antiBadword' in chat)) chat.antiBadword = true
                if (!('antivirus' in chat)) chat.antitroli = true
                if (!('antiDelete' in chat)) chat.antiDelete = true
                if (!('antiLink' in chat)) chat.antiLink = false
                if (!('antiSticker' in chat)) chat.antiSticker = false
                if (!('antiToxic' in chat)) chat.antiToxic = true
                if (!('antispam' in chat)) chat.antispam = true
                if (!('anticall' in chat)) chat.anticall = true
                
                if (!('antibule' in chat)) chat.antibule = false
                if (!('antiVirtex' in chat)) chat.antiVirtex = true
                if (!('autoPresence' in chat)) chat.autoPresence = false
                if (!('autodelvn' in chat)) chat.autodelvn = true
                if (!('antiSatir' in chat)) chat.antiSatir = true
                if (!('antiLinkTik' in chat)) chat.antiLinkTik = false
                if (!('antiLinkYt' in chat)) chat.antiLinkYt = false
                if (!('antiLinkTel' in chat)) chat.antiLinkTel = false
                if (!('antiLinkFb' in chat)) chat.antiLinkFb = false
                if (!('antiLinkIg' in chat)) chat.antiLinkIg = false
                if (!('antiLinkWa' in chat)) chat.antiLinkWa = false
                if (!('antiLinkHttp' in chat)) chat.antiLinkHttp = false
                if (!('autoSticker' in chat)) chat.autoSticker = true
                if (!('autoJoin' in chat)) chat.autoJoin = false
                if (!('autoVn' in chat)) chat.autoVn = true
                if (!('detect' in chat)) chat.detect = true
                if (!('delete' in chat)) chat.delete = true
                if (!('getmsg' in chat)) chat.getmsg = true
                if (!('isBanned' in chat)) chat.isBanned = false
                if (!('lastAnime' in chat)) chat.lastAnime = false
                if (!('latestNews' in chat)) chat.latestNews = false
                if (!('nsfw' in chat)) chat.nsfw = false
                if (!('only' in chat)) chat.only = false
                if (!isNumber(chat.nOnly)) chat.nOnly = 62
                if (!('premium' in chat)) chat.premium = false
                if (!('premiumTime' in chat)) chat.premiumTime = false
                if (!('premnsfw' in chat)) chat.premnsfw = false
                if (!('rpg' in chat)) chat.delete = false
                if (!('sBye' in chat)) chat.sBye = ''
                if (!('sDemote' in chat)) chat.sDemote = ''
                if (!('simi' in chat)) chat.simi = false
                if (!('sPromote' in chat)) chat.sPromote = ''
                if (!('stiker' in chat)) chat.stiker = false
                if (!('sWelcome' in chat)) chat.sWelcome = ''
                if (!('useDocument' in chat)) chat.useDocument = false
                if (!('updateAnime' in chat)) chat.updateAnime = false
                if (!('updateAnimeNews' in chat)) chat.updateAnimeNews = false
                if (!('viewonce' in chat)) chat.viewonce = false
                if (!('viewOnce' in chat)) chat.viewOnce = false
                if (!('welcome' in chat)) chat.welcome = false
                if (!isNumber(chat.expired)) chat.expired = 0
            } else db.data.chats[m.chat] = {
                name: await this.getName(m.chat),
                closeGroup: false,
                openGroup: false,
                antiBadword: true,
                antivirus: true,
                mature: false,
                game: false,
                clear: true,
                closeTime: 0,
                openTime: 6,
                clearTime: 0,
                onlyNumber: 62,

                antiDelete: true,
                antiLink: false,
                antiSticker: false,
                antiToxic: true,
                antispam: true,
                anticall: true, 
                antibule: false, 
                antiSatir: true, 
                antiVirtex: true,
                autoPresence: false,   
                autodelvn: true,
                antiLinkTik: false,
                antiLinkYt: false,
                antiLinkTel: false,
                antiLinkFb: false,
                antiLinkIg: false,
                antiLinkWa: false,
                antiLinkHttp: false,
                autoSticker: true,
                autoJoin: false,
                autoVn: true,
                detect: true,
                delete: true,
                expired: 0,
                getmsg: true,
                isBanned: false,
                lastAnime: false,
                latestNews: false,
                nsfw: false,
                only: false, 
                nOnly: 62,
                premium: false,
                premiumTime: false,
                premnsfw: false,
                rpg: false,
                sBye: '',
                sDemote: '',
                simi: false,
                sPromote: '',
                stiker: false,
                sWelcome: '',
                useDocument: false,
                updateAnime: false,
                updateAnimeNews: false,
        viewOnce: false,
        viewonce: false,
        welcome: false,
    }
    let settings = db.data.settings[this.user.jid]
    if (typeof settings !== 'object') db.data.settings[this.user.jid] = {}
    if (settings) {
        if (!('anonymous' in settings)) settings.anonymous = true
        if (!('autoreadsw' in settings)) settings.autoreadsw = false
        if (!('autotyping' in settings)) settings.autotyping = false
        if (!('autocleartmp' in settings)) settings.autocleartmp = true
        if (!('autodownload' in settings)) settings.autodownload = true
        if (!('developerMode' in settings)) settings.developerMode = true
        if (!('delete' in settings)) settings.delete = false
        if (!('antidelete' in settings)) settings.antidelete = true
        if (!('lastseen' in settings)) settings.lastseen = false
        if (!('mature' in settings)) settings.mature = true
        if (!('statusUpdate' in settings)) settings.statusUpdate = true
        if (!('antivirus' in settings)) settings.antivirus = true
        if (!('publicjoin' in settings)) settings.publicjoin = true
        if (!('game' in settings)) settings.game = true
        if (!('rpg' in settings)) settings.game = false
        if (!('getmsg' in settings)) settings.getmsg = true

        if (!'autoreset' in settings) settings.autoreset = true
        if (!isNumber(settings.autoresetTime)) settings.autoresetTime = (new Date() * 1) + 3600000 * 720

        if (!('anon' in settings)) settings.anon = true
        if (!('anticall' in settings)) settings.anticall = true
        if (!('antispam' in settings)) settings.antispam = true
        if (!('antitroli' in settings)) settings.antitroli = false
        if (!('autoread' in settings)) settings.autoread = false
        if (!('autorestart' in settings)) settings.autorestart = true
        if (!('backup' in settings)) settings.backup = false
        if (!isNumber(settings.backupDB)) settings.backupDB = 0
        if (!('clearmedia' in settings)) settings.clearmedia = true
        if (!('groupOnly' in settings)) settings.groupOnly = false
        if (!('jadibot' in settings)) settings.jadibot = true
        if (!('modewar' in settings)) settings.modewar = false
        if (!('modeoff' in settings)) settings.modeoff = false
        if (!('nsfw' in settings)) settings.nsfw = false
        if (!('self' in settings)) settings.self = false
        if (!('restrict' in settings)) settings.restrict = false
        if (!('restartDB' in settings)) settings.restartDB = 0
        if (!('readsw' in settings)) settings.readsw = false
        if (!('readpc' in settings)) settings.readpc = false
        if (!('readgc' in settings)) settings.readgc = false
        if (!('status' in settings)) settings.status = 0
        if (!isNumber(settings.status)) settings.status = 0
    } else db.data.settings[this.user.jid] = {
        anonymous: true,
        autoreadsw: false, 
        autotyping: false, 
        autocleartmp: true, 
        autodownload: true, 
        developerMode: true, 
        delete: false,
        antidelete: true,
        lastseen: false,
        mature: true,
        statusUpdate: true,
        antivirus: true,
        publicjoin: true,
        game: false, 
        rpg: false, 
        getmsg: true,

        autoreset: true,
        autoresetTime: (new Date() * 1) + 3600000 * 720,

        anon: true,
        anticall: true,
        antispam: true,
        antitroli: false,
        autoread: false,
        autorestart: true,
        backup: false,
        backupDB: 0,
        clearmedia: true,
        groupOnly: false,
        jadibot: true, 
        modewar: false,
        modeoff: false,
        onsfw: false,
        restrict: false,
        readsw: false,
        readpc: false,
        readgc: false,
        restartDB: 0,
        status: 0,
        self: false
    }
} catch (e) {
    console.error(e)
}
const isROwner = [this.decodeJid(this.user.id), ...set.owner.map(([number]) => number)].map(v => v?.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isOwner = isROwner || m.fromMe
if (!isOwner && db.data.settings.self) return // Saat mode self diaktifkan hanya owner yang dapat menggunakannya
const isMods = isOwner || set.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPrems = isROwner || set.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
//let isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
if (!isPrems && !m.isGroup && db.data.settings.groupOnly) return
const isBans = db.data.users[m.sender].banned
const isCreated = db.data.users[m.sender].created
const ownerJadibot = [...set.ownerjbot].map(v => v?.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(this.user.jid)
opts['self'] = opts['self'] ? opts['self'] : opts['self'] == false ? opts['self'] : ownerJadibot

if (opts['nyimak'])
    return
if (!m.fromMe && opts['self'])
    return
if (opts['pconly'] && m.chat.endsWith('g.us'))
    return
if (opts['gconly'] && !m.chat.endsWith('g.us'))
    return
if (opts['swonly'] && m.chat !== 'status@broadcast')
    return
if (typeof m.text !== 'string')
     m.text = ''
if (opts['queque'] && m.text && !m.fromMe && !(isMods || isPrems)) {
const id = m.id
    this.msgqueque.add(id)
    await this.msgqueque.waitQueue(id)
}

if (m.isBaileys) return 
if (m.chat.endsWith('broadcast') || m.key.remoteJid.endsWith('broadcast')) return // Supaya tidak merespon di status
//let blockList = await conn.fetchBlocklist() //error
//if (blockList?.includes(m.sender)) return
m.exp += Math.ceil(Math.random() * 10)

let usedPrefix
let _user = db.data?.users?.[m.sender]

const groupMetadata = (m.isGroup ? await store.fetchGroupMetadata(m.chat, this.groupMetadata) : {}) || {}
let ownerGroup = (m.isGroup ? groupMetadata.owner : []) || []
const participants = (m.isGroup ? groupMetadata.participants : []) || []
const user = (m.isGroup ? participants.find(u => this.decodeJid(u.id) === m.sender) : {}) || {} // User Data
const bot = (m.isGroup ? participants.find(u => this.decodeJid(u.id) == this.user.jid) : {}) || {} // Your Data
const isRAdmin = user?.admin == 'superadmin' || false
const isAdmin = isRAdmin || user?.admin == 'admin' || false // Is User Admin?
const isBotAdmin = bot?.admin || false // Are you Admin?
const expiration = m.message?.extendedTextMessage?.contextInfo?.expiration

const ___dirname = join(dirname(fileURLToPath(import.meta.url)), './plugins')
        for (let name in plugins) {
            let plugin = plugins[name]
            if (!plugin)
                continue
            if (plugin.disabled)
                continue
            const __filename = join(___dirname, name)
            if (typeof plugin.all === 'function') {
                try {
                    await plugin.all.call(this, m, {
                        chatUpdate,
                        __dirname: ___dirname,
                        __filename
                    })
                } catch (e) {
                    // if (typeof e === 'string') continue
                    console.error(e)
                    for (let [jid] of set.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await this.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                        m.reply(`*🗂️ Plugin:* ${name}\n*👤 Sender:* ${m.sender}\n*💬 Chat:* ${m.chat}\n*💻 Command:* ${m.text}\n\n\`\`\`${format(e)}\`\`\``.trim(), data.jid)
                    }
                }
            }
            
            if (!opts['restrict'])
                if (plugin.tags && plugin.tags.includes('admin')) {
                    // set.dfail('restrict', m, this)
                    continue
                }
                
            const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
            let _prefix = plugin.customPrefix ? plugin.customPrefix : this.prefix ? this.prefix : prefix
            let match = (_prefix instanceof RegExp ? // RegExp Mode?
                [[_prefix.exec(m.text), _prefix]] :
                Array.isArray(_prefix) ? // Array?
                    _prefix.map(p => {
                        let re = p instanceof RegExp ? // RegExp in Array?
                            p :
                            new RegExp(str2Regex(p))
                        return [re.exec(m.text), re]
                    }) :
                    typeof _prefix === 'string' ? // String?
                        [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
                        [[[], new RegExp]]
            ).find(p => p[1])
            if (typeof plugin.before === 'function') {
                if (await plugin.before.call(this, m, {
                    match,
                    conn: this,
                    ownerGroup,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename,
                    expiration,
                    db, 
                    Func,
                    API
                }))
                    continue
            }
            if (typeof plugin !== 'function')
                continue
            if ((usedPrefix = (match[0] || '')[0])) {
                let noPrefix = m.text.replace(usedPrefix, '')
                let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
                args = args || []
                let _args = noPrefix.trim().split` `.slice(1)
                let text = _args.join` `
                command = (command || '').toLowerCase()
                let fail = plugin.fail || set.dfail // When failed
                let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
                    plugin.command.test(command) :
                    Array.isArray(plugin.command) ? // Array?
                        plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                            cmd.test(command) :
                            cmd === command
                        ) :
                        typeof plugin.command === 'string' ? // String?
                            plugin.command === command :
                            false

                if (!isAccept)
                    continue
                m.plugin = name
                if (m.chat in db.data.chats || m.sender in db.data.users) {
                    let chat = db.data.chats[m.chat]
                    let user = db.data.users[m.sender]
                    if (!['plugins/owner/owner-unban.js', 'plugins/group/group-unban.js', 'plugins/info/info-listban.js', 'info-creator.js'].includes(name) && chat && chat?.isBanned && !isPrems) return // Kecuali ini, bisa digunakan
                    if (!['plugins/owner/owner-unban.js', 'plugins/group/group-unban.js', 'plugins/info/info-listban.js', 'info-creator.js'].includes(name) && user && user?.banned) return
                }
                if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
                    fail('owner', m, this)
                    continue
                }
                if (plugin.rowner && !isROwner) { // Real Owner
                    fail('rowner', m, this)
                    continue
                }
                if (plugin.owner && !isOwner) { // Number Owner
                    fail('owner', m, this)
                    continue
                }
                if (plugin.mods && !isMods) { // Moderator
                    fail('mods', m, this)
                    continue
                }
                if (plugin.premium && !isPrems) { // Premium
                    fail('premium', m, this)
                    continue
                }
                if (plugin.banned && !isBans) { // Banned
                    fail('banned', m, this)
                    continue
                }
                if (plugin.created && !isCreated) { // Created
                     fail('created', m, this)
                     continue
                }
                if (plugin.group && !m.isGroup) { // Group Only
                    fail('group', m, this)
                    continue
                } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
                    fail('botAdmin', m, this)
                    continue
                } else if (plugin.admin && !isAdmin && isROwner) { // User Admin
                    fail('admin', m, this)
                    continue
                }
                if (plugin.restrict && !m.fromOwner && !opts['restrict']) { // Restrict
                        fail('restrict', m, this)
                        continue               
                }
                if (plugin.private && m.isGroup) { // Private Chat Only
                    fail('private', m, this)
                    continue
                }
                if (plugin.register == true && _user.registered == false) { // Butuh daftar?
                    fail('unreg', m, this)
                    continue
                }
                if (plugin.desc && text.includes('-h')) { //Plugin description 
                    m.reply(plugin.desc.toString())
                    continue 
                } 
                let rpgmod = m.isGroup ? db.data.chats[m.chat].rpg : db.data.settings[this.user.jid].rpg
                if (plugin.rpg && !rpgmod) { // RPG mode
                    fail('rpg', m, this)
                    continue
                }
                let gamemod = m.isGroup ? db.data.chats[m.chat].game : db.data.settings[this.user.jid].game
                if (plugin.game && !gamemod) { // NSFW mode
                    fail('game', m, this)
                    continue
                }
                let nsfwmod = m.isGroup ? db.data.chats[m.chat].nsfw : db.data.settings[this.user.jid].nsfw
                if (plugin.nsfw && !nsfwmod) { // NSFW mode
                    fail('nsfw', m, this)
                    continue
                }
                let maturemod = m.isGroup ? db.data.chats[m.chat].mature : db.data.settings[this.user.jid].mature
                if (plugin.mature && !maturemod) { // Mature mode
                    fail('mature', m, this)
                    continue
                }
                let downmod = m.isGroup ? db.data.chats[m.chat].download : db.data.settings[this.user.jid].download 
                if (plugin.download && !downmod) { // Download mode
                    fail('download', m, this)
                    continue
                }
                m.isCommand = true
                let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // XP Earning per command
                if (xp > 9999999999999999999999)
                this.sendButtonDoc(m.chat, `[❗] *Sepertinya Anda Bermain Curang, Menggunakan Calculator*`, set.wm, null, [['Buy Limit', '/buylimit',] ['Cheat Limit', '/cheat']] , fakes, adReply)
                else 
                m.exp += xp
                if (!isPrems && plugin.limit && db.data.users[m.sender].limit < plugin.limit * 1) {
                    this.sendButtonDoc(m.chat, `[❗] Limit anda habis, silahkan beli melalui *${usedPrefix}buy*`, set.wm, null, [['Buy', '.buy']], fakes, adReply)
                    // this.reply(m.chat, `Limit anda habis, silahkan beli melalui *${usedPrefix}buy*`, m)
                    continue // Limit habis
                }
                if (plugin.level > _user.level) {
                    this.sendButtonDoc(m.chat, `[💬] diperlukan level ${plugin.level} untuk menggunakan perintah ini. Level kamu ${_user.level} 📊`, set.wm, null, [[`Levelup`, `.levelup`,]], fakes, adReply)
                    // this.reply(m.chat, `diperlukan level ${plugin.level} untuk menggunakan perintah ini. Level kamu ${_user.level}`, m)
                    continue // If the level has not been reached
                }
                let extra = {
                    match,
                    usedPrefix,
                    noPrefix,
                    _args,
                    args,
                    command,
                    text,
                    conn: this,
                    ownerGroup,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename,
                    expiration,
                    db, 
                    Func,
                    API
                }
                try {
                    await plugin.call(this, m, extra)
                    if (!isPrems)
                        m.limit = m.limit || plugin.limit || false
                } catch (e) {
                    // Error occured
                    m.error = e
                    console.error(e)
                    if (e) {
                        let text = format(e)
                        for (let key of Object.values(set.APIKeys))
                             text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
                        if (e.name) {
                            let devmode = db.data.settings[this.user.jid].developerMode
                            let tekk = `*ERROR!*\n\nPesan : ${m.text}\n\n\n\n*Plugin:* ${m.plugin}\n*Sender:* @${m.sender.split`@`[0]}\n*Chat:* ${m.chat}\n*Chat Name:* ${await this.getName(m.chat)}\n*Command:* ${usedPrefix + command} ${args.join(' ')}\n\n\`\`\`${text}\`\`\``
                            if (devmode) return this.reply(set.owner[0][0] + '@s.whatsapp.net', tekk, m, { mentions: this.parseMention(tekk) })
                               .then(_=> m.react('❌') ).then(_=> m.reply('Maaf terjadi kesalahan!'))
                            else return this.reply(m.chat, text, m)
                        }
                        let tek = await Func.translate(text, 'id', db.data.users[m.sender].language).catch(_=> [text])
                        let ras = await m.reply(tek.toString(), m.chat, { mentions: this.parseMention(text) })
                        //m.react('❌').then(_=> m.reply(text, m.chat, { mentions: this.parseMention(text)}))
                        //m.react('❌').then(_=> this.react(m.chat, '❗', ras.key) )
                        /* let tek = text.split('\n\n')
            let teknya = tek[0]
            let footnya = tek[1] == '' ? tek[2] : tek[1] ? tek[1] : '' */
                        m.react('❌').then(_=> m.reply(text, m.chat, { mentions: this.parseMention(text)}))
                          // .then(_=> this.sendHydrated(m.chat, text, set.wm, null, null, null, 'https://www.whatsapp.com/otp/copy/' + usedPrefix  + command, 'Copy Command', [[]]))            
                    }
                } finally {
                    // m.reply(format(_user))
                    if (typeof plugin.after === 'function') {
                        try {
                            await plugin.after.call(this, m, extra)
                        } catch (e) {
                            console.error(e)
                        }
                    }
                    if (m.limit)
                        m.reply(+ m.limit + ` Limit terpakai ✔️\n${db.data.users[m.sender].limit - 1} Limit tersisa`)
                }
                break
            }
        }
    } catch (e) {
        console.error(e)
    } finally {
        if (opts['queque'] && m.text) {
            const id = m.id
            this.msgqueque.unqueue(id)
        }
        //if (opts['typing']) {
        if (m.isCommand) { 
            await this.sendPresenceUpdate('composing', m.chat)
        }
        // }
        if (opts['recording']) {
        if (m.isCommand) { 
            await this.sendPresenceUpdate('recording', m.chat)
        }
        }       
        //this.logger?.info(db.data.users[m.sender])
        let user, stats = db.data.stats
        if (m) {
            if (m.sender && (user = db.data.users[m.sender])) {
                user.exp += m.exp
                user.limit -= m.limit * 1
            }

            let stat
            if (m.plugin) {
                let now = +new Date
                if (m.plugin in stats) {
                    stat = stats[m.plugin]
                    if (!isNumber(stat.total))
                        stat.total = 1
                    if (!isNumber(stat.success))
                        stat.success = m.error != null ? 0 : 1
                    if (!isNumber(stat.last))
                        stat.last = now
                    if (!isNumber(stat.lastSuccess))
                        stat.lastSuccess = m.error != null ? 0 : now
                } else
                    stat = stats[m.plugin] = {
                        total: 1,
                        success: m.error != null ? 0 : 1,
                        last: now,
                        lastSuccess: m.error != null ? 0 : now
                    }
                stat.total += 1
                stat.last = now
                if (m.error == null) {
                    stat.success += 1
                    stat.lastSuccess = now
                }
            }
        }

        try {
            if (!opts['noprint']) await printMessage(m, this)
        } catch (e) {
            this.logger?.info(m, m.quoted, e)
        }
let myset = db.data.settings[this.user.jid]
let a = '```'      
let mychat = db.data.chats[m.chat]

//-- auto off
if (myset.modeoff){
    await this.sendPresenceUpdate("unavailable", m.chat)
}

//-- autoread sw
if (myset.readsw && m.chat == 'status@broadcast' && !m.fromMe && !m.message?.protocolMessage) {
    await this.readMessages([m.key])
    this.logger?.info(chalk.green(`[STORY] Melihat story dari ${m.name}`))
    var tum = await this.profilePictureUrl(m.sender, "image").catch(_=> "https://i.pinimg.com/originals/55/44/2f/55442f2018fd5e2781c732f90f1f7756.jpg")
    this.sendMessage(set.gclog, {
    text: `*AUTO READ STORY*

    ${a}Berhasil melihat story dari ${m.name}
    Tag: @${m.sender.split("@")[0]}${a}`,
    mentions: [m.sender],
    contextInfo: {
    mentionedJid: [m.sender],
    externalAdReply: {
        title: set.name,
        body: '',
    mediaType: 1,
                thumbnailUrl: tum,
                sourceUrl: '',
                renderLargerthumbnail: true
            }
        }
    })
}

//autopresence
if (mychat.autoPresence) {
    if (m.text) {
    /* Mengetik */
    let ran = ['unavailable', 'available', 'composing', 'recording', 'paused'].getRandom()
	return this.sendPresenceUpdate(ran, m.chat)
  }
}

//autodelvn
if (mychat.autodelvn && !m.fromMe && m.isBaileys && m.mtype === 'audioMessage' && m.msg.ptt && m.quoted) {
    let { key } = await m.reply('.delete', null, {
        messageId: '3EB0' + require('crypto').randomBytes(12).toString('hex')
    }).catch(_ => {})
    if (key) this.deleteMessage(m.chat, key)
}

//-- autoread gc
if (myset.readgc && m.isGroup && m.isCommand) this.readMessages([m.key])
//-- autoread pc
if (myset.readpc && !m.isGroup && m.isCommand) this.readMessages([m.key])

if (opts['autoread']) await this.readMessages([m.key])
  }
}

/**
 * Handle groups participants update
 * @this {import('./lib/connection').Socket}
 * @param {import('@adiwajshing/baileys').BaileysEventMap['group-participants.update']} groupsUpdate 
 */
export async function participantsUpdate({ id, participants, action }) {
    let ownerJadibot = [...set.ownerjbot].map(v => v?.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(this.user.jid)
    opts['self'] = opts['self'] ? opts['self'] : opts['self'] == false ? opts['self'] : ownerJadibot
    if (opts['self']) return
    if (this.isInit) return await delay(1000).then(_=> this.isInit = false)
    if (db.data == null) await loadDatabase()
    let chat = db.data.chats[id] || {}
    let text = ''
    switch (action) {
        case 'add':
        case 'remove':
        case 'leave':
        case 'invite':
        case 'invite_v4':
            if (chat.welcome) {
                let groupMetadata = await store.fetchGroupMetadata(id, this.groupMetadata)
                let member = groupMetadata.participants
                let bot = member.find(u => this.decodeJid(u.id) == this.user.jid) 
                let isBotAdmin = bot?.admin || false // Are you Admin?
                for (let user of participants) {
                    let name = this.getName(user)
                    let pp = await this.profilePictureUrl(user.includes(this.user.jid) ? this.user.jid : id, 'image').catch(_=> user.includes(this.user.jid) ? ppimut : ppgc)
                        text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user!').replace('@subject', await this.getName(id)).replace('@desc', groupMetadata.desc ? String.fromCharCode(8206).repeat(4001) + groupMetadata.desc : 'unknow') :
                            (chat.sBye || this.bye || conn.bye || 'Bye, @user!')).replace('@user', '@' + user.split('@')[0])
                            let wel = API('males', '/welcome2', {
                                profile: pp,
                                username: await this.getName(user),
                                background: 'https://telegra.ph/file/c538a6f5b0649a7861174.png',
                                groupname: await this.getName(id),
                                membercount: groupMetadata.participants.length
                            })
                            let lea = API('males', '/goodbye2', {
                                profile: pp,
                                username: await this.getName(user),
                                background: 'https://telegra.ph/file/c538a6f5b0649a7861174.png',
                                groupname: await this.getName(id),
                                membercount: groupMetadata.participants.length
                            })
                            await this.send3TemplateButtonImg(id, action === 'add' ? wel : lea, text, 'Groups Update Messages', action === 'add' ? 'selamat datang' : 'sampai jumpa', action === 'add' ? 'SyIniWibuElite' : 'SyIniWibuElite')
                        }
                    }
                break
        case 'promote':
            text = (chat.sPromote || this.spromote || conn.spromote || '@user ```is now Admin```')
        case 'demote':
            if (!text)
                text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```is no longer Admin```')
            text = text.replace('@user', '@' + participants[0].split('@')[0])
            if (chat.detect)
            this.sendButtonDoc(id, text, 'Groups info messages', 'Matikan Fitur Ini', '.off detect', global.fakes, global.adReply, { mentions: await this.parseMention(text) })
            break
    }
}

/**
 * Handle groups update
 * @this {import('./lib/connection').Socket}
 * @param {import('@adiwajshing/baileys').BaileysEventMap['groups.update']} groupsUpdate 
 */
export async function groupsUpdate(groupsUpdate, fromMe) {
    let ownerJadibot = [...set.ownerjbot].map(v => v?.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(this.user.jid)
    opts['self'] = opts['self'] ? opts['self'] : opts['self'] == false ? opts['self'] : ownerJadibot
    if (opts['self'] || fromMe) return
    if (this.isInit) return
    if (db.data == null) await loadDatabase()
    for (let groupUpdate of groupsUpdate) {
        let id = groupUpdate.id
        //this.logger?.info('\n\n=============\n\n In Groups Update \n\n============\n\n'+ `Id: ${id}\nParticipants: ${participant}` + '\n\n==============================\n')
        if (!id) continue
        let chats = db.data.chats[id], text = ''
        if (!chats?.detect) continue
        if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || '```Description has been changed to```\n@desc').replace('@desc', groupUpdate.desc)
        if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || '```Subject has been changed to```\n@subject').replace('@subject', groupUpdate.subject)
        if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || '```Icon has been changed to```').replace('@icon', groupUpdate.icon)
        if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || '```Group link has been changed to```\n@revoke').replace('@revoke', groupUpdate.revoke)
        if (groupUpdate.announce == true) text = (chats.sAnnounceOn || this.sAnnounceOn || conn.sAnnounceOn || '```Group has been closed!')
        if (groupUpdate.announce == false) text = (chats.sAnnounceOff || this.sAnnounceOff || conn.sAnnounceOff || '```Group has been open!')
        if (groupUpdate.restrict == true) text = (chats.sRestrictOn || this.sRestrictOn || conn.sRestrictOn || '```Group has been all participants!')
        if (groupUpdate.restrict == false) text = (chats.sRestrictOff || this.sRestrictOff || conn.sRestrictOff || '```Group has been only admin!')
        this.logger?.info('=============\n\ngroupsUpdate \n\n============\n\n' + await groupUpdate)
        if (!text) continue
        this.send2ButtonDoc(id, text.trim(), 'Groups Update Messages', '🔖 Matikan Fitur', '.off detect', '🎀 Menu', '.menu', global.fakes, global.adReply, { mentions: await this.parseMention(text) })
        //await this.sendButtonDoc(id, text, 'Groups Update Messages', 'Matikan Fitur', `.off detect`, fakes, 
    }
}

/**
 * @this {import('./lib/connection').Socket}
 * @param {import('@adiwajshing/baileys').BaileysEventMap['messages.delete']} message 
 */
export async function deleteUpdate(message) {
    let ownerJadibot = [...set.ownerjbot].map(v => v?.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(this.user.jid)
    opts['self'] = opts['self'] ? opts['self'] : opts['self'] == false ? opts['self'] : ownerJadibot
    if (opts['self']) return
    if (this.isInit) return 
    if (this.delete) return delete this.delete
    if (db.data == null) await loadDatabase()
    if (Array.isArray(message.keys) && message.keys.length > 0) {
        const tasks = await Promise.allSettled(message.keys.map(async (key) => {
            if (key.fromMe) return
            let isGroup = key.remoteJid.endsWith('@g.us')
            let groupMetadata = (isGroup ? await store.fetchGroupMetadata(key.remoteJid, this.groupMetadata) : {}) || {}
            let participants = (isGroup ? groupMetadata.participants : []) || []
            let user = (isGroup ? participants.find(u => this.decodeJid(u.id) === key.remoteJid) : {}) || {} // User Data
            let isAdmin = user?.admin == 'admin' || false // Is User Admin?
            if (isAdmin) return 
            const msg = this.loadMessage(key.remoteJid, key.id) || this.loadMessage(key.id)
            if (!msg || !msg.message) return
            let chat = db.data.chats[key.remoteJid]

            // if message type is conversation, convert it to extended text message because if not, it will throw an error
            const mtype = getContentType(msg.message)
            if (mtype === 'conversation') {
                msg.message.extendedTextMessage = { text: msg.message[mtype] }
                delete msg.message[mtype]
            }

            const participant = msg.participant || msg.key.participant || msg.key.remoteJid
            let nama = ['apa', 'apaan'].getRandom()
            let stiker = await Func.fetchGithub('raselcomel/db/master/sticker/' + nama + '.webp', { buffer: true })
            if (!chat.delete || chat.delete == false ? !chat.delete : true) return this.sendFile(key.remoteJid, stiker, 'delete.webp', '', msg, null, { ephemeralExpiration: 86400 })

            await this.reply(key.remoteJid, `
Terdeteksi @${participant.split`@`[0]} telah menghapus pesan
Untuk mematikan fitur ini, ketik
*.enable delete*
`.trim(), msg, { mentions: [participant] })
            return await this.copyNForward(key.remoteJid, msg).catch(e => this.logger?.info(e, msg))
        }))
        tasks.map(t => t.status === 'rejected' && this.logger?.error(t.reason))
    }
}

export async function callUpdate(json) {
let ownerJadibot = [...set.ownerjbot].map(v => v?.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(this.user.jid)
opts['self'] = opts['self'] ? opts['self'] : opts['self'] == false ? opts['self'] : ownerJadibot
console.log(json.content[0])
if (opts['self']) return
if (this.isInit) return
if (db.data == null) await loadDatabase()
if (!db.data.settings[this.user.jid].anticall) return
let [data] = json
let { from, isGroup, isVideo, date, status} = data
if (isGroup) return
if (json.content[0].tag == 'offer') {
let typeCall = json.content[0].content[0].tag
let callerId = json.content[0].attrs['call-creator']
let user = db.data.users[callerId]
if (user.whitelist) return
switch (this.callWhitelistMode) {
 case 'contact':
 case 'mycontact':
 if (callerId in this.contacts && 'short' in this.contacts[callerId]) return
 break
}
let kontakk = [
[
`${set.owner[0]}`, 
`${this.getName(set.owner[0] + '@s.whatsapp.net')}`,
`👑 Developer Bot `,
`🚫 Don't call me 🥺`, 
`Not yet`,
`🇮🇩 Indonesia`,
`Mampus kena block makanya jangan asal nelpon" 🗿`,
`Chat owner kalo mau di unban`
], 
[
`0`, 
`${this.getName('0@s.whatsapp.net')}`,
`🔥 Suhu 🔥`,
`Kang banned bot ilegal 😎`,
`whatsapp@gmail.com`,
`Cari sendiri`, 
`https://whatsapp.com`,
`Empat sehat le mark sempurna 👌🗿`
]
]
user.call += 1
if (user.call == 5) {
    let sentMsg = await this.sendContactArray(callerId, kontakk)
conn.sendContact(callerId, kontakk).then(async sentMsg => { 
conn.reply(callerId, `Sistem auto block, jangan menelepon bot silahkan hubungi owner untuk dibuka!`, sentMsg).then(async _=> {
await conn.updateBlockStatus(callerId, 'block')
.then(_=> { 
    user.call = 0
}).then(_=> {
 let pp = this.profilePictureUrl(callerId, 'image').catch(_=> pp)
 conn.reply2(set.owner[0]+'@s.whatsapp.net', `*NOTIF CALLER BOT!*\n\n@${callerId.split`@`[0]} telah menelpon *${this.user.name}*`, null, {
title: set.wm, 
render: true, 
thumb: pp, 
 })
 user.warning = 0
})
 })
})
} else await this.reply2(callerId, `Maaf tidak bisa menerima panggilan ${typeCall}, Jika kamu menelepon lebih dari 5, kamu akan diblokir.\n\n${user.warning} / 5`, null, {
title: set.wm, 
render: true, 
thumb: set.fla + `don't call me`, 
}) 
}
}
 
global.set.dfail = (type, m, usedPrefix, conn) => {
let msg = {
    rowner: `╭─֍〔 ıll 𝐀𝐂𝐂𝐄𝐒𝐒 𝐃𝐄𝐍𝐈𝐄𝐃 llı 〕֍─\n⬡ Perintah ini hanya untuk developer bot\n╰─────────────────֍`,
    mods: `╭─֍〔 ıll 𝐀𝐂𝐂𝐄𝐒𝐒 𝐃𝐄𝐍𝐈𝐄𝐃 llı 〕֍─\n⬡ Perintah ini hanya untuk moderator bot\n╰─────────────────֍`,
    admin: `╭─֍〔 ıll 𝐀𝐂𝐂𝐄𝐒𝐒 𝐃𝐄𝐍𝐈𝐄𝐃 llı 〕֍─\n⬡ Fitur ini khusus untuk admin grup!!\n╰─────────────────֍`,
    private: `╭─֍〔 ıll 𝐏𝐑𝐈𝐕𝐀𝐓𝐄 𝐂𝐇𝐀𝐓 𝐎𝐍𝐋𝐘 llı 〕֍─\n⬡ Fitur ini hanya dapat digunakan diprivate chat\n╰─────────────────֍`,
    restrict: 'Fitur ini di *disable*!' 
    }[type]
    if (msg) return conn.sendButton(m.chat, msg, null, ['Menu', `${usedPrefix}menu`], m, { mentions: conn.parseMention(msg) })

let nsfw = {
    nsfw: `╭֍〔 ıll 𝐀𝐂𝐂𝐄𝐒𝐒 𝐃𝐄𝐍𝐈𝐄𝐃 llı 〕֍─\n⬡ Fitur *nsfw* Tidak Aktif Silahkan Hubungi owner Untuk Mengaktifkannya\n╰─────────────────֍`,
    }[type]
    if (nsfw) return conn.sendButton(m.chat, nsfw, null, ['Owner', `${usedPrefix}owner`], m)
    
let rpg = {
    rpg: `╭֍〔 ıll 𝐀𝐂𝐂𝐄𝐒𝐒 𝐃𝐄𝐍𝐈𝐄𝐃 llı 〕֍─\n⬡ Fitur *RPG* Tidak Aktif Silahkan Hubungi owner Untuk Mengaktifkannya\n╰─────────────────֍`,
    }[type]
    if (rpg) return conn.sendButton(m.chat, rpg, null, ['Owner', `${usedPrefix}owner`], m)
       
let owner = { 
    owner: `╭─֍〔 ıll 𝐀𝐂𝐂𝐄𝐒𝐒 𝐃𝐄𝐍𝐈𝐄𝐃 llı 〕֍─\n⬡ Perintah ini hanya untuk owner bot\n╰─────────────────֍`,
    }[type]
    if (owner) return conn.sendButtonDoc(m.chat, owner, null, ['Owner', `${usedPrefix}owner`], m)
    
let premium = { 
    premium: `╭─֍〔 ıll 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐎𝐍𝐋𝐘 llı 〕֍─\n⬡ Fitur ini khusus untuk user *Premium*\n╰─────────────────֍`,
    }[type]
    if (premium) return conn.sendButton(m.chat, premium, null, ['Buy Premium', `${usedPrefix}owner`], m)
    
let group = { 
    group: `╭֍〔 ıll 𝐆𝐑𝐎𝐔𝐏 𝐎𝐍𝐋𝐘 llı 〕֍─\n⬡ Fitur ini hanya dapat digunakan didalam grup!!\n╰─────────────────֍`,
    }[type]
    if (group) return conn.sendButton(m.chat, group, null, ['Group-AzBoTz', `${usedPrefix}gcbot`], m)
    
let botAdmin = {
    botAdmin:  `╭֍〔 ıll 𝐀𝐂𝐂𝐄𝐒𝐒 𝐃𝐄𝐍𝐈𝐄𝐃 llı 〕֍─\n⬡ Fitur ini tidak dapat work, bot tidak menjadi admin\n╰─────────────────֍`,
    }[type]
    if (botAdmin) return conn.sendButton(m.chat, botAdmin, null, ['Eh iya ya', 'ok'], m)
    
let unreg = {
    unreg: `┏━━━〔 ıll 𝐑𝐄𝐆𝐈𝐒𝐓𝐄𝐑 llı 〕━━❑
⬡ Hallo *@${m.sender.split`@`[0]}* 👋
⬡ Sebelum memakai fitur ini
⬡ Harap registrasi dulu ya kak 🗂️
┗━━━━━━━━━━━━━━━━━━❑
┏━〔 ıll DAFTAR MANUAL llı 〕━━❑
⬡ #daftar namamu.umurmu
⬡ #daftar *@${m.sender.split`@`[0]}*.17
┗━━━━━━━━━━━━━━❑`
    }[type]
    if (unreg) conn.sendButtonDoc(m.chat, unreg, '❑ Daftar cepat klik tombol dibawah', null, ['Verify', `.daftar @${m.sender.split`@`[0]}.16`], fakes, adReply)
    //if (unreg) return conn.reply(m.chat, unreg, m)
}

let file = __filename(import.meta.url, true)
watchFile(file, async () => {
    unwatchFile(file)
    console.log(chalk.redBright("Update 'handler.js'"))
    if (reload) console.log(await reload(await conn))
})
