module.exports = {
name: "prerolal",
aliases: ['premiumrolal'],
code: `
s
$onlyForServers[688736441290719256;Bu Komut Sadece **TG MC** adlı sunucuda kullanılabilir$customEmoji[reddet]]
$onlyIf[$hasRoles[688736441290719256;$authorID;]]
$onlyIf[$getGlobalUserVar[premium]==Var;Bu Özellik Premium Üyelere Özeldir$customEmoji[reddet]]
`}