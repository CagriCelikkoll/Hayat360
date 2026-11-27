// Bu dosya Ana Sayfa'daki 2x2 ızgaradaki tek bir SOS butonunu çizer:
// üstte renkli ikon kutusu, altında kısa ad ve küçük bir açıklama.
// Butona dokununca "dokununca" fonksiyonu çalışır.

import { View, Text, Pressable, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { renkler, yaziBoyutlari, bosluklar, koseler } from '../araclar/tema';

export default function SosButonu({ ad, aciklama, ikon, renk, dokununca }) {
  return (
    <Pressable onPress={dokununca} style={[stiller.buton, { borderColor: renk }]}>
      <View style={[stiller.ikonKutusu, { backgroundColor: renk }]}>
        <MaterialCommunityIcons name={ikon} size={40} color={renkler.yazi} />
      </View>
      <Text style={stiller.ad}>{ad}</Text>
      <Text style={stiller.aciklama}>{aciklama}</Text>
    </Pressable>
  );
}

const stiller = StyleSheet.create({
  buton: {
    flex: 1, // Satırdaki iki buton eşit genişlikte
    alignItems: 'center',
    backgroundColor: renkler.kart,
    borderWidth: 1.5,
    borderRadius: koseler.kart,
    paddingVertical: bosluklar.buyuk,
    paddingHorizontal: bosluklar.kucuk,
  },
  ikonKutusu: {
    width: 72,
    height: 72,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: bosluklar.orta,
  },
  ad: {
    color: renkler.yazi,
    fontSize: yaziBoyutlari.orta,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  aciklama: {
    color: renkler.ikincilYazi,
    fontSize: yaziBoyutlari.kucuk,
    textAlign: 'center',
    marginTop: 2,
  },
});
