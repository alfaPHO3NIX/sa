module.exports = {
name: "presürever",
code: `
$title[Başarılı!]
$description[Süre Verilen Kişi: $mentioned[1;no]

Süreyi Veren Kişi: <@$authorID>

Verilen Süre: $noMentionMessage[1] Saniye
]
$onlyIf[$
`
}