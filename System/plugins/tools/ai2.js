import AI2D from "@arugaz/ai2d";
let handler = async(m, { conn, text }) => {
let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (!/image/g.test(mime)) throw `Balas/Kirim Gambar Dengan Perintah ${usedPrefix + command}!`
    let image = await q.download?.()
// crop
let buff = await AI2D(image, {
  crop: "SINGLE", // SINGLE | COMPARED
}); //=> Buffer
  await conn.sendFile(m.chat, buff, '', set.wm, m)
}
handler.help = ['ai2d'].map(v => v + ' (Balas foto)')
handler.tags = ['tools']
handler.command = /^ai2d|arugaz$/i
handler.limit = true
export default handler