module.exports = {
  name: "rozetver",
  code: `
$deletecommand
$title[Başarılı!]
$description[<@$mentioned[1]> Adlı kişiye $noMentionMessage[1] Rozeti Verildi!]
$setGlobalUserVar[$no]
$deleteIn[5s]
$argsCheck[>1;Bir Rozet Belirt]
$onlyIf[$mentioned[1]!=undefined;Lütfen Bir Kişi Belirt]
$onlyForIDs[$botOwnerID;Yetkin Yok $customEmoji[reddet]]
$suppressErrors[Bi hata oluştu! Rozet adını girmedin yada girdiğin rozet bulanamadı.]
`,
};
