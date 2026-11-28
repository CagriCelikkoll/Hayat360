// Bu dosya "Konumumu Gönder" özelliğinin mantığını içerir:
// GPS ile konumu alır (GPS internetsiz de çalışır) ve acil kişilere gönderilecek SMS'i hazırlar.
// Her adım bir "sonuç" nesnesi döndürür; ekran bu sonuca göre kullanıcıya mesaj gösterir.

import * as Location from 'expo-location';
import * as SMS from 'expo-sms';
import { acilKisileriOku } from './depolama';

// Konum izninin şu anki durumunu öğrenir: 'granted' (verildi), 'denied' (reddedildi), 'undetermined' (hiç sorulmadı)
export async function konumIzniDurumu() {
  try {
    const izin = await Location.getForegroundPermissionsAsync();
    return izin.status;
  } catch (hata) {
    return 'undetermined';
  }
}

// SMS metnini oluşturur
export function konumMesajiOlustur(enlem, boylam) {
  return (
    'ACİL! Yardıma ihtiyacım var. Konumum: ' +
    enlem + ', ' + boylam +
    ' https://maps.google.com/?q=' + enlem + ',' + boylam +
    ' - Hayat360'
  );
}

// Profil'de kayıtlı acil kişileri okuyup "SMS alıcıları: Annem (0555...), ..." yazısını hazırlar.
// Ana Sayfa bu yazıyı göstererek SMS'in kime hazırlanacağını önceden söyler.
export async function smsAlicilariYazisi() {
  const kisiler = await acilKisileriOku();
  const telefonuOlanlar = kisiler.filter((kisi) => kisi.telefon);
  if (telefonuOlanlar.length === 0) {
    return 'Kayıtlı acil kişi yok; SMS alıcısız açılır. Profil’den acil kişi ekleyebilirsin.';
  }
  const isimler = telefonuOlanlar.map((kisi) => (kisi.ad ? kisi.ad + ' (' + kisi.telefon + ')' : kisi.telefon));
  return 'SMS alıcıları: ' + isimler.join(', ');
}

// İzin ister ve GPS ile konumu alır. "Konumumu Gönder" ve Mesajlar'daki "SOS + Konumum" bunu kullanır.
// Sonuç: { basarili: true, enlem: '40.123456', boylam: '29.123456' } ya da { basarili: false, mesaj: '...' }
export async function konumuAl() {
  // 1) Konum izni iste
  let izin;
  try {
    izin = await Location.requestForegroundPermissionsAsync();
  } catch (hata) {
    return { basarili: false, mesaj: 'Konum izni istenemedi. Bu cihazda konum özelliği kullanılamıyor olabilir.' };
  }
  if (izin.status !== 'granted') {
    return {
      basarili: false,
      mesaj: 'Konum izni verilmedi. Konumunu gönderebilmek için telefonun Ayarlar > Uygulamalar bölümünden Hayat360’a konum izni verebilirsin.',
    };
  }

  // 2) GPS ile konumu al
  try {
    const konum = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
    // Virgülden sonra 6 basamak yeterince hassastır (yaklaşık 10 cm)
    return {
      basarili: true,
      enlem: konum.coords.latitude.toFixed(6),
      boylam: konum.coords.longitude.toFixed(6),
    };
  } catch (hata) {
    return {
      basarili: false,
      mesaj: 'Konum alınamadı. Telefonun konum (GPS) ayarının açık olduğundan emin ol; mümkünse açık bir alana çıkıp tekrar dene.',
    };
  }
}

// Konumu alıp SMS ekranını açar. Sonuç: { basarili: true/false, mesaj: 'kullanıcıya gösterilecek yazı' }
export async function konumumuGonder() {
  // 1-2) İzin iste ve GPS ile konumu al
  const konumSonucu = await konumuAl();
  if (!konumSonucu.basarili) {
    return konumSonucu;
  }
  const enlem = konumSonucu.enlem;
  const boylam = konumSonucu.boylam;

  const smsMetni = konumMesajiOlustur(enlem, boylam);
  const konumYazisi = 'Konumun: ' + enlem + ', ' + boylam;

  // 3) Bu cihaz SMS gönderebiliyor mu?
  let smsVar = false;
  try {
    smsVar = await SMS.isAvailableAsync();
  } catch (hata) {
    smsVar = false;
  }
  if (!smsVar) {
    return { basarili: false, mesaj: 'Bu cihazda SMS gönderilemiyor. ' + konumYazisi };
  }

  // 4) Acil kişileri oku ve SMS ekranını aç
  const kisiler = await acilKisileriOku();
  const numaralar = kisiler.map((kisi) => kisi.telefon).filter((telefon) => telefon); // Telefonu boş olanları atla

  try {
    await SMS.sendSMSAsync(numaralar, smsMetni);
  } catch (hata) {
    return { basarili: false, mesaj: 'SMS ekranı açılamadı. ' + konumYazisi };
  }

  if (numaralar.length === 0) {
    return {
      basarili: true,
      mesaj: 'SMS ekranı alıcısız açıldı; alıcıyı SMS uygulamasında seçebilirsin. ' + konumYazisi,
    };
  }
  return { basarili: true, mesaj: 'SMS ekranı açıldı. Göndermek için SMS uygulamasında Gönder’e bas. ' + konumYazisi };
}
