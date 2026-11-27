// Bu dosya Hazırlık Listesi'nin en üstündeki ilerleme çubuğunu çizer.
// "tamam" kaç maddenin işaretlendiğini, "toplam" toplam madde sayısını söyler; yüzde buradan hesaplanır.

import { View, Text, StyleSheet } from 'react-native';
import { renkler, yaziBoyutlari, bosluklar, koseler } from '../araclar/tema';

export default function IlerlemeCubugu({ tamam, toplam }) {
  // Yüzdeyi tam sayıya yuvarla (ör. 7/18 -> %39)
  const yuzde = toplam === 0 ? 0 : Math.round((tamam / toplam) * 100);

  return (
    <View style={stiller.kart}>
      <View style={stiller.ustSatir}>
        <Text style={stiller.baslik}>Çantan hazır mı?</Text>
        <Text style={stiller.yuzde}>%{yuzde}</Text>
      </View>
      {/* Gri ray ve üstünde yüzde kadar dolan yeşil şerit */}
      <View style={stiller.ray}>
        <View style={[stiller.dolu, { width: yuzde + '%' }]} />
      </View>
      <Text style={stiller.altYazi}>
        {toplam} maddeden {tamam} tanesi hazır
      </Text>
    </View>
  );
}

const stiller = StyleSheet.create({
  kart: {
    backgroundColor: renkler.kart,
    borderColor: renkler.kartKenari,
    borderWidth: 1,
    borderRadius: koseler.kart,
    padding: bosluklar.buyuk,
    marginTop: bosluklar.buyuk,
  },
  ustSatir: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  baslik: { color: renkler.yazi, fontSize: yaziBoyutlari.orta + 1, fontWeight: 'bold' },
  yuzde: { color: renkler.guvenli, fontSize: yaziBoyutlari.buyuk, fontWeight: 'bold' },
  ray: {
    height: 14,
    borderRadius: 7,
    backgroundColor: renkler.icKart,
    overflow: 'hidden', // Yeşil şerit rayın dışına taşmasın
    marginTop: bosluklar.orta,
  },
  dolu: { height: '100%', backgroundColor: renkler.guvenli },
  altYazi: { color: renkler.ikincilYazi, fontSize: yaziBoyutlari.normal, marginTop: bosluklar.kucuk },
});
