// Bu dosya yakındaki Hayat360 telefonlarının İNTERNETSİZ olarak birbirini bulup bağlanmasını sağlar.
// Telefonlar Google Nearby Connections ile (Bluetooth + Wi-Fi) birbirini bulur ve bağlanır.
// Gelen mesajla ne yapılacağı (iletme kuralı, mesh) araclar/mesajAgi.js'te; ekran app/arac/mesajlar.js'te.

import { Platform } from 'react-native';
import Constants, { ExecutionEnvironment } from 'expo-constants';
import { mesajAginiHazirla, mesajGeldi, rastgeleKimlik } from './mesajAgi';

// Telefonların duyurduğu ad şöyle görünür: "H360|kimlik|Ad". Kimlik, kimin bağlantı isteyeceğine
// karar vermek için kullanılır (aşağıda "baglanmayiDene" bölümüne bak).
const AYIRAC = '|';
const ONEK = 'H360';

// ---------------------------------------------------------------------------------------------
// KÜTÜPHANEYİ GÜVENLE YÜKLEME
// expo-nearby-connections telefona özel (yerel) kod içerir. Expo Go'da ve web'de bu kod yoktur.
// Kütüphaneyi en başta değil, gerektiğinde ve try/catch içinde yükleriz; yüklenemezse uygulama
// çökmez, ekran "Bu özellik yüklenen APK sürümünde çalışır" yazar.
// ---------------------------------------------------------------------------------------------

let kutuphane = null;

function kutuphaneyiYukle() {
  if (kutuphane) {
    return kutuphane;
  }
  try {
    kutuphane = require('expo-nearby-connections');
  } catch (hata) {
    kutuphane = null;
  }
  return kutuphane;
}

// Bu telefonda yakın mesajlaşma çalışabilir mi? Sonuç: { kullanilabilir: true } ya da { kullanilabilir: false, neden }
export async function yakinBaglantiKullanilabilirMi() {
  const apkMesaji = 'Bu özellik yüklenen APK sürümünde çalışır.';
  if (Platform.OS !== 'android') {
    return { kullanilabilir: false, neden: apkMesaji + ' (Sunumda iki Android telefon kullanılır.)' };
  }
  if (Constants.executionEnvironment === ExecutionEnvironment.StoreClient) {
    return { kullanilabilir: false, neden: apkMesaji + ' Expo Go’da bu özellik yoktur.' };
  }
  const yakin = kutuphaneyiYukle();
  if (!yakin) {
    return { kullanilabilir: false, neden: apkMesaji };
  }
  try {
    const servislerVarMi = await yakin.isPlayServicesAvailable();
    if (!servislerVarMi) {
      return { kullanilabilir: false, neden: 'Bu telefonda Google Play Hizmetleri yok veya güncel değil; yakın bağlantı çalışmaz.' };
    }
  } catch (hata) {
    return { kullanilabilir: false, neden: apkMesaji };
  }
  return { kullanilabilir: true };
}

// ---------------------------------------------------------------------------------------------
// AĞIN DURUMU (uygulama açıkken bellekte tutulur)
// ---------------------------------------------------------------------------------------------

const oturumKimligi = rastgeleKimlik(); // Bu telefonun bu oturumdaki rastgele kimliği
let bulunanCihazlar = {}; // Bulduğumuz telefonlar:    { peerId: { kimlik, ad } }
let bagliCihazlar = {}; //   Bağlı olduğumuz telefonlar: { peerId: ad }
let bekleyenIstekler = {}; // Bağlanma isteği yolladıklarımız: { peerId: istek zamanı }
let dinleyicileriKaldir = []; // Ekrandan çıkınca dinlemeyi bırakmak için
let yenidenDenemeZamanlayicisi = null;
let kisiSayisiDegisince = () => {};

// "H360|kimlik|Ad" yazısını parçalarına ayırır. Hayat360'tan değilse null döner.
function duyuruAdiniCoz(duyuruAdi) {
  const parcalar = (duyuruAdi || '').split(AYIRAC);
  if (parcalar.length < 3 || parcalar[0] !== ONEK) {
    return null;
  }
  return { kimlik: parcalar[1], ad: parcalar.slice(2).join(' ') };
}

function kisiSayisiniBildir() {
  kisiSayisiDegisince(Object.keys(bagliCihazlar).length);
}

// ---------------------------------------------------------------------------------------------
// BAĞLANMA
// İki telefon da hem duyurur hem arar; yani ikisi de birbirini bulur. İkisi aynı anda bağlanma
// isteği yollarsa istekler çakışır. Bunu önlemek için basit bir kural koyduk:
// "Kimliği alfabetik olarak KÜÇÜK olan telefon arar, büyük olan bekler ve isteği kabul eder."
// ---------------------------------------------------------------------------------------------

function baglanmayiDene(peerId) {
  const cihaz = bulunanCihazlar[peerId];
  if (!cihaz || bagliCihazlar[peerId] || bekleyenIstekler[peerId]) {
    return; // Zaten bağlıyız ya da isteğimiz yolda
  }
  if (!(oturumKimligi < cihaz.kimlik)) {
    return; // Kimliğim büyük: karşı taraf beni arayacak, ben beklerim
  }
  bekleyenIstekler[peerId] = Date.now();
  kutuphane.requestConnection(peerId).catch(() => {
    delete bekleyenIstekler[peerId]; // Olmadı; bir sonraki denemede tekrar dener
  });
}

// Birkaç saniyede bir: cevapsız kalan istekleri sil ve bağlanamadığımız telefonları tekrar dene
function yenidenDene() {
  const simdi = Date.now();
  for (const peerId of Object.keys(bekleyenIstekler)) {
    if (simdi - bekleyenIstekler[peerId] > 15000) {
      delete bekleyenIstekler[peerId]; // 15 saniyede bağlanmadıysa istek kaybolmuş sayılır
    }
  }
  for (const peerId of Object.keys(bulunanCihazlar)) {
    baglanmayiDene(peerId);
  }
}

// ---------------------------------------------------------------------------------------------
// MESAJ GÖNDERME
// Mesaj gelince ne yapılacağı (iletme kuralı) araclar/mesajAgi.js dosyasında anlatılıyor.
// ---------------------------------------------------------------------------------------------

// Bir mesajı bağlı telefonlara yollar ("haricPeerId" olana yollamaz). Kaç telefona yolladığını döner.
function herkeseGonder(mesaj, haricPeerId) {
  if (!kutuphane) {
    return 0; // Expo Go / web: gönderilecek kimse yok
  }
  const yazi = JSON.stringify(mesaj); // Mesaj nesnesi yazıya çevrilip gönderilir
  let sayi = 0;
  for (const peerId of Object.keys(bagliCihazlar)) {
    if (peerId !== haricPeerId) {
      kutuphane.sendText(peerId, yazi).catch(() => {}); // Biri başarısız olsa da diğerleri gitsin
      sayi = sayi + 1;
    }
  }
  return sayi;
}

// ---------------------------------------------------------------------------------------------
// BAŞLAT / DURDUR
// ---------------------------------------------------------------------------------------------

// Duyurmayı ve aramayı başlatır. Sonuç: { basarili: true } ya da { basarili: false, mesaj }
// ad: Profil'deki ad; oncekiMesajIdleri: kayıtlı mesajların kimlikleri (tekrar gösterilmesinler diye)
export async function agiBaslat({ ad, oncekiMesajIdleri, mesajGelince, kisiSayisiDegisince: kisiSayisiDegisinceFonksiyonu }) {
  const yakin = kutuphaneyiYukle();
  if (!yakin) {
    return { basarili: false, mesaj: 'Bu özellik yüklenen APK sürümünde çalışır.' };
  }
  // Ekranın kişi sayısı fonksiyonunu sakla; mesaj ağına gönderme yöntemini ve ekranı tanıt
  kisiSayisiDegisince = kisiSayisiDegisinceFonksiyonu;
  mesajAginiHazirla({ gonderici: herkeseGonder, mesajGelince, oncekiMesajIdleri });

  const temizAd = ad.split(AYIRAC).join(' ').slice(0, 30);
  const duyuruAdi = ONEK + AYIRAC + oturumKimligi + AYIRAC + temizAd;

  // Olayları dinle
  dinleyicileriKaldir = [
    yakin.onPeerFound(({ peerId, name }) => {
      const cihaz = duyuruAdiniCoz(name);
      if (!cihaz) return;
      bulunanCihazlar[peerId] = cihaz;
      baglanmayiDene(peerId);
    }),
    yakin.onPeerLost(({ peerId }) => {
      delete bulunanCihazlar[peerId];
    }),
    // Biri bize bağlanmak isterse: acil durum uygulaması olduğu için kullanıcıya sormadan kabul et
    yakin.onInvitationReceived(({ peerId }) => {
      yakin.acceptConnection(peerId).catch(() => {});
    }),
    yakin.onConnected(({ peerId, name }) => {
      const cihaz = duyuruAdiniCoz(name);
      bagliCihazlar[peerId] = cihaz ? cihaz.ad : 'Hayat360 kullanıcısı';
      delete bekleyenIstekler[peerId];
      kisiSayisiniBildir();
    }),
    yakin.onDisconnected(({ peerId }) => {
      delete bagliCihazlar[peerId];
      delete bekleyenIstekler[peerId];
      kisiSayisiniBildir();
    }),
    yakin.onTextReceived(({ peerId, text }) => mesajGeldi(peerId, text)),
  ];

  // P2P_CLUSTER: her telefon birden çok telefona hem bağlanabilir hem bağlantı kabul edebilir.
  // Mesh için gereken budur. (P2P_STAR'da bir "merkez" telefon olur, diğerleri sadece ona bağlanır;
  // merkez giderse ağ dağılır. P2P_POINT_TO_POINT ise sadece iki telefonu bağlar.)
  try {
    await yakin.startAdvertise(duyuruAdi, yakin.Strategy.P2P_CLUSTER); // "Ben buradayım" de
    await yakin.startDiscovery(duyuruAdi, yakin.Strategy.P2P_CLUSTER); // Etrafta kim var, ara
  } catch (hata) {
    await agiDurdur();
    return {
      basarili: false,
      mesaj: 'Yakındaki telefonlar aranamadı. Bluetooth’un ve konumun açık olduğundan emin olup tekrar dene.',
    };
  }

  yenidenDenemeZamanlayicisi = setInterval(yenidenDene, 8000); // 8 saniyede bir yeniden dene
  kisiSayisiniBildir();
  return { basarili: true };
}

// Duyurmayı, aramayı ve tüm bağlantıları durdurur (ekrandan çıkınca pil harcamasın diye)
export async function agiDurdur() {
  dinleyicileriKaldir.forEach((kaldir) => kaldir());
  dinleyicileriKaldir = [];
  clearInterval(yenidenDenemeZamanlayicisi);
  yenidenDenemeZamanlayicisi = null;
  if (kutuphane) {
    try {
      await kutuphane.stopAdvertise();
      await kutuphane.stopDiscovery();
      await kutuphane.disconnect(); // Kimlik verilmezse tüm bağlantıları kapatır
    } catch (hata) {
      // Durdururken çıkan hata önemli değil; zaten kapatıyoruz
    }
  }
  bulunanCihazlar = {};
  bagliCihazlar = {};
  bekleyenIstekler = {};
  kisiSayisiDegisince(0);
}
