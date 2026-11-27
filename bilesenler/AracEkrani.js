// Bu dosya Düdük, Fener ve Mesajlar ekranlarının ortak iskeletidir:
// üstte geri oku ve çevrimdışı rozeti, ortada büyük renkli ikon, başlık ve açıklama.
// Ekrana özel düğmeler "children" olarak bu iskeletin altına yerleşir.

import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { renkler, yaziBoyutlari, bosluklar } from '../araclar/tema';
import SenaryoUstBar from './SenaryoUstBar';

export default function AracEkrani({ baslik, aciklama, ikon, renk, children }) {
  const router = useRouter();

  // Geri okuna basınca Ana Sayfa'ya dön
  function geriGit() {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/');
    }
  }

  return (
    <SafeAreaView style={stiller.ekran} edges={['top', 'bottom']}>
      <ScrollView contentContainerStyle={stiller.icerik}>
        <SenaryoUstBar kategoriAdi="SOS Araçları" renk={renk} geriGit={geriGit} />

        {/* Büyük renkli ikon */}
        <View style={[stiller.ikonDairesi, { backgroundColor: renk }]}>
          <MaterialCommunityIcons name={ikon} size={72} color={renkler.yazi} />
        </View>

        <Text style={stiller.baslik}>{baslik}</Text>
        <Text style={stiller.aciklama}>{aciklama}</Text>

        {/* Ekrana özel içerik (düğmeler, mesajlar) */}
        <View style={stiller.altIcerik}>{children}</View>
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
  ikonDairesi: {
    width: 140,
    height: 140,
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: bosluklar.cokBuyuk,
  },
  baslik: {
    color: renkler.yazi,
    fontSize: yaziBoyutlari.baslik,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: bosluklar.buyuk,
  },
  aciklama: {
    color: renkler.ikincilYazi,
    fontSize: yaziBoyutlari.normal,
    textAlign: 'center',
    marginTop: bosluklar.kucuk,
  },
  altIcerik: {
    marginTop: bosluklar.cokBuyuk,
  },
});
