import db from '../../lib/database.js'
let handler = async (m, { conn, text }) => {
function generateOTP() { 
    // Deklarasi variabel
    var digits = '0123456789'; 
    let OTP = ''; 
    // Membuat kode OTP dengan panjang 6 digit
    for (let i = 0; i < 6; i++ ) { 
        OTP += digits[Math.floor(Math.random() * 10)]; 
    } 
    return OTP; 
} 

function verifyOTP(OTP, input) {
    return OTP === input;
}
//-- cek apaakah otp udh ada atau blm
let otp = db.data.users[m.sender].otp == 0 ? generateOTP() : db.data.users[m.sender].otp

//-- save db
db.data.users[m.sender].otp = otp
conn.sendMessage(m.sender, {
  text: `kode otp anda adalah ${otp}`
})
  
const valid = verifyOTP(otp, text)
if (valid){
  conn.reply(m.chat, "kode valid")
} else {
  conn.reply(m.chat, "kode gavalid bjir")
}
  
}
handler.help = ['otp']
handler.tags = ['tools']
handler.command = /^otp$/i
export default handler