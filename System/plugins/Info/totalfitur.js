import { plugins } from  '../../lib/plugins.js'
let handler = async (m, { conn, args, command }) => {
  let totalf = Object.values(plugins).filter(
    (v) => v.help && v.tags
  ).length;
  let totalp = Object.values(plugins).length
conn.reply(m.chat, `Total Fitur saat ini: ${totalf} dari ${totalp} plugins`,m)
  /*
 await conn.sendButton(m.chat, `Total Fitur Bot Saat ini: ${totalf}\n`,wm + '\n\n' + set.botdate, set.giflogo, [['MENU','.menu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: set.logobot,
                        body: 'Total Cintaku Padamu',         
                        previewType: 0,
                        thumbnail: set.chatbot,
                        sourceUrl: set.web
                      }}
})
*/
}

handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
export default handler