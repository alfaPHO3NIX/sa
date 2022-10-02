module.exports = {
  name: "ökutusu",
  aliases: ["önerikutusu","ök"],
  code: `
 Öneri kutusu başarıyla kapatıldı!
 $onlyIf[$getVar[önerikutusu]!=kapalı;Öneri kutusu başarıyla açıldı! $setVar[önerikutusu;açık]]
 $setVar[önerikutusu;kapalı]
 `
};