module.exports = {
  name: "e",
  aliases: ["emojilikonuş"],
  code: `
$deletecommand
$title[1;$username]
$description[
$replaceText[$replaceText[$message;
;:;\:]]
;:;:

$argsCheck[>0;En azından 1 kelime yazsaydın ya be kanka!]
$onlyIf[$getGlobalUserVar[premium]==Var;Bu Özellik Sadece Premium Üyelere Özeldir$customEmoji[reddet]]

`,
};

//;:-:;$customEmoji[-]]

//$replaceText[
