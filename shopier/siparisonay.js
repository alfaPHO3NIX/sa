module.exports = [
  {
    type: "interaction",
    prototype: "button",
    name: "evet",
    code: `
                $interactionReply[✅ <@$authorID>, başvurun iletildi!]
        $interactionModal[Shopier Sipariş Teslim Formu;yetkiliModal;{actionRow:
        {textInput:Shopier Sipariş No:1:siparisnoModal:yes:123456789:9:9}}
     ]
        `,
}]