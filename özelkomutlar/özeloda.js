
module.exports = [{
  name: "özeloda oluştur",
  aliases: ["özel-oda oluştut","ö"],
  code: `
  sa
  $addButton[1;saasab;2;deneme_$authorID;no]
 `
},{
name: "deneme",
type:"interaction",
prototype: "button",
code:`
$interactionReply[sa;;;;;;yes]
"content" : "Bu Butonu Sadece Komutu Kullanan Kişi Basabilir",
"ephemeral" : true,
"options" : { "interaction" : true }
}]
$onlyif[$get[customId]==deneme;]
$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_;1]
`
}]