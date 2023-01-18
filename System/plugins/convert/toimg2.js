import { spawn } from 'child_process'
import { format } from 'util'

let handler = async (m, { conn, usedPrefix, command }) => {
    if (!set.support.convert &&
        !set.support.magick &&
        !set.support.gm) return handler.disabled = true // Disable if doesnt support
    const notStickerMessage = `Reply sticker with command *${usedPrefix + command}*`
    if (!m.quoted) throw notStickerMessage
    let q = m.quoted
    if (/sticker/.test(q.mediaType)) {
        let sticker = await q.download()
        if (!sticker) throw sticker
        let bufs = []
        const [_spawnprocess, ..._spawnargs] = [...(set.support.gm ? ['gm'] : set.support.magick ? ['magick'] : []), 'convert', 'webp:-', 'png:-']
        let im = spawn(_spawnprocess, _spawnargs)
        im.on('error', e => conn.reply(m.chat, format(e)))
        im.stdout.on('data', chunk => bufs.push(chunk))
        im.stdin.write(sticker)
        im.stdin.end()
        im.on('exit', () => {
            conn.sendFile(m.chat, Buffer.concat(bufs), 'image.png', set.wm, m, null, adReply)
        })
    } else throw notStickerMessage
}
handler.help = ['toimg2 (reply)']
handler.tags = ['convert']
handler.command = /^t(oim(age|g)2|im(age|g)2)$/i

export default handler