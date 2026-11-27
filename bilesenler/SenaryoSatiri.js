// Bu dosya senaryo listelerindeki tek bir satırı çizer:
// solda kategori renginde küçük ikon, ortada senaryo adı (ve varsa küçük bir alt yazı), sağda ok.
// Satıra dokununca "dokununca" fonksiyonu çalışır (senaryo ekranı açılır).

import { View, Text, Pressable, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { renkler, yaziBoyutlari, bosluklar } from '../araclar/tema';

export default function SenaryoSatiri({ senaryo, renk, altYazi, dokununca }) {
  return (
    <Pressable onPress={dokununca} style={stiller.satir}>
      {/* Kategori renginde küçük ikon */}
      <View style={stiller.ikonKutusu}>
        <MaterialCommunityIcons name={senaryo.ikon} size={26} color={renk} />
      </View>

      <View style={stiller.yazilar}>
        <Text style={stiller.ad}>{senaryo.ad}</Text>
        {/* Alt yazı verilmişse göster (ör. arama sonucunda kategori adı) */}
        {altYazi ? <Text style={stiller.altYazi}>{altYazi}</Text> : null}
      </View>

      <MaterialCommunityIcons name="chevron-right" size={24} color={renkler.ikincilYazi} />
    </Pressable>
  );
}

const stiller = StyleSheet.create({
  satir: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: renkler.icKart,
    borderColor: renkler.kartKenari,
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: bosluklar.orta,
    paddingHorizontal: bosluklar.orta,
    marginBottom: bosluklar.kucuk,
  },
  ikonKutusu: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: renkler.kart,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: bosluklar.orta,
  },
  yazilar: {
    flex: 1,
  },
  ad: {
    color: renkler.yazi,
    fontSize: yaziBoyutlari.orta,
    fontWeight: '600',
  },
  altYazi: {
    color: renkler.ikincilYazi,
    fontSize: yaziBoyutlari.kucuk,
    marginTop: 2,
  },
});
