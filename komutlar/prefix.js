module.exports = {
name: "prefix",
code: `
$title[Prefix Değiştirildi!]
$description[** **\nYeni Prefix: $message\n** **
]
$setServerVar[prefix;$message]
$argsCheck[1;Yeni prefixi girmelisin!]
$onlyPerms[admin;Yetkin Yok.]
`
}