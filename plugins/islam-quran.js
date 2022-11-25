import axios from "axios";
let handler = async(m, { conn, text }) => {
	axios.get(`https://api.banghasan.com/quran/format/json/acak`).then ((res) => {
	 	let sr = /{(.*?)}/gi;
         let hs = res.data.acak.id.ayat;
         let ket = `${hs}`.replace(sr, '');
         let hasil = `[${ket}] ${res.data.acak.ar.teks}\n\n${res.data.acak.id.teks}\n\n(QS.${res.data.surat.nama}, Ayat ${ket})`

     const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '.menu'}, type: 1},
]

const buttonMessage = {
    text: hasil,
    footer: wm,
    buttons: buttons,
    headerType: 1
}

conn.sendMessage(m.chat, buttonMessage)
	})
}
handler.help = ['ayatquran']
handler.tags = ['islam']
handler.command = /^(ayatquran)$/i

export default handler