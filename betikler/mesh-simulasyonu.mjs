// Bu betik, "Yakındakilere Mesaj"daki mesaj ağının (mesh) nasıl çalıştığını BİLGİSAYARDA gösterir.
// Uygulamanın GERÇEK kodunu (araclar/bluetooth.js ve araclar/mesajAgi.js) 6 sanal telefonda çalıştırır;
// sadece Bluetooth kısmı sahtedir: telefonlar bir sıraya dizilir ve her biri yalnızca yanındakine "yetişir".
// Jüriye göstermek için: proje klasöründe  node betikler/mesh-simulasyonu.mjs  yaz. (Uygulamanın parçası değildir.)

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projeKlasoru = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

// --------------------------------------------------------------------------------------------
// 1) Uygulamanın gerçek dosyalarını oku. "import/export" satırlarını, Node'da ayrı ayrı
//    çalıştırabilmek için sadeleştiriyoruz; kodun geri kalanına dokunmuyoruz.
// --------------------------------------------------------------------------------------------
function dosyayiHazirla(dosyaYolu) {
  return fs.readFileSync(path.join(projeKlasoru, dosyaYolu), 'utf8')
    .replace(/^import .*$/gm, '')
    .replace(/export async function/g, 'async function')
    .replace(/export function/g, 'function')
    .replace(/export const/g, 'const');
}
const bluetoothKodu = dosyayiHazirla('araclar/bluetooth.js');
const mesajAgiKodu = dosyayiHazirla('araclar/mesajAgi.js');

// --------------------------------------------------------------------------------------------
// 2) Sahte "hava": telefonlar arasındaki Bluetooth yerine geçen basit bir kuyruk.
//    Bir telefon bir şey yollayınca kuyruğa girer; sırayla karşı telefona teslim edilir.
// --------------------------------------------------------------------------------------------
const telefonlar = {}; // ad -> { ad, kutuphane, uygulama, gorduklerim }
const kuyruk = [];
let simdiTeslimAlan = null; // Şu an mesajı işleyen telefon (iletme listesini toplamak için)
let iletilenler = []; // O telefonun bu sırada ilettiği telefonlar
let toplamGonderim = 0;

function sahteKutuphane(benimAdim) {
  const dinleyici = {};
  const dinle = (olay) => (fonksiyon) => { dinleyici[olay] = fonksiyon; return () => delete dinleyici[olay]; };
  return {
    dinleyici,
    Strategy: { P2P_CLUSTER: 1 },
    isPlayServicesAvailable: async () => true,
    onPeerFound: dinle('bulundu'), onPeerLost: dinle('kayboldu'), onInvitationReceived: dinle('davet'),
    onConnected: dinle('baglandi'), onDisconnected: dinle('koptu'), onTextReceived: dinle('yazi'),
    startAdvertise: async (duyuruAdi) => { telefonlar[benimAdim].duyuruAdi = duyuruAdi; return duyuruAdi; },
    startDiscovery: async (duyuruAdi) => duyuruAdi,
    stopAdvertise: async () => {}, stopDiscovery: async () => {}, disconnect: async () => {},
    requestConnection: async (hedef) => {
      kuyruk.push(() => telefonlar[hedef].kutuphane.dinleyici.davet({ peerId: benimAdim, name: telefonlar[benimAdim].duyuruAdi }));
    },
    acceptConnection: async (hedef) => {
      kuyruk.push(() => {
        telefonlar[benimAdim].kutuphane.dinleyici.baglandi({ peerId: hedef, name: telefonlar[hedef].duyuruAdi });
        telefonlar[hedef].kutuphane.dinleyici.baglandi({ peerId: benimAdim, name: telefonlar[benimAdim].duyuruAdi });
      });
    },
    sendText: async (hedef, yazi) => {
      toplamGonderim = toplamGonderim + 1;
      if (simdiTeslimAlan) iletilenler.push(hedef);
      kuyruk.push(() => teslimEt(benimAdim, hedef, yazi));
    },
  };
}

// İsme "-den/-dan/-ten/-tan" ekini doğru ekler (Ayşe'den, Burak'tan, Can'dan, Elif'ten)
function denEki(ad) {
  const kucuk = ad.toLocaleLowerCase('tr');
  const sesliler = kucuk.match(/[aıoueiöü]/g) || ['e'];
  const sonSesli = sesliler[sesliler.length - 1];
  const kalinMi = 'aıou'.includes(sonSesli); // Son sesli kalınsa "a", inceyse "e"
  const sertMi = 'fstkçşhp'.includes(kucuk[kucuk.length - 1]); // Sert ünsüzle bitiyorsa "t"
  return ad + "'" + (sertMi ? 't' : 'd') + (kalinMi ? 'an' : 'en');
}

// Mesajı hedef telefona verir ve olanı Türkçe anlatır
function teslimEt(gonderen, alan, yazi) {
  const telefon = telefonlar[alan];
  const oncekiSayi = telefon.gorduklerim.length;
  simdiTeslimAlan = alan;
  iletilenler = [];
  telefon.kutuphane.dinleyici.yazi({ peerId: gonderen, text: yazi }); // Gerçek mesajAgi.js kodu burada çalışır
  simdiTeslimAlan = null;

  if (telefon.gorduklerim.length === oncekiSayi) {
    satir(`   ${alan}, ${denEki(gonderen)} gelen kopyayı aldı ama bu mesajı ZATEN GÖRMÜŞTÜ → yok saydı`);
    return;
  }
  const mesaj = telefon.gorduklerim[telefon.gorduklerim.length - 1];
  const nasil = mesaj.sekmeSayisi === 0 ? 'doğrudan' : `${mesaj.sekmeSayisi} telefon üzerinden`;
  let devami;
  if (iletilenler.length > 0) devami = `→ iletti: ${iletilenler.join(', ')}`;
  else if (mesaj.sekmeSayisi >= 3) devami = '→ sınıra (3) ulaştı, artık İLETMİYOR';
  else devami = '→ iletecek başka telefon yok';
  satir(`   ${alan} aldı (${nasil}) ${devami}`);
}

async function kuyrukBitsin() {
  while (kuyruk.length > 0) {
    kuyruk.shift()();
    await Promise.resolve(); // Uygulama kodundaki bekleyen işler bitsin
  }
}

// --------------------------------------------------------------------------------------------
// 3) Sanal telefonları kur: her birinde uygulamanın kendi kodunun ayrı bir kopyası çalışır
// --------------------------------------------------------------------------------------------
async function telefonKur(ad) {
  const kutuphane = sahteKutuphane(ad);
  const mesajAgi = new Function(mesajAgiKodu + '\nreturn { mesajAginiHazirla, mesajGeldi, rastgeleKimlik, mesajGonder };')();
  const bluetooth = new Function(
    'Platform', 'Constants', 'ExecutionEnvironment', 'require', 'setInterval', 'clearInterval',
    'mesajAginiHazirla', 'mesajGeldi', 'rastgeleKimlik',
    bluetoothKodu + '\nreturn { agiBaslat, agiDurdur };'
  )(
    { OS: 'android' }, { executionEnvironment: 'standalone' }, { StoreClient: 'storeClient' },
    () => kutuphane, () => 0, () => {},
    mesajAgi.mesajAginiHazirla, mesajAgi.mesajGeldi, mesajAgi.rastgeleKimlik
  );
  const telefon = { ad, kutuphane, gorduklerim: [], mesajGonder: mesajAgi.mesajGonder };
  telefonlar[ad] = telefon;
  await bluetooth.agiBaslat({
    ad: ad,
    oncekiMesajIdleri: [],
    mesajGelince: (mesaj) => telefon.gorduklerim.push(mesaj),
    kisiSayisiDegisince: () => {},
  });
}

// İki telefon birbirinin menziline girer (ikisi de diğerini "bulur")
function yanYanaKoy(ad1, ad2) {
  telefonlar[ad1].kutuphane.dinleyici.bulundu({ peerId: ad2, name: telefonlar[ad2].duyuruAdi });
  telefonlar[ad2].kutuphane.dinleyici.bulundu({ peerId: ad1, name: telefonlar[ad1].duyuruAdi });
}

async function gonder(ad, metin) {
  toplamGonderim = 0;
  const { ulasilanKisi } = telefonlar[ad].mesajGonder(metin, ad);
  satir(`   ${ad} "${metin}" yazdı ve yanındaki ${ulasilanKisi} telefona gönderdi`);
  await kuyrukBitsin();
}

function satir(yazi) { console.log(yazi); }
function baslik(yazi) { console.log('\n' + yazi + '\n' + '-'.repeat(yazi.length)); }

// --------------------------------------------------------------------------------------------
// 4) GÖSTERİ
// --------------------------------------------------------------------------------------------
const kisiler = ['Ayşe', 'Burak', 'Can', 'Deniz', 'Elif', 'Fatma'];
for (const ad of kisiler) {
  await telefonKur(ad);
}

baslik('1) Telefonlar bir sokak boyunca sıraya dizildi');
satir('   ' + kisiler.join(' ─── '));
satir('   Her telefon sadece yanındakine yetişiyor (ör. Ayşe, Can\'a yetişemiyor).');
for (let i = 0; i < kisiler.length - 1; i++) {
  yanYanaKoy(kisiler[i], kisiler[i + 1]);
}
await kuyrukBitsin();
satir('   Uygulamalar birbirini buldu ve kimseye sormadan otomatik bağlandı.');

baslik('2) Ayşe yardım istiyor');
await gonder('Ayşe', 'Yaralıyım');
satir('   Sonuç: Mesaj Ayşe\'nin telefonunun yetişmediği Elif\'e kadar ulaştı.');
satir('   Fatma\'ya gitmedi, çünkü mesaj en fazla 3 telefon üzerinden iletilir (pil boşa harcanmasın diye).');

baslik('3) Döngü testi: Burak ile Deniz de birbirine yetişiyor');
yanYanaKoy('Burak', 'Deniz');
await kuyrukBitsin();
satir('   Artık Burak, Can ve Deniz bir üçgen oluşturuyor; aynı mesaj iki farklı yoldan gelebilir.');
await gonder('Elif', 'Güvendeyim');
satir(`   Sonuç: Kopyalar "zaten gördüm" kuralıyla durduruldu; toplam ${toplamGonderim} gönderim yapıldı ve döngü oluşmadı.`);

baslik('Özet');
for (const ad of kisiler) {
  const gordukleri = telefonlar[ad].gorduklerim.map((m) => `"${m.metin}" (${m.gonderen})`);
  satir(`   ${ad.padEnd(6)} ekranında: ${gordukleri.length ? gordukleri.join(', ') : '(gelen mesaj yok)'}`);
}
satir('\n   Kural 1: Görmediğin mesajı ekrana yaz ve getiren telefon dışındakilere ilet.');
satir('   Kural 2: Her iletmede sekme sayısı 1 artar; 3 olunca iletme biter.');
satir('   Kural 3: Her mesajın benzersiz bir kimliği var; aynı mesaj ikinci kez gelirse yok sayılır.\n');
