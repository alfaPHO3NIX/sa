module.exports = {
name: "prever",
aliases: ['premiumver'],
code: `
$title[$customEmoji[verified]Başarılı]
$description[<@$mentioned[1;no]> Adlı Kişiye Premium Verildi!
\n$customEmoji[premium]Premium Rozeti Kazanıldı]
$setGlobalUserVar[premiumsahibirozet;Sahipsin$customEmoji[onayla];$mentioned[1]]
$setGlobalUserVar[premium;Var;$mentioned[1]]
$onlyIf[$mentioned[1;no]!=undefined;Bir Kişi Belirmelisin $customEmoji[reddet]]
$onlyForIDs[$getVar[owners];Yetkin Yok$customEmoji[reddet]]
`
}