import { plugins } from  '../lib/plugins.js'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.reply(m.chat, `Total Fitur saat ini: ${totalf}`,m)
}

handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
export default handler