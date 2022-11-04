module.exports = {
  name: "blokyükselt",
  aliases: ["blokyüksel"],
  code: `
  $onlyIf[$getGlobalUserVar[mücevher]>=$getGlobalUserVar[$getGlobalUserVar[mevcutblok]nblok];**Mücevherin Yetersiz!
  Gereken Mücevher: $getGlobalUserVar[$getGlobalUser]
  ]
  ]
 `
}