import similarity from 'similarity'
import db from '../../lib/database.js'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hsia/i.test(m.quoted.text) || /.*hsia/i.test(m.text))
        return !0
    this.tebaksiapa = this.tebaksiapa ? this.tebaksiapa : {}
    if (!(id in this.tebaksiapa))
        return this.sendButton(m.chat, 'Soal itu telah berakhir', set.set.wm, null, buttontebaksiapa, fakes, adReply)
    if (m.quoted.id == this.tebaksiapa[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebaksiapa[id][3])
            delete this.tebaksiapa[id]
            return this.sendButton(m.chat, '*Yah Menyerah :( !*', set.set.wm, null, buttontebaksiapa, fakes, adReply)
        }
        let json = JSON.parse(JSON.stringify(this.tebaksiapa[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            db.data.users[m.sender].exp += this.tebaksiapa[id][2]
            this.sendButton(m.chat, `*Benar!*\n+${this.tebaksiapa[id][2]} XP`, set.set.wm, null, buttontebaksiapa, fakes, adReply)
            clearTimeout(this.tebaksiapa[id][3])
            delete this.tebaksiapa[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            this.reply(m.chat, `*Dikit Lagi!*`)
        else
            this.sendButton(m.chat, `*Salah!*`, set.set.wm, null, [
                ['Hint', '/hsia'],
                ['Nyerah', 'menyerah']
            ], fakes, adReply)
    }
    return !0
}
export const exp = 0

const buttontebaksiapa = [
    ['tebaksiapa', '/tebaksiapa']
]