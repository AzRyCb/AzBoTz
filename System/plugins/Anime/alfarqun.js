let handler = async (m, { conn, usedPrefix, command }) => {
    let api = `https://raw.githubusercontent.com/Alfarqun/database/main/anime/${command}.json`
    conn.sendButton(m.chat, 'Sukanya Yang Gk Nyata :(', set.wm, api, [['Next', `${usedPrefix}${command}`]], fakes, adReply)
}
handler.help = ['kanna', 'randomanime']
handler.tags = ['anime']
handler.command = /^(kanna|randomanime)$/i
    
export default handler
    