module.exports = {
name: "param",
code: `
$title[$getVar[botadi]]
$description[** **
Mevcut $getVar[parasembol]: $getGlobalUserVar[para]
** **]
$footer[Bakiyesi Gösterilen Kişi: <@$mentioned[1;yes]>]
$color[RANDOM]
`
}