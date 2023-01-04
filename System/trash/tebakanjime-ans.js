import similarity from 'similarity'
import db from '../../lib/database.js'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hani/i.test(m.quoted.text) || /.*hani/i.test(m.text))
        return !0
    this.tebakanjime = this.tebakanjime ? this.tebakanjime : {}
    if (!(id in this.tebakanjime))
        return this.sendButton(m.chat, 'Soal itu telah berakhir', set.wm, null, buttontebakanjime, fakes, adReply)
    if (m.quoted.id == this.tebakanjime[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebakanjime[id][3])
            delete this.tebakanjime[id]
            return this.sendButton(m.chat, '*Yah Menyerah :( !*', set.wm, null, buttontebakanjime, fakes, adReply)
        }
        let json = JSON.parse(JSON.stringify(this.tebakanjime[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.name.toLowerCase().trim()) {
            db.data.users[m.sender].exp += this.tebakanjime[id][2]
            this.sendButton(m.chat, `*Benar!*\n+${this.tebakanjime[id][2]} XP`, set.wm, null, buttontebakanjime, fakes, adReply)
            clearTimeout(this.tebakanjime[id][3])
            delete this.tebakanjime[id]
        } else if (similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold)
            this.reply(m.chat, `*Dikit Lagi!*`)
        else
            this.sendButton(m.chat, `*Salah!*`, set.wm, null, [
                ['Hint', '/hani'],
                ['Nyerah', 'menyerah']
            ], fakes, adReply)
    }
    return !0
}
export const exp = 0

const buttontebakanjime = [
    ['tebakanime', '/tebakanime']
]
