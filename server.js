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

bot.command({
  name: "komutoluştur",
  code: `
  Created the sub-slash command successfully.
  
  $createApplicationCommand[$guildID;satinal;.;true;slash;[
    {
      "name": "mention", 
      "description": "Find user and ban them on the current server.", 
      "type": "SUB_COMMANDS", 
      "options": [
        { 
          "name": "user", 
          "description": "Mention an user.", 
          "required": true, 
          "type": "USER"
        },
        {
          "name": "reason", 
          "description": "Explain it with a few words.", 
          "required": false, 
          "type": "STRING"
        }
      ]
    }, 
    {
      "name": "id", 
      "description": "Type an user ID to ban them on the current server.", 
      "type": "SUB_COMMANDS", 
      "options": [
        {
          "name": "user", 
          "description": "Type the user ID.", 
          "required": true, 
          "type": "STRING"
        }, 
        {
          "name": "reason", 
          "description": "Explain it with a few words.", 
          "required": false, 
          "type": "STRING"
        }
      ] 
    }
  ]]
  `
});