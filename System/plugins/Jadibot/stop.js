import Connection from '../../lib/connection.js'
let handler  = async (m, { conn }) => {
    if (Connection.conn.user.jid == conn.user.jid) conn.reply(m.chat, 'Kenapa nggk langsung ke terminalnya?', m)
    else {
      await conn.reply(m.chat, `Selamat tinggal ${set.namebot}`, m)
      conn.ws.close()
    }
  }
  handler.help = ['berhenti','stop']
  handler.tags = ['jadibot']
  handler.command = /^(berhenti|stop)$/i
  
  export default handler