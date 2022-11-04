module.exports = {
  name: "kaz",
  aliases: ["dig"],
  code: `
  $setGlobalUserVar[mücevher;$sum[$getGlobalUserVar[mücevher];$random[$getVar[$getGlobalUserVar[mevcutblok]mingem];$getVar[$getGlobalUserVar[mevcutblok]maxgem]]]]
  $title[Blok Kazıldı]
  $description[Kazılan Blok: $getGlobalUserVar[mevcutblok]
  Kazanılan Mücevher: $random[$getGlobalUserVar[$getGlobalUserVar[mevcutblok]mingem];$getGlobalUserVar[$getGlobalUserVar[mevcutblok]maxgem]]
  ]
  `

}