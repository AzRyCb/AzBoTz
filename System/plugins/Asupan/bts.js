let handler = async (m, { conn, command }) => {
let api = `https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`
    conn.sendButtonImg(m.chat, api, 'Nih Kak kpopersnya', wm, 'NEXT', `.${command}`, m)
}
handler.help = ['bts', 'exo']
handler.tags = ['asupan']
handler.command = /^(bts|exo)$/i

export default handler
