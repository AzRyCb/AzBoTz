let handler = async (m, { conn, usedPrefix, text, command, args, isOwner, isAdmin, isROegwner }) => {
	let groups = Object.values(await conn.groupFetchAllParticipating())
    let listSections = []
	Object.keys(groups).map((i, index) => {
	listSections.push([++index + ' ' + set.cmenub + ' ' + groups[i].subject, [
          ['More Information', usedPrefix + command + ' gw ' + [i], '']
        ]])
	})
	
  let type = (args[0] || '').toLowerCase()

  switch (type) {
      case 'gw':
      let i = args[1]
      let ppgc = await conn.profilePictureUrl(groups[i].id, 'image')
      let str = `*${set.dmenut}* ${[i]}
*${set.dmenub} Name :* ${groups[i].subject}
*${set.dmenub} Owner :* ${groups[i].owner ? "@" + groups[i].owner.split("@")[0] : "Unknown"}
*${set.dmenub} Subject Owner :* ${groups[i].subjectOwner ? "@" + groups[i].subjectOwner.split("@")[0] : "Unknown"}
*${set.dmenub} ID :* ${groups[i].id}
*${set.dmenub} Restrict :* ${groups[i].restrict}
*${set.dmenub} Announce :* ${groups[i].announce}
*${set.dmenub} Ephemeral :* ${new Date(groups[i].ephemeralDuration* 1000).toDateString()}
*${set.dmenub} Desc ID :* ${groups[i].descId}
*${set.dmenub} Description :* ${groups[i].desc?.toString().slice(0, 10) + '...' || 'unknown'}
*${set.dmenub} Admins :* ${groups[i].participants.filter(p => p.admin).map((v, i) => `\n${set.dmenub} ${i + 1}. @${v.id.split('@')[0]}`).join(' [admin]')}
${isOwner ? `*${set.dmenub} Participants :* ${groups[i].participants.length}` : ''}
${isOwner ? `*${set.dmenub} isBotAdmin :* [ ${!!groups[i].participants.find(v => v.id == conn.user.jid).admin} ]` : ''}
*${set.dmenub} Created :* ${new Date(groups[i].subjectTime* 1000).toDateString()}
*${set.dmenub} Creation :* ${new Date(groups[i].creation* 1000).toDateString()}
*${set.dmenub} Size :* ${groups[i].size}
${set.dmenuf}`
      await conn.sendButton(m.chat, str, set.wm, ppgc ? ppgc : set.logo, ['B A C K', '.menu'], m)
       break
    default:
      if (!/[01]/.test(command)) return conn.sendList(m.chat, set.htki + ' 📺 Group List 🔎 ' + set.htka, `⚡ Silakan pilih Group List di tombol di bawah...\n*Teks yang anda kirim:* ${text ? text : 'Kosong'}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, set.wm, `☂️ Group List Disini ☂️`, listSections, m)
      throw false
  }
}
handler.help = ['listgroup']
handler.tags = ['info']
handler.command = /^((gro?ups?list)|(listgro?ups?)|(listgc))$/i

export default handler