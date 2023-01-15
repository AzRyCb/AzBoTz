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