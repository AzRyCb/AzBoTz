//created by Scooppt
import fetch from "node-fetch";

let handler  = async (m, { conn, usedPrefix, command }) => {
    let res = await fetch(`https://some-random-api.ml/img/${command}`)
    let json = await res.json()
    if (json.status) throw json
    let caption = `
Pikacu
`.trim()
    conn.sendFile(m.chat, json.link, '', caption, m)
}

handler.help = ['pikachu', 'bird', 'cat', 'dog', 'fox', 'kangaroo', 'koala', 'panda', 'raccoon', 'red_panda', 'whale']
handler.tags = ['image']
handler.command = /^pikachu|bird|cat|dog|kangaroo|fox|koala|panda|raccoon|red_panda|whale$/i

export default handler
