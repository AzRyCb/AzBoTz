const { MessageType } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    try {
      await m.reply(global.wait)
        let res = await fetch(global.API('xteam', '/randomimage/ero', {}, 'APIKEY'))
        let img = await res.buffer()
        conn.sendMessage(m.chat, img, MessageType.image, {
            quoted: m, caption: '*© fahril*'
        })
    } catch (e) {
        console.log(e)
        throw '_*fitur ini belum diaktifkan oleh owner*_'
    }
}
handler.help = ['ero']
handler.tags = ['anime','premium']
handler.command = /^ero$/i
handler.premium = true
handler.register = true

module.exports = handler
