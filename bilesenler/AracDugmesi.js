// Bu dosya araç ekranlarındaki (Düdük, Fener) büyük düğmeyi çizer.
// Düğme açıkken (aktifMi) verilen renkle dolu, kapalıyken sadece çerçeveli görünür.
// devreDisiMi true ise soluk görünür ve dokunulamaz.

import { Text, Pressable, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { renkler, yaziBoyutlari, bosluklar, koseler } from '../araclar/tema';

export default function AracDugmesi({ yazi, ikon, renk, aktifMi, devreDisiMi, dokununca }) {
  return (
    <Pressable
      onPress={dokununca}
      disabled={devreDisiMi}
      style={[
        stiller.dugme,
        { borderColor: renk, backgroundColor: aktifMi ? renk : renkler.kart },
        devreDisiMi && stiller.soluk,
      ]}
    >
      <MaterialCommunityIcons name={ikon} size={30} color={renkler.yazi} />
      <Text style={stiller.yazi}>{yazi}</Text>
    </Pressable>
  );
}

const stiller = StyleSheet.create({
  dugme: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: koseler.kart,
    paddingVertical: bosluklar.buyuk,
    marginTop: bosluklar.orta,
  },
  soluk: {
    opacity: 0.35,
  },
  yazi: {
    color: renkler.yazi,
    fontSize: yaziBoyutlari.buyuk,
    fontWeight: 'bold',
    marginLeft: bosluklar.orta,
  },
});
