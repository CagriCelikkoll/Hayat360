// Bu dosya "Ana Sayfa" sekmesidir.
// Üstte başlık ve çevrimdışı rozeti; altında 4 SOS aracı (Düdük, Fener, Konumumu Gönder, Yakındakilere Mesaj),
// sık kullanılan senaryolara kısayollar ve en altta büyük "112'yi Ara" butonu bulunur.

import { useState } from 'react';
import { View, Text, ScrollView, Pressable, Linking, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { senaryoBul } from '../../../veri/senaryolar';
import kategoriler from '../../../veri/kategoriler';
import { konumIzniDurumu, konumumuGonder } from '../../../araclar/konum';
import { renkler, yaziBoyutlari, bosluklar, koseler } from '../../../araclar/tema';

import CevrimdisiRozet from '../../../bilesenler/CevrimdisiRozet';
import SosButonu from '../../../bilesenler/SosButonu';
import BilgiKutusu from '../../../bilesenler/BilgiKutusu';
import AracDugmesi from '../../../bilesenler/AracDugmesi';
import SenaryoSatiri from '../../../bilesenler/SenaryoSatiri';

// Hızlı erişimdeki senaryoların kimlikleri (veri/senaryolar klasöründen)
const HIZLI_ERISIM = ['deprem', 'bina-yangini', 'sel', 'siddetli-kanama'];
const KONUM_RENGI = '#4EA6FD'; // Mavi

export default function AnaSayfa() {
  const router = useRouter();

  // Konum özelliğinin durumu
  const [izinAciklamasiAcik, setIzinAciklamasiAcik] = useState(false); // İzin istemeden önceki açıklama
  const [konumAliniyor, setKonumAliniyor] = useState(false);
  const [konumSonucu, setKonumSonucu] = useState(null); // { basarili, mesaj }

  // "Konumumu Gönder"e basınca: izin daha önce verilmediyse önce neden istediğimizi açıkla
  async function konumButonunaBasildi() {
    setKonumSonucu(null);
    const durum = await konumIzniDurumu();
    if (durum === 'granted') {
      konumuGonderBaslat();
    } else {
      setIzinAciklamasiAcik(true);
    }
  }

  // Konumu alıp SMS ekranını açar; sonucu ekranda gösterir
  async function konumuGonderBaslat() {
    setIzinAciklamasiAcik(false);
    setKonumAliniyor(true);
    const sonuc = await konumumuGonder();
    setKonumAliniyor(false);
    setKonumSonucu(sonuc);
  }

  // 112'yi arar
  function yuzOnIkiyiAra() {
    Linking.openURL('tel:112').catch(() => {
      setKonumSonucu({ basarili: false, mesaj: 'Arama başlatılamadı. Telefonundan 112’yi elle ara.' });
    });
  }

  return (
    <SafeAreaView style={stiller.ekran} edges={['top']}>
      <ScrollView contentContainerStyle={stiller.icerik}>
        {/* Başlık */}
        <View style={stiller.ustSatir}>
          <View style={stiller.baslikAlani}>
            <Text style={stiller.baslik}>Hayat360</Text>
            <Text style={stiller.altYazi}>Afette internetsiz yanındaki rehber</Text>
          </View>
          <CevrimdisiRozet renk={renkler.vurgu} />
        </View>

        {/* 4 SOS aracı: 2x2 ızgara */}
        <Text style={stiller.bolumBasligi}>SOS Araçları</Text>
        <View style={stiller.satir}>
          <SosButonu ad="Düdük" aciklama="Yüksek ses" ikon="whistle" renk="#F88F3E" dokununca={() => router.push('/arac/duduk')} />
          <View style={stiller.araBosluk} />
          <SosButonu ad="Fener" aciklama="Flaş ve SOS" ikon="flashlight" renk="#E0A800" dokununca={() => router.push('/arac/fener')} />
        </View>
        <View style={[stiller.satir, stiller.ikinciSatir]}>
          <SosButonu ad="Konumumu Gönder" aciklama="SMS ile" ikon="map-marker-radius" renk={KONUM_RENGI} dokununca={konumButonunaBasildi} />
          <View style={stiller.araBosluk} />
          <SosButonu ad="Yakındakilere Mesaj" aciklama="Yakında" ikon="access-point" renk="#0ED9C3" dokununca={() => router.push('/arac/mesajlar')} />
        </View>

        {/* Konum izni açıklaması (izin istenmeden önce gösterilir) */}
        {izinAciklamasiAcik ? (
          <BilgiKutusu
            renk={KONUM_RENGI}
            yazi="Konumunu SMS ile yakınlarına gönderebilmemiz için konum iznine ihtiyacımız var. Konum internetsiz de GPS ile alınır ve sadece senin göndereceğin SMS’e yazılır."
          >
            <AracDugmesi yazi="İzin Ver ve Gönder" ikon="map-marker-check" renk={KONUM_RENGI} aktifMi dokununca={konumuGonderBaslat} />
            <AracDugmesi yazi="Vazgeç" ikon="close" renk={renkler.kartKenari} dokununca={() => setIzinAciklamasiAcik(false)} />
          </BilgiKutusu>
        ) : null}
        {konumAliniyor ? <BilgiKutusu renk={KONUM_RENGI} yazi="Konum alınıyor… Açık alandaysan daha hızlı bulunur." /> : null}
        {konumSonucu ? (
          <BilgiKutusu renk={konumSonucu.basarili ? renkler.guvenli : renkler.tehlike} yazi={konumSonucu.mesaj} />
        ) : null}

        {/* Hızlı erişim */}
        <Text style={stiller.bolumBasligi}>Hızlı Erişim</Text>
        {HIZLI_ERISIM.map((id) => {
          const senaryo = senaryoBul(id);
          const kategori = kategoriler.find((k) => k.id === senaryo.kategori);
          return (
            <SenaryoSatiri
              key={id}
              senaryo={senaryo}
              renk={kategori.renk}
              altYazi={kategori.ad}
              dokununca={() => router.push(`/senaryo/${id}`)}
            />
          );
        })}

        {/* 112 butonu */}
        <Pressable onPress={yuzOnIkiyiAra} style={stiller.aramaButonu}>
          <MaterialCommunityIcons name="phone" size={34} color={renkler.yazi} />
          <Text style={stiller.aramaYazisi}>112’yi Ara</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const stiller = StyleSheet.create({
  ekran: { flex: 1, backgroundColor: renkler.arkaPlan },
  icerik: { paddingHorizontal: bosluklar.buyuk, paddingBottom: bosluklar.cokBuyuk },
  ustSatir: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: bosluklar.buyuk,
  },
  baslikAlani: { flex: 1 },
  baslik: { color: renkler.yazi, fontSize: yaziBoyutlari.baslik, fontWeight: 'bold' },
  altYazi: { color: renkler.ikincilYazi, fontSize: yaziBoyutlari.normal, marginTop: 2 },
  bolumBasligi: {
    color: renkler.ikincilYazi,
    fontSize: yaziBoyutlari.normal,
    fontWeight: '600',
    marginTop: bosluklar.cokBuyuk,
    marginBottom: bosluklar.orta,
  },
  satir: { flexDirection: 'row' }, // İki buton yan yana
  ikinciSatir: { marginTop: bosluklar.orta },
  araBosluk: { width: bosluklar.orta },
  aramaButonu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: renkler.tehlike,
    borderRadius: koseler.kart,
    paddingVertical: bosluklar.cokBuyuk,
    marginTop: bosluklar.cokBuyuk,
  },
  aramaYazisi: {
    color: renkler.yazi,
    fontSize: yaziBoyutlari.buyuk + 4,
    fontWeight: 'bold',
    marginLeft: bosluklar.orta,
  },
});
