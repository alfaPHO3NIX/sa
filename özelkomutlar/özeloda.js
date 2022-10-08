module.exports = [{
  name: "özeloda",
  aliases: ["özel-oda","ö"],
  code: `
  $title[Özel Oda Menü]
  $addButton[3;Ayarlar;2;ayarlar_$authorID;no;⚙️]
  $addButton[1;Oda Oluştur;success;odaolustur_$authorID;no]
  $addButton[2;Oda Bilgileri;1;odabilgileri_$authorID;no]
  $onlyIf[$getGlobalUserVar[premium]==Var;{newEmbed:{color:RANDOM}{title:Özel Oda Menü * Hata}{description:Bu komutu sadece premium üyeler kullanabilir!}}]
  $onlyIf[$getVar[ozelodakategori1]!=0;{newEmbed:{title:Hata}{description:Görünüşe göre geliştirici özel odaların ekleneceği kategori id'yi belirtmemiş.\n\nLütfen bu hatayı geliştiriciye yada herhangi bir yetkiliye bildiriniz}}]
 `,
},{
  type: "interaction",
  prototype: "button",
  code: `
  $interactionReply[Oda Başarıyla Oluşturuldu!]
 $createChannel[$guildID;$random[1000;9999]-özel-oda;text;no;$getVar[ozelodakategori]]
 $setGlobalUserVar[ozelodaisim;$random[1000;9999]-özel-oda]
 $loop[1;{};oa2]
 
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
  ** **
  $title[Özel Oda | Oda Bilgileri]
  $description[Oda Adı: 
  $getGlobalUserVar[ozelodaisim]
  Oda ID: 
  $getGlobalUserVar[ozelodaid]]
  $addButton[1;Kanal ID Kopyala;1;chidkopyala_$authorID;no]
  $interactionUpdate[** **]
  $onlyIf[$getVar[ozelodakategori1]!=0;{newEmbed:{title:Hata}{description:Görünüşe göre geliştirici özel odaların ekleneceği kategori id'yi belirtmemiş.\n\nLütfen bu hatayı geliştiriciye yada herhangi bir yetkiliye bildiriniz}}]
  $onlyif[$get[authorID]==$interactionData[author.id];{
"content" : "Bu Butonu Sadece Komutu Kullanan Kişi Basabilir",
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
    $deleteIn[1s]
    $interactionReply[$channelID[$getGlobalUserVar[ozelodaisim]]]
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
    $title[Özel Oda | Ayarlar]
    $description[Seçiniz.]
    $addButton[1;Kanala Erişim Al;success;kerisimal_$authorID;no]
    $interactionUpdate[** **]
    
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
    name:"oa2",
    type:"awaited",
    prototype:"loop",
    code:`
    $setGlobalUserVar[ozelodaid;$channelID[$getGlobalUserVar[ozelodaisim]]]
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
    name:"kaerisimModal",
    type:"interaction",
    prototype:"modal",
    code:`
    $title[Özel Oda | Ayarlar]
    $description[Erişim başarıyla Verildi!]
    $setGlobalUserVar[ozelodaid;$textInputValue[erisimModal]]
    $onlyIf[$textInputValue[erisimModal]==$channelID[$getGlobalUserVar[ozelodaisim]];{newEmbed:{title:Özel Oda | Ayarlar * Hata}{description:Oda bilgilerinizdeki kanal ID yazdığınız kanal id ile uyuşmuyor}}]
    $interactionReply[** **]
    `
  }
    
  ]