/*
MyWA BOT
Made by Amirul Dev
*/

//-- module external
import cp from 'child_process'
import { promisify } from 'util'
let exec = promisify(cp.exec).bind(cp)
let handler = async (m, { conn, text, args }) => {

    //━━━━━[ HELP MENU ]━━━━━//
    if (!args[0]) return conn.reply(m.chat, `*HELP COMMAND*

Comand ini untuk action git khusus owner

This command is for owner-specific git actions`)

    if (conn.user.jid != conn.user.jid) return
    let [t1, t2] = text.split`/`
    let isi = t1.replace("all", ".")

    // action git action file* or folder/*
    var textt = args[0] == "upd" ? "git pull" : `git add ${isi} && git commit -m "${t2}" && git push`

    var resp = args[0] == "upd" ? "mengupdate script dari github..." : "memperbarui script & upload ke github..."
    conn.reply(m.chat, resp)

    let o

    try {
        o = await exec(textt.trimEnd())
    } catch (e) {
        o = e
    } finally {

        let { stdout, stderr } = o
        if (stdout.trim()) {
            conn.reply(m.chat, stdout)
        }
    }
    //if(stderr.trim()) {
    //m.reply(stderr)
    //}
}
handler.help = ['act *opt*']
handler.tags = ['host']
handler.command = /^(act)$/i
handler.rowner = true

export default handler
