// Bu dosya "Acil Durum" sekmesinin ilk ekranıdır (alt menünün ortasındaki sekme).
// GEÇİCİ: Şimdilik veri/senaryolar/ klasöründeki senaryoları adlarıyla düz bir liste olarak gösterir;
// bir senaryoya dokununca aynı klasördeki [id].js açılır.
// İleride burası 7 kategorili asıl tasarımla değiştirilecek.

import { Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import senaryolar from '../../../veri/senaryolar';
import kategoriler from '../../../veri/kategoriler';
import { renkler, yaziBoyutlari, bosluklar, koseler } from '../../../araclar/tema';

export default function AcilDurum() {
  const router = useRouter();

  return (
    <SafeAreaView style={stiller.ekran} edges={['top']}>
      <ScrollView contentContainerStyle={stiller.icerik}>
        <Text style={stiller.baslik}>Acil Durum</Text>

        {senaryolar.map((senaryo) => {
          // Senaryonun kategorisini bul; kartın sol çizgisi o renkte olsun
          const kategori = kategoriler.find((k) => k.id === senaryo.kategori);

          return (
            <Pressable
              key={senaryo.id}
              style={[stiller.satir, { borderLeftColor: kategori.renk }]}
              onPress={() => router.push(`/acil/${senaryo.id}`)}
            >
              <Text style={stiller.satirBaslik}>{senaryo.ad}</Text>
              <Text style={stiller.satirKategori}>{kategori.ad}</Text>
            </Pressable>
          );
        })}
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
    padding: bosluklar.cokBuyuk,
  },
  baslik: {
    color: renkler.yazi,
    fontSize: yaziBoyutlari.baslik,
    fontWeight: 'bold',
    marginBottom: bosluklar.buyuk,
  },
  satir: {
    backgroundColor: renkler.kart,
    borderColor: renkler.kartKenari,
    borderWidth: 1,
    borderLeftWidth: 5, // Soldaki kalın renkli çizgi
    borderRadius: koseler.kart,
    padding: bosluklar.buyuk,
    marginBottom: bosluklar.orta,
  },
  satirBaslik: {
    color: renkler.yazi,
    fontSize: yaziBoyutlari.orta,
    fontWeight: 'bold',
  },
  satirKategori: {
    color: renkler.ikincilYazi,
    fontSize: yaziBoyutlari.kucuk,
    marginTop: bosluklar.cokKucuk,
  },
});
