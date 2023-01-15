import ai2d from '@arugaz/ai2d'
import uploadImage from '../../lib/uploadImage.js'

let handler = async(m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!/image\/(jpe?g|png)/.test(mime)) return conn.reply(m.chat, `Kirim gambar dengan caption atau reply ${usedPrefix + command}`, m)
let img = await q.download()
if (!img) return conn.reply(m.chat, `Kirim gambar dengan caption atau reply ${usedPrefix + command}`, m)
let image = await uploadImage(img)
            await ai2d(image, {               
               proxy: {
                  url: "http://101.32.184.53:3128",
                  chinese: true,
                  image: false,
               },
            }).then(async (h) => {
            //if (!result || result.constructor.name != 'String') return client.reply(m.chat, global.status.fail, m)
await conn.sendFile(m.chat, h, ``, `*DONE!!*`, m)
           })
}
handler.help = ['jadianime2'].map(v => v + ' (Balas foto)')
handler.tags = ['tools']
handler.command = /^jadianime2$/i

export default handler