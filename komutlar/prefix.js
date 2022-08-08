module.exports = {
name: "prefix",
code: `
$argsCheck[1;Şuanki Prefixim: $getServerVar[onek]]
$onlyForIDs[$botOwnerID;Selam]
$setServerVar[onek;$message]
Yeni Prefix: $message
`}
