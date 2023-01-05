import fetch from 'node-fetch'
const { API } = (await import('../../lib/helper.js')).default 
let handler = async (m, { conn, sedPrefix, command }) => {
    try {
        let res = await fetch(API('zahir', '/api/muslim/bacaanshalat', {}, 'apikey'))
        let json = await res.json()
        let bacaan = json.result.map((v, i) => `${i + 1}. ${v.name}\n↳ ${v.arabic}\n↳ ${v.latin}\n↳ ${v.terjemahan}`).join('\n\n')
        m.reply(bacaan)
    } catch (e) {
        m.reply('rest api mati')
        conn.reply(set.owner, 'carikan api zahir untuk bacaan shalat')
    }
}
handler.help = ['bacaanshalat']
handler.tags = ['islam']
handler.command = /^(bacaansh?(a|o)lat)$/i
export default handler