const aoijs = require("aoi.js");  
const bot = new aoijs.Bot({
  token: process.env.token,
  prefix: "!",
  intents: "all",

})

/////////callback/////////
bot.onMessage()

/////////variable////////

//////komutlar////////
bot.command({
  name: "ping",
  code: `
Pingim \`$pingms\`
`,
})