module.exports = [
  {
    type: "interaction",
    prototype: "button",
    name: "evet",
    code: `
                $interactionReply[✅ <@$authorID>, başvurun iletildi!]
        $interactionModal[Shopier Sipariş Onay;kontrolnoonayModal;{actionRow:
        {textInput:Kontrol No:1:kontrolnoonayModal:yes:123456789:9:9}}
     ]
        `,
  },
  {
    type: "interaction",
    prototype: "modal",
    name: "kontrolnoModal",
    code: `
    $setVar[$textInputValue[kontrolnoModal];Onaylandı✅]
    $suppressErrors[Bir Sorun oluştu! Kontrol No'yu doğru yazıdğına emin ol.]
    `
}]