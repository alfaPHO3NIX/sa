module.exports = [{
  type:"interaction",
  prototype:"slash",
  name:"stats",
  code: `
  $interactionReply[;{newEmbed:
  {title:İstatistikler}
  {description:
  **Bot İstatistikleri**
  Kullanılan Ram: $ram
  Uptime Süresi: $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$uptime;hour; Saat];hours;Saat];minutes; Dakika];minute; Dakika];seconds; Saniye];second; Saniye]
  Bot Sahibi: <@$botOwnerID>
  }}
  `

}]