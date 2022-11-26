import { smsg } from './System/lib/simple.js'
import { plugins } from './System/lib/plugins.js'
import { format } from 'util'
import { fileURLToPath } from 'url'
import path, { join } from 'path'
import { unwatchFile, watchFile, writeFileSync, readFileSync } from 'fs'
import chalk from 'chalk'
import Connection from './System/lib/connection.js'
import printMessage from './System/lib/print.js'
import Helper from './System/lib/helper.js'
import db, { loadDatabase } from './System/lib/database.js'
import Queque from './System/lib/queque.js'
import moment from 'moment-timezone'

const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const isNumber = x => typeof x === 'number' && !isNaN(x)

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

/** @type {import('@adiwajshing/baileys')} */
const { getContentType, proto } = (await import('@adiwajshing/baileys')).default

/**
 * Handle messages upsert
 * @this {import('./lib/connection').Socket}
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['messages.upsert']} chatUpdate
 */
export async function handler(chatUpdate) {
    this.msgqueque = this.msgqueque || new Queque()
    if (!chatUpdate)
        return
    let m = chatUpdate.messages[chatUpdate.messages.length - 1]
    if (!m)
        return
    if (db.data == null)
        await loadDatabase()
    try {
        m = smsg(this, m) || m
        if (!m)
            return
        m.exp = 0
        m.limit = false
        try {
            // TODO: use loop to insert data instead of this
            let user = db.data.users[m.sender]
            if (typeof user !== 'object')
                db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.exp)) user.exp = 0
                if (!isNumber(user.limit)) user.limit = 100
                if (!isNumber(user.lastclaim)) user.lastclaim = 0
                if (!('registered' in user)) user.registered = false
                if (!user.registered) {
                    if (!('name' in user)) user.name = m.name
                    if (!isNumber(user.age)) user.age = -1
                    if (!isNumber(user.regTime)) user.regTime = -1
                    if (!('jadibot' in user)) user.jadibot = false
                    if (!isNumber(user.timeBot)) user.timeBot = 0
                    if (isNumber(user.nobot)) user.nobot = 0
                    if (!('nyimak' in user)) user.nyimak = false
                }
                if (!isNumber(user.afk)) user.afk = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!('banned' in user)) user.banned = false
                if (!isNumber(user.warn)) user.warn = 0
                if (!isNumber(user.warning)) user.warning = 0
                if (!isNumber(user.level)) user.level = 0
                if (!('role' in user)) user.role = 'Beginner'
                if (!('autolevelup' in user)) user.autolevelup = true
                if (!('language' in user)) user.language = m.sender.startsWith('62') ? 'id' : 'en'
                if (!('languageSimi' in user)) user.languageSimi = m.sender.startsWith('62') ? 'id' : 'en'
                if (!('languageCountry' in user)) user.languageCountry = m.sender.startsWith('62') ? 'Indonesia' : 'English'

                if (!isNumber(user.money))user.money = 0
                if (!isNumber(user.health))user.health = 100
                if (!isNumber(user.potion))user.potion = 0

                if (!isNumber(user.bank)) user.bank = 0
                if (!isNumber(user.atm)) user.atm = 0
                if (!isNumber(user.fullatm)) user.fullatm = Infinity

                if (!isNumber(user.robo)) user.robo = 0

                if (!isNumber(user.trash))user.trash = 0
                if (!isNumber(user.wood))user.wood = 0
                if (!isNumber(user.rock))user.rock = 0
                if (!isNumber(user.string))user.string = 0
                if (!isNumber(user.petFood))user.petFood = 0
  //harta
                if (!isNumber(user.emerald))user.emerald = 0
                if (!isNumber(user.diamond))user.diamond = 0
                if (!isNumber(user.gold))user.gold = 0
                if (!isNumber(user.iron))user.iron = 0

                if (!isNumber(user.common))user.common = 0
                if (!isNumber(user.uncommon))user.uncommon = 0
                if (!isNumber(user.mythic))user.mythic = 0
                if (!isNumber(user.legendary))user.legendary = 0

 //pet
                if (!isNumber(user.pet)) user.pet = 0
                if (!isNumber(user.horse)) user.horse = 0
                if (!isNumber(user.horseexp)) user.horseexp = 0
                if (!isNumber(user.cat)) user.cat = 0
                if (!isNumber(user.catexp)) user.catexp = 0
                if (!isNumber(user.fox)) user.fox = 0
                if (!isNumber(user.foxhexp)) user.foxexp = 0
                if (!isNumber(user.dog)) user.dog = 0
                if (!isNumber(user.dogexp)) user.dogexp = 0

                if (!isNumber(user.horselastfeed)) user.horselastfeed = 0
                if (!isNumber(user.catlastfeed)) user.catlastfeed = 0
                if (!isNumber(user.foxlastfeed)) user.foxlastfeed = 0
                if (!isNumber(user.doglastfeed)) user.doglastfeed = 0

                
                if (!isNumber(user.armor)) user.armor = 0
                if (!isNumber(user.armordurability)) user.armordurability = 0
     //tools
                if (!isNumber(user.sword)) user.sword = 0
                if (!isNumber(user.sworddurability)) user.sworddurability = 0
                if (!isNumber(user.pickaxe)) user.pickaxe = 0
                if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
                if (!isNumber(user.fishingrod)) user.fishingrod = 0
                if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
    //lastclaim
                if (!isNumber(user.lastclaim)) user.lastclaim = 0
                if (!isNumber(user.lastadventure)) user.lastadventure = 0
                if (!isNumber(user.lastfishing)) user.lastfishing = 0
                if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
                if (!isNumber(user.lastduel)) user.lastduel = 0
                if (!isNumber(user.lastmining)) user.lastmining = 0
                if (!isNumber(user.lasthunt)) user.lasthunt = 0
                if (!isNumber(user.lastweekly)) user.lastweekly = 0
                if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
                
            } else
                db.data.users[m.sender] = {
                    exp: 0,
                    limit: 100,
                    lastclaim: 0,
                    registered: false,
                    name: m.name,
                    age: -1,
                    regTime: -1,
                    jadibot: false,
                    timeBot: 0,
                    nobot: 0,
                    nyimak: false,
                    afk: -1,
                    afkReason: '',
                    banned: false,
                    warn: 0,
                    warning: 0,
                    level: 0,
                    role: 'Beginner',
                    autolevelup: true,

                    language: m.sender.startsWith('62') ? 'id' : 'en',
                    languageSimi: m.sender.startsWith('62') ? 'id' : 'en', 
                    languageCountry: m.sender.startsWith('62') ? 'Indonesia' : 'English',
                    
                    health: 100,
                    potion: 10,
                    money: 0,
                    fullatm: Infinity,
                    atm: 0,
                    bank: 0,
                    robo: 0,
                    
                    trash: 0,
                    wood: 0,
                    rock: 0,
                    string: 0,

                    emerald: 0,
                    diamond: 0,
                    gold: 0,
                    iron: 0,

                    common: 0,
                    uncommon: 0,
                    mythic: 0,
                    legendary: 0,
                    pet: 0,

                    horse: 0,
                    horseexp: 0,
                    cat: 0,
                    catngexp: 0,
                    fox: 0,
                    foxexp: 0,
                    dog: 0,
                    dogexp: 0,

                    horselastfeed: 0,
                    catlastfeed: 0,
                    foxlastfeed: 0,
                    doglastfeed: 0,

                    armor: 0,
                    armordurability: 0,
                    sword: 0,
                    sworddurability: 0,
                    pickaxe: 0,
                    pickaxedurability: 0,
                    fishingrod: 0,
                    fishingroddurability: 0,

                    lastclaim: 0,
                    lastadventure: 0,
                    lastfishing: 0,
                    lastdungeon: 0,
                    lastduel: 0,
                    lastmining: 0,
                    lasthunt: 0,
                    lastweekly: 0,
                    lastmonthly: 0,
                }
            let chat = db.data.chats[m.chat]
            if (typeof chat !== 'object')
                db.data.chats[m.chat] = {}
            if (chat) {
                if (!('antiLink' in chat)) chat.antiLink = false
                if (!('antiSticker' in chat)) chat.antiSticker = false
                if (!('antiToxic' in chat)) chat.antiToxic = true

                if (!('lastAnime' in chat)) chat.lastAnime = true
                if (!('latestNews' in chat)) chat.latestNews = true
                if (!('stiker' in chat)) chat.stiker = false
                if (!('useDocument' in chat)) chat.useDocument = false

                if (!('isBanned' in chat)) chat.isBanned = false
                if (!('welcome' in chat)) chat.welcome = true
                if (!('detect' in chat)) chat.detect = true
                if (!('getmsg' in chat)) chat.getmsg = true

                if (!('nsfw' in chat)) chat.nsfw = false
                if (!('premium' in chat)) chat.premium = false
                if (!('premiumTime' in chat)) chat.premiumTime = false
                if (!('premnsfw' in chat)) chat.premnsfw = false
                if (!('simi' in chat)) chat.simi = false

                if (!('sWelcome' in chat)) chat.sWelcome = ''
                if (!('sBye' in chat)) chat.sBye = ''
                if (!('sPromote' in chat)) chat.sPromote = ''
                if (!('sDemote' in chat)) chat.sDemote = ''

                if (!('delete' in chat)) chat.delete = true
                if (!('viewonce' in chat)) chat.viewonce = false
                if (!('viewOnce' in chat)) chat.viewOnce = false
                if (!isNumber(chat.expired)) chat.expired = 0
            } else
                db.data.chats[m.chat] = {
	                antiLink: false,
	                antiSticker: false,
	                antiToxic: true,
	                
                    detect: true,
                    isBanned: false,
                    welcome: true,

	                getmsg: true,
	                lastAnime: true,
	                latestNews: true,

	                nsfw: false,
	                premium: false,
	                premiumTime: false,
	                premnsfw: false,

	                simi: false,
	                stiker: false,
	                useDocument: false,

                    sWelcome: '',
                    sBye: '',
                    sPromote: '',
                    sDemote: '',

                    delete: true,
                    viewOnce: false,
                    viewonce: false,
                    expired: 0,
                }
            let settings = db.data.settings[this.user.jid]
            if (typeof settings !== 'object') db.data.settings[this.user.jid] = {}
            if (settings) {
                if (!('self' in settings)) settings.self = false
                if (!('autoread' in settings)) settings.autoread = false
                if (!('restrict' in settings)) settings.restrict = false
                if (!('jadibot' in settings)) settings.jadibot = false
                if (!('autorestart' in settings)) settings.autorestart = true
                if (!('restartDB' in settings)) settings.restartDB = 0
                if (!('status' in settings)) settings.status = 0
                if (!('readsw' in settings)) settings.readsw = false
                if (!('readpc' in settings)) settings.readpc = false
                if (!('readgc' in settings)) settings.readgc = false
                if (!('clearmedia' in settings)) settings.clearmedia = false
                if (!('modewar' in settings)) settings.modewar = false
                if (!('modeoff' in settings)) settings.modeoff = false
            } else db.data.settings[this.user.jid] = {
                self: false,
                autoread: false,
                restrict: false,
                autorestart: true,
                restartDB: 0,
                status: 0,
                readsw: false,
                readpc: false,
                readgc: false,
                clearmedia: false,
                modewar: false,
                modeoff: false
            }
        } catch (e) {
            console.error(e)
        }
        const isROwner = [this.decodeJid(this.user.id), ...set.owner.map(([number]) => number)].map(v => v?.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isOwner = isROwner || m.fromMe
        const isMods = isOwner || set.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPrems = isROwner || set.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
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

        if (m.isBaileys)
            return
        m.exp += Math.ceil(Math.random() * 10)

        let usedPrefix
        let _user = db.data?.users?.[m.sender]

        const groupMetadata = (m.isGroup ? await Connection.store.fetchGroupMetadata(m.chat, this.groupMetadata) : {}) || {}
        const participants = (m.isGroup ? groupMetadata.participants : []) || []
        const user = (m.isGroup ? participants.find(u => this.decodeJid(u.id) === m.sender) : {}) || {} // User Data
        const bot = (m.isGroup ? participants.find(u => this.decodeJid(u.id) == this.user.jid) : {}) || {} // Your Data
        const isRAdmin = user?.admin == 'superadmin' || false
        const isAdmin = isRAdmin || user?.admin == 'admin' || false // Is User Admin?
        const isBotAdmin = bot?.admin || false // Are you Admin?

        const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins')
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
                            m.reply(`*Plugin:* ${name}\n*Sender:* ${m.sender}\n*Chat:* ${m.chat}\n*Command:* ${m.text}\n\n\`\`\`${format(e)}\`\`\``.trim(), data.jid)
                    }
                }
            }
            if (!opts['restrict'])
                if (plugin.tags && plugin.tags.includes('admin')) {
                    // set.dfail('restrict', m, this)
                    continue
                }
            const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
            let _prefix = plugin.customPrefix ? plugin.customPrefix : this.prefix ? this.prefix : global.prefix
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
                    __filename
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
                    if (name != 'owner-unbanchat.js' && chat?.isBanned)
                        return // Except this
                    if (name != 'owner-unbanuser.js' && user?.banned)
                        return
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
                if (plugin.group && !m.isGroup) { // Group Only
                    fail('group', m, this)
                    continue
                } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
                    fail('botAdmin', m, this)
                    continue
                } else if (plugin.admin && !isAdmin) { // User Admin
                    fail('admin', m, this)
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
                
                m.isCommand = true
                let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // XP Earning per command
                if (xp > 200)
                this.sendButtonDoc(m.chat, `[❗] *Sepertinya Anda Bermain Curang, Menggunakan Calculator*`, wm, 'Buy Limit', '/buylimit', 'Cheat Limit', '/cheat' , m)
                else 
                m.exp += xp
                if (!isPrems && plugin.limit && db.data.users[m.sender].limit < plugin.limit * 1) {
                    this.sendButtonDoc(m.chat, `[❗] Limit anda habis, silahkan beli melalui *${usedPrefix}buy*`, wm, 'Buy', '.buy', m)
                    // this.reply(m.chat, `Limit anda habis, silahkan beli melalui *${usedPrefix}buy*`, m)
                    continue // Limit habis
                }
                if (plugin.level > _user.level) {
                    this.sendButtonDoc(m.chat, `[💬] diperlukan level ${plugin.level} untuk menggunakan perintah ini. Level kamu ${_user.level} 📊`, wm, `Levelup`, `.levelup`, m)
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
                    __filename
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
                        for (let key of Object.values(global.set.APIKeys))
                            text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
                        if (e.name)
                            for (let [jid] of set.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                                let data = (await this.onWhatsApp(jid))[0] || {}
                                if (data.exists)
                                    m.reply(`*Plugin:* ${m.plugin}\n*Sender:* ${m.sender}\n*Chat:* ${m.chat}\n*Command:* ${usedPrefix}${command} ${args.join(' ')}\n\n\`\`\`${text}\`\`\``.trim(), data.jid)
                                    .then(_=> m.react('❌') )
                                    else return this.reply(m.chat, `Maaf fitur ini sedang error\nAkan diperbaiki sesegera mungkin`, m)
                                    //.then(_=> m.react('❌') ).then(_=> m.reply('Maaf terjadi kesalahan!'))
                                    //else return this.reply(m.chat, text, m)
                                }
                            let tek = await this.translate(text, 'id', db.data.users[m.sender].language).catch(_=> [text])
                            let ras = await m.reply(tek.toString(), m.chat, { mentions: this.parseMention(text) })
                            //m.react('❌').then(_=> m.reply(text, m.chat, { mentions: this.parseMention(text)}))
                            m.react('❌').then(_=> this.react(m.chat, '❗', ras.key) )
                        }
                } finally {
                    // m.reply(util.format(_user))
                    if (typeof plugin.after === 'function') {
                        try {
                            await plugin.after.call(this, m, extra)
                        } catch (e) {
                            console.error(e)
                        }
                    }
                    if (m.limit)
                        m.reply(+m.limit + ` Limit terpakai ✔️\n${db.data.users[m.sender].limit - 1} Limit tersisa`)
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
        //console.log(db.data.users[m.sender])
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
/*
        try {
            if (!opts['noprint']) await printMessage(m, this)
        } catch (e) {
            console.log(m, m.quoted, e)
        }
        */
        if (opts['autoread'])
            await this.readMessages([m.key])

let myset = db.data.settings[this.user.jid]
let a = '```'

          //-- auto off
        if (myset.modeoff){
            await this.sendPresenceUpdate("unavailable", m.chat)
        }

//-- autoread sw
        if (myset.readsw && m.chat == 'status@broadcast' && !m.fromMe && !m.message?.protocolMessage) {
            await this.readMessages([m.key])
            console.log(chalk.green(`[STORY] Melihat story dari ${m.name}`))
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


              //-- autoread gc
            if (myset.readgc && m.isGroup && m.isCommand) 
                this.readMessages([m.key])

               //-- autoread pc
            if (myset.readpc && !m.isGroup && m.isCommand) 
                this.readMessages([m.key])

  }
}

/**
 * Handle groups participants update
 * @this {import('./lib/connection').Socket}
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['group-participants.update']} groupsUpdate 
 */
export async function participantsUpdate({ id, participants, action }) {
    if (opts['self'])
        return
    if (this.isInit)
        return
    if (db.data == null)
        await loadDatabase()
    let chat = db.data.chats[id] || {}
    let text = ''
    switch (action) {
        case 'add':
        case 'remove':
            if (chat.welcome) {
                let groupMetadata = await Connection.store.fetchGroupMetadata(id, this.groupMetadata)
                for (let user of participants) {
                    let pp = './src/avatar_contact.png'
                    try {
                        pp = await this.profilePictureUrl(user, 'image')
                    } catch (e) {
                    } finally {
                        text = (action === 'add' ? (chat.sWelcome || this.welcome || Connection.conn.welcome || 'Welcome, @user!').replace('@subject', await this.getName(id)).replace('@desc', groupMetadata.desc ? String.fromCharCode(8206).repeat(4001) + groupMetadata.desc : 'unknow') :
                            (chat.sBye || this.bye || Connection.conn.bye || 'Bye, @user!')).replace('@user', '@' + user.split('@')[0])
                            let wel = Helper.API('males', '/welcome2', {
                                profile: pp,
                                username: await this.getName(user),
                                background: 'https://telegra.ph/file/c538a6f5b0649a7861174.png',
                                groupname: await this.getName(id),
                                membercount: groupMetadata.participants.length
                            })
                            let lea = Helper.API('males', '/goodbye2', {
                                profile: pp,
                                username: await this.getName(user),
                                background: 'https://telegra.ph/file/c538a6f5b0649a7861174.png',
                                groupname: await this.getName(id),
                                membercount: groupMetadata.participants.length
                            })
                            await this.send3TemplateButtonImg(id, action === 'add' ? wel : lea, text, 'Groups Update Messages', action === 'add' ? 'selamat datang' : 'sampai jumpa', action === 'add' ? 'SyIniWibuElite' : 'SyIniWibuElite')
                        }
                    }
                }
                break
        case 'promote':
            text = (chat.sPromote || this.spromote || Connection.conn.spromote || '@user ```is now Admin```')
        case 'demote':
            if (!text)
                text = (chat.sDemote || this.sdemote || Connection.conn.sdemote || '@user ```is no longer Admin```')
            text = text.replace('@user', '@' + participants[0].split('@')[0])
            if (chat.detect)
            this.sendButtonDoc(id, text, 'Groups info messages', 'Matikan Fitur Ini', '.off detect', global.fakes, { contextInfo: global.adReply.contextInfo, mentions: await this.parseMention(text) })
            break
    }
}

/**
 * Handle groups update
 * @this {import('./lib/connection').Socket}
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['groups.update']} groupsUpdate 
 */
export async function groupsUpdate(groupsUpdate) {
    if (opts['self'])
        return
    for (const groupUpdate of groupsUpdate) {
        const id = groupUpdate.id
        //console.log('\n\n=============\n\n In Groups Update \n\n============\n\n'+ `Id: ${id}\nParticipants: ${participant}` + '\n\n==============================\n')
        if (!id) continue
        let chats = db.data.chats[id], text = ''
        if (!chats?.detect) continue
        if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || Connection.conn.sDesc || '```Description has been changed to```\n@desc').replace('@desc', groupUpdate.desc)
        if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || Connection.conn.sSubject || '```Subject has been changed to```\n@subject').replace('@subject', groupUpdate.subject)
        if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || Connection.conn.sIcon || '```Icon has been changed to```').replace('@icon', groupUpdate.icon)
        if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || Connection.conn.sRevoke || '```Group link has been changed to```\n@revoke').replace('@revoke', groupUpdate.revoke)
        if (groupUpdate.announce == true) text = (chats.sAnnounceOn || this.sAnnounceOn || Connection.conn.sAnnounceOn || '```Group has been closed!')
        if (groupUpdate.announce == false) text = (chats.sAnnounceOff || this.sAnnounceOff || Connection.conn.sAnnounceOff || '```Group has been open!')
        if (groupUpdate.restrict == true) text = (chats.sRestrictOn || this.sRestrictOn || Connection.conn.sRestrictOn || '```Group has been all participants!')
        if (groupUpdate.restrict == false) text = (chats.sRestrictOff || this.sRestrictOff || Connection.conn.sRestrictOff || '```Group has been only admin!')
        //console.log('=============\n\ngroupsUpdate \n\n============\n\n' + await groupUpdate)
        if (!text) continue
        await this.sendButtonDoc(id, text, 'Groups Update Messages', 'Matikan Fitur', `.off detect`, global.fakes, { contextInfo: global.adReply.contextInfo, mentions: await this.parseMention(text) })
    }
}

/**
 * @this {import('./lib/connection').Socket}
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['messages.delete']} message 
 */
export async function deleteUpdate(message) {

    if (Array.isArray(message.keys) && message.keys.length > 0) {
        const tasks = await Promise.allSettled(message.keys.map(async (key) => {
            if (key.fromMe) return
            const msg = this.loadMessage(key.remoteJid, key.id) || this.loadMessage(key.id)
            if (!msg || !msg.message) return
            let chat = db.data.chats[key.remoteJid]
            if (!chat || chat.delete) return

            // if message type is conversation, convert it to extended text message because if not, it will throw an error
            const mtype = getContentType(msg.message)
            if (mtype === 'conversation') {
                msg.message.extendedTextMessage = { text: msg.message[mtype] }
                delete msg.message[mtype]
            }

            const participant = msg.participant || msg.key.participant || msg.key.remoteJid

            await this.reply(key.remoteJid, `
Terdeteksi @${participant.split`@`[0]} telah menghapus pesan
Untuk mematikan fitur ini, ketik
*.enable delete*
`.trim(), msg, { mentions: [participant] })
            return await this.copyNForward(key.remoteJid, msg).catch(e => console.log(e, msg))
        }))
        tasks.map(t => t.status === 'rejected' && console.error(t.reason))
    }
}

export async function callUpdate(json) {
let ownerJadibot = [...set.ownerjbot].map(v => v?.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(this.user.jid)
opts['self'] = opts['self'] ? opts['self'] : opts['self'] == false ? opts['self'] : ownerJadibot
if (opts['self']) return
if (this.isInit) return
if (db.data == null) await loadDatabase()
if (!db.data.settings[this.user.jid].call) return
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
`${set.owner[0][0]}`, 
`${set.owner[0][1]}`,
`👑 Developer Bot `,
`🚫 Don't call me 🥺`, 
`Not yet`,
`🇮🇩 Indonesia`,
`Mampus kena block makanya jangan asal nelpon" 🗿`,
`Folllow ig @rasel.ganz for open blocked`
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
user.warning += 1
if (user.warning == 5) {
await this.sendContact(callerId, kontakk).then(async sel => { 
 await this.reply(callerId, `Sistem auto block, jangan menelepon bot silahkan hubungi owner untuk dibuka!`, sel).then(async _=> {
await this.updateBlockStatus(callerId, 'block').then(async _=> { 
 let pp = await this.profilePictureUrl(callerId, 'image').catch(_=> ppimut)
 await this.reply(set.owner[0][0]+'@s.whatsapp.net', `*NOTIF CALLER BOT!*\n\n@${callerId.split`@`[0]} telah menelpon *${this.user.name}*`, null, {
title: set.wm, 
render: true, 
thumb: pp, 
 })
 user.warning = 0
})
 })
})
} else await this.reply(callerId, `Maaf tidak bisa menerima panggilan ${typeCall}, Jika kamu menelepon lebih dari 5, kamu akan diblokir.\n\n${user.warning} / 5`, null, {
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
    if (msg) return this.sendButton(m.chat, msg, null, ['Menu', `${usedPrefix}menu`], m, { mentions: this.parseMention(msg) })
    
let nsfw = {
    nsfw: `╭֍〔 ıll 𝐀𝐂𝐂𝐄𝐒𝐒 𝐃𝐄𝐍𝐈𝐄𝐃 llı 〕֍─\n⬡ Fitur *nsfw* Tidak Aktif Silahkan Hubungi owner Untuk Mengaktifkannya\n╰─────────────────֍`,
    }[type]
    if (nsfw) return this.sendButton(m.chat, nsfw, null, ['Owner', `${usedPrefix}owner`], m)
    
let rpg = {
    rpg: `╭֍〔 ıll 𝐀𝐂𝐂𝐄𝐒𝐒 𝐃𝐄𝐍𝐈𝐄𝐃 llı 〕֍─\n⬡ Fitur *RPG* Tidak Aktif Silahkan Hubungi owner Untuk Mengaktifkannya\n╰─────────────────֍`,
    }[type]
    if (rpg) return this.sendButton(m.chat, rpg, null, ['Owner', `${usedPrefix}owner`], m)
       
let owner = { 
    owner: `╭─֍〔 ıll 𝐀𝐂𝐂𝐄𝐒𝐒 𝐃𝐄𝐍𝐈𝐄𝐃 llı 〕֍─\n⬡ Perintah ini hanya untuk owner bot\n╰─────────────────֍`,
    }[type]
    if (owner) return this.sendButtonDoc(m.chat, owner, null, ['Owner', `${usedPrefix}owner`], m)
    
let premium = { 
    premium: `╭─֍〔 ıll 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐎𝐍𝐋𝐘 llı 〕֍─\n⬡ Fitur ini khusus untuk user *Premium*\n╰─────────────────֍`,
    }[type]
    if (premium) return this.sendButton(m.chat, premium, null, ['Buy Premium', `${usedPrefix}owner`], m)
    
let group = { 
    group: `╭֍〔 ıll 𝐆𝐑𝐎𝐔𝐏 𝐎𝐍𝐋𝐘 llı 〕֍─\n⬡ Fitur ini hanya dapat digunakan didalam grup!!\n╰─────────────────֍`,
    }[type]
    if (group) return this.sendButton(m.chat, group, null, ['Group-AzBoTz', `${usedPrefix}gcbot`], m)
    
let botAdmin = {
    botAdmin:  `╭֍〔 ıll 𝐀𝐂𝐂𝐄𝐒𝐒 𝐃𝐄𝐍𝐈𝐄𝐃 llı 〕֍─\n⬡ Fitur ini tidak dapat work, bot tidak menjadi admin\n╰─────────────────֍`,
    }[type]
    if (botAdmin) return this.sendButton(m.chat, botAdmin, null, ['Eh iya ya', 'ok'], m)
    
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
    if (unreg) return conn.sendButton(m.chat, unreg, '❑ Daftar cepat klik tombol dibawah', null, [['Verify', `.daftar @${m.sender.split`@`[0]}.16`]], m)
    //if (unreg) return conn.sendButton(m.chat, unreg, '❑ Daftar cepat klik tombol dibawah ❑', global.listmessage, m)
}

let file = Helper.__filename(import.meta.url, true)
watchFile(file, async () => {
    unwatchFile(file)
    console.log(chalk.redBright("Update 'handler.js'"))
    if (Connection.reload) console.log(await Connection.reload(await Connection.conn))
})
