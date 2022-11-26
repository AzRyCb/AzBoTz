let handler = async (m, { conn, command, usedPrefix }) => {
let anu = `┏━━━〔 ıll *E-WALLETT* llı 〕━━㉿
⬡ *DANA:* 085795035419
⬡ *GOPAY:* 085795035419
⬡ *OVO:* 085795035419
⬡ *SHOPEEPAY:* 085795035419
⬡ *LInkAja:* 085795035419
┗━━━━━━━━━━━━━━━━━━㉿

┏━━〔 ıll *MOTEDE LAIN* llı 〕━㉿
⬡ [Paypal] :
⬡ [PULSA]: 085795035419
⬡ [PULSA2]: 085795035419
┗━━━━━━━━━━㉿

┏━━〔 ıll *RULES* llı 〕━㉿
⬡ [❗] *Dana yang sudah masuk tidak bisa di kembalikan*
⬡ [❗] *Hubungi owner jika perlu bantuan*
⬡ [❗] *cek katalog payment owner untuk lebih lengkap*
┗━━━━━━━━━━㉿

Contact person Sewa Bot:
wa.me/${set.nomorown} (Owner)`
  conn.sendButton(m.chat, anu, wm, set.qris, [['store', `${usedPrefix}store`], ['Owner', `${usedPrefix}owner`], ['donasi', `${usedPrefix}donasi`]], m) 
}
handler.help = ['payment']
handler.tags = ['main']
handler.command = /^payment|pembayaran$/i

export default handler
