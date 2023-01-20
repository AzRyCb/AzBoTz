let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `store fahrilbotz

╭─❑ 𝙙𝙞𝙖𝙢𝙤𝙣𝙙 𝙛𝙛
│✾ *12 diamond = 3k via dana*
│✾ *50 diamond = 9k*
│✾ *70 diamond = 10k*
│✾ *140 diamond = 21k*
│✾ *185 diamond = 25k*
│✾ *170 diamond = 49k*
│✾ *355 diamond = 50k*
│✾ *720 diamond = 110k*
│✾ *1450 diamond = 210k*
│✾ *7290 diamond = 1jt*
│✾ *36500 diamond = 5jt*
│═〘 PEMBAYARAN 〙 ═
│✾ hanya via dana murah
│ 100% amanah
│✾ Tertarik Untuk Beli diamond ?
│✾Ketuk Tombol Di Bawah Ya
│
│✾ © fahril ahmad
│✾ shop by fahril ahmad
│✾〘 ${namabot} 〙
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
handler.command = /^(diamond ff|dmff)$/i
handler.help = ['dmff']
module.exports = handler

//ubah aja