module.exports = {
  name: "ökutusu kapat",
  aliases: ["önerikutusu kapat","ök kapat"],
  code: `
  Öneri kutusu başarıyla kapatıldı!
  $setVar[önerikutusu;kapalı]
  $onlyIf[$getVar[önerikutusu]==açık;Öneri kutusu zaten kapalı!]
  $onlyForIDs[272773;Yetkin Yok.]
 `,
};