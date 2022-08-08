module.exports = {
name: "prefix",
code: `
$argsCheck[1;Şuanki Prefixim: $getServerVar[prefix]]
$onlyForIDs[$botOwnerID;Selam]
$setServerVar[prefix;$message]
Yeni Prefix: $message
`}
