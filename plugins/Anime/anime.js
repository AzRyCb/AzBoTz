let handler  = async (m, { conn, command, usedPrefix }) => {
    
const sections = [
  {
    title: `${set.htki} Anime ${set.htka}`,
      rows: [
        {title: "Akira", rowId: `${usedPrefix}akira`},
        {title: "Akiyama", rowId: `${usedPrefix}akiyama`},
        {title: "Anna", rowId: `${usedPrefix}anna`},
        {title: "Asuna", rowId: `${usedPrefix}asuna`},
        {title: "Ayuzawa", rowId: `${usedPrefix}ayuzawa`},
        {title: "Boruto", rowId: `${usedPrefix}boruto`},
        {title: "Chiho", rowId: `${usedPrefix}chiho`},
        {title: "Chitoge", rowId: `${usedPrefix}chitoge`},
        {title: "Deidara", rowId: `${usedPrefix}deidara`},
        {title: "Erza", rowId: `${usedPrefix}erza`},
        {title: "Elaina", rowId: `${usedPrefix}elaina`},
        {title: "Eba", rowId: `${usedPrefix}eba`},
        {title: "Emilia", rowId: `${usedPrefix}emilia`},
        {title: "Hestia", rowId: `${usedPrefix}hestia`},
        {title: "Hinata", rowId: `${usedPrefix}hinata`},
        {title: "Inori", rowId: `${usedPrefix}inori`},
        {title: "Isuzu", rowId: `${usedPrefix}isuzu`},
        {title: "Itachi", rowId: `${usedPrefix}itachi`},
        {title: "Itori", rowId: `${usedPrefix}itori`},
        {title: "Kaga", rowId: `${usedPrefix}kaga`},
        {title: "Kagura", rowId: `${usedPrefix}kagura`},
        {title: "Nezuko", rowId: `${usedPrefix}nezuko`},
        {title: "Sagiri", rowId: `${usedPrefix}sagiri`},
        {title: "Kaori", rowId: `${usedPrefix}kaori`},
        {title: "Kaneki", rowId: `${usedPrefix}kaneki`},
        {title: "Kotori", rowId: `${usedPrefix}kotori`},
        {title: "Kurumi", rowId: `${usedPrefix}kurumi`},
        {title: "Madara", rowId: `${usedPrefix}madara`},
        {title: "Mikasa", rowId: `${usedPrefix}mikasa`},
        {title: "Miku", rowId: `${usedPrefix}miku`},
        {title: "Minato", rowId: `${usedPrefix}minato`},
        {title: "Naruto", rowId: `${usedPrefix}naruto`},
        {title: "Sasuke", rowId: `${usedPrefix}sasuke`},
        {title: "Sakura", rowId: `${usedPrefix}sakura`},
        {title: "Kanna", rowId: `${usedPrefix}kanna`},
        {title: "Randomanime", rowId: `${usedPrefix}randomanime`},
        ]
    },{
   title: `${set.htki} By Zacros ${set.htka}`,
    rows: [
        {title: "Cosplay", rowId: `${usedPrefix}cosplay`},
        {title: "Waifu", rowId: `${usedPrefix}waifu`},
        {title: "Husbu", rowId: `${usedPrefix}husbu`},
        {title: "Loli", rowId: `${usedPrefix}loli`},
        {title: "Milf", rowId: `${usedPrefix}milf`},
    ]
  },
]
    
const listMessage = {
  text: 'P - Pilih dibawah kak',
  footer: 'Anime by reysekha',
  title: `${set.htki} *Anime* ${set.htka}`,
  buttonText: "Click Here !",
  sections
}
conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo:{ mentionedJid: [m.sender] }})
}
handler.help = ['Menuanime', 'anime']
handler.tags = ['main']
handler.command = /^(anime|menuanime)$/i
    
export default handler