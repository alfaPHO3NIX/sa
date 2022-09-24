module.exports = {
  name: "bansorgu",
  aliases: ["yasaksorgu","yasaklanmasorgu"],
  code: `
  $onlyIf[$isNumber[$noMentionedMessage[1]]!=false;$title[Hata $customEmoji[reddet]]
  $description[
  Lütfen sorgulanacak kişinin id'sini yazın!
  ]]
  `,
};