import { format } from 'util'
const { default: { Image } } = await import('node-webpmux')

let handler = async (m, { conn, text }) => {
    if (!m.quoted) return conn.reply(m.chat, 'Tag stikernya!')
    if (/sticker/.test(m.quoted.mtype)) {
        let img = new Image()
        await img.load(await m.quoted.download())
        conn.reply(m.chat, format(JSON.parse(img.exif.slice(22).toString())))
    }
}
handler.help = ['getexif']
handler.tags = ['sticker']

handler.command = /^(getexif)$/i

export default handler