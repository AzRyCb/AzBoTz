import db from '../../lib/database.js'
import { sticker } from '../../lib/sistem.js'
import fetch from 'node-fetch'
import axios from 'axios'
import {load} from 'cheerio'
import { lookup } from 'mime-types'
import { extract } from 'zs-extract'
import didyoumean from 'didyoumean'
import similarity from 'similarity'
import { plugins } from  '../../lib/plugins.js'
let { downloadContentFromMessage } = (await import('@adiwajshing/baileys'));
const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
const isSatir = /(([Kk]enao|[Bb]ims|[Aa]v)a|tumlul|Tumlul|[Gg]wejh|[Oo]kgey|[Ss]iava|[Kk]avan|tenan|[Aa](msu|f[ah])|[Mm]gak|lmao|[Pp]edo|([Bb]an|hoo)h|[Kk]nf)/i // tambahin sendiri
const isToxic = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole|a(su|sw|syu)/i // tambahin sendiri
export async function before(m, { conn, args, usedPrefix, isAdmin, isBotAdmin, isOwner, match,  command }) {

let chat = db.data.chats[m.chat]
let setting = db.data.settings[conn.user.jid]
let user = db.data.users[m.sender]

const isGroupLink = linkRegex.exec(m.text)
if (db.data.chats[m.chat].antiLink && isGroupLink && !isAdmin) {
    if (m.isBaileys && m.fromMe) return !0
    if (!m.isGroup) return !1
    if (isBotAdmin) {
        const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
        if (m.text.includes(linkThisGroup)) return !0
    }
        await conn.sendButton(m.chat, `*Group link detect!*${isBotAdmin ? '' : '\n\n_Bot not admin_  t_t'}`, wm, ['off antilink', '/disable antilink'], m)
        if (isBotAdmin && setting.restrict) {
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!setting.restrict) return conn.reply(m.chat, 'Owner disable auto kick!')
    }

let regVirtex = /(PLHIPS|৭৭|๑๑|๒๒|[Đৡดผ๖⃝-⃟⃢-⃤㜸])/i
let isVirtexOn = regVirtex.exec(m.text)
if (chat.security && isVirtexOn && !m.fromMe) {
    if (m.isBaileys && m.fromMe) return !0
    if (!m.isGroup) return !1
        conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
            await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
            await conn.sendButton(m.chat, `*Font Virtext detect!*${isBotAdmin ? '' : '\n\n_Bot bukan admin_'}`, set.wm, ['off antivirtex', '/disable antivirtex'], m)
        if (isBotAdmin && setting.restrict) {
            conn.reply(m.chat, 'Kick!')
                await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!setting.restrict) return conn.reply(m.chat, 'Mungkin dia atmin!')
    }

const isAntiToxic = isToxic.exec(m.text)
if (chat.antiToxic && isAntiToxic) {
    if (m.isBaileys && m.fromMe) return !0
    if (!m.isGroup) return !1
        conn.sendButton(m.chat, `*Kata Kasar Terdeteksi!* ${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, 'Utamakan kesopanan!', ['off antitoxic', '.off antitoxic'], m)
        if (isBotAdmin && setting.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    db.data.users[m.sender].warn += 1
    //db.data.users[m.sender].banned = true
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id:  m.key.id, participant: m.key.participant }})
        } else if (!setting.restrict) return conn.reply(m.chat, `Warn: +1\nbertaubatlah sebelum kematian`)
    }

const isAntiSatir = isSatir.exec(m.text)
if (chat.antiSatir && isAntiSatir) {
    if (m.isBaileys && m.fromMe) return !0
    if (!m.isGroup) return !1
        conn.sendButton(m.chat, `*Kata Satir Terdeteksi!* ${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, wm, ['off antisatir', '/disable antisatir'], m)
        if (isBotAdmin && setting.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    //db.data.users[m.sender].warn += 1
    //db.data.users[m.sender].banned = true
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        } else if (!setting.restrict) return conn.reply(m.chat, 'Biar ngapa kek gitu!')
    }

if (!chat.latestNews) chat.latestNews = []
if (chat && chat.updateAnimeNews) {
	let latest = chat.latestNews
	setInterval(async () => {
		console.log(`Checking anime news for "${m.chat}"`)
		let res = await getNews().catch(console.error)
		let { id, sourceUrl, url, caption } = res
		if (latest.includes(id)) return console.log(`ID ${id} already sent to "${m.chat}"`)
		let length = latest[latest.length - 1]
		latest.push(id)
		if (latest.indexOf(length) !== -1) latest.splice(latest.indexOf(length), 1)
		console.log(`Sending anime news to "${m.chat}"`)
		let templateButtons = [{ urlButton: { displayText: 'Source', url: sourceUrl }}]
		for (let x = 0; x < url.length; x++) {
			let { mime, data } = await conn.getFile(url[x]), type = mime.split('/')[0]
			if (x == 0) return conn.sendMessage(m.chat, { [type]: data, caption, footer: null, templateButtons })
			await conn.sendMessage(m.chat, { [type]: data })
		}
	}, 10*60*1000) // 10 minutes 10*60*1000
}
/*
//autodidyoumean
if ((usedPrefix = (match[0] || '')[0])) {
	let noPrefix = m.text.replace(usedPrefix, '')
	let args = noPrefix.trim().split` `.slice(1)
	let text = args.join` `
	let help = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
if (help.includes(noPrefix)) return
	let mean = didyoumean(noPrefix, help)
	let sim = similarity(noPrefix, mean)
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	let name = await conn.getName(who)
	let caption = `👋 Hai ${name} @${who.split("@")[0]}, Apakah yang kamu maksud: *${usedPrefix + mean}*\nSimilarity: *${Number(sim * 100).toFixed(2)}%*`
if (mean) conn.sendButton(m.chat, caption, set.wm, null, [['✅ Iya', `${usedPrefix + mean} ${text}`], ['❌ Bukan', usedPrefix + '?']], m, { mentions: conn.parseMention(caption) })
}	
*/
if (chat.updateAnime) {
	if (!chat.lastAnime) chat.lastAnime = []
	let lastAnime = chat.lastAnime
	setInterval(async () => {
		console.log(`Checking anime for "${m.chat}"`)
		let { title, cover, url } = (await getLatestAnime())[0]
		if (lastAnime.includes(title)) return console.log(`${title} already sent to "${m.chat}"`)
		let length = lastAnime[lastAnime.length - 1]
		lastAnime.push(title)
		if (lastAnime.indexOf(length) !== -1) lastAnime.splice(lastAnime.indexOf(length), 1)
		console.log(`Sending anime ${title} to "${m.chat}"`)
		let detailAnime = await getDetailAnime(url), download = detailAnime.download
		let txt = parseResult(detailAnime, { title: '*ANIME UPDATE*', ignoreKey: ['update', 'cover', 'download'] })
		let list = Object.keys(download).map(v => parseResult(download[v], { headers: `*• ${v}:*`, body: ' - Quality: %key\n - Url: %value' }))
		let zippy = download['Zippy']
		let templateButtons = [{ urlButton: { displayText: 'Source', url }}]
		let quoted = await conn.sendMessage(m.chat, { image: { url: cover }, caption: `${txt}\n*• Download:*\n${list.join('\n')}`, footer: detailAnime.update, templateButtons })
		if (/Movie/.test(detailAnime.episode)) return conn.reply(m.chat, 'Bot tidak dapat mengirim file video karena terlalu besar...', quoted)
		let res = await downloadAnime(zippy?.['480p'] || zippy?.['720p'] || zippy?.['360p']).catch(() => null)
		if (!res) return conn.reply(m.chat, 'Link download belum tersedia...', quoted)
		await conn.sendMessage(m.chat, { document: { url: res?.download }, fileName: res?.filename, mimetype: res?.mimetype }, { quoted })
	}, 5*60*1000) // 10 minutes 10*60*1000
}


if (chat.simi) {
    if (m.isBaileys && m.fromMe) return !0
    if (!m.isGroup) return !1
    let api = await fetch(`https://api.simsimi.net/v2/?text=${m.text}&lc=id`)
    let res = await api.json()
        conn.reply(m.chat, `*Simi:* ${res.success}`)
}

if (!chat.viewonce) return
    if (m.mtype == 'viewOnceMessage') {
    let msg = m.message.viewOnceMessage.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        conn.sendFile(m.chat, buffer, wm, msg[type].caption || '', m, null, fakes)
        throw '[View Once Video] Detected'
            
    } else if (/image/.test(type)) {
        conn.sendFile(m.chat, buffer, wm, msg[type].caption || '', m, null, fakes)
        throw '[View Once Image] Detected'
    }
}


if (chat.autoSticker) {
    if (m.isBaileys && m.fromMe) return !0
    if (!m.isGroup) return !1
let stiker = false
let mime = (m.msg || m).mimetype || m.mediaType || ''
if (/webp/g.test(mime)) return
if (/image/g.test(mime)) {
let img = await m.download?.()
if (!img) return
stiker = await sticker(img, false, set.packname, set.author)
} else if (/video/g.test(mime)) {
if (/video/g.test(mime)) if ((m.msg || m).seconds > 8) return await conn.sendButton(m.chat, '*VIDEO TIDAK BOLEH LEBIH DARI 7 DETIK*', set.wm, [['NONAKTIFKAN AUTOSTIKER', '/disable autosticker']], m)
let img = await m.download()
if (!img) return
stiker = await sticker(img, false, set.packname, set.author)
} else if (m.text.split(/\n| /i)[0]) {
if (isUrl(m.text)) stiker = await sticker(false, m.text.split(/\n| /i)[0], set.packname, set.author)
else return
}
if (stiker) {
await conn.sendFile(m.chat, stiker, null, { asSticker: true })
}
    }

let name = await conn.getName(m.sender)
let caption = `👋 Anti Bule ${name} @${m.sender.split("@")[0]}, Thanks!`.trim()
if (chat.antibule) {
   if (!m.sender.startsWith('62' || '1')) {
   	user.banned = true
   	conn.sendButton(m.chat, caption, set.wm, null, [['Disable Anti Bule', '.off antibule']], m, { mentions: conn.parseMention(caption) })
   	await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   }
}

// auto get message 
if (setting.autoMessage) {
    if (m.isBaileys || m.key.remoteJid.endsWith('status@broadcast')) return
    if (chat.isBanned) return
    if (user.banned) return
    if (!(m.text.toLowerCase() in db.data.msgs)) return
    let _m = conn.serializeM(JSON.parse(JSON.stringify(db.data.msgs[m.text.toLowerCase()]), (_, v) => {
    if (
        v !== null &&
        typeof v === 'object' &&
        'type' in v &&
        v.type === 'Buffer' &&
        'data' in v &&
        Array.isArray(v.data)) {
            return Buffer.from(v.data)
        }
        return v
    }))
    _m.copyNForward(m.chat)
}
/*
if (chat.autoVn) {
	if (m.isBaileys && m.fromMe) return !0
    if (!m.isGroup) return !1
    let  sim = await fetch(`https://api.simsimi.net/v2/?text=${m.text}&lc=id`)
    let res = await sim.json()
    let tts = `https://hadi-api.herokuapp.com/api/tts?language=id&text=${res.success}`
    conn.sendMessage(m.chat, { audio: { url: tts }, mimetype: 'audio/mp4' })
}
let isJoin = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
const isAutoJoin = isJoin.exec(m.text)
if (chat.autoJoin && isAutoJoin) {
await conn.sendButton(m.chat, `*Group link join detect!*`, set.wm, null, [
        ['Off AutoJoin', `${usedPrefix}off autojoin`],
        ['Bot Join', `${usedPrefix}join ${isJoin}`],
    ], m)
    }
return !0
*/
}

const isUrl = (text) => {
return text.match(new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png|mp4)/, 'gi'))}

function getNews() {
	return new Promise((resolve, reject) => {
		axios.get('https://expressjs-akkun.up.railway.app/instagram/stalk/v2?user=otaku_anime_indonesia').then((res) => {
			let data = res?.data?.result?.edge_owner_to_timeline_media?.edges[0]?.node 
			let result = {
				type: data?.__typename, id: data?.id, sourceUrl: 'https://instagram.com/p/' + data?.shortcode,
				url: [], caption: data?.edge_media_to_caption?.edges?.[0]?.node?.text, ...data // maybe u need conn...
			}
			if (/GraphImage/.test(data?.__typename)) result.url.push(data?.display_url)
			else if (/GraphVideo/.test(data?.__typename)) result.url.push(data?.video_url)
			else {
				data?.edge_sidecar_to_children?.edges.map(({ node }) => {
					if (/GraphImage/.test(node?.__typename)) result.url.push(node?.display_url)
					if (/GraphVideo/.test(node?.__typename)) result.url.push(node?.video_url)
				})
			}
			resolve(result)
		}).catch(reject)
	})
}

function parseResult(json, options) {
    // github: https://github.com/Zobin33/Anu-Wabot/blob/master/lib/functions.js#L81
	let opts = {
		unicode: true,
		ignoreVal: [null, undefined],
		ignoreKey: [],
		title: ' ',
		headers: `%title\n`,
		body: `*• %key:* %value`,
		footer: '\n',
		...options
	}
	let { unicode, ignoreKey, title, headers, ignoreVal, body, footer } = opts
	let obj = Object.entries(json), tmp = []
	for (let [_key, val] of obj) {
		if (ignoreVal.indexOf(val) !== -1) continue
		let key = _key.capitalize(), type = typeof val
		if (ignoreKey && ignoreKey.includes(_key)) continue
		switch (type) {
			case 'boolean':
				tmp.push([key, val ? true : false])
			break
			case 'object':
				if (Array.isArray(val)) tmp.push([key, val.join(', ')])
				else tmp.push([key, parseResult(val, { ignoreKey, unicode: false })])
			break
			default:
				tmp.push([key, val])
			break
		}
	}
	if (unicode) {
		let text = [
			headers.replace(/%title/g, title), tmp.map((v) => {
				return body.replace(/%key/g, v[0]).replace(/%value/g, v[1])
			}).join('\n'), footer
		]
		return text.join('\n').trim()
	}
	return tmp
}

async function downloadAnime(url) {
	// url = url?.['Zippy']?.['480p'] || url?.['Zippy']?.['360p']
	let res = await extract(url)
	let mimetype = await lookup(res.download)
	return { ...res, mimetype }
}

async function getLatestAnime() {
	let html = (await axios.get('https://62.182.83.93/')).data
	let $ = load(html), arr = []
	$('div.home_index > a').each((idx, el) => {
		arr.push({
			title: $(el).attr('title'),
			cover: $(el).find('div.amv > amp-img').attr('src'),
			url: $(el).attr('href')
		})
	})
	return arr
}

async function getDetailAnime(url) {
	let html = (await axios.get(url)).data
	let $ = load(html), obj = {}
	obj.title = $('div.pagetitle > h1').text().trim().replace(/Subtitle Indonesia/, '')
	obj.episode = /Episode/.test(obj.title) ? obj.title.split(' Episode ')[1] : 'Movie'
	obj.update = $('div.breadcrumb > span > time').attr('datetime')
	$('div.contenttable > table > tbody > tr').each((idx, el) => {
		let text = $(el).find('th').text().toLowerCase()
		if (/semua/.test(text)) return
		obj[text] = $(el).find('td').text()
	})
	obj.sinopsis = $('div.contentdeks').text().trim() || $('div.unduhan').eq(0).text().trim()
	obj.cover = $('div.sisi > amp-img').attr('src')
	obj.download = {}
	$('#colomb > p > span').each((idx, el) => {
		let site = $(el).find('span').text()
		obj.download[site] = {}
		$(el).find('a').each((idx2, el2) => {
			let quality = $(el2).text().replace('SD', '').toLowerCase()
			obj.download[site][quality] = $(el2).attr('href')
		})
	})
	return obj
}
