module.exports = {
name: "presürever",
code: `
$title[Başarılı!]
$description[Süre Verilen Kişi: $mentioned[1;no]

Süreyi Veren Kişi: <@$authorID>

Verilen Süre: $noMentionMessage[1] Saniye
]
$onlyIf[$mentioned[1]!=undefined;Bir kişi etiketlemelisin!]
$onlyIf[$isNumber[$noMentionMessage[1]]!=false;Bir süre yazmalısın]
$setGlobalUserVar[presure;$sum[$getGlobalUserVar[presure;$mentioned[1]];$noMentionMessage[1]];$mentioned[1]]]
`
}