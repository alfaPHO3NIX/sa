module.exports = [{

  name:"yardım",

  aliases:"heldp",

  code:`

  $setMessageVar[menü;$authorID;$get[menü]]

  $let[menü;$apimessage[$channelID;;{newEmbed:{author:$userTag[$clientID]:$userAvatar[$clientID]}{description:Selamlar, ben **$userTag[$clientID]**. Sunucunuz için ayarlanan prefixim: \`$getServerVar[prefix]\`\n\nAşağıdaki butonlar ile komutlarımı görebilirsin.}{color:$getServerVar[hex]}{thumbnail:$userAvatar[$clientID]}};{actionRow:{button:Genel:2:genel<a:no:992445866331869264>:genel:}{button:Moderasyon:2:moderasyon<a:no:992445866331869264>:moderasyon:}{button:Ayarlamalı:2:ayarlamalı<a:no:992445866331869264>:ayarlamali:}{button:Eğlence:2:eğlence<a:no:992445866331869264><a:yildiz:739110684654174231>}};;;;;yes]]

  `

  },{

    name:"moderasyon",

    type:"interaction",

    prototype:"button",

    code:`

    $interactionReply[;{newEmbed:{author:Moderasyon Komutlarım:$authorAvatar}{description:

**$getServerVar[prefix]ban :** Kullanıcıyı sunucudan banlamanızı sağlar.

**$getServerVar[prefix]unban :** Kullanıcının banını kaldırmanızı sağlar.

**$getServerVar[prefix]mute :** Kullanıcıyı zaman aşımına sokmanızı sağlar.

**$getServerVar[prefix]unmute :** Kullanıcı zaman aşımından çıkarmanızı sağlar.}{color:$getServerVar[hex]}};;;;yes]

    $onlyIf[$getMessageVar[menü]==$authorID;{"content": "Bu menüyü sen kurmamışsın, kullanamazsında.","ephemeral": true, "options":{"interaction": true }}]

    `

    },{

      name:"genel",

      type:"interaction",

      prototype:"button",

      code:`

     $interactionReply[;{newEmbed:{author:Genel Komutlarım:$authorAvatar}{description:

**$getServerVar[prefix]afk :** AFK modunu açmanızı sağlar.

**$getServerVar[prefix]avatar :** Kullanıcının avatarını almanızı sağlar.}{color:$getServerVar[hex]}};;;;yes]

     $onlyIf[$getMessageVar[menü]==$authorID;{"content": "Bu menüyü sen kurmamışsın, kullanamazsında.","ephemeral": true, "options":{"interaction": true }}]

    `

    }