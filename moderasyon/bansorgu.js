module.exports = {
  name: "bansorgu",
  aliases: ["yasaksorgu","yasaklanmasorgu"],
  code: `
  $onlyIf[$isNumber[$message[1]!=false;]]
  `,
};