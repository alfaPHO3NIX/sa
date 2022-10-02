module.exports = {
  name: "ökutusu",
  aliases: ["önerikutusu"],
  code: `
 Öneri kutusu başarıyla kapatıldı!
 $setVar[önerikutusu;kapalı]
 $onlyIf[$getVar[önerikutusu]==açık;]
  
 `
};