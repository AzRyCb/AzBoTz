import similarity from 'similarity'
import db from '../../lib/database.js'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hcha/i.test(m.quoted.text) || /.*hcha/i.test(m.text))
        return !0
    this.tebakchara = this.tebakchara ? this.tebakchara : {}
    if (!(id in this.tebakchara))
        return this.sendButton(m.chat, 'Soal itu telah berakhir', set.wm, null, buttontebakchara, m)
    if (m.quoted.id == this.tebakchara[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebakchara[id][3])
            delete this.tebakchara[id]
            return this.sendButton(m.chat, '*Yah Menyerah :( !*', set.wm, null, buttontebakchara, m)
        }
        let json = JSON.parse(JSON.stringify(this.tebakchara[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.name.toLowerCase().trim()) {
            db.data.users[m.sender].exp += this.tebakchara[id][2]
            this.sendButton(m.chat, `*Benar!*\n+${this.tebakchara[id][2]} XP`, set.wm, null, buttontebakchara, m)
            clearTimeout(this.tebakchara[id][3])
            delete this.tebakchara[id]
        } else if (similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold)
            this.reply(m.chat, `*Dikit Lagi!*`)
        else
            this.sendButton(m.chat, `*Salah!*`, set.wm, null, [
                ['Hint', '/hcha'],
                ['Nyerah', 'menyerah']
            ], m)
    }
    return !0
}
export const exp = 0

const buttontebakchara = [
    ['tebakchara', '/tebakchara']
]
