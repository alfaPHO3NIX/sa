module.exports = {
name: "sürelirol",
code: `
$title[Başarılı!]
$description[Verilen Rol;
<@&$mentionedRoles[2]>

Rol Verilen Kişi;
<@$mentioned[1]>

Rolü Veren Yetkili;
<@$authorID>

Süre;
$message[3] Saniye]
$footer[Made By xFurkan_]

$argsCheck[3;Bir Süre Belirtmelisin!]
$argsCheck[>2;Verilecek rolü etiketlemelisin!]
$argsCheck[>1;Rol verilecek kişiyi etiketlemelisin!]
$onlyPerms[admin;Yetkin Yok.]
`}