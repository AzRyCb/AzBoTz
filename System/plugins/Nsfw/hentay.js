import fetch from 'node-fetch'
const { API } = (await import('../../lib/helper.js')).default 
let handler = async (m, { args, conn, usedPrefix, command }) => {
    let rgex = /(maid|waifu|marin-kitagawa|mori-calliope|raiden-shogun|oppai|selfies|uniform|ass|hentai|milf|oral|paizuri|ecchi|ero)/i
    let waifu
    if (rgex.test(args[0])) waifu = args[0].match(rgex)[0]
        else waifu = 'waifu'
    const response = await fetch(API('https://api.waifu.im', '/search', { included_tags: waifu }))
    const data = await response.json();
    if (!data.images[0].url) throw data;
    conn.sendFile(m.chat, data.images[0].url, data.images[0].signature + data.images[0].extension, data.images[0].source, m)
}
handler.help = ['hentay']
handler.tags = ['nsfw']
handler.command = /^(hentay)$/i

export default handler