import db from '../../lib/database.js'
import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hgom/i.test(m.quoted.text) || /.*hgom/i.test(m.text))
        return !0
    this.tebakgombal = this.tebakgombal ? this.tebakgombal : {}
    if (!(id in this.tebakgombal))
        return this.sendButton(m.chat, 'Soal itu telah berakhir', set.wm, null, buttontebakgombal, fakes, adReply)
    if (m.quoted.id == this.tebakgombal[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebakgombal[id][3])
            delete this.tebakgombal[id]
            return this.sendButton(m.chat, '*Yah Menyerah :( !*', set.wm, null, buttontebakgombal, fakes, adReply)
        }
        let json = JSON.parse(JSON.stringify(this.tebakgombal[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            db.data.users[m.sender].exp += this.tebakgombal[id][2]
            this.sendButton(m.chat, `*Benar!*\n+${this.tebakgombal[id][2]} XP`, set.wm, null, buttontebakgombal, fakes, adReply)
            clearTimeout(this.tebakgombal[id][3])
            delete this.tebakgombal[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            m.reply(`*Dikit Lagi!*`)
        else
            this.sendButton(m.chat, `*Salah!*`, set.wm, null, [
                ['Hint', '/hgom'],
                ['Nyerah', 'menyerah']
            ], fakes, adReply)
    }
    return !0
}
export const exp = 0

const buttontebakgombal = [
    ['tebakgombal', '/tebakgombal']
]