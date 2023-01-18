/* Recode By Wudysoft */

import Jimp from 'jimp'
import axios from 'axios';
import md5 from 'md5';
import pkg from 'uuid';
const { v4: v4uuid } = pkg

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
await conn.sendMessage(m.chat, {
          react: {
            text: '⏳',
            key: m.key,
          }})
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (!/image/g.test(mime)) throw `Balas/Kirim Gambar Dengan Perintah ${usedPrefix + command}!`
    let image = await q.download?.()
    let anime = await ToAnime(image)
    let vid = anime.video_urls
    let img = anime.img_urls
    let res = [...vid, ...img]
    let spas = "                "
    let listSections = []
    Object.keys(res).map((v, index) => {
	listSections.push([spas + "[ RESULT " + ++index + " ]", [
          ["G E T", usedPrefix + "get " + res[v], "Type: " + res[v].slice(-3)]
        ]])
        })
	return conn.sendList(m.chat, set.htki + " 📺 AI MANGA 🔎 " + set.htka, `⚡ Silakan pilih Model di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, set.wm, "☂️ M O D E L ☂️", listSections, m)
}
handler.help = ['jadianime'].map(v => v + ' (Balas foto)')
handler.tags = ['tools']
handler.command = /^jadianime|toanime$/i
handler.limit = true
export default handler

async function ToAnime(buffer) {
    try {
        let imgData = buffer.toString('base64')

        const obj = {
            busiId: 'aiplay_ai_painting_anime_entry',
            extra: JSON.stringify({
                face_rects: [],
                version: 2,
                platform: 'web',
                data_report: {
                    parent_trace_id: v4uuid(),
                    root_channel: '',
                    level: 0,
                },
            }),
            images: [imgData],
        };
        const str = JSON.stringify(obj);
        const sign = md5(
            'https://h5.tu.qq.com' +
            (str.length + (encodeURIComponent(str).match(/%[89ABab]/g)?.length || 0)) +
            'HQ31X02e',
            );
        const response = await axios({
            method: 'POST',
            url: 'https://ai.tu.qq.com/trpc.shadow_cv.ai_processor_cgi.AIProcessorCgi/Process',
            data: obj,
            headers: {
                'Content-Type': 'application/json',
                'Origin': 'https://h5.tu.qq.com',
                'Referer': 'https://h5.tu.qq.com/',
                'User-Agent':
                'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
                'x-sign-value': sign,
                'x-sign-version': 'v1',
            },
            timeout: 30000,
        })
        if (!response.data) {
            throw 'No data'
        }
        if (response.data.msg === 'VOLUMN_LIMIT') {
            throw 'QQ rate limit caught'
        }
        if (response.data.msg === 'IMG_ILLEGAL') {
            throw 'Couldn\'t pass the censorship. Try another photo.'
        }
        if (response.data.code === 1001) {
            throw 'Muka Tertutup oleh sesuatu/Muka Tidak Terlihat, Harap Gunakan Foto Lain!.'
        }
        if (response.data.code === -2100) { // request image is invalid
            throw 'Coba Foto Lain Kak.'
        }
        if (response.data.code === 2119 || /* user_ip_country | service upgrading */ response.data.code === -2111 /* AUTH_FAILED */) {
            throw `Blocked ${JSON.stringify(response.data)}`
        }
        if (!response.data.extra) {
            throw 'Got no data from QQ: ' + JSON.stringify(response.data)
        }
        return JSON.parse(response.data.extra)
    } catch (err) {
        throw err
    }
}

async function Crop(img, x, y, lebar, tinggi) {
  let po = await Jimp.read(img);
  let tong = await po.crop(Number(x), Number(y), Number(lebar), Number(tinggi)).getBufferAsync(Jimp.MIME_JPEG)
  return tong
}