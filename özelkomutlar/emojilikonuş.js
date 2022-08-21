module.exports = {
  name: "e",
  aliases: ["emojilikonuş"],
  code: `
$deletecommand
$title[1;$username]
$description[
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message
;:bughunter:;$customEmoji[bughunter]]
;:verified:;$customEmoji[verified]]
;:kirmiziyildiz:;$customEmoji[kirmiziyildiz]]
;:tac:;$customEmoji[emoji_003]]
;:onayla:;$customEmoji[onayla]]
;:reddet:;$customEmoji[reddet]]

$argsCheck[>0;En azından 1 kelime yazsaydın ya be kanka!]
$onlyIf[$getGlobalUserVar[premium]==Var;$deletcommand Bu Özellik Sadece Premium Üyelere Özeldir$customEmoji[reddet]]
;$userAvatar]
`,
};

//;:-:;$customEmoji[-]]
