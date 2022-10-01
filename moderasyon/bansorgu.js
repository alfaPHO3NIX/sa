module.exports = {
  name: "bansorgu",
  aliases: ["yasaksorgu", "yasaklanmasorgu"],
  code: `
  $title[Kişi Bulundu]
  $description[
  Kullanıcı Adı;
  <@$noMentionMessage>
  Yasaklanma Sebebi;
  $getBanReason[$guildID;$noMentionMessage]
  ]
  $onlyIf[$isBanned[$guildID;$noMentionMessage]!=not;bu kullanıcı banlanmamış $customEmoji[reddet]]
  $onlyIf[$isNumber[$message[1]]!=false;ID sayılardan oluşur $customEmoji[reddet]]
  `,
};
