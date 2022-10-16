module.exports = {
name: "parasil",
code: `
$title[Başarılı!]
$description[** **
<@$mentioned[1]> adlı kişiden $numberSeparator[$noMentionMessage[1;no]] silindi.
** **]
$color[RANDOM]

$onlyIf[$isNumber[$noMentionMessage[1]]!=false;**<@$authorID> Lütfen bir miktar belirt**]
$onlyForIDs[$botOwnerID;Yetkin Yok.]
$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$mentioned[1]];$noMentionMessage[1]];$mentioned[1]]
$onlyIf[$getGlobalUserVar[para;$mentioned[1]]>=$noMentionMessage[1];**Bu oyuncunun o kadar parası yok!**]
`
}