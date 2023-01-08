import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, participants }) => {
    let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
     let user = m.mentionedJid && m.mentionedJid[0]
            await conn.groupParticipantsUpdate(m.chat, [user], 'demote')
        
    conn.reply(m.chat,'Succes')

}
handler.help = ['odemote @tag']
handler.tags = ['owner']
handler.command = /^(odemote)$/i

handler.rowner = handler.group = handler.botAdmin = true

export default handler