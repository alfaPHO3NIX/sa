const aoijs = require("aoi.js");  
const bot = new aoijs.Bot({
  token: process.env.token,
  prefix: "$getServerVar[prefix]",
  intents: "all",
})
const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd, "./komutlar/")

/////////callback/////////
bot.onMessage()

/////////variable////////
bot.variables({
presurem: "0",
para: "0",
parasembol: "TL",
botadi: "xFrkn_",
prefix: "!",
})
//////komutlar////////
bot.command({
  name: "ping",
  code: `
Pingim \`$pingms\`
`,
})

bot.command({
        name: "a",
        code: `$loop[3;{};hello]`
})

bot.awaitedCommand({
       name: "hello",
       code: `hi user!`
})
//The bot would return 'hi user!' 3 times