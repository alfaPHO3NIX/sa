module.exports = [{

  name: "özeloda oluştur",

  aliases: ["özel-oda oluştut","ö"],

  code: `
  sa
  $addButton[1;saasab;green;deneme;no]

 `

},{

name: "deneme",
type: "interaction",
prototype: "button",
code:`
  $onlyif[$get[authorID]==$interactionData[author.id];{
"content" : "Bu Butonu Sadece Komutu Kullanan Kişi Basabilir",
"ephemeral" : true,
"options" : { "interaction" : true }
}]
$onlyif[$get[customId]==triggerl;]
$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_;1]
`
}]
