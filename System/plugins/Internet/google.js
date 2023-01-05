import { googleIt } from '@bochilteam/scraper'
let handler = async (m, { conn, command, args }) => {
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
        conn.reply(m.chat, msg)
    }
handler.help = ['google', 'googlef'].map(v => v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^googlef?$/i


export default handler