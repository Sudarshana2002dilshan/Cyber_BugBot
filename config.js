const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "WJ0z0IAQ#GdzrniShvw7xC87nt7GVpRnIunfG_5RNet1C_Uc_uBU",
  MONGODB: process.env.MONGODB || "mongodb://mongo:rXjABOvFRAQHKNusbVSnndgbtzwkxGdg@switchback.proxy.rlwy.net:44350",
  OWNER_NUM: process.env.OWNER_NUM || "94765529447",
};
