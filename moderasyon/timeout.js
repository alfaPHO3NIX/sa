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
  $interactionModal[Zaman Aşımı;zuModal;
    {actionRow:
      {textInput:Zaman aşımı uygulanacak kişinin idsini giriniz.:1:aModal:yes:Kullanıcı ID:18:18}
    }
    {actionRow:
      {textInput:Uygulanacak zaman aşımı süresini giriniz.:2:zModal:no:13+:0:2}
    }
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