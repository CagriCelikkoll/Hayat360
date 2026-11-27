// Bu dosya tek bir kategorinin senaryo listesini gösterir (ör. "Doğal Afetler").
// Adresteki [id] hangi kategorinin açılacağını söyler: /acil/kategori/dogal-afetler gibi.
// Bu ekran açıkken alt menüdeki "Acil Durum" hapı kategorinin rengini alır.

import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import senaryolar from '../../../../veri/senaryolar';
import kategoriler from '../../../../veri/kategoriler';
import { useHapRengi } from '../../../../araclar/hapRengi';
import { renkler, yaziBoyutlari, bosluklar } from '../../../../araclar/tema';

import BosEkran from '../../../../bilesenler/BosEkran';
import SenaryoUstBar from '../../../../bilesenler/SenaryoUstBar';
import SenaryoSatiri from '../../../../bilesenler/SenaryoSatiri';

export default function KategoriEkrani() {
  const router = useRouter();

  // Adresten kategorinin kimliğini al ve kategoriyi bul
  const { id } = useLocalSearchParams();
  const kategori = kategoriler.find((k) => k.id === id);
  const renk = kategori ? kategori.renk : renkler.vurgu;

  // Alt menüdeki "Acil Durum" hapı bu kategorinin rengini alsın
  useHapRengi(renk);

  if (!kategori) {
    return <BosEkran baslik="Kategori bulunamadı" aciklama={`"${id}" adında bir kategori yok.`} />;
  }

  // Bu kategoriye ait senaryolar
  const kategoriSenaryolari = senaryolar.filter((senaryo) => senaryo.kategori === kategori.id);

  // Geri okuna basınca Acil Durum ekranına dön
  function geriGit() {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/acil');
    }
  }

  return (
    <SafeAreaView style={stiller.ekran} edges={['top']}>
      <ScrollView contentContainerStyle={stiller.icerik}>
        <SenaryoUstBar kategoriAdi="Acil Durum" renk={renk} geriGit={geriGit} />

        {/* Başlık alanı: kategori renginde ikon kutusu + ad + senaryo sayısı */}
        <View style={stiller.baslikAlani}>
          <View style={[stiller.ikonKutusu, { backgroundColor: renk }]}>
            <MaterialCommunityIcons name={kategori.ikon} size={48} color={renkler.yazi} />
          </View>
          <View style={stiller.yazilar}>
            <Text style={stiller.baslik}>{kategori.ad}</Text>
            <Text style={stiller.altYazi}>{kategoriSenaryolari.length} senaryo</Text>
          </View>
        </View>

        {/* Senaryo listesi */}
        <View style={stiller.liste}>
          {kategoriSenaryolari.map((senaryo) => (
            <SenaryoSatiri
              key={senaryo.id}
              senaryo={senaryo}
              renk={renk}
              dokununca={() => router.push(`/acil/${senaryo.id}`)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const stiller = StyleSheet.create({
  ekran: {
    flex: 1,
    backgroundColor: renkler.arkaPlan,
  },
  icerik: {
    paddingHorizontal: bosluklar.buyuk,
    paddingBottom: bosluklar.cokBuyuk,
  },
  baslikAlani: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: bosluklar.kucuk,
  },
  ikonKutusu: {
    width: 80,
    height: 80,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.25)',
  },
  yazilar: {
    flex: 1,
    marginLeft: bosluklar.buyuk,
  },
  baslik: {
    color: renkler.yazi,
    fontSize: 24,
    fontWeight: 'bold',
  },
  altYazi: {
    color: renkler.ikincilYazi,
    fontSize: yaziBoyutlari.normal,
    marginTop: bosluklar.cokKucuk,
  },
  liste: {
    marginTop: bosluklar.cokBuyuk,
  },
});
