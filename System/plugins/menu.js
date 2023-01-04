import db from '../lib/database.js'
import fs from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import { plugins } from '../lib/plugins.js'
import { platform } from 'os'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
const { opts, __dirname } = (await import('../lib/helper.js')).default 

let handler = async (m, { conn, usedPrefix: _p, args, command, __dirname }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'misc', 'store', 'trash', 'user', 'edukasi', 'lagu', 'anonymous', 'ephoto360', 'baileys', 'convert', 'database', 'nocategory', 'primbon', 'canvas', 'absen', 'update','rpg', 'anime', 'virus', 'downloader', 'game', 'fun', 'xp', 'news', 'group', 'image', 'admin', 'info', 'internet', 'islam', 'kerang', 'maker', 'owner', 'audio', 'premium', 'quotes', 'stalk', 'shortlink', 'sticker', 'tools', 'nsfw', 'asupan', 'random', 'textpro', 'photooxy']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
  'main': 'Main',
  'game': 'Game',
  'rpg': 'RPG Games',
  'xp': 'xp & Limit',
  'exp': 'Exp & Limit',
  'jadian': 'Jadian',
  'sticker': 'Sticker',
  'edukasi': 'Edukasi',
  'kerang': 'Kerang Ajaib',
  'random': 'Random',
  'quotes': 'Quotes',
  'audio': 'Audio',
  'maker': 'Maker',
  'admin': 'Admin',
  'group': 'Group',
  'premium': 'Premium',
  'internet': 'Internet',
  'nsfw': 'Nsfw',
  'hentai': 'Hentai',
  'bokep': 'Bokep',
  'anonymous': 'Anonymous Chat',
  'nulis': 'MagerNulis',
  'downloader': 'Downloader',
  'tools': 'Tools',
  'fun': 'Fun',
  'database': 'Database',
  'vote': 'Voting',
  'absen': 'Absen',
  'quran': 'Al Qur\'an',
  'jadibot': 'Jadi Bot',
  'owner': 'Owner',
  'host': 'Host',
  'advanced': 'Advanced',
  'info': 'Info',
  'nocategory': 'No Category',

  'trash': 'Trash',
  'convert': 'Converter',
  'bank': 'Bank',
  'store': 'store',
  'ephoto360': 'Ephoto360',
  'walpaper': 'WALPAPER',
  'image': 'IMAGE',
  'lagu': 'Lagu',
  'text': 'text',
  'work': 'work',
  'anime': 'Anime',
  'user': 'user',
  'canvas': 'canvas',
  'misc': 'misc',
  'primbon': 'Primbon',
  'Baileys': 'Baileys',
  'update': 'update',
  'asupan': 'ASUPAN', 
  'stalk': 'STALK',
  'islam' : 'ISLAMI',
  'virus' : 'Virus',
  'virtex' : 'Virtex',
  'bug' : 'Bug',
  'news': 'NEWS',
  'pribadi': 'Pribadi',
  'shortlink': 'SHORT LINK',
  'textpro': 'TEXT PRO', 
  'photooxy': 'PHOTO OXY', 
}
if (teks == 'absen') tags = {
  'absen': 'ABSEN',
  'vote': 'VOTING',
}
if (teks == 'anime') tags = {
'anime': 'ANIME',
}
if (teks == 'baileys') tags = {
'baileys': 'BAILEYS',
}
if (teks == 'sticker') tags = {
'sticker': 'STICKER',
}
if (teks == 'downloader') tags = {
'downloader': 'DOWNLOADER',
}
if (teks == 'xp') tags = {
'xp': 'XP & LIMIT',
'exp': 'EXP & LIMIT',
}
if (teks == 'fun') tags = {
'fun': 'FUN',
}
if (teks == 'trash') tags = {
  'trash': 'Trash'
  }
if (teks == 'lagu') tags = {
  'lagu': 'Lagu',
}
if (teks == 'store') tags = {
  'store': 'store',
}
if (teks == 'ephoto360') tags = {
  'ephoto360': 'Ephoto360',
}
if (teks == 'anonymous') tags = {
  'anonymous': 'Anonymous Chat',
}
if (teks == 'nocategory') tags = {
  'nocategory': 'nocategory',
}
if (teks == 'database') tags = {
  'database': 'Database',
}
if (teks == 'edukasi') tags = {
  'edukasi': 'Edukasi',
}
if (teks == 'misc') tags = {
  'misc': 'misc',
}
if (teks == 'convert') tags = {
  'convert': 'Converter',
}
if (teks == 'primbon') tags = {
  'primbon': 'primbon', 
}
if (teks == 'user') tags = {
  'user': 'User',
  'pribadi': 'Pribadi',
  'jadian': 'JADIAN',
}  
if (teks == 'game') tags = {
'game': 'GAME',
}
if (teks == 'group') tags = {
'group': 'GROUP',
'admin': 'Admin',
}
if (teks == 'admin') tags = {
  'admin': 'Admin'
}
if (teks == 'image') tags = {
'image': 'IMAGE',
'walpaper': 'WALPAPER',
}
if (teks == 'news') tags = {
  'news': 'NEWS',
}  
if (teks == 'info') tags = {
'info': 'INFO'
}
if (teks == 'internet') tags = {
'internet': 'INTERNET',
}
if (teks == 'islam') tags = {
'islam' : 'ISLAMI',
}
if (teks == 'virus') tags = {
'virus': 'Virus',
'bug': 'Bug',
'virtex': 'Virtex',
}
if (teks == 'kerang') tags = {
'kerang': 'KERANG',
}
if (teks == 'maker') tags = {
'maker': 'MAKER',
'text': 'MAKER TEXT',
'nulis': 'MagerNulis',
'logo': 'logo',
}
if (teks == 'owner') tags = {
  'owner': 'Owner',
  'host': 'Host',
  'advanced': 'Advanced'
}
if (teks == 'audio') tags = {
'audio': 'PENGUBAH SUARA',
}
if (teks == 'premium') tags = {
'premium': 'PREMIUM',
}
if (teks == 'quotes') tags = {
'quotes' : 'QUOTES',
}
if (teks == 'rpg') tags = {
'rpg': 'RPG',
'work': 'WORK',
'bank': 'Bank'
}
if (teks == 'stalk') tags = {
'stalk': 'STALK',
}
if (teks == 'shortlink') tags = {
'shortlink': 'SHORT LINK',
}
if (teks == 'tools') tags = {
'tools': 'TOOLS',
}
if (teks == 'nsfw') tags = {
'nsfw': 'NSFW', 
'hentai': 'Hentai',
'bokep': 'Bokep',
}
if (teks == 'asupan') tags = {
'asupan': 'ASUPAN', 
}
if (teks == 'random') tags = {
'random': 'RANDOM', 
}
if (teks == 'textpro') tags = {
'textpro': 'TEXT PRO', 
}
if (teks == 'photooxy') tags = {
'photooxy': 'PHOTO OXY', 
}
if (teks == 'canvas') tags = {
  'canvas': 'canvas', 
}
if (teks == 'update') tags = {
  'update': 'Next Update'
}

try {
  //let _package = JSON.parse(await fs.promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  let who
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
  else who = m.sender 
  let name = await conn.getName(m.sender)
  let platformm = platform()
  let tag = `wa.me/${m.sender.split('@')[0]}`
  m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

//━━━━━━━━[ piktur ]━━━━━━━━//
let sortedCmd = Object.entries(db.data.stats).map(([key, value]) => {
  return { ...value, name: key }
  }).map(toNumber('total')).sort(sort('total'))
      
  let all = 0;
  let sall = 0;
  for (let i of sortedCmd){
  all += i.total
  sall += i.success
  }
  let totalcmd = Object.values(plugins).length

/***************** TIME *********************/

//━━━━━━━━[ TIMER ]━━━━━━━━//
let d = new Date(new Date + 3600000)
let locale = 'id'

// d.getTimeZoneOffset()
// Offset -420 is 18.00
// Offset    0 is  0.00
// Offset  420 is  7.00
let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let wibh = moment.tz('Asia/Jakarta').format('HH')
let wibm = moment.tz('Asia/Jakarta').format('mm')
let wibs = moment.tz('Asia/Jakarta').format('ss')
let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
  if (process.send) {
    process.send('uptime')
    _muptime = await new Promise(resolve => {
    process.once('message', resolve)
    setTimeout(resolve, 1000)
  }) * 1000
}
let muptime = set.clockString(_muptime)
let uptime = set.clockString(_uptime)

//━━━━━━━━[ DATABASE ]━━━━━━━━//
let totalreg = Object.keys(db.data.users).length
let rtotalreg = Object.values(db.data.users).filter(user => user.registered == true).length
let { exp, limit, level, role, registered, money, } = db.data.users[m.sender]
let { min, xp, max } = xpRange(level, set.multiplier)
let mode = opts['self'] ? 'Private' : 'Publik'
let user = db.data.users[m.sender]
let prems = `${user.premium > 0 ? 'Premium': 'Free'}`

//━━━━━━━━[ SETTING HELP ]━━━━━━━━//
let help = Object.values(plugins).filter(plugin => !plugin.disabled).map(plugin => {
  return {
    help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
    tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
    prefix: 'customPrefix' in plugin,
    limit: plugin.limit,
    premium: plugin.premium,
    enabled: !plugin.disabled,
  }
})
//━━━━━━━━[ DEFAULT MENU ]━━━━━━━━//
//┃──〔  𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄  〕─⬣
//𝐈𝐍𝐅𝐎
// bg bg cara bikin yg udh besar gitu krk mana lah
const defaultMenu = {
  before: `
╭──〔  𝐓 𝐎 𝐃 𝐀 𝐘  〕─⬣
┃➵͜͡✪ 𝚃𝙾𝙳𝙰𝚈 : *%week %weton* 
┃➵͜͡✪ 𝙳𝙰𝚃𝙴 : *%date*
┃➵͜͡✪ 𝙳𝙰𝚃𝙴 𝙸𝚂𝙻𝙰𝙼𝙸𝙲 : *%dateIslamic*
┃
┃──〔  *TIME*  〕─⬣
┃➵͜͡✪ %wib WIB
┃➵͜͡✪ %wita WITA
┃➵͜͡✪ %wit WIT
┃
┃──〔  𝐈𝐍𝐅𝐎  〕─⬣
┃➵͜͡✪ Command total : %totalcmd*
┃➵͜͡✪ Command hit : %all*
┃➵͜͡✪ Command success : %sall*
╰─────────────⬣

╭──〔 *INFO CMD* 〕─⬣
│ *Ⓟ* = Premium
│ *Ⓛ* = Limit
╰─────────────⬣
%readmore`.trimStart(),
  header: '╭──〔 %category 〕─⬣',
  body: '│⫹⫺ %cmd %islimit %isPremium',
  footer: '╰─────────────⬣\n',
  after: `
*%npmname* | %version
${'```%npmdesc```'}
`,
}

//━━━━━━━━[ FAKE REPLY ]━━━━━━━━//
const fkontakk = {
  "key": {
    "participants":"0@s.whatsapp.net",
    "remoteJid": "status@broadcast",
    "fromMe": false,
    "id": "Halo"
  },
  "message": {
    "contactMessage": {
      "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${set.ucapan},;;;\nFN:${set.ucapan}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
    }
  },
  "participant": "0@s.whatsapp.net"
  }
  let fkontak = {
    key: {
      participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
    },
    message: {
      contactMessage: {
        displayName: set.namebot,
        //pake jid kalo who rsk
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${set.ucapan},;;;\nFN:${set.ucapan},\nitem1.TEL;waid=${who.split('@')[0]}:${who.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`,
        //jpegThumbnail: set.thumb,
        //thumbnail: set.thumb,
        //sendEphemeral: true
      }
    }
  }
//━━━━━━━━[ BAGIAN MENU ]━━━━━━━━//
if (teks == '404') {
  let caption = `╭───ꕥ ${set.namebot} ꕥ───
│💱 limit tersisa ${limit}
│🏰 Level ${level} [Xp: ${exp}]
│🔱 Pangkat ${role}
╰――————————————❑
╭─❑ 「 INFORMASI 」 ❑─
│⏰ Aktif selama ${uptime}
│🧩 Status Users : ${prems ? 'Premium 🌟': 'Gratisan'} 
│📂 Database ${rtotalreg} dari ${totalreg}
╰――————————————❑`
   const sections = [
    {
    title: `––––––『 MAIN 』––––––`,
      rows: [
       {title: `❗ │ Rules`, rowId: `.rules`, description: "User yang bijak selalu mematuhi Rules"},
       {title: `👑 │ Pemilik Bot`, rowId: `.owner`, description: "Menampilkan List owner BOT"},
       {title: `💌 │ Group Bot`, rowId: `.gcbot`, description: "Join Grup AzBoTz dong bang"},
  ]
    },{
    title: `––––––『 SUPPORT 』––––––`,
     rows: [
       {title: `🔖 │ SEWA`, rowId: `.sewa`, description: "Menampilkan list harga sewa BOT"},
       {title: `🌟 │ BUY PREMIUM`, rowId: `.premium`, description: "Menampilkan list harga premium"},
       {title: `💹 │ DONASI`, rowId: `.donasi`, description: 'Support BOT agar lebih fast respon'},
  ]
    },{
    title: `––––––『 MENU 』––––––`,
     rows: [
     {title: `💬 │ All`, rowId: `${_p}? all`, description: "Menampilkan Semua command BOT"},
     {title: `🌱 │ Rpg`, rowId: `${_p}? rpg`, description: "Game Epic Rpg!"},
     {title: `✨ │ Xp`, rowId: `${_p}? xp`, description: "Ayo tingkatkan pangkat mu!"},
     {title: `🎮 │ Game`, rowId: `${_p}? game`, description: "Gamenya seru seru lho >-<"},
     {title: `😂 │ Fun`, rowId: `${_p}? fun`, description: "Untuk bersenang-senang"},
     {title: `🐚 │ Kerang`, rowId: `${_p}? kerang`, description: "Tanyakan pada ketua club"},
     {title: `📑 │ Quotes`, rowId: `${_p}? quotes`, description: "Random Inspirasi"},
     {title: `⛩️ │ Anime`, rowId: `${_p}? anime`, description: "Kamu wibu ya bang?"},
     {title: `📰 │ News`, rowId: `${_p}? news`, description: "Berita & informasi terkini"},
     {title: `🔞 │ Nsfw`, rowId: `${_p}? nsfw`, description: "Tch, dasar sagne"},
     {title: `👁️‍🗨️ │ Stalker`, rowId: `${_p}? stalk`, description: "Intip sosial media seseorang"},
     {title: `🎭 │ Anonymous Chats`, rowId: `${_p}? anonymous`, description: "Bicara dengan orang tidak dikenal"},
     {title: `🗃️ │ Absen & voting`, rowId: `${_p}? absen`, description: "Menampilkan fitur absen dan voting"},
     {title: `🌎 │ Internet`, rowId: `${_p}? internet`, description: "Cari sesuatu diBOT"},
     {title: `📩 │ Downloaders`, rowId: `${_p}? downloader`, description: "Download sesuatu diBOT"},
     {title: `🎨 │ Stikers`, rowId: `${_p}? sticker`, description: "Buat Sticker diBOT"},
     {title: `🎧 │ Lagu`, rowId: `${_p}? lagu`, description: "list random lagu"},
     {title: `🧩 │ Random`, rowId: `${_p}? random`, description: "Untuk kamu yang lagi gabut/kesepian"},
     {title: `🎙️ │ Voice`, rowId: `${_p}? audio`, description: "Ubah Suara/Audio dengan Filter"},
     {title: `🗂️ │ Database`, rowId: `${_p}? database`, description: "Simpan sesuatu diBOT"},
     {title: `🖇️ │ ShortLink`, rowId: `${_p}? shortlink`, description: "Memperkecil jumlah huruf link"},
     {title: `🖼️ │ IMAGE`, rowId: `${_p}? image`, description: "Cari gambar atau walpaper"},
     {title: `🛠️ │ Tools`, rowId: `${_p}? tools`, description: "Mungkin tools ini bisa membantu?"},
     {title: `ℹ️ │ Info`, rowId: `${_p}? info`, description: "Info info BOT"},
    ]
  },{
  title: `––––––『 Menu Beta 』––––––`,
   rows: [
    {title: `│ Virus`, rowId: `${_p}? virus`, description: "Khusus user premium Vip"},
    {title: `│ user`, rowId: `${_p}? user`, description: "beta"},
    {title: `│ trash`, rowId: `${_p}? trash`, description: "fitur2 mati/error"},
    {title: `│ converter`, rowId: `${_p}? convert`, description: "coming"},
    {title: `│ Baileys`, rowId: `${_p}? baileys`, description: "coming soon"},
    {title: `🔝 update`, rowId: `${_p}? update`, description: "coming soon fitur"},
    {title: `│ primbon`, rowId: `${_p}? primbon`, description: "coming soon fitur"},
    {title: `│ Canvas`, rowId: `${_p}? canvas`, description: "coming soon fitur"},
    {title: `│ misc`, rowId: `${_p}? misc`, description: "coming soon fitur"},
    {title: `│ store`, rowId: `${_p}? store`, description: "coming soon fitur"},
    {title: `🧩 │ User`, rowId: `${_p}? user`, description: "comingsoon"},
    {title: `🎨 │ Edukasi`, rowId: `${_p}? edukasi`, description: "comingsoon"},
    {title: `❓ │ No Category`, rowId: `${_p}? nocategory`, description: "Fitur tanpa kategory!"},
    {title: `🔞 │ Asupan`, rowId: `${_p}? asupan`, description: "Tch, dasar sagne"},
  ]
},{
title: `––––––『 Maker 』––––––`,
 rows: [
    {title: `🎨 │ PhotoOxi`, rowId: `${_p}? photooxy`, description: "Menampilkan Photo Oxy Menu"},
    {title: `📝 │ Maker`, rowId: `${_p}? maker`, description: "Buat logo atau sebuah karya"},
    {title: `✒️ │ Text maker`, rowId: `${_p}? text`, description: "Buat teks tentang sesuatu"},
    {title: `✏️ │ Nulis`, rowId: `${_p}? nulis`, description: "Nulis kok males kak?"},
    {title: `🌈 │ TextPro`, rowId: `${_p}? textpro`, description: "Buat Gambar teks disini"},
    {title: `🌈 │ Ephoto360`, rowId: `${_p}? ephoto360`, description: "Buat Gambar teks disini"},
    ]
  },{
  title: `––––––『 Menu Khusus 』––––––`,
   rows: [
    {title: `👩‍💻 │ Owner`, rowId: `${_p}? owner`, description: "khusus pemilik/moderator bot"},
    {title: `👩‍💻 │ Admin`, rowId: `${_p}? admin`, description: "khusus admin group"},
    {title: `🏢 │ Group`, rowId: `${_p}? group`, description: "Hanya dapat digunakan di group"},
    {title: `🌟 │ Premium`, rowId: `${_p}? premium`, description: "khusus member premium"},
    {title: `🕌 │ Islam`, rowId: `${_p}? islam`, description: "Menu Exclusive Para Santri"},
    ]
  },{
  title: `––––––『 dll 』––––––`,
   rows: [
    {title: `📔 │ SCRIPT BOT`, rowId: `.sc`, description: `Source Code ${set.namebot}`},
    {title: `🛠️ │ ⟩» Status Bot`, rowId: `.botstat`, description: "Status dan informasi Bot"},
    {title: `⚡ │ ⟩» Speed Bot`, rowId: `.ping`, description: "Menampilkan kecepatan respon BOT"},
    {title: `🌸 │ ⟩» Contributor`, rowId: `.tqto`, description: "Yang membantu jalannya bot"},
    ]
   },
  ]
  const listMessage = {
  text: caption,
  footer: '📮 *Note:* Jangan spam kak',
  //mentions: await conn.parseMention(ucapan),
  title: `${set.ucapan} ${name}`,
  buttonText: `CLICK HERE ⎙`,
  sections
  }
    return conn.sendMessage(m.chat, listMessage, { quoted: fkontak, contextInfo:{ mentionedJid: [m.sender] }})
    //return conn.sendMessage(m.chat, listMessage, m)
  }    
    
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `Powered by https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      totalcmd,
      all,
      sall,
      webname: conn.browserDescription,
      webversion: conn.browserDescription,
      browser: conn.browserDescription,
      //personalchats: conn.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net')).map(v => v.jid).length,
      //groupschats: conn.chats.array.filter(v => v.jid.endsWith('g.us')).map(v => v.jid).length,      
      me: conn.getName(conn.user.jid),
      rtotalreg: Object.values(db.data.users).filter(user => user.registered == true).length,
      //npmname: _package.name,
      //npmdesc: _package.description,
      //version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      //github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, limit, platformm, mode, prems, money, name, wib, wit, wita, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
    /*
    conn.sendHydrated2(m.chat, text.trim(), set.wm, pp, set.web, 'Web', null, null, [
      ['Donate', '/donasi'],
      ['Speed', '/ping'],
      ['Owner', '/owner']
    ], m)
    */

        //await conn.send3TemplateButtonImg(m.chat, logo, text.trim(), `Aktif selama : ${uptime}`, `🏅Owner`, `${_p}owner`, `🎖ThanksTo`, `${_p}tqto`, `🎗  Donasi  🎗`, `${_p}infobot`)
        //conn.send3TemplateButtonImg(m.chat, await(await fetch(set.fla + teks)).buffer(), text.trim(), `Aktif selama : ${uptime}`, `🏅Owner`, `${_p}owner`, `🎖ThanksTo`, `${_p}tqto`, `🎗  Donasi  🎗`, `${_p}infobot`)
        /*   conn.sendHydrated(m.chat, text.trim(), 'Aktif selama : ${uptime}', null, 'https://chat.whatsapp.com/GpwaG5nvU2yCitgJ7c8o8f', 'Grup-Bot-AzBoTz', '', '', [
             ['Donate', '/donasi'],
              ['owner', '/creator'],
              ['Layanan Dan Jasa', '/store']
            ], m)
        */
            conn.sendButton(m.chat, text, set.titlebot, [['Ping', '.ping'],['Owner', '.owner'],['Donasi', '.donasi']], null, global.fakes, global.adReply)
        /*

              //-------DOC TEMPLATE
              const message = {
                jpegThumbnail: await(await fetch(set.fla)) + teks,
                caption: text.trim(),
                footer: `AzBoTz aktif selama : ${uptime}`,
                templateButtons: [
                    {
                        urlButton: {
                            displayText: `FOllOW ON INSTAGRAM`,
                            url: web
                        }
                    },
                    {
                        urlButton: {
                            displayText: '💌 Group Official',
                            url: gc
                        }
                    },
                    {
                        quickReplyButton: {
                            displayText: '🏅 Owner',
                            id: '.owner'
                        }
                    },
                    {
                        quickReplyButton: {
                            displayText: '🐾 Store',
                            id: '.store'
                        }
                    },
                    {
                        quickReplyButton: {
                            displayText: '📮 Donasi',
                            id: '.donasi'
                        }
                    },
                ]
            }
           conn.sendMessage(m.chat, message)
            */
        //------------------- BUTTON VID
        //conn.sendButton(m.chat, text, wm, 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4', [['Ping', '.ping'],['Owner', '.owner'],['Donasi', '.donasi']],fakes, { gifPlayback: true, contextInfo: { externalAdReply: {title: set.namebot, body: set.bottime, sourceUrl: set.ig, thumbnail: set.thumb }}})
        
  } catch (e) {
    conn.reply(m.chat, set.error)
    console.error(e)
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|listmenu|menubot|\?)$/i
handler.register = false
handler.exp = 3

export default handler

//━━━━━━━━[  JANGAN DI UBAH  ]━━━━━━━━//
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
      return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
  }
  else return a => a === undefined ? _default : a
}