// Bu dosya sekmelerin en üstündeki başlık satırını çizer:
// solda büyük başlık ve kısa alt yazı, sağda "Çevrimdışı Mod" rozeti.
// Rehber, Hazırlık Listesi ve Profil sekmeleri aynı başlığı kullanır.

import { View, Text, StyleSheet } from 'react-native';
import CevrimdisiRozet from './CevrimdisiRozet';
import { renkler, yaziBoyutlari, bosluklar } from '../araclar/tema';

export default function EkranBasligi({ baslik, altYazi }) {
  return (
    <View style={stiller.satir}>
      <View style={stiller.yazilar}>
        <Text style={stiller.baslik}>{baslik}</Text>
        {altYazi ? <Text style={stiller.altYazi}>{altYazi}</Text> : null}
      </View>
      <CevrimdisiRozet renk={renkler.vurgu} />
    </View>
  );
}

const stiller = StyleSheet.create({
  satir: {
    flexDirection: 'row', // Başlık solda, rozet sağda
    alignItems: 'center',
    paddingTop: bosluklar.buyuk,
  },
  yazilar: { flex: 1 },
  baslik: { color: renkler.yazi, fontSize: yaziBoyutlari.baslik, fontWeight: 'bold' },
  altYazi: { color: renkler.ikincilYazi, fontSize: yaziBoyutlari.normal, marginTop: 2 },
});
