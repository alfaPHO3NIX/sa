module.exports = [{
  name: "özeloda",
  aliases: ["özel-oda","ö"],
  code: `
  $title[Özel Oda Menü]
  $addButton[1;Oda Oluştur;success;odaolustur_$authorID;no]
 $addButton[1;Oda Bilgileri;1;odabilgileri_$authorID;no]
 $onlyIf[$getGlobalUserVar[premium]==Var;{newEmbed:{color:RANDOM}{title:Özel Oda Menü * Hata}{description:Bu komutu sadece premium üyeler kullanabilir!}}]
 `
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
 $createChannel[$guildID;$textInputValue[oModal];text;no]
 $setGlobalUserVar[ozelodaisim;$textInputValue[oModal]]
 $loop[1;{};oa2]
 $loop[1;{};oa3]
 `
 
  
},{
  type:"interaction",
  prototype:"button",
  code: `
  $interactionReply[
  Özel Oda | Oda Bilgileri
  Oda Adı: $getGlobalUserVar[ozelodaisim]
  Oda ID: $getGlobalUserVar[ozelodaid]
  ** **
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
    $modifyChannelPerms[$guildID;$getGlobalUserVar[ozelodaid];-viewchannel;-managechannel;-sendmessage]
    `
    
  }
  ]