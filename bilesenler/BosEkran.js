// Bu dosya, içi henüz yapılmamış ekranlar için ortak bir "geçici ekran" kalıbıdır.
// Koyu arka plan üzerinde bir başlık ve kısa bir açıklama gösterir.
// Sekmelerin içeriği yazıldıkça bu bileşen yerine gerçek ekranlar kullanılacak.

import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { renkler, yaziBoyutlari, bosluklar } from '../araclar/tema';

export default function BosEkran({ baslik, aciklama }) {
  return (
    // SafeAreaView: yazılar telefonun saat/çentik alanının altına kaçmasın diye
    <SafeAreaView style={stiller.ekran} edges={['top']}>
      <View style={stiller.icerik}>
        <Text style={stiller.baslik}>{baslik}</Text>
        <Text style={stiller.aciklama}>{aciklama}</Text>
      </View>
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
  },
  aciklama: {
    color: renkler.ikincilYazi,
    fontSize: yaziBoyutlari.normal,
    marginTop: bosluklar.kucuk,
  },
});
