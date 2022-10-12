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
  Uptime Süresi: $replaceText[$uptime;h; Saat]
  
  }}
  `

}]