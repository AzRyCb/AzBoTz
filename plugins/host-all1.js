import fs from 'fs'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {

if (command == 'savefile') {
if (!text) throw `where is the path?\n\nexample:\n${usedPrefix + command} plugins/menu.js`
    if (!m.quoted.text) throw `reply code`
    let path = `${text}`
    await fs.writeFileSync(path, m.quoted.text)
    m.reply(`Saved ${path} to file!`)
    }
if (command == 'openfile') {
if (!text) throw `where is the path?\n\nexample:\n${usedPrefix + command} plugins/menu.js`
    let pile = await fs.readFileSync(text)
    await conn.sendFile(m.chat, pile, '', 'Nihh,?', m)
    }
if (command == 'removefile') {
if (!text) throw `where is the path?\n\nexample:\n${usedPrefix + command} plugins/menu.js`
    await fs.unlinkSync(text)
    m.reply(`Delete ${path} to file!`)
    }
    
if (command == 'cekfake') {
 await conn.reply(m.chat, '*Sukses cek fake* ' + args[0], args[0], fakeyt)
    }
    
  }
handler.command = ['savefile', 'cekfake', 'savefile', 'openfile', 'removefile']
handler.tags = ['host']

export default handler