module.exports = {
  name: "kaz",
  aliases: ["dig"],
  code: `
  $if[$getGlobalUserVar[mevcutblok]==toprak;
  $title[Blok Kazıldı]
  $description[Kazılan Blok: Toprak]
  ;
  olmadı be yarrak
  ]
  
  `

}