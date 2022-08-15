module.exports = [{
  type: "interaction",
    prototype: "slash",
      name: "yetkili-ol",
        code: `
        $interactionReply[✅ <@$authorID>, başvurun iletildi!]
        $interactionModal[Yetkili alım;yetkiliModal;{actionRow:
        {textInput:İsminiz ve yaşınız?:1:nameModal:yes:Şafak 14:3:20}}
        {actionRow:
        {textInput:Kaç saat aktif olabilirsiniz?:1:timeModal:yes:7/24:1:10}}
          {actionRow:
          {textInput:Kaç sunucuda yetkilisiniz?:1:serverModal:yes:2 sunucuda:1:15}}
           {actionRow:
           {textInput:Ne tür yetkili olmak istersiniz?:1:typeModal:yes:Abone görevlisi:1:30}}
           {actionRow:
           {textInput:Neden seni yetkili almalıyız?:2:whyModal:yes:Çünkü ben tatlıyım:1:100}}
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
                $description[1;<@$authorID> ***sunucu da** yetkili olabilmek için bir başvuru da bulundu!]
$useChannel[log kanal id]
               $addTimestamp[1]
$addField[Neden seni yetkili almalıyız?;$textImputValue[whyModal]]
$addField[Ne türk yetkili olmak istersiniz?;$textInputValue[typeModal]]
$addField[Kaç sunucuda yetkilisiniz?;$textInputValue[serverModal]]
$addField[Kaç saat aktif olabilirsiniz?;$textInputValue[timeModal]]
$addField[İsminiz ve yaşınız?;$textInputValue[nameModal]]
`
  }]