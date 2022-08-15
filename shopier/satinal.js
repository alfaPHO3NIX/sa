module.exports = {
name: "satınal",
code: `
$deletecommand
$description[
**$message[1] Sayılı Sipariş No** Başarıyla Sıraya Alınmıştır

Not: **Sipariş No yanlış çıkarsa size bıt tarafından bildirim gelecektir. eğer gelmezse dm'niz kapalıdır.**]
$onlyIf[$isNumber[$message[1]]!=false;**Shopier Sipariş No** Girmelisin!]
$onlyIf[$channelType==dm;Lütfen bu komutu botun dmsinde kullanın.]
$deleteIn[5s]
`
}