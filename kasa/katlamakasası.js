module.exports = {
  name: "katlamakasası",
  code: `
$if[$random[1;4]==0;
$title[Tebrikler! Kazandın]
$description[Çok Şanslısın! Kazandın
Bahis Koyduğun Miktar: $getUserVar[katlamakasasicarpan]];
$title[Kaybettin :(]
$description[Üzgünüm,maalesef kaybbetin
Bahis Koyduğun Miktar: $getUserVar[katlamakasasicarpan]]
]



$setUserVar[katlamakasasicarpan;$noMentionMessage[1]]
$onlyIf[$isNumber[$message[1]]!=false;Bir Sayı Belirt]
`,
};
