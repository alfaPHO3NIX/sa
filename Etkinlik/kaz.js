module.exports = {
  name: "kaz",
  aliases: ["dig"],
  code: `
  $if[$getGlobalUserVar[mevcutblok]==toprak;
  $setGlon
  $title[Blok Kazıldı]
  $description[Kazılan Blok: Toprak]
  ;
  olmadı be yarrak
  ]
  
  `

}