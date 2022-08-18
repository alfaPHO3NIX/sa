module.exports = {
name: "katlamakasası",
code: `
$randomText[
$title[Kaybettin :(]
$description[Üzgünüm,maalesef kaybbetin
Bahis Koyduğun Miktar: $getUserVar[katlamakasasicarpan]]
;
$title[Kaybettin :(]
$description[Üzgünüm,maalesef kaybbetin
Bahis Koyduğun Miktar: $getUserVar[katlamakasasicarpan]]
;
$title[Tebrikler! Kazandın]
$description[Çok Şanslısın! Kazandın]
Bahis Koyduğun Miktar: $getUserVar[katlamakasasicarpan]]
$eval[SelamKe]

$setUserVar[katlamakasasicarpan;$noMentionMessage[1]]
$onlyIf[$isNumber[$message[1]]!=false;Bir Sayı Belirt]
`
}