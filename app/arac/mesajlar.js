// Bu dosya "Yakındakilere Mesaj" aracıdır: internet ve şebeke yokken yakındaki Hayat360
// kullanıcılarıyla mesajlaşma. Ekran açılınca telefon kendini duyurur ve çevredekileri arar;
// ekrandan çıkınca pil harcamasın diye durur. Ağın mantığı araclar/bluetooth.js dosyasındadır.

import { useState, useRef, useCallback } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Linking, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useFocusEffect } from 'expo-router';

import { yakinBaglantiKullanilabilirMi, agiBaslat, agiDurdur } from '../../araclar/bluetooth';
import { mesajGonder } from '../../araclar/mesajAgi';
import { izinlerVarMi, izinleriIste } from '../../araclar/bluetoothIzinleri';
import { yakinMesajlariOku, yakinMesajlariKaydet, acilKartiOku } from '../../araclar/depolama';
import { konumuAl } from '../../araclar/konum';
import { renkler, yaziBoyutlari, bosluklar } from '../../araclar/tema';

import SenaryoUstBar from '../../bilesenler/SenaryoUstBar';
import BaglantiDurumu from '../../bilesenler/BaglantiDurumu';
import MesajBalonu from '../../bilesenler/MesajBalonu';
import MesajGondermeAlani from '../../bilesenler/MesajGondermeAlani';
import BilgiKutusu from '../../bilesenler/BilgiKutusu';

const MESAJ_RENGI = '#0ED9C3';
const IZIN_ACIKLAMASI =
  'Yakındaki Hayat360 kullanıcılarını internetsiz bulmak için Bluetooth, yakındaki Wi-Fi cihazları ve konum ' +
  'iznine ihtiyacımız var. Konumun kimseyle paylaşılmaz; sadece sen “SOS + Konumum”a basınca mesaja eklenir.';

export default function MesajlarEkrani() {
  const router = useRouter();
  const [mesajlar, setMesajlar] = useState([]);
  const [durum, setDurum] = useState('kontrol'); // 'kontrol' | 'desteklenmiyor' | 'izinGerekli' | 'calisiyor' | 'hata'
  const [durumMesaji, setDurumMesaji] = useState('');
  const [ayarlaraGitmeli, setAyarlaraGitmeli] = useState(false);
  const [kisiSayisi, setKisiSayisi] = useState(0);
  const [sosHazirlaniyor, setSosHazirlaniyor] = useState(false);
  const [konumHatasi, setKonumHatasi] = useState('');

  const ekranAcik = useRef(false); // Ekran şu an görünüyor mu?
  const gonderenAdi = useRef('Hayat360 kullanıcısı'); // Profil'deki ad
  const kaydirici = useRef(null); // Mesaj listesini en alta kaydırmak için

  // Listeye bir mesaj ekler ve tüm listeyi telefona kaydeder
  function listeyeEkle(kayit) {
    setMesajlar((onceki) => {
      const yeniListe = [...onceki, kayit];
      yakinMesajlariKaydet(yeniListe);
      return yeniListe;
    });
  }

  // Duyurmayı ve aramayı başlatır
  async function agiAc(kayitliMesajlar) {
    setDurum('kontrol');
    const sonuc = await agiBaslat({
      ad: gonderenAdi.current,
      oncekiMesajIdleri: kayitliMesajlar.map((mesaj) => mesaj.id),
      mesajGelince: (mesaj) => listeyeEkle({ ...mesaj, benimMi: false }),
      kisiSayisiDegisince: setKisiSayisi,
    });
    if (!ekranAcik.current) {
      agiDurdur(); // Başlarken kullanıcı ekrandan çıktıysa hemen durdur
      return;
    }
    if (sonuc.basarili) {
      setDurum('calisiyor');
    } else {
      setDurum('hata');
      setDurumMesaji(sonuc.mesaj);
    }
  }

  // Ekran açılınca: kayıtlı mesajları oku, özellik kullanılabilir mi bak, izin varsa başlat
  async function hazirla() {
    const kayitliMesajlar = await yakinMesajlariOku();
    setMesajlar(kayitliMesajlar);
    const kart = await acilKartiOku();
    const ad = (kart.adSoyad || '').trim();
    gonderenAdi.current = ad !== '' ? ad : 'Hayat360 kullanıcısı';

    const kullanim = await yakinBaglantiKullanilabilirMi();
    if (!ekranAcik.current) return;
    if (!kullanim.kullanilabilir) {
      setDurum('desteklenmiyor');
      setDurumMesaji(kullanim.neden);
      return;
    }
    if (await izinlerVarMi()) {
      await agiAc(kayitliMesajlar);
    } else {
      setDurum('izinGerekli');
      setDurumMesaji(IZIN_ACIKLAMASI);
    }
  }

  // Ekran her göründüğünde başla, ekrandan çıkınca dur (pil tasarrufu)
  useFocusEffect(
    useCallback(() => {
      ekranAcik.current = true;
      hazirla();
      return () => {
        ekranAcik.current = false;
        agiDurdur();
      };
    }, [])
  );

  // Durum kutusundaki düğme: izin iste, tekrar dene ya da Ayarlar'ı aç
  async function durumDugmesineBasildi() {
    if (ayarlaraGitmeli) {
      Linking.openSettings();
      return;
    }
    if (durum === 'izinGerekli' || durum === 'hata') {
      const izin = await izinleriIste();
      if (izin.verildi) {
        await agiAc(mesajlar);
      } else {
        setDurum('hata');
        setDurumMesaji(izin.mesaj);
        setAyarlaraGitmeli(izin.ayarlaraGitmeli === true);
      }
    }
  }

  // Bir mesajı gönderir ve listeye "benim mesajım" olarak ekler
  function gonder(metin) {
    const { mesaj, ulasilanKisi } = mesajGonder(metin, gonderenAdi.current);
    listeyeEkle({ ...mesaj, benimMi: true, ulasilanKisi: ulasilanKisi });
  }

  // "SOS + Konumum": konumu al, harita bağlantısıyla gönder. Konum alınamazsa SOS yine de gider.
  async function sosGonder() {
    setKonumHatasi('');
    setSosHazirlaniyor(true);
    const konum = await konumuAl();
    setSosHazirlaniyor(false);
    if (konum.basarili) {
      gonder(
        'SOS! Yardıma ihtiyacım var. Konumum: ' + konum.enlem + ', ' + konum.boylam +
          ' https://maps.google.com/?q=' + konum.enlem + ',' + konum.boylam
      );
    } else {
      gonder('SOS! Yardıma ihtiyacım var. (Konumum alınamadı)');
      setKonumHatasi(konum.mesaj);
    }
  }

  // Durum kutusunun düğme yazısı
  let dugmeYazisi = null;
  if (durum === 'izinGerekli') dugmeYazisi = 'İzin Ver ve Başlat';
  if (durum === 'hata') dugmeYazisi = ayarlaraGitmeli ? 'Ayarları Aç' : 'Tekrar Dene';

  return (
    <SafeAreaView style={stiller.ekran} edges={['top', 'bottom']}>
      <KeyboardAvoidingView style={stiller.ekran} behavior="padding">
        <View style={stiller.ust}>
          <SenaryoUstBar kategoriAdi="Yakındakilere Mesaj" renk={MESAJ_RENGI}
            geriGit={() => (router.canGoBack() ? router.back() : router.replace('/'))} />
          <BaglantiDurumu durum={durum} kisiSayisi={kisiSayisi} mesaj={durumMesaji}
            dugmeYazisi={dugmeYazisi} dugmeyeBasinca={durumDugmesineBasildi} />
        </View>

        {/* Mesaj listesi: yeni mesaj gelince en alta kayar */}
        <ScrollView ref={kaydirici} style={stiller.liste} contentContainerStyle={stiller.listeIcerik}
          onContentSizeChange={() => kaydirici.current && kaydirici.current.scrollToEnd({ animated: true })}>
          {mesajlar.length === 0 ? (
            <Text style={stiller.bosMesaj}>
              Henüz mesaj yok. Aşağıdaki hazır mesajlardan birine dokunarak başlayabilirsin.
            </Text>
          ) : null}
          {mesajlar.map((mesaj) => (
            <MesajBalonu key={mesaj.id} mesaj={mesaj} />
          ))}
          {konumHatasi ? <BilgiKutusu renk={renkler.tehlike} yazi={konumHatasi} /> : null}
        </ScrollView>

        <MesajGondermeAlani gonder={gonder} sosGonder={sosGonder} sosHazirlaniyor={sosHazirlaniyor} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const stiller = StyleSheet.create({
  ekran: { flex: 1, backgroundColor: renkler.arkaPlan },
  ust: { paddingHorizontal: bosluklar.buyuk },
  liste: { flex: 1 },
  listeIcerik: { paddingHorizontal: bosluklar.buyuk, paddingVertical: bosluklar.orta },
  bosMesaj: { color: renkler.ikincilYazi, fontSize: yaziBoyutlari.normal, textAlign: 'center', marginTop: bosluklar.cokBuyuk },
});
