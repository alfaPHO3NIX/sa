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
  $setVar[önerikutusu;]
  $onlyIf[$getVar[önerikutusu]!=kapalı;Öneri kutusu zaten kapalı!]
  $onlyIf[$message[1]==kapat;
  Kullanım: !önerikutusu aç/kapat]
  ]
  
  `
};