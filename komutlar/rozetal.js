module.exports = {
  name: "rozetal",
  code: `
$deletecommand
$title[Başarılı!]
$description[<@$mentioned[1]> Adlı kişiden $noMentionMessage[1] Rozeti Geri Aldındı.]
$setGlobalUserVar[$noMentionMessage[1]rozet;Sahip Değilsin;$mentioned[1]]
$deleteIn[5s]
$onlyIf[$mentioned[1]!=undefined;Lütfen Bir Kişi Belirt]
$onlyForIDs[980089372768624660;711923709253910588;x;Yetkin Yok $customEmoji[reddet]]
$suppressErrora[Bi hata oluştu! Rozet adını girmedin yada girdiğin rozet bulanamadı.]
`
}
