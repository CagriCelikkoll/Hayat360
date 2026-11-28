// Bu betik, kütüphanelerdeki bilinen paketleme hatalarını düzeltir. Uygulamanın parçası değildir.
// "npm install" bittiğinde kendiliğinden çalışır (package.json > scripts > postinstall); EAS sunucusunda da.
// Şu an tek yama: expo-nearby-connections paketinde unutulan android/fix-prefab.gradle dosyasını
// betikler/yamalar/ klasöründen node_modules içine kopyalar. Kütüphane düzeltilince bu betik silinebilir.

const fs = require('fs');
const path = require('path');

const projeKlasoru = path.join(__dirname, '..');
const kaynak = path.join(__dirname, 'yamalar', 'fix-prefab.gradle');
const hedefKlasor = path.join(projeKlasoru, 'node_modules', 'expo-nearby-connections', 'android');
const hedef = path.join(hedefKlasor, 'fix-prefab.gradle');

if (!fs.existsSync(hedefKlasor)) {
  // Kütüphane kurulu değilse yapacak bir şey yok (hata verme, kurulum devam etsin)
  console.log('[kutuphane-yamalari] expo-nearby-connections kurulu değil, yama atlandı.');
} else if (fs.existsSync(hedef) && !fs.readFileSync(hedef, 'utf8').includes('BİZİM DEĞİŞİKLİĞİMİZ')) {
  // Kütüphanenin yeni sürümü dosyayı kendisi getirdiyse ona dokunma
  console.log('[kutuphane-yamalari] fix-prefab.gradle kütüphanede zaten var, yama gerekmedi.');
} else {
  fs.copyFileSync(kaynak, hedef);
  console.log('[kutuphane-yamalari] expo-nearby-connections için fix-prefab.gradle eklendi.');
}
