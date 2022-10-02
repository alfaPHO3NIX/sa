module.exports = {
  name: "ökutusu",
  aliases: ["önerikutusu"],
  code: `
  $title[Başarılı!]
  $description[
  Öneri kutusu başarıyla açıldı!
  ]
  $setVar[önerikutusu;açık]
  $onlyIfMessageContains[$message[1];aç;aÇ;Aç;AÇ;s]
  
  `
};