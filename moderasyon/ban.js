module.exports = {
  name: "ban",
  aliases: ["yasakla"],
  code: `
  $ban[$guildID;$mentioned[1;no];;$noMentionedMessage]
  $onlyIf[$mentioned[1;no]!=undefined;
  $title[Hata $customEmoji[reddet]]
  $description[
  Lütfen bir kişi belirt!
  
  ]
  `
};
