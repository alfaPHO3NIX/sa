module.exports = {
name: "prefix",
aliases: "önek",
code: `
$title[Prefix Değiştirildi!]
$description[** **\nYeni Prefix: $message\n** **
]
$setServerVar[prefix;$message]
$argsCheck[1;Mevcut Prefixim: **$getServerVar[prefix]**]
$onlyPerms[admin;Yetkin Yok.]
`
}