import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, participants }) => {
let users = m.quoted ? [m.quoted.sender] : m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
    let kickedUser = []
    for (let user of users)
        if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin) {
            const res = await conn.groupParticipantsUpdate(m.chat, [user], "remove")
            kickedUser.concat(res)
            await delay(1 * 1000)
        }
    conn.reply(m.chat, `*Succes kick* ${kickedUser.map(v => '@' + v.split('@')[0])}`, null, { mentions: kickedUser })

}
handler.help = ['kick', '-'].map(v => 'o' + v + ' @user')
handler.tags = ['admin']
handler.command = /^(gkick|g-)$/i

handler.botAdmin = handler.group = handler.admin = true

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))