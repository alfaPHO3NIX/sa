module.exports = [
  {
    type: "interaction",
    prototype: "button",
    name: "hayır",
    code: `
                $interactionReply[✅ <@$authorID>, başvurun iletildi!]
        $interactionModal[Shopier Sipariş Onay;kontrolreddetModal;{actionRow:
        {textInput:Kontrol No:1:reddetkontrolnoModal:yes:123456789:9:50}}
         {actionRow:
          {textInput:Kullanıcı id:1:reddetuseridModal:yes:Kullanıcı İd:9:50}}
           {actionRow:
            {textInput:Reddedilme Sebebi:1:siparisreddetsebepModal:yes:Reddedilme Sebebi:9:50}}
     ]
        `,
  },
  {
    type: "interaction",
    prototype: "modal",
    name: "kontrolnoredddetModal",
    code: `
    $dm[$textInputValue[reddetuseridModal]]
    Selam <@$textInputValue[reddetuseridModal]>
    **$textInputValue[reddetkontrolnoModal]** Kontrol No'lu Siparişin Onaylandı!
    
    Reddedilme sebebi: $textInputValue[siparisreddetsebepModal]
    `
}]