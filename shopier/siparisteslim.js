module.exports = [
  {
    type: "interaction",
    prototype: "button",
    name: "siparisteslim",
    code: `
                $interactionReply[✅ <@$authorID>, başvurun iletildi!]
        $interactionModal[Shopier Sipariş Teslim;kontrolnoonayModal;{actionRow:
        {textInput:Kontrol No:1:kontrolnoModal:yes:123456789:9:50}}
         {actionRow:
          {textInput:Kontrol No:1:useridModal:yes:Kullanıcı İd:9:50}}
     ]
        `,
  },
  {
    type: "interaction",
    prototype: "modal",
    name: "kontrolnoonayModal",
    code: `
    $dm[$textInputValue[useridModal]]
    Selam <@$textInputValue[useridModal]>
    **$textInputValue[kontrolnoModal]** Kontrol No'lu Siparişin Onaylandı!
    
    Siparişinizi **48 Saat içerisinde** teslim etmeye çalışacağım.
    `
}]