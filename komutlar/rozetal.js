module.exports = {
  name: "rozetal",
  code: `
$deletecommand
$title[Başarılı!]
$description[<@$mentioned[1]> Adlı kişiden $noMentionMessage[1] Rozeti Geri Aldındı.]
$setGlobalUserVar[$noMentionMessage[1]rozet;Sahip Değilsin;$mentioned[1]]
$deleteIn[5s]
$onlyIf[$mentioned[1]!=undefined;Lütfen Bir Kişi Belirt]
$onlyForIDs[$botOwnerID;Yetkin Yok $customEmoji[reddet]]
$suppressErrors[Bi hata oluştu! Rozet adını girmedin yada girdiğin rozet bulanamadı.]
`
}
