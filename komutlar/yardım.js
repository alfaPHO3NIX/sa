module.exports = {
name: "",
code: `
$title[$customEmoji[kitap] Yardım $customEmoji[kitap]]
$description[
**     Ekonomi Komutları**$customEmoji[zumrut]

**$getServerVar[prefix]param / $getServerVar[prefix]param {kişi}**
Bir kişi etiketlemezseniz kendi bakiyenizi,bir kişi etiketlerseniz etkietlediğiniz kişinin bakiyesini gösterir

**$getServerVar[prefix]günlük / $getServerVar[prefix]daily**
4 saatte bir para alırsınız.

**$getServerVar[prefix]**paragönder {kişi} {miktar}
Etkitetlediğiniz kişiye belirttiğiniz miktarda $getVar[parasembol] gönderir.

**     Rozet Sistemi**
**$getServerVar[prefix]rozetler / $getServerVar[prefix]rozetlerim**
sizde olan/olmayan tüm rozetleri gösterir.

**Premium Sistemi**
**$getServerVar[prefix]prebilgi / $getServerVar[prefix]premiumbilgi**
Premium özrlliklerini gösterir.

**$getServerVar[prefix]premium**
Premium
]
`
}