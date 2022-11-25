import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
let tesxt = `
*Hallo user Bot👋,* 
*Saya adalah Bot WhatsApp Multi Device yang di buat oleh Creator kami.*
Bot ini bisa membantu kamu atau mempermudah kamu membuat sesuatu atau pun mendownload sesuatu seperti:
*Vidio tiktok , Vidio yt , membuat stiker DLL.*
	`.trim()
      //-------DOC TEMPLATE
      const message = {
        document: { url: set.thumb },
        jpegThumbnail: await (await fetch(set.thumb)).buffer(),
        fileName: wm,
        mimetype: set.doc,
        fileLength: set.fsizedoc,
        pageCount: set.fpagedoc,
        caption: tesxt,
        footer: wm,
        templateButtons: [
            {
                urlButton: {
                    displayText: `WEBSITE`,
                    url: set.web
                }
            },
            {
                urlButton: {
                    displayText: '💌 Group Official',
                    url: set.gcbot
                }
            },
            {
                quickReplyButton: {
                    displayText: '🏅 Owner',
                    id: `${usedPrefix}owner`
                }
            },
            {
                quickReplyButton: {
                    displayText: '🐾 Donasi',
                    id: `${usedPrefix}donasi`
                }
            },
            {
                quickReplyButton: {
                    displayText: '📮 Layanan Dan Jasa',
                    id: `${usedPrefix}store`
                }
            },
        ]
    }
    conn.sendMessage(m.chat, message, m)
  }
//handler.tags = ['main', 'info']
handler.command = /^(panel|help|command)$/i
//handler.help = ['menu_ans']
export default handler