let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${set.htki} *DOWNLOAD* ${set.htka}

           WhatsApp Imune ♨️
    
┏━━━ꕥ〔 *Kelebihan* 〕ꕥ━⬣
┃✾ Anti Virtex✔️
┃✾ Anti lag✔️
┃✾ Fitur war✔️
┃✾ Anti Bug troli, slayer Dll✔️
┃✾ No Password ✔️
┗━━━━━━ꕥ`
const templateButtons = [
    {index: 1, urlButton: {displayText: '↗️Link', url: 'https://cararegistrasi.com/cMyXZwsK'}},
]
let tm = {
text: text,
footer: wm,
templateButtons: templateButtons,
image: {url: set.fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^waimune1$/i

export default handler
