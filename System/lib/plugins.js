// inspired from https://github.com/Nurutomo/mahbod/blob/main/src/util/PluginManager.ts
import { promises, existsSync, watch } from 'fs'
import { resolve, join } from 'path'
import { platform } from 'os'
import { format } from 'util'
import syntaxerror from 'syntax-error'
import importFile from './import.js'

const { __filename, __dirname } = (await import('./helper.js')).default 
const __dirname1 = __dirname(import.meta)
const rootDirectory = __dirname(join(__dirname1, '../'))
const pluginFolder = __dirname(join(__dirname1, '../plugins'))
const pluginFilter = filename => /\.(mc)?js$/.test(filename)
let pluginFolderr = pluginFolder
let pluginFilterr = pluginFilter
//var pluginFilter = filename => /\.(mc)?js|cjs$/.test(filename)
let watcher = {},
    plugins = {},
    pluginFolders = []

/**
 * load files from plugin folder as plugins 
 * @param {string} pluginFolder 
 * @param {(filename: string) => boolean} pluginFilter 
 * @param {{ 
 *  logger: import('./connection.js').Socket['logger'];
 *  recursiveRead: boolean;
 * }} opts if `'recursiveRead'` is true, it will load folder (call `loadPluginsFiles` function) inside pluginFolder not just load the files
 */
async function loadPluginFiles(
    pluginFolder = pluginFolderr,
    pluginFilter = pluginFilterr,
    opts = { recursiveRead: false }) {

    const folder = resolve(pluginFolder)
    if (folder in watcher) return
    pluginFolders.push(folder)

    const paths = await promises.readdir(pluginFolder)
    await Promise.all(paths.map(async path => {
        const resolved = join(folder, path)
        // trim file:// prefix because lstat will throw error
        const dirname = __filename(resolved, true)
        const formatedFilename = formatFilename(resolved)
        try {
            const stats = await promises.lstat(dirname)
            // if folder 
            if (!stats.isFile()) {
                // and if `recursiveRead` is true
                if (opts.recursiveRead) await loadPluginFiles(dirname, pluginFilter, opts)
                // return because import only can load file
                return
            }
// if windows it will have file:// prefix because if not it will throw error
            const filename = __filename(resolved)
            const isValidFile = pluginFilter(filename)
            if (!isValidFile) return
            const module = await importFile(filename)
            if (module) plugins[formatedFilename] = module
        } catch (e) {
            opts.logger?.error(e, `[⛔] error while requiring ${formatedFilename}`)
            delete plugins[formatedFilename]
        }
    }))


    const watching = watch(folder, reload.bind(null, {
        logger: opts.logger,
        pluginFolder,
        pluginFilter
    }))
    watching.on('close', () => deletePluginFolder(folder, true))
    watcher[folder] = watching

    return plugins = sortedPlugins(plugins)
}

/**
 * It will delete and doesn't watch the folder
 * @param {string} folder ;
 * @param {boolean?} isAlreadyClosed 
 */
function deletePluginFolder(folder, isAlreadyClosed = false) {
    const resolved = resolve(folder)
    if (!(resolved in watcher)) return
    if (!isAlreadyClosed) watcher[resolved].close()
    delete watcher[resolved]
    pluginFolders.splice(pluginFolders.indexOf(resolved), 1)
}
/**
 * reload file to load latest changes
 * @param {{
 *  logger?: import('./connection.js').Socket['logger'];
 *  pluginFolder?: string;
 *  pluginFilter?: (filename: string) => boolean;
 * }} opts
 * @param {*} _ev 
 * @param {*} filename 
 * @returns 
 */
async function reload({
    logger,
    pluginFolder = pluginFolderr,
    pluginFilter = pluginFilterr
}, _ev, filename) {
    if (pluginFilter(filename)) {
        // trim file:// prefix because lstat will throw exception
        const file = __filename(join(pluginFolder, filename), true)
        const formatedFilename = formatFilename(file)
        if (formatedFilename in plugins) {
            if (existsSync(file)) logger?.info(`[🔄] updated plugin - '${formatedFilename}'`)
            else {
                logger?.warn(`[⛔] deleted plugin - '${formatedFilename}'`)
                //this.reply(`${global.set.mods}@s.whatsapp.net`, `Plugins *${formatedFilename}* telah dihapus [❗]`)
                return delete plugins[formatedFilename]
            }
        } else logger?.info(`[✅] new plugin - '${formatedFilename}'`)
        const src = await promises.readFile(file)
        // check syntax error
        let err = syntaxerror(src, filename, {
            sourceType: 'module',
            allowAwaitOutsideFunction: true
        })
        if (err) logger?.error(err, `[❗] syntax error while loading '${formatedFilename}'`)
        else try {
            const module = await importFile(file)
            if (module) plugins[formatedFilename] = module
        } catch (e) {
            logger?.error(e, `[❗] error require plugin '${formatedFilename}'`)
            /*
            this.reply(`${global.set.mods}@s.whatsapp.net`, `[❗] Eror load *${formatedFilename}*
            log:
            ${format(e)}`)
*/
            delete plugins[formatedFilename]
        } finally {
            plugins = sortedPlugins(plugins)
        }
    }
}

/**
 * `'/home/games-wabot/plugins/games/tebakgambar.js'` formated to `'plugins/games/tebakgambar.js'`
 * @param {string} filename 
 * @returns {string}
 */
function formatFilename(filename) {
    let dir = join(rootDirectory, './')
    // fix invalid regular expresion when run in windows
    if (platform() === 'win32') dir = dir.replace(/\\/g, '\\\\')
    // '^' mean only replace if starts with
    const regex = new RegExp(`^${dir}`)
    const formated = filename.replace(regex, '')
    return formated
}

/**
 * Sorted plugins by of their key
 * @param {{
 *  [k: string]: any;
 * }} plugins 
 * @returns {{
 *  [k: string]: any;
 * }} 
 */
function sortedPlugins(plugins) {
    return Object.fromEntries(Object.entries(plugins).sort(([a], [b]) => a.localeCompare(b)))
}

export  {
    pluginFolder,
    pluginFilter,

    plugins,
    watcher,
    pluginFolders,

    loadPluginFiles,
    deletePluginFolder,
    reload
}
