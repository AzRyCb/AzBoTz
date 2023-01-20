let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let teks = `
Kebijakan Privasi, Syarat Ketentuan dan Peraturan fahril-Bot

 *RULES* 』

_*fahrilbotz*_ merupakan suatu program bot whatsapp, yang menggunakan Heroku
Adapun ketentuan untuk memakai _*fahrilbotz*_. :

*1.* Pengguna dapat menggunakan semua perintah/command dengan batasan limit sebanyak 50 setiap pengguna terkecuali user premium dengan limit tanpa batas/unlimited, dan tidak melakukan spam terhadap bot.
*2.* Dilarang Klik Button yg bertujuan nya tidak jelas
*3.* Bot dapat memblokir pengguna/user melanggar rules yang ada di bot ini, rules yang harus dipatuhi oleh pengguna antara lain :
  • Tidak melakukan spam perintah/command yang ada dalam bot ini
*4.* Dilarang keras mengirim pesan V dan semacamnya yang membuat server down ataupun bot crash
*5.* Pengguna yang mengirim hal atau data pribadi tidak akan disimpan oleh bot ini, dan tidak akan bertanggung jawab atas data pribadi tersebut!

_Note : Bot ini menggunakan autoread atau langsung membaca pesan yang pengguna kirim_

*6.* _Mohon untuk tidak Spam Bot karena Bot ini sudah memiliki Otomatis Blokir Bagi Pengguna Bot yang Spam_

*7.* _Mohon untuk tidak Menelpon Bot karena Bot ini sudah memiliki Otomatis Blokir Bagi orang yang nelpon Bot_

*8.* _Kami tidak bertanggung jawab atas penyalahgunaan Bot_

*9.* _Kami tidak bertanggung jawab atas kebocoran data pribadi anda_

*10.* _Instagram_ : https://instagram.com/fahril.ar.73?utm_medium=copy_link

*11.* _nomor owner_ wa.me/6285876902820

*────────────────────────*
═〔 Donasi 〕═
『📱』 Pulsa : 6285876902820
『📱』 Dana : 6285876902820
*────────────────────────*
═〔 pencipta fahrilbotz 〕═
『 *1* 』 fahril
『 *2* 』 nurutumo
『 *OFC* 』 *Official Grup Whatsapp* :
『✓』  https://chat.whatsapp.com/LgVZAb0emPrDMxU41qOjvj
『✓』  https://chat.whatsapp.com/JTpAvj2373H1VvviPLAsBZ
*────────────────────────*
═ 〔 Status 〕 ═
『🔖』 fahrilbotz Versi 2.1.0
『📚』  *HomePage:* https://github.com/Fahrilahmad

『ℹ️』  *Issue:* https://github.com/nurutumo

『🔋』   Baterai ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
『⛔』  *${conn.blocklist.length}* Terblock
『🚧』  *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* Pengguna Terbanned
『📞』  *Request?* wa.me/6285876902810

*────────────────────────*

©fahril - ©2022

 
═〘 fahrilbotz 〙 ═
n data data users.
5. Owner fahrilbotz berhak melihat data riwayat chat users.
6. Owner fahrilbotz berhak melihat status users.
7. Owner fahrilbitz dapat melihat riwayat chat, dan media yang dikirimkan users.

Peraturan fahril Bot
1. Users dilarang menelpon maupun memvideo call nomor bot.
2. Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3. Users diharap tidak melakukan spam dalam penggunaan bot.
4. Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi owner.
5. Users diharap untuk tidak menyalah gunakan fitur fitur bot.

Syarat Ketentuan fahril Bot
1. Bot akan keluar dari group apabila sudah waktunya keluar.
2. fahrilbotz dapat mem-ban users secara sepihak terlepas dari users salah atau tidak.
3. fahrilbotz *tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.*
4. fahrilbotz akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
5. fahrilbotz bertanggung jawab atas kesalahan fatal dalam programing maupun owner.

Peraturan: 1 Februaru 2022
`.trim()
    conn.send2ButtonLoc(m.chat, await(await fetch(image)).buffer(), teks, 'ok', 'ok', 'y.', 'y.', m)
}
handler.help = ['rules']
handler.command = /^(syarat|peraturan|rules)$/i
handler.tags = ['main']
module.exports = handler
