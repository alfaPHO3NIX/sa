const aoijs = require("aoi.js");  
const bot = new aoijs.Bot({
  token: process.env.token,
  prefix: "$getServerVar[prefix]",
  intents: "all",
})
const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd, "./komutlar/")
loader.load(bot.cmd, "./shopier/")

/////////callback/////////
bot.onMessage()

/////////variable////////
bot.variables({
presure: "0",
para: "0",
parasembol: "TL",
botadi: "xFrkn_",
prefix: "!",
})
//////komutlar////////
bot.command({
  name: "ping",
  code: `
Pingim \`$pingms\`
`,
})

bot.command({
name: "exec",
code: `
$exec[$message]
$onlyForIDs[$botOwnerID;YetkinYok]
`,
})

bot.interactionCommand({
  name: "satinal", 
  prototype: 'slash',
  code: `
  $interactionModal[Hello there!;satinall;
    {actionRow:
      {textInput:What's your name?:1:nameInput:yes:$username:3:30:$username}
    }
    {actionRow:
      {textInput:How old are you?:2:ageInput:no:13+:0:2}
    }
  ]
  `
});

bot.interactionCommand({
  name: "satinall",
  prototype: 'modal',
  code: `
  $interactionReply[Nice to meet you, **$textInputValue[nameInput]**. So you are $textInputValue[ageInput] years old.]
  `
});