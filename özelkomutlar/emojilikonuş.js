module.exports = {
  name: "e",
  aliases: ["emojilikonuş"],
  code: `
$deletecommand
$replaceText[$replaceText[$replaceText[$replaceText[$message
;:bughunter:;$customEmoji[bughunter]]
;:verified:;$customEmoji[verified]]
;:kirmiziyildiz:;$customEmoji[kirmiziyildiz]]
;:tac:;$customEmoji[emoji_003]]
$argsCheck[>1;$deletecommand En azından 2 kelime yazsaydın ya be kanka! $deleteIn[5s]]
$onlyIf[$getGlobalUserVar[premium]==Var;$deletcommand Bu Özellik Sadece Premium Üyelere Özeldir$customEmoji[reddet] $deleteIn[5s]]

`,
};
