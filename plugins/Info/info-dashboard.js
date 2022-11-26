import db from '../lib/database.js'
import { plugins } from  '../lib/plugins.js'

let handler = async (m, { conn }) => {
  let stats = Object.entries(db.data.stats).map(([key, val]) => {
    let name = Array.isArray(plugins[key]?.help) ? plugins[key]?.help?.join('\n• ') : plugins[key]?.help || key 
    if (/exec/.test(name)) return
    return { name, ...val }
  })
  stats = stats.sort((a, b) => b.total - a.total)
  let txt = stats.slice(0, 10).map(({ name, total, last }, idx) => {
    if (name.includes('-') && name.endsWith('.js')) name = name.split('-')[1].replace('.js', '')
    return `${set.htki} ${idx + 1} ${set.htka}
*${set.htjava} C M D ${set.htjava}*
${name}

*${set.htjava} H I T ${set.htjava}*
${total}

*${set.htjava} T I M E ${set.htjava}*
${getTime(last)}
`}).join`\n\n`
  conn.send2ButtonDoc(m.chat, txt, set.author, '🔖 Tes', 'tes', 'ℹ️ Menu', '.menu', fakes, adReply)
}
handler.help = ['dashboard']
handler.tags = ['info']
handler.command = /^^d(as(hbo(ard?|r)|bo(ard?|r))|b)$/i

export default handler

export function parseMs(ms) {
  if (typeof ms !== 'number') throw 'Parameter must be filled with number'
  return {
    days: Math.trunc(ms / 86400000),
    hours: Math.trunc(ms / 3600000) % 24,
    minutes: Math.trunc(ms / 60000) % 60,
    seconds: Math.trunc(ms / 1000) % 60,
    milliseconds: Math.trunc(ms) % 1000,
    microseconds: Math.trunc(ms * 1000) % 1000,
    nanoseconds: Math.trunc(ms * 1e6) % 1000
  }
}

export function getTime(ms) {
  let now = parseMs(+new Date() - ms)
  if (now.days) return `${now.days} Hari yang lalu`
  else if (now.hours) return `${now.hours} Jam yang lalu`
  else if (now.minutes) return `${now.minutes} Menit yang lalu`
  else return `Barusan`
}
