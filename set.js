const fs = require("fs-extra");
if (fs.existsSync("set.env")) {
  require("dotenv").config({
    'path': __dirname + "/set.env"
  });
}
const path = require("path");
const databasePath = path.join(__dirname, "./database.db");
const DATABASE_URL = process.env.DATABASE_URL === undefined ? databasePath : process.env.DATABASE_URL;
module.exports = {
  'session': process.env.SESSION_ID || "ANDBAD-BOT;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEQyTXhKMUtCaXhxZlFUVHRUTGtEOTFmZ3NIcEJUVjNCM1d4Qi91N2IyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1V4ODBsVG1wYkZBcE8xdTdjUE53QXJPNFUwaDMwQ1hMSXJ0Q2s5MERIND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRVEzUlI2MHFVYXh4V3lmV05PY0RMeG5CWG9Ud0h1aWpCbnlhL2thMmxNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQks2dmxDLzhPbTJqekpYalFwcDFCekdLQ0hLQVF3ZUxST3hjSXFJSkNjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVFdi9maW5nWng0b2Izc2RmSjNOWWx3Nm41Y01kZFdVTmpBUXlRVGR6VTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndoU1oxL0Z1b1FtYm9KTVdVRHU4amxZTUJRRHAyZkRYTzVVZkVpQitXU1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUxYQlhvNzhPenRIWWlnTU0yZnFmUkxxNDBHaDluMi9FRitNWHV3K2psUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNzJqZTJiM1ZvaW43WXMwR01FcXpVbGpPaEJ0cWtGbEdrRDgrNUlqZGRpdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IngzY3ZwcGh1dUNmdW1YVk5vRVJaREJ3ZGpEeVJiR0N2L3ZPK2dVdDgzRU1lQjhkR3JwQTlIN2JQOHkvVjZ6ZGNLV0Ira1VLaFVOTndsL2tneDNZdGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQsImFkdlNlY3JldEtleSI6Im9Ga2ZJYVJzbm43R05NS3AwRGpJTFo3emR0ZmpiVTZCRmthckZCbHJXemM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImVkTjU1a2Q5UjhpZDluXzJvVFFEc0EiLCJwaG9uZUlkIjoiZGM4YjQzOGUtMmQ1Ny00YzczLTk3OTQtZTBiYjQ1ODhiYjY0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRXZy9sNTBnMCtJdHpadFpsTSsrdHhEWnQ0OD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJudkJnN1E1aTdseUgxL3g2OXN1dHoxa0Y4WXc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQ1RRTE45Vk0iLCJtZSI6eyJpZCI6IjI2Mzc3ODg1ODI0NjoyM0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLLouG1mOG1lsqz4bWJ4bWQ4bWJIOG2nMqw4bWDy6Ig4bWX4bWJ4bacyrAifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tMWmpiQUVFSnF3Z2I0R0dBc2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im9jOC9TbUpPSUxIbHM2R1hXOXN3c1k1TEZoTElVeVlvbTh1QnlOL3ovaDg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlBqaDVjeHBHcEU4LzdiRUMrdnRkblhiTXl3djNHSzBsdWU2RWJhbVVFOHZGWDlEa3g5V0J6QzBaQUttcFkwcnByRnhWRmM0NitjcE9aTmFsMkM2WEJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJzL1F3YkRsa2xDczhrYVEzZXlqd0Z1U1pJdSsrcVE0SG1HSUZURGVEZTJZNnkxNHN1d04zMEhYUXdYc3lmV0xneSs3czN0am9RZHc1cXdpL2dTVkZoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Mzc3ODg1ODI0NjoyM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhSFBQMHBpVGlDeDViT2hsMXZiTUxHT1N4WVN5Rk1tS0p2TGdjamY4LzRmIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQwNjU4NzI4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtUeSJ9",
  'PREFIXE': process.env.PREFIX || '+',
  'OWNER_NAME': process.env.OWNER_NAME || "𝐂.𝚵.𝚯 𝚫𝚴𝐃𝚩𝚫𝐃",
  'NUMERO_OWNER': process.env.NUMERO_OWNER || "263778858246",
  'AUTO_READ_STATUS': process.env.AUTO_READ_STATUS || "non",
  'AUTO_DOWNLOAD_STATUS': process.env.AUTO_DOWNLOAD_STATUS || "non",
  'BOT': process.env.BOT_NAME || "𝚫𝚴𝐃𝚩𝚫𝐃-𝚳D",
  'URL': process.env.BOT_MENU_LINKS || "https://i.imgur.com/L4U2K76.jpeg",
  'MODE': process.env.PUBLIC_MODE || 'yes',
  'PM_PERMIT': process.env.PM_PERMIT || 'no',
  'HEROKU_APP_NAME': process.env.HEROKU_APP_NAME,
  'HEROKU_APY_KEY': process.env.HEROKU_APY_KEY,
  'WARN_COUNT': process.env.WARN_COUNT || '3',
  'ETAT': process.env.PRESENCE || '',
  'CHATBOT': process.env.PM_CHATBOT || 'no',
  'ANTICALL': process.env.ANTICALL || "non",
  'AUTO_REACT_STATUS': process.env.AUTO_REACT_STATUS || "yes",
  'DP': process.env.STARTING_BOT_MESSAGE || "yes",
  'ADM': process.env.ANTI_DELETE_MESSAGE || "yes",
  'DATABASE_URL': DATABASE_URL,
  'DATABASE': DATABASE_URL === databasePath ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9"
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
  fs.unwatchFile(fichier);
  console.log("mise à jour " + __filename);
  delete require.cache[fichier];
  require(fichier);
});
