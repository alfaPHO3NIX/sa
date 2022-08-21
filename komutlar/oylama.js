module.exports = {
  name: "oylama",
  aliases: ["oylamabaşlat"],
  code: `
$deletecommand
$title[Oylama]
$description[
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message
;:bughunter:;$customEmoji[bughunter]]
;:verified:;$customEmoji[verified]]
;:kirmiziyildiz:;$customEmoji[kirmiziyildiz]]
;:tac:;$customEmoji[emoji_003]]
;:onayla:;$customEmoji[onayla]]
;:reddet:;$customEmoji[reddet]]
]
||@everyone&@here||
$addReactions[$customEmoji[reddet];$customEmoji[onayla]]
$argsCheck[>0;En azından 1 kelime yazsaydın ya be kanka!]
$onlyPerms[admin;$deletcommand Bu Özellik Sadece Premium Üyelere Özeldir$customEmoji[reddet]]

`,
};

//;:-:;$customEmoji[-]]
