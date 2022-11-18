module.exports = [{
  name: "özelodaadmin",
  aliases: ["özeloda-admin","ö admin","öa"],
  code: `
  $title[Özel Oda | Admin Menüsü]
  $description[Seçim Yapınız.]
  $addButton[1;Kategori ID Ayarla;1;katidayarla_$authorID;no;📝]
  $addButton[2;İsim Değişim Talep Logu Ayarla;1;öisimdegistlplog_$authorID;no;📝]
  $onlyForIDs[$botOwnerID;Yekin Yok $CustomEmoji[reddet]]
  $onlyForServers[688736441290719256; Bu komut sadece $servername[688736441290719256] adlı sunucu da kullanılabilir!!!]
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
  
  
},{
  type:"interaction",
  prototype:"button",
  code:`
  $interactionModal[İsim Değişim Talep Logu Kanalı Ayarla;öismtlplogModal;{actionRow:
  {textInput:Talep Log Kanal ID'sini Giriniz:1:öismtlplog:yes:(örnek)2729172639183738272:19:19}
  }
  
  ]
  
$onlyif[$get[authorID]==$interactionData[author.id];{
"content" : "Bu Butonu Sadece Komutu Kullanan Kişi Basabilir",
"ephemeral" : true,
"options" : { "interaction" : true }
}]
$onlyIf[$get[customId]==öisimdegistlplog;]
$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_;1]
  `
  
  
  
},{
  name:"öismtlplogModal",
  type:"interaction",
  prototype:"modal",
  code :`
  
  $interactionReply[Talep Logu Başarıyla Ayarlandı $customEmoji[onayla];;;;;yes]
  $setVar[öismdegistlplog;$textInputValue[öismtlplog]]
  $modifyChannelPerms[$guildID;$textInputValue[öismtlplog];-sendmessage]
  $suppressErrors[Bir Hata Oluştu! Lütfen Kanal ID'sini Doğru Yazdığından Emin Ol.]
  `
  
  
}]