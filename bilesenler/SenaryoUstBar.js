// Bu dosya senaryo ve kategori ekranlarının en üstündeki çubuğu çizer:
// solda geri oku ve kategori adı, sağda "Çevrimdışı Mod (İnternetsiz Çalışır)" rozeti.
// Rozetin çerçevesi ve ikonu kategorinin renginde olur.

import { View, Text, Pressable, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { renkler, yaziBoyutlari, bosluklar } from '../araclar/tema';
import CevrimdisiRozet from './CevrimdisiRozet';

export default function SenaryoUstBar({ kategoriAdi, renk, geriGit }) {
  return (
    <View style={stiller.cubuk}>
      {/* Geri oku: dokununca bir önceki ekrana döner */}
      <Pressable onPress={geriGit} style={stiller.geriDugmesi} hitSlop={10}>
        <MaterialCommunityIcons name="arrow-left" size={28} color={renkler.yazi} />
      </Pressable>

      {/* Kategori adı en fazla 2 satır olsun */}
      <Text style={stiller.kategoriAdi} numberOfLines={2}>
        {kategoriAdi}
      </Text>

      <CevrimdisiRozet renk={renk} />
    </View>
  );
}

const stiller = StyleSheet.create({
  cubuk: {
    flexDirection: 'row', // Öğeler yan yana
    alignItems: 'center',
    paddingVertical: bosluklar.kucuk,
  },
  geriDugmesi: {
    marginRight: bosluklar.orta,
  },
  kategoriAdi: {
    flex: 1, // Kalan boşluğu kaplasın, rozet sağa yaslansın
    color: renkler.yazi,
    fontSize: yaziBoyutlari.normal,
  },
});
