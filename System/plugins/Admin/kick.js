let handler = async (m, { conn, groupMetadata, args, usedPrefix, command }) => {
let ids = groupMetadata.pbarticipants.filter(p => !p.admin || p.superadmin).map((v) => v.id)
let text
let listSections = []
	Object.keys(ids).map((v, index) => {
	listSections.push(["Result [ " + ++index + ' ]', [
          ['❌ KICK ' + conn.getName(ids[v]), usedPrefix + command + ' ' + ids[v], '']
        ]])
	})
	if (args.length >= 1) {
		text = args.slice(0).join(" ")
	} else if (m.quoted && m.quoted.sender) {
		text = m.quoted.sender
	} else return conn.sendList(m.chat, set.htki + " 📺 Models 🔎 " + set.htka, '⚡ Silakan pilih User', set.wm, "☂️ M O D E L ☂️", listSections, m)
	
	if (!ids.includes(text)) throw 'Dia Sudah Out'
	return conn.groupParticipantsUpdate(m.chat, [text], 'remove')
}
handler.help = ['kick', '-'].map(v => 'g' + v + ' @user')
handler.tags = ['admin']
handler.command = /^g?kick$/i

handler.group = handler.botAdmin = true

export default handler