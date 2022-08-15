module.exports = [{
  type: "interaction",
    prototype: "slash",
      name: "satinal",
        code: `
        $interactionReply[✅ <@$authorID>, başvurun iletildi!]
        $interactionModal[Yetkili alım;yetkiliModal;{actionRow:
        {textInput:Ad Soyad:1:isimModal:yes:Ad Soyad:3:30}}
        {actionRow:
         {textInput:Sipariş No Giriniz:1:siparisnoModal:yes:123456789:9:9}}
    ]
        `
        },{
          type: "interaction",
            prototype: "modal",
              name: "yetkiliModal",
                code: `
               $dm[$botOwnerID]
                $color[1;RANDOM]
                $author[1;$userTag[$authorID];$authorAvatar]
                $thumbnail[1;$serverIcon]
                $description[1;<@$authorID> **<@$authorID>** adlı kişi Sipariş Teslim Formu Oluşturdu]
               $addTimestamp[1]
$addField[Sipariş NO;$textInputValue[whyModal]]
$addField[Ad Soyad;$textInputValue[typeModal]]

`
  }]