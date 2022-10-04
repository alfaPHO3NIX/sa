module.exports = {
name: "paragönder",
aliases: ['para gönder'],
code: `
$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$authorID];$noMentionMessage[1]];$authorID]
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$mentioned[1;no]];$noMentionMessage[1]];$mentioned[1;no]]

$onlyIf[$isNumber[$noMentionMessage[1]]!=false;Bir sayı belirtmelisin!]
$onlyIf[$mentioned[1;no]!=undefined;Bir kişi belirtmelisin!]
$onlyIf[$checkCondition[$getGlobalUserVar[para;$authorID]>=$noMentionMessage[1]]!=false;Yetersiz $getVar[parasembol].]
$onlyIf[$mentioned[1]!=$AuthorID;Kendine Para atamazsın $customEmoji[reddet]]
$onlyIf[$isBot[$mentioned[1]]!=Bot;Bota para atamazsın $customEmoji[reddet]]
$onlyIf[$noMentionMessage[1]]
$color[RANDOM]
$title[Başarılı]
$description[<@$mentioned[1;no]> adlı kişiye $numberSeparator[$noMentionMessage[1]] $getVar[parasembol] gönderildi]

`
}