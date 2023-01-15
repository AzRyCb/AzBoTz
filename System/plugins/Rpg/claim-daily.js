const rewards = {
  exp: 9999,
  money: 4999,
  potion: 5,
}
const cooldown = 86400000
import db from '../../lib/database.js'
let handler = async (m,{ conn} ) => {
  let user = db.data.users[m.sender]
  if (new Date - user.lastclaim < cooldown) throw `You have already claimed this daily claim!, wait for *${((user.lastclaim + cooldown) - new Date()).toTimeString()}*`
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${set.rpg.emoticon(reward)}${reward}\n`
  }
  conn.sendButton(m.chat,`${set.htki} DAILY ${set.htka}`, text.trim(), null, [['Inventory', '.inv'], ['Weekly', '.weekly']],m)
  user.lastclaim = new Date * 1
}
handler.help = handler.command = ['daily', 'claim']
handler.tags = ['xp']

handler.cooldown = cooldown

export default handler