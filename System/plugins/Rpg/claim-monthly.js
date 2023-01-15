const rewards = {
    exp: 50000,
    money: 49999,
    potion: 10,
    mythic: 3,
    legendary: 1
}

const cooldown = 2592000000
import db from '../../lib/database.js'
let handler = async (m) => {
    let user = db.data.users[m.sender]
    if (new Date - user.lastmonthly < cooldown) throw `You have already claimed this monthly claim, wait for *${((user.lastmonthly + cooldown) - new Date()).toTimeString()}*`
    let text = ''
    for (let reward of Object.keys(rewards)) if (reward in user) {
        user[reward] += rewards[reward]
        text += `*+${rewards[reward]}* ${set.rpg.emoticon(reward)}${reward}\n`
    }
    conn.sendButton(m.chat,`${set.htki} MONTHLY ${set.htka}`, text.trim(), null, [['Inventory', '.inv'], ['Menu', '.menu']],m)
    user.lastmonthly = new Date * 1
}
handler.help = handler.command = ['monthly']
handler.tags = ['rpg']

handler.cooldown = cooldown

export default handler