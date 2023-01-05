import similarity from 'similarity'
import db from '../../lib/database.js'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hsus/i.test(m.quoted.text) || /.*hsus/i.test(m.text))
        return !0
    this.susunkata = this.susunkata ? this.susunkata : {}
    if (!(id in this.susunkata))
        return this.sendButton(m.chat, 'Soal itu telah berakhir', set.wm, null, buttonsusunkata, fakes, adReply)
    if (m.quoted.id == this.susunkata[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.susunkata[id][3])
            delete this.susunkata[id]
            return this.sendButton(m.chat, '*Yah Menyerah :( !*', set.wm, null, buttonsusunkata, fakes, adReply)
        }
        let json = JSON.parse(JSON.stringify(this.susunkata[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            db.data.users[m.sender].exp += this.susunkata[id][2]
            this.sendButton(m.chat, `*Benar!*\n+${this.susunkata[id][2]} XP`, set.wm, null, buttonsusunkata, fakes, adReply)
            clearTimeout(this.susunkata[id][3])
            delete this.susunkata[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            conn.reply(m.chat, `*Dikit Lagi!*`)
        else
            this.sendButton(m.chat, `*Salah!*`, set.wm, null, [
                ['Hint', '/hsus'],
                ['Nyerah', 'menyerah']
            ], fakes, adReply)
    }
    return !0
}
export const exp = 0

const buttonsusunkata = [
    ['susunkata', '/susunkata']
]