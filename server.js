const aoijs = require("aoi.js");  
const bot = new aoijs.Bot({
  token: process.env.token,
  prefix: "!",
  intents: "all",
})
const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd, "./komutlar/")

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