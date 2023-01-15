import fetch from 'node-fetch'
let handler = async (m, { conn, command, usedPrefix }) => {
    let tek = `Harap patuhi peraturannya ya kak`
/*
    const message = {
        jpegThumbnail: await(await fetch(set.qrgc)).buffer(),
        caption: set.gcbot,
        footer: set.bottime,
        document: { url: set.thumb },
        fileName: set.ucapan,
        mimetype: set.doc,
        fileLength: set.fsizedoc,
        pageCount: set.fpagedoc,
        templateButtons: [
            {
                urlButton: {
                    displayText: `My Website`,
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
                    id: '.owner'
                }
            },
            {
                quickReplyButton: {
                    displayText: '📮 Donasi',
                    id: '.donasi'
                }
            },
            {
                quickReplyButton: {
                    displayText: '🐾 Layanan Dan Jasa 🐾',
                    id: '.store'
                }
            },
        ]
    }
   conn.sendMessage(m.chat, message)
*/
//
//conn.sendButton(m.chat, set.gcbot, 'Patuhi aturan/rulesnya y kak', await(await fetch(set.qrgc)).buffer(), [['menu', `${usedPrefix}`]], m) 
conn.sendHydrated(m.chat, tek, set.wm, set.qrgc, "https://wa.me/" + set.nomorown, "💬 LINK", null,null, [["Back", `${usedPrefix}menu`], [null, null],[null,null]], m)
//conn.reply(m.chat, set.gcbot) 
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^(gcbot|gcazbotz|grupbot|groupbot|botgroup)$/i

export default handler
