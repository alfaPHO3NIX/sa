module.exports = {
  name: "öner",
  aliases: ["öneriyap"],
  code: `
 $title[<@$authorID> Adlı Kişi Bir Öneride Bulundu!
 $description[
 **Önerisi:**
 $message]
$dm[$getVar[devid]]
Başarılı $customEmoji[]
argsCheck[>=5
;Hata $customEmoji[reddet]
Önerin en az 5 kelime olmalı
`,
};