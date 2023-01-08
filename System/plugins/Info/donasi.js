let handler = async (m, { conn, command, args, usedPrefix }) => {
let teks = `
┏━━━〔 ıll *DONATE* llı 〕━━㉿
⬡ saweria = https://saweria.co/AzRyCb
⬡ trakteer = https://trakteer.id/azrycb
⬡ buzzbr =
┗━━━━━━━━━━━━━━━━━━㉿
Berapapun donasi kalian akan sangat berarti 👍
    
Contact person Owner:
${set.numberowner}
`.trim()
//-------DOC TEMPLATE
    const message = {
        document: { url: set.thumb },
        jpegThumbnail: await (await fetch(set.thumb)),
        fileName: set.ucapan,
        mimetype: set.doc,
        fileLength: set.fsizedoc,
        pageCount: set.fpagedoc,
        caption: teks,
        footer: set.wm,
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
                    id: `${usedPrefix}owner`
                }
            },
            {
                quickReplyButton: {
                    displayText: '🐾 payment',
                    id: `${usedPrefix}payment`
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
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
