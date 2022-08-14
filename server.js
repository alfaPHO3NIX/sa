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
presure: "50",
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
        name: "prebaşlat",
        code: `
        $wait[1s]
        $loop[20;{};premium]
        $onlyPerms[admin;Bu komut sahibime özel!]
        Süre Başlatıldı
        $deleteIn[5s]
        `
})

bot.awaitedCommand({
       name: "premium",
       code: `
       $wait[1s]
       $onlyIf[$getGlobalUserVar[presure]>0;]
       $setGlobalUserVar[presure;$sub[$getGlobalUserVar[presure];1]]
       `
})
//The bot would return 'hi user!' 3 times