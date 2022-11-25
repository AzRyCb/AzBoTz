//created by Scooppt
import fetch from "node-fetch";

let handler  = async (m, { conn, text }) => {
 try {
    let res = await fetch('https://some-random-api.ml/img/pikachu')
    let json = await res.json()
    if (json.status) throw json
    let caption = `
Pikacu
`.trim()
    conn.sendFile(m.chat, json.link, '', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Error!*_'
    }
}

handler.help = ['pikachu']
handler.tags = ['image']
handler.command = /^pikachu$/i

export default handler
