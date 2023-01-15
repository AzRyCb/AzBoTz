import { readFileSync } from 'fs'
import db from '../../lib/database.js'

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let res = JSON.parse(readFileSync('System/src/json/emoji.json'))
let em = res.emoji
	const sections = [
   {
	title: `––––––『 List Options 』––––––`,
	rows: [
	{title: `${set.htjava} ON ${em.getRandom()}`, rowId: `${usedPrefix + command} on`},
	{title: `${set.htjava} OFF ${em.getRandom()}`, rowId: `${usedPrefix + command} off`},
	{title: `${set.htjava} 24 HOUR ${em.getRandom()}`, rowId: `${usedPrefix + command} 24h`},
	{title: `${set.htjava} 7 DAY${em.getRandom()}`, rowId: `${usedPrefix + command} 7d`},
	{title: `${set.htjava} 90 DAY${em.getRandom()}`, rowId: `${usedPrefix + command} 90d`}
	]
    },
]

const listMessage = {
  text: ' ',
  footer: set.botdate,
  title: `*––––––『 OPTIONS 』––––––*`,
  buttonText: "Click Here!",
  sections
}

  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = db.data.chats[m.chat]
  let user = db.data.users[m.sender]
  let bot = db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
      case 'on':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           set.dfail('admin', m, conn)
           throw false
         }
       }
       if (chat.onephe) return
       await conn.sendMessage(m.chat, { disappearingMessagesInChat: true })
       chat.onephe = !isEnable
       break
       case 'off':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           set.dfail('admin', m, conn)
           throw false
         }
       }
       	if (chat.offephe) return
       await conn.sendMessage(m.chat, { disappearingMessagesInChat: false })
       chat.offephe = !isEnable
       break
       case '24h':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           set.dfail('admin', m, conn)
           throw false
         }
       }
       	if (chat.e24h) return
       await conn.sendMessage(m.chat, { disappearingMessagesInChat: 1*24*3600 })
       chat.e24h = !isEnable
       break
       case '7d':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           set.dfail('admin', m, conn)
           throw false
         }
       }
       	if (chat.e7d) return
       await conn.sendMessage(m.chat, { disappearingMessagesInChat: 7*24*3600 })
       chat.e7d = !isEnable
       break
       case '90d':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           set.dfail('admin', m, conn)
           throw false
         }
       }
       	if (chat.e90d) return
       await conn.sendMessage(m.chat, { disappearingMessagesInChat: 90*24*3600 })
       chat.e90d = !isEnable
       break
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage, { quoted: fakes })
      throw false
  }
  
  conn.send2ButtonDoc(m.chat, `*––––––『 OPTIONS 』––––––*
🗂️ *Type:* ${type} 
📊 *Status:* Succes ✅
🎚️ *Options:* ${isEnable ? 'Enable' : 'Disable'}
📣 *For:* ${isAll ? 'This Bot' : isUser ? '' : 'This Chats'}
`, set.wm, `${isEnable ? '✖️ Disable' : '✔️ Enable'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`, '🎀 Menu', '.menu', fakes, adReply)
}
handler.help = ['ephe'].map(v => v + ' <option>')
handler.tags = ['group']
handler.command = /^((ephe)|[01])$/i

export default handler