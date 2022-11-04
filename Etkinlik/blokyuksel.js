module.exports = {
  name: "blokyükselt",
  aliases: ["blokyüksel"],
  code: `
  $if[$getGlobalUserVar[mevcutblok]==toprak;
  $if[$getGlobalUserVar[mücevher]>=100;$setGlobalUserVar[mevcutblok;elmasblok]]
  Başarılı
  ; as
  ]
 `
}