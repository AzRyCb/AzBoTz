import similarity from 'similarity'
import db from '../../lib/database.js'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hlir/i.test(m.quoted.text) || /.*hlir/i.test(m.text))
        return !0
    this.tebaklirik = this.tebaklirik ? this.tebaklirik : {}
    if (!(id in this.tebaklirik))
        return this.sendButton(m.chat, 'Soal itu telah berakhir', set.wm, null, buttontebaklirik, fakes, adReply)
    if (m.quoted.id == this.tebaklirik[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebaklirik[id][3])
            delete this.tebaklirik[id]
            return this.sendButton(m.chat, '*Yah Menyerah :( !*', set.wm, null, buttontebaklirik, fakes, adReply)
        }
        let json = JSON.parse(JSON.stringify(this.tebaklirik[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            db.data.users[m.sender].exp += this.tebaklirik[id][2]
            this.sendButton(m.chat, `*Benar!*\n+${this.tebaklirik[id][2]} XP`, set.wm, null, buttontebaklirik, fakes, adReply)
            clearTimeout(this.tebaklirik[id][3])
            delete this.tebaklirik[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            this.reply(m.chat, `*Dikit Lagi!*`)
        else
            this.sendButton(m.chat, `*Salah!*`, set.wm, null, [
                ['Hint', '/hlir'],
                ['Nyerah', 'menyerah']
            ], fakes, adReply)
    }
    return !0
}
export const exp = 0

const buttontebaklirik = [
    ['tebaklirik', '/tebaklirik']
]