module.exports = {
name: "günlük",
aliases: ['daily','günlükpara'],
code: `
$title[Başarılı]
$description[\nHesabınıza $getUserVar[gunlukgelenpara] $getVar[parasembol] eklendi]
$globalCooldown[$getVar[gunlukparacooldown];Bu komutu $getCooldownTime sonra kullanabilirsin]
$setGlobalUserVar[para;$sum[$getUserVar[gunlukgelenpara];$getGlobalUserVar[para]]
$setUserVar[gunlukgelenpara;$random[500;5000]]
`
}

//Gereken Değişkenler\\
//- gunlukgelenpara
// Min Değer= 0
//- gunlukparacooldown
// Min Değer= 0s [Sonuna Zaman Terimi Koyun.]
//-
//-
//-

