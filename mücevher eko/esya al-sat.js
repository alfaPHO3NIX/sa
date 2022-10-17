module.exports = {
  name: "satınal worldlock",
  aliases: ["buy worldlock","satinal wl"],
  code: `
  za
  $setGlobalUserVar[mücevher;$sub[$getGlobalUserVar[]]]
  
  $onlyIf[$getGlobalUserVar[mücevher]>=2000;Yetersiz Gem.]
  `
  }