module.exports = [{
name: "yardım",
aliases: ['help'],
code: `
$title[$customEmoji[kitap] Yardım $customEmoji[kitap]]
$description[Seçiniz.]
$addSelectMenu[1;help;s;1;1;no;Ekonomi Komutları:Ekonomi komutlarını gösterir.:helpValue0:no:💎]
`
},{
  name:"help",
  type:"interaction",
  prototype:"selectMenu",
  code:`
  $interactionUpdate[;
  {newEmbed:
 {title:$customEmoji[kitap] Yardım $customEmoji[kitap]}
{description:
**     Ana Komutlar**
**$getServerVar[prefix]yardım / $getServerVar[prefix]help**
Tüm komutları gösterir.

**     $customEmoji[zumrut]Ekonomi Komutları**$customEmoji[zumrut]

**$getServerVar[prefix]param / $getServerVar[prefix]param {kişi}**
Bir kişi etiketlemezseniz kendi bakiyenizi,bir kişi etiketlerseniz etkietlediğiniz kişinin bakiyesini gösterir

**$getServerVar[prefix]günlük / $getServerVar[prefix]daily**
4 saatte bir para alırsınız.

**$getServerVar[prefix]sıralama para**
Para sıralamasını gösterir.

**$getServerVar[prefix]**paragönder {kişi} {miktar}
Etkitetlediğiniz kişiye belirttiğiniz miktarda $getVar[parasembol] gönderir.

**     Rozet Sistemi**
**$getServerVar[prefix]rozetler / $getServerVar[prefix]rozetlerim**
sizde olan/olmayan tüm rozetleri gösterir.

**Premium Sistemi**
**$getServerVar[prefix]prebilgi / $getServerVar[prefix]premiumbilgi**
Premium özrlliklerini gösterir.

**$getServerVar[prefix]premium**
Premium'unuzun olup olmadığını gösterirr
}}
]

$onlyif[$get[authorID]==$interactionData[author.id];{

"content" : "Bu Butonu Sadece Komutu Kullanan Kişi Basabilir",

"ephemeral" : true,

"options" : { "interaction" : true }

}]

$onlyIf[$interactionData[values[0]]==0;]
$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_;1]
`
}]