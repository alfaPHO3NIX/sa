module.exports = {
name: "paraver",
code: `
$mentioned[1] adlı kullanıcıya $noMentionMessage[2] $getGlobalVar[parasembol] gönderildi!
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$mentioned[1]];$noMentionMessage[1]];mentioned[1]]
$argsCheck[1;Para verilecek kişiyi etiketlemelisin!]
$argsCheck[2;Verilecek para miktarını yazmalısın!]
`}