module.exports = {
name: "rozetver",
code: `

$onlyIf[$mentioned[1]!=undefined;Lütfen Bir Kişi Belirt]
$onlyForIDs[$botOwnerID;Yetkin Yok $customEmoji[reddet]]
`
}