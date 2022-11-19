module.exports = {
name: "rozetler",
aliases: ['rozetlerim'],
code: `
$title[Tüm Rozetler]
$description[
$customEmoji[partner]Partner: $getGlobalUserVar[partnerrozet]\n
$customEmoji[bughunter]Bug Hunter: $getGlobalUserVar[bughunterrozet]\n
$customEmoji[premium]Premium Sahibi: $getGlobalUserVar[premiumsahibirozet]
\n$customEmoji[yetkili]Yetkili Ekibi: $getGlobalUserVar[yetkiliekibirozet]
\n$customEmoji[etkinlikkazanani]Etkinlik Kazananı: $getGlobalUserVar[etkinlikkazananırozet]
\n$customEmoji[verified] Onaylı Kişi: $getGlobalUserVar[onaylıkişirozet]
\n$customEmoji[kirmiziyildiz]Developer: $getGlobalUserVar[geliştiricirozet]
\n💰 Destekçi: $getGlobalUserVar[destekçirozet]
$color[RANDOM]
]
`
}