module.exports = [{
  name: "özeloda oluştur",
  aliases: ["özel-oda oluştut","ö"],
  code: `
  sa
  $addButton[1;saasab;1;deneme_$authorID;no]
 `
},{
type:"interaction",
prototype: "button",
code:`
$interactionUpdate[sa]

$onlyif[$get[authorID]==$interactionData[author.id];{
"content" : "Bu Butonu Sadece Komutu Kullanan Kişi Basabilir",

"ephemeral" : true,

"options" : { "interaction" : true }
}]
$onlyIf[$get[customId]==deneme;]

$let[authorID;$splitText[2]]

$let[customId;$splitText[1]] 

$textSplit[$interactionData[customId];_;1]
`
}] 
tent" : "Bu Butonu Sadece Komutu Kullanan Kişi Basabilir",
"ephemeral" : true,
"options" : { "interaction" : true }
}]
$onlyif[$get[customId]==deneme;]
$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_;1]
`
}]