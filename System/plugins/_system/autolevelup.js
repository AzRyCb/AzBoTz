import { levelup, canLevelUp, xpRange } from '../../lib/levelling.js'
import db from '../../lib/database.js'

 export function before(m) { 
     let user = db.data.users[m.sender] 
     if (!user.autolevelup) 
         return !0 
     let before = user.level * 1 
     while (canLevelUp(user.level, user.exp, set.multiplier)) 
         user.level++ 
  
     if (before !== user.level) { 
         user.role = set.rpg.role(user.level).name 
         m.reply(` 
 ᴄᴏɴɢʀᴀᴛᴜʟᴀᴛɪᴏɴs, ${this.getName(m.sender)} ʟᴇᴠᴇʟᴇᴅ ᴜᴩ﹗ 
 • 🏅 ᴩʀᴇᴠɪᴏᴜs ʟᴇᴠᴇʟ : ${before} 
 • 🏅 ɴᴇᴡ ʟᴇᴠᴇʟ : ${user.level} 
 • 🏅 ʀᴏʟᴇ : ${user.role} 
 ᴜsᴇ *.profile* ᴛᴏ ᴄʜᴇᴄᴋ 
         `.trim()) 
     } 
 } 