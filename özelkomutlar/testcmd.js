module.exports = {
name: "a",
code: `
$sendWebhook[$replaceText[$createWebhook[$channelID;$username;$authorAvatar]; , ;;;];$message]

`
}