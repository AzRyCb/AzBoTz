const { API, opts } = (await import('../../lib/helper.js')).default 
let handler = async (m, { conn, usedprefix }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    conn.sendButton(m.chat, 'liuliuliuliuliu kami dengar disini ada lolicon', wm, API('https://some-random-api.ml', '/canvas/lolice', {
        avatar: await conn.profilePictureUrl(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    }), [['lolice', `${usedprefix}lolice`]], fakes, adReply)
}

handler.help = ['lolice']
handler.tags = ['maker']

handler.command = /^(lolice)$/i

export default handler