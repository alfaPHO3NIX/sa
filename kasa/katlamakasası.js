module.exports = {
name: "katlamakasası",
code: `
$randomText[
$title[Kaybettin :(]
description[Üzgünüm,maalesef kaybbetin]
;
$title[Kaybettin :(]
$description[Üzgünüm,maalesef kaybbetin]
]
$onlyIf[$isNumber[$message[1]]!=false;Bir Sayı Belirt]

`
}