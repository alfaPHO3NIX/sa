module.exports = {
  name: "bansorgu",
  aliases: ["yasaksorgu", "yasaklanmasorgu"],
  code: `
  $title[Kişi Bulundu]
  $description[
  **Kullanıcı Adı:**
  <@$message[1]>
  
  **Yasaklanma Sebebi:**
  $getBanReason[$guildID;$message[1]]
  ]
  $onlyIf[$isBanned[$guildID;$message[1]]!=not;bu kullanıcı banlanmamış $customEmoji[reddet]]
  $onlyIf[$isNumber[$message[1]]!=false;ID sayılardan oluşur $customEmoji[reddet]]
  `,
};
