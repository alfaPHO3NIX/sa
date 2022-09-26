module.exports = {
  name: "ban",
  aliases: ["yasakla"],
  code: `
  $onlyPerms[ban;x;Aa...Dostum banlama yetkim yok sanırım ve ya bu banlayacağım kişiye yetkim yetmiyor. 🤔]
  $ban[$guildID;$mentioned[1;no];;$noMentionMessage]
  `
};
