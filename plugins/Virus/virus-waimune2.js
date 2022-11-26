let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${set.htki} *DOWNLOAD* ${set.htka}

           WhatsApp Imune ♨️
    
┏━━━ꕥ〔 *Kelebihan* 〕ꕥ━⬣
┃✾ Anti Virtex✔️
┃✾ Anti lag✔️
┃✾ Fitur war✔️
┃✾ Anti Bug troli, slayer Dll✔️
┃✾ Anti kadaluarsa ✔️
┃✾ Instantik✔️
┃✾ Anti hapus pesan ✔️
┃✾ Unclone Version✔️
┃✾ Broadcast ✔️
┃✾ Kebal All virus✔️
┃✾ Mode pesawat✔️
┗━━━━━━ꕥ
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '↗️Link', url: 'https://cararegistrasi.com/TyMuTxZ'}},
]
let tm = {
text: text,
footer: wm,
templateButtons: templateButtons,
image: {url: set.fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^waimune2$/i

export default handler
