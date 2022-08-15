const aoijs = require("aoi.js");  
const bot = new aoijs.Bot({
  token: process.env.token,
  prefix: "$getServerVar[prefix]",
  intents: "all",
})
const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd, "./komutlar/")
loader.load(bot.cmd, "./shopier/")

/////////callback/////////
bot.onMessage()
/////////variable////////
bot.variables({
presure: "0",
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
name: "exec",
code: `
$eval[$message]
$onlyForIDs[$botOwnerID;YetkinYok]
`,
})

bot.command({
name: "satınal",
code: `
$deletecommand
$description[
**$message[1] Sayılı Sipariş No** Başarıyla Sıraya Alınmıştır

Kontrol No: $random[10000;99999]

Not: **Sipariş No yanlış çıkarsa size bot tarafından bildirim gelecektir. eğer gelmezse dm'niz kapalıdır.**]]
$onlyIf[$isNumber[$message[1]]!=false;**Shopier Sipariş No** Girmelisin!]
$createVar[main;$random[10000;99999]:$message[1]]
`,
})