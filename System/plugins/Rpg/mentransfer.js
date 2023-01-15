let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
    if (args.length < 3) {
        return conn.reply(m.chat, `Gunakan format .mentransfer <type> <jumlah> <@tag>\n📍contoh penggunaan: *.mentransfer money 100 @tag*\n\n*List yang bisa di transfer :*\n💹Money\n💳 Tabungan\n🥤Potion\n🗑️Sampah\n💎Diamond\n📦Common\n🛍️Uncommon\n🎁Mythic\n🧰Legendary\n🕸️string\n🪵kayu\n🪨batu\n⛓iron`.trim(), m)
    } else try {
        let type = (args[0] || '').toLowerCase()
        let count = args[1] && args[1].length > 0 ? Math.min(9999999, Math.max(parseInt(args[1]), 1)) : Math.min(1)
        let who = m.mentionedJid ? m.mentionedJid[0] : (args[2].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')
        if(!m.mentionedJid || !args[2]) throw 'Tag salah satu, atau ketik Nomernya!!'
        let users = db.data.users[m.sender]
        switch (type) {
            case 'money':
                if (users.money >= count * 1) {
                    try {
                        users.money -= count * 1
                        db.data.users[who].money += count * 1
                        conn.reply(m.chat, `Berhasil mentransfer money sebesar ${count}`.trim(), m)
                    } catch (e) {
                        users.money += count * 1
                        conn.reply(m.chat, 'Gagal Menstransfer')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of set.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Uang kamu tidak mencukupi untuk mentransfer Money sebesar ${count}`.trim(), m)
                break
            case 'tabungan':
                if (users.atm >= count * 1) {
                   try {
                       users.atm -= count * 1
                       db.data.users[who].atm += count * 1
                       conn.reply(m.chat, `Berhasil mentransfer Uang dari bank sebesar ${count}`.trim(), m)
                    } catch (e) {
                        users.atm += count * 1
                        conn.reply(m.chat, 'Gagal Menstransfer')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of set.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                               conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Limit kamu tidak mencukupi untuk mentransfer Uang dari Bank sebesar ${count}`.trim(), m)
                break
            case 'limit':
                if (users.limit >= count * 1) {
                    try {
                        users.limit -= count * 1
                        db.data.users[who].limit += count * 1
                        conn.reply(m.chat, `Berhasil mentransfer limit sebesar ${count}`.trim(), m)
                    } catch (e) {
                        users.limit += count * 1
                        conn.reply(m.chat, 'Gagal Menstransfer')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of set.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Limit kamu tidak mencukupi untuk mentransfer Limit sebesar ${count}`.trim(), m)
                break
            case 'potion':
                if (users.potion >= count * 1) {
                    try {
                        users.potion -= count * 1
                        db.data.users[who].potion += count * 1
                        conn.reply(m.chat, `Berhasil mentransfer ${count} Potion`.trim(), m)
                    } catch (e) {
                        users.potion += count * 1
                        conn.reply(m.chat, 'Gagal Menstransfer')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of set.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Potion kamu tidak cukup`.trim(), m)
                break
            case 'sampah':
                if (users.sampah >= count * 1) {
                    try {
                        users.sampah -= count * 1
                        db.data.users[who].sampah += count * 1
                        conn.reply(m.chat, `Berhasil mentransfer ${count} Sampah`.trim(), m)
                    } catch (e) {
                        users.sampah += count * 1
                        conn.reply(m.chat, 'Gagal Menstransfer')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of set.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Sampah kamu tidak cukup`.trim(), m)
                break
            case 'diamond':
                if (users.diamond >= count * 1) {
                    try {
                        users.diamond -= count * 1
                        db.data.users[who].diamond += count * 1
                        conn.reply(m.chat, `Berhasil mentransfer ${count} Diamond`.trim(), m)
                    } catch (e) {
                        users.diamond += count * 1
                        conn.reply(m.chat, 'Gagal Menstransfer')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of set.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Diamond kamu kamu tidak cukup`.trim(), m)
                break
            case 'common':
                if (users.common >= count * 1) {
                    try {
                        users.common -= count * 1
                        db.data.users[who].common += count * 1
                        conn.reply(m.chat, `Berhasil mentransfer ${count} Common Crate`.trim(), m)
                    } catch (e) {
                        users.common += count * 1
                        conn.reply(m.chat, 'Gagal Menstransfer')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of set.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Common crate kamu kamu tidak cukup`.trim(), m)
                break
            case 'uncommon':
                if (users.uncommon >= count * 1) {
                    try {
                        users.uncommon -= count * 1
                        db.data.users[who].uncommon += count * 1
                        conn.reply(m.chat, `Berhasil mentransfer ${count} Uncommon Crate`.trim(), m)
                    } catch (e) {
                        users.uncommon += count * 1
                        conn.reply(m.chat, 'Gagal Menstransfer')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of set.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Uncommon crate kamu kamu tidak cukup`.trim(), m)
                break
            case 'mythic':
                if (users.mythic >= count * 1) {
                    try {
                        users.mythic -= count * 1
                        db.data.users[who].mythic += count * 1
                        conn.reply(m.chat, `Berhasil mentransfer ${count} Mythic crate`.trim(), m)
                    } catch (e) {
                        users.mythic += count * 1
                        conn.reply(m.chat, 'Gagal Menstransfer')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of set.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Mythic crate kamu kamu tidak cukup`.trim(), m)
                break
            case 'legendary':
                if (users.legendary >= count * 1) {
                    try {
                        users.legendary -= count * 1
                        db.data.users[who].legendary += count * 1
                        conn.reply(m.chat, `Berhasil mentransfer ${count} Legendary crate`.trim(), m)
                    } catch (e) {
                        users.legendary += count * 1
                        conn.reply(m.chat, 'Gagal Menstransfer')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of set.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Legendary crate kamu kamu tidak cukup`.trim(), m)
                break
            case 'string':
                if (users.string >= count * 1) {
                    try {
                        users.string -= count * 1
                        db.data.users[who].string += count * 1
                        conn.reply(m.chat, `Berhasil mentransfer string sebesar ${count}`.trim(), m)
                    } catch (e) {
                        users.string += count * 1
                        conn.reply(m.chat, 'Gagal Menstransfer')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of set.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Uang kamu tidak mencukupi untuk mentransfer String sebesar ${count}`.trim(), m)
                break
            case 'batu':
                if (users.batu >= count * 1) {
                    try {
                        users.batu -= count * 1
                        db.data.users[who].batu += count * 1
                        conn.reply(m.chat, `Berhasil mentransfer Batu sebesar ${count}`.trim(), m)
                    } catch (e) {
                        users.batu += count * 1
                        conn.reply(m.chat, 'Gagal Menstransfer')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of set.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Uang kamu tidak mencukupi untuk mentransfer Batu sebesar ${count}`.trim(), m)
                break
            case 'kayu':
                if (users.kayu >= count * 1) {
                    try {
                        users.kayu -= count * 1
                        db.data.users[who].kayu += count * 1
                        conn.reply(m.chat, `Berhasil mentransfer kayu sebesar ${count}`.trim(), m)
                    } catch (e) {
                        users.kayu += count * 1
                        conn.reply(m.chat, 'Gagal Menstransfer')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of set.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Uang kamu tidak mencukupi untuk mentransfer Kayu sebesar ${count}`.trim(), m)
                break
            case 'iron':
                if (users.iron >= count * 1) {
                    try {
                        users.iron -= count * 1
                        db.data.users[who].iron += count * 1
                        conn.reply(m.chat, `Berhasil mentransfer iron sebesar ${count}`.trim(), m)
                    } catch (e) {
                        users.iron += count * 1
                        conn.reply(m.chat, 'Gagal Menstransfer')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of set.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Uang kamu tidak mencukupi untuk mentransfer Iron sebesar ${count}`.trim(), m)
                break
            default:
                return conn.reply(m.chat, `Gunakan format ${usedPrefix}transfer <type> <jumlah> <@tag>\n📍 Contoh penggunaan: *${usedPrefix}transfer money 100 @tag*\n\n*List yang bisa di transfer*\n💹 Money\n💳 Tabungan\n🥤 Potion\n🗑️ Sampah\n💎 Diamond\n📦 Common\n🛍️ Uncommon\n🎁 Mythic\n🧰 Legendary\n🕸️ String\n🪵 Kayu\n🪨 Batu\n⛓️ Iron`.trim(), m)
        }
    } catch (e) {
        conn.reply(m.chat, `Gunakan format ${usedPrefix}transfer <type> <jumlah> <@tag>\📍 Contoh penggunaan: *${usedPrefix}transfer money 100 @tag*\n\n*List yang bisa di transfer :*\n💹 Money\n💳 Tabungan\n🥤 Potion\n🗑️ Sampah\n💎 Diamond\n📦 Common\n🛍️ Uncommon\n🎁 Mythic\n🧰 Legendary\n🕸️ String\n🪵 Kayu\n🪨 Batu\n⛓ iron`.trim(), m)
        console.log(e)
        if (DevMode) {
            for (let jid of set.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
            }
        }
    }
}
    
handler.help = ['mentransfer <Args>']
handler.tags = ['rpg']
handler.command = /^(mentransfer|mentf)$/i

export default handler
