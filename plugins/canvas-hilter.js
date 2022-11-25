import uploadFile from '../lib/uploadFile.js';
import {
	webp2png
} from '../lib/sistem.js';
let handler = async (m, {
	conn,
	text,
	usedPrefix: _p,
	command
}) => {
	var q = m.quoted ? m.quoted : m
	var mime = (q.msg || q).mimetype || q.mediaType || ''

	if (/webp|image/g.test(mime)) {
		var img = await q.download?.()
		if (!img) throw `balas gambar/stiker dengan perintah ${usedPrefix + command}`
		try {
			var out
			if (/image/g.test(mime)) out = await uploadFile(img)
			if ('image/webp'.includes(mime)) out = await webp2png(img)
			var a = (await axios.get(API('beni', 'api/canvas/hilter', {
				url: out
			}), {
				responseType: 'arraybuffer'
			})).data
			conn.sendFile(m.chat, a, '', 'nih bang', m)
		} catch (e) {
			if (e.response) {
				log(e.response.statusText)
				throw 'server error'
			} else {
				throw 'ada yang gak beres nih'
			}
		}
	}
}
handler.help = ['hilter']
handler.tags = ['canvas']
handler.command = /^hilter$/i
export default handler
