import db from '../../lib/database.js'
let handler = async (m, { args, text, conn }) => {
    let user = db.data.users[m.sender]

     if (!args[0] || !args[1]) return conn.reply(m.chat, "pake gini .expoint strength 1")
     if(isNaN(args[1])) return conn.reply(m.chat, "Pake angka")
    let human = ["strength", "mana", "stamina", "agility", "intelligence"]
    let hum = args[0].toLowerCase() // t

    if (!human.includes(hum)) return conn.reply(m.chat, `
List exchange point xp
${human.map(hum => `› ${hum}`).join('\n')}`)

if (user.pointxp == 0) return conn.reply(m.chat, `your point xp not enough`)
user.hum += args[1]
user.pointxp -= args[1]

conn.reply(m.chat, `Now Your ${hum} is ${user.hum}!`)
}
handler.help = ['expoint *<type|jumlah>*']
handler.tags = ['rpg']
handler.command = /^(ex(change)?(point)?)$/i

export default handler
