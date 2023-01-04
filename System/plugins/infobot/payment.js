let handler = async (m, { conn, command, usedPrefix }) => {
let anu = `┏━━━〔 ıll *E-WALLETT* llı 〕━━㉿
⬡ *DANA:* 085795035419
⬡ *GOPAY:* 085722037770
⬡ *OVO:* 085722037770
⬡ *SHOPEEPAY:* 085722037770
⬡ *LInkAja:* 085722037770
┗━━━━━━━━━━━━━━━━━━㉿

┏━━〔 ıll *MOTEDE LAIN* llı 〕━㉿
⬡ [Paypal] :
⬡ [PULSA]: 085722037770
⬡ [PULSA2]: 085795035419
┗━━━━━━━━━━㉿

┏━━〔 ıll *RULES* llı 〕━㉿
⬡ [❗] *Dana yang sudah masuk tidak bisa di kembalikan*
⬡ [❗] *Hubungi owner jika perlu bantuan*
⬡ [❗] *cek katalog payment owner untuk lebih lengkap*
┗━━━━━━━━━━㉿

Contact person Sewa Bot:
wa.me/${set.nomorown} (Owner)`
  conn.sendButton(m.chat, anu, set.wm, set.qris, [['store', `${usedPrefix}store`], ['Owner', `${usedPrefix}owner`], ['donasi', `${usedPrefix}donasi`]], m) 
}
handler.help = ['payment']
handler.tags = ['info']
handler.command = /^payment|pembayaran$/i

export default handler
