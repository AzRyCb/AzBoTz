/*
By : Aine
*/
import db from '../../lib/database.js'
const { opts } = (await import('../../lib/helper.js')).default
export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = db.data.chats[m.chat]
  let isSticker = m.mtype
  if (chat.antiSticker && isSticker) {
    if(isSticker === "stickerMessage"){
      if (opts) {
        if (isAdmin || !isBotAdmin){		  
        } else {
          conn.reply(m.chat, '*Sticker detected*') // ganti text terserah kamu 
          db.data.users[m.sender].warn += 1
    //db.data.users[m.sender].banned = true
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }return true
      }
    }
  }
  return true
}

