import {writeFileSync, readFileSync, unlinkSync} from 'fs'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {

if (command == 'savefile') {
if (!text) throw `where is the path?\n\nexample:\n${usedPrefix + command} plugins/menu.js`
    if (!m.quoted.text) throw `reply code`
    let path = `${text}`
    writeFileSync(path, m.quoted.text)
    conn.reply(m.chat,`Saved ${path} to file!`)
    }
if (command == 'openfile') {
if (!text) throw `where is the path?\n\nexample:\n${usedPrefix + command} plugins/menu.js`
    let pile = readFileSync(text)
    await conn.sendFile(m.chat, pile, '', 'Nihh,?', m)
    }
if (command == 'removefile') {
if (!text) throw `where is the path?\n\nexample:\n${usedPrefix + command} plugins/menu.js`
    unlinkSync(text)
    conn.reply(m.chat, `Delete ${path} to file!`)
    }
    
if (command == 'cekfake') {
 await conn.reply(m.chat, '*Sukses cek fake* ' + args[0], args[0], fakeyt)
    }
    
  }
handler.help = handler.command = ['savefile', 'cekfake', 'openfile', 'removefile']
handler.tags = ['host']
handler.rowner = true
export default handler