module.exports = {
name: "preal",
aliases: ['premiumal'],
code: `
$title[$customEmoji[verified]Başarılı]
$description[<@$mentioned[1;no]> Adlı Kişiye Premiumu Geri Alındı!
\n$customEmoji[premium]Premium Rozeti Alındı]
$setGlobalUserVar[premiumsahibirozet;Sahip Değilsin;$mentioned[1]]
$setGlobalUserVar[premium;Yok;$mentioned[1]]
$onlyIf[$mentioned[1;no]!=undefined;Bir Kişi Belirmelisin $customEmoji[reddet]]
$onlyIf[$getGlobalUserVar[premium;$mentioned[1;no]]==Var;Bu Kullanıcının Zaten Premium Üyeliği Yok$customEmoji[reddet]]
$onlyForIDs[980089372768624660;711923709253910588;x;Yetkin Yok $customEmoji[reddet]]`
}