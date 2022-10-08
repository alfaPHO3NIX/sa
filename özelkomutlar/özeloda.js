module.exports = [{
  name: "özeloda",
  aliases: ["özel-oda","ö"],
  nonprefixed:"true",
  code: `
  $title[Özel Oda Menü]
  $addButton[3;Ayarlar;2;ayarlar_$authorID;no;⚙️]
  $addButton[1;Oda Oluştur;success;odaolustur_$authorID;no]
 $addButton[2;Oda Bilgileri;1;odabilgileri_$authorID;no]
 $onlyIf[$getGlobalUserVar[premium]==Var;{newEmbed:{color:RANDOM}{title:Özel Oda Menü * Hata}{description:Bu komutu sadece premium üyeler kullanabilir!}}]
 $onlyIf[$getVar[ozelodakategori1]!=0;{newEmbed:{title:Hata}{description:Görünüşe göre geliştirici özel odaların ekleneceği kategori id'yi belirtmemiş.\n\nLütfen bu hatayı geliştiriciye yada herhangi bir yetkiliye bildiriniz}}]
 `,
},{

  type:"interaction",
prototype: "button",
code:`
        $interactionModal[Özel Oda Oluştur;sModal;
    {actionRow:
      {textInput:Özel Oda Adı:1:oModal:yes:Oda Adı:3:30}
    }]
$onlyif[$get[authorID]==$interactionData[author.id];{
"content" : "Bu Butonu Sadece Komutu Kullanan Kişi Basabilir",
"ephemeral" : true,
"options" : { "interaction" : true }
}]
$onlyIf[$get[customId]==odaolustur;]
$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_;1]
`,
},{
  name: "sModal",
  type: "interaction",
  prototype: "modal",
  code: `
  $interactionReply[Oda Başarıyla Oluşturuldu!]
 $createChannel[$guildID;$random[1000;9999]-özel-oda;text;no;990815535124070431]
 $setGlobalUserVar[ozelodaisim;$random[1000;9999]-özel-oda]
 $loop[1;{};oa2]
 $loop[1;{};oa3]
 `
 
  
},{
  type:"interaction",
  prototype:"button",
  code: `
  ** **
  $interactionReply[]
  $sendMessage[{newEmbed:
  {title:Özel Oda | Oda Bilgileri}
  {description:$getGlobalUserVar[ozelodaisim]
  Oda ID: $channelID[$getGlobalUserVar[ozelodaisim]]}
  }
  ]
  
 
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
    sa
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
    name:"oa1",
    type:"awaited",
    prototype:"loop",
    code:`
    `
  },{
    name:"oa2",
    type:"awaited",
    prototype:"loop",
    code:`
    $setGlobalUserVar[ozelodaid;$channelID[$getGlobalUserVar[ozelodaisim]]]
    `
  },{
    name:"oa3",
    type:"awaited",
    prototype:"loop",
    code:`
    $modifyChannelPerms[$authorID;$channelID[$random[1000;9999]-özel-oda];+viewchannel;-managechannel;+sendmessage]
    `
    
  }
  ]