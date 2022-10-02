module.exports = {
  name: "öner",
  aliases: ["öneriyap"],
  code: `
 $title[<@$authorID> Adlı Kişi Bir Öneride Bulundu!
 $description[
 **Önerisi:**
 $message]
 ]
 $dm[$getVar[devid]]
$sendMessage[$title[Başarılı $customEmoji[onayla]]Önerin geliştiriciye iletildi!]
$argsCheck[>=3
;Hata $customEmoji[reddet]
Önerin en az 3 kelime olmalı]
$onlyIf[$getVar[önerikutusuu]!=kapalı;Öneri kutusu şuanlık kapalı :( maalesef açılana kadar öneri yapamazsın.]
`,
};
