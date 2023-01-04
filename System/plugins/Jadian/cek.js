import db from '../../lib/database.js'
let handler = async (m, { conn, usedPrefix, text }) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }
	
	text = no(text)
  
  if(isNaN(text)) {
		var number = text.split`@`[1]
	}else if(!isNaN(text)) {
		var number = text
	}

  if(number.length > 15 || (number.length < 9 && number.length > 0)) return conn.reply(m.chat, `Maaf, Nomor yang anda masukan salah!`, m)

  if (!text && !m.quoted){
    var user = m.sender
    var orang = "Kamu"
  }else if(text) {
    var user = number + '@s.whatsapp.net'
    var orang = "Orang yang kamu tag"
  } else if(m.quoted.sender) {
    var user = m.quoted.sender
    var orang = "Orang yang kamu balas"
  } else if(m.mentionedJid) {
    var user = number + '@s.whatsapp.net'
    var orang = "Orang yang kamu tag"
  }

  if (typeof db.data.users[user] == "undefined"){
    return m.reply("Target tidak terdaftar di dalam database!")
  }

  if (typeof db.data.users[db.data.users[user].pasangan] == "undefined" && db.data.users[user].pasangan != ""){
    return m.reply("Target tidak terdaftar di dalam database!")
  }

  if (db.data.users[user].pasangan == "") {
    conn.sendButton(m.chat, `${orang} tidak memiliki pasangan dan tidak sedang menembak siapapun`, '*Ketik .jadian @user untuk menembak seseorang*', null, ['Jadian', '.jadian'], m)
  }else if (db.data.users[db.data.users[user].pasangan].pasangan != user){
    conn.sendButton(m.chat, `${orang} sedang menunggu jawaban dari @${db.data.users[user].pasangan.split('@')[0]} karena sedang tidak diterima atau di tolak\n\nKetik *${usedPrefix}ikhlasin* untuk mengikhlaskan!`, 'klik tombol dibawah untuk mengikhlaskan', null, ['ikhlasin', '.ikhlasin'], m,{contextInfo: {
      mentionedJid: [db.data.users[user].pasangan]
    }})
  }else {
    conn.reply(m.chat, `${orang} sedang menjalani hubungan dengan @${db.data.users[user].pasangan.split('@')[0]} 💓💓💓`, m,{contextInfo: {
      mentionedJid: [db.data.users[user].pasangan]
    }})
  }
}
handler.help = ['cekpacar']
handler.tags = ['jadian']
handler.command = /^(cekpacar)$/i

export default handler
