import similarity from 'similarity'
import db from '../../lib/database.js'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hlog/i.test(m.quoted.text) || /.*hlog/i.test(m.text))
        return !0
    this.tebaklogo = this.tebaklogo ? this.tebaklogo : {}
    if (!(id in this.tebaklogo))
        return this.sendButton(m.chat, 'Soal itu telah berakhir', set.wm, null, buttontebaklogo, fakes, adReply)
    if (m.quoted.id == this.tebaklogo[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebaklogo[id][3])
            delete this.tebaklogo[id]
            return this.sendButton(m.chat, '*Yah Menyerah :( !*', set.wm, null, buttontebaklogo, fakes, adReply)
        }
        let json = JSON.parse(JSON.stringify(this.tebaklogo[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.hasil.data.jawaban.toLowerCase().trim()) {
            db.data.users[m.sender].exp += this.tebaklogo[id][2]
            this.sendButton(m.chat, `*Benar!*\n+${this.tebaklogo[id][2]} XP`, set.wm, null, buttontebaklogo, fakes, adReply)
            clearTimeout(this.tebaklogo[id][3])
            delete this.tebaklogo[id]
        } else if (similarity(m.text.toLowerCase(), json.hasil.data.jawaban.toLowerCase().trim()) >= threshold)
            this.reply(m.chat, `*Dikit Lagi!*`)
        else
            this.sendButton(m.chat, `*Salah!*`, set.wm, null, [
                ['Hint', '/hlog'],
                ['Nyerah', 'menyerah']
            ], fakes, adReply)
    }
    return !0
}
export const exp = 0

const buttontebaklogo = [
    ['tebaklogo', '/tebaklogo']
]
