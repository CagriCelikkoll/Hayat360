// Bu dosya "Rehber" sekmesidir: afetlerden ÖNCE yapılacak hazırlıklar.
// En üstte "afet anında Acil Durum sekmesine bak" notu; altında her konu için açılıp kapanan bir kart.
// İçerik veri/rehber.js'den gelir; kart rengi konunun kategorisinin rengidir.

import { useState } from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import rehberKonulari from '../../veri/rehber';
import kategoriler from '../../veri/kategoriler';
import { renkler, yaziBoyutlari, bosluklar, koseler } from '../../araclar/tema';

import EkranBasligi from '../../bilesenler/EkranBasligi';
import RehberKarti from '../../bilesenler/RehberKarti';

// Konunun kategorisinin rengini bulur (ör. 'dogal-afetler' -> '#E23A77')
function kategoriRengi(kategoriId) {
  const kategori = kategoriler.find((k) => k.id === kategoriId);
  return kategori ? kategori.renk : renkler.vurgu;
}

export default function Rehber() {
  const router = useRouter();
  const [acikKonu, setAcikKonu] = useState(null); // Şu an açık olan kartın kimliği (aynı anda bir kart açık)

  // Karta dokununca: kapalıysa aç, açıksa kapat
  function kartaDokun(konuId) {
    if (acikKonu === konuId) {
      setAcikKonu(null);
    } else {
      setAcikKonu(konuId);
    }
  }

  return (
    <SafeAreaView style={stiller.ekran} edges={['top']}>
      <ScrollView contentContainerStyle={stiller.icerik}>
        <EkranBasligi baslik="Rehber" altYazi="Afetlerden önce yapılacaklar" />

        {/* Üstteki not: dokununca Acil Durum sekmesine gider */}
        <Pressable onPress={() => router.navigate('/acil')} style={stiller.not}>
          <MaterialCommunityIcons name="information-outline" size={24} color={renkler.vurgu} />
          <Text style={stiller.notYazisi}>Afet anında ne yapacağın için Acil Durum sekmesine bak.</Text>
          <MaterialCommunityIcons name="chevron-right" size={24} color={renkler.ikincilYazi} />
        </Pressable>

        <View style={stiller.liste}>
          {rehberKonulari.map((konu) => (
            <RehberKarti
              key={konu.id}
              konu={konu}
              renk={kategoriRengi(konu.kategori)}
              acikMi={acikKonu === konu.id}
              dokununca={() => kartaDokun(konu.id)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const stiller = StyleSheet.create({
  ekran: { flex: 1, backgroundColor: renkler.arkaPlan },
  icerik: { paddingHorizontal: bosluklar.buyuk, paddingBottom: bosluklar.cokBuyuk },
  not: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: renkler.kart,
    borderColor: renkler.vurgu,
    borderWidth: 1.5,
    borderRadius: koseler.kart,
    padding: bosluklar.orta,
    marginTop: bosluklar.buyuk,
  },
  notYazisi: {
    flex: 1,
    color: renkler.yazi,
    fontSize: yaziBoyutlari.normal,
    fontWeight: '600',
    marginHorizontal: bosluklar.kucuk,
  },
  liste: { marginTop: bosluklar.kucuk },
});
