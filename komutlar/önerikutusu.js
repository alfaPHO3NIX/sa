module.exports = {
  name: "ökutusu aç",
  aliases: ["önerikutusu ","ök aç"],
  code: `
  Öneri kutusu başarıyla açıldı!
  $setVar[önerikutusu;açık]
  $onlyIf[$getVar[önerikutusu]==kapalı;Öneri kutusu zaten açık!]
  $onlyForIDs[$botOwnerID;Yetkin Yok.]
 `,
};