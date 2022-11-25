/**
* jangan dihilangin, boleh di tambahin 🐦
**/

let handler = async (m, { conn, command, usedPrefix }) => {
    let img = 'https://telegra.ph/file/aa5153cdc27366a124af8.jpg'
bear = "Source Code"
let esce = `
*Big Thanks To*
☆ Nurutomo
    📮 https://github.com/Nurutomo
⬣ Elyas
    📮 https://github.com/Paquito1923
ꕥ Hyzer Official
    📮 https://github.com/Hyzerr
✾ Krizyn Ofc
    📮 https://github.com/krizynofc
⬡ Zifabotz_offc1
    📮 https://github.com/Botynyakamu
^ Az
    📮 https://github.com/AzRyCB    
⬡ fokusdotid
    📮https://github.com/Fokusdotid
    
THANKS PARA DONASI YANG TERHORMAT
`
conn.sendButton(m.chat, esce, wm, img, [['Menu', `${usedPrefix}menu`]], m) 
}
handler.help = ['tqto']
handler.tags = ['main']
handler.command = /^(tqto|team|contributor)$/i

export default handler
