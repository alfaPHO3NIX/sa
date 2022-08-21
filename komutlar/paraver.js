module.exports = {
name: "paraver",
code: `
$title[Başarılı!]
$description[** **
<@$mentioned[1]> adlı kişiye $noMentionMessage[1;no] $getVar[parasembol] verildi.
** **]
$color[RANDOM]

$onlyIf[$isNumber[$noMentionMessage[1]]!=false;**<@$authorID> Lütfen bir miktar belirt]
$onlyForIDs[$getVar[owners];Yetkin Yok.]
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$mentioned[1]];$noMentionMessage[1]];$mentioned[1]]
`
}