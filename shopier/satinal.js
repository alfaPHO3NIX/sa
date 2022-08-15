module.exports = [
  {
    type: "interaction",
    prototype: "slash",
    name: "satinal",
    code: `
                $interactionReply[✅ <@$authorID>, başvurun iletildi!]
        $interactionModal[Shopier Sipariş Teslim Formu;yetkiliModal;{actionRow:
        {textInput:Ad Soyad:1:isimModal:yes:Ad Soyad:3:30}}
        {actionRow:
        {textInput:Shopier Sipariş No:1:siparisnoModal:yes:123456789:9:9}}
     ]
        `,
},
{
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

`,
  },
];
