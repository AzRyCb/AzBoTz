let handler = async (m, { conn, participants }) => {
     let user = m.mentionedJid && m.mentionedJid[0]
            conn.groupParticipantsUpdate(m.chat, [user], 'demote')
                await conn.reply(m.chat, 'Succes')
}
handler.help = ['demote @tag']
handler.tags = ['admin']
handler.command = /^(demote)$/i

handler.admin = handler.group = handler.botAdmin = true

export default handler