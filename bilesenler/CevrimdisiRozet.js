// Bu dosya "Çevrimdışı Mod (İnternetsiz Çalışır)" rozetini çizer.
// Rozetin çerçevesi ve ikonu, verilen renkte (ör. kategori rengi) olur.
// Senaryo ekranında, kategori listesinde ve Acil Durum ana ekranında aynı rozet kullanılır.

import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { renkler, yaziBoyutlari, bosluklar } from '../araclar/tema';

export default function CevrimdisiRozet({ renk }) {
  return (
    <View style={[stiller.rozet, { borderColor: renk }]}>
      <MaterialCommunityIcons name="wifi-off" size={22} color={renk} />
      <View style={stiller.yazilar}>
        <Text style={stiller.baslik}>Çevrimdışı Mod</Text>
        <Text style={stiller.altYazi}>(İnternetsiz Çalışır)</Text>
      </View>
    </View>
  );
}

const stiller = StyleSheet.create({
  rozet: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: bosluklar.orta,
    marginLeft: bosluklar.kucuk,
  },
  yazilar: {
    marginLeft: bosluklar.kucuk,
  },
  baslik: {
    color: renkler.yazi,
    fontSize: yaziBoyutlari.kucuk,
  },
  altYazi: {
    color: renkler.ikincilYazi,
    fontSize: 11,
  },
});
