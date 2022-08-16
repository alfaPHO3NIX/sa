module.exports = [
  {
    type: "interaction",
    prototype: "button",
    name: "hayır",
    code: `
                $interactionReply[✅ <@$authorID>, başvurun iletildi!]
        $interactionModal[Shopier Sipariş Onay;kontrolnoreddetModal;{actionRow:
        {textInput:Kontrol No:1:reddetkontrolnoModal:yes:123456789:9:50}}
         {actionRow:
          {textInput:Kontrol No:1:reddetuseridModal:yes:Kullanıcı İd:9:50}}
           {actionRow:
            {textInput:Kontrol No:1:siparisreddetsebepModal:yes:Reddedilme Sebebi:9:50}}
     ]
        `,
  },
  {
    type: "interaction",
    prototype: "modal",
    name: "kontrolnoreddetModal",
    code: `
    $dm[$textInputValue[reddetuseridModal]]
    $title[Selam <@$textInputValue[reddetuseridModal]>]
  $description[**$textInputValue[reddetkontrolnoModal]** Kontrol No'lu Siparişin Reddedildi :(
  ** **
Reddedilme sebebi: $textInputValue[siparisreddetsebepModal]
    ]
    `
}]