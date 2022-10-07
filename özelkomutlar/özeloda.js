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
 $setGlobalUserVar[ozelodaid;$channelID[$textInputValue[oModal]]]
 $modifyChannelPerms[$guildID;$channelID[$textInputValue[oModal]];-viewchannel;-managechannel;-sendmessage]
 `
 
  
},{
  type:"interaction",
  prototype:"button",
  code: `
  $interactionReply[
  Özel Oda | Oda Bilgileri
  Oda Adı: $getGlobalUserVar[ozelodaid]
  Oda ID: $channelID[$getGlobalUserVar[ozelodaid]]
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
    $createVar[main;s:$channelID[$getGlobalUserVar[ozelodaid]]]
    `
  },{
    name:"oa2",
    type:"awaited",
    prototype:"loop",
    code:`
    $modifyChannelPerms[$guildID;$channelID[$getVar[s]];-viewchannel;-managechannel;-sendmessage]
    `
  }
  ]