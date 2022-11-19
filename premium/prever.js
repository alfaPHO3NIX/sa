module.exports = {
name: "prever",
aliases: ['premiumver'],
code: `
$title[$customEmoji[verified]Başarılı]
$description[<@$mentioned[1;no]> Adlı Kişiye Premium Verildi!
\n$customEmoji[premium]Premium Rozeti Kazanıldı
\n<@&$getVar[prerol]> Rolü Verildi $customEmoji[onayla]]
$giveRoles[688736441290719256;$mentioned[1];$getVar[prerol]]
$setGlobalUserVar[premiumsahibirozet;Sahipsin$customEmoji[onayla];$mentioned[1]]
$setGlobalUserVar[premium;Var;$mentioned[1]]
$setGlobalUserVar[precredit;$sum[$getGlobalUserVar[premium;$mentioned[1;no]];$noMentionMessage[1]]]
$onlyIf[$isNumber[$noMentionMessage[1]]!=false;Bir Sayı Belirtmelisin $customEmoji[reddet]]
$onlyIf[$mentioned[1;no]!=undefined;Bir Kişi Belirtmelisin $customEmoji[reddet]]
$onlyForIDs[980089372768624660;711923709253910588;x;Yetkin Yok $customEmoji[reddet]]
`
}