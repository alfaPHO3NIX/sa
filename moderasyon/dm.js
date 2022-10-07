module.exports = {
  name: "dm",
  aliases: ["direkt-mesaj"],
  code: `
  $deletecommand
  $dm[$mentioned[1]]
  $message
  $sendMessage[{newEmbed:
  {title:Dm Başarılı}
  {description:
  DM Gönderildi $customEmoji[verified]
  ** **
  }
  
  }]
  
  `
}