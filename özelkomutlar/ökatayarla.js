module.exports = {
  name: "ökatayarla",
  aliases: ["ökayarla"],
  code: `
  $setVar[ozelodakategori;$message[1]]
  $setVar[ozelodakategori1;1]
  $modifyChannelPerms[$GuildID;$message[1];-viewchannel;-addreactions]
  $argsCheck[>=1;ID Yazınız]
  `
}