import fs from 'fs'
import syntaxError from 'syntax-error'
import {join} from 'path'

const _fs = fs.promises

let handler = async (m, { conn, text, usedPrefix, command, __dirname }) => {
    if (!text) throw `
Penggunaan: ${usedPrefix}${command} <name file>
Contoh: ${usedPrefix}getfile main.js
        ${usedPrefix}getplugin owner
`.trim()
    if (/p(lugin)?/i.test(command)) {
        const filename = text.replace(/plugin(s)\//i, '') + (/\.js$/i.test(text) ? '' : '.js')
        const pathFile = join(__dirname, filename)
        const file = await _fs.readFile(pathFile, 'utf8')
        conn.reply(m.chat, file)
        const error = syntaxError(file, filename, {
            sourceType: 'module',
            allowReturnOutsideFunction: true,
            allowAwaitOutsideFunction: true
        })
        if (error) {
            await conn.reply(m.chat,`
Error found in *${filename}*:
\`\`\`
${error}
\`\`\`
`.trim())
        }

    } else {
        const isJavascript = /\.js/.test(text)
        if (isJavascript) {
            const file = await _fs.readFile(text, 'utf8')
            conn.reply(m.chat,file)
            const error = syntaxError(file, text, {
                sourceType: 'module',
                allowReturnOutsideFunction: true,
                allowAwaitOutsideFunction: true
            })
            if (error) {
                await conn.reply(m.chat,`
Error found in *${text}*:
\`\`\`
${error}
\`\`\`
`.trim())
            }
        } else {
            const file = await _fs.readFile(text, 'base64')
            await conn.reply(m.chat,Buffer.from(file, 'base64'))
        }
    }
}
handler.help = ['getplugin', 'getfile'].map(v => `get${v} <name file>`)
handler.tags = ['host']
handler.command = /^g(et)?(p(lugin)?|f(ile)?)$/i

handler.rowner = true

export default handler
