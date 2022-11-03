module.exports = [{
  name: "ösa",
  aliases: [""],
  code: `
  $title[Snors Code]
  $description[Kayıt Olmak için Tıkla!]
  $addButton[1;Kayıt Ol;success;kayitol;no;➕]
  `
},{
  name:"kayitol",
  prototype:"button",
  type:"interaction",
  code:`
  $interactionModal[Kayıt Ol;kayitModal;
  {actionRow:
     {textInput:Adın Nedir?:1:isimInput:yes:Furkan:5:25}
  {actionRow:
     {textInput:Kaç Yaşındasın?:1:yasInput:yes:19:1:2}
  }]
  `
  
  
},{
  name:"kayitModal",
  type:"interaction",
  prototype:"modal",
  code:`
  $giveRole[$guildID;$authorID;$getServerVar[uyerolid]]
  $changeNickname[$authorID;$textInputValue[isimInput] $textInputValue[yasInput];sa]
  $interactionReply[Başarıyla Kayıt Oldun!;;;;;yes]
  `
  
  
}]