//By Hinata
import fetch from 'node-fetch'
import {readFileSync } from 'fs'
import Func from '../lib/func.js'
import knights from 'knights-canvas'

//let handler = m => m
//handler.all = async function (m) {
export async function all(m) {
let who = m.sender ? m.sender : this.user.jid && this.user.jid ? this.user.jid : '0@s.whatsapp.net'
let name = await this.getName(who)
let curr = ['AED','AFN','ALL','AMD','ANG','AOA','ARS','AUD','AWG','AZN','BAM','BBD','BDT','BGN','BHD','BIF','BMD','BND','BOB','BOV','BRL','BSD','BTN','BWP','BYR','BZD','CAD','CDF','CHE','CHF','CHW','CLF','CLP','CNY','COP','COU','CRC','CUC','CUP','CVE','CZK','DJF','DKK','DOP','DZD','EGP','ERN','ETB','EUR','FJD','FKP','GBP','GEL','GHS','GIP','GMD','GNF','GTQ','GYD','HKD','HNL','HRK','HTG','HUF','IDR','ILS','INR','IQD','IRR','ISK','JMD','JOD','JPY','KES','KGS','KHR','KMF','KPW','KRW','KWD','KYD','KZT','LAK','LBP','LKR','LRD','LSL','LTL','LVL','LYD','MAD','MDL','MGA','MKD','MMK','MNT','MOP','MRO','MUR','MVR','MWK','MXN','MXV','MYR','MZN','NAD','NGN','NIO','NOK','NPR','NZD','OMR','PAB','PEN','PGK','PHP','PKR','PLN','PYG','QAR','RON','RSD','RUB','RWF','SAR','SBD','SCR','SDG','SEK','SGD','SHP','SLL','SOS','SRD','SSP','STD','SYP','SZL','THB','TJS','TMT','TND','TOP','TRY','TTD','TWD','TZS','UAH','UGX','USD','USN','USS','UYI','UYU','UZS','VEF','VND','VUV','WST','XAF','XAG','XAU','XBA','XBB','XBC','XBD','XCD','XDR','XFU','XOF','XPD','XPF','XPT','XTS','XXX','YER','ZAR','ZMW'].getRandom()
let pp = await this.profilePictureUrl(who, 'image').catch(_ => readFileSync('./System/src/avatar_contact.png'))
let _uptime = process.uptime() * 1000
let uptime = "Telah aktif selama: " + await set.clockString(_uptime)
/*
// Fake Knight
let imagea = await new knights.Jo().setImage(pp).toBuild();
let dataa = imagea.toBuffer();
let imageb = await new knights.Patrick().setAvatar(pp).toAttachment();
let datab = imageb.toBuffer();
let imagec = await new knights.Bonk().setAvatar1(pp).setAvatar2(pp).toBuild();
let datac = imagec.toBuffer();
let imaged = await new knights.Burn().setAvatar(pp).toAttachment();
let datad = imaged.toBuffer();
*/
// jpegThumbnail
let _situm = await Func.resize(set.thumbnailUrl.getRandom(), 300, 150)
let sipp = await Func.resize(pp, 150, 150)
		
// Fake adReply

  

global.set.fakeig = {
fileLength: set.fsizedoc, seconds: set.fsizedoc,
	contextInfo: {
		externalAdReply: {
			showAdAttribution: true,
			mediaUrl: set.ig,
			mediaType: 'VIDEO',
			description: 'Follow: ' + set.ig,
			title: uptime,
			body: set.botdate,
			thumbnailUrl: pp,
			sourceUrl: set.gc
		}
	}
}
global.set.fakefb = {
fileLength: set.fsizedoc, seconds: set.fsizedoc,
	contextInfo: {
		externalAdReply: {
			showAdAttribution: true,
			mediaUrl: set.fb,
			mediaType: 'VIDEO',
			description: 'Follow: ' + set.fb,
			title: uptime,
			body: set.botdate,
			thumbnailUrl: pp,
			sourceUrl: set.fb
		}
	}
}
global.set.faketik = {
fileLength: set.fsizedoc, seconds: set.fsizedoc,
	contextInfo: {
		externalAdReply: {
			showAdAttribution: true,
			mediaUrl: set.nh,
			mediaType: 'VIDEO',
			description: 'Follow: ' + set.nh,
			title: 'uptime',
			body: set.botdate,
			thumbnailUrl: pp,
			sourceUrl: set.nh
		}
	}
}
global.set.fakeyt = {
fileLength: set.fsizedoc, seconds: set.fsizedoc,
	contextInfo: {
		externalAdReply: {
			showAdAttribution: true,
			mediaUrl: set.yt,
			mediaType: 'VIDEO',
			description: 'Follow: ' + set.yt,
			title: uptime,
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
//wrok
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
//wrok
let ftroli = {
	key: {
		participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
	},
	message: {
		orderMessage: {
			itemCount: set.fsizedoc,
			status: 1,
			surface: 1,
			//message: set.botdate,
			orderTitle: set.wm,
			sellerJid: '0@s.whatsapp.net'
		}
	}
}
//wrok
let fkontak = {
	key: {
		participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
	},
	message: {
		contactMessage: {
			displayName: name,
			//pake jid kalo who rsk
			vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${set.ucapan},;;;\nFN:${set.ucapan},\nitem1.TEL;waid=${who.split('@')[0]}:${who.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`,
			jpegThumbnail: set.thumb,
			thumbnail: set.thumb,
			sendEphemeral: true
		}
	}
}
//wrok
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
			title: set.wm,
			h: 'Hmm',
			seconds: set.fsizedoc,
			caption: set.ucapan,
			jpegThumbnail: set.logobot
		}
	}
}
//wrok
let ftextt = {
	key: {
		participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
	},
	message: {
		extendedTextMessage: {
			text: uptime,
			title: set.botdate,
			jpegThumbnail: set.logobot
		}
	}
}
let fliveLoc = {
	key: {
		participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
	},
			message: {
			liveLocationMessage: {
			caption: set.ucapan,
			h: set.botdate,
			jpegThumbnail: set.logobot
		}
	}
}
//wrok
let ftoko = {
	key: {
		participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
	},
	message: {
		productMessage: {
			product: {
				productImage: {
					mimetype: 'image/jpeg',
					jpegThumbnail: set.logobot
				},
				title: uptime,
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
			title: name = '👋 Hay Kak :> ' + name,
			jpegThumbnail: set.logobot
		}
	}
}
//wrok
let fgif = {
	key: {
		participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
	},
	message: {
		videoMessage: {
			title: uptime,
			h: 'Hmm',
			seconds: set.fsizedoc,
			gifPlayback: true,
			caption: uptime,
			jpegThumbnail: set.logobot
		}
	}
}
// Global Fake
//global.set.knimg = [dataa, datab, datac, datad].getRandom() //dataa
global.fakes = [fdocs, fgif, fkontak, fliveLoc, fpayment, fpoll, ftextt, ftoko, ftroli, fvid, fvn].getRandom()
global.set.fkontak = fkontak
global.set.tumhiho = _situm
}

function pickRandom(list) {
	return list[Math.floor(list.length * Math.random())]
  }
