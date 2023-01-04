import { googleIt } from '@bochilteam/scraper'
const { API } = (await import('../../lib/helper.js')).default 
let handler = async (m, { conn, command, args }) => {
    const fetch = (await import('node-fetch')).default
    let full = /f$/i.test(command)
    let text = args.join` `
    if (!text) return conn.reply(m.chat, 'Tidak ada teks untuk di cari', m)
    let url = 'https://google.com/search?q=' + encodeURIComponent(text)
    let search = await googleIt(text)
    let msg = search.articles.map(({
        // header,
        title,
        url,
        description
    }) => {
        return `*${title}*\n_${url}_\n_${description}_`
    }).join('\n\n')
    try {
        let ss = await (await fetch(API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).buffer()
        if (/<!DOCTYPE html>/i.test(ss.toBuffer().toString())) throw ''
        await conn.sendFile(m.chat, ss, 'screenshot.png', url + '\n\n' + msg, m)
    } catch (e) {
        m.reply(msg)
        m.reply('Maaf fitur ini tidak dapat digunakan')
        conn.reply(set.owner, 'fitur google digunakan lagi')
    }
}
handler.help = ['google', 'googlef'].map(v => v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^googlef?$/i


export default handler