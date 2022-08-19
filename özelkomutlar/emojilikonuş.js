module.exports = {
  name: "e",
  aliases: ["emojilikonuş"],
  code: `
$deletecommand
$sendWebhook[$joinSplitText[;];$messageSlice[1]]$replaceText[$message;:bughunter:; $customEmoji[bughunter]]
`,
};
