module.exports = [{
  name: "timeout",
  aliases: ["zamanaşımı","t"],
  code: `
  $title[Zaman Aşımı]
  $description[Seçiniz.]
  $addButton[1;Aşım Uygula;primary;asimuygula_$authorID;no;⏱️]
  
  `
},{
  prototype:"button",
  type:"interaction",
  code:`
  $interactionModal[Özel Oda Oluştur;sModal;
    {actionRow:
      {textInput:Özel Oda Adı:1:oModal:yes:Oda Adı:18:18}
    }
    {actionRow:
      {textInput:Kişiye uygulanacak süreyi yazınız:2:zuModal:yes}
      ]
  $onlyif[$get[authorID]==$interactionData[author.id];{
"content" : "Bu Butonu Sadece Komutu Kullanan Kişi Basabilir",
"ephemeral" : true,
"options" : { "interaction" : true }
}]
$onlyIf[$get[customId]==asimuygula;]
$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_;1]
  `
},{
  name:"zuModal",
  type:"interaction",
  prototype:"modal",
  code:`
  sa
  
  `
  
  
}]