module.exports = {
name: "gemver",
code: `
$title[Başarılı!]
$description[** **
<@$mentioned[1]> adlı kişiye $numberSeparator[$noMentionMessage[1;no]] $customEmoji[gem] verildi.
** **]
$color[RANDOM]

$onlyIf[$isNumber[$noMentionMessage[1]]!=false;**<@$authorID> Lütfen bir miktar belirt**]
$onlyForIDs[980089372768624660;711923709253910588;x;Yetkin Yok.]
$setGlobalUserVar[mücevher;$sum[$getGlobalUserVar[mücevher;$mentioned[1]];$noMentionMessage[1]];$mentioned[1]]
`
}