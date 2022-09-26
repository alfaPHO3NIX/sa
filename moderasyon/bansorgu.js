module.exports = {
  name: "bansorgu",
  aliases: ["yasaksorgu", "yasaklanmasorgu"],
  code: `
  oldu ab
  $onlyIf[$isBanned[$guildID;$message[1]]!=false;$title[Hata]]
  $onlyIf[$isNumber[$message[1]]!=false;yarrak]
  `,
};
