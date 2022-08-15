module.exports = {
name: "siparişkontrol",
code: `
$onlyIf[$isNumber[$message[1]]!=false;**Kontrol No** girmelisin!]
Kontrol No: $getVar[$mesaage[1]kontrolno]
Siparişi Oluşturan: <@$getVar[$message[1]sahip]>
Durumu: $getVar[$message[1]durum]
$supressErrors[Bir Sorun Oluştu! komutu kontrol et kontrol No'yu yazmamış olabilirsin.]
`
}