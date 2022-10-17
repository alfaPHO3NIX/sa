module.exports = {
  name: "kaz",
  aliases: ["dig"],
  code: `
  $if[$getGlobalUserVar[mevcutblok]==toprak;
  $setGlobalUserVar[mücevher;$sum[$getglobalUserVar[mücevher];$random[$getVar[toprakmingem];$getVar[toprakmaxgem]]]]
  $title[Blok Kazıldı]
  $description[Kazılan Blok: Toprak
  Kazanılan Mücevher: $random[$getVar[toprakmingem];$getVar[toprakmaxgem]]
  ]
  ;
  olmadı be yarrak
  ]
  
  `

}