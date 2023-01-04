import { webp2png } from '../../lib/sistem.js'
let handler = async (m, { conn, usedPrefix, command }) => {
    const notStickerMessage = `Reply sticker with command *${usedPrefix + command}*`
    if (!m.quoted) throw notStickerMessage
    const q = m.quoted || m
    let mime = q.mediaType || ''
    if (!/sticker/.test(mime)) throw notStickerMessage
    let media = await q.download()
    let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
    await conn.sendFile(m.chat, out, 'out.png', '*DONE (≧ω≦)ゞ*', m)
}
handler.help = ['toimage (reply)']
handler.tags = ['convert']
handler.command = /^(toimg|toimage)$/i

export default handler