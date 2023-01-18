import db from '../../lib/database.js'
const { opts} = (await import('../../lib/helper.js')).default 
let handler = async (m, { conn, usedPrefix, command, args, text, isOwner, isAdmin, isROwner }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

	let namop = ["Anti Call",
"Anti Delete",
"Anti Link",
"Anti LinkFb",
"Anti LinkIg",
"Anti LinkTel",
"Anti LinkTik",
"Anti LinkWa",
"Anti LinkYt",
"Anti Satir",
"Anti Spam",
"Anti Sticker",
"Anti Toxic",
"Anti Virtex",
"Anti View Once",
"Anti Bule",
"Auto DelVn",
"Auto Join",
"Auto Levelup",
"Auto Presence",
"Auto Read",
"Auto Reply",
"Auto Sticker",
"Auto UpAnime",
"Auto UpNews",
"Auto Vn",
"Auto Bio",
"Get Msg",
"BcJoin",
"Detect",
"Document",
"GcOnly",
"NSFW",
"Nyimak",
"PcOnly",
"Public",
"Restrict",
"Simi",
"SwOnly",
"Welcome",
"WhiteListMyContact"]

let idop = ["anticall",
"antidelete",
"antihatetepe",
"antilinkfb",
"antilinkig",
"antilinktel",
"antilinktik",
"antilinkwa",
"antilinkyt",
"antisatir",
"antispam",
"antisticker",
"antitoxic",
"antivirtex",
"antiviewonce",
"antibule",
"autodelvn",
"autojoin",
"autolevelup",
"autopresence",
"autoread",
"autoreply",
"autosticker",
"autoupnews",
"autoupnime",
"autovn",
"autobio",
"getmsg",
"bcjoin",
"detect",
"document",
"gconly",
"nsfw",
"nyimak",
"pconly",
"public",
"restrick",
"simi",
"swonly",
"welcome",
"whitelistmycontact"]

let desop = ["Memblokir user jika menelpon bot",
"Bot meneruskan pesan yang user hapus",
"Jangan kirim link",
"Jangan kirim link Fb",
"Jangan kirim link Ig",
"Jangan kirim link Tel",
"Jangan kirim link Tik",
"Jangan kirim link Wa",
"Jangan kirim link Yt",
"Jangan meng Satir",
"Jangan meng Spam",
"Jangan meng Sticker",
"Jangan meng Toxic",
"Jangan meng Virtex",
"Jangan meng View Once",
"Jangan meng Bule",
"Bot Otomatis DelVn",
"Bot Otomatis Join",
"Bot Otomatis Levelup",
"Bot Otomatis Presence",
"Bot Otomatis Read",
"Bot Otomatis Reply",
"Bot Otomatis Sticker",
"Bot Otomatis UpAnime",
"Bot Otomatis UpNews",
"Bot Otomatis Vn",
"Bot Otomatis Bio",
"Bot Otomatis Kirim Msg",
"BcJoin",
"Detect",
"Document",
"GcOnly",
"NSFW",
"Nyimak",
"PcOnly",
"Public",
"Restrict",
"Simi",
"SwOnly",
"Welcome",
"WhiteListMyContact"]

let row = Object.keys(namop, desop, idop).map((v, index) => ({
		title: `${set.htki} ${command} ${namop[v]} ${set.htka}`,
		description: `\nNo.${1 + index}\n${set.htjava}${desop[v]}\n${set.dmenuf}`,
		rowId: usedPrefix + command + ' ' + idop[v]
	}))
	let button = {
		buttonText: `☂️ ${command} Options Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Options di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: set.wm
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
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          set.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiDelete = !isEnable
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
      case 'bcjoin':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          set.dfail('admin', m, conn)
          throw false
        }
      }
      chat.bcjoin = isEnable
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
      case 'antilinktik':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          set.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkTik = isEnable
      break
      case 'antilinkyt':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          set.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkYt = isEnable
      break
      case 'antilinktel':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          set.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkTel = isEnable
      break
      case 'antilinkfb':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          set.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkFb = isEnable
      break
      case 'antilinkig':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          set.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkIg = isEnable
      break
      case 'antilinkwa':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          set.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkWa = isEnable
      break
      case 'antihatetepe':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          set.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkHttp = isEnable
      break
      case 'nsfw':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          set.dfail('admin', m, conn)
          throw false
        }
      }
      chat.nsfw = isEnable
      break
      case 'antivirtex':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          set.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiVirtex = isEnable
      break
      case 'antiviewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          set.dfail('admin', m, conn)
          throw false
        }
      }
      chat.viewonce = isEnable
      break
      case 'antibule':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          set.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antibule = isEnable
      break
      case 'antisatir':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          set.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiSatir = isEnable
      break
      case 'simi':
        if (!isROwner) {
          set.dfail('rowner', m, conn)
          throw false
        }
      chat.simi = isEnable
      break
      case 'autovn':
        if (!isROwner) {
          set.dfail('rowner', m, conn)
          throw false
        }
      chat.autoVn = isEnable
      break
      case 'autopresence':
        if (!isROwner) {
          set.dfail('rowner', m, conn)
          throw false
        }
      chat.autoPesence = isEnable
      break
      case 'autoreply':
        if (!isROwner) {
          set.dfail('rowner', m, conn)
          throw false
        }
      chat.autoReply = isEnable
      break
      case 'autosticker':
        if (!isROwner) {
          set.dfail('rowner', m, conn)
          throw false
        }
      chat.autoSticker = isEnable
      break
      case 'antisticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          set.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiSticker = isEnable
      break
      case 'autojoin':
        if (!isROwner) {
          set.dfail('rowner', m, conn)
          throw false
        }
      chat.autoJoin = isEnable
      break
      case 'autoupnews':
        if (!isROwner) {
          set.dfail('rowner', m, conn)
          throw false
        }
      chat.updateAnimeNews = isEnable
      break
      case 'autoupnime':
        if (!isROwner) {
          set.dfail('rowner', m, conn)
          throw false
        }
      chat.updateAnime = isEnable
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
       case 'antispam':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           set.dfail('admin', m, conn)
           throw false
         }
       }
       chat.antiSpam = isEnable
       break
       case 'anticall':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           set.dfail('admin', m, conn)
           throw false
         }
       }
       chat.antiCall = isEnable
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
      case 'getmsg':
      isAll = true
      if (!isOwner) {
        set.dfail('owner', m, conn)
        throw false
      }
      chat.getmsg = isEnable
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
      case 'autobio':
        if (!isROwner) {
          set.dfail('rowner', m, conn)
          throw false
        }
      chat.autoBio = isEnable
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
    default:
      if (!/[01]/.test(command)) return conn.sendListM(m.chat, button, row, fakes)
      throw false
  }

let deslis = `*${set.htki} OPTIONS ${set.htka}*
🗂️ *Type:* ${type} 
📊 *Status:* Succes ✅
🎚️ *Options:* ${isEnable ? 'Enable' : 'Disable'}
📣 *For:* ${isAll ? 'This Bot' : isUser ? '' : 'This Chats'}
`
let namli = [`${isEnable ? '✖️ Disable' : '✔️ Enable'}`]
let desli = [`${isEnable ? 'Enable' : 'Disable'}`]
let idli = [`${isEnable ? `.off ${type}` : `.on ${type}`}`]

let rowli = Object.keys(namli, desli, idli).map((v, index) => ({
		title: `${set.htki} ${namli[v]} ${set.htka}`,
		description: `\nNo.${1 + index}\n${set.htjava}${desli[v]}\n${set.dmenuf}`,
		rowId: idli[v]
	}))
	let buttli = {
		buttonText: `${isEnable ? '✖️ Disable' : '✔️ Enable'}`,
		description: deslis,
		footerText: set.wm
	}
conn.sendListM(m.chat, buttli, rowli, fakes)


}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler

/*
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
     {title: "🗣️ | Simi", rowId: `${usedPrefix + command} simi`},
     {title: "🔗 | Antilink", rowId: `${usedPrefix + command} antilink`},
     {title: "🚫 | Antidelete", rowId: `${usedPrefix + command} antidelete`},
     {title: "🔞 | Antitoxic", rowId: `${usedPrefix + command} antitoxic`},
     {title: "⏏️ | Autolevelup", rowId: `${usedPrefix + command} autolevelup`},
     {title: "🔎 | Detect", rowId: `${usedPrefix + command} detect`},
     ]
   },{
   title: `––––––『 Only Owner 』––––––`,
    rows: [
      {title: "🌎 | Public", rowId: `${usedPrefix + command} public`},
    {title: "❗ | Restrict", rowId: `${usedPrefix + command} restrick`},
    {title: "😐 | Nyimak", rowId: `${usedPrefix + command} nyimak`},
     {title: "☑️ | Autoread", rowId: `${usedPrefix + command} autoread`},
     {title: "💬 | PcOnly", rowId: `${usedPrefix + command} pconly`},
     {title: "🏢 | GcOnly", rowId: `${usedPrefix + command} gconly`},
     {title: "📷 | SwOnly", rowId: `${usedPrefix + command} swonly`},
     {title: "🌱 | rpg", rowId: `${usedPrefix + command} rpg`},
     {title: "💬 | clear", rowId: `${usedPrefix + command} clear`},
     {title: "🔞 | nsfw", rowId: `${usedPrefix + command} nsfw`},
    ]
  },{
  title: `––––––『 dll 』––––––`,
   rows: [
    {title: "📑 | Document", rowId: `${usedPrefix + command} document`},
    {title: "👤 | WhiteListMyContact", rowId: `${usedPrefix + command} whitelistmycontact`},
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
*/
