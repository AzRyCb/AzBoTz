// thank you to ALLAH Swt
//tq nurutumo (creator) (mastah:v) 
//tq ariffb (stikerin) (mastah:v) 
//fa

gc1 = ''
gc2 = ''
gc3 = ''
global.linkGC = ['https://chat.whatsapp.com/GNOimnXOQoR10oOjCsadXZ', '']
global.owner = ['6285795035419']
global.kontak = ['6285795035419']
global.mods = ['6285795035419']
global.prems = ['6285795035419']
global.APIs = { // API Prefix
  // name: 'https://github.com/AzRyCb/AzBotz'
  nrtm: 'https://nurutomo.herokuapp.com', 
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'cb15ed422c71a2fb' (apikey kalian)
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'cb15ed422c71a2fb',
  'https://api.lolhuman.xyz': 'rey2k21',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
} //note sc gw enc beberapa di plugins dll ada lumayan kallo mau yang no enc beli //30k udah dapet N0 enc 100% ke wa.me/6285876902820

lolkey = 'rey2k21'
zekskey = 'apivinz'
xteamkey = 'Dawnfrostkey'
//xteam        MIMINETBOT
namaig = 'azrycb'
namagithub = 'AzRyCb'
kasihcaption = `Nih kak`
namakontak1 = 'Az'
namakontak2 = 'fahril'
caption = 'Nih Kak'

// Sticker WM
global.packname = 'By Az' // ganti aja
global.author = 'AzBotz' // ganti aja


bc = 'AzBotz' //Broadcast
footer = '\n©Az'
namabot = 'AzBotz'
namalu = 'Az'


// 
wait = '_*Tunggu Sebentar...*_'
global.wait = '_*Tunggu Sebentar...*_'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/GNOimnXOQoR10oOjCsadXZ'
global.nsfw = 'Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!\n“Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = '_*Server Error*_'

global.fla = 'https://flamingtext.com/net-fu/proxy_form.cgi?script=chrominium-logo&_loc=generate&imageoutput=true&script=water-logo&doScale=true&scaleWidth=500&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text='

// global image
global.image = 'https://i.ibb.co/TBVZ0YH/thumb.jpg' //thumbnail

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 36 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
