module.exports = {
  name: "jailchayarla",
  aliases: ["hapiskanakayarla"],
  code: `
  $color[RANDOM]
  $title[Başarılı!]
  $description[
  Kanal <#$mentionedChannel[1]> olarak ayarlandı.
  ]
  $setServerVar[jailroleid;$mentionedRoles[1]]
  $onlyIf[$mentionedChannels[1]!=undefined;
  {newEmbed:
  {title: Hata}
  {description: Lütfen bir kanal belirt!}
  }

]
 
  $onlyPerms[admin;{newEmbed:
  {title: Hata}
  {description: Yetkin Yok.
  }
  }
]  
`
}