module.exports = {
  name: "e",
  aliases: ["emojilikonuş"],
  code: `
$deletecommand
$title[1;$username]
$description[
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message
;:bughunter:;$customEmoji[bughunter]]
;:verified:;$customEmoji[verified]]
;:kirmiziyildiz:;$customEmoji[kirmiziyildiz]]
;:maviyildiz:;$customEmoji[maviyildiz]]
;:tac:;$customEmoji[emoji_003]]
;:onayla:;$customEmoji[onayla]]
;:reddet:;$customEmoji[reddet]]
;:hosgeldin:;$customEmoji[emoji_hg]]
;:hosbuldum:;$customEmoji[emoji_hb]]
;:partner:;$customEmoji[partner]]
$argsCheck[>0;En azından 1 kelime yazsaydın ya be kanka!]
$onlyIf[$getGlobalUserVar[premium]==Var;$deletcommand Bu Özellik Sadece Premium Üyelere Özeldir$customEmoji[reddet]]

`,
};

//;:-:;$customEmoji[-]]

//$replaceText[
