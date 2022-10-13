module.exports = {
  name: "jailrolayarla",
  aliases: ["hapisrolayarla"],
  code: `
  $title[Başarılı!]
  $description[
  Rol <@&$mentionedRoles[1]> olarak ayarlandı.
  ]
  $setServerVar[jailroleid;$mentionedRoles[1]]
  $onlyIf[$mentionedRoles[1]!=undefined;
  {newEmbed:
  {title: Hata}
  {description: Lütfen bir rol belirt!}
  }

]
 
  $onlyPerms[admin;{newEmbed:
  {title: Hata}
  {description: Yetkin Yok.
  }
]
  `
}