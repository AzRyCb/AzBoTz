/* Recode By Wudysoft */

import { Configuration, OpenAIApi } from "openai"
import cp, { exec as _exec } from "child_process"
import { promisify } from "util"
import fetch from "node-fetch"

let handler = async (m, { conn, isOwner, usedPrefix, command, args }) => {
	let query = "input text\nEx. .aiworld naruto\n<command> <tex>\n\nCommand:\n-ai\n-aicute\n-aianime\n-aitextimg\n-aitextgen\n-aidiff\n-aisent\n-ai3d\n-aipunk\n-aiworld\n-aidalle"
	let text
	if (args.length >= 1) {
		text = args.slice(0).join(" ")
	} else if (m.quoted && m.quoted.text) {
		text = m.quoted.text
	} else throw query
	let keys = global.openaikey
	const configuration = new Configuration({
				apiKey: keys,
			});
			const openai = new OpenAIApi(configuration);
			
			if (command == "openai") {
			let listSections = []
	listSections.push(["Type [ OpenAi ]", [
          ["💬 T E X T", usedPrefix + command + "text " + text],
          ["📷 I M A G E", usedPrefix + command + "img " + text]
        ]])
	return conn.sendList(m.chat, set.htki + " 📺 OpenAi 🔎 " + set.htka, `⚡ Silakan pilih Model di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, set.wm, "☂️ T Y P E ☂️", listSections, m)
			}
			
	if (command == "openaiimg") {
			const resa = await openai.createImage({
				prompt: text,
				n: 1,
				size: "1024x1024",
			});
			await conn.sendButton(m.chat, "*ID:*\n" + resa.data.created, "[ Input ]\n" + text, resa.data.data[0].url, [
				[set.emojis + " M E N U", ".menulist"]
			], m)
	}
	if (command == "openaitext") {
		try {
			const resp = await openai.createCompletion({
				model: "text-davinci-003",
				prompt: text,
				temperature: 0.3,
				max_tokens: 3000,
				top_p: 1.0,
				frequency_penalty: 0.0,
				presence_penalty: 0.0
			});
			conn.reply(m.chat, '*Result:*' + resp.data.choices[0].text + '\n\n' + '*Made by:* ' + 'OpenAi')
		} catch (e) {
			let op = await fetch(set.API('lolhuman', '/api/openai', { text: text }, 'apikey'))
			let ai = await op.json()
			if (!ai.result) throw eror
			conn.reply(m.chat, '*Result:*\n' + ai.result + '\n\n' + '*Made by:* ' + set.API('lolhuman'))
		}
	}
}
handler.command = ["openai", "openaitext", "openaiimg"]
handler.tags = ["tools"]

export default handler