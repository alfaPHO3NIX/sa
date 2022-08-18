module.exports = {
  name: "rozetver",
  code: `
$deletecommand
$title[Başarılı!]
$description[<@$mentioned[1]> Adlı kişiye $noMentionMessage[1] Rozeti Verildi!]
$setGlobalUserVar[$noMentionMessage[1]rozet;Sahipsin$customEmoji[onayla];$mentioned[1]]
$deleteIn[5s]
$onlyIf[$mentioned[1]!=undefined;Lütfen Bir Kişi Belirt]
$onlyForIDs[$botOwnerID;Yetkin Yok $customEmoji[reddet]]
$suppressErrors[Bi hata oluştu! Rozet adını girmedin yada girdiğin rozet bulanamadı.]
`
}
