let handler = async(m, { conn, text, args, usedPrefix, command }) => {

  if (!args[0]) return m.reply(`Example : ${usedPrefix + command} pubg|helo|banh
  *List Efek:*
  pubg
  slidetext
  glitch`)
  
  let urut = text.split`|`
  let thm = urut[0]
  let text1 = urut[1]
  let text2 = urut[2]
  
        let images = `https://api-xcoders.xyz/api/photooxy/${thm}?text=${text1}&text2=${text2}&apikey=${set.xckey}`
        let caption = `*⎔┉━「 ${command} 」━┉⎔*
🤠 *Query* : ${thm}`
  conn.sendButton(m.chat, caption, set.wm, images, [
                ['Next', `${usedPrefix + command}`],
                ['Menu', `${usedPrefix}menu`]
            ], fakes, adReply)
            }
handler.help = ['photooxy2']
handler.tags = ['photooxy']
handler.command = /^(oxy2|photooxy2)$/i

export default handler