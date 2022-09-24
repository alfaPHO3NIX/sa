module.exports = {
  name: "bansorgu",
  aliases: ["yasaksorgu","yasaklanmasorgu"],
  code: `
  $onlyIf[$isNumber[1]==true;$title[Hata $customEmoji[reddet]]
  $description[
  Lütfen sorgulanacak kişinin id'sini yazın!
  ]]
  `,
};