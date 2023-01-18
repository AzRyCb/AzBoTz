/*
import { Configuration, OpenAIApi } from "openai";
let handler = async (m, { conn, text }) => {
if (!text) throw "Usage : #ai Hal Yang Ingin Ditanyakan\n\nExample: #ai Cara Buat Anak"
const configuration = new Configuration({
    apiKey: "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"
});
const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: text,
            temperature: 0,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0
        });
            conn.reply(m.chat, response.data.choices[0].text)
    }
handler.help = ['ai', 'openai']
handler.command = /^(ai|openai)$/i
handler.tags = ['premium']
handler.premium = true
export default handler
*/
/* Recode By Wudysoft */

import { Configuration, OpenAIApi } from "openai"
import cp, { exec as _exec } from "child_process"
import { promisify } from "util"
let exec = promisify(_exec).bind(cp)
import fetch from "node-fetch"

let handler = async (m, { conn, isOwner, usedPrefix, command, args }) => {
	let query = "input text\nEx. .aiworld naruto\n<command> <tex>\n\nCommand:\n-ai\n-aicute\n-aianime\n-aitextimg\n-aitextgen\n-aidiff\n-aisent\n-ai3d\n-aipunk\n-aiworld\n-aidalle\n-aimodel"
	let text
	if (args.length >= 1) {
		text = args.slice(0).join(" ")
	} else if (m.quoted && m.quoted.text) {
		text = m.quoted.text
	} else throw query
	let urut = text.split`|`
  let one = urut[0]
  let two = urut[1]
  let three = urut[2]
  let keys = set.openaikey
  const configuration = new Configuration({
				apiKey: keys,
			});
			const openai = new OpenAIApi(configuration);
			
	if (command == "aicute") {
		conn.reply(m.chat, wait)
		let o
		try {
			o = await exec("curl \ -F text=" + text.trimEnd() + "\ -H api-key:35b8ca00-2e90-4fca-8ed8-3ffea5a66803 \ https://api.deepai.org/api/cute-creature-generator")
		} catch (e) {
			o = e
		} finally {
			let {
				stdout
			} = o
			let str = JSON.parse(stdout)
			await conn.sendButton(m.chat, "*ID:*\n" + str.id, "[ Input ]\n" + text, str.output_url, [
				[set.emojis + " M E N U", ".menulist"]
			], m)
		}
	}
	
	if (command == "aianime") {
		conn.reply(m.chat, wait)
		let o
		try {
			o = await exec("curl \ -F text=" + text.trimEnd() + "\ -H api-key:35b8ca00-2e90-4fca-8ed8-3ffea5a66803 \ https://api.deepai.org/api/anime-portrait-generator")
		} catch (e) {
			o = e
		} finally {
			let {
				stdout
			} = o
			let str = JSON.parse(stdout)
			await conn.sendButton(m.chat, "*ID:*\n" + str.id, "[ Input ]\n" + text, str.output_url, [
				[set.emojis + " M E N U", ".menulist"]
			], m)
		}
	}
	
	if (command == "aitextimg") {
		conn.reply(m.chat, wait)
		let o
		try {
			o = await exec("curl \ -F text=" + text.trimEnd() + "\ -H api-key:35b8ca00-2e90-4fca-8ed8-3ffea5a66803 \ https://api.deepai.org/api/text2img")
		} catch (e) {
			o = e
		} finally {
			let {
				stdout
			} = o
			let str = JSON.parse(stdout)
			await conn.sendButton(m.chat, "*ID:*\n" + str.id, "[ Input ]\n" + text, str.output_url, [
				[set.emojis + " M E N U", ".menulist"]
			], m)
		}
	}
	
	if (command == "aitextgen") {
		conn.reply(m.chat, wait)
		let o
		try {
			o = await exec("curl \ -F text=" + text.trimEnd() + "\ -H api-key:35b8ca00-2e90-4fca-8ed8-3ffea5a66803 \ https://api.deepai.org/api/text-generator")
		} catch (e) {
			o = e
		} finally {
			let {
				stdout
			} = o
			let str = JSON.parse(stdout)
			await conn.sendButton(m.chat, "*ID:*\n" + str.id, str.output, logo, [
				[set.emojis + " M E N U", ".menulist"]
			], m)
		}
	}
	
	if (command == "aidiff") {
		conn.reply(m.chat, wait)
		let o
		try {
			o = await exec("curl \ -F text=" + text.trimEnd() + "\ -H api-key:35b8ca00-2e90-4fca-8ed8-3ffea5a66803 \ https://api.deepai.org/api/stable-diffusion")
		} catch (e) {
			o = e
		} finally {
			let {
				stdout
			} = o
			let str = JSON.parse(stdout)
			await conn.sendButton(m.chat, "*ID:*\n" + str.id, "[ Input ]\n" + text, str.output_url, [
				[set.emojis + " M E N U", ".menulist"]
			], m)
		}
	}
	
	if (command == "aisent") {
		conn.reply(m.chat, wait)
		let o
		try {
			o = await exec("curl \ -F text=" + text.trimEnd() + "\ -H api-key:35b8ca00-2e90-4fca-8ed8-3ffea5a66803 \ https://api.deepai.org/api/sentiment-analysis")
		} catch (e) {
			o = e
		} finally {
			let {
				stdout
			} = o
			let str = JSON.parse(stdout)
			await conn.sendButton(m.chat, "*ID:*\n" + str.id, "[ Input ]\n" + text, str.output_url, [
				[set.emojis + " M E N U", ".menulist"]
			], m)
		}
	}
	
	if (command == "ai3d") {
		conn.reply(m.chat, wait)
		let o
		try {
			o = await exec("curl \ -F text=" + text.trimEnd() + "\ -H api-key:35b8ca00-2e90-4fca-8ed8-3ffea5a66803 \ https://api.deepai.org/api/3d-character-generator")
		} catch (e) {
			o = e
		} finally {
			let {
				stdout
			} = o
			let str = JSON.parse(stdout)
			await conn.sendButton(m.chat, "*ID:*\n" + str.id, "[ Input ]\n" + text, str.output_url, [
				[set.emojis + " M E N U", ".menulist"]
			], m)
		}
	}
	
	if (command == "aipunk") {
		conn.reply(m.chat, wait)
		let o
		try {
			o = await exec("curl \ -F text=" + text.trimEnd() + "\ -H api-key:35b8ca00-2e90-4fca-8ed8-3ffea5a66803 \ https://api.deepai.org/api/steampunk-generator")
		} catch (e) {
			o = e
		} finally {
			let {
				stdout
			} = o
			let str = JSON.parse(stdout)
			await conn.sendButton(m.chat, "*ID:*\n" + str.id, "[ Input ]\n" + text, str.output_url, [
				[set.emojis + " M E N U", ".menulist"]
			], m)
		}
	}
	
	if (command == "aiworld") {
		conn.reply(m.chat, wait)
		let o
		try {
			o = await exec("curl \ -F text=" + text.trimEnd() + "\ -H api-key:35b8ca00-2e90-4fca-8ed8-3ffea5a66803 \ https://api.deepai.org/api/anime-world-generator")
		} catch (e) {
			o = e
		} finally {
			let {
				stdout
			} = o
			let str = JSON.parse(stdout)
			await conn.sendButton(m.chat, "*ID:*\n" + str.id, "[ Input ]\n" + text, str.output_url, [
				[set.emojis + " M E N U", ".menulist"]
			], m)
		}
	}
	
	if (command == "aidalle") {
		conn.reply(m.chat, wait)
		let url = "https://dalle-mini.amasad.repl.co/gen/" + text
			await conn.sendButton(m.chat, author, "[ Input ]\n" + text, url, [
			[set.emojis + " M E N U", ".menulist"]
		], m)
	}
	
	if (command == "ai") {
		try {
			const response = await openai.createCompletion({
				model: "text-davinci-003",
				prompt: text,
				temperature: 0.3,
				max_tokens: 3000,
				top_p: 1.0,
				frequency_penalty: 0.0,
				presence_penalty: 0.0,
			});
			conn.reply(m.chat, '*Result:*' + response.data.choices[0].text + '\n\n' + '*Made by:* ' + 'OpenAi')
		} catch (e) {
			let op = await fetch(set.API('lolhuman', '/api/openai', { text: text }, 'apikey'))
			let ai = await op.json()
			if (!ai.result) throw eror
			conn.reply(m.chat, '*Result:*\n' + ai.result + '\n\n' + '*Made by:* ' + set.API('lolhuman'))
		}
	}
	
	if (command == "aimodel") {
	if (!text) throw query
	let lm = await openai.listModels();
	let listSections = []
	Object.values(lm.data.data).map((v, index) => {
	listSections.push(["Model [ " + ++index + ' ]', [
          [v.id.toUpperCase(), usedPrefix + command + "get " + v.id + "|" + text, "➥"]
        ]])
	})
	return conn.sendList(m.chat, set.htki + " 📺 Models 🔎 " + set.htka, `⚡ Silakan pilih Model di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, set.wm, "☂️ M O D E L ☂️", listSections, m)
	}
	
	if (command == "aimodelget") {
	try {
			let res = await openai.createCompletion({
				model: one,
				prompt: two,
				temperature: 0.3,
				max_tokens: 3000,
				top_p: 1.0,
				frequency_penalty: 0.0,
				presence_penalty: 0.0
			});
			conn.reply(m.chat, '*Result:*' + res.data.choices[0].text + '\n\n' + '*Made by:* ' + 'OpenAi')
		} catch (e) {
			let op = await fetch(set.API('lolhuman', '/api/openai', { text: text }, 'apikey'))
			let ai = await op.json()
			if (!ai.result) throw eror
			conn.reply(m.chat, '*Result:*\n' + ai.result + '\n\n' + '*Made by:* ' + set.API('lolhuman'))
		}
	}
	
}
handler.help = ["ai"]
handler.tags = ["main"]
handler.command = /^ai(text(gen|img)|(dall|cut)e|anime|world|diff|punk|model|modelget|sent|3d)?$/i
export default handler