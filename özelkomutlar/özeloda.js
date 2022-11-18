module.exports = [{
  name: "özeloda",
  aliases: ["özel-oda","ö"],
  code: `
  $title[Özel Oda Menü]
  $addButton[3;Ayarlar;2;ayarlar_$authorID;no;⚙️]
  $addButton[1;Oda Oluştur;success;odaolustur_$authorID;no;💬]
  $addButton[2;Oda Bilgileri;1;odabilgileri_$authorID;no;❔]
  $onlyIf[$getGlobalUserVar[premium]==Var;{newEmbed:{color:RANDOM}{title:Özel Oda Menü * Hata}{description:Bu komutu sadece premium üyeler kullanabilir!}}]
  $onlyIf[$getVar[ozelodakategori1]!=0;{newEmbed:{title:Hata}{description:Görünüşe göre geliştirici özel odaların ekleneceği kategori id'yi belirtmemiş.\n\nLütfen bu hatayı geliştiriciye yada herhangi bir yetkiliye bildiriniz}}]
  $onlyForServers[688736441290719256;Bu komut sadece $servername[688736441290719256] adlı sunucu da kullanılabilir!!!]
 `,
},{
  type: "interaction",
  prototype: "button",
  code: `
  $interactionReply[Oda Başarıyla Oluşturuldu! <#$channelID[$random[1000;9999]-özel-oda]>;;;;;yes]
 $setGlobalUserVar[ozelodaid;$channelID[$random[1000;9999]-özel-oda]]
 $modifyChannelPerms[$authorID;$channelID[$random[1000;9999]-özel-oda];+viewchannel;+sendmessage;+addreactions]
 $createChannel[$guildID;$random[1000;9999]-özel-oda;text;no;$getVar[ozelodakategori]]
 $setGlobalUserVar[ozelodaisim;$random[1000;9999]-özel-oda]
 $setGlobalUserVar[ozeloda;var]
 $onlyIf[$getGlobalUserVar[ozeloda]!=var;Zaten Bir Özel Odan Var!]
 $onlyif[$get[authorID]==$interactionData[author.id];{
"content" : "Bu Butonu Sadece Komutu Kullanan Kişi Basabilir",
"ephemeral" : true,
"options" : { "interaction" : true }
}]
$onlyIf[$get[customId]==odaolustur;]
$let[authorID;$splitText[2]]
$let[customId;$splitText[1]]
$textSplit[$interactionData[customId];_;1]
 `
 
  
},{
  type:"interaction",
  prototype:"button",
  code: `
  $interactionReply[;{newEmbed:
  {title:Özel Oda | Oda Bilgileri}
  {description:Oda Adı: 
  $getGlobalUserVar[ozelodaisim]
 Oda ID: 
 $if[$getGlobalUserVar[ozelodaid]!=0;$getGlobalUserVar[ozelodaid];$channelID[$getGlobalUserVar[ozelodaisim]]]
  }};{actionRow:
  {button:Kanal ID Kopyala:1:chidkopyala_$authorID}
  }
  ;;;yes]
  $onlyIf[$getVar[ozelodakategori1]!=0;{newEmbed:{title:Hata}{description:Görünüşe göre geliştirici özel odaların ekleneceği kategori id'yi belirtmemiş.\n\nLütfen bu hatayı geliştiriciye yada herhangi bir yetkiliye bildiriniz}}]
  $onlyIf[$getGlobalUserVar[ozeloda]!=yok;{newEmbed:{title:Özel Oda | Oda Bilgileri * Hata}{description:\nSenin Bir Özel Odan Yok!}{delete:3s}}]
  $onlyif[$get[authorID]==$interactionData[author.id];
{"content" : "Bu Butonu Sadece Komutu Kullanan Kişi Basabilir",
"ephemeral" : true,
"options" : { "interaction" : true }
}]
$onlyIf[$get[customId]==odabilgileri;]
$let[authorID;$splitText[2]]
$let[customId;$splitText[1]]
$textSplit[$interactionData[customId];_;1]
  `
  },{
    type:"interaction",
    prototype:"button",
    code:`
    $interactionReply[;{newEmbed:
    {title:Özel Oda | Oda Bilgileri * Kanal ID Kopyala}
    {description:$if[$getGlobalUserVar[ozelodaid]!=0;$getGlobalUserVar[ozelodaid];$channelID[$getGlobalUserVar[ozelodaisim]]]
    }};;;;yes]
    $onlyif[$get[authorID]==$interactionData[author.id];{
"content" : "Bu Butonu Sadece Komutu Kullanan Kişi Basabilir",
"ephemeral" : true,
"options" : { "interaction" : true }
}]
$onlyIf[$get[customId]==chidkopyala;]
$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_;1]
    `
  },{
    type:"interaction",
    prototype:"button",
    code:`
    $interactionReply[;{newEmbed:
    {title:Özel Oda | Ayarlar}
    {description:Seçiniz.}};{actionRow:
    {button:Kanala Erişim Al:3:kerisimal_$authorID:no:🔓}
    {actionRow:
    {button:Özel Odanın Adını değiştir:1:oaddegis_$authorID:no:📝}
    }
    {actionRow:
    {button:Özel Odayı Sil:danger:ozelodasil_$authorID:no:🗑️}
    }
    }
    ;;;yes]
    $onlyif[$get[authorID]==$interactionData[author.id];{
"content" : "Bu Butonu Sadece Komutu Kullanan Kişi Basabilir",
"ephemeral" : true,
"options" : { "interaction" : true }
}]
$onlyIf[$get[customId]==ayarlar;]
$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_;1]
  `
  },{
    type:"interaction",
    prototype:"button",
    code:`
    $interactionModal[Kanal Erişim Al;kaerisimModal;
    {actionRow:
      {textInput:Kanal ID'nizi giriniz:1:erisimModal:yes:1234567890123456789:19:19}
    }
   ]
    
    $onlyif[$get[authorID]==$interactionData[author.id];{
"content" : "Bu Butonu Sadece Komutu Kullanan Kişi Basabilir",
"ephemeral" : true,
"options" : { "interaction" : true }
}]
$onlyIf[$get[customId]==kerisimal;]
$let[authorID;$splitText[2]]
$let[customId;$splitText[1]]
$textSplit[$interactionData[customId];_;1]
    `
  },{
    type:"interaction",
    prototype:"button",
    code:`
    $interactionModal[Özel Oda | İsim Değiştir;oaddegisModal;
    {actionRow:
      {textInput:Yeni Oda adını giriniz:1:oaddegisModals:yes:Yeni İsim:3}


       }
      ]
    
    $onlyif[$get[authorID]==$interactionData[author.id];{
"content" : "Bu Butonu Sadece Komutu Kullanan Kişi Basabilir",
"ephemeral" : true,
"options" : { "interaction" : true }
}]
$onlyIf[$get[customId]==oaddegis;]
$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_;1]
    `
   
    
  },{
    name:"oaddegisModal",
    type:"interaction",
    prototype:"modal",
    code:`
    $interactionReply[;{newEmbed:{title:Özel Oda | Ayarlar | Özel Odanın Adını Değiştir}{description:\n** **\nTalebiniz Alınmıştır 24 Saat İçerisinde Kontrol Edilip Gerekli İşlemler Yapılacaktır.\n** **}};;;;yes]
    $channelSendMessage[$getVar[öismdegistlplog];{newEmbed:
    {title:Yeni Bir Talep Var!!}
    }]
    `
  },{
    type:"interaction",
    prototype:"button",
    code:`
    $interactionReply[Özel Odanız Başarıyla Silinmiştir.;;;;;yes]
    $resetGlobalUserVar[ozelodaid]
    $resetGlobalUserVar[ozelodaisim]
    $resetGlobalUserVar[ozeloda]
    $deleteChannels[$getGlobalUserVar[ozelodaid]]
    $suppressErrors[Bir Hata Oluştu!?!?! Kanala Erişim Almamış Olabilirsin ya da Özel Odan Olmayabilir.]
    $onlyif[$get[authorID]==$interactionData[author.id];{
"content" : "Bu Butonu Sadece Komutu Kullanan Kişi Basabilir",
"ephemeral" : true,
"options" : { "interaction" : true }
}]
$onlyIf[$get[customId]==ozelodasil;]
$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_;1]
    `
  }
   ]