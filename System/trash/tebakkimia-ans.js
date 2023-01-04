import similarity from 'similarity'
import db from '../../lib/database.js'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hkim/i.test(m.quoted.text) || /.*hkim/i.test(m.text))
        return !0
    this.tebakkimia = this.tebakkimia ? this.tebakkimia : {}
    if (!(id in this.tebakkimia))
        return this.sendButton(m.chat, 'Soal itu telah berakhir', set.wm, null, buttontebakkimia, fakes, adReply)
    if (m.quoted.id == this.tebakkimia[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebakkimia[id][3])
            delete this.tebakkimia[id]
            return this.sendButton(m.chat, '*Yah Menyerah :( !*', set.wm, null, buttontebakkimia, fakes, adReply)
        }
        let json = JSON.parse(JSON.stringify(this.tebakkimia[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            db.data.users[m.sender].exp += this.tebakkimia[id][2]
            this.sendButton(m.chat, `*Benar!*\n+${this.tebakkimia[id][2]} XP`, set.wm, null, buttontebakkimia, fakes, adReply)
            clearTimeout(this.tebakkimia[id][3])
            delete this.tebakkimia[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            this.reply(m.chat, `*Dikit Lagi!*`)
        else
            this.sendButton(m.chat, `*Salah!*`, set.wm, null, [
                ['Hint', '/hkim'],
                ['Nyerah', 'menyerah']
            ], fakes, adReply)
    }
    return !0
}
export const exp = 0

const buttontebakkimia = [
    ['tebakkimia', '/tebakkimia']
]