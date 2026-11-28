// Bu dosya "Yakındakilere Mesaj" için gereken Android izinlerini kontrol eder ve ister.
// Yakındaki telefonları bulmak için Bluetooth (tarama, duyurma, bağlanma), yakındaki Wi-Fi cihazları
// ve konum izni gerekir. Hangi izinlerin isteneceği Android sürümüne göre değişir.

import { Platform, PermissionsAndroid } from 'react-native';

// Bu telefonun Android sürümüne göre istenmesi gereken izinlerin listesi
function gerekliIzinler() {
  const androidSurumu = Platform.Version; // Android'in "API seviyesi" (ör. Android 12 = 31)
  const izinler = [
    'android.permission.ACCESS_FINE_LOCATION', // Konum: eski Android'lerde Bluetooth taraması için şart
    'android.permission.ACCESS_COARSE_LOCATION',
  ];
  if (androidSurumu >= 31) {
    // Android 12 ve üstü: Bluetooth izinleri ayrı ayrı istenir
    izinler.push('android.permission.BLUETOOTH_SCAN'); // Yakındaki telefonları aramak
    izinler.push('android.permission.BLUETOOTH_ADVERTISE'); // Kendini yakındakilere duyurmak
    izinler.push('android.permission.BLUETOOTH_CONNECT'); // Bulunan telefona bağlanmak
  }
  if (androidSurumu >= 33) {
    // Android 13 ve üstü: Wi-Fi ile yakındaki cihazlara bağlanma izni
    izinler.push('android.permission.NEARBY_WIFI_DEVICES');
  }
  return izinler;
}

// İzin adını kullanıcının anlayacağı Türkçe ada çevirir (reddedilince hangisi eksik göstermek için)
function izinAdi(izin) {
  if (izin.includes('LOCATION')) return 'Konum';
  if (izin.includes('NEARBY_WIFI')) return 'Yakındaki Wi-Fi cihazları';
  return 'Yakındaki cihazlar (Bluetooth)';
}

// Tüm izinler daha önce verilmiş mi? (soru sormadan sadece bakar)
export async function izinlerVarMi() {
  if (Platform.OS !== 'android') {
    return false;
  }
  for (const izin of gerekliIzinler()) {
    const verildiMi = await PermissionsAndroid.check(izin);
    if (!verildiMi) {
      return false;
    }
  }
  return true;
}

// İzinleri ister. Sonuç: { verildi: true } ya da { verildi: false, mesaj: 'neden çalışmadığını anlatan yazı' }
export async function izinleriIste() {
  let sonuclar;
  try {
    sonuclar = await PermissionsAndroid.requestMultiple(gerekliIzinler());
  } catch (hata) {
    return { verildi: false, mesaj: 'İzinler istenemedi. Telefonunun Ayarlar bölümünden izinleri elle verebilirsin.' };
  }

  // Verilmeyen izinleri bul
  const eksikler = [];
  let birDahaSorulmayacak = false; // Kullanıcı "Bir daha sorma" dediyse sadece Ayarlar'dan açılabilir
  for (const izin of Object.keys(sonuclar)) {
    if (sonuclar[izin] !== PermissionsAndroid.RESULTS.GRANTED) {
      const ad = izinAdi(izin);
      if (!eksikler.includes(ad)) {
        eksikler.push(ad);
      }
      if (sonuclar[izin] === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        birDahaSorulmayacak = true;
      }
    }
  }

  if (eksikler.length === 0) {
    return { verildi: true };
  }
  let mesaj = 'Şu izinler verilmediği için yakındaki telefonlar bulunamıyor: ' + eksikler.join(', ') + '.';
  if (birDahaSorulmayacak) {
    mesaj += ' Telefonun Ayarlar > Uygulamalar > Hayat360 > İzinler bölümünden açabilirsin.';
  }
  return { verildi: false, mesaj: mesaj, ayarlaraGitmeli: birDahaSorulmayacak };
}
