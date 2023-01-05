


//-- module internal
// @ts-check
import Connection, {logger} from './System/lib/connection.js'
import jadibot from './System/lib/mywab.js'
import db from './System/lib/database.js'
import { protoType, serialize } from './System/lib/socket.js'
import { plugins, loadPluginFiles, reload, pluginFolder, pluginFilter } from './System/lib/plugins.js'
const { API, opts, prefix, checkFileExists, __filename, __dirname } = (await import('./System/lib/helper.js')).default 

//-- module eksternal
import cp, {spawn, exec as _exec} from 'child_process'
import fs, {stat, unlink, readdir, existsSync, readdirSync, open} from 'fs' //gbisa 1 1
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

const TIME = 1000 * 60 * 3
const __dirname1 = __dirname(import.meta)
const exec = promisify(_exec).bind(cp)
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000

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
  logger: conn?.logger,
  recursiveRead: true
}).then(_ => console.log(Object.keys(plugins)))
  .catch(logger.error)

if (opts['clearses']) {
  setInterval(async () => {
try {
  await exec(`find ${Connection.authFolder} ! -name creds.json -maxdepth 1 -type f -delete`)
let sesi = readdirSync('System/jadibot').filter(v => !isNaN(v))
if (!sesi.length) return 
  for (let i of sesi) {
    await exec(`find System/jadibot/${i} ! -name creds.json -maxdepth 1 -type f -delete`)
  }
  logger.info(chalk.green("\n[Info] : Session lama telah terhapus\n"))
} catch {
      logger.info(chalk.red("\n[Info] : Gagal mnghapus session lama\n"))
    }
  }, 300 * 1000)
}

if (!opts['test']) {
  setInterval(async () => {
    console.log("WRITE DATABASE")
    await Promise.allSettled([
      db.data ? db.write() : Promise.reject('db.data is null'),
      (opts['autocleartmp'] || opts['cleartmp']) ? clearTmp() : Promise.resolve()
    ])
    Connection.store.writeToFile(Connection.storeFile)

// Connection.store.writeToFile(Connection.storeFile)
if (!existsSync('System/jadibot')) return 
let listSampah = readdirSync('System/jadibot').filter(v => isNaN(v))
if (!listSampah.length) return 
  for (let namaSampah of listSampah) fs.promises.rmdir('System/jadibot/' + namaSampah).catch(_=>_)
  }, 60 * 1000)
}
if (opts['server']) (await import('./System/server.js')).default(conn, PORT)

/* Clear */
async function clearTmp() {
  const tmp = [tmpdir(), join(__dirname1, './tmp')]
  const filename = []

  await Promise.allSettled(tmp.map(async (dir) => {
      const files = readdir(dir)
      for (const file of files) filename.push(join(dir, file))
  }))

  return await Promise.allSettled(filename.map(async (file) => {
      const stat1 = stat(file)
      if (stat1.isFile() && (Date.now() - stat1.mtimeMs >= TIME)) {
          // https://stackoverflow.com/questions/28588707/node-js-check-if-a-file-is-open-before-copy
          if (platform() === 'win32') {
              // https://github.com/nodejs/node/issues/20548
              // https://nodejs.org/api/fs.html#filehandleclose
              let fileHandle
              try {
                  fileHandle = open(file, 'r+')
              } catch (e) {
                conn.logger?.error('[clearTmp]', e, 'Skipping', file)
                  return e
              } finally {
                  await fileHandle?.close()
              }
          }
          unlink(file)
      }
  }))
}

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
  // require('./System/lib/sticker').support = s
  Object.freeze(global.set.support)

  if (!s.ffmpeg) (conn?.logger || console).warn('Please install ffmpeg for sending videos (pkg install ffmpeg)')
  if (s.ffmpeg && !s.ffmpegWebp) (conn?.logger || console).warn('Stickers may not animated without libwebp on ffmpeg (--enable-libwebp while compiling ffmpeg)')
  if (!s.convert && !s.magick && !s.gm) (conn?.logger || console).warn('Stickers may not work without imagemagick if libwebp on ffmpeg doesnt isntalled (pkg install imagemagick)')
}

_quickTest()
  .then(() => (conn?.logger?.info || console.log)('☑️ Quick Test Done'))
  .catch(logger.error)
})()
