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
  $suppressErrors[Aa...Dostum bir hata oluştu yazdığın id yi kontrol et bu kişi banlanmamış olabilir.]
  $onlyIf[$isNumber[$message[1]]!=false;ID sayılardan oluşur $customEmoji[reddet]]
  
  `,
};
