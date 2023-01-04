import db from '../../lib/database.js'
import similarity from 'similarity'

const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hasa/i.test(m.quoted.text) || /.*hasa/i.test(m.text))
        return !0
    this.asahotak = this.asahotak ? this.asahotak : {}
    if (!(id in this.asahotak))
        return this.sendButton(m.chat, 'Soal itu telah berakhir', set.wm, null, buttonasahotak, fakes, adReply)
    if (m.quoted.id == this.asahotak[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.asahotak[id][3])
            delete this.asahotak[id]
            return this.sendButton(m.chat, '*Yah Menyerah :( !*', set.wm, null, buttonasahotak, fakes, adReply)
        }
        let json = JSON.parse(JSON.stringify(this.asahotak[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            db.data.users[m.sender].exp += this.asahotak[id][2]
            this.sendButton(m.chat, `*Benar!*\n+${this.asahotak[id][2]} XP`, set.wm, null, buttonasahotak, fakes, adReply)
            clearTimeout(this.asahotak[id][3])
            delete this.asahotak[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            conn.reply(m.chat,`*Dikit Lagi!*`)
        else
            this.sendButton(m.chat, `*Salah!*`, set.wm, null, [
                ['Hint', '/hasa'],
                ['Nyerah', 'menyerah']
            ], fakes, adReply)
    }
    return !0
}
export const exp = 0

const buttonasahotak = [
    ['asahotak', '/asahotak']
]