// Bu dosya küçük sarı "Taslak" etiketini çizer.
// Fotoğraftan gelmeyen, uzman kontrolünden henüz geçmemiş içeriğin yanında görünür
// (veride kontrolEdilecek: true olan içerikler).

import { View, Text, StyleSheet } from 'react-native';
import { renkler, bosluklar } from '../araclar/tema';

export default function TaslakEtiketi() {
  return (
    <View style={stiller.etiket}>
      <Text style={stiller.yazi}>Taslak</Text>
    </View>
  );
}

const stiller = StyleSheet.create({
  etiket: {
    backgroundColor: renkler.taslak, // Sarı zemin
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: bosluklar.kucuk,
  },
  yazi: {
    color: renkler.arkaPlan, // Sarı üstünde koyu yazı okunaklı olsun
    fontSize: 12,
    fontWeight: 'bold',
  },
});
