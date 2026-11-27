// Bu dosya "Hazırlık Listesi" sekmesidir.
// Üstte ilerleme çubuğu; altında AFAD'ın afet ve acil durum çantası maddeleri (gruplar halinde, işaretlenebilir);
// en altta Aile Afet Planı formu. İşaretler ve plan telefona kaydedilir.

import { useState, useEffect } from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import hazirlikGruplari, { hazirlikKaynagi, cantaNotu, kontrolEdilecek } from '../../veri/hazirlik';
import { hazirlikIsaretleriniOku, hazirlikIsaretleriniKaydet } from '../../araclar/depolama';
import { renkler, yaziBoyutlari, bosluklar } from '../../araclar/tema';

import EkranBasligi from '../../bilesenler/EkranBasligi';
import IlerlemeCubugu from '../../bilesenler/IlerlemeCubugu';
import HazirlikGrubu from '../../bilesenler/HazirlikGrubu';
import TaslakEtiketi from '../../bilesenler/TaslakEtiketi';
import BilgiKutusu from '../../bilesenler/BilgiKutusu';
import AilePlani from '../../bilesenler/AilePlani';
import KaynakSatiri from '../../bilesenler/KaynakSatiri';
import KaydedildiBildirimi, { useKaydedildiBildirimi } from '../../bilesenler/KaydedildiBildirimi';

// Tüm gruplardaki madde sayısı (ilerleme yüzdesi için)
const TOPLAM_MADDE = hazirlikGruplari.reduce((toplam, grup) => toplam + grup.maddeler.length, 0);

export default function HazirlikListesi() {
  const [isaretler, setIsaretler] = useState({}); // { 'su': true, 'el-feneri': true, ... }
  const [sifirlaSoruluyor, setSifirlaSoruluyor] = useState(false); // "Emin misin?" kutusu açık mı
  const [bildirimGorunur, bildirimGoster] = useKaydedildiBildirimi();

  // Kayıtlı işaretleri telefondan oku
  useEffect(() => {
    async function isaretleriYukle() {
      setIsaretler(await hazirlikIsaretleriniOku());
    }
    isaretleriYukle();
  }, []);

  // Bir maddeye dokununca işaretini tersine çevir ve hemen kaydet
  function maddeyeDokun(maddeId) {
    const yeniIsaretler = { ...isaretler, [maddeId]: !isaretler[maddeId] };
    setIsaretler(yeniIsaretler);
    hazirlikIsaretleriniKaydet(yeniIsaretler);
  }

  // "Listeyi sıfırla" onaylanınca tüm işaretleri kaldır
  function listeyiSifirla() {
    setIsaretler({});
    hazirlikIsaretleriniKaydet({});
    setSifirlaSoruluyor(false);
  }

  // İşaretli madde sayısı: listedeki her maddeye tek tek bakıp işaretli olanları say
  let tamamSayisi = 0;
  hazirlikGruplari.forEach((grup) => {
    grup.maddeler.forEach((madde) => {
      if (isaretler[madde.id] === true) {
        tamamSayisi = tamamSayisi + 1;
      }
    });
  });

  return (
    <SafeAreaView style={stiller.ekran} edges={['top']}>
      <ScrollView contentContainerStyle={stiller.icerik} keyboardShouldPersistTaps="handled">
        <EkranBasligi baslik="Hazırlık Listesi" altYazi="Afet çantası ve aile planı" />

        <IlerlemeCubugu tamam={tamamSayisi} toplam={TOPLAM_MADDE} />

        {/* Bölüm başlığı + Taslak etiketi + sıfırla düğmesi */}
        <View style={stiller.bolumSatiri}>
          <Text style={stiller.bolumBasligi}>Afet ve Acil Durum Çantası</Text>
          {kontrolEdilecek ? <TaslakEtiketi /> : null}
          <View style={stiller.bosluk} />
          <Pressable onPress={() => setSifirlaSoruluyor(true)} style={stiller.sifirlaDugmesi}>
            <MaterialCommunityIcons name="restore" size={18} color={renkler.ikincilYazi} />
            <Text style={stiller.sifirlaYazisi}>Listeyi sıfırla</Text>
          </Pressable>
        </View>

        {/* Sıfırlamadan önce sor: yanlışlıkla basılırsa işaretler kaybolmasın */}
        {sifirlaSoruluyor ? (
          <BilgiKutusu renk={renkler.tehlike} yazi="Tüm işaretler kaldırılacak. Emin misin?">
            <View style={stiller.soruDugmeleri}>
              <Pressable onPress={listeyiSifirla} style={[stiller.soruDugmesi, { backgroundColor: renkler.tehlike }]}>
                <Text style={stiller.soruYazisi}>Evet, sıfırla</Text>
              </Pressable>
              <Pressable onPress={() => setSifirlaSoruluyor(false)} style={stiller.soruDugmesi}>
                <Text style={stiller.soruYazisi}>Vazgeç</Text>
              </Pressable>
            </View>
          </BilgiKutusu>
        ) : null}

        <Text style={stiller.not}>{cantaNotu}</Text>

        {hazirlikGruplari.map((grup) => (
          <HazirlikGrubu key={grup.id} grup={grup} isaretler={isaretler} maddeyeDokun={maddeyeDokun} />
        ))}
        <KaynakSatiri kaynak={hazirlikKaynagi} />

        <AilePlani kaydedilince={bildirimGoster} />
        <View style={stiller.altBosluk} />
      </ScrollView>

      <KaydedildiBildirimi gorunur={bildirimGorunur} />
    </SafeAreaView>
  );
}

const stiller = StyleSheet.create({
  ekran: { flex: 1, backgroundColor: renkler.arkaPlan },
  icerik: { paddingHorizontal: bosluklar.buyuk, paddingBottom: bosluklar.cokBuyuk },
  bolumSatiri: { flexDirection: 'row', alignItems: 'center', marginTop: bosluklar.cokBuyuk },
  bolumBasligi: { color: renkler.yazi, fontSize: yaziBoyutlari.orta + 1, fontWeight: 'bold' },
  bosluk: { flex: 1 },
  sifirlaDugmesi: { flexDirection: 'row', alignItems: 'center', padding: bosluklar.cokKucuk },
  sifirlaYazisi: { color: renkler.ikincilYazi, fontSize: yaziBoyutlari.normal, marginLeft: 4 },
  soruDugmeleri: { flexDirection: 'row', marginTop: bosluklar.orta },
  soruDugmesi: {
    borderColor: renkler.kartKenari,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: bosluklar.kucuk,
    paddingHorizontal: bosluklar.buyuk,
    marginRight: bosluklar.kucuk,
  },
  soruYazisi: { color: renkler.yazi, fontSize: yaziBoyutlari.normal, fontWeight: 'bold' },
  not: { color: renkler.ikincilYazi, fontSize: yaziBoyutlari.normal, marginTop: bosluklar.kucuk },
  altBosluk: { height: 60 }, // "Kaydedildi" bildirimi son düğmenin üstüne binmesin
});
