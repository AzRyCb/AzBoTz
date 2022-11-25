
import db from '../lib/database.js'
export async function before(m, conn) {
    let name = await this.getName(m.sender)
    let chat = db.data.chats[m.chat]
    let user = db.data.users[m.sender]
    let caption = `👋 Anti Bule ${name} @${m.sender.split("@")[0]}, Thanks!`.trim()
   if (chat.antibule) {
   if (!m.sender.startsWith('62' || '1')) {
   	user.banned = true
   	this.sendButton(m.chat, caption, wm, null, [['Disable Anti Bule', '.off antibule']], m, { mentions: this.parseMention(caption) })
   	return this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   }
  }
 }
