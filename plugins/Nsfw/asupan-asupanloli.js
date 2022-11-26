let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/loli'
conn.sendButtonImg(m.chat, supa, 'Nih kak', wm, 'NEXT', `.asupanloli`, m)
}
handler.help = ['asupanloli']
handler.tags = ['asupan']
handler.command = /^(asupanloli)$/i

export default handler
