let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
┌〔 List day 〕
├ permanen
├ 1 Bulan
├ 1 Minggu
├〔 list day 〕
└────
Silahkan klik pada "List Harga" untuk melihat list.

Pembayaran:
Pulsa (ISAT): 6285876902820 (+3.000)
Gopay: 6285876902820
`.trim()
    const button = {
        buttonText: 'List Harga', 
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: 'permanen', description: "tanpa batas...", rowId:"/permanen"},
        {title: '1 Bulan', description: "satu bulan...", rowId:"/onebulan"},
        {title: '1 Minggu', description: "1 minggu....", rowId:"/1minggu"},
        {title: 'Owner', description: "owner bila mau sewa...", rowId:".owner"},
        {title: 'Rules', description: "Kebijakan Privasi...", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa|sewabot)$/i
handler.help = ['sewa']
module.exports = handler
//fahril Bot
