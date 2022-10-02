module.exports = {
  name: "ökutusu",
  aliases: ["önerikutusu","ök"],
  code: `
  
 $onlyIf[$getVar[önerikutusu]==açık;$setVar[önerikutusu;açık] $sendMessage[Öneri kutusu başarıyla açıldı!]]
 `
};