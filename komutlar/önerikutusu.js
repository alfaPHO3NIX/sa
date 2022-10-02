module.exports = {
  name: "ökutusu",
  aliases: ["önerikutusu"],
  code: `
  $title[Başarılı!]
  $description[
  Öneri kutusu başarıyla açıldı!
  ]
  $setVar[önerikutusu;açık]
  $onlyIf[$message[1]==aç;
  
  ]
  
  `
};