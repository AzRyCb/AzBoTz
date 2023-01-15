import db from '../../lib/database.js'
let handler = async (m, { conn }) => {
  let user = db.data.users[m.sender]
  const caption = `
${set.htki} *B A N K  U S E R* ${set.htka}
${set.dmenub} 📛 *Name:* ${user.registered ? user.name : conn.getName(m.sender)}
${set.dmenub} 💳 *Atm:* ${user.atm > 0 ? 'Level ' + user.atm : '✖️'}
${set.dmenub} 🏛️ *Bank:* ${user.bank} 💲 / ${user.fullatm} 💲
${set.dmenub} 💹 *Money:* ${user.money} 💲
${set.dmenub} 🤖 *Robo:* ${user.robo > 0 ? 'Level ' + user.robo : '✖️'}
${set.dmenub} 🌟 *Status:* ${user.premiumTime > 0 ? 'Premium' : 'Free'}
${set.dmenub} 📑 *Registered:* ${user.registered ? 'Yes':'No'}
${set.dmenuf}
`.trim()
  conn.sendButton(m.chat, caption, set.wm, 'https://telegra.ph/file/0451b07945f7f9633b59b.jpg', [`Inventory`, '.inv'],m)
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank(cek)?|cekbank)$/i

export default handler