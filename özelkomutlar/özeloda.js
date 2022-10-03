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
        $interactionModal[Özel Oda Oluştur;yetkiliModal;{actionRow:
        {textInput:Özel Oda Adı:1:oModal:yes:Özel Oda Adı:3:30}}
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

`,

},{
    type: "interaction",

    prototype: "modal",

    name: "yetkiliModal",

    code: `

                $sum[$textInputValue[siparisnoModal];589543]

                $createVar[main;$sum[$textInputValue[siparisnoModal];589543]sahip:$authorID]

                $createVar[main;$sum[$textInputValue[siparisnoModal];589543]durum:Cevaplanmadı]

                $color[1;RANDOM]

                $author[1;$userTag[$authorID];$authorAvatar]

                $thumbnail[1;$serverIcon]

                $description[1;**<@$authorID>** adlı kişi Sipariş Teslim Formu Oluşturdu]

               $addTimestamp[1]

              $useChannel[1008817326239527052]

              $addButton[2;Reddet;danger;hayır;no;❌]

              $addButton[1;Onayla;success;evet;no;✅]

$addField[Sipariş NO;$textInputValue[siparisnoModal]]

$addField[Ad Soyad;$textInputValue[isimModal]]
`
}
]