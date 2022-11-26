let handler = async (m, { conn, command, usedPrefix }) => {
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
}
handler.tags = ['info']
handler.command = /^(sosialmedia)$/i
handler.help = ['sosialmedia']
export default handler