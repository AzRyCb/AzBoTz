let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
/*
  let teks = `
  ╭─❑ 「 *SOSIAL MEDIA* 」 ❑──
  │ Follow sosial media
  │ owner yuk biar saling
  │ kenal...
  ╰❑
    `.trim()
  
                //-------DOC TEMPLATE
                const message = {
                  jpegThumbnail: await(await fetch(set.fla)) + teks,
                  caption: text.trim(),
                  footer: set.botdate,
                  templateButtons: [
                      {
                        urlButton: {
                          displayText: 'Tiktok creator📨',
                          url: set.tt
                        }
                      },
                           {
                          urlButton: {
                          displayText: 'Youtube creator🔥',
                          url: set.yt
                        }
                      },
                          {
                          urlButton: {
                          displayText: 'Instagram Creator📸',
                          url: set.ig
                        }
                      },
                          {
                        quickReplyButton: {
                          displayText: 'STORE',
                          id: `${usedPrefix}store`,
                        }
           
                      },
                          {
                        quickReplyButton: {
                          displayText: 'BIODATA CREATOR',
                          id: `${usedPrefix}biodata`,
                          }
                      },
                  ]
              }
              conn.sendMessage(m.chat, message)
*/

//------- NOMOR
  let nowner = `${set.nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${set.htki} *OWNER* ${set.htka}
• @${set.nomorown.split`@`[0]} •
------- ${set.nameown} -------

📮 *Note:*
• Owner tidak menerima save contact
• Owner berhak blockir tanpa alasan
• Berbicaralah yang sopan & tidak spam
• Owner Hanya merespon yang berkaitan dengan BOT
• No Telp dan vc`

//------------ BIO
//pake catch bgg
let ppown = await conn.profilePictureUrl(set.nomorown + '@s.whatsapp.net', 'image')
let teksbio = `${set.htki} *BIODATA* ${set.htka}
*💌 Nama* : Az
*✉️ Nama RL* : Az
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 09 september 2008
*🎨 Umur* : 14
*🧮 Kelas* : 8
*🧩 Hobby* : main game, Recode script
*🗺️ Tinggal* : Indonesia, jawa, bandung
*❤️ Suka* :  kelinci, kucing, singa

*- - sᴋɪʟʟs: - -* 
> JavaScript [70.7%]
> Html [0.9%]
> Recode [76.8%]
`

let sosmed = `
───────[ SOSIAL MEDIA ]───────

📷 *Instagram:* ${set.ig}
🐈 *Github:* ${set.gh}
🥏 *Whatsapp* wa.me/${set.nomorown}
🌐 *Discord:* ${set.dc}
🌏 *Website:* ${set.web}
🎶 *Tiktok:* ${set.tt}
`
  let teks = ' '
const sections = [
   {
	title: `${set.htjava} OWNER –––––––––·•`,
	rows: [
	    {title: "📱 • Nomor", rowId: ".owner nomor"},
	{title: "🎨 • Biodata", rowId: ".owner bio"},
	{title: "🌐 • Sosmed", rowId: ".owner sosmed"},
	{title: "🌎 • Script", rowId: ".sc"},
	]
    },{
	title: `${set.htjava} SUPPORT ME –––––––·•`,
	rows: [
	    {title: "💹 • Donasi", rowId: ".donasi"},
	{title: "🔖 • Sewa", rowId: ".sewa"},
	{title: "🌟 • Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${set.htki} *OWNER* ${set.htka}`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'sosmed':
            conn.reply(m.chat, sosmed, m, { contextInfo: { mentionedJid: [m.sender] }})
              break
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          conn.sendHydrated(m.chat, teksbio, set.wm, ppown, "https://wa.me/" + set.nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", `${usedPrefix}donasi`], [null, null],[null,null]], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/aoaooaoaooaoa/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, set.wm, null, [`⋮☰ Menu`, `${usedPrefix}menu`], m)
      }
    }
  } catch (err) {
    conn.reply(m.chat, set.error)
    console.error(err)
  }
}

handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)/i

export default handler


/*
let handler  = async (m, { conn, command, usedPrefix }) => {
let teks = 'P - Pilih dibawah kak'
conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo:{ mentionedJid: [m.sender] }})
}
handler.help = ['owner', 'creator']
handler.tags = ['main']
handler.command = /^(owner|creator)$/i

export default handler
*/