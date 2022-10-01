module.exports = {
  name: "sil",
  aliases: ["clear"],
  code: `
  $clear[$message[1]]
  $title[Başarılı $customEmoji[onayla]]
  $description[$message[1] mesaj silindi!]
  $onlyIf[$isNumber[$message[1]]!=false;Bir Sayı Belirt $customEmoji[reddet]]
  `,
};