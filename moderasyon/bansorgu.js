module.exports = {
  name: "bansorgu",
  aliases: ["yasaksorgu","yasaklanmasorgu"],
  code: `
  $onlyIf[$isBanned[$guildID;$message[1]]!=false;
  $title[Hata $customEmoji[reddet]]
  $description[Bu kullanıcı yasaklanmamış]
  ]
  $onlyIf[$isNumber[$message[1]]!=false;yarrak]
  `,
};