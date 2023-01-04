import db from '../../lib/database.js'

const rewards = {
    exp: 50000,
    money: 49999,
    potion: 10,
    mythic: 3,
    legendary: 1
}

const cooldown = 2592000000
let handler = async (m, { conn, command, args, usedPrefix }) => {
    let user = db.data.users[m.sender]
    if (new Date - user.lastmonthly < cooldown) throw `You have already claimed this monthly claim, wait for *${((user.lastmonthly + cooldown) - new Date()).toTimeString()}*`
    let text = ''
    for (let reward of Object.keys(rewards)) if (reward in user) {
        user[reward] += rewards[reward]
        text += `*+${rewards[reward]}* ${set.rpg.emoticon(reward)}${reward}\n`
    }
    conn.reply(m.chat, text)
    user.lastmonthly = new Date * 1
}
handler.help = ['monthly']
handler.tags = ['xp']
handler.command = /^(monthly)$/i

handler.cooldown = cooldown

export default handler

