/*

let handler  = async (m, { conn, command, usedPrefix }) => {
    
	const sections = [
	  {
		title: `${set.htki} PREMIUM ${set.htka}`,
		  rows: [
			{title: "📱 • Resso", rowId: `${usedPrefix}listresso`},
			{title: "🎨 • Canva", rowId: `${usedPrefix}listcanva`},
			{title: "🌎 • Autoresponder", rowId: `${usedPrefix}listautorespon`},
			{title: "🌎 • Youtube", rowId: `${usedPrefix}listyt`},
		  ]
		},{
		title: `${set.htki} Jasa Owner ${set.htka}`,
		rows: [
			{title: "🔖 • Jadibot", rowId: `${usedPrefix}listjdbot`},
			{title: "💹 • Run Bot", rowId: `${usedPrefix}runbot`},
			{title: "💹 • Cluster MongoDb", rowId: `${usedPrefix}cluster`},
		]
	},{
	title: `${set.htki} Akun ${set.htka}`,
	rows: [			
		{title: "Google", rowId: `${usedPrefix}akungoogle`},
        {title: "Yahoo", rowId: `${usedPrefix}akunyahoo`},
        {title: "nomor kosong", rowId: `${usedPrefix}nomorkosong`},
		   ]
		},{
		title: `${set.htki} StoreBot ${set.htka}`,
		rows: [
		  {title: "🔖 • SewaBot", rowId: `${usedPrefix}sewa`},
		  {title: " • Buy Premium", rowId: `${usedPrefix}premium`},
		]
	  },
	]
		
	const listMessage = {
	  text: 'P - Pilih dibawah kak',
	  footer: null,
	  title: `${set.htki} *STORE* ${set.htka}`,
	  buttonText: "Click Here !",
	  sections
	}
	conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo:{ mentionedJid: [m.sender] }})
	}
	handler.tags = ['main']
	handler.command = /^(store|toko)$/i
	handler.help = ['store']
	handler.register = false
	
	export default handler
	*/