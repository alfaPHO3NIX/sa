module.exports = {
name:"sürelirol",
code:`
$takeRole[$guildID;$mentioned[1];$mentionedRoles[1]]
$wait[$message[3]]
$channelSendMessage[$channelID;{newEmbed:
{title:Başarılı!}
{description:
Verilen Rol
<@&$mentionedRoles[1]>

Rolü Veren Yetkili
<@$authorID>

Rolü Verilen Kişi
<@$mentioned[1]>

Süre
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[3];y; Yıl];d; Gün];h; Saat];m; Dakika];s; Saniye]
}
{color:RANDOM}}]
$giveRole[$guildID;$mentioned[1];$mentionedRoles[1]]
$onlyIf[$checkContains[$noMentionMessage[1];s;m;h;d;w]!=false;**<@$authorID> Lütfen Bir Zaman Dilimi Belirt**]
$onlyIf[$findRole[$mentionedRoles[1]]!=;<@$authorID> Lütfen Bir Rol Etiketle]
$onlyIf[$mentioned[1;no]!=undefined;**<@$authorID> Lütfen Bir Kişi Etiketle**]
`
}