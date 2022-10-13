module.exports = {
  name: "jailchayarla",
  aliases: ["hapisrolayarla"],
  code: `
  $color[RANDOM]
  $title[Başarılı!]
  $description[
  Rol <@&$mentionedRoles[1]> olarak ayarlandı.
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