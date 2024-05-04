const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' }) 


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ngoyaibraah@gmail.com"
global.location="Bungoma,Kenya."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Kenya";
global.github=process.env.GITHUB|| "https://github.com/ibrahimaitech/IBRAHIM-MD/tree/main";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/JE3gJsV15ly9ViU6lgw0GD";
global.website=process.env.GURL || "https://www.youtube.com/@ibrahimmdgpt" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fdeb9bdbfae04a6b62dd4.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "25471077266";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "https://telegra.ph/file/fdeb9bdbfae04a6b62dd4.jpg",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "25471077266,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254710772666,254xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://ibrahim-tech-1-4a7321f212d3.herokuapp.com/";

module.exports = {

  menu: process.env.MENU || "A17_MD", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©ⁱᵇʳᵃʰⁱᵐ ᵗᵉᶜʰ💥90✴" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Ibrahim",
  packname: process.env.PACK_NAME || "👑",
  botname : process.env.BOT_NAME  || " 𝗜𝗕𝗥𝗔𝗛𝗜𝗠-ᵐᵈ",
  ownername:process.env.OWNER_NAME|| "It'x 𝗜𝗕𝗥𝗔𝗛𝗜𝗠",

  sessionName:process.env.SESSION_ID || "PANTHER;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUpCLzEydGVReXZ2anFCbnRkK3M2ZUVtaVM1eWpCS0pvNE1va2JSNE1FOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTRCNUNUWDh2dVlZUmV4eUdlTWQ2Q3VUZmJ6YkZRNXR0azlYaWZ2ZThnaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3UGhZREdxeitZT0NVeXJjMFFuRzFCemh6bEYrbFhsL2IrWmVLSktWZVdBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkRTJWaEFFdlFrQ29EL0tPYU16a0Q3QTZMenYweFEybkdCQ0NKbTE2aFZnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1KcjcrNXRwbThLM0JEWS9SR2R2VzVqUEFvSFF3VXNDM2M1eUVHeVllMlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InAzQ2srMVZ2Z3FGSXR5ejlTa0RnWE1qOFVHQ3h1bmh5UUY4MWt6UmNQUW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0FkTkZzQXVGaTltMElRU0hzOUsyUDFKYnQvaGJ2WE1qaEVQMSsyaEtVUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMktyaUlhOVNJS0pIYXhSazZ1UlIrNDZHS2hUTC9aelpjYWRHVmlYaGpVbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikk1ck9WSEhHY1RDNkFrS2l5bXByZGlHSGxyUTVCMi9CSkFndzNvL3hMUzEzTEw3a3lsVkxiM0dFaGJ0eFAzN0JZbHdsSy8xcjkvam5wUGFXbkVJSkJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMsImFkdlNlY3JldEtleSI6Ii9ZMWp2RVpVU0VkNFpxbCtER05zSUtyNmJXdTk5UytYZkJIb1dyZ3pTeVU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3ODY4MzYwNDdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjJFN0YxMDYxM0ExQzlFRUU4Mzc4ODczMTAwMEMwQTMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxNDc5NTExNX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3ODY4MzYwNDdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzQzRDQxMDJGRUY5NENCOTdEMjNBMDM3NEY3MDNDMDQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxNDc5NTExNX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3ODY4MzYwNDdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzc1RTkwNUI0RDdDRUI0RUE4MkEyQzBFOThENjcyOEMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxNDc5NTExOH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTG9FZnVkUG9TVW1OSmlvQlhtOGZVQSIsInBob25lSWQiOiI5MmNkMjQ5NC0xZjNkLTRhMDktOGJjMi0wY2U1MjMxMTZhZGMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoianA1bnFLWTVzYjB6NWdRVFloSTB0MnpkUmZFPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5TMGZVaHUyNktVSVZ1RzFhS3R4R2xLTjl4TT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJNUjJCUDRXNSIsIm1lIjp7ImlkIjoiOTQ3ODY4MzYwNDc6MTdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiZGN0aGFyYTU3OCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHZpNDhzSEVOM2sxckVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoic0tCRFVwMVdETjNTbDJaVjBDTVl0VkxrcXR4czNMMlBLMlF3NnZLa0VFdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQ2xjWkxWLy91aGMrNzUrb3ZYdlYxQ3UxQXcrYk1WOURRS2IvTTg3MHpmV2VFRVJzdk8xRDh6d1NKTTRKSGtVY1dtdmYvQXA5c05jeUI3S3ZIQkpKQnc9PSIsImRldmljZVNpZ25hdHVyZSI6Ikp5V2NYWVNaUURtSkx3aDJpOTkrTm9QN2VSMVRpdEtTemoydE5tNFR6blZ1L3FNTlIxSjY5MUYyUkFoVzlaT1l5d2tIb1owaXVzTHhGUjRJdEprZUFRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODY4MzYwNDc6MTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYkNnUTFLZFZnemQwcGRtVmRBakdMVlM1S3JjYk55OWp5dGtNT3J5cEJCTSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNDc5NTExMywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKb2wifQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "ADAM",



};




























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
 
