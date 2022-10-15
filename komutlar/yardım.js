module.exports = [{
name: "yardım",
aliases: ['help'],
code: `
$title[$customEmoji[kitap] Yardım $customEmoji[kitap]]
$description[Seçiniz.]

$addSe
`
},{
  name:"help",
  type:"interaction",
  prototype:"button",
  code:`
 
 
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