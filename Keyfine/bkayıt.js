module.exports = [{
  name: "ösa",
  aliases: [""],
  code: `
  $title[Snors Code]
  $description[Kayıt Olmak için Tıkla!]
  $addButton[1;Kayıt Ol;success;kayitol;no]
  `
},{
  name:"kayitol",
  prototype:"button",
  type:"interaction",
  code:`
  $interactionModal[Kayıt Ol;kayitModal;
  {actionRow:
     {textInput:Adın Nedir?:1:isimInput:yes:Ahmet:5:25}
  
  
  }]
  `
  
  
}]