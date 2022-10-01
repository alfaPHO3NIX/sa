module.exports = {
  name: "ban",
  aliases: ["yasakla"],
  code: `
  $title[Başarılı $customEmoji[onayla]]
  $ban[$guildID;$mentioned[1];1;$noMentionMessage]
  $onlyPerms[admin;Yetkin Yok.]
  $suppressErrors[Bir hata oluştu! lütfen yazdığın idyi yada etiketlediğin kişiye dikkat et]
  
  `
};
