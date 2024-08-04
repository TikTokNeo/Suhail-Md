const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+94701479831";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_01_56_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDU2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDczLFxuICAgICAgICAyMixcbiAgICAgICAgMTc0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQsXG4gICAgICAgIDY5LFxuICAgICAgICA0NixcbiAgICAgICAgODcsXG4gICAgICAgIDU4LFxuICAgICAgICA1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzMyxcbiAgICAgICAgMyxcbiAgICAgICAgODMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDM0LFxuICAgICAgICA1NixcbiAgICAgICAgNDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTAyLFxuICAgICAgICA4MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTksXG4gICAgICAgIDg2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDU1LFxuICAgICAgICA3OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDc2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTksXG4gICAgICAgIDYxLFxuICAgICAgICAyMCxcbiAgICAgICAgMixcbiAgICAgICAgNTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDkzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA2OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDksXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA0NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyOCxcbiAgICAgICAgODIsXG4gICAgICAgIDUwLFxuICAgICAgICA1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyOCxcbiAgICAgICAgODMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODgsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ2LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwic28vU1k3di96RlFGdXdsMWsyc2E5Y29ILzRqK09Qb05GZ0llOTdIVit0MD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcwMTQ3OTgzMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNUM4MkI4QTEyQzZBM0UzRDA5NzU5OURCNzkzODAyQjhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNzM2NjA5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkUwaGRqOU80UVZlQjV0VUlubDBqT3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTU4NDFjNWQtNzU0NC00YzVkLWIzM2EtNWMzMDczZjVlMjhmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NCxcbiAgICAgIDIwNCxcbiAgICAgIDUwLFxuICAgICAgMTc1LFxuICAgICAgMCxcbiAgICAgIDEyMCxcbiAgICAgIDQsXG4gICAgICA4OSxcbiAgICAgIDEwNSxcbiAgICAgIDE3NixcbiAgICAgIDE3NCxcbiAgICAgIDc4LFxuICAgICAgMjksXG4gICAgICAxMzMsXG4gICAgICAxNzYsXG4gICAgICA4OCxcbiAgICAgIDEyOCxcbiAgICAgIDIxLFxuICAgICAgMTg0LFxuICAgICAgODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQyLFxuICAgICAgOTksXG4gICAgICAzLFxuICAgICAgMzYsXG4gICAgICA5OSxcbiAgICAgIDc2LFxuICAgICAgOTAsXG4gICAgICAyOCxcbiAgICAgIDMyLFxuICAgICAgMzAsXG4gICAgICAzLFxuICAgICAgMTcyLFxuICAgICAgMTgyLFxuICAgICAgMTg3LFxuICAgICAgMTM5LFxuICAgICAgNjcsXG4gICAgICAxMzAsXG4gICAgICAxMTQsXG4gICAgICA5NCxcbiAgICAgIDIwMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3SEhHNzFZNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MDE0Nzk4MzE6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkltXFxuXFxuSFxcblxcbmVcXG5cXG5aXFxuXFxuaFxcblxcbnVcIixcbiAgICBcImxpZFwiOiBcIjEzNTQ0MjExMjQ1NDg3Nzo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05DNng5WUJFTmkvdTdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTjBjTVlpbmlxeTNGV3BmRjdJOHltRWc2QTFaTlRLL3lpSDJ1NU5ZSFpCST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5UzFYNkpldzR3S0prSGl6UHY3Q2w1eURrSjdGek1DTVRtTnRlU1NXWTBOTDRPVWJ4S0E5bmM4QSs0dWFTL2R5cU9RV3RUU0RDZElJUGFZdjJUYmhCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ3QVMycXZxV0hwOFZPb21TVGhzNTNSWFltcWEyWk10Y20zdmI0R3pScXRnczlieGRNOTUrYU5WMG1LVk5ibTBFL3RQZVRGNjdjNHNFWDRvdU0rV29EUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcwMTQ3OTgzMTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNzM2NjA0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTmYwXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOZjAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJETC9GRkVKM1hOTlZxeGR4RUVPSHhlK0pWYXo5WUNZbU1vdlNBU0N1emJJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ0OTk2MTI5NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNzM2NjA3NDc3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
