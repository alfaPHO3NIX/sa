module.exports = {
  name: "satınal worldlock",
  aliases: ["buy worldlock","satinal wl"],
  code: `
  $title[Başarılı $custom]
  $description[
  1 World Lock $customEmoji[wl] başarıyla satın alındı!
  
  ]
  $setGlobalUserVar[mücevher;$sub[$getGlobalUserVar[mücevher];2000]]
  
  $onlyIf[$getGlobalUserVar[mücevher]>=2000;Yetersiz Gems.]
  $deletecommand
  `
  }