//By Hinata
import fetch from 'node-fetch'
import {readFileSync } from 'fs'
let handler = m => m
handler.all = async function (m) {
	
let who = m.sender ? m.sender : user.jid && user.jid ? user.jid : '0@s.whatsapp.net'	
	let pp = await this.profilePictureUrl(who, 'image').catch(_ => readFileSync('./src/avatar_contact.png'))
	let name = await this.getName(who)
	let curr = ['AED','AFN','ALL','AMD','ANG','AOA','ARS','AUD','AWG','AZN','BAM','BBD','BDT','BGN','BHD','BIF','BMD','BND','BOB','BOV','BRL','BSD','BTN','BWP','BYR','BZD','CAD','CDF','CHE','CHF','CHW','CLF','CLP','CNY','COP','COU','CRC','CUC','CUP','CVE','CZK','DJF','DKK','DOP','DZD','EGP','ERN','ETB','EUR','FJD','FKP','GBP','GEL','GHS','GIP','GMD','GNF','GTQ','GYD','HKD','HNL','HRK','HTG','HUF','IDR','ILS','INR','IQD','IRR','ISK','JMD','JOD','JPY','KES','KGS','KHR','KMF','KPW','KRW','KWD','KYD','KZT','LAK','LBP','LKR','LRD','LSL','LTL','LVL','LYD','MAD','MDL','MGA','MKD','MMK','MNT','MOP','MRO','MUR','MVR','MWK','MXN','MXV','MYR','MZN','NAD','NGN','NIO','NOK','NPR','NZD','OMR','PAB','PEN','PGK','PHP','PKR','PLN','PYG','QAR','RON','RSD','RUB','RWF','SAR','SBD','SCR','SDG','SEK','SGD','SHP','SLL','SOS','SRD','SSP','STD','SYP','SZL','THB','TJS','TMT','TND','TOP','TRY','TTD','TWD','TZS','UAH','UGX','USD','USN','USS','UYI','UYU','UZS','VEF','VND','VUV','WST','XAF','XAG','XAU','XBA','XBB','XBC','XBD','XCD','XDR','XFU','XOF','XPD','XPF','XPT','XTS','XXX','YER','ZAR','ZMW'].getRandom()
    let sipp = await this.resize(pp, 150, 150)
	let _uptime = process.uptime() * 1000
	
		// Fake adReply
		global.adReply = {
			fileLength: set.fsizedoc, seconds: set.fsizedoc,
				contextInfo: {
					forwardingScore: set.fsizedoc,
					//mentionedJid: [user],
					//isForwarded: true, // ini biar ada tulisannya diteruskan berkali-kali
					externalAdReply: {
						showAdAttribution: true,
						title: set.ucapan,
						body: "Telah aktif selama: " + await set.clockString(_uptime),
						mediaUrl: set.gcbot,
						description: set.botdate,
						previewType: 'PHOTO',
						//thumbnail: await(await fetch(set.thumb)).buffer(),
						thumbnail: set.thumb,
						sourceUrl: set.gh
						//thumbnail: set.thumb,
						//mediaType: 1,
						//renderLargerThumbnail: true,
					}
				}
			}
		let fakeig = {
		fileLength: set.fsizedoc, seconds: set.fsizedoc,
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: set.ig,
						mediaType: 'VIDEO',
						description: 'Follow: ' + set.ig,
						title: "Aktif selama: " + set.clockString(_uptime),
						body: set.botdate,
						thumbnailUrl: pp,
						sourceUrl: set.sgc
					}
				}
			}
			let fakefb = {
			fileLength: set.fsizedoc, seconds: set.fsizedoc,
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: set.fb,
						mediaType: 'VIDEO',
						description: 'Follow: ' + set.fb,
						title: "Aktif selama: " + set.clockString(_uptime),
						body: set.botdate,
						thumbnailUrl: pp,
						sourceUrl: set.fb
					}
				}
			}
			let faketik = {
			fileLength: set.fsizedoc, seconds: set.fsizedoc,
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: set.nh,
						mediaType: 'VIDEO',
						description: 'Follow: ' + set.nh,
						title: "Aktif selama: " + set.clockString(_uptime),
						body: set.botdate,
						thumbnailUrl: pp,
						sourceUrl: set.nh
					}
				}
			}
			let fakeyt = {
			fileLength: set.fsizedoc, seconds: set.fsizedoc,
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: set.yt,
						mediaType: 'VIDEO',
						description: 'Follow: ' + set.yt,
						title: "Aktif selama: " + set.clockString(_uptime),
						body: set.botdate,
						thumbnailUrl: pp,
						sourceUrl: set.yt
					}
				}
			}
			
	// Fake Reply
		let fpayment = {
				key: {
					participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
				},
				message: {
					requestPaymentMessage: {
						currencyCodeIso4217: curr,
						amount1000: set.fsizedoc,
						requestFrom: '0@s.whatsapp.net',
						noteMessage: {
							extendedTextMessage: {
								text: '👋 Hay Kak :> ' + name
							}
						},
						expiryTimestamp: set.fsizedoc,
						amount: {
							value: set.fsizedoc,
							offset: set.fsizedoc,
							currencyCode: curr
						}
					}
				}
			}
			let fpoll = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				pollCreationMessage: {
					name: '👋 Hay Kak :> ' + name
				}
			}
		}
		let ftroli = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				orderMessage: {
					itemCount: set.fsizedoc,
					status: 1,
					surface: 1,
					message: set.botdate,
					orderTitle: set.ucapan,
					sellerJid: '0@s.whatsapp.net'
				}
			}
		}
		let fkontak = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				contactMessage: {
					displayName: set.ucapan,
					vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${set.ucapan},;;;\nFN:${set.ucapan},\nitem1.TEL;waid=${who.split('@')[0]}:${who.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`,
					jpegThumbnail: sipp,
					thumbnail: sipp,
					sendEphemeral: true
				}
			}
		}
		let fvn = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				audioMessage: {
					mimetype: 'audio/ogg; codecs=opus',
					seconds: set.fsizedoc,
					ptt: true
				}
			}
		}
		let fvid = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				videoMessage: {
					title: set.ucapan,
					h: 'Hmm',
					seconds: set.fsizedoc,
					caption: "Aktif selama: " + set.clockString(_uptime),
					jpegThumbnail: sipp
				}
			}
		}
		let ftextt = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				extendedTextMessage: {
					text: "Aktif selama: " + set.clockString(_uptime),
					title: set.botdate,
					jpegThumbnail: sipp
				}
			}
		}
		let fliveLoc = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				liveLocationMessage: {
					caption: "Aktif selama: " + set.clockString(_uptime),
					h: set.botdate,
					jpegThumbnail: sipp
				}
			}
		}
		let ftoko = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				productMessage: {
					product: {
						productImage: {
							mimetype: 'image/jpeg',
							jpegThumbnail: sipp
						},
						title: "Aktif selama: " + set.clockString(_uptime),
						description: set.botdate,
						currencyCode: 'IDR',
						priceAmount1000: set.fsizedoc,
						retailerId: 'Ghost',
						productImageCount: 1
					},
					businessOwnerJid: '0@s.whatsapp.net'
				}
			}
		}
		let fdocs = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				documentMessage: {
					title: set.ucapan,
					jpegThumbnail: sipp
				}
			}
		}
		let fgif = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
				videoMessage: {
					title: "Aktif selama: " + set.clockString(_uptime),
					h: 'Hmm',
					seconds: set.fsizedoc,
					gifPlayback: true,
					caption: set.botdate,
					jpegThumbnail: sipp
				}
			}
		}
		// Global Fake
		global.fakes = pickRandom([fakeig, faketik, fakefb, fakeyt, fdocs, fgif, fkontak, fliveLoc, fpayment, fpoll, ftextt, ftoko, ftroli, fvid, fvn])
		
	// Ends
}
export default handler

function pickRandom(list) {
	return list[Math.floor(list.length * Math.random())]
  }