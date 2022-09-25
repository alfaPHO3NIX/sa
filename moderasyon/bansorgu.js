module.exports = {
  name: "bansorgu",
  aliases: ["yasaksorgu", "yasaklanmasorgu"],
  code: `
  $onlyIf[$isBanned[$guildID;$message[1]]!=false;$title[Hata] $description[bu kullanıcı banlanmamış]]
  $onlyIf[$isNumber[$message[1]]!=false;yarrak]
  `,
};
