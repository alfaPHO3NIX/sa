module.exports = {
  name: "jailkanalayarla",
  aliases: ["hapiskanalayarla"],
  code: `
  $color[RANDOM]
  $title[Başarılı!]
  $description[
  Kanal <#$mentionedChannels[1]> olarak ayarlandı.\n** **
  ]
  $setServerVar[jailchid;$mentionedRoles[1]]
  $onlyIf[$mentionedChannels[1]!=undefined;
  {newEmbed:
  {title: Hata}
  {description: Lütfen bir kanal belirt!}
  }

]
 
  $onlyPerms[admin;{newEmbed:
  {title: Hata}
  {description: Yetkin Yok.
  }}
  ]

`
}