const aoijs = require("aoi.js");  
const bot = new aoijs.Bot({
  token: process.env.token,
  prefix: "$getServerVar[prefix]",
  intents: "all",
})
const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd, "./komutlar/")
loader.load(bot.cmd, "./shopier/")
loader.load(bot.cmd, "./moderasyon/")
loader.load(bot.cmd, "./kasa/")
loader.load(bot.cmd, "./premium/")
loader.load(bot.cmd, "./sıralama/")
loader.load(bot.cmd, "./özelkomutlar")

/////////callback/////////
bot.onMessage()
/////////variable////////
bot.variables({
//Premium Değişkenleri
presure: "0",
  
//Ekonomi Değişkenleri
para: "0",
parasembol: "TL",

//Bot Status Değilkenleri
botadi: "xFrkn_",
prefix: "!",

//Kasa Değişkenleri
katlamakasasicarpan: "0",

//Günlük Para Değişkenleri
gunlukparacooldown: "4h",
gunlukgelenpara: "0",


//Rozet Değişkenleri
bughunterrozet: "Sahip Değilsin",
premiumsahibirozet: "Sahip Değilsin",
etkinlikkazananırozet: "Sahip Değilsin",
partnerrozet: "Sahip Değilsin",
onaylıkişirozet: "Sahip Değilsin",
yetkiliekibirozet: "Sahip Değilsin",
geliştiricirozet: "Sahip Değilsin",
//rozet: "Sahip Değilsin",
})
//////komutlar////////
bot.command({
  name: "ping",
  code: `
Pingim \`$pingms\`
`,
})

bot.command({
name: "eval",
code: `
$eval[$message]
$onlyForIDs[$botOwnerID;YetkinYok]
`,
})

bot.onInteractionCreate()

//Bot Durumları
bot.status({
  text: "Made By $username[$botOwnerID]",
  type: "PLAYING",
  status: "dnd",
  time: 12
})

bot.status({
  text: "!Yardım Yazarak Yardım Alabilirsiniz",
  type: "PLAYING",
  status: "dnd",
  time: 12
})

bot.status({
  text: "!prefix",
  type: "PLAYING",
  status: "dnd",
  time: 12
})