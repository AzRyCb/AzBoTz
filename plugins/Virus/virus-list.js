let handler = async (m, { conn }) => {
let info = `
*${set.htki} VIRUS ${set.htka}*
          
 🔥BY ᴹᴿ᭄ King Of Bear ×፝֟͜×🔥
          
                  
–––––– *ᴋᴇʙɪᴊᴀᴋᴀɴ* ––––––
*📮Gunakan Dengan tujuan yang benar. Jangan untuk merugikan orang lain tanpa alasan!*
`
const sections = [
   {
    title: `✃ VIRTEX`,
	rows: [
	    {title: "😈Virtex 1", rowId: '.virtex1', description: 'Harap gunakan dengan bijak' },
	    {title: "😈Virtex 2", rowId: '.virtex2', description: 'Harap gunakan dengan bijak' },
	{title: "😈Virtex 3", rowId: '.virtex3', description: 'Harap gunakan dengan bijak' },
	{title: "😈Virtex 4", rowId: '.virtex4', description: 'Harap gunakan dengan bijak' },
	{title: "😈Virtex 5", rowId: '.virtex5', description: 'Harap gunakan dengan bijak' },
	{title: "😈Virtex 6", rowId: '.virtex6', description: 'Harap gunakan dengan bijak' },
    {title: "😈Virtex 7", rowId: '.virtex7', description: 'Harap gunakan dengan bijak' },
	{title: "😈Virtex 8", rowId: '.virtex8', description: 'Harap gunakan dengan bijak' },
	{title: "😈Virtex 9", rowId: '.virtex9', description: 'Harap gunakan dengan bijak' },
	{title: "😈Virtex 10", rowId: '.virtex10', description: 'Harap gunakan dengan bijak' },
	{title: "😈Virtex 11", rowId: '.virtex11', description: 'Harap gunakan dengan bijak' },
	{title: "😈Virtex 12", rowId: '.virtex12', description: 'Harap gunakan dengan bijak' },
	{title: "😈Virtex 13", rowId: '.virtex13', description: 'Harap gunakan dengan bijak' },
	{title: "😈Virtex 14", rowId: '.virtex14', description: 'Harap gunakan dengan bijak' },
    {title: "😈Virtex 15", rowId: '.virtex15', description: 'Harap gunakan dengan bijak' },
	{title: "😈Virtex 16", rowId: '.virtex16', description: 'Harap gunakan dengan bijak' },
	{title: "😈Virtex 17", rowId: '.virtex17', description: 'Harap gunakan dengan bijak' },
	{title: "😈Virtex 18", rowId: '.virtex18', description: 'Harap gunakan dengan bijak' },
	{title: "😈Virtex 19", rowId: '.virtex19', description: 'Harap gunakan dengan bijak' },
    {title: "😈Virtex 20", rowId: '.virtex20', description: 'Harap gunakan dengan bijak' },

	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "🔥Download WhatsApp Imune", rowId: '.waantivirus', description: 'Download WhatsApp Kebal' },
	    {title: "🔥Virus Troli", rowId: '.virustroli', description: 'Harap gunakan dengan bijak' },
	    {title: "🔥Virus Power", rowId: '.powerlist', description: 'Harap gunakan dengan bijak' },
	    ]
        }, {
    title: `✃ BUY`,
	rows: [
	    {title: "💸Upgrade Premium", rowId: '.sewa', description: 'Dan unclock Fitur premium lainya!' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "👺GASS",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['virtex']
handler.tags = ['virus']
handler.command = /^virtex$/i
handler.premium = true

export default handler
