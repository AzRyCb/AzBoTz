import db from '../../lib/database.js'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = db.data.users[m.sender]
  user.pickaxe = user.pickaxe || 0
  user.pedang = user.pedang || 0
  user.fishingrod = user.fishingrod || 0

let lgocraft = `
*「 R E P A I R」*`

  let caption = `
▧ Pickaxe ⛏️
▧ Sword ⚔️
▧ Fishingrod 🎣

*❏ RECIPE*
▧ Pickaxe ⛏️
〉 5 Kayu
〉 3 Batu
〉 3 Iron
〉 1 Diamond

▧ Sword ⚔️
〉 5 Kayu
〉 9 Iron
〉 1 Diamond

▧ Armor 🥼
〉 15 Iron
〉 3 Diamond
`
const sections = [
   {
	title: "REPAIR A TOOLS",
	rows: [
	    {title: "SWORD ⚔️", rowId: ".repair sword", description: "Repair Sword"},
	    {title: "PICKAXE ⛏️", rowId: ".repair pickaxe", description: "Repair Pickaxe"},
	    {title: "ARMOR 🥼", rowId: ".repair armor", description: "Repair Armor"},
	]
    },
]

const listMessage = {
  text: caption,
  footer: set.wm,
  title: lgocraft,
  buttonText: "R E P A I R",
  sections
}

  try {
    if (/repair/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'pickaxe':
          if (user.pickaxedurability > 99) return conn.reply(m.chat, 'Tools ini belum memiliki kerusakan')
          if (user.pickaxe == 0) return conn.reply(m.chat, 'Kamu belum memilik ini')
            if(user.diamond < 1 || user.rock < 3 || user.wood < 5 || user.iron < 3 ) return conn.reply(m.chat, `Barang tidak cukup!`)
             user.rock -= 3
             user.wood -= 5
             user.iron -= 3
             user.diamond -= 1
             user.pickaxedurability = 100
            conn.reply(m.chat, "Sukses memperbaiki!")
            break
          case 'sword':
          if (user.sworddurability > 99) return conn.reply(m.chat, 'Tools ini belum memiliki kerusakan')
          if (user.sword == 0) return conn.reply(m.chat, 'Kamu belum memilik ini')
            if(user.diamond < 1 || user.wood < 5 || user.iron < 9 ) return conn.reply(m.chat, `Barang tidak cukup!`)
             user.wood -= 5
             user.iron -= 9
             user.diamond -= 1
             user.sworddurability = 100
            conn.reply(m.chat, "Sukses memperbaiki!")
            break
            case 'armor':
          if (user.armordurability > 99) return conn.reply(m.chat, 'Tools ini belum memiliki kerusakan')
          if (user.armor == 0) return conn.reply(m.chat, 'Kamu belum memilik ini')
            if(user.diamond < 3 || user.iron < 15 ) return conn.reply(m.chat, `Barang tidak cukup!`)
             user.iron -= 15
             user.diamond -= 3
             user.armordurability = 100
            conn.reply(m.chat, "Sukses memperbaiki!")
            break
          default:
            return await conn.sendMessage(m.chat, listMessage)
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, set.wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    conn.reply(m.chat, "Error\n\n\n" + err.stack)
  }
}

handler.help = handler.command = ['repair']
handler.tags = ['rpg']

export default handler