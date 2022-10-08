module.exports = [{
  name: "özelodaadmin",
  aliases: ["özeloda-admin","ö admin"],
  code: `
  $title[Özel Oda | Admin Menüsü]
  $description[Seçim Yapınız.]
  $addButton[1;Kategori ID Ayarla;1;katidayarla_$authorID]
  $onlyPerms[admin;Yekin Yok $CustomEmoji[reddet]]
  `
},{
  type:"interaction",
  prototype:"button",
  code:`
  $interactionModal[Hello there!;katModals;
    {actionRow:
      {textInput:Kategori ID Giriniz:1:kModal:yes:(Örnek)10363825383638253027:19:19}
    }
   ]
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
  
  
  
},{
  name:"katModals",
  type:"interaction",
  prototype:"modal",
  code:`
  $onlyIf[$channelExists[$textInputValue[kModal]]!=false;{newEmbed:{title:Özel Oda | Admin Menüsü * Hata}{description:Bu kategori bulunamadı}}]
  $interactionReply[z ]
  `
  
  
}]