module.exports = {
  name: "bansorgu",
  aliases: ["yasaksorgu","yasaklanmasorgu"],
  code: `
  $onlyIf[$isBanned[$guildID;$message[1]]!=false;bu kullanıcı banlanmamış]
  $onlyIf[$isNumber[$message[1]]!=false;yarrak]
  `,
};