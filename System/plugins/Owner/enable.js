import db from '../../lib/database.js'
const { opts} = (await import('../../lib/helper.js')).default 

// TODO:
// const data = {
//   user: [{
//     name: 'autolevelup',
//     isEnable: true
//   }],
//   chat: [{
//     name: 'welcome',
//     isEnable: true,
//     rules: [{
//     }]
//   }]
// }

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {

  const sections = [
    {
    title: `List Options`,
    rows: [
    {title: "✨ | Welcome", rowId: `${usedPrefix + command} welcome`},
    {title: "🚫 | Delete", rowId: `${usedPrefix + command} delete`},
    {title: "🌎 | Public", rowId: `${usedPrefix + command} public`},
     {title: "🗣️ | Simi", rowId: `${usedPrefix + command} simi`},
     {title: "🔗 | Antilink", rowId: `${usedPrefix + command} antilink`},
     {title: "🚫 | Antidelete", rowId: `${usedPrefix + command} antidelete`},
     {title: "🔞 | Antitoxic", rowId: `${usedPrefix + command} antitoxic`},
     {title: "⏏️ | Autolevelup", rowId: `${usedPrefix + command} autolevelup`},
     {title: "🔎 | Detect", rowId: `${usedPrefix + command} detect`},
     {title: "📑 | Document", rowId: `${usedPrefix + command} document`},
     {title: "👤 | WhiteListMyContact", rowId: `${usedPrefix + command} whitelistmycontact`},
     {title: "❗ | Restrict", rowId: `${usedPrefix + command} restrick`},
     {title: "😐 | Nyimak", rowId: `${usedPrefix + command} nyimak`},
     {title: "☑️ | Autoread", rowId: `${usedPrefix + command} autoread`},
     {title: "💬 | PcOnly", rowId: `${usedPrefix + command} pconly`},
     {title: "🏢 | GcOnly", rowId: `${usedPrefix + command} gconly`},
     {title: "📷 | SwOnly", rowId: `${usedPrefix + command} swonly`},
     {title: "📷 | rpg", rowId: `${usedPrefix + command} rpg`},
     {title: "📷 | clear", rowId: `${usedPrefix + command} clear`},
     {title: "📷 | nsfw", rowId: `${usedPrefix + command} nsfw`},
     ]
       },
   ]
   
   const listMessage = {
     text: ' ',
     footer: set.botdate,
     title: `*${set.htki} BETA ${set.htka}*`,
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
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          set.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        set.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
    case 'detect':
      if (!m.isGroup) {
        if (!isOwner) {
          set.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        set.dfail('admin', m, conn)
        throw false
      }
      chat.detect = isEnable
      break
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          set.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = isEnable
      break
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          set.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break
     case 'autodelvn':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           set.dfail('admin', m, conn)
           throw false
         }
       }
       chat.autodelvn = isEnable
       break
    case 'document':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) return set.dfail('admin', m, conn)
      }
      chat.useDocument = isEnable
      break
    case 'public':
      isAll = true
      if (!isROwner) {
        set.dfail('rowner', m, conn)
        throw false
      }
      opts['self'] = !isEnable
      break
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          set.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
     case 'toxic':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           set.dfail('admin', m, conn)
           throw false
         }
      }
       chat.antiToxic = !isEnable
       break
     case 'antitoxic':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           set.dfail('admin', m, conn)
           throw false
         }
       }
       chat.antiToxic = isEnable
       break
    case 'autolevelup':
      isUser = true
      user.autolevelup = isEnable
      break
     case 'mycontact':
     case 'mycontacts':
     case 'whitelistcontact':
     case 'whitelistcontacts':
     case 'whitelistmycontact':
     case 'whitelistmycontacts':
       if (!isOwner) {
         set.dfail('owner', m, conn)
         throw false
       }
       conn.callWhitelistMode = isEnable
       break
    case 'restrict':
      isAll = true
      if (!isOwner) {
        set.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
    case 'nyimak':
      isAll = true
      if (!isROwner) {
        set.dfail('rowner', m, conn)
        throw false
      }
      opts['nyimak'] = isEnable
      break
    case 'autoread':
      isAll = true
      if (!isROwner) {
        set.dfail('rowner', m, conn)
        throw false
      }
      opts['autoread'] = isEnable
      break
    case 'pconly':
    case 'privateonly':
      isAll = true
      if (!isROwner) {
        set.dfail('rowner', m, conn)
        throw false
      }
      opts['pconly'] = isEnable
      break
    case 'gconly':
    case 'grouponly':
      isAll = true
      if (!isROwner) {
        set.dfail('rowner', m, conn)
        throw false
      }
      opts['gconly'] = isEnable
      break
    case 'swonly':
    case 'statusonly':
      isAll = true
      if (!isROwner) {
        set.dfail('rowner', m, conn)
        throw false
      }
      opts['swonly'] = isEnable
      break
    case 'getmsg':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) return set.dfail('admin', m, conn)
      }
      chat.getmsg = isEnable
      break
    default:
      if (!/[01]/.test(command)) 
      return conn.sendMessage(m.chat, listMessage)
    }
      /*
      return m.reply(`
List option: welcome | detect | delete | antidelete | public | antilink | autolevelup | document | whitelistmycontacts | restrict | nyimak | autoread | pconly | gconly | swonly | getmsg
Contoh:
${usedPrefix}enable welcome
${usedPrefix}disable welcome
`.trim())
      throw false
  }
  */
//  m.reply(`
//*${type}* berhasil di *${isEnable ? 'nyala' : 'mati'}kan* ${isAll ? 'untuk bot ini' : isUser ? '' : 'untuk chat ini'}
//`.trim())
conn.send2ButtonDoc(m.chat, `*${set.htki} OPTIONS ${set.htka}*
🗂️ *Type:* ${type} 
📊 *Status:* Succes ✅
🎚️ *Options:* ${isEnable ? 'Enable' : 'Disable'}
📣 *For:* ${isAll ? 'This Bot' : isUser ? '' : 'This Chats'}
`, set.wm, `${isEnable ? '✖️ Disable' : '✔️ Enable'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`, '🎀 Menu', `${usedPrefix}menu`, global.fakes, global.adReply)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler
