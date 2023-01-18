// @ts-check
import { tmpdir } from "os"
import Crypto from "crypto" //gk bs ktny
const ffmpegPath = (await import('@ffmpeg-installer/ffmpeg')).path;
import ff from "fluent-ffmpeg"
import webp from "node-webpmux"  //cr cr
import { createReadStream, readFileSync, writeFileSync, promises, ReadStream, unlinkSync} from 'fs'
import { join, dirname } from 'path'
import { spawn } from 'child_process'
import { Readable } from 'stream'
import { fileTypeFromBuffer } from 'file-type'
import fetch from 'node-fetch'; //gkbs
import { fileURLToPath } from 'url'
import { FormData, Blob } from 'formdata-node';
import { JSDOM } from 'jsdom';
import axios from 'axios' //gkbs
import {load} from 'cheerio'
import {format} from 'util'
import request from 'request' //gkbs
import uploadFile from './uploadFile.js'
import uploadImage from './uploadImage.js'

const {  __dirname, isReadableStream, saveStreamToFile } = (await import('./helper.js')).default 
const __dirname1 = __dirname(import.meta.url)
const __dirname2 = dirname(fileURLToPath(import.meta.url))
const tmp = join(__dirname2, '../tmp')

/**
 * 
 * @param {Buffer|String} source 
 */
 async function webp2mp4(source) {
  let form = new FormData()
  let isUrl = typeof source === 'string' && /https?:\/\//.test(source)
  const blob = !isUrl && new Blob([source.toArrayBuffer()])
  form.append('new-image-url', isUrl ? blob : '')
  form.append('new-image', isUrl ? '' : blob, 'image.webp')
  let res = await fetch('https://s6.ezgif.com/webp-to-mp4', {
    method: 'POST',
    body: form
  })
  let html = await res.text()
  let { document } = new JSDOM(html).window
  let form2 = new FormData()
  let obj = {}
  for (let input of document.querySelectorAll('form input[name]')) {
    obj[input.name] = input.value
    form2.append(input.name, input.value)
  }
  let res2 = await fetch('https://ezgif.com/webp-to-mp4/' + obj.file, {
    method: 'POST',
    body: form2
  })
  let html2 = await res2.text()
  let { document: document2 } = new JSDOM(html2).window
  return new URL(document2.querySelector('div#output > p.outfile > video > source').src, res2.url).toString()
}

async function webp2png(source) {
  let form = new FormData()
  let isUrl = typeof source === 'string' && /https?:\/\//.test(source)
  const blob = !isUrl && new Blob([source.toArrayBuffer()])
  form.append('new-image-url', isUrl ? blob : '')
  form.append('new-image', isUrl ? '' : blob, 'image.webp')
  let res = await fetch('https://s6.ezgif.com/webp-to-png', {
    method: 'POST',
    body: form
  })
  let html = await res.text()
  let { document } = new JSDOM(html).window
  let form2 = new FormData()
  let obj = {}
  for (let input of document.querySelectorAll('form input[name]')) {
    obj[input.name] = input.value
    form2.append(input.name, input.value)
  }
  let res2 = await fetch('https://ezgif.com/webp-to-png/' + obj.file, {
    method: 'POST',
    body: form2
  })
  let html2 = await res2.text()
  let { document: document2 } = new JSDOM(html2).window
  return new URL(document2.querySelector('div#output > p.outfile > img').src, res2.url).toString()
}

const toBuffer = async (file) => {
  file = Buffer.isBuffer(file) ? file : typeof file === 'string' && file.startsWith('http') ? (await axios.get(file, {
  responseType: 'arraybuffer',
  })).data : readFileSync(file)
  const buffer = await fileTypeFromBuffer(file)
  return { buffer: file, mime: buffer.mime }
  }
   
  const pendek = async (url) => {
  var tin = await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)
  return tin.data
  }
   
   
  // set exif
  async function setExif(webpSticker, packname, author, extra = {}) {
  return new Promise(async (resolve, reject) => {
  const img = new Image()
  const stickerPackId = randomBytes(16).toString('hex').slice(0, 8)
  const json = {
  'sticker-pack-id': stickerPackId,
  'sticker-pack-name': global.set.packname,
  'sticker-pack-publisher': global.set.author,
  'sticker-pack-publisher-id': global.set.author,
  'sticker-pack-version': '1.0.0',
  'android-app-store-link': 'https://hardianto.xyz',
  'ios-app-store-link': 'https://hardianto.xyz',
  'sticker-pack-description': 'sticker ini merupakan sticker yang telah di generate oleh jamal',
  emojis: ['❤', '😍', '😘', '💕', '😻', '💑', '👩‍❤‍👩', '👨‍❤‍👨', '💏', '👩‍❤‍💋‍👩', '👨‍❤‍💋‍👨', '🧡', '💛', '💚', '💙', '💜', '🖤', '💔', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '💋', '👩‍❤️‍💋‍👩', '👨‍❤️‍💋‍👨', '👩‍❤️‍👨', '👩‍❤️‍👩', '👨‍❤️‍👨', '👩‍❤️‍💋‍👨', '👬', '👭', '👫', '🥰', '😚', '😙', '👄', '🌹', '😽', '❣️', '❤️', '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '🙂', '😛', '😝', '😜', '🤪', '🤗', '😺', '😸', '😹', '☺', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈', '👯‍♂️', '👯', '👯‍♀️', '💃', '🕺', '🔥', '⭐️', '✨', '💫', '🎇', '🎆', '🍻', '🥂', '🍾', '🎂', '🍰', '☹', '😣', '😖', '😫', '😩', '😢', '😭', '😞', '😔', '😟', '😕', '😤', '😠', '😥', '😰', '😨', '😿', '😾', '😓', '🙍‍♂', '🙍‍♀', '💔', '🙁', '🥺', '🤕', '☔️', '⛈', '🌩', '🌧,😯', '😦', '😧', '😮', '😲', '🙀', '😱', '🤯', '😳', '❗', '❕', '🤬', '😡', '😠', '🙄', '👿', '😾', '😤', '💢', '👺', '🗯️', '😒', '🥵', '👋'],
  ...extra,
  }
  let exifAttr = Buffer.from([0x49, 0x49, 0x2a, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
  let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
  let exif = Buffer.concat([exifAttr, jsonBuffer])
  exif.writeUIntLE(jsonBuffer.length, 14, 4)
  await img.load(webpSticker)
  img.exif = exif
  return resolve(await img.save(null))
  })
  }
   
  async function makeWm(
  file,
  datao = {
  author: '',
  pack: '',
  keepScale: true,
  removebg: 'HQ',
  circle: false,
  }
  ) {
  return new Promise(async (resolve, reject) => {
  const buffer = await toBuffer(file)
  if (buffer.mime == 'image/webp') return resolve(await setExif(buffer.buffer, datao.pack, datao.author))
  const config2 = {
  ...datao,
  processOptions: {
  crop: !datao.keepScale,
  fps: 10,
  startTime: '00:00:00.0',
  endTime: '00:00:7.0',
  loop: 0,
  },
  }
  const DEFAULT_URL = 'https://sticker-api.openwa.dev/'
  let Type = buffer.mime.includes('image') ? 'image' : 'file'
  let url = String(`${DEFAULT_URL}${Type === 'image' ? 'prepareWebp' : 'convertMp4BufferToWebpDataUrl'}`)
  await axios(url, {
  method: 'POST',
  headers: {
  Accept: 'application/json, text/plain, /',
  'Content-Type': 'application/json;charset=utf-8',
  'User-Agent': 'WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
  },
  data: JSON.stringify(
  Object.assign(
  config,
  { stickerMetadata: config2 },
  {
  [Type]: `data:${buffer.mime};base64,${buffer.buffer.toString('base64')}`,
  }
  )
  ),
  maxBodyLength: Infinity,
  maxContentLength: Infinity,
  })
  .then(async ({ data }) => {
  if (Type === 'image') return resolve(await this.setExif(Buffer.from(data.webpBase64, 'base64'), datao.author, datao.pack))
  else {
  const webpBase = data.replace(/^data:(.*?);base64,/, '')
  const webpBase64 = webpBase.replace(/ /g, '+')
  const file = Buffer.from(webpBase64, 'base64')
  resolve(await this.setExif(file, datao.pack, datao.author))
  }
  })
  .catch((err) => reject(err))
  })
  }
   
  async function attp(text){
  return new Promise(async(resolve, reject) => {
  const getid = await axios.get('https://id.bloggif.com/text')
  const id = load(getid.data)('#content > form').attr('action')
  const options = {
  method: "POST",
  url: `https://id.bloggif.com${id}`,
  headers: {
  "content-type": 'application/x-www-form-urlencoded',
  "user-agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
  },
  formData: {
  target: 1,
  text: text,
  glitter_id: Math.floor(Math.random() * 2821),
  font_id: 'tahoma_bold',
  //'candara_bold',
  //'comic_sans_ms_bold',
  //'lucida_sans_demibold_roman',
  size: 100,
  bg_color: 'FFFFFF',
  transparent: 1,
  border_color: '000000',
  border_width: 0,
  shade_color: '000000',
  shade_width: 0,
  angle: 0,
  text_align: 'center'
  },
  };
  request(options, async function(error, response, body) {
  if (error) return new Error(error)
  const $ = load(body)
  const url = $('#content > div:nth-child(10) > a').attr('href')
  var anu = await (await fetch(`https://id.bloggif.com${url}`)).buffer()
  resolve({status: 200, author: global.set.pack, result: anu})
  })
  })
  }
   
  async function ttp(text){
  return new Promise((resolve, reject) => {
  const options = {
  method: 'POST',
  url: `https://www.picturetopeople.org/p2p/text_effects_generator.p2p/transparent_text_effect`,
  headers: {
  "Content-Type": "application/x-www-form-urlencoded",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
  "Cookie": "_ga=GA1.2.1667267761.1655982457; _gid=GA1.2.77586860.1655982457; __gads=ID=c5a896288a559a38-224105aab0d30085:T=1655982456:RT=1655982456:S=ALNI_MbtHcmgQmVUZI-a2agP40JXqeRnyQ; __gpi=UID=000006149da5cba6:T=1655982456:RT=1655982456:S=ALNI_MY1RmQtva14GH-aAPr7-7vWpxWtmg; _gat_gtag_UA_6584688_1=1"
  },
  formData: {
  'TextToRender': text,
  'FontSize': '100',
  'Margin': '30',
  'LayoutStyle': '0',
  'TextRotation': '0',
  'TextColor': 'ffffff',
  'TextTransparency': '0',
  'OutlineThickness': '3',
  'OutlineColor': '000000',
  'FontName': 'Lekton',
  'ResultType': 'view'
  }
  };
  request(options, async function(error, response, body) {
  if (error) throw new Error(error)
  const $ = load(body)
  const result = 'https://www.picturetopeople.org' + $('#idResultFile').attr('value')
  var res = await (await fetch(result)).buffer()
  resolve({ status: 200, author: global.set.pack, result: res })
  });
  })
  }

/**
 * Image to Sticker
 * @param {Buffer} img Image Buffer
 * @param {String} url Image URL
 */
function sticker2(img, url) {
  return new Promise(async (resolve, reject) => {
    try {
      if (url) {
        let res = await fetch(url)
        if (res.status !== 200) throw await res.text()
        img = await res.buffer()
      }
      let inp = join(tmp, +new Date + '.jpeg')
      await promises.writeFile(inp, img)
      let ff = spawn('ffmpeg', [
        '-y',
        '-i', inp,
        '-vf', 'scale=512:512:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1',
        '-f', 'png',
        '-'
      ])
      ff.on('error', reject)
      ff.on('close', async () => {
        await promises.unlink(inp)
      })
      let bufs = []
      const [_spawnprocess, ..._spawnargs] = [...(module.exports.support.gm ? ['gm'] : module.exports.magick ? ['magick'] : []), 'convert', 'png:-', 'webp:-']
      let im = spawn(_spawnprocess, _spawnargs)
      im.on('error', e => this.reply(m.chat, format(e), m))
      im.stdout.on('data', chunk => bufs.push(chunk))
      ff.stdout.pipe(im.stdin)
      im.on('exit', () => {
        resolve(Buffer.concat(bufs))
      })
    } catch (e) {
      reject(e)
    }
  })
}

async function canvas(code, type = 'png', quality = 0.92) {
  let res = await fetch('https://nurutomo.herokuapp.com/api/canvas?' + queryURL({
    type,
    quality
  }), {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
      'Content-Length': code.length
    },
    body: code
  })
  let image = await res.buffer()
  return image
}

function queryURL(queries) {
  return new URLSearchParams(Object.entries(queries))
}

/**
 * Image to Sticker
 * @param {Buffer} img Image Buffer
 * @param {String} url Image URL
 */
async function sticker1(img, url) {
  url = url ? url : await uploadImage(img)
  let {
    mime
  } = url ? { mime: 'image/jpeg' } : await fileTypeFromBuffer(img)
  let sc = `let im = await loadImg('data:${mime};base64,'+(await window.loadToDataURI('${url}')))
c.width = c.height = 512
let max = Math.max(im.width, im.height)
let w = 512 * im.width / max
let h = 512 * im.height / max
ctx.drawImage(im, 256 - w / 2, 256 - h / 2, w, h)
`
  return await canvas(sc, 'webp')
}

/**
 * Image/Video to Sticker
 * @param {Buffer} img Image/Video Buffer
 * @param {String} url Image/Video URL
 * @param {String} packname EXIF Packname
 * @param {String} author EXIF Author
 */
async function sticker3(img, url, packname, author) {
  url = url ? url : await uploadFile(img)
  let res = await fetch('https://api.xteam.xyz/sticker/wm?' + new URLSearchParams(Object.entries({
    url,
    packname,
    author
  })))
  return await res.buffer()
}

/**
 * Image to Sticker
 * @param {Buffer} img Image/Video Buffer
 * @param {String} url Image/Video URL
 */
async function sticker4(img, url) {
  if (url) {
    let res = await fetch(url)
    if (res.status !== 200) throw await res.text()
    img = await res.buffer()
  }
  return await ffmpeg(img, [
    '-vf', 'scale=512:512:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1'
  ], 'jpeg', 'webp')
}

async function sticker5(img, url, packname, author, categories = [''], extra = {}) {
  const { Sticker } = await import('wa-sticker-formatter')
  const stickerMetadata = {
    type: 'default',
    pack: global.set.packname,
    author,
    categories,
    ...extra
  }
  return (new Sticker(img ? img : url, stickerMetadata)).toBuffer()
}

/**
 * Convert using fluent-ffmpeg
 * @param {string} img 
 * @param {string} url 
 */
function sticker6(img, url) {
  return new Promise(async (resolve, reject) => {
    if (url) {
      let res = await fetch(url)
      if (res.status !== 200) throw await res.text()
      img = await res.buffer()
    }
    const type = await fileTypeFromBuffer(img) || {
      mime: 'application/octet-stream',
      ext: 'bin'
    }
    if (type.ext == 'bin') reject(img)
    const tmp = join(__dirname2, `../tmp/${+ new Date()}.${type.ext}`)
    const out = join(tmp + '.webp')
    await promises.writeFile(tmp, img)
    // https://github.com/MhankBarBar/termux-wabot/blob/main/index.js#L313#L368
    let Fffmpeg = /video/i.test(type.mime) ? ff(tmp).inputFormat(type.ext) : ff(tmp).input(tmp)
    Fffmpeg
      .on('error', function (err) {
        console.error(err)
        promises.unlink(tmp)
        reject(img)
      })
      .on('end', async function () {
        promises.unlink(tmp)
        resolve(await promises.readFile(out))
      })
      .addOutputOptions([
        `-vcodec`, `libwebp`, `-vf`,
        `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`
      ])
      .toFormat('webp')
      .save(out)
  })
}
/**
 * Add WhatsApp JSON Exif Metadata
 * Taken from https://github.com/pedroslopez/whatsapp-web.js/pull/527/files
 * @param {Buffer} webpSticker 
 * @param {String} packname 
 * @param {String} author 
 * @param {String} categories 
 * @param {Object} extra 
 * @returns 
 */
async function addExif(webpSticker, packname, author, categories = [''], extra = {}) {
  const img = new webp.Image();
  const stickerPackId = Crypto.randomBytes(32).toString('hex');
  const json = { 'sticker-pack-id': stickerPackId, 'sticker-pack-name': packname, 'sticker-pack-publisher': author, 'emojis': categories, ...extra };
  let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00]);
  let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8');
  let exif = Buffer.concat([exifAttr, jsonBuffer]);
  exif.writeUIntLE(jsonBuffer.length, 14, 4);
  await img.load(webpSticker)
  img.exif = exif
  return await img.save(null)
}

/**
 * Image/Video to Sticker
 * @param {Buffer} img Image/Video Buffer
 * @param {String} url Image/Video URL
 * @param {...String} 
*/
async function sticker(img, url, ...args) {
  let lastError, stiker
  for (let func of [
    sticker3, global.set.support.ffmpeg && sticker6, sticker5,
    global.set.support.ffmpeg && global.set.support.ffmpegWebp && sticker4,
    global.set.support.ffmpeg && (global.set.support.convert || global.set.support.magick || global.set.support.gm) && sticker2,
    sticker1
  ].filter(f => f)) {
    try {
      stiker = await func(img, url, ...args)
      if (stiker.includes('html')) continue
      if (stiker.includes('WEBP')) {
        try {
          return await addExif(stiker, ...args)
        } catch (e) {
          console.error(e)
          return stiker
        }
      }
      throw stiker.toString()
    } catch (err) {
      lastError = err
      continue
    }
  }
  console.error(lastError)
  return lastError
}

const support = {
  ffmpeg: true,
  ffprobe: true,
  ffmpegWebp: true,
  convert: true,
  magick: false,
  gm: false,
  find: false
}

/**
 * @param {Buffer | Readable} buffer 
 * @param {string[]} args 
 * @param {string} ext 
 * @param {string} ext2 
 * @returns {Promise<{
 *  data: ReadStream; 
 *  filename: string; 
 *  toBuffer: () => Promise<Buffer>;
 *  clear: () => Promise<void>;
 * }>}
 */
function ffmpeg(buffer, args = [], ext = '', ext2 = '') {
  return new Promise(async (resolve, reject) => {
    try {
      const tmp = join(__dirname1, `../tmp/${Date.now()}.${ext}`)
      const out = `${tmp}.${ext2}`

      const isStream = isReadableStream(buffer)
      if (isStream) await saveStreamToFile(buffer, tmp)
      else await promises.writeFile(tmp, buffer)

      spawn('ffmpeg', [
        '-y',
        '-i', tmp,
        ...args,
        out
      ])
        .once('error', reject)
        .once('close', async (code) => {
          try {
            await promises.unlink(tmp)
            if (code !== 0) return reject(code)
            const data = createReadStream(out)
            resolve({
              data,
              filename: out,
              async toBuffer() {
                const buffers = []
                for await (const chunk of data) buffers.push(chunk)
                return Buffer.concat(buffers)
              },
              async clear() {
                data.destroy()
                await promises.unlink(out)
              }
            })
          } catch (e) {
            reject(e)
          }
        })
    } catch (e) {
      reject(e)
    }
  })
}

/**
 * Convert Audio to Playable WhatsApp Audio
 * @param {Buffer} buffer Audio Buffer
 * @param {String} ext File Extension 
 * @returns {ReturnType<typeof ffmpeg>}
 */
function toPTT(buffer, ext) {
  return ffmpeg(buffer, [
    '-vn',
    '-c:a', 'libopus',
    '-b:a', '128k',
    '-vbr', 'on',
  ], ext, 'ogg')
}

/**
 * Convert Audio to Playable WhatsApp PTT
 * @param {Buffer} buffer Audio Buffer
 * @param {String} ext File Extension 
 * @returns {ReturnType<typeof ffmpeg>}
 */
function toAudio(buffer, ext) {
  return ffmpeg(buffer, [
    '-vn',
    '-c:a', 'libopus',
    '-b:a', '128k',
    '-vbr', 'on',
    '-compression_level', '10'
  ], ext, 'opus')
}

/**
 * Convert Audio to Playable WhatsApp Video
 * @param {Buffer} buffer Video Buffer
 * @param {String} ext File Extension 
 * @returns {ReturnType<typeof ffmpeg>}
 */
function toVideo(buffer, ext) {
  return ffmpeg(buffer, [
    '-c:v', 'libx264',
    '-c:a', 'aac',
    '-ab', '128k',
    '-ar', '44100',
    '-crf', '32',
    '-preset', 'slow'
  ], ext, 'mp4')
}


ff.setFfmpegPath(ffmpegPath);

async function imageToWebp (media) {

    const tmpFileOut = join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    const tmpFileIn = join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.jpg`)

    writeFileSync(tmpFileIn, media)

    await new Promise((resolve, reject) => {
        ff(tmpFileIn)
            .on("error", reject)
            .on("end", () => resolve(true))
            .addOutputOptions([
                "-vcodec",
                "libwebp",
                "-vf",
                "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
            ])
            .toFormat("webp")
            .save(tmpFileOut)
    })

    const buff = readFileSync(tmpFileOut)
    unlinkSync(tmpFileOut)
    unlinkSync(tmpFileIn)
    return buff
}

async function videoToWebp (media) {

    const tmpFileOut = join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    const tmpFileIn = join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.mp4`)

    writeFileSync(tmpFileIn, media)

    await new Promise((resolve, reject) => {
        ff(tmpFileIn)
            .on("error", reject)
            .on("end", () => resolve(true))
            .addOutputOptions([
                "-vcodec",
                "libwebp",
                "-vf",
                "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse",
                "-loop",
                "0",
                "-ss",
                "00:00:00",
                "-t",
                "00:00:05",
                "-preset",
                "default",
                "-an",
                "-vsync",
                "0"
            ])
            .toFormat("webp")
            .save(tmpFileOut)
    })

    const buff = readFileSync(tmpFileOut)
    unlinkSync(tmpFileOut)
    unlinkSync(tmpFileIn)
    return buff
}

async function writeExifImg (media, metadata) {
    let wMedia = await imageToWebp(media)
    const tmpFileIn = join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    const tmpFileOut = join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    writeFileSync(tmpFileIn, wMedia)

    if (metadata.packname || metadata.author) {
        const img = new webp.Image()
        const json = { "sticker-pack-id": `https://github.com/DikaArdnt/Hisoka-Morou`, "sticker-pack-name": metadata.packname, "sticker-pack-publisher": metadata.author, "emojis": metadata.categories ? metadata.categories : [""] }
        const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
        const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
        const exif = Buffer.concat([exifAttr, jsonBuff])
        exif.writeUIntLE(jsonBuff.length, 14, 4)
        await img.load(tmpFileIn)
        unlinkSync(tmpFileIn)
        img.exif = exif
        await img.save(tmpFileOut)
        return tmpFileOut
    }
}

async function writeExifVid (media, metadata) {
    let wMedia = await videoToWebp(media)
    const tmpFileIn = join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    const tmpFileOut = join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    writeFileSync(tmpFileIn, wMedia)

    if (metadata.packname || metadata.author) {
        const img = new webp.Image()
        const json = { "sticker-pack-id": `https://github.com/DikaArdnt/Hisoka-Morou`, "sticker-pack-name": metadata.packname, "sticker-pack-publisher": metadata.author, "emojis": metadata.categories ? metadata.categories : [""] }
        const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
        const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
        const exif = Buffer.concat([exifAttr, jsonBuff])
        exif.writeUIntLE(jsonBuff.length, 14, 4)
        await img.load(tmpFileIn)
        unlinkSync(tmpFileIn)
        img.exif = exif
        await img.save(tmpFileOut)
        return tmpFileOut
    }
}

async function writeExif (media, metadata) {
    let wMedia = /webp/.test(media.mimetype) ? media.data : /image/.test(media.mimetype) ? await imageToWebp(media.data) : /video/.test(media.mimetype) ? await videoToWebp(media.data) : ""
    const tmpFileIn = join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    const tmpFileOut = join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    writeFileSync(tmpFileIn, wMedia)

    if (metadata.packname || metadata.author) {
        const img = new webp.Image()
        const json = { "sticker-pack-id": `https://github.com/DikaArdnt/Hisoka-Morou`, "sticker-pack-name": metadata.packname, "sticker-pack-publisher": metadata.author, "emojis": metadata.categories ? metadata.categories : [""] }
        const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
        const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
        const exif = Buffer.concat([exifAttr, jsonBuff])
        exif.writeUIntLE(jsonBuff.length, 14, 4)
        await img.load(tmpFileIn)
        unlinkSync(tmpFileIn)
        img.exif = exif
        await img.save(tmpFileOut)
        return tmpFileOut
    }
}
//converter,exif,sticker,web2mp4
export { imageToWebp, videoToWebp, writeExifImg, writeExifVid, writeExif,  
  toAudio, toPTT, toVideo, ffmpeg,
  sticker, sticker1, sticker2, sticker3, sticker4, sticker6, addExif, support,  
  webp2mp4, webp2png,
  makeWm, setExif, attp, ttp  }