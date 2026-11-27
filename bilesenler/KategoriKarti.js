// Bu dosya Acil Durum ekranındaki tek bir kategori kartını çizer:
// solda kategori renginde ikon kutusu, ortada kategori adı ve "X senaryo" yazısı, sağda ok.
// Karta dokununca "dokununca" fonksiyonu çalışır (kategori listesi açılır).

import { View, Text, Pressable, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { renkler, yaziBoyutlari, bosluklar, koseler } from '../araclar/tema';

export default function KategoriKarti({ kategori, senaryoSayisi, dokununca }) {
  return (
    <Pressable onPress={dokununca} style={stiller.kart}>
      {/* Kategori renginde ikon kutusu */}
      <View style={[stiller.ikonKutusu, { backgroundColor: kategori.renk }]}>
        <MaterialCommunityIcons name={kategori.ikon} size={32} color={renkler.yazi} />
      </View>

      <View style={stiller.yazilar}>
        <Text style={stiller.ad}>{kategori.ad}</Text>
        <Text style={stiller.sayi}>{senaryoSayisi} senaryo</Text>
      </View>

      {/* Bu ok gerçekten bir ekrana götürdüğü için var */}
      <MaterialCommunityIcons name="chevron-right" size={26} color={renkler.ikincilYazi} />
    </Pressable>
  );
}

const stiller = StyleSheet.create({
  kart: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: renkler.kart,
    borderColor: renkler.kartKenari,
    borderWidth: 1,
    borderRadius: koseler.kart,
    padding: bosluklar.orta,
    marginBottom: bosluklar.orta,
  },
  ikonKutusu: {
    width: 60,
    height: 60,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: bosluklar.buyuk,
  },
  yazilar: {
    flex: 1,
  },
  ad: {
    color: renkler.yazi,
    fontSize: yaziBoyutlari.orta,
    fontWeight: 'bold',
  },
  sayi: {
    color: renkler.ikincilYazi,
    fontSize: yaziBoyutlari.kucuk,
    marginTop: 2,
  },
});
