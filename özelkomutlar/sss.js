module.exports = [{
  name: "deneme",
  aliases: ["sa"],
  code: `
Dene krşm
$addButton[1;Sea;success;sea_$authorID;no]
`
},{
type:"interaction",
prototype:"button",
code:`
$interactionModal[CM eleştirici;bbModal;
    {actionRow:
      {textInput:Kaç CM AB Adı:1:ddModal:yes:Cm yaz ab:3:30}
    }]
$onlyif[$get[authorID]==$interactionData[author.id];{

"content" : "Bu Butonu Sadece Komutu Kullanan Kişi Basabilir",

"ephemeral" : true,

"options" : { "interaction" : true }

}]

$onlyIf[$get[customId]==sea;]

$let[authorID;$splitText[2]]

$let[customId;$splitText[1]] 

$textSplit[$interactionData[customId];_;1]
`
},{
name:"bbModal",
type:"interaction",
prototype:"modal",
code: `
$interactionReply[Hmm... $textInputValue[oModal] cm iyi iyi dmmdmdmdmdmödmd]
`

}
]