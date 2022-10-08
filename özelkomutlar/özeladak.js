module.exports = [{
  name: "özelodaadmin",
  aliases: ["özeloda-admin","ö admin"],
  code: `
  $title[Özel Oda | Admin Menüsü]
  $description[Seçim Yapınız.]
  $addButton[1;Kategori ID Ayarla;1;katidayarla_$authorID]
  
  `
},{
  type:"interaction",
  prototype:"button",
  code:`
  xlsls
  $onlyIf[$channelExists[$textInputValue[kModal]]
  $onlyif[$get[authorID]==$interactionData[author.id];{
"content" : "Bu Butonu Sadece Komutu Kullanan Kişi Basabilir",
"ephemeral" : true,
"options" : { "interaction" : true }
}]
$onlyIf[$get[customId]==katidayarla;]
$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_;1] 
  `
  
  
  
}]