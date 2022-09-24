module.exports = {
  name: "ban",
  aliases: ["yasakla"],
  code: `
  $ban[$guildID;$mentioned[1];0;$noMentionedMessage]
  $onlyIf[$mentioned[1]!=undefined;$title[Hata $customEmoji[reddet]]$description[
  Lütfen bir kişi belirt!
  
  ]]
  `
};
