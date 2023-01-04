import fetch from 'node-fetch'
const { __dirname } = (await import('../../lib/helper.js')).default 
let handler = async (m, { conn, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who)
let name = await conn.getName(who)
    conn.hartatahta = conn.hartatahta ? conn.hartatahta : {}
    if (m.chat in conn.hartatahta) throw 'Masih ada yang sedang membuat\nTeks Harta Tahta\ndi chat ini... tunggu sampai selesai'
    else conn.hartatahta[m.chat] = true
    conn.reply(m.chat, set.wait)
    try {
        let img = await ht(text ? text : 'Kosong')
        conn.sendFile(m.chat, img, text + '.png', `
*${set.htjava} Harta*
*${set.htjava} Tahta*
*${set.htjava} ${text}*
`, m, null, { fileLength: set.fsizedoc, seconds: set.fsizedoc, contextInfo: {
          externalAdReply :{
    mediaUrl: set.ig,
    mediaType: 2,
    description: set.wm, 
    title: '👋 Hai, ' + name + ' ' + set.ucapan,
    body: set.botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: set.gcbot
     }}
  })
    } finally {
        delete conn.hartatahta[m.chat]
    }
}
handler.help = ['hartatahta <teks>']
handler.tags = ['maker']
handler.command = /^((harta)?tahta)$/i
handler.limit = true
export default handler

import { spawn } from 'child_process'
import { readdirSync, readFileSync, unlinkSync } from 'fs'
import { join } from 'path'

let __dirname1 = __dirname(import.meta.url)
let src = join(__dirname1, '../System/src/')
let tmp = join(__dirname1, '../tmp/')
let _font = join(src, 'font')
let aesthetic = join(src, 'Aesthetic')

function ht(text = '') {
    return new Promise((resolve, reject) => {
        let img = join(aesthetic, pickRandom(readdirSync(aesthetic)))
        let font = join(_font, 'Roboto-Black.ttf')
        let w = 1024
        let h = w
        let s = w + 'x' + h
        let xF = `(${noise('X', 2, w, 1)}+${noise('Y', 1, h, 1)})/2+128`
        let yF = `((${pickRandom(['', '-'])}${45 * w / 2048}*${pickRandom(['sin', 'cos'])}(X/${w}*4*PI))+${noise('X', 5, w, 0.8)}+${noise('Y', 2, h, 1)})/1.7+128`
        let fsize = 320 / 2048 * w
        let lh = 1.5
        let format = ''
        let layers = [
            `[v:0]scale=${s}${format}[im]`,
            textArgs('HARTA', 'black', 'white', fsize, font, '(w-text_w)/2', `(h-text_h)/2-(text_h*${lh})`, w, h) + format + '[top]',
            textArgs('TAHTA', 'black', 'white', fsize, font, '(w-text_w)/2', `(h-text_h)/2`, w, h) + format + '[mid]',
            textArgs(text, 'black', 'white', fsize, font, '(w-text_w)/2', `(h-text_h)/2+(text_h*${lh})`, w, h) + format + '[bot]',
            '[top][mid]blend=all_mode=addition[con]',
            '[con][bot]blend=all_mode=addition[txt]',
            `nullsrc=s=${s},geq='r=${xF}:g=${xF}:b=${xF}'[dx]`,
            `nullsrc=s=${s},geq='r=${yF}:g=${yF}:b=${yF}'[dy]`,
            '[txt][dx][dy]displace[wa]',
            '[im][wa]blend=all_mode=multiply:all_opacity=1'
        ]

        let o = 1 * new Date + '_harta_tahta.png'
        o = join(tmp, o)
        let args = [
            '-y',
            '-i', img,
            '-filter_complex', layers.join(';'),
            '-frames:v', '1',
            o
        ]
        
        spawn('ffmpeg', args)
            .on('error', reject)
            .on('close', () => {
                try {
                    resolve(readFileSync(o))
                    unlinkSync(o)
                } catch (e) {
                    reject(e)
                }
            })
        //.stderr.on('data', a => console.log(a+''))
    })
}
