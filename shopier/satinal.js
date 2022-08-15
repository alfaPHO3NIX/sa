module.exports = {
name: "satınal",
code: `
$deletecommand
$description[
**$message[1] Sayılı Sipariş No** Başarıyla Sıraya Alınmıştır

Kontrol No: $random[10000;99999]

Not: **Sipariş No yanlış çıkarsa size bot tarafından bildirim gelecektir. eğer gelmezse dm'niz kapalıdır.**]]
$onlyIf[$isNumber[$message[1]]!=false;**Shopier Sipariş No** Girmelisin!]
$createVar[main;$random[10000;99999]siparisno;$message[1]]
`
}