let handler = async(m, { conn }) => {
    let name = m.sender
    let fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '6285722037770@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    try {
    const sentMsg = await conn.sendContactArrayS(m.chat, [
      [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `Bot WhatsApp 🤖`, `📵 Don't spam/call me 😢`, `Nothing`, `🇮🇩 Indonesia`, `🌐 https://ecosia.com`, `📝 WaBot Development Version ☺`],

      [`${set.owner[0]}`, `${await conn.getName(set.owner[0]+'@s.whatsapp.net')}`, `👑 Developer AzBoTz `, `Open Layanan Dan Jasa 🪀`, `azry695@gmail.com`, `🇮🇩 Indonesia`, `🌐 https://github.com/azrycb`, `📝 Tidak menerima save contact :)`],
      //[owner[1], await this.getName(owner[1] + '@s.whatsapp.net'), `👤 Customer Service `, `Available`, `google@gmail.com`, `🇮🇩 Indonesia`, `🌐 https://github.com`, `📝 Siap melayani kapanpun`]
    ], fkonn) 
    await conn.reply(m.chat, 
`Halo @${m.sender.split(`@`)[0]} itu ownerku 😉

📮 *Note:*
• Owner tidak menerima save contact
• Owner berhak blockir tanpa alasan
• Berbicaralah yang sopan & tidak spam
• Owner Hanya merespon yang berkaitan dengan BOT
• No Telp/Vc`, sentMsg, { contextInfo: { mentionedJid: [m.sender] }})
    } catch {
    const sentMsg = await conn.sendContact(m.chat, `${set.owner[0]}`, `${await conn.getName(set.owner[0]+'@s.whatsapp.net')}`, m) 
    await conn.reply(m.chat, 
`Halo @${m.sender.split(`@`)[0]} itu developerku 😉

📮 *Note:*
• Owner tidak menerima save contact
• Owner berhak blockir tanpa alasan
• Berbicaralah yang sopan & tidak spam
• Owner Hanya merespon yang berkaitan dengan BOT
• No Telp/Vc`, sentMsg, { contextInfo: { mentionedJid: [m.sender] }})
    }
  }
handler.command = /^nomorowner$/i

export default handler
