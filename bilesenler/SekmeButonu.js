// Bu dosya "Durum Anı" ve "Sonrası" sekme butonlarından birini çizer.
// Seçili buton kategori rengiyle dolu olur.
// O sekmenin içeriği henüz yoksa (veride null) buton soluk görünür ve dokunulamaz.

import { Text, Pressable, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { renkler, yaziBoyutlari, bosluklar, koseler } from '../araclar/tema';

export default function SekmeButonu({ yazi, ikon, seciliMi, bosMu, renk, dokununca }) {
  // Seçiliyse kategori rengi, değilse normal kart rengi
  const zeminRengi = seciliMi ? renk : renkler.kart;
  const kenarRengi = seciliMi ? renk : renkler.kartKenari;

  return (
    <Pressable
      onPress={dokununca}
      disabled={bosMu} // İçerik yoksa dokunmak işe yaramasın
      style={[
        stiller.buton,
        { backgroundColor: zeminRengi, borderColor: kenarRengi },
        bosMu && stiller.soluk,
      ]}
    >
      <MaterialCommunityIcons name={ikon} size={24} color={renkler.yazi} />
      <Text style={stiller.yazi}>{yazi}</Text>
    </Pressable>
  );
}

const stiller = StyleSheet.create({
  buton: {
    flex: 1, // İki buton eşit genişlikte
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: bosluklar.orta,
    borderRadius: koseler.hap,
    borderWidth: 1,
  },
  soluk: {
    opacity: 0.35, // İçeriği olmayan sekme soluk görünsün
  },
  yazi: {
    color: renkler.yazi,
    fontSize: yaziBoyutlari.orta,
    fontWeight: '600',
    marginLeft: bosluklar.kucuk,
  },
});
