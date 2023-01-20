let handler = function (m) {
	this.sendContact(m.chat, '6285876902820', 'creator sc ini :)', m)
}

handler.customPrefix = ['creator fahrilbotz']  //jangan di ganti ntar eror
handler.command = new RegExp
handler.tags = ['info']

module.exports = handler 