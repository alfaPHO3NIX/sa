module.exports = {
  name: "ökutusu",
  aliases: ["önerikutusu"],
  code: `
 $if[$getVar[önerikutusu]==açık
 ;Öneri kutusu başarıyla kapatıldı!
 ]
 $onlyIf[$getVar[önerikutusu]==açık;$setvar[önerikutusu;açık] Öneri kutusu başarıyla açıldı!]
 $onlyForIDs[$botOwnerID;Yetkin Yok]
 `
};