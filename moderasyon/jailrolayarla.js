module.exports = {
  name: "jailrolayarla",
  aliases: ["hapisrolyarla"],
  code: `
  $color[RANDOM]
  $title[Başarılı!]
  $description[
  Kanal <@&$mentionedRoles[1]> olarak ayarlandı.\n** **
  ]
  $setServerVar[jailroleid;$mentionedRoles[1]]
  $onlyIf[$mentionedRoles[1]!=undefined;
  {newEmbed:
  {title: Hata}
  {description: Lütfen bir kanal belirt!}
  }

]
 $onlyIf[$getServerVar[jailchid];]
  $onlyPerms[admin;{newEmbed:
  {title: Hata}
  {description: Yetkin Yok.
  }}
  ]

`
}