/*
##############################
# Name: handler BOT             # 
# Made by Amirul Dev         #
# Github: amiruldev20        #
##############################
*/
let handler = async (m, { conn }) => {
    try {
        conn.chatModify({
            delete: true,
            lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]
        },
            m.chat)
        conn.reply(m.chat, "chat ini telah dihapus pada whatsapp bot")
    } catch {
        conn.reply(m.chat, "hapus chat gagal :(")
    }

}
handler.help = ['clearchat']
handler.tags = ['group']
handler.command = /^clearchat$/i
handler.owner = true

export default handler