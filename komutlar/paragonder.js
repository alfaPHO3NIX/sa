module.exports = {
name: "paragönder",
aliases: [''],
code: `
$title[Başarılı]
$description[<@$mentioned[1;no]> adlı kişiye $noMentionMessage[1] $getVar[parasembol] gönderildi]

$onlyIf[$isNumber[$noMentionMessage[1]]!=false;Bir sayı belirtmelisin!]
$onlyIf[$mentioned[1;no]!=undefined;Bir kişi belirtmelisin!]
$onlyIf[$checkCondition[$getGlobalUserVar[para;$authorID]>=$noMentionMessage[1]]!=false;Yetersiz $getVar[parasembol].]

$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$authorID];$noMentionMessage[1]]]
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$mentioned[1;no];$noMentionMessage[1]]]]
`
}