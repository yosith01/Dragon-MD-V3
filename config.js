const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"
global.port= process.env.PORT || 5000
global.email = 'amiyaprogramer@gmail.com'
global.github = 'https://github.com/TechwithAmee1/Dragon-MD-V3'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com/mr.amiya.ofc' // add your username
global.sudo = process.env.SUDO || '94767453646'
global.devs = '94767453646';
global.website = 'https://github.com/TechwithAmee1/Dragon-MD-V3' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.ibb.co/30VVgGW/Amiya.jpg'
module.exports = {
  botname: process.env.BOT_NAME || '𝐃𝐫𝐚𝐠𝐨𝐧 𝐁𝐨𝐭',
  ownername:process.env.OWNER_NAME || '៚֟ᴍ֢ʀͥ.ᴀͣᴍͫɪʏ͙ᴀ֮༒֘ᴏꜰ̐̈́ᴄ֮༒֘ʏᴛ͢⁸⁵⁴¹༆࿐',
  sessionName: process.env.SESSION_ID || 'PUT-HERE',
  author: process.env.PACK_INFO.split(";")[0] || 'author', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname: process.env.PACK_INFO.split(";")[1] || 'Dragon-MD;Dark-Amiya',
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  caption: process.env.CAPTION || '_*🪄 𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐎𝐮𝐫 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 𝐂𝐡𝐚𝐧𝐧𝐞𝐥 🪄*_ \nhttps://youtube.com/@Dragon-MD-OFC',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || false,
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'dragon-md',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'put-key-here',
  VERSION: process.env.VERSION === undefined ? 'v.3.0.2' : process.env.VERSION,
  LANG: process.env.THEME|| 'SI',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
