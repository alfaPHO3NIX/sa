module.exports = {
  name: "ökutusu aç",
  aliases: ["önerikutusu","ök"],
  code: `
  Öneri kutusu başarıyla açıldı!
  $setVar[önerikutusuu;açık]
  $onlyIf[$getVar[önerikutusuu]==kapalı;Öneri kutusu zaten açık!]
 `
};