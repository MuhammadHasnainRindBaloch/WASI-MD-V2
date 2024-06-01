//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0 .t1wsjlv.mongodb.net/";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fee7af11b4edf8eb7c272.jpg";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUVvY2FXbk84Q1o4NmpReVYxQmpiL29HTmFQNWhzUlpjSm5ZUVlyaUZGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0s4ZFRyb09BaEpJeHNxNFVRcGM1azROQzNYeDAyTUlNeDB4eERuWGoxWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjTUtLZWp4WlQxOXo5dVVlbDl4TU8vVGJtdVRHYVo0a3Z5STc2WEZkOWtzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCd2tQQmR4eDQ0UnhSVHFWN1ZNUG81L0JVWWtGVjdKbE9WT1kvSzVTTUFnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNPeUZ0Y2o4ZTA5M3Y5cWJmaW1YdnZtcUgzaDFYMnhiZWowZkNmUmxibjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFFQTUwSXU0bTExZlNFZmJ6YzFhVHQ5ajdBT1Azb0R4UTdoTHVpVTBYQTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0VUdVdITnVpeEZrdXJrbGlVTk9DbWJYS29YbjdWak14clVzeXRUUjBHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JxWk9LMVVtdjYzSE4vZnFZRWc4RnQvVlpLRUhEd1dMdjh2WUw1azZ5cz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpDQVRZS1JreTh0akFhMmNtOUtVQXZUcy8zUkFsREI0SEZ3QnkxdVZHcVBJMERCc3ZyODllbzFjN1JWblN3U3UveVZDSFhGRVhtWkFmS1NhRUpsYkJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMsImFkdlNlY3JldEtleSI6IkN5Ynk1S3BPTCtEUUJkWCswWGppdkN0U0p4TUxPYVdUUDBVUGlCZ2RGQU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ijl0ODNnbnNzU3Fxc3UtZ29WZFgtRnciLCJwaG9uZUlkIjoiZGJkZjY0NGUtZjk2NS00ZGRhLTlkYzAtMmFkM2QzMTk1OTEyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRPNEMyUGR6b3haT0pCdWp5bW1DMmlVQVlKMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUTWdNVC9MZW1VMlY2aWtGb1kxNCtjNVZFTEE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSkw0N1ROWUsiLCJtZSI6eyJpZCI6IjkyMzA2NjY3MTc4NjozMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCZ8J2QiPCdkIPwnZCD8J2QiCDwnZCK8J2QiPCdkI3wnZCGIPCdkIHwnZCA8J2Qi/CdkI7wnZCC8J2Qh1xuICAgIOKLhlxuICAgIOKLhlxuICAgIOKLhlxuICAgIOKLhlxuICAgIOKLhlxuICAgIOKLhlxuICAgIOKLhlxuICAgIOKLhlxuICDwk4ap4oG34oG44oG28JOGqiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGlEcGRNQ0VOL1c2N0lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiV1lGZWx2bmZQaDVXNENteFAzVUJPUzJYZHF3Y0JTQ2hqUzZPSGpOVkYxYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiazg5cHJLbHFyWS9JeVllTmNaSnpKSGEzcDJJTyt0T0E0NXpUdDFkU3lxZ1A2cXNmTy9oTWo3b1RYdHlCMEZzU1FQVEtUUG5SeHhFb3o0eUh5WDE5RGc9PSIsImRldmljZVNpZ25hdHVyZSI6InFTN1pTNUdtdzZ3QzE0WnV4MUY5dEw4aWVXdmUyUmcyWTFGZ3BCdEhDWnRyTnhnYW4xdjlIVi90Z3B2dGM2ekg2ZTBWVXlsbUU2SzRiSk51K21rK0RnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDY2NjcxNzg2OjMwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZtQlhwYjUzejRlVnVBcHNUOTFBVGt0bDNhc0hBVWdvWTB1amg0elZSZFgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTcyMzQ1NDAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRW01In0="
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
