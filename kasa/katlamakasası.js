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
]
$setUserVar[katlamakasasicarpan;$noMentionMessage[1]]
$onlyIf[$isNumber[$message[1]]!=false;Bir Sayı Belirt]
`
}