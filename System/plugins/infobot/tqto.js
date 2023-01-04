/**
* jangan dihilangin, boleh di tambahin 🐦
**/

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
conn.sendButton(m.chat, esce, set.wm, 'https://telegra.ph/file/aa5153cdc27366a124af8.jpg', [['Menu', `${usedPrefix}menu`]], m) 
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(tqto|team|contributor)$/i

export default handler
