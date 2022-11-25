let handler = async (m, { conn, usedPrefix, command }) => {
let nyenye = `https://zenzapis.xyz/api/morensfw/${command}?apikey=${set.zenzkey}`
conn.sendButton(m.chat, 'Nih kak', wm, nyenye, [['Next', `${usedPrefix}${command}`]]) 
}
handler.help = ['ahegao', 'ass', 'bdsm', 'blowjob', 'cum', 'ero', 'femdom', 'foot', 'gangbang', 'glasses', 'hentai', 'jahy', 'maid', 'manga', 'neko', 'orgy', 'panties', 'pussy','sfwneko', 'tentacles', 'thighs', 'yuri']
handler.tags = ['nsfw']
handler.command = /^(ahegao|ass|bdsm|blowjob|cum|ero|femdom|foot|gangbang|glasses|hentai|jahy|maid|manga|neko|orgy|panties|pussy|sfwneko|tentacles|thighs|yuri)$/i
//buatan hyzer, jgn hapus atuh 😊
export default handler