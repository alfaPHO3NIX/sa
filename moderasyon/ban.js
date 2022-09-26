module.exports = {
  name: "ban",
  aliases: ["yasakla"],
  code: `
  $title[Başarılı $customEmoji[onayla]]
  $onlyPerms[ban;kick;Aa...Dostum banlama ve kickleme yetkim yok sanırım ve ya bu banlayacağım kişiye yetkim yetmiyor. 🤔]
  $ban[$guildID;$mentioned[1];1;$noMentionMessage]
  `
};
