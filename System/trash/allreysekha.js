let handler = async (m, { conn, usedPrefix, command }) => {
let api = `https://api-reysekha.herokuapp.com/api/wallpaper/${command}?apikey=APIKEY`
    conn.sendButton(m.chat, 'Sukanya Yang Gk Nyata :(', wm, api, [['Next', `${usedPrefix}${command}`]], fakes, adReply)
}
handler.help = ['akira', 'akiyama', 'anna', 'asuna', 'ayuzawa', 'boruto', 'chiho', 'chitoge', 'deidara', 'erza', 'elaina', 'eba', 'emilia', 'hestia', 'hinata', 'inori', 'isuzu', 'itachi', 'itori', 'kaga', 'kagura', 'kaori', 'keneki', 'kotori', 'kurumi', 'madara', 'mikasa', 'miku', 'minato', 'naruto', 'nezuko', 'sagiri', 'sasuke', 'sakura']
handler.tags = ['trash']
handler.command = /^(akira|akiyama|anna|asuna|ayuzawa|boruto|chiho|chitoge|deidara|erza|elaina|eba|emilia|hestia|hinata|inori|isuzu|itachi|itori|kaga|kagura|kaori|keneki|kotori|kurumi|madara|mikasa|miku|minato|naruto|nezuko|sagiri|sasuke|sakura)$/i
//buatan hyzer, jgn hapus 🗿
export default handler
