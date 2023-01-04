import similarity from 'similarity'
import db from '../../lib/database.js'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hjen/i.test(m.quoted.text) || /.*hjen/i.test(m.text))
        return !0
    this.tebakjenaka = this.tebakjenaka ? this.tebakjenaka : {}
    if (!(id in this.tebakjenaka))
        return this.sendButton(m.chat, 'Soal itu telah berakhir', set.wm, null, buttontebakjenaka, fakes, adReply)
    if (m.quoted.id == this.tebakjenaka[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebakjenaka[id][3])
            delete this.tebakjenaka[id]
            return this.sendButton(m.chat, '*Yah Menyerah :( !*', set.wm, null, buttontebakjenaka, fakes, adReply)
        }
        let json = JSON.parse(JSON.stringify(this.tebakjenaka[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            db.data.users[m.sender].exp += this.tebakjenaka[id][2]
            this.sendButton(m.chat, `*Benar!*\n+${this.tebakjenaka[id][2]} XP`, set.wm, null, buttontebakjenaka, fakes, adReply)
            clearTimeout(this.tebakjenaka[id][3])
            delete this.tebakjenaka[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            this.reply(m.chat, `*Dikit Lagi!*`)
        else
            this.sendButton(m.chat, `*Salah!*`, set.wm, null, [
                ['Hint', '/hjen'],
                ['Nyerah', 'menyerah']
            ], fakes, adReply)
    }
    return !0
}
export const exp = 0

const buttontebakjenaka = [
    ['tebakjenaka', '/tebakjenaka']
]