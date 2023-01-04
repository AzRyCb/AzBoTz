import fetch from 'node-fetch'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let frep = { contextInfo: { externalAdReply: {title: set.wm, body: set.ucapan, sourceUrl: set.web, thumbnail: set.thumb}}}

if (command == 'urlscan') {
if (!text) throw `Masukkan link`
let json = await fetch(`https://urlscan.io/api/v1/search/?q=${text}`)
        let jsons = await json.json()
        let caption = jsons.results.map((x, index) => {
        return `*Result:* ke - ${1 + index}\n
*visibility:* ${x.task.visibility}
*method:* ${x.task.method}
*domain:* ${x.task.domain}
*time:* ${x.task.time}
*uuid:* ${x.task.uuid}
*url:* ${x.task.url}
*uniqIPs:* ${x.stats.uniqIPs}
*uniqCountries:* ${x.stats.uniqCountries}
*dataLength:* ${x.stats.dataLength}
*encodedDataLength:* ${x.stats.encodedDataLength}
*country:* ${x.page.country}
*ip:* ${x.page.ip}
*url:* ${x.page.url}
*result:* ${x.result}`.trim()
    }).join('\n\n')
        await conn.reply(m.chat, caption, m, frep)
}

if (command == 'fotoduck') {
  let res = await fetch(`https://random-d.uk/api/random`)
  let x = await res.json()
  await conn.sendButton(m.chat, `*Duck:*
  ${x.message}`, set.wm, x.url, [
                ['Next', `${usedPrefix + command}`]
            ], fakes, adReply)
}

if (command == 'fotobear') {
let nih = `Contoh:\n${usedPrefix + command} lebar tinggi\n${usedPrefix + command} 600 600`
if (!args[0]) throw nih
if (!args[1]) throw nih
  let res = `https://placebear.com/${args[0]}/${args[1]}`
  await conn.sendButton(m.chat, `*Bear:*
  ${args[0]}`, set.wm, res, [
                ['Next', `${usedPrefix + command}`]
            ], fakes, adReply)
}

if (command == 'fotodog') {
let nih = `Contoh:\n${usedPrefix + command} lebar tinggi\n${usedPrefix + command} 600 600`
if (!args[0]) throw nih
if (!args[1]) throw nih
  let res = `https://place.dog/${args[0]}/${args[1]}`
  await conn.sendButton(m.chat, `*Dog:*
  ${args[0]}`, set.wm, res, [
                ['Next', `${usedPrefix + command}`]
            ], fakes, adReply)
}

if (command == 'fotodog2') {
  let res = await fetch(`https://random.dog/woof.json`)
  let x = await res.json()
  await conn.sendButton(m.chat, `*Dog:*
  ${command}`, set.wm, x.url, [
                ['Next', `${usedPrefix + command}`]
            ], fakes, adReply)
}

if (command == 'fotodog3') {
  let res = await fetch(`https://dog.ceo/api/breeds/image/random`)
  let x = await res.json()
  await conn.sendButton(m.chat, `*Dog:*
  ${command}`, set.wm, x.message, [
                ['Next', `${usedPrefix + command}`]
            ], fakes, adReply)
}

if (command == 'fotofox') {
  let res = await fetch(`https://randomfox.ca/floof/`)
  let x = await res.json()
  await conn.sendButton(m.chat, `*Fox:*
  ${x.link}`, set.wm, x.image, [
                ['Next', `${usedPrefix + command}`]
            ], fakes, adReply)
}

if (command == 'fotoshibe') {
  let res = await fetch(`https://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true`)
  let x = await res.json()
  await conn.sendButton(m.chat, `*Shibe:*
  ${command}`, set.wm, x.getRandom(), [
                ['Next', `${usedPrefix + command}`]
            ], fakes, adReply)
}

if (command == 'kitten') {
let nih = `Contoh:\n${usedPrefix + command} lebar tinggi\n${usedPrefix + command} 600 600`
if (!args[0]) throw nih
if (!args[1]) throw nih
  let res = 'https://placekitten.com/' + Number(args[0]) + '/' + Number(args[1])
  await conn.sendButton(m.chat, `*Kitten:*
  ${command}`, set.wm, res, [
                ['Next', `${usedPrefix + command}`]
            ], fakes, adReply)
}

if (command == 'drinks') {
  let res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
  let x = await res.json()
  await conn.sendButton(m.chat, `*drinks:*\n
  *idDrink:* ${x.drinks[0].idDrink}
  *Drink:* ${x.drinks[0].strDrink}
  *Category:* ${x.drinks[0].strCategory}
  *Glass:* ${x.drinks[0].strGlass}
  *Instructions:* ${x.drinks[0].strInstructions}`, set.wm, x.drinks[0].strDrinkThumb, [
                ['Next', `${usedPrefix + command}`]
            ], fakes, adReply)
}
/*
if (command == 'rules') {
let caption = `${set.htki} *RULES* ${set.htka}

_Kebijakan privasi atau Private without being in public_



• *Kebijakan Privasi:*
1. WhatsApp Bot tidak akan merekam data riwayat chat user.
2. WhatsApp Bot tidak akan menyebarkan nomor users.
3. WhatsApp Bot tidak akan menyimpan media yang dikirimkan oleh users.
4. WhatsApp Bot tidak akan menyalah gunakan data data users.
5. Owner WhatsApp Bot berhak melihat data riwayat chat users.
6. Owner WhatsApp Bot berhak melihat status users.
7. Owner WhatsApp Bot dapat melihat riwayat chat, dan media yang dikirimkan users.

• Jika ada bug/eror di website kami saya mohon untuk Report nya, tanpa biaya dan aman

_Cara penggunaan ${set.namebot} Agar terhindar dari Suspand_

• *Peraturan WhatsApp Bot:*
1. Users dilarang menelpon maupun memvideo call nomor bot.
2. Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3. Users diharap tidak melakukan spam dalam penggunaan bot.
4. Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi Owner.
5. Users diharap untuk tidak menyalah gunakan fitur fitur bot.

• *Note:*
1. Jika ada yang menjual/beli/sewa bot atas nomor ini, harap segera hubungi owner!
2. Jika ingin donasi bisa langsung aja ya social payment Dana 
3. Ketik .sewa Jika Ingin SewaBot 

•Agar terhindar dari Suspand/Ban kalian bisa membaca juga di Peraturan kami.

•Perlu kalian tahu bahwa kami menjaga Privasi dari data-data anda!

• *Syarat Ketentuan WhatsApp Bot:*

1. WhatsApp Bot akan keluar dari group jika ada salah satu member melanggar peraturan.
2. WhatsApp Bot dapan mem-ban users secara sepihak terlepas dari users salah atau tidak.
3. WhatsApp Bot tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.
4. WhatsApp Bot akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
5. WhatsApp Bot bertanggung jawab atas kesalahan fatal dalam programing maupun owner.
`
await conn.sendButton(m.chat, caption, set.wm, `${set.fla + command}`, [
                ['Ok!', `${usedPrefix}tts id Oke`]
            ], fakes, adReply)
         }
         */
if (command == 'repeat') {
if (!args[0]) throw `Cth. .repeat 7|Hai`
let urut = text.split`|`
let string = '\n' + urut[1]
let count = urut[0]
let caption = string.repeat(count);
await conn.reply(m.chat, caption, m, frep)
         }

if (command == 'say') {
if (!args[0]) throw `Use example .${command} halo`
  conn.reply(m.hat, `${text}`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})
         }
                  
if (command == 'repeat2') {
if (!args[0]) throw `Cth. .repeat2 7|Hai`
let urut = text.split`|`
let caption = '';
let i = 1;
while (i < `${urut[0]}`) {
  caption += '\n' + i + ' ' + `${urut[1]}`;
  i++;
}
await conn.reply(m.chat, caption, m, frep)
         }

if (command == 'dmpsearch') {
if (!text) throw `Masukkan Teks`
let res = await fetch(`https://psbdmp.ws/api/v3/search/${text}`)
let xx = await res.json()
let v = xx.data
  let teks = v.map(v => {
  `
*Result:*\n
*ID:* ${v.id}
*length:* ${v.length}
*time:* ${v.time}
*text:* ${v.text}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //conn.reply(m.hat, teks)
  await conn.sendButton(m.chat, teks, set.wm, set.fla + 'Dmp', [
                ['dmpdown!', `${usedPrefix}dmpdown`]
            ], fakes, adReply)
}

if (command == 'dmpdown') {
if (!text) throw `Masukkan ID \n*Cth ID:* on0uMeNd`
let json = await fetch(`https://psbdmp.ws/api/v3/dump/${text}?key=6143730c1db586446444f0ec92799891`)
        let x = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*\n`
        caption += `*Result:*\n
*ID:* ${x.id}
*length:* ${x.length}
*time:* ${x.date}
*content:* ${x.content}
  `
        await conn.reply(m.chat, caption, m, frep)
}
/*
if (command == 'gacha') {
if (!text) throw `Masukkan ID
${usedPrefix + command} indo

*List*
• ppc
• indo
• korea
• china
• malay
 `
 
            if (args[0] == 'ppc') {
let jsn = await fetch(`https://ziy.herokuapp.com/api/gacha/ppcouple?apikey=xZiyy`)
let json = await jsn.json()
conn.sendButton(m.chat, 'Cewe', set.wm, json.result.female, [['🔄 Next 🔄', `${usedPrefix + command} ${args[0]}`]], fakes, adReply)
conn.sendButton(m.chat, 'Cowo', set.wm, json.result.male, [['🔄 Next 🔄', `${usedPrefix + command} ${args[0]}`]], fakes, adReply)
            }
            if (args[0] == 'indo') {
            let json = `https://ziy.herokuapp.com/api/gacha/indonesia?apikey=xZiyy`
        let caption = `*Result:*`
        await conn.sendButton(m.chat, caption, set.wm, json, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], fakes, adReply)
            }
            if (args[0] == 'korea') {
            let json = `https://ziy.herokuapp.com/api/gacha/korea?apikey=xZiyy`
        let caption = `*Result:*`
        await conn.sendButton(m.chat, caption, set.wm, json, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], fakes, adReply)
            }
            if (args[0] == 'china') {
            let json = `https://ziy.herokuapp.com/api/gacha/china?apikey=xZiyy`
        let caption = `*Result:*`
        await conn.sendButton(m.chat, caption, set.wm, json, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], fakes, adReply)
            }
            if (args[0] == 'malay') {
            let json = `https://ziy.herokuapp.com/api/gacha/malaysia?apikey=xZiyy`
        let caption = `*Result:*`
        await conn.sendButton(m.chat, caption, set.wm, json, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], fakes, adReply)
            }
}

if (command == 'ziy') {
if (!text) throw `Masukkan ID
${usedPrefix + command} ghea

*List*
• asupan2k
• cecan2k
• ghea
• bocil
• ukty
• asupan
• rika

• girlneko teks|teks
• sadboy teks|teks
• kaneki teks
• rem teks
• lolimaker teks
 `
 
 // Asupan
            if (args[0] == 'asupan2k') {
            let json = `https://ziy.herokuapp.com/api/asupan2k?apikey=xZiyy`
        let caption = `*Result:*`
        await conn.sendButton(m.chat, caption, set.wm, json, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], fakes, adReply)
            }
            if (args[0] == 'cecan2k') {
            let json = `https://ziy.herokuapp.com/api/cecan2k?apikey=xZiyy`
        let caption = `*Result:*`
        await conn.sendButton(m.chat, caption, set.wm, json, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], fakes, adReply)
            }
            if (args[0] == 'ghea') {
            let jsn = await fetch(`https://ziy.herokuapp.com/api/asupan/ghea?apikey=xZiyy`)
let json = await jsn.json()
conn.sendButton(m.chat, 'ghea', set.wm, json.result.url, [['🔄 Next 🔄', `${usedPrefix + command} ${args[0]}`]], fakes, adReply)
            }
            if (args[0] == 'bocil') {
            let jsn = await fetch(`https://ziy.herokuapp.com/api/asupan/bocil?apikey=xZiyy`)
let json = await jsn.json()
conn.sendButton(m.chat, 'bocil', set.wm, json.result.url, [['🔄 Next 🔄', `${usedPrefix + command} ${args[0]}`]], fakes, adReply)
            }
            if (args[0] == 'ukty') {
            let jsn = await fetch(`https://ziy.herokuapp.com/api/asupan/ukty?apikey=xZiyy`)
let json = await jsn.json()
conn.sendButton(m.chat, 'ukty', set.wm, json.result.url, [['🔄 Next 🔄', `${usedPrefix + command} ${args[0]}`]], fakes, adReply)
            }
            if (args[0] == 'asupan') {
            let jsn = await fetch(`https://ziy.herokuapp.com/api/asupan?apikey=xZiyy`)
let json = await jsn.json()
conn.sendButton(m.chat, 'asupan', set.wm, json.result.result, [['🔄 Next 🔄', `${usedPrefix + command} ${args[0]}`]], fakes, adReply)
            }
            if (args[0] == 'rika') {
            let jsn = await fetch(`https://ziy.herokuapp.com/api/asupan/rikagusriani?apikey=xZiyy`)
let json = await jsn.json()
conn.sendButton(m.chat, 'rikagusriani', set.wm, json.result.url, [['🔄 Next 🔄', `${usedPrefix + command} ${args[0]}`]], fakes, adReply)
            }
            
            //Maker
            if (args[0] == 'girlneko') {
            let urut = text.split`|`
  let text1 = urut[1]
  let text2 = urut[2]
            let jsn = `https://ziy.herokuapp.com/api/maker/girlneko?text1=${text1}&text2=${text2}&apikey=xZiyy`
conn.sendButton(m.chat, 'girlneko', set.wm, jsn, [['🔄 Next 🔄', `${usedPrefix + command} ${args[0]}`]], fakes, adReply)
            }
            if (args[0] == 'sadboy') {
            let urut = text.split`|`
  let text1 = urut[1]
  let text2 = urut[2]
            let jsn = `https://ziy.herokuapp.com/api/maker/sadboy?text1=${text1}&text2=${text2}&apikey=xZiyy`
conn.sendButton(m.chat, 'sadboy', set.wm, jsn, [['🔄 Next 🔄', `${usedPrefix + command} ${args[0]}`]], fakes, adReply)
            }
            if (args[0] == 'kaneki') {
            let jsn = `https://ziy.herokuapp.com/api/maker/kaneki?nama=${text}&apikey=xZiyy`
conn.sendButton(m.chat, 'kaneki', set.wm, jsn, [['🔄 Next 🔄', `${usedPrefix + command} ${args[0]}`]], fakes, adReply)
            }
            if (args[0] == 'rem') {
            let jsn = `https://ziy.herokuapp.com/api/maker/rem?nama=${text}&apikey=xZiyy`
conn.sendButton(m.chat, 'rem', set.wm, jsn, [['🔄 Next 🔄', `${usedPrefix + command} ${args[0]}`]], fakes, adReply)
            }
            if (args[0] == 'lolimaker') {
            let jsn = `https://ziy.herokuapp.com/api/maker/lolimaker?nama=${text}&apikey=xZiyy`
conn.sendButton(m.chat, 'lolimaker', set.wm, jsn, [['🔄 Next 🔄', `${usedPrefix + command} ${args[0]}`]], fakes, adReply)
            }
            */
}

//handler.command = handler.help = ['urlscan', 'fotoduck', 'fotobear', 'fotodog', 'fotodog2', 'fotodog3', 'fotofox', 'fotoshibe', 'kitten', 'drinks', 'rules', 'say', 'repeat', 'repeat2', 'dmpsearch', 'dmpdown', 'gacha', 'ziy']
handler.command = handler.help = ['urlscan', 'fotoduck', 'fotobear', 'fotodog', 'fotodog2', 'fotodog3', 'fotofox', 'fotoshibe', 'kitten', 'drinks', 'say', 'repeat', 'repeat2', 'dmpsearch', 'dmpdown']
handler.tags = ['random']

export default handler