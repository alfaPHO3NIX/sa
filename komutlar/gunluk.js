module.exports = {
name: "günlük",
aliases: ['daily','günlükpara'],
code: `
$title[Başarılı]
$description[\nHesabınıza $getUserVar[gunlukgelenpara] $getVar[parasembol] eklendi]
$setGlobalUserVar[para;$sum[$getUserVar[gunlukgelenpara];$getGlobalUserVar[para]]
$setUserVar[gunlukgelenpara;$random[500;5000]]
$globalCooldown[$getGlobalUserVar[gunlukparacooldown];Bu komutu $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[gunlukparacooldown];y; Yıl];d; Gün];h; Saat];m; Dakika];s; Saniye] sonra kullanabilirsin]
`
}

//Gereken Değişkenler\\
//- gunlukgelenpara
// Min Değer= 0
//- gunlukparacooldown
// Min Değer= 0s [Sonuna Zaman Terimi Koyun.]
//[Teriml3]
//
//-

