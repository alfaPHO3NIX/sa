module.exports = [{

  name: "özeloda",

  aliases: ["özel-oda","ö"],

  code: `

  
  $title[Özel Oda Menü]
  $addButton[1;Oda Oluştur;success;deneme_$authorID;no]
 $onlyIf[$getGlobalUserVar[premium]==Var;{newEmbed:{color:RANDOM}{title:Özel Oda Menü * Hata}{description:Bu komutu sadece premium üyeler kullanabilir!}}]
 `

},{

type:"interaction",

prototype: "button",

code:`

$interactionReply[✅ <@$authorID>, başvurun iletildi!]
        $interactionModal[Özel Oda Oluştur;odaismiModal;{actionRow:
        {textInput:Özel Oda Adı:1:isimModal:yes:Özel Oda Adı:3:30}}
     ]

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