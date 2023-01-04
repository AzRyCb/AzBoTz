import { createHash } from 'crypto'
import db from '../../lib/database.js'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix, conn, command }) {
let namae = conn.getName(m.sender)
const sections = [
{
	title: "⫹⫺ Select Your Age Here ! ⫹⫺" ,
	  rows: [
	    {title: "Random Tahun", rowId: '.daftar ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9','8','7'])}
	    ]
      },
    {
	title:` ––––––『 " O L D " 』––––––`,
	  rows: [
	    {title: "30 Tahun", rowId: '.daftar ' + namae + '.30 '},
	    {title: "29 Tahun", rowId: '.daftar ' + namae + '.29 '},
	    {title: "28 Tahun", rowId: '.daftar ' + namae + '.28 '},
	    {title: "27 Tahun", rowId: '.daftar ' + namae + '.27 '},
	    {title: "26 Tahun", rowId: '.daftar ' + namae + '.26 '},
	    {title: "25 Tahun", rowId: '.daftar ' + namae + '.25 '},
	    {title: "24 Tahun", rowId: '.daftar ' + namae + '.24 '},
	    {title: "23 Tahun", rowId: '.daftar ' + namae + '.23 '},
	    {title: "22 Tahun", rowId: '.daftar ' + namae + '.22 '},
	    {title: "21 Tahun", rowId: '.daftar ' + namae + '.21 '}
	    ]
      },
    {
	title: `––––––『 Y O U N G " 』––––––`,
	  rows: [
	    {title: "20 Tahun", rowId: '.daftar ' + namae + '.20 '},
	    {title: "19 Tahun", rowId: '.daftar ' + namae + '.19 '},
	    {title: "18 Tahun", rowId: '.daftar ' + namae + '.18 '},
	    {title: "17 Tahun", rowId: '.daftar ' + namae + '.17 '},
	    {title: "16 Tahun", rowId: '.daftar ' + namae + '.16 '},
	    {title: "15 Tahun", rowId: '.daftar ' + namae + '.15 '},
	    {title: "14 Tahun", rowId: '.daftar ' + namae + '.14 '},
	    {title: "13 Tahun", rowId: '.daftar ' + namae + '.13 '},
	    {title: "12 Tahun", rowId: '.daftar ' + namae + '.12 '},
	    {title: "11 Tahun", rowId: '.daftar ' + namae + '.11 '},
	    {title: "10 Tahun", rowId: '.daftar ' + namae + '.10 '},
	    {title: "9 Tahun", rowId: '.daftar ' + namae + '.9 '},
		{title: "8 Tahun", rowId: '.daftar ' + namae + '.8 '},
		{title: "7 Tahun", rowId: '.daftar ' + namae + '.7 '}
	    ]
    },
]

const listMessage = {
  text: `│›Please select your age at the bottom button...`,
  footer: `┗ *ʏᴏᴜʀ ɴᴀᴍᴇ:* ${namae}\n<❔> Want a costume name? type *${usedPrefix + command} yourname.age*`,
  title: `––––––『 ʀᴇɢɪsᴛᴇʀ 』––––––`,
  buttonText: "Click Here !",
  sections
}

let user = db.data.users[m.sender]
  if (user.registered === true) throw `[💬] Kamu sudah terdaftar\nMau daftar ulang? *${usedPrefix}unreg <SERIAL NUMBER>*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, { quoted: m })
let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 30) throw '*Gak boleh!*,\nTua amat dah 🗿'
  if (age < 5) throw '*Gak boleh!*,\nBanyak pedo 🗿'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true

let sn = createHash('md5').update(m.sender).digest('hex')
let cap = `
*ᴜsᴇʀs*
*sᴛᴀᴛᴜs:* ☑️ sᴜᴄᴄᴇssғᴜʟ
*ɴᴀᴍᴇ:* ${name}
*ᴀɢᴇ:* ${age} ʏᴇᴀʀs
*sɴ:* ${sn}


ᴅᴀᴛᴀ ᴜsᴇʀ ʏᴀɴɢ ᴛᴇʀsɪᴍᴘᴀɴ ᴅɪᴅᴀᴛᴀʙᴀsᴇ ʙᴏᴛ, ᴅɪᴊᴀᴍɪɴ ᴀᴍᴀɴ ᴛᴀɴᴘᴀ ᴛᴇʀsʜᴀʀᴇ (. ❛ ᴗ ❛.)
`
let buttonMessage= {
'document':{'url': set.web},
'mimetype':set.doc,
'fileName':'⫹⫺ ʀᴇɢɪsᴛᴇʀ ⫹⫺',
'fileLength': set.fsizedoc,
'pageCount': set.fpagedoc,

'contextInfo':{
'forwardingScore':555,
'isForwarded':true,

'externalAdReply':{
'mediaUrl': set.web,
'mediaType':2,
'previewType':'pdf',
'title': set.wm,
'body': set.botdate,
'thumbnail':set.thumb,
'sourceUrl': set.web}},
'caption': cap,
'footer': set.wm,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'ᴍᴇɴᴜ'},'type':1},
{'buttonId':'.donasi','buttonText':{'displayText':'ᴅᴏɴᴀsɪ'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(register|verify|daftar|reg(is)?|verif)$/i

export default handler