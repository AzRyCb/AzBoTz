const { API } = (await import('../../lib/helper.js')).default 
let handler = async (m, { conn, usedPrefix, command }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, API(`https://some-random-api.ml', '/canvas/${command}`, {
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
}), 'hornycard.png', '*Nih Kartunya Kak*', m)
}
handler.help = ['horny', 'bisexual', 'blur', 'circle', 'colorviewer', 'heart', 'hex', 'jpg', 'lesbian', 'lgbt', 'lied', 'lolice', 'namecard', 'nobitches', 'nonbinary', 'oogway', 'oogway2', 'pansexual', 'pixelate', 'rgb', 'simpcard', 'spin', 'tonikawa', 'transgender', 'tweet']
handler.tags = ['canvas'] 
handler.command = /^(horny|bisexual|blur|circle|colorviewer|heart|hex|jpg|lesbian|lgbt|lied|lolice|namecard|nobitches|nonbinary|oogway|oogway2|pansexual|pixelate|rgb|simpcard|spin|tonikawa|transgender|tweet)$/i 
export default handler