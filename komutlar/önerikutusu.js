module.exports = {
  name: "ökutusu",
  aliases: ["önerikutusu","ök"],
  code: `
 Öneri kutusu başarıyla kapatıldı!
 $setVar[önerikutusuu;kapalı]
 $onlyIf[$getVar[önerikutusu]!=kapalı;Öneri kutusu başarıyla açıldı! $setVar[önerikutusuu;açık]]
 `
};