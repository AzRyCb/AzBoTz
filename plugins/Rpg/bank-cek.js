import db from '../lib/database.js'
let handler = async (m, { conn }) => {
  let user = db.data.users[m.sender]
  const caption = `
––––––『 *B A N K  U S E R* 』––––––
┊• 📛 *Name:* ${user.registered ? user.name : conn.getName(m.sender)}
┊• 💳 *Atm:* ${user.atm > 0 ? 'Level ' + user.atm : '✖️'}
┊• 🏛️ *Bank:* ${user.bank} 💲 / ${user.fullatm} 💲
┊• 💹 *Money:* ${user.money} 💲
┊• 🤖 *Robo:* ${user.robo > 0 ? 'Level ' + user.robo : '✖️'}
┊• 🌟 *Status:* ${user.premiumTime > 0 ? 'Premium' : 'Free'}
┊• 📑 *Registered:* ${user.registered ? 'Yes':'No'}
${dmenuf}
`.trim()
  conn.sendButton(m.chat, caption, wm, 'https://telegra.ph/file/0451b07945f7f9633b59b.jpg', [`Inventory`, '.inv'],m)
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank(cek)?|cekbank)$/i

handler.register = false
export default handler