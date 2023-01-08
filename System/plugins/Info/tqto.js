/**
* jangan dihilangin, boleh di tambahin 🐦
**/
import fetch from 'node-fetch'
let handler = async (m, { conn, command, usedPrefix }) => {
let esce = `
*Big Thanks To*
⬡ Zifabotz_offc1
    📮 https://github.com/Botynyakamu
⬡ fokusdotid
    📮https://github.com/Fokusdotid
⬡ Amiruldev
    📮https://github.com/amiruldev20
⬡ bochilgaming
    📮https://github.com/BochilGaming          
    
THANKS PARA DONASI YANG TERHORMAT
`
let st = 'https://telegra.ph/file/aa5153cdc27366a124af8.jpg'
const message = {
    jpegThumbnail: await(await fetch(st)).buffer(),
    caption: esce.trim(),
    footer: set.bottime,
    document: { url: set.thumb },
    fileName: set.ucapan,
    mimetype: set.doc,
    fileLength: set.fsizedoc,
    pageCount: set.fpagedoc,
    templateButtons: [
        {
            urlButton: {
                displayText: `My Website`,
                url: set.web
            }
        },
        {
            urlButton: {
                displayText: '💌 Group Official',
                url: set.gcbot
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
                displayText: '📮 Donasi',
                id: '.donasi'
            }
        },
        {
            quickReplyButton: {
                displayText: '🐾 Layanan Dan Jasa 🐾',
                id: '.store'
            }
        },
    ]
}
conn.sendMessage(m.chat, message)

//conn.sendButton(m.chat, esce, set.wm, 'https://telegra.ph/file/aa5153cdc27366a124af8.jpg', [['Menu', `${usedPrefix}menu`]], m) 
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(tqto|team|contributor)$/i

export default handler
