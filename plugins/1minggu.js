let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
┌〔 1 minggu
└────
Silahkan klik pada "via" untuk list.

Pembayaran: 15k
Pulsa (INDOSAT): 6285876902820 (+3.000) 
dana: 6285876902820
`.trim()
    const button = {
        buttonText: 'via',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: 'pulsa', description: "", rowId:"#viapulsa"},
        {title: 'dana', description: "", rowId:"#viadana"},
        {title: 'Owner', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'Rules', description: "Kebijakan Privasi, Syarat Ketentuan dan Peraturan.", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(1minggu)$/i
handler.help = ['1minggu']
module.exports = handler
//fahril Bot
