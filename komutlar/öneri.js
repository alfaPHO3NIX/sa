module.exports = {
  name: "öner",
  aliases: ["öneriyap"],
  code: `
 $title[<@$authorID> Adlı Kişi Bir Öneride Bulundu!
 $description[
 **Önerisi:**
 $message]
$dm[$getVar[devid]]
$title[Başarılı $customEmoji[onayla]]
$description[Önerin geliştiriciye iletildi!]
$argsCheck[>=5
;Hata $customEmoji[reddet]
Önerin en az 5 kelime olmalı
`,
};