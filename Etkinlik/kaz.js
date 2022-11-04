module.exports = {
  name: "kaz",
  aliases: ["dig"],
  code: `
  $setGlobalUserVar[mücevher;$sum[$getglobalUserVar[mücevher];$random[$getVar[toprakmingem];$getVar[toprakmaxgem]]]]
  $title[Blok Kazıldı]
  $description[Kazılan Blok: $getGlobalUserVar[Elmas Blok]
  Kazanılan Mücevher: $random[$getGlobalUserVar[$getGlobalUserVar[mevcutblok]mingem];$getGlobalUserVar[$getGlobalUserVar[mevcutblok]maxgem]]
  ]
  `

}