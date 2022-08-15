module.exports = {
name: "siparişkontrol",
code: `
$onlyIf[$isNumber[$message[1]!=false;Kontrol No** girmelisin!]
`
}