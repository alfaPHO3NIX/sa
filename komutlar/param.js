module.exports = {
name: "param",
code: `
$title[$getVar[botadi]]
$description[** **
Mevcut $getVar[parasembol]: $numberSeperator[$getGlobalUserVar[para;$mentioned[1;yes]]]
** **]
$footer[Bakiyesi Gösterilen Kişi: $userTag[$mentioned[1]]
$color[RANDOM]
`
}