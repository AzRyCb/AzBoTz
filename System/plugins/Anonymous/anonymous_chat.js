async function handler(m, { command }) {
    command = command.toLowerCase()
    this.anonymous = this.anonymous ? this.anonymous : {}
    switch (command) {
        case 'next':
        case 'leave': {
            let room = Object.values(this.anonymous).find(room => room.check(m.sender))
            if (!room) return this.sendButton(m.chat, '*Kamu tidak sedang berada di anonymous chat*', set.wm, null, [['Cari Partner', `.start`]], fakes, adReply)
            m.reply('Ok')
            let other = room.other(m.sender)
            if (other) await this.sendButton(other, '*Partner meninggalkan chat*', set.wm, null, [['Cari Partner', `.start`]], fakes, adReply)
            delete this.anonymous[room.id]
            if (command === 'leave') break
        }
        case 'start': {
            if (Object.values(this.anonymous).find(room => room.check(m.sender))) return this.sendButton(m.chat, '*Kamu masih berada di dalam anonymous chat, menunggu partner*', set.wm, null, [['Keluar', `.leave`]], fakes, adReply)
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                await this.sendButton(room.b, '_Partner ditemukan!_', await this.sendButton(room.b, '_Partner ditemukan!_', set.wm, null, [['Next', `.next`]], m), null, [['Next', `.next`]], fakes, adReply)
                room.b = m.sender
                room.state = 'CHATTING'
            } else {
                let id = + new Date
                this.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function (who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function (who = '') {
                        return who === this.a ? this.b : who === this.b ? this.a : ''
                    },
                }
                await this.sendButton(m.chat, '*Menunggu partner...*', set.wm, null, [['Keluar', `.leave`]], fakes, adReply)
            }
            break
        }
    }
}
handler.help = ['start', 'leave', 'next']
handler.tags = ['anonymous']
handler.command = ['start', 'leave', 'next']

handler.private = true

export default handler