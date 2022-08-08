module.exports = {
name: "paraver",
code: `
$title[Başarılı!]
$description[<@$mentioned[1]> adlı kişiye $noMentionMessage[1] $getVar[parasembol] verildi.]
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$mentioned[1]];$noMentionMessage[1]];$mentioned[1]]
$argsCheck[>1;Para verilecek kişiyi etiketlemelisin!]
$argsCheck[>2;Verilecek para miktarını yazmalısın!]
$onlyForIDs[$botOwnerID;Bu komut sahibime özeldir!]
`}