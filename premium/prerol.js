module.exports = {
  name: "prerol-ayarla",
  aliases: ["prerol"],
  code: `
  $title[Başarılı!]
  $description[** **\n$customEmoji[onayla] Hediye Premium Rolü <@&$mentionedRoles[1]> Olarak Ayarlandı!\n** **]
  $footer[$servername[$guildID]]
  $setVar[prerol;$mentionedRoles[1]]
  $onlyIf[$mentionedRoles[1]!=undefined;{newEmbed:

  {title: Hata}
  {description: $customEmoji[reddet] Lütfen Bir Rol Belirt!!}

  }

]
  $onlyForIDs[$botOwnerID;Yetkin Yok]
  `
}