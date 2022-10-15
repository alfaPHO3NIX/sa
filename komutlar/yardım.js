module.exports = [{
name: "yardım",
aliases: ['help'],
code: `
$title[$customEmoji[kitap] Yardım $customEmoji[kitap]]
$description[Seçiniz.]
$addSelectMenu[1;help;Seçiniz...;1;1;no;Ana Komutlar:Ana komutları gösterir:help-1:no;Ekonomi Komutları:Ekonomi komutlarını gösterir.:help0:no:$customEmoji[para];Rozet Komutları:Rozet sistemi komutlarını gösterir:help1:no:$customEmoji[tac]]
`
},{
  name:"help",
  type:"interaction",
  prototype:"selectMenu",
  code:`
  $interactionReply[;
  {newEmbed:
 {title:$customEmoji[kitap] Yardım $customEmoji[kitap]}
{description:
**     Ana Komutlar**

**$getServerVar[prefix]yardım / $getServerVar[prefix]help**

Tüm komutları gösterir.

**     $customEmoji[zumrut]Ekonomi Komutları**$customEmoji[zumrut]

**$getServerVar[prefix]param / $getServerVar[prefix]param <kişi>**

Bir kişi etiketlemezseniz kendi bakiyenizi,bir kişi etiketlerseniz etkietlediğiniz kişinin bakiyesini gösterir

**$getServerVar[prefix]günlük / $getServerVar[prefix]daily**

4 saatte bir para alırsınız.

**$getServerVar[prefix]sıralama para**

Para sıralamasını gösterir.

**$getServerVar[prefix]**paragönder {kişi} {miktar}

Etkitetlediğiniz kişiye belirttiğiniz miktarda $getVar[parasembol] gönderir.

}}
;;;;yes]
$onlyIf[$interactionData[values[0]]==help0;]
`
},{
  name:"help",
  type:"interaction",
  prototype:"selectMenu",
  code:`
  
  $interactionReply[;{newEmbed:
  {title:**     Rozet Sistemi**}
{description:**$getServerVar[prefix]rozetler / $getServerVar[prefix]rozetlerim**

sizde olan/olmayan tüm rozetleri gösterir.
}
}
;;;;yes]
$onlyIf[$interactionData[values[0]]==help1;]
`
  },{
    name:"help",
    type:"interaction",
    prototype:"selectMenu",
    code:`

 **Premium Sistemi**

**$getServerVar[prefix]prebilgi / $getServerVar[prefix]premiumbilgi**

Premium özrlliklerini gösterir.

**$getServerVar[prefix]premium**

Premium'unuzun olup olmadığını gösterir
  
  $onlyIf[$interactionData[values[0]]==help2;]
  `
}]