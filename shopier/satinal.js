module.exports = [{
  type: "interaction",
    prototype: "slash",
      name: "satinal",
        code: `
                $interactionReply[✅ <@$authorID>, başvurun iletildi!]
        $interactionModal[Shopier Sipariş Teslim Formu;yetkiliModal;{actionRow:
        {textInput:İsminiz ve yaşınız?:1:isimModal:yes:Şafak 14:3:20}}
        {actionRow:
        {textInput:Kaç saat aktif olabilirsiniz?:1:siparisnoModal:yes:7/24:1:10}}
     ]
        `
        },{
          type: "interaction",
            prototype: "modal",
              name: "yetkiliModal",
                code: `
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
  }]