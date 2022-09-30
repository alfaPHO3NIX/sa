module.exports = {
name: "tokatat",
code: `
$title[<@$mentioned[1]> Adlı kişiye ✋ tokat attın!]
$color[$random[1;999999]]
$description[

tokat atan kişi : <@$authorID>
]

$image[https://media.giphy.com/media/V3pRzhx8gElm9B2Lol/giphy.gif]

$footer[Made By xFurkan]
$onlyIf[$mentioned[1]!=undefined;Kime tokat atıcaksın? havaya tokat atamazsın 😄]

`
};