
//-- module internal
import Connection from './lib/connection.js'
import jadibot from './lib/mywab.js'
import db from './lib/database.js'
import clearTmp from './lib/clearTmp.js'
import { protoType, serialize } from './lib/socket.js'
import { plugins, loadPluginFiles, pluginFolder, pluginFilter } from './lib/plugins.js'
const { opts,  __dirname } = (await import('./lib/helper.js')).default 
const { store, storeFile, authFolder } = (await import('./lib/connection.js')).default 
//-- module eksternal
import cp, {spawn, exec as _exec} from 'child_process'
import fs from 'fs'
import {promisify} from 'util'
import chalk from 'chalk'
import {tmpdir, platform} from 'os'
import {join} from 'path'

(async() => {
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
process.on('uncaughtException', console.error)

//-- GLOBAL NEW
global.set = {
conect: Connection,
jbot: jadibot
}

//const __dirname1 = __dirname(import.meta.url)
const exec = promisify(_exec).bind(cp)
const __dirname1 = __dirname(import.meta)

protoType()
serialize()

const conn = Object.defineProperty(Connection, 'conn', {
  value: await Connection.conn,
  enumerable: true,
  configurable: true,
  writable: true
}).conn

// load plugins
loadPluginFiles(pluginFolder, pluginFilter, {
  // @ts-ignore
  logger: conn?.logger,
  recursiveRead: true
}).then(_ => console.log(Object.keys(plugins)))
  .catch(console.error)

setInterval(async () => {
    //await exec("pm2 restart System/index.js")
    await exec("reset System/index.js")
  }, 60 * 60 * 1000)

if (opts['clearses']) {
  setInterval(async () => {
try {
  await exec(`find ${authFolder} ! -name /creds.json -maxdepth 1 -type f -delete`)
// @ts-ignore
let sesi = fs.readdirSync('System/data/jadibot').filter(v => !isNaN(v))
if (!sesi.length) return 
  for (let i of sesi) {
    await exec(`find System/data/jadibot/${i} ! -name creds.json -maxdepth 1 -type f -delete`)
  }
  console.log(chalk.green("\n[Info] : Session lama telah terhapus\n"))
} catch (e) {
      console.log(chalk.red("\n[Info] : Gagal mnghapus session lama\n"))
      console.log(e)
    }
  }, 300 * 1000)
}

if (!opts['test']) {
  setInterval(async () => {
    //console.log("WRITE DATABASE")
    await Promise.allSettled([
      db.data ? db.write() : Promise.reject('db.data is null'),
      (opts['autocleartmp'] || opts['cleartmp']) ? clearTmp() : Promise.resolve()
    ])
    store.writeToFile(storeFile)

// store.writeToFile(storeFile)
if (!fs.existsSync('System/data/jadibot')) return 
// @ts-ignore
let listSampah = fs.readdirSync('System/data/jadibot').filter(v => isNaN(v))
if (!listSampah.length) return 
  for (let namaSampah of listSampah) promises.rmdir('System/data/jadibot/' + namaSampah).catch(_=>_)
  }, 60 * 1000)
}
if (opts['server']) (await import('./server.js')).default(conn, process.env.PORT || process.env.SERVER_PORT || 3000)

setInterval(async () => {
	var a = await clearTmp()
	console.log(chalk.cyanBright('Successfully clear tmp'))
}, 180000)

// Quick Test
async function _quickTest() {
  let test = await Promise.all([
    spawn('ffmpeg'),
    spawn('ffprobe'),
    spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
    spawn('convert'),
    spawn('magick'),
    spawn('gm'),
    spawn('find', ['--version'])
  ].map(p => {
    return Promise.race([
      new Promise(resolve => {
        p.on('close', code => {
          resolve(code !== 127)
        })
      }),
      new Promise(resolve => {
        p.on('error', _ => resolve(false))
      })
    ])
  }))
  let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test
  //logger.info(test)
  let s = global.set.support = {
    ffmpeg,
    ffprobe,
    ffmpegWebp,
    convert,
    magick,
    gm,
    find
  }
  // require('./lib/sticker').support = s
  Object.freeze(global.set.support)

  if (!s.ffmpeg) (conn?.logger || console).warn('Please install ffmpeg for sending videos (pkg install ffmpeg)')
  if (s.ffmpeg && !s.ffmpegWebp) (conn?.logger || console).warn('Stickers may not animated without libwebp on ffmpeg (--enable-libwebp while compiling ffmpeg)')
  if (!s.convert && !s.magick && !s.gm) (conn?.logger || console).warn('Stickers may not work without imagemagick if libwebp on ffmpeg doesnt isntalled (pkg install imagemagick)')
}

_quickTest()
  //.then(() => (conn?.logger?.info || console.log)('☑️ Quick Test Done'))
  .catch(console.error)
})()
