import fetch from 'node-fetch'
const { API } = (await import('../../lib/helper.js')).default 
let handler = async(m, { conn, text }) => {
    let res = await fetch(API('lolhum', '/api/nhentaisearch', { query: text }, 'apikey'))
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let keqing = json.result.map((v, i) => `#${i + 1}. \n*Kode:* ${v.id}\n*Title english:* ${v.title_english}\n*Title Japanese:* ${v.title_japanese}\n*Title:* ${v.title_native}\n*Date:* ${v.date_upload}\n*Page:* ${v.page}\n*Favourite:* ${v.favourite}\n==============\n`).join('\n') 
    if (json.status) conn.reply(m.chat,keqing)
    else throw json
}
handler.help = ['nhsearch <query>']
handler.tags = ['internet']
handler.command = /^(nhs|nhsearch)$/i

export default handler