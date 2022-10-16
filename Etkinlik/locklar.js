module.exports = {
  name: "locklar",
  aliases: ["locklarım"],
  code: `
$if[$message[1]==["MrB","mrb"];
Oldu

Olmadı]
 $title[$customEmoji[wl] | Locklar / Locklarım]
 $description[
 ** **
 $customEmoji[wl] **World Lock** : $numberSeparator[$getGlobalUserVar[wl]]
 $customEmoji[dl] **Diamond Lock**: $numberSeparator[$getGlobalUserVar[dl]]
 $customEmoji[elock] **Emerald Lock**: $numberSeparator[$getGlobalUserVar[elock]]
 $customEmoji[rl] **Royal Lock**: $numberSeparator[$getGlobalUserVar[rlock]]
 ** **
]

`
}