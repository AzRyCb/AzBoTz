import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
if (!args[0]) throw 'Masukkan Link'
try {
    let listSections = []
	listSections.push(['No. ', [
          ['Metode A', usedPrefix + command + ' ' + args[0] + ' a', '\n⌚ *By:* ' + set.author],
          ['Metode B', usedPrefix + command + ' ' + args[0] + ' b', '\n⌚ *By:* ' + set.author],
          ['Metode C', usedPrefix + command + ' ' + args[0] + ' c', '\n⌚ *By:* ' + set.author]
                  ]])
        if (args[0]) return conn.sendList(m.chat, '––––––『 📺 Tiktok Search 🔎 』––––––', `⚡ Silakan pilih Tiktok Search di tombol di bawah...\n*Teks yang anda kirim:* ${args[0]}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, set.wm, `☂️ Tiktok Search Disini ☂️`, listSections, m)

if (args[1] == 'a') {
  let res = await fetch(`https://api.lolhuman.xyz/api/tiktok?apikey=${set.lolkey}&url=${args[0]}`)
    let json = await res.json()
    let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
    conn.send2ButtonVid(m.chat, json.result.link, txt, set.wm, `No Wm`, `.tiktoknowm ${args[0]}`, `Audio`, `${usedPrefix}tiktokaudio ${args[0]}`, fakes, adReply)
    }
    if (args[1] == 'b') {
    let res = await fetch(`https://api.lolhuman.xyz/api/tiktok2?apikey=${set.lolkey}&url=${args[0]}`)
    let json = await res.json()
    let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
    conn.send2ButtonVid(m.chat, json.result.link, txt, set.wm, `No Wm`, `.tiktoknowm ${args[0]}`, `Audio`, `${usedPrefix}tiktokaudio ${args[0]}`, fakes, adReply)
    }
    if (args[1] == 'c') {
    let res = await fetch(`https://api.lolhuman.xyz/api/tiktok3?apikey=${set.lolkey}&url=${args[0]}`)
    let json = await res.json()
    let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
    conn.send2ButtonVid(m.chat, json.result.link, txt, set.wm, `No Wm`, `.tiktoknowm ${args[0]}`, `Audio`, `${usedPrefix}tiktokaudio ${args[0]}`, fakes, adReply)
    }
    } catch (e) {
    throw e
    }
}
handler.help = ['tiktoknowm'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tt|tiktok)nowm(dl)?(download(er)?)?$/i
export default handler
