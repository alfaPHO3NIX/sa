module.exports = [{
name: "yardım",
aliases: ['help'],
code: `
$title[$customEmoji[kitap] Yardım $customEmoji[kitap]]
$description[Seçiniz.]
$addSelectMenu[1;help;Seçiniz...;1;1;no;Ekonomi Komutları:Ekonomi komutlarını gösterir.:helpValue0:no:💎]
`
},{
  name:"help",
  type:"interaction",
  prototype:"selectMenu",
  code:`
 ee
 `
}]