import fs, { watchFile, unwatchFile, readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'
import {createRequire} from 'module'
import axios from 'axios'
import fetch from 'node-fetch'
import Func from './lib/func.js'
import chalk from 'chalk'
// TODO: reduce global variabel usage
// let handler = (m, { conn, command, usedPrefix })

//=============『 Utama 』================== //
//users: db.data.users[m.sender],
//chat: db.data.chats[m.chat],
global.npm = {
fetch: fetch,
moment: moment,
chalk: chalk,
axios: axios,
Func: Func,
fs: fs,
//similarity: similarity,

}


//global.require = createRequire(import.meta.url)
global.wm = set.wm
global.set = {
  owner: [
    ['6285722037770', 'Developer', true],
    ['6285795035419'],
    // [number, dia creator/owner?/nama, dia developer?]
  ], // Put your number here

  web: 'https://github.com/AzRyCb', //ubah jadi website lu
  nomorbot: '6283879175089',
  nomorown: '6285722037770',
  mods: ['6285722037770'], // Want some help?
  namebot: 'AzBoTz-MD',
  nameown: '「 Oᴡɴᴇʀ 」',
  packname: 'Create by AzBoTz-MD',
  author: '+62 838-7917-5089',
  ownerjbot: ['6285722037770'],

  //setting
  timestamp: {
    start: Date.now()
  },

/*Donasi*/
saweria: "https://saweria.com/AzRyCb",
dana: "085795035419",
pulsa: "085722037770",
trakteer: "https://trakteer.id/AzRyCb",
paypal: "azry695@gmail.com",
gopay: "085722037770",
ovo: "085722037770",
pulsa2: "085795035419",

  openaikey: "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",
  lolkey: "ed78c137a46873c5b8e5fe3b",
  xteamkey: "HIRO",
  xckey: "7iyNa0qA",
  //zenzkey: '4ea1d2c75b65', //ganti jadi apikey lu kalau expired
  wm: 'Whatsapp bot multi-device',
  wm3: 'Powered by +6285722037770',
  wm2: '꒷︶꒷꒥꒷ ‧₊˚ ꒰ฅ˘օառɛʀ˘ฅ ꒱ ‧₊˚꒷︶꒷꒥꒷',
  multiplier: 69, // The higher, The harder levelup
  ephemeral: '7',// 86400 = 24jam, kalo ingin di hilangkan ganti '86400' jadi 'null' atau ''
  prems: JSON.parse(readFileSync('System/src/premium.json')), // Premium user has unlimited limit
  repo: 'https://github.com/AzRyCb/azbot.git',

  name: 'AzBoTz',
  dev: 'Az',
  desc: 'Whatsapp Bot Multi Device',
  browser: 'Firefox',
  pack: 'by azbot',
  auth: '',
  lib: 'baileys',
  gclog: "120363046304098301@g.us", 

  //link sosmed
  ig: 'https://www.instagram.com/notifikasi_pemberitahuan',
  gh: 'https://www.github.com/AzRyCb',
  gcbot: "https://chat.whatsapp.com/Ds5iMgmd6SA2zYQofP8AZN",
  dc: 'https://www.discord.com',
  nh: 'https://www.tiktok.com/@upload_file',
  fb: 'https://www.facebook.com/',
  yt: 'https://www.youtube.com/',

  //response
  botdate: `⫹⫺ Date :  ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}`,
  bottime: `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`,
  titlebot: `⫹⫺ Time Sever : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}\n⫹⫺ Date Server :  ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}`,
  error: `_*🚨 Maaf Fitur ini Sedang Error*_\nHarap laporkan hal ini`,
  wait: '⏳ Tunggu sebentar . . .',
  render: '*ʀᴇɴᴅᴇʀ!*',
  caption: 'Jangan lupa untuk donasi',
  clockString: clockString1,
  clockString2: clockString2,
  /*
  ucapan: ucapan,
  pickRandom: pickRandomm,
*/
  //gambar
  thumbnailUrl: [
    'https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg','https://telegra.ph/file/ac4928f0824a2a0492737.jpg',
    'https://telegra.ph/file/6359b013bc7e52c3b346f.jpg','https://telegra.ph/file/d43c89a5d2da72875ec05.jpg',
    'https://telegra.ph/file/7d6c0e35f9c8f52715541.jpg','https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg',
    'https://telegra.ph/file/55e5af5f33fbd57104187.jpg','https://telegra.ph/file/af236598456b95884bd15.jpg',
    'https://telegra.ph/file/de92ed4a729887ffc974c.jpg','https://telegra.ph/file/00ce42a193b1dbbf907d4.jpg'],
  fla: 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  qrgc: 'https://telegra.ph/file/97eec795fd58f4d658ac6.jpg',
  giflogo: 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4',
  logobot: readFileSync('System/src/img/chatbot.png'), // logo chatbot,
  thumb: "https://telegra.ph/file/6b4b8ae2ba7f244626a6d.jpg",
  logo: readFileSync('System/src/img/logo.jpg'),

  //tampilan
  fsizedoc: '10'.repeat(10),
  fpagedoc: '1'.repeat(5),
  //fsizedoc = '99999999999999' // default 10TB
  //fpagedoc = '999'
  doc: [
    'application/vnd.openxmlformats-officedocument.presentationml.presentation', 
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 
    'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'
  ].getRandom(),

  pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  pdf: 'application/pdf',
  rtf: 'text/rtf',
  zip: 'application/zip',
  apk: 'application/json',
  mpeg: 'audio/mpeg',

  ls: "┊",
  htki: "––––––『",
  htka: "』––––––",
  htjava: pickRandom(["⛶","❏","⫹⫺","☰","⎔","✦","⭔","⬟","⛊","⚝"]),
  dmenub: "┊•",
  dmenut: '❏─┅──┅〈',
  dmenub: '┊•',
  dmenub2: '┊',
  dmenuf: '┗┅────────┅✦',
  dashmenu: '┅────┅─❏ *𝐃𝐀𝐒𝐇𝐁𝐎𝐀𝐑𝐃* ❏─┅────┅',
  cmenut: '❏┅────┅『',
  cmenuh: '』┅────┅',
  cmenub: '┊✦ ',
  cmenuf: '┗──┅───────┅๑\n',
  cmenua: '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ',
  pmenus: pickRandom(["◈","➭","ଓ","⟆•","⳻⳻","•","↬","◈▻","⭑","ᯬ","◉","᭻","»","〆","々","⛥","✗","⚜","⚚","♪"]),
  emojis: pickRandom(["👑", "🎗", "️🗿", "🕹", "️💡", "🪄", "🎈", "🎊", "🔖", "📍", "❤", "‍🔥", "💤", "💭", "🕚", "💬", "🚩", "🎐", "🍃", "🌿", "🥀", "✨", "⚡", "☂️"]),
  flaaa: [
    "https://flamingtext.com/net-fu/proxy_form.cgi?script=chrominium-logo&_loc=generate&imageoutput=true&script=water-logo&doScale=true&scaleWidth=500&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text=",  
    "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
    "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
    "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
    "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
    "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=",
    "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=500&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text=",
    "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text="
  ],

  APIs: { // API Prefix
    // name: 'https://website'
    //amel: 'https://melcanz.com', 
    //xteam: 'https://api.xteam.xyz',
    dzx : "https://api.dhamzxploit.my.id",
    xcdr : "https://api-xcoders.site",
    neoxr : "https://api.neoxr.my.id",
    males: 'https://malesin.xyz',
    lolhuman: 'https://api.lolhuman.xyz',
    violetics : 'https://violetics.pw',
  },

  APIKeys: { // APIKey Here
    // 'https://website': 'apikey'
    //'https://api.xteam.xyz': 'd90a9e986e18778b',
    //'https://melcanz.com': 'EIr5QKC5',
    "https://api.neoxr.my.id" : "5VC9rvNx",
    "https://api-xcoders.site" : "7iyNa0qA",
    'https://api.lolhuman.xyz': 'bukanitucuy14315195',
    'https://violetics.pw' : 'beta',
  },
}

/*List Key
-Lolhuman-
'327a6596e4c4baa20c756132'
'bukanitucuy14315195'
'85faf717d0545d14074659ad'
'ed78c137a46873c5b8e5fe3b'

-XTEAM-
'5bd33b276d41d6b4'
'NezukoTachibana281207'

-Neoxr-
'5VC9rvNx'
*/
let _uptime = process.uptime() * 1000
let uptime = "Telah aktif selama: " + await set.clockString(_uptime)
/*
global.adReplyS = {
  fileLength: "999", seconds: "999",
    contextInfo: {
      forwardingScore: "999",
      externalAdReply: {
          showAdAttribution: true,
          title: "👋 " + Sapa() + Pagi(),
          body: uptime,
          mediaUrl: set.gcbot,
          description: set.web,
          previewType: "PHOTO",
          thumbnail: set.logo,
          sourceUrl: set.web,
      }
    }
  }

  global.adReply = {
  fileLength: "999", seconds: "999",
    contextInfo: {
      forwardingScore: "999",
      externalAdReply: {
          body: author,
          containsAutoReply: true,
          mediaType: 1,
          mediaUrl: sgc,
          renderLargerThumbnail: true,
          showAdAttribution: true,
          sourceId: "WudySoft",
          sourceType: "PDF",
          previewType: "PDF",
          sourceUrl: sgc,
          thumbnail: await fs.readFileSync("./thumbnail.jpg"),
          thumbnailUrl: logo,
          title: "👋 " + Sapa() + Pagi()
      }
    }
  }

  global.fakeig = {
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          mediaUrl: sig,
          mediaType: "VIDEO",
          description: "Follow: " + sig,
          title: "👋 " + Sapa() + Pagi(),
          body: author,
          thumbnailUrl: logo,
          sourceUrl: sgc
        }
      }
    }

    global.fakefb = {
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          mediaUrl: sfb,
          mediaType: "VIDEO",
          description: "Follow: " + sig,
          title: "👋 " + Sapa() + Pagi(),
          body: author,
          thumbnailUrl: logo,
          sourceUrl: sgc
        }
      }
    }

    global.faketik = {
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          mediaUrl: snh,
          mediaType: "VIDEO",
          description: "Follow: " + sig,
          title: "👋 " + Sapa() + Pagi(),
          body: author,
          thumbnailUrl: logo,
          sourceUrl: sgc
        }
      }
    }

    global.fakeyt = {
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          mediaUrl: syt,
          mediaType: "VIDEO",
          description: "Follow: " + sig,
          title: "👋 " + Sapa() + Pagi(),
          body: author,
          thumbnailUrl: logo,
          sourceUrl: sgc
        }
      }
    }
*/
global.adReply = {
  fileLength: set.fsizedoc, seconds: set.fsizedoc,
  contextInfo: {
    forwardingScore: set.fsizedoc,
    //mentionedJid: [user],
    //isForwarded: true, // ini biar ada tulisannya diteruskan berkali-kali
    externalAdReply: {
      showAdAttribution: true,
      containsAutoReply: true,
      title: set.ucapan,
      body: uptime,
      mediaUrl: set.gcbot,
      mediaType: 1,
      description: set.botdate,
      previewType: 'PHOTO',
      thumbnailUrl: set.thumb,
      thumbnail: set.logo,
      sourceUrl: set.web,
      renderLargerThumbnail: false,
      sourceId: Sapa(),
      sourceType: "PDF",
      previewType: "PDF",
    }
  }
}

global.set.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      role: '🏅',
      level: '🧬',
      limit: '🌌',
      health: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈',
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  },
  // inspired from https://github.com/Fokusdotid/Family-MD/blob/main/plugins/_role.js
  // https://github.com/BochilGaming/games-wabot/issues/389
  // https://github.com/BochilGaming/games-wabot/issues/32
  // Also thanks to github copilot for the idea of role name
  role(level) {
    level = parseInt(level)
    if (isNaN(level)) return { name: '', level: '' }
    // this code make config.js to be a more understandable code
    const role = [
      { name: 'Warrior V', level: 0 }, { name: 'Warrior IV', level: 4 }, { name: 'Warrior III', level: 8 }, { name: 'Warrior II', level: 12 }, { name: 'Warrior I', level: 16 },
      { name: 'Paladin V', level: 20 }, { name: 'Paladin IV', level: 24 }, { name: 'Paladin III', level: 28 }, { name: 'Paladin II', level: 32 }, { name: 'Paladin I', level: 36 },
      { name: 'Sorcerer V', level: 40 }, { name: 'Sorcerer IV', level: 44 }, { name: 'Sorcerer III', level: 48 }, { name: 'Sorcerer II', level: 52 }, { name: 'Sorcerer I', level: 56 },
      { name: 'Ranger V', level: 60 }, { name: 'Ranger IV', level: 64 }, { name: 'Ranger III', level: 68 }, { name: 'Ranger II', level: 72 }, { name: 'Ranger I', level: 76 },
      { name: 'Mage V', level: 80 }, { name: 'Mage IV', level: 84 }, { name: 'Mage III', level: 88 }, { name: 'Mage II', level: 92 }, { name: 'Mage I', level: 96 },
      { name: 'Cleric V', level: 100 }, { name: 'Cleric IV', level: 104 }, { name: 'Cleric III', level: 108 }, { name: 'Cleric II', level: 112 }, { name: 'Cleric I', level: 116 },
      { name: 'Thief V', level: 120 }, { name: 'Thief IV', level: 124 }, { name: 'Thief III', level: 128 }, { name: 'Thief II', level: 132 }, { name: 'Thief I', level: 136 },
      { name: 'Assassin V', level: 140 }, { name: 'Assassin IV', level: 144 }, { name: 'Assassin III', level: 148 }, { name: 'Assassin II', level: 152 }, { name: 'Assassin I', level: 156 },
      { name: 'Monk V', level: 160 }, { name: 'Monk IV', level: 164 }, { name: 'Monk III', level: 168 }, { name: 'Monk II', level: 172 }, { name: 'Monk I', level: 176 },
      { name: 'Bard V', level: 180 }, { name: 'Bard IV', level: 184 }, { name: 'Bard III', level: 188 }, { name: 'Bard II', level: 192 }, { name: 'Bard I', level: 196 },
      { name: 'Necromancer V', level: 200 }, { name: 'Necromancer IV', level: 204 }, { name: 'Necromancer III', level: 208 }, { name: 'Necromancer II', level: 212 }, { name: 'Necromancer I', level: 216 },
      { name: 'Warlock V', level: 220 }, { name: 'Warlock IV', level: 224 }, { name: 'Warlock III', level: 228 }, { name: 'Warlock II', level: 232 }, { name: 'Warlock I', level: 236 },
      { name: 'Wizard V', level: 240 }, { name: 'Wizard IV', level: 244 }, { name: 'Wizard III', level: 248 }, { name: 'Wizard II', level: 252 }, { name: 'Wizard I', level: 256 },
      { name: 'Sage V', level: 260 }, { name: 'Sage IV', level: 264 }, { name: 'Sage III', level: 268 }, { name: 'Sage II', level: 272 }, { name: 'Sage I', level: 276 },
      { name: 'Priest V', level: 280 }, { name: 'Priest IV', level: 284 }, { name: 'Priest III', level: 288 }, { name: 'Priest II', level: 292 }, { name: 'Priest I', level: 296 },
      { name: 'Rogue V', level: 300 }, { name: 'Rogue IV', level: 304 }, { name: 'Rogue III', level: 308 }, { name: 'Rogue II', level: 312 }, { name: 'Rogue I', level: 316 },
      { name: 'Brawler V', level: 320 }, { name: 'Brawler IV', level: 324 }, { name: 'Brawler III', level: 328 }, { name: 'Brawler II', level: 332 }, { name: 'Brawler I', level: 336 },
      { name: 'Archer V', level: 340 }, { name: 'Archer IV', level: 344 }, { name: 'Archer III', level: 348 }, { name: 'Archer II', level: 352 }, { name: 'Archer I', level: 356 },
      { name: 'Sniper V', level: 360 }, { name: 'Sniper IV', level: 364 }, { name: 'Sniper III', level: 368 }, { name: 'Sniper II', level: 372 }, { name: 'Sniper I', level: 376 },
      { name: 'Ninja V', level: 380 }, { name: 'Ninja IV', level: 384 }, { name: 'Ninja III', level: 388 }, { name: 'Ninja II', level: 392 }, { name: 'Ninja I', level: 396 },
      { name: 'Samurai V', level: 400 }, { name: 'Samurai IV', level: 404 }, { name: 'Samurai III', level: 408 }, { name: 'Samurai II', level: 412 }, { name: 'Samurai I', level: 416 },
      { name: 'Berserker V', level: 420 }, { name: 'Berserker IV', level: 424 }, { name: 'Berserker III', level: 428 }, { name: 'Berserker II', level: 432 }, { name: 'Berserker I', level: 436 },
      { name: 'Legend V', level: 440 }, { name: 'Legend IV', level: 444 }, { name: 'Legend III', level: 448 }, { name: 'Legend II', level: 452 }, { name: 'Legend I', level: 456 },
      { name: 'Champion V', level: 460 }, { name: 'Champion IV', level: 464 }, { name: 'Champion III', level: 468 }, { name: 'Champion II', level: 472 }, { name: 'Champion I', level: 476 },
      { name: 'Grandmaster V', level: 480 }, { name: 'Grandmaster IV', level: 484 }, { name: 'Grandmaster III', level: 488 }, { name: 'Grandmaster II', level: 492 }, { name: 'Grandmaster I', level: 496 },
      { name: 'Elder V', level: 500 }, { name: 'Elder IV', level: 504 }, { name: 'Elder III', level: 508 }, { name: 'Elder II', level: 512 }, { name: 'Elder I', level: 516 },
      { name: 'Immortal V', level: 520 }, { name: 'Immortal IV', level: 524 }, { name: 'Immortal III', level: 528 }, { name: 'Immortal II', level: 532 }, { name: 'Immortal I', level: 536 },
      { name: 'Nephalem V', level: 540 }, { name: 'Nephalem IV', level: 544 }, { name: 'Nephalem III', level: 548 }, { name: 'Nephalem II', level: 552 }, { name: 'Nephalem I', level: 556 },
      { name: 'Eternal V', level: 560 }, { name: 'Eternal IV', level: 564 }, { name: 'Eternal III', level: 568 }, { name: 'Eternal II', level: 572 }, { name: 'Eternal I', level: 576 },
      { name: 'Neptune V', level: 580 }, { name: 'Neptune IV', level: 584 }, { name: 'Neptune III', level: 588 }, { name: 'Neptune II', level: 592 }, { name: 'Neptune I', level: 596 },
      { name: 'Pluto V', level: 600 }, { name: 'Pluto IV', level: 604 }, { name: 'Pluto III', level: 608 }, { name: 'Pluto II', level: 612 }, { name: 'Pluto I', level: 616 },
      { name: 'Eris V', level: 620 }, { name: 'Eris IV', level: 624 }, { name: 'Eris III', level: 628 }, { name: 'Eris II', level: 632 }, { name: 'Eris I', level: 636 },
      { name: 'Ascension V', level: 640 }, { name: 'Ascension IV', level: 644 }, { name: 'Ascension III', level: 648 }, { name: 'Ascension II', level: 652 }, { name: 'Ascension I', level: 656 },
      { name: 'Elysium V', level: 660 }, { name: 'Elysium IV', level: 664 }, { name: 'Elysium III', level: 668 }, { name: 'Elysium II', level: 672 }, { name: 'Elysium I', level: 676 },
      { name: 'Ether V', level: 680 }, { name: 'Ether IV', level: 684 }, { name: 'Ether III', level: 688 }, { name: 'Ether II', level: 692 }, { name: 'Ether I', level: 696 },
      { name: 'Gaea V', level: 700 }, { name: 'Gaea IV', level: 704 }, { name: 'Gaea III', level: 708 }, { name: 'Gaea II', level: 712 }, { name: 'Gaea I', level: 716 },
      { name: 'Hades V', level: 720 }, { name: 'Hades IV', level: 724 }, { name: 'Hades III', level: 728 }, { name: 'Hades II', level: 732 }, { name: 'Hades I', level: 736 },
      { name: 'Heimdall V', level: 740 }, { name: 'Heimdall IV', level: 744 }, { name: 'Heimdall III', level: 748 }, { name: 'Heimdall II', level: 752 }, { name: 'Heimdall I', level: 756 },
      { name: 'Hyperion V', level: 760 }, { name: 'Hyperion IV', level: 764 }, { name: 'Hyperion III', level: 768 }, { name: 'Hyperion II', level: 772 }, { name: 'Hyperion I', level: 776 },
      { name: 'Iris V', level: 780 }, { name: 'Iris IV', level: 784 }, { name: 'Iris III', level: 788 }, { name: 'Iris II', level: 792 }, { name: 'Iris I', level: 796 },
      { name: 'Jupiter V', level: 800 }, { name: 'Jupiter IV', level: 804 }, { name: 'Jupiter III', level: 808 }, { name: 'Jupiter II', level: 812 }, { name: 'Jupiter I', level: 816 },
      { name: 'Kronos V', level: 820 }, { name: 'Kronos IV', level: 824 }, { name: 'Kronos III', level: 828 }, { name: 'Kronos II', level: 832 }, { name: 'Kronos I', level: 836 },
      { name: 'Lilith V', level: 840 }, { name: 'Lilith IV', level: 844 }, { name: 'Lilith III', level: 848 }, { name: 'Lilith II', level: 852 }, { name: 'Lilith I', level: 856 },
      { name: 'Maelstrom V', level: 860 }, { name: 'Maelstrom IV', level: 864 }, { name: 'Maelstrom III', level: 868 }, { name: 'Maelstrom II', level: 872 }, { name: 'Maelstrom I', level: 876 },
      { name: 'Nova V', level: 880 }, { name: 'Nova IV', level: 884 }, { name: 'Nova III', level: 888 }, { name: 'Nova II', level: 892 }, { name: 'Nova I', level: 896 },
      { name: 'Odin V', level: 900 }, { name: 'Odin IV', level: 904 }, { name: 'Odin III', level: 908 }, { name: 'Odin II', level: 912 }, { name: 'Odin I', level: 916 },
      { name: 'Osiris V', level: 920 }, { name: 'Osiris IV', level: 924 }, { name: 'Osiris III', level: 928 }, { name: 'Osiris II', level: 932 }, { name: 'Osiris I', level: 936 },
      { name: 'Poseidon V', level: 940 }, { name: 'Poseidon IV', level: 944 }, { name: 'Poseidon III', level: 948 }, { name: 'Poseidon II', level: 952 }, { name: 'Poseidon I', level: 956 },
      { name: 'Ragnarok V', level: 960 }, { name: 'Ragnarok IV', level: 964 }, { name: 'Ragnarok III', level: 968 }, { name: 'Ragnarok II', level: 972 }, { name: 'Ragnarok I', level: 976 },
      { name: 'Saturn V', level: 980 }, { name: 'Saturn IV', level: 984 }, { name: 'Saturn III', level: 988 }, { name: 'Saturn II', level: 992 }, { name: 'Saturn I', level: 996 },
      { name: 'Titan V', level: 1000 }, { name: 'Titan IV', level: 1004 }, { name: 'Titan III', level: 1008 }, { name: 'Titan II', level: 1012 }, { name: 'Titan I', level: 1016 },
      { name: 'Uranus V', level: 1020 }, { name: 'Uranus IV', level: 1024 }, { name: 'Uranus III', level: 1028 }, { name: 'Uranus II', level: 1032 }, { name: 'Uranus I', level: 1036 },
      { name: 'Venus V', level: 1040 }, { name: 'Venus IV', level: 1044 }, { name: 'Venus III', level: 1048 }, { name: 'Venus II', level: 1052 }, { name: 'Venus I', level: 1056 },
      { name: 'Zeus V', level: 1060 }, { name: 'Zeus IV', level: 1064 }, { name: 'Zeus III', level: 1068 }, { name: 'Zeus II', level: 1072 }, { name: 'Zeus I', level: 1076 },
    ]

    return role.reverse().find(role => level >= role.level)
  }
}

function clockString1(ms) {
  let h = isNaN(ms) ? '-' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '-' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '-' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function clockString2(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}
/*
function ucapan() {
	let waktunya = moment.tz('Asia/Jakarta').format('HH')
	let ucapin = 'Halo'
	if(waktunya >= 1) {
		ucapin = 'Selamat Pagi 🗿'
	}
	if(waktunya >= 4) {
		ucapin = 'Selamat pagi 🌄'
	}
	if(waktunya > 10) {
		ucapin = 'Selamat siang ☀️'
	}
	if(waktunya >= 15) {
		ucapin = 'Selamat sore 🌅'
	}
	if(waktunya >= 18) {
		ucapin = 'Selamat malam 🌙'
	}
	if(waktunya >= 24) {
		ucapin = 'Selamat Begadang 🗿'
	}
	return ucapin
}

function pickRandom(list) {
	return list[Math.floor(Math.random() * list.length)]
}
*/
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

/* Selamat Pagi */
function Pagi() {
	let waktunya = moment.tz("Asia/Jakarta").format("HH")
	let ucapin = "Selamat malam 🌙"
	if(waktunya >= 1) {
		ucapin = "Selamat Pagi 🗿"
	}
	if(waktunya >= 4) {
		ucapin = "Selamat pagi 🌄"
	}
	if(waktunya > 10) {
		ucapin = "Selamat siang ☀️"
	}
	if(waktunya >= 15) {
		ucapin = "Selamat sore 🌅"
	}
	if(waktunya >= 18) {
		ucapin = "Selamat malam 🌙"
	}
	if(waktunya >= 24) {
		ucapin = "Selamat Begadang 🗿"
	}
	return ucapin
}

/* Randomizer */
function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
  
  /* Apa Kabar */
function Sapa() {
  let Apa = pickRandom(["Apa kabar ", "Halo ", "Hai "])
  return Apa
  }
  
  /* Fake Reply */
  function Fakes() {
let Org = pickRandom(["0", "628561122343", "6288906250517"])
let Hai = pickRandom(["Apa kabar ", "Halo ", "Hai "])
let Sarapan = "👋 " + Hai + Pagi()
let Thum = "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEYARgMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAAAAwIEBQEGAQEBAQEAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAADEnCzTm0o6l9dSQ2tZIqAZp3lgW3R0F84n1eWZAxdnDpHLdVh6N6pToxM0GdmXql5xOhCOrw0bnmvQzTeRomNX7G5edD0dcDD9EE2UwlzkBrmwBf/EACkQAAICAQMDAwMFAAAAAAAAAAECAAMRBCExEBJBBRMiIFFhIzIzQnH/2gAIAQEAAT8AlaF2xDUi4UcmfFBtExx5j1r3DbmPRvsYylTg9UsFagDmG5i2YXc+YLHByDPefIJgvyRkSwrYCR9HY2cAGNRZ2rhDFpfO6njrkjrp0V3+XgRbFf8AbU0pwUG0tQdhjCr+1bH8y3HeSvHQdNE4S9SYtiZyvBilQISCIzDtAwJ6iEUIEAmDjPiDpQ3bah/M9pTuJgKIVyJ7GeZ6hhbVQcAQsBUF8k5i9MzQ6lbqgCfkIQTBmOyopYzVWi21mHRYnppx+o2DL9AKaO7OTKLyrVqowc7mLZ94bV8TVtmlsmFecbgQROJzfPUiRSJQM3J/vXXfwGaMhmNZGzS1PbtZfsZUJ//EABgRAAMBAQAAAAAAAAAAAAAAAAABETAg/9oACAECAQE/AEVFHMbi+P/EABwRAAEEAwEAAAAAAAAAAAAAACAAAQIREBIxQf/aAAgBAwEBPwA6CorWL+gwxT8z/9k="
		let fpayment = {
				key: {
					participant: Org + "@s.whatsapp.net", remoteJid: "status@broadcast"
				},
				message: {
					requestPaymentMessage: {
						currencyCodeIso4217: "USD",
						amount1000: "1000",
						requestFrom: Org + "@s.whatsapp.net",
						noteMessage: {
							extendedTextMessage: {
								text: Sarapan
							}
						},
						expiryTimestamp: "1000",
						amount: {
							value: "1000",
							offset: "1000",
							currencyCode: "USD"
						}
					}
				}
			}
			let fpoll = {
			key: {
				participant: Org + "@s.whatsapp.net", remoteJid: "status@broadcast"
			},
			message: {
				pollCreationMessage: {
					name: Sarapan
				}
			}
		}
		let ftroli = {
			key: {
				participant: Org + "@s.whatsapp.net", remoteJid: "status@broadcast"
			},
			message: {
				orderMessage: {
					itemCount: "1000",
					status: 1,
					surface: 1,
					message: `𝗧 𝗜 𝗠 𝗘 : ${moment.tz("Asia/Makassar").format("HH:mm:ss")}`,
					orderTitle: Sarapan,
					sellerJid: Org + "@s.whatsapp.net"
				}
			}
		}
		let fkontak = {
			key: {
				participant: Org + "@s.whatsapp.net", remoteJid: "status@broadcast"
			},
			message: {
				contactMessage: {
					displayName: Sarapan,
					vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${Sarapan},;;;\nFN:${Sarapan},\nitem1.TEL;waid=${nomorown.split("@")[0]}:${nomorown.split("@")[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`,
					jpegThumbnail: Thum,
					thumbnail: Thum,
					sendEphemeral: true
				}
			}
		}
		let fvn = {
			key: {
				participant: Org + "@s.whatsapp.net", remoteJid: "status@broadcast"
			},
			message: {
				audioMessage: {
					mimetype: "audio/ogg; codecs=opus",
					seconds: "1000",
					ptt: true
				}
			}
		}
		let fvid = {
			key: {
				participant: Org + "@s.whatsapp.net", remoteJid: "status@broadcast"
			},
			message: {
				videoMessage: {
					title: Sarapan,
					h: Sarapan,
					seconds: "1000",
					caption: Sarapan,
					jpegThumbnail: Thum
				}
			}
		}
		let ftextt = {
			key: {
				participant: Org + "@s.whatsapp.net", remoteJid: "status@broadcast"
			},
			message: {
				extendedTextMessage: {
					text: Sarapan,
					title: `𝗧 𝗜 𝗠 𝗘 : ${moment.tz("Asia/Makassar").format("HH:mm:ss")}`,
					jpegThumbnail: Thum
				}
			}
		}
		let fliveLoc = {
			key: {
				participant: Org + "@s.whatsapp.net", remoteJid: "status@broadcast"
			},
			message: {
				liveLocationMessage: {
					caption: Sarapan,
					h: `𝗧 𝗜 𝗠 𝗘 : ${moment.tz("Asia/Makassar").format("HH:mm:ss")}`,
					jpegThumbnail: Thum
				}
			}
		}
		let ftoko = {
			key: {
				participant: Org + "@s.whatsapp.net", remoteJid: "status@broadcast"
			},
			message: {
				productMessage: {
					product: {
						productImage: {
							mimetype: "image/jpeg",
							jpegThumbnail: Thum
						},
						title: Sarapan,
						description: `𝗧 𝗜 𝗠 𝗘 : ${moment.tz("Asia/Makassar").format("HH:mm:ss")}`,
						currencyCode: "USD",
						priceAmount1000: "1000",
						retailerId: "Ghost",
						productImageCount: 1
					},
					businessOwnerJid: Org + "@s.whatsapp.net"
				}
			}
		}
		let fdocs = {
			key: {
				participant: Org + "@s.whatsapp.net", remoteJid: "status@broadcast"
			},
			message: {
				documentMessage: {
					title: Sarapan,
					jpegThumbnail: Thum
				}
			}
		}
		let fgif = {
			key: {
				participant: Org + "@s.whatsapp.net", remoteJid: "status@broadcast"
			},
			message: {
				videoMessage: {
					title: Sarapan,
					h: Sarapan,
					seconds: "1000",
					gifPlayback: true,
					caption: `𝗧 𝗜 𝗠 𝗘 : ${moment.tz("Asia/Makassar").format("HH:mm:ss")}`,
					jpegThumbnail: Thum
				}
			}
		}
		return pickRandom([fdocs, fgif, fkontak, fliveLoc, fpayment, fpoll, ftextt, ftoko, ftroli, fvid, fvn])
		}
