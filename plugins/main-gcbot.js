let handler = async (m, { conn, command, usedPrefix }) => {
    
conn.sendButton(m.chat, set.gcbot, wm, qrgc, [['menu', `${usedPrefix}`]], m) 
}
handler.help = ['gcbot']
handler.tags = ['main']
handler.command = /^(gcbot|gcazbotz|grupbot|groupbot|botgroup)$/i

export default handler
