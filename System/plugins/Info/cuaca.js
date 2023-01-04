import axios from 'axios'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who)
let namemu = await conn.getName(who)

if(!args[0]) throw "Masukkan Nama Lokasi"
  const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args[0]}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
  const res = await response
  const name = res.data.name
  const Country = res.data.sys.country
  const Weather= res.data.weather[0].description
  const Temperature = res.data.main.temp + '°C'
  const Minimum_Temperature= res.data.main.temp_min + '°C'
  const Maximum_Temperature= res.data.main.temp_max + '°C'
  const Humidity= res.data.main.humidity + '%'
  const Wind= res.data.wind.speed + 'km/h'

  let caption = `
🌸 Place: ${name}\n💮 Country: ${Country}\n🌈 Weather: ${Weather}\n🎋 Temperature: ${Temperature}\n💠 Minimum Temperature: ${Minimum_Temperature}\n📛 Maximum Temperature: ${Maximum_Temperature}\n💦 Humidity: ${Humidity}\n🎐 Wind: ${Wind}
`.trim()
        
conn.sendButton(m.chat, caption, set.wm, await(await fetch(set.thumb)).buffer(), [['🎀 Menu', '/menu']], m, { fileLength: set.fsizedoc, seconds: set.fsizedoc, contextInfo: {
        externalAdReply :{
        mediaUrl: set.web,
        mediaType: 2,
        description: set.wm, 
        title: '👋 Hai, ' + namemu + ' ' + set.ucapan,
        body: set.botdate,
        thumbnail: await(await fetch(pp)).buffer(),
        sourceUrl: 'https://api.openweathermap.org'
     }}
  })
}

handler.help = ['infocuaca <city>']
handler.tags = ['info']
handler.command = /^infocuaca|weather$/i
handler.limit = true

export default handler