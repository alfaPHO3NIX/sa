module.exports = {
  name: "bansorgu",
  aliases: ["yasaksorgu", "yasaklanmasorgu"],
  code: `
  $onlyIf[$isBanned[$message[1]]!=not;Bu kullanıcı banlanmamış!]
  $title[Kişi Bulundu]
  $description[
  **Kullanıcı Adı:**
  <@$message[1]>
  
  **Yasaklanma Sebebi:**
  $getBanReason[$guildID;$message[1]]
  ]
  $onlyIf[$isNumber[$message[1]]!=false;ID sayılardan oluşur $customEmoji[reddet]]
  `,
};
