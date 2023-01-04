import cheerio from "cheerio"
import axios from "axios"

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if(!text) return conn.reply(m.chat,'Text nya kak?')
	    lyrics(text).then(judul => {
		let liriks = JSON.stringify(judul)
		let json = JSON.parse(liriks)
        let result = json
        let lilik = `${json.hasil}`.trim()
           conn.reply(m.chat, lilik, m)
       })
}

handler.help = ['lirik4'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik4|lyrics4|lyric4)$/i
handler.limit = true

export default handler


function lyrics(judul){
	return new Promise(async(resolve, reject) => {
   		axios.get('https://www.musixmatch.com/search/' + judul)
   		.then(async({ data }) => {
   		const $ = cheerio.load(data)
   		const hasil = {};
   		let limk = 'https://www.musixmatch.com'
   		const link = limk + $('div.media-card-body > div > h2').find('a').attr('href')
	   		await axios.get(link)
	   		.then(({ data }) => {
		   		const $$ = cheerio.load(data)
		   		hasil.thumb = 'https:' + $$('div.col-sm-1.col-md-2.col-ml-3.col-lg-3.static-position > div > div > div').find('img').attr('src')
		  		$$('div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics').each(function(a,b) {
		   hasil.lirik = $$(b).find('span > p > span').text() +'\n' + $$(b).find('span > div > p > span').text()
		   })
	   })
	   resolve(hasil)
   })
   .catch(reject)
   })
}
