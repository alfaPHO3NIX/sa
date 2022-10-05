module.exports = [{
  name: "satınal",
  aliases: ["buy"],
  code: `
  Seç
  $addSelectMenu[1;helpCustomID;This placeholder won't show up cause we have selected default field as yes;1;1;no;A Option:Description of A option:helpValue0:no:👋;B Option::helpValue1:yes]

  `
},{
  name:"helpCustomID",
  prototype:"selectmenu",
  code:`
  sa
  `
  
}]