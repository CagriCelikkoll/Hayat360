// Bu dosya Acil Durum ekranındaki arama kutusunu çizer.
// Solda büyüteç ikonu, ortada yazı alanı, yazı varsa sağda temizleme (×) düğmesi bulunur.
// Yazılan metin "metin" ile gelir, her değişiklikte "metinDegisince" çağrılır.

import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { renkler, yaziBoyutlari, bosluklar, koseler } from '../araclar/tema';

export default function AramaKutusu({ metin, metinDegisince }) {
  return (
    <View style={stiller.kutu}>
      <MaterialCommunityIcons name="magnify" size={24} color={renkler.ikincilYazi} />

      <TextInput
        style={stiller.yaziAlani}
        value={metin}
        onChangeText={metinDegisince}
        placeholder="Senaryo ara (ör. deprem, yangın)"
        placeholderTextColor={renkler.ikincilYazi}
        autoCorrect={false}
        returnKeyType="search"
      />

      {/* Kutuda yazı varsa temizleme düğmesi göster */}
      {metin.length > 0 ? (
        <Pressable onPress={() => metinDegisince('')} hitSlop={10}>
          <MaterialCommunityIcons name="close-circle" size={22} color={renkler.ikincilYazi} />
        </Pressable>
      ) : null}
    </View>
  );
}

const stiller = StyleSheet.create({
  kutu: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: renkler.kart,
    borderColor: renkler.kartKenari,
    borderWidth: 1,
    borderRadius: koseler.kart,
    paddingHorizontal: bosluklar.orta,
    marginTop: bosluklar.buyuk,
  },
  yaziAlani: {
    flex: 1,
    color: renkler.yazi,
    fontSize: yaziBoyutlari.normal,
    paddingVertical: bosluklar.orta,
    marginLeft: bosluklar.kucuk,
  },
});
