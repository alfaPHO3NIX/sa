module.exports = [{
  type:"interaction",
  prototype:"slash",
  name:"stats",
  code: `
  $interactionUpdate[**
  $sendMessage[{newEmbed:
  {title:İstatistikler}
  {description:
  **Bot İstatistikleri**
  Ram: $ram
  }}
  ]
  ]
  `

}]