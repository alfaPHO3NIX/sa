module.exports = {
name: "paraver",
code: `
$mentioned[1] adlı kullanıcıya $noMentionMessage[1] $getGlobalVar[parasembol] gönderildi!
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$mentioned[1]];$no]]
`}