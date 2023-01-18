import { cpus as _cpus, totalmem, freemem } from 'os'
import os from 'os'
import osu from 'node-os-utils'
import fetch from 'node-fetch'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
import Connection from '../../lib/connection.js'
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, isRowner}) => {
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
  let NotDetect = 'Not Detect'
        let cpux = osu.cpu
        let cpuCore = cpux.count()
        let drive = osu.drive
        let mem = osu.mem
        let netstat = osu.netstat
        let HostN = osu.os.hostname()
        let OS = osu.os.platform()
        let ipx = osu.os.ip()
        let cpuModel = cpux.model()
        let cpuPer
        let p1 = cpux.usage().then(cpuPercentage => {
            cpuPer = cpuPercentage
        }).catch(() => {
            cpuPer = NotDetect
        })
        let driveTotal, driveUsed, drivePer
        let p2 = drive.info().then(info => {
                driveTotal = (info.totalGb + ' GB'),
                driveUsed = info.usedGb,
                drivePer = (info.usedPercentage + '%')
        }).catch(() => {
                driveTotal = NotDetect,
                driveUsed = NotDetect,
                drivePer = NotDetect
        })
        let ramTotal, ramUsed
        let p3 = mem.info().then(info => {
                ramTotal = info.totalMemMb,
                ramUsed = info.usedMemMb
        }).catch(() => {
                ramTotal = NotDetect,
                ramUsed = NotDetect
        })
        let netsIn, netsOut
        let p4 = netstat.inOut().then(info => {
                netsIn = (info.total.inputMb + ' MB'),       
                netsOut = (info.total.outputMb + ' MB')
        }).catch(() => {
                netsIn = NotDetect,
                netsOut = NotDetect
        })
        await Promise.all([p1, p2, p3, p4])        
        let _ramTotal = (ramTotal + ' MB')
        let cek = await(await fetch("https://api.myip.com")).json().catch(_ => 'error')
        
        let ip = (cek == 'error' ? 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ' : cek.ip)
        let cr = (cek == 'error' ? 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ' : cek.country)
        let cc = (cek == 'error' ? 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ' : cek.cc)
        
        let d = new Date(new Date + 3600000)
    let locale = 'id'
    let weeks = d.toLocaleDateString(locale, { weekday: 'long' })
    let dates = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
        let times = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
        
  let old = performance.now()
  await conn.reply(m.chat, `*ᴛ ᴇ s ᴛ ɪ ɴ ɢ . . .*`)
  let neww = performance.now()
  let speed = neww - old
  let str = `- *ᴘ ɪ ɴ ɢ* -
${Math.round(neww - old)}ms
${speed}ms
- *ʀ ᴜ ɴ ᴛ ɪ ᴍ ᴇ* -
${muptime}
${readMore}
- *ᴄ ʜ ᴀ ᴛ s* -
• *${groupsIn.length}* Group Chats
• *${groupsIn.length}* Groups Joined
• *${groupsIn.length - groupsIn.length}* Groups Left
• *${chats.length - groupsIn.length}* Personal Chats
• *${chats.length}* Total Chats
- *s ᴇ ʀ ᴠ ᴇ ʀ* -
*🛑 Rᴀᴍ:* ${ramUsed} / ${_ramTotal}(${/[0-9.+/]/g.test(ramUsed) &&  /[0-9.+/]/g.test(ramTotal) ? Math.round(100 * (ramUsed / ramTotal)) + '%' : NotDetect})
*🔵 FʀᴇᴇRᴀᴍ:* ${format(freemem())}
*🔭 ᴘʟᴀᴛғᴏʀᴍ:* ${os.platform()}
*🧿 sᴇʀᴠᴇʀ:* ${os.hostname()}
*💻 ᴏs:* ${OS}
*📍 ɪᴘ:* ${ip}
*🌎 ᴄᴏᴜɴᴛʀʏ:* ${cr}
*💬 ᴄᴏᴜɴᴛʀʏ ᴄᴏᴅᴇ:* ${cc}
*📡 ᴄᴘᴜ ᴍᴏᴅᴇʟ:* ${cpuModel}
*🔮 ᴄᴘᴜ ᴄᴏʀᴇ:* ${cpuCore} Core
*🎛️ ᴄᴘᴜ:* ${cpuPer}%
*⏰ ᴛɪᴍᴇ sᴇʀᴠᴇʀ:* ${times}
${readMore}
*${set.htjava} ɴᴏᴅᴇJS ᴍᴇᴍᴏʀʏ ᴜsᴀɢᴇ*
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}
`
await conn.sendPayment(m.chat, `${Math.round(neww - old)}`, 'USD', str, '0@s.whatsapp.net', set.logo, m)
}
handler.help = handler.command = ['ping', 'speed']
handler.tags = ['info']
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

/*import os, { cpus as _cpus, totalmem, freemem } from 'os'
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

await conn.sendButton(m.chat, caption, set.wm, null, [['Menu', '.menu']], m)
//await conn.reply(m.chat, caption, m)
}
handler.help = ['ping', 'speed']
handler.tags = ['info']
handler.register = true
handler.command = /^(ping|speed|info)$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
*/