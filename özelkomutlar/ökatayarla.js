module.exports = {
  name: "ökatayarla",
  aliases: ["ökayarla"],
  code: `
  Kategori <#$message[1]> olarak ayarlandı!
  $setVar[ozelodakategori;$message[1]]
  $setVar[ozelodakategori1;1]
  $modifyChannelPerms[$GuildID;$message[1];-viewchannel;-addreactions;-sendmessage]
  $argsCheck[>=1;ID Yazınız]
  `
}