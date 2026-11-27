// Bu dosya "Acil Durum" sekmesinin ilk ekranıdır (alt menünün ortasındaki sekme).
// Üstte başlık ve çevrimdışı rozeti, altında arama kutusu vardır.
// Arama boşken 7 kategori kartı, arama doluyken eşleşen senaryolar listelenir.

import { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useNavigation } from 'expo-router';

import senaryolar from '../../../veri/senaryolar';
import kategoriler from '../../../veri/kategoriler';
import { senaryolariAra } from '../../../araclar/arama';
import { renkler, yaziBoyutlari, bosluklar } from '../../../araclar/tema';

import CevrimdisiRozet from '../../../bilesenler/CevrimdisiRozet';
import AramaKutusu from '../../../bilesenler/AramaKutusu';
import KategoriKarti from '../../../bilesenler/KategoriKarti';
import SenaryoSatiri from '../../../bilesenler/SenaryoSatiri';

export default function AcilDurum() {
  const router = useRouter();

  // Arama kutusuna yazılan metin. Senaryo ekranından geri dönünce bu ekran
  // silinmediği için yazılan metin olduğu gibi kalır.
  const [aramaMetni, setAramaMetni] = useState('');

  // Acil Durum SEKMESİNDEN çıkınca (alt menüden başka sekmeye geçince) aramayı temizle.
  // Böylece sekmeye geri dönünce hep kategori kartları görünür.
  // (Senaryoya girip geri dönmek sekmeden çıkmak sayılmaz; o durumda arama korunur.)
  const navigation = useNavigation();
  useEffect(() => {
    const acilSekmesi = navigation.getParent(); // Alt menüdeki "Acil Durum" sekmesi
    if (!acilSekmesi) {
      return;
    }
    const dinleyiciyiKaldir = acilSekmesi.addListener('blur', () => setAramaMetni(''));
    return dinleyiciyiKaldir; // Ekran kapanınca dinlemeyi bırak
  }, [navigation]);

  // Arama doluysa eşleşen senaryoları bul
  const aramaYapiliyorMu = aramaMetni.trim() !== '';
  const sonuclar = senaryolariAra(aramaMetni);

  // Bir kategorideki senaryo sayısını hesaplar
  function senaryoSayisi(kategoriId) {
    return senaryolar.filter((senaryo) => senaryo.kategori === kategoriId).length;
  }

  // Kimliği verilen kategoriyi bulur (arama sonuçlarında renk ve ad için)
  function kategoriBul(kategoriId) {
    return kategoriler.find((kategori) => kategori.id === kategoriId);
  }

  return (
    <SafeAreaView style={stiller.ekran} edges={['top']}>
      <ScrollView contentContainerStyle={stiller.icerik} keyboardShouldPersistTaps="handled">
        {/* Başlık ve çevrimdışı rozeti */}
        <View style={stiller.ustSatir}>
          <Text style={stiller.baslik}>Acil Durum</Text>
          <CevrimdisiRozet renk={renkler.vurgu} />
        </View>

        <AramaKutusu metin={aramaMetni} metinDegisince={setAramaMetni} />

        {aramaYapiliyorMu ? (
          // ARAMA DOLU: sonuç listesi
          <View style={stiller.liste}>
            <Text style={stiller.bolumBasligi}>{sonuclar.length} sonuç</Text>
            {sonuclar.length === 0 ? (
              <Text style={stiller.bosMesaj}>Bu aramayla eşleşen senaryo bulunamadı.</Text>
            ) : null}
            {sonuclar.map((senaryo) => {
              const kategori = kategoriBul(senaryo.kategori);
              return (
                <SenaryoSatiri
                  key={senaryo.id}
                  senaryo={senaryo}
                  renk={kategori.renk}
                  altYazi={kategori.ad}
                  dokununca={() => router.push(`/acil/${senaryo.id}`)}
                />
              );
            })}
          </View>
        ) : (
          // ARAMA BOŞ: 7 kategori kartı
          <View style={stiller.liste}>
            <Text style={stiller.bolumBasligi}>Kategoriler</Text>
            {kategoriler.map((kategori) => (
              <KategoriKarti
                key={kategori.id}
                kategori={kategori}
                senaryoSayisi={senaryoSayisi(kategori.id)}
                dokununca={() => router.push(`/acil/kategori/${kategori.id}`)}
              />
            ))}
          </View>
        )}
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
  ustSatir: {
    flexDirection: 'row', // Başlık solda, rozet sağda
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: bosluklar.buyuk,
  },
  baslik: {
    color: renkler.yazi,
    fontSize: yaziBoyutlari.baslik,
    fontWeight: 'bold',
  },
  liste: {
    marginTop: bosluklar.cokBuyuk,
  },
  bolumBasligi: {
    color: renkler.ikincilYazi,
    fontSize: yaziBoyutlari.normal,
    fontWeight: '600',
    marginBottom: bosluklar.orta,
  },
  bosMesaj: {
    color: renkler.ikincilYazi,
    fontSize: yaziBoyutlari.normal,
  },
});
