module.exports = {
  name: "öner",
  aliases: ["öneriyap"],
  code: `
 $title[<@$authorID> Adlı Kişi Bir Öneride Bulundu!
 $description[
 **Önerisi:**
 $message]
 ]
$sendMessage[$title[Başarılı $customEmoji[onayla]]Önerin geliştiriciye iletildi!]
$argsCheck[>=3
;Hata $customEmoji[reddet]
Önerin en az 3 kelime olmalı]
`,
};
