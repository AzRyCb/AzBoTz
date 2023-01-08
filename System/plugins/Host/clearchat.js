/*
##############################
# Name: handler BOT             # 
# Made by Amirul Dev         #
# Github: amiruldev20        #
##############################
*/
let handler = async (m, { conn }) => {
        conn.chatModify({
            delete: true,
            lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]
        },
            m.chat)
        conn.reply(m.chat, "chat ini telah dihapus pada whatsapp bot")

}
handler.help = ['clearchat']
handler.tags = ['host']
handler.command = /^clearchat$/i
handler.rowner = handler.group = true

export default handler