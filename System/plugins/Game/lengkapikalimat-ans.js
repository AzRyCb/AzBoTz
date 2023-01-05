import db from '../../lib/database.js'
import similarity from 'similarity'

const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hlen/i.test(m.quoted.text) || /.*hlen/i.test(m.text))
        return !0
    this.lengkapikalimat = this.lengkapikalimat ? this.lengkapikalimat : {}
    if (!(id in this.lengkapikalimat))
        return this.sendButton(m.chat, 'Soal itu telah berakhir', set.wm, null, buttonlengkapikalimat, fakes, adReply)
    if (m.quoted.id == this.lengkapikalimat[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.lengkapikalimat[id][3])
            delete this.lengkapikalimat[id]
            return this.sendButton(m.chat, '*Yah Menyerah :( !*', set.wm, null, buttonlengkapikalimat, fakes, adReply)
        }
        let json = JSON.parse(JSON.stringify(this.lengkapikalimat[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            db.data.users[m.sender].exp += this.lengkapikalimat[id][2]
            this.sendButton(m.chat, `*Benar!*\n+${this.lengkapikalimat[id][2]} XP`, set.wm, null, buttonlengkapikalimat, fakes, adReply)
            clearTimeout(this.lengkapikalimat[id][3])
            delete this.lengkapikalimat[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            m.reply(`*Dikit Lagi!*`)
        else
            this.sendButton(m.chat, `*Salah!*`, set.wm, null, [
                ['Hint', '/hlen'],
                ['Nyerah', 'menyerah']
            ], fakes, adReply)
    }
    return !0
}
export const exp = 0

const buttonlengkapikalimat = [
    ['lengkapikalimat', '/lengkapikalimat']
]