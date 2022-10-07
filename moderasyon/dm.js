module.exports = {
  name: "dm",
  aliases: ["direkt-mesaj"],
  code: `
  $deletecommand
  $dm[$mentioned[1]]
  $message
  $sendMessage[{newEmbed:{title:{Deneme}description:{Başarılı}}]
  
  `
}