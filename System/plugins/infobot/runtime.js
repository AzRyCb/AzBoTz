
let handler = async (m, { conn, args, usedPrefix, command }) => {
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = set.clockString2(_muptime)
    conn.sendHydrated(m.chat, `⏳ Runtime: ${muptime}`, 
set.wm, set.logo, set.web, 'Website', null, null, [
[`ᴏᴡɴᴇʀ`, `${usedPrefix}owner`],
[`ᴅᴏɴᴀᴛᴇ`, `${usedPrefix}donate`]
], m)
}
handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^r(untime?|t)$/i
export default handler