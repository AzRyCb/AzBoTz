import os, { cpus as _cpus, totalmem, freemem } from 'os'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
import Connection from '../../lib/connection.js'

let handler = async (m, { conn, usedPrefix, isRowner}) => {
let format = sizeFormatter({
    std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
  })

let _muptime
  if (process.send) {
    process.send('uptime')
    _muptime = await new Promise(resolve => {
      process.once('message', resolve)
      setTimeout(resolve, 1000)
    }) * 1000
  }
let muptime = set.clockString2(_muptime)
const chats = Object.entries(Connection.store.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
const used = process.memoryUsage()
const cpus = _cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })

  let old = performance.now()
  await m.reply(`${set.htjava} *T e s t i n g. . .*`)
  let neww = performance.now()
  let speed = neww - old
  let caption = `*${set.htki} S P E E D ${set.htka}*
${Math.round(neww - old)} ms
Merespon dalam ${speed} ms

*${set.htjava} R U N T I M E* 
${muptime}

*${set.htjava} S E R V E R*
*🛑 RAM:* ${format(totalmem() - freemem())} / ${format(totalmem())}
*🔵 FreeRAM:* ${format(freemem())}

${readMore}
💬 ᴡʜᴀᴛsᴀᴩᴩ sᴛᴀᴛᴜs :
⮕ ${groupsIn.length} - Group Chats
⮕ ${groupsIn.length} - Groups Joined
⮕ ${groupsIn.length - groupsIn.length} - Groups Left
⮕ ${chats.length - groupsIn.length} - Personal Chats
⮕ ${chats.length} - Total Chats

*💻 Platform :* ${os.platform()}
*🧿 Server :* ${os.hostname()}

*NodeJS Memory Usage*
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}

${cpus[0] ? `*Total CPU Usage*
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

*CPU Core(s) Usage (${cpus.length} Core CPU)*
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`/*
await conn.sendHydrated(m.chat, caption, set.wm, set.pp, set.web, 'Website', null, null, [
[`ᴏᴡɴᴇʀ`, `${usedPrefix}owner`],
[`ᴅᴏɴᴀᴛᴇ`, `${usedPrefix}donate`]
], m)
*/
await conn.sendButton(m.chat, caption, set.wm, null, [['Menu', '.menu']], m)
//await conn.reply(m.chat, caption, m)
}
handler.help = ['ping', 'speed']
handler.tags = ['info']

handler.command = /^(ping|speed|info)$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)