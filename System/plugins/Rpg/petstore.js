import db from '../../lib/database.js'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let user = db.data.users[m.sender]
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  user.pickaxe = user.pickaxe || 0
  user.pedang = user.pedang || 0
  user.fishingrod = user.fishingrod || 0
  
  //----------HARGA
  let hdog = 2
  let hcat = 2
  let hhorse = 4
  let hfox = 6
  let hrobo = 10
  
  let hlion = 10
  let hrhinoceros = 10
  let hdragon = 10
  let hcentaur = 10
  let hkyubi = 10
  let hgriffin = 10
  let hphonix = 10
  let hwolf = 10

let logo = `— *P E T   S T O R E* —
▮▧▧▧▧▧▧▧▧▧▧▧▧▮`
let caption = `
🐈 *Cat:* ${hcat} 🔖
🐕 *Dog:* ${hdog} 🔖
🐎 *Horse:* ${hhorse} 🔖
🦊 *Fox:* ${hfox} 🔖
🤖 *Robo:* ${hrobo} 🔖

*S P E C I A L*
*lion:* ${hlion} 🔖
*rhinoceros:* ${hrhinoceros} 🔖
*dragon:* ${hdragon} 🔖
*centaur:* ${hcentaur} 🔖
*kyubi:* ${hkyubi} 🔖
*griffin:* ${hgriffin} 🔖
*phonix:* ${hphonix} 🔖
*wolf:* ${hwolf} 🔖

〉 *ABILITY*
Cooming soon...`
const sections = [
   {
	title: "Buy A Pet",
	rows: [
	    {title: "Cat 🐈", rowId: ".petshop cat", description: "Adopt A Cat"},
	    {title: "Dog 🐕", rowId: ".petshop dog", description: "Adopt A Dog"},
	    {title: "Horse 🐎", rowId: ".petshop horse", description: "Adopt A Horse"},
	    {title: "Fox 🦊", rowId: ".petshop fox", description: "Adopt A Fox"},
	    {title: "Robo 🤖", rowId: ".petshop robo", description: "Buy A Robo"},
	]
    },{
	title: "Special Pet",
	rows: [
	{title: "lion", rowId: ".petshop lion", description: "Adopt A lion"},
    {title: "rhinoceros", rowId: ".petshop rhinoceros", description: "Adopt A rhinoceros"},
    {title: "dragon", rowId: ".petshop dragon", description: "Adopt A dragon"},
    {title: "centaur", rowId: ".petshop centaur", description: "Adopt A centaur"},
    {title: "kyubi", rowId: ".petshop kyubi", description: "Adopt A kyubi"},
    {title: "griffin", rowId: ".petshop griffin", description: "Adopt A griffin"},
    {title: "phonix", rowId: ".petshop phonix", description: "Adopt A phonix"},
    {title: "wolf", rowId: ".petshop wolf", description: "Adopt A wolf"}
	]
    },
]

const listMessage = {
  text: caption,
  footer: set.wm,
  title: logo,
  buttonText: "ADOPT ME 🐾",
  sections
}

  try {
    if (/petshop/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'cat':
          if (user.cat > 0) return conn.reply(m.chat, 'Kamu sudah memilik ini')
            if(user.pet < hcat) return conn.reply(m.chat, `Pet Token anda kurang`)
            user.pet -= hcat
            user.cat += 1
            conn.reply(m.chat, "Selamat anda mempunyai pet Baru ! 🎉")
            break
          case 'dog':
          if (user.dog > 0) return conn.reply(m.chat, 'Kamu sudah memilik ini')
            if(user.pet < hdog) return conn.reply(m.chat, `Pet Token anda kurang`)
            user.pet -= hdog
            user.dog += 1
            conn.reply(m.chat, "Selamat anda mempunyai pet Baru ! 🎉")
            break
          case 'fox':
          if (user.fox > 0) return conn.reply(m.chat, 'Kamu sudah memilik ini')
            if(user.pet < hfox) return conn.reply(m.chat, `Pet Token anda kurang`)
            user.pet -= hfox
            user.fox += 1
            conn.reply(m.chat, "Selamat anda mempunyai pet Baru ! 🎉")
            break
          case 'horse':
          if (user.horse > 0) return conn.reply(m.chat, 'Kamu sudah memilik ini')
            if(user.pet < hhorse) return conn.reply(m.chat, `Pet Token anda kurang`)
            user.pet -= hhorse
            user.horse += 1
            conn.reply(m.chat, "Selamat anda mempunyai pet Baru ! 🎉")
            break
          case 'robo':
          if (user.robo > 0) return conn.reply(m.chat, 'Kamu sudah memilik ini')
            if(user.pet < hrobo) return conn.reply(m.chat, `Pet Token anda kurang`)
            user.pet -= hrobo
            user.robo += 1
            conn.reply(m.chat, "Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'lion':
          if (user.lion > 0) return conn.reply(m.chat, 'Kamu sudah memilik ini')
            if(user.pet < hlion) return conn.reply(m.chat, `Pet Token anda kurang`)
            user.pet -= hlion
            user.lion += 1
            conn.reply(m.chat, "Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'rhinoceros':
          if (user.rhinoceros > 0) return conn.reply(m.chat, 'Kamu sudah memilik ini')
            if(user.pet < hrhinoceros) return conn.reply(m.chat, `Pet Token anda kurang`)
            user.pet -= hrhinoceros
            user.rhinoceros += 1
            conn.reply(m.chat, "Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'dragon':
          if (user.dragon > 0) return conn.reply(m.chat, 'Kamu sudah memilik ini')
            if(user.pet < hdragon) return conn.reply(m.chat, `Pet Token anda kurang`)
            user.pet -= hdragon
            user.dragon += 1
            conn.reply(m.chat, "Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'centaur':
          if (user.centaur > 0) return conn.reply(m.chat, 'Kamu sudah memilik ini')
            if(user.pet < hcentaur) return conn.reply(m.chat, `Pet Token anda kurang`)
            user.pet -= hcentaur
            user.centaur += 1
            conn.reply(m.chat, "Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'kyubi':
          if (user.kyubi > 0) return conn.reply(m.chat, 'Kamu sudah memilik ini')
            if(user.pet < hkyubi) return conn.reply(m.chat, `Pet Token anda kurang`)
            user.pet -= hkyubi
            user.kyubi += 1
            conn.reply(m.chat, "Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'griffin':
          if (user.griffin > 0) return conn.reply(m.chat, 'Kamu sudah memilik ini')
            if(user.pet < hgriffin) return conn.reply(m.chat, `Pet Token anda kurang`)
            user.pet -= hgriffin
            user.griffin += 1
            conn.reply(m.chat, "Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'phonix':
          if (user.phonix > 0) return conn.reply(m.chat, 'Kamu sudah memilik ini')
            if(user.pet < hphonix) return conn.reply(m.chat, `Pet Token anda kurang`)
            user.pet -= hphonix
            user.phonix += 1
            conn.reply(m.chat, "Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'wolf':
          if (user.wolf > 0) return conn.reply(m.chat, 'Kamu sudah memilik ini')
            if(user.pet < hwolf) return conn.reply(m.chat, `Pet Token anda kurang`)
            user.pet -= hwolf
            user.wolf += 1
            conn.reply(m.chat, "Selamat anda mempunyai pet Baru ! 🎉")
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

handler.help = handler.command = ['petshop']
handler.tags = ['rpg']

export default handler