// @ts-check
import { readdirSync, readFileSync } from 'fs'
import { dirname, join, resolve } from 'path'
import {ok} from 'assert'
import syntaxError from 'syntax-error'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const require = createRequire(__dirname)

let folders = ['.', ...Object.keys(require(join(__dirname, './package.json')).directories)]
let files = []
for (let folder of folders)
    for (let file of readdirSync(folder).filter(v => v.endsWith('.js')))
        files.push(resolve(join(folder, file)))
for (let file of files) {
    if (file == __filename) continue
    console.error('Checking', file)
    const error = syntaxError(readFileSync(file, 'utf8'), file, {
        sourceType: 'module',
        allowReturnOutsideFunction: true,
        allowAwaitOutsideFunction: true
    })
    if (error) ok(error.length < 1, file + '\n\n' + error)
    ok(file)
    console.log('Done', file)
}
