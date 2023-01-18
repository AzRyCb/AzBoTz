let handler = async (m, { conn, command, usedPrefix }) => {
let str = `${conn.getName(m.sender)}
Want Support Bot?
*[ PAYMENT METHOD ]*
- Pulsa/pulse(Telkomsel): *${set.pulsa}*
- Dana/ovo: *${set.dana}*
- Paypal: *${set.paypal}*
- Saweria: *${set.saweria}*
- Trakteer: *${set.trakteer}*
Setelah melakukan donasi kirim bukti pembayaran ke owner
`
conn.sendPayment(m.chat, set.fsizedoc, 'USD', str, '0@s.whatsapp.net', set.logo, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler