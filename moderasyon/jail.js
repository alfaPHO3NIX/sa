module.exports = {
  name: "jail",
  aliases: ["hapis"],
  code: `
  $giveRole[$guildID;$mentioned[1];$getServerVar[jailroleid]]
  $onlyIf[$getServerVar[jailchid]!=undefined;
  {newEmbed:
  {title: Hata}
  {description:Görünüşe göre kanal ID'si ayarlanmamış.\n\nEğer bunu gördüyseniz lütfen bir yetkiliye bildiriniz.
  }
  ]
  $onlyIf[$getServerVar[jailroleid]!=undefined;
  {newEmbed:
  {title: Hata}
  {description:Görünüşe göre Rol  ayarlanmamış.\n\nEğer bunu gördüyseniz lütfen bir yetkiliye bildiriniz.
  }
  ]
  `
}