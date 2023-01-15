// @ts-check
console.log('🐾 Starting Whatsapp bot...')

//-- module eksternal
//import {createServer} from 'http'
import { join, dirname } from 'path'
import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import cluster from 'cluster'
import { watchFile, unwatchFile } from 'fs'
import cfonts from 'cfonts';
import { createInterface } from 'readline'

//-- module internal
const { opts} = (await import('./lib/helper.js')).default 

// https://stackoverflow.com/a/50052194
const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname) // Bring in the ability to create the 'require' method
const { name, author, version } = require(join(__dirname, '../package.json')) // https://www.stefanjudis.com/snippets/how-to-import-json-files-in-es-modules-node-js/
const rl = createInterface(process.stdin, process.stdout)
const { say } = cfonts

say('Lightweight\nWhatsApp Bot', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']
})
say(`'${name}' By @${author.name || author}\n${version}`, {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']
})

var isRunning = false
/**
 * Start a js file
 * @param {String} file `path/to/file`
 */
function start(file) {
  if (isRunning) return
  isRunning = true
  let args = [join(__dirname, file), ...process.argv.slice(2)]
  
  say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  
  cluster.setupMaster({
    exec: args[0],
    args: args.slice(1),
  })
  let p = cluster.fork()
  p.on('message', data => {
    console.log('[✅RECEIVED]', data)
    switch (data) {
      case 'reset':
        p.process.kill()
        isRunning = false
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  p.on('exit', (_, code) => {
    isRunning = false
    console.error('[❗] Exited with code:', code)
    //start.apply(this, arguments)
    //if (code = 'SIGKILL') start('./main.js')
    if (code === '1') start('./main.js')
    if (code === '0') return 
    watchFile(args[0], () => {
      unwatchFile(args[0])
      start(file)
    })
  })
  if (!opts['test'])
    if (!rl.listenerCount) rl.on('line', line => {
      p.emit('message', line.trim())
    })
  // console.log(p)
}

start('./main.js')
//createServer((_, res) => res.end("Uptime!")).listen(8080)
