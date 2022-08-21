module.exports = {
name: "a",
code: `
$sendWebhook[$eval[$replaceText[$createWebhook[$channelID;$username;$authorAvatar];;;]];$message]

`
}