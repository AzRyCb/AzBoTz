import similarity from 'similarity'
import db from '../../lib/database.js'

const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*teka/i.test(m.quoted.text) || /.*(hint|teka)/i.test(m.text))
        return !0
    this.tebakkata = this.tebakkata ? this.tebakkata : {}
    if (!(id in this.tebakkata))
        return this.sendButton(m.chat, 'Soal itu telah berakhir', set.wm, ['tebakkata', '/tebakkata'], fakes, adReply)
    if (m.quoted.id == this.tebakkata[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tebakkata[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            db.data.users[m.sender].exp += this.tebakkata[id][2]
            this.sendButton(m.chat, `*Benar!*\n+${this.tebakkata[id][2]} XP`, set.wm, ['tebakkata', '/tebakkata'], fakes, adReply)
            clearTimeout(this.tebakkata[id][3])
            delete this.tebakkata[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            this.reply(m.chat, `*Dikit Lagi!*`)
        else
            this.reply(m.chat, `*Salah!*`)
    }
    return !0
}
export const exp = 0