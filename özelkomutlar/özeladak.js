module.exports = [{
  name: "özelodaadmin",
  aliases: ["özeloda-admin","ö admin","öa"],
  code: `
  $title[Özel Oda | Admin Menüsü]
  $description[Seçim Yapınız.]
  $addButton[1;Kategori ID Ayarla;1;katidayarla_$authorID;no;📝]
  $addButton[2;İsim Değişim Talep Logu Ayarla;öisimdegistlplog_$]
  $onlyForIDs[$botOwnerID;Yekin Yok $CustomEmoji[reddet]]
  `
},{
  type:"interaction",
  prototype:"button",
  code:`
  $interactionModal[Kategori ID Ayarla;katModals;
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
  $interactionReply[Kategori <#$textInputValue[kModal]> olarak ayarlandı!;;;;;yes]
  $setVar[ozelodakategori;$textInputValue[kModal]]
  $setVar[ozelodakategori1;1]
  $modifyChannelPerms[$GuildID;$textInputValue[kModal];-viewchannel;-addreactions;-sendmessage]
  $suppressErrors[Ow dostum bir hata oluştu. kategori ID'yi yanlış yazmış olabilirsin!]
  
  `
  
  
}]