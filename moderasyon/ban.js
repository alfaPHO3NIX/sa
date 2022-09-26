module.exports = {
  name: "ban",
  aliases: ["yasakla"],
  code: `
  $ban[$guildID;$mentioned[1;no];;$noMentionMessage]
  $onlyIf[$mentioned[1;no]!=undefined;$title[Hata $customEmoji[reddet]]]
  `
};
