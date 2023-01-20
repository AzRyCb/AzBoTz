let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `store fahrilbotz

╭─❑ 𝙙𝙞𝙖𝙢𝙤𝙣𝙙 𝙢𝙡
│✾ *12 diamond = 4k via dana*
│✾ *19 diamond = 6k*
│✾ *44 diamond = 13k*
│✾ *60 diamond = 17k*
│✾ *85 diamond = 25k*
│✾ *170 diamond = 49k*
│✾ *240 diamond = 69k*
│✾ *296 diamond = 85k*
│✾ *875 diamond = 243k*
│✾ *2010 diamond = 523k*
│✾ *4830 diamond = 1.3jt*
│═〘 PEMBAYARAN 〙 ═
│✾ hanya via dana murah
│ 100% amanah
│✾ Tertarik Untuk Beli diamond ?
│✾Ketuk Tombol Di Bawah Ya
│
│✾ © fahril ahmad
│✾ shop by fahril ahmad
│✾〘 ${namabot} 
╰❑
`.trim()
  const button = {
        buttonText: 'via',
        description: kontol,
        sections:  [{title: "silahkan di pilih", rows: [
        {title: 'dana', description: "100% amanah", rowId:"#viadana"},
        {title: 'pulsa', description: "100% amanah", rowId:"#viapulsa"},
        {title: 'Owner', description: "", rowId:".owner"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['info', 'tools']
handler.command = /^(diamond ml|dmml)$/i
handler.help = ['dmml']
module.exports = handler

//ubah aja