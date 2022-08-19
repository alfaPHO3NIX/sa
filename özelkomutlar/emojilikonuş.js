module.exports = {
  name: "e",
  aliases: ["emojilikonuş"],
  code: `
$deletecommand

$replaceText[$replaceText[$message
;:bughunter:;'$customEmoji[']
;:;]

$onlyIf[$getGlobalUserVar[premium]==Var;Bu Özellik Sadece Premium Üyelere Özeldir$customEmoji[reddet]]
`,
};
