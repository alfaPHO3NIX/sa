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

$onlyIf[$getGlobalUserVar[premium]==Var;Bu Özellik Sadece Premium Üyelere Özeldir$customEmoji[reddet]]
`,
};
