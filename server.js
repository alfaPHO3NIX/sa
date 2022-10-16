const aoijs = require("aoi.js");  
const bot = new aoijs.Bot({
  token: process.env.token,
  prefix: ['$getServerVar[prefix]','!'],
  intents: "all",
})

//////// Call Back \\\\\\\\
bot.onMessage()
//\\\\\\
const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd, "./komutlar/")
loader.load(bot.cmd, "./src/")
loader.load(bot.cmd, "./shopier/")
loader.load(bot.cmd, "./moderasyon/")
loader.load(bot.cmd, "./kasa/")
loader.load(bot.cmd, "./premium/")
loader.load(bot.cmd, "./sıralama/")
loader.load(bot.cmd, "./özelkomutlar")
loader.load(bot.cmd, "./eğlence")
loader.load(bot.cmd, "./mücevher eko")
loader.load(bot.cmd, "./Etkinlik")

bot.variables({
//Ekonomi Değişkenleri
mücevher: "0",
para: "0",
parasembol: "TL",

//Bot Status Değilkenleri
botadi: "xFrkn_",
prefix: "!",

 //Premium Değişkenleri
  premium: "Var",
//Kasa Değişkenleri
katlamakasasicarpan: "0",

//Günlük Para Değişkenleri
gunlukparacooldown: "4h",
gunlukgelenpara: "500",

//Kişi Değişkenleri
devid: "980089372768624660",
//Öneri Kutusu Değişkenleri
önerikutusu:"açık",
//Rozet Değişkenleri
bughunterrozet: "Sahip Değilsin",
premiumsahibirozet: "Sahip Değilsin",
etkinlikkazananırozet: "Sahip Değilsin",
partnerrozet: "Sahip Değilsin",
onaylıkişirozet: "Sahip Değilsin",
yetkiliekibirozet: "Sahip Değilsin",
geliştiricirozet: "Sahip Değilsin",
yükselreisrozet: "Sahip Değilsin",
  //rozet: "Sahip Değilsin",
  
 //Özel Oda değişkenleri
  ozelodaisim:"0",//Özel Odanın adını gösterir.
  ozelodaid: "0",//Özel Oda kanal ID'sini gösterilir.
  ozeloda:"yok",//Özel Odanın açılıp açılmadığını kontrol eder.
  ozelodakategori:"undefined",//Kategori ID nin kaydedildiği değişken.
  ozelodakategori1:"0",//Kategorinin açılıp açılmadığını kontrol eder.

//Jail Değişkenleri
 jailchid: "undefined",
 jailroleid:"undefined",
  
//GrowTopia Değişkenleri 
  wl:"0",
  dl:"0",
  
})

bot.variables({
}, 'sa')

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


bot.awaitedCommand({
  name:"odaayarla1",
  code:`
  $setGlobalUserVar[ozelodaid;$textInputValue[oModal]]
  
  `
  
})
 bot.awaitedCommand({
   name:"odaayarla2",
   code:`
   $modifyChannelPerms[$guildID;$channelID[$getGlobalUserVar[ozelodaid];-viewchannel;-sendmessages;-addreactions;]
   
   `
   
 })

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