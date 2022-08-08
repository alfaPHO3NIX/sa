module.exports = {
name: "prefix",
code: `
$argsCheck[<1;Yeni prefixin ne olacağını yazmalısın!]
$onlyForIDs[$botOwnerID;Selam]
$setServerVar[prefix;$message]
Yeni Prefix: $message
`}
