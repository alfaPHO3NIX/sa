module.exports = {
name: "paraver",
code: `
$title[Başarılı!]
$description[** **
<@$mentioned[1]> adlı kişiye $noMentionMessage[1;no] $getVar[parasembol] verildi.
** **]
$color[RANDOM]
$onlyIf[$checkContains[$noMentionMessage[1]]!=false;**<@$authorID> Lütfen bir miktar belirt]
`
}