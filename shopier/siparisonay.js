module.exports = [
  {
    type: "interaction",
    prototype: "button",
    name: "evet",
    code: `
                $interactionReply[✅ <@$authorID>, başvurun iletildi!]
        $interactionModal[Shopier Sipariş Onay;kontrolnoonayModal;{actionRow:
        {textInput:Kontrol No:1:kontrolnoModal:yes:123456789:9:50}}
     ]
        `,
  },
  {
    type: "interaction",
    prototype: "modal",
    name: "kontrolnoonayModal",
    code: `
    $dm[$getVar[$textInputValue[kontrolnoModal]sahip]]
    Selam 
    $setVar[$textInputValue[kontrolnoModal]durum;Onaylandı✅]
    `
}]