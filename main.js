process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
process.on('uncaughtException', console.error)

import './config.js'
import Connection from './lib/connection.js'
import Helper from './lib/helper.js'
import db from './lib/database.js'
import { spawn } from 'child_process'
import { protoType, serialize } from './lib/simple.js'
import { plugins, loadPluginFiles, reload, pluginFolder, pluginFilter } from './lib/plugins.js'
import { tmpdir, platform } from 'os'
import { promises as fs } from 'fs'
import { join } from 'path'

const TIME = 1000 * 60 * 3
const __dirname = Helper.__dirname(import.meta)
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000

protoType()
serialize()

// Assign all the value in the Helper to global
Object.assign(global, {
  ...Helper,
  timestamp: {
    start: Date.now()
  }
})

// global.opts['db'] = process.env['db']

/** @type {import('./lib/connection.js').Socket} */
const conn = Object.defineProperty(Connection, 'conn', {
  value: await Connection.conn,
  enumerable: true,
  configurable: true,
  writable: true
}).conn

// load plugins
loadPluginFiles(pluginFolder, pluginFilter, {
  logger: conn.logger,
  recursiveRead: false
})//.then(_ => console.log(Object.keys(plugins)))
  .catch(console.error)


if (!opts['test']) {
  setInterval(async () => {
    await Promise.allSettled([
      db.data ? db.write() : Promise.reject('db.data is null'),
      (opts['autocleartmp'] || opts['cleartmp']) ? clearTmp() : Promise.resolve()
    ])
    Connection.store.writeToFile(Connection.storeFile)
  }, 60 * 1000)
}
if (opts['server']) (await import('./server.js')).default(conn, PORT)

/* Clear */
async function clearTmp() {
  const tmp = [tmpdir(), join(__dirname, '../tmp')]
  const filename = []

  await Promise.allSettled(tmp.map(async (dir) => {
      const files = await fs.readdir(dir)
      for (const file of files) filename.push(join(dir, file))
  }))

  return await Promise.allSettled(filename.map(async (file) => {
      const stat = await fs.stat(file)
      if (stat.isFile() && (Date.now() - stat.mtimeMs >= TIME)) {
          // https://stackoverflow.com/questions/28588707/node-js-check-if-a-file-is-open-before-copy
          if (platform() === 'win32') {
              // https://github.com/nodejs/node/issues/20548
              // https://nodejs.org/api/fs.html#filehandleclose
              let fileHandle
              try {
                  fileHandle = await fs.open(file, 'r+')
              } catch (e) {
                  console.error('[clearTmp]', e, 'Skipping', file)
                  return e
              } finally {
                  await fileHandle?.close()
              }
          }
          await fs.unlink(file)
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
  console.log(test)
  let s = global.support = {
    ffmpeg,
    ffprobe,
    ffmpegWebp,
    convert,
    magick,
    gm,
    find
  }
  // require('./lib/sticker').support = s
  Object.freeze(global.support)

  if (!s.ffmpeg) (conn?.logger || console).warn('Please install ffmpeg for sending videos (pkg install ffmpeg)')
  if (s.ffmpeg && !s.ffmpegWebp) (conn?.logger || console).warn('Stickers may not animated without libwebp on ffmpeg (--enable-libwebp while compiling ffmpeg)')
  if (!s.convert && !s.magick && !s.gm) (conn?.logger || console).warn('Stickers may not work without imagemagick if libwebp on ffmpeg doesnt isntalled (pkg install imagemagick)')
}

_quickTest()
  .then(() => (conn?.logger?.info || console.log)('☑️ Quick Test Done'))
  .catch(console.error)
