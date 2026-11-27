// Bu dosya senaryo ekranının en altındaki "Kaynak: ..." satırını çizer.
// Bilginin hangi kurumlardan alındığını gösterir (ör. "CDC · NHS · American Red Cross").

import { View, Text, StyleSheet } from 'react-native';
import { renkler, yaziBoyutlari, bosluklar, koseler } from '../araclar/tema';

export default function KaynakSatiri({ kaynak }) {
  return (
    <View style={stiller.kutu}>
      <Text style={stiller.yazi}>
        {/* "Kaynak:" kalın, devamı normal yazılsın */}
        <Text style={stiller.kalin}>Kaynak: </Text>
        {kaynak}
      </Text>
    </View>
  );
}

const stiller = StyleSheet.create({
  kutu: {
    borderColor: renkler.kartKenari,
    borderWidth: 1,
    borderRadius: koseler.kart,
    paddingVertical: bosluklar.kucuk,
    paddingHorizontal: bosluklar.buyuk,
    marginTop: bosluklar.orta,
  },
  yazi: {
    color: renkler.yazi,
    fontSize: yaziBoyutlari.kucuk + 1,
    textAlign: 'center',
  },
  kalin: {
    fontWeight: 'bold',
  },
});
