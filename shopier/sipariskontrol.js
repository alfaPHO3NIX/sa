module.exports = {
name: "siparişkontrol",
code: `
$onlyIf[$message[1]<4;Kontrol No 5 hanelidir.Lütfen tekrar deneyiniz.]
$onlyIf[$message[1]>4;Kontrol No 5 hanelidir.Lütfen tekrar deneyiniz.]
$onlyIf[$isNumber[$message[1]]!=false;**Kontrol No** girmelisin!]
`
}