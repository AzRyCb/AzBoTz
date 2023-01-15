import { execSync } from 'child_process'
import Connection from '../../lib/connection.js'

let handler = async (m, { conn, text }) => {
try {  
if (Connection.conn.user.jid == conn.user.jid) {
let stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''))
conn.reply(m.chat, stdout.toString(), m)}
} catch {
var update = execSync(`git remote set-url origin ${set.repo} && git pull`)
await conn.reply(m.chat, update.toString())
}}
handler.help = ['update']
handler.tags = ['host']
handler.command = /^update|actualizar$/i
handler.rowner = true

export default handler