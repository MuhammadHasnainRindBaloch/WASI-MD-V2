//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923066671786@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923066671786";
global.sudo = process.env.SUDO || "923066671786,923066671786";
global.owner = process.env.OWNER_NUMBER || "923066671786";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0ltZGVTTDZmQ2s2cDFVRXRkQmtXSlBZZkxWckdVWXBTdEVlZGJYOHNHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHJST0R1aVlOeExaNGRlM29ETzJTNndiM1pHSHFWTWhNWXRiQkh3YVd4ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzQkd6RkN1QkxNb0w1cEgzQWlZSklwNHM3Z2dsak5Bd1Z6dFc5aFIvK1ZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUcWUwb2pFNGlxM05PSWUxWmxQMzJQakJxam1pMXhXQ1p4WDZ6dlRVWTJNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRKZkNmL05DdUJVSmtUU3lhMjhkeDd5QXJoRktmQXhTTEx2VWdYb0JkWE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdPeXd4ajBOaHJKeUlYcE0rQ1B2R2lwZFplUHBkNDViU0cxSXBCbjgwV3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0VEN3JhQ0RucHRMM3RVSjB2N3phYVI1dnZpaVlNSkJhbk40SmxTcnBXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiamU0aG4yaFF2L2RCbDJWNUJhd2tOYWl0SjZkMS9JUy9pRnBMMXZFcnZ6QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVRMVQrb2ZEa01EOTJ1MzlPZVRPZHZZVFhxNmlnUGlSL29TYVl2RktUYzVQSHBNK0xRdzNIOVJ2aFlZb1Z1ZTZGVXVRLzRLV1FzUkJSVVVQM0JHckRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAxLCJhZHZTZWNyZXRLZXkiOiJQZXp5Mm00algrVEJ6UlcrVlFwckk4S0R0VkI3THhacnZBQ05mVm42TGU4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJTdURFZWFHRFJXeTBLckxGY3NzN1JBIiwicGhvbmVJZCI6IjZkZWQ2ZGQ2LTgwZGUtNDZhYy1iYTIwLWEwMTczMzdiYTgzYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiV1MyajkrR0JWUlJ4QWh1Q21JemZ6VzVHMGs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL09tSE5yeHRXdkVnQnBDU0ZzdytoMG1jMXhVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNSSlpNN0VLIiwibWUiOnsiaWQiOiI5MjMwNjY2NzE3ODY6NTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2QmfCdkIjwnZCD8J2Qg/CdkIgg8J2QivCdkIjwnZCN8J2QhiDwnZCB8J2QgPCdkIvwnZCO8J2QgvCdkIdcbiAgICDii4ZcbiAgICDii4ZcbiAgICDii4ZcbiAgICDii4ZcbiAgICDii4ZcbiAgICDii4ZcbiAgICDii4ZcbiAgICDii4ZcbiAg8JOGqeKBt+KBuOKBtvCThqoifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lDRXBkTUNFSTNmczdNR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IldZRmVsdm5mUGg1VzRDbXhQM1VCT1MyWGRxd2NCU0NoalM2T0hqTlZGMWM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IitZbzVoTHdPcElmNmwyTitXd3pZeGRWS3ZBQ21oTFVnMGhJT0ZPSHdYSW5maDRjL1dkd0cwcnAwbnZ2WERvVVlBNkV0RThsQnFyS2dIMzhJWjM0UEJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJLQk5vODNzSmxoTEJLZHEybTN4bEJDK3NEQlJlSkJ2a2JYTDY2N0pMNEg4ZWlEY3hIZWpGbm5xd2w0eWRkdWZ4N1JwZWZHNXNYajA3Y3NLMGVla1RDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzA2NjY3MTc4Njo1MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWbUJYcGI1M3o0ZVZ1QXBzVDkxQVRrdGwzYXNIQVVnb1kwdWpoNHpWUmRYIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE4NDE1MjU3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9xOCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𓆩⋆𝐙𝐈𝐃𝐃𝐈 𝐊𝐈𝐍𝐆 𝐁𝐀𝐋𝐎𝐂𝐇⋆𓆪",
  author: process.env.PACK_AUTHER || "𓆩⋆𝐙𝐈𝐃𝐃𝐈 𝐊𝐈𝐍𝐆 𝐁𝐀𝐋𝐎𝐂𝐇⋆𓆪",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𓆩⋆𝐙𝐈𝐃𝐃𝐈 𝐊𝐈𝐍𝐆 𝐁𝐀𝐋𝐎𝐂𝐇⋆𓆪",
  ownername: process.env.OWNER_NAME || "𓆩⋆𝐙𝐈𝐃𝐃𝐈 𝐊𝐈𝐍𝐆 𝐁𝐀𝐋𝐎𝐂𝐇⋆𓆪",
  errorChat: process.env.ERROR_CHAT || "923066671786",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
