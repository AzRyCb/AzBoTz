let handler = async (m, { conn, command }) => {
let api = `https://api.zacros.my.id/asupan/${command}`
    conn.sendButtonImg(m.chat, api, 'Nih', wm, 'NEXT', `.${command}`, m)
}
handler.help = ['hijaber', 'korea', 'indonesia', 'china', 'japan', 'cecan', 'malaysia', 'thailand', 'ukhty', 'santuy', 'vietnam']
handler.tags = ['asupan']
handler.command = /^(hijaber|korea|indonesia|china|cecan|malaysia|japan|thailand|ukhty|santuy|vietnam)$/i

export default handler
