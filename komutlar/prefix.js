module.exports = {
name: "prefix",
code: `
$onlyForIDs[$botOwnerID;Selam]
$setServerVar[onek;$message]
Yeni Prefix: $message
$argsCheck[1;Şuanki Prefixim: $getServerVar[onek]]
`}
