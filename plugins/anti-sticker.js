/*
By : Aine
*/
import Helper from '../lib/helper.js'
import db from '../lib/database.js'
export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = db.data.chats[m.chat]
  let sender = db.data.chats[m.sender]
  let isSticker = m.mtype
  let hapus = m.key.participant
  let bang = m.key.id
  if (chat.antiSticker && isSticker) {
    if(isSticker === "stickerMessage"){
      if (Helper.opts) {
        if (isAdmin || !isBotAdmin){		  
        } else {
          m.reply('*Sticker detected*') // ganti text terserah kamu 
          db.data.users[m.sender].warn += 1
    db.data.users[m.sender].banned = true
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        }return true
      }
    }
  }
  return true
}
