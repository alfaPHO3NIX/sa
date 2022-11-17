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
loader.load(bot.cmd, "./Keyfine")

bot.variables({
//Ekonomi Değişkenleri
mücevher: "0",
para: "0",
parasembol: "VLC",

//Bot Status Değişkenleri
botadi: "xFrkn_",
prefix: "!",

 //Premium Değişkenleri
  premium: "Yok",
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
      //Loglar
         öismdegistlplog:"0",
//Jail Değişkenleri
 jailchid: "undefined",
 jailroleid:"undefined",
  
//GrowTopia
  
      //World Locklar;
  wl:"0",
  dl:"0",
  elock:"0",
  rlock:"0",
  bgl:"0",
      //Bloklar;
          //Mevcut Blok Değişkeni
      mevcutblok:"toprak",
          //Toprak
      toprakmingem:"3",
      toprakmaxgem:"15",
         //Elmas Blok
      "Elmas Blokmingem":"500",
      "Elmas Blokmaxgem":"2500",
      "Elmas Bloknblok":"yok",
      "Elmas Bloknbfiyat":"",
//Butonlu Kayıt
  logkanal:"0",
  uyerolid:"979834024463859752",
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

bot.command({
  name:"abone",
  code:`
  $reactionCollector[$splitText[1];$authorID;1h;✅,❌;evet,hyr;yes]
  $textSplit[$sendMessage[{newEmbed:{color:YELLOW}{thumbnail:$userAvatar[$mentioned[1]]}{description:
  <@$mentioned[1]> Kişisine Abone Vermeyi Kabul Ediyormusunuz ?}}
1
  

  Evet İçin :white_check_mark:  Emojisine Hayır İçin :x: Emojisine Tıklayınız.};yes]]
  $onlyIf[$hasRoles[$guildID;$mentioned[1];$getServerVar[abonerol]]!=true;{newEmbed:{color:RED}{author:$userTag[$mentioned[1]] Kişisinde Zaten Abone Rol Var ?:$authorAvatar}]
  $onlyForChannels[$getServerVar[abonekanal];{newEmbed:{color:RED}{description:Bu Komut Sadece <#$getServerVar[abonekanal]> Kanalında Kullanılabilir !}]
  $onlyIf[$mentioned[1]!=;{newEmbed:{color:RED}{author:Rol Vereceğim Kişiyi Etiketlemen Gerekiyor !:$authorAvatar}}]
  $onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[aboneyt]]!=false;{newEmbed:color:RED}{author:Bu Komut Sadece $roleName[$getServerVar[aboneyt]] Kişilerine Özeldir !:$authorAvatar}]

  

  

  $onlyIf[$getServerVar[aboneyt]!=yok;{color:RED}{author:Abone Yetkilisi Rolü Ayarlı Değil !:$authorAvatar}]
  $onlyIf[$getServerVar[abonekanal]!=yok;{color:RED}{author:Abone Kanalı Ayarlı Değil !:$authorAvatar}]
  $onlyIf[$getServerVar[abonerol]!=yok;{color:RED}{author:Abone Rolü Ayarlı Değil !:$authorAvatar}]`

})

bot.awaitedCommand({
  name:"evet",
  code:`
  $clearReactions[$channelID;$message[1];all]
  $editMessage[$message[1];{color:GREEN}
  {author:$userTag[$mentioned[1]] Kişisine Abone Rolü Başarıyla Verilmiştir !:$userAvatar[$mentioned[1]]}]
  $giveRole[$mentioned[1];$getServerVar[abonerol]]
  `
})

bot.awaitedCommand({
  name:"hyr",
  code:`
   $setGlobalUserVar[ozeloda;var]

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