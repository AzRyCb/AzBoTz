import { webp2png } from '../../lib/sistem.js'
import { URL_REGEX } from '@adiwajshing/baileys'

let handler = async (m, { conn, args }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || q.mediaType || ''
  if (/image/.test(mime)) {
    let url = await webp2png(await q.download())
    await conn.updateProfilePicture(m.chat, { url }).then(_ => conn.reply(m.chat, 'Success update profile picture'))
  } else if (args[0] && args[0].match(URL_REGEX)) {
    await conn.updateProfilePicture(m.chat, { url: args[0] }).then(_ => conn.reply(m.chat, 'Success update profile picture'))
  } else throw 'Where\'s the media?'
}
handler.help = ['setppgrup']
handler.tags = ['admin']
handler.command = /^setpp(gc|grup|group)$/i
handler.group = handler.admin = handler.botAdmin = true

export default handler

