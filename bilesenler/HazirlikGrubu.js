// Bu dosya Hazırlık Listesi'ndeki bir grubu (ör. "Su ve Gıda") ve işaretlenebilir maddelerini çizer.
// Bir maddeye dokununca işareti açılır/kapanır; "isaretler" hangi maddelerin işaretli olduğunu tutar.

import { View, Text, Pressable, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BolumKarti from './BolumKarti';
import { renkler, yaziBoyutlari, bosluklar } from '../araclar/tema';

export default function HazirlikGrubu({ grup, isaretler, maddeyeDokun }) {
  // Bu gruptaki işaretli madde sayısı (sağ üstte "2/4" gibi gösterilir)
  const isaretliSayisi = grup.maddeler.filter((madde) => isaretler[madde.id]).length;
  const sayac = (
    <Text style={stiller.sayac}>
      {isaretliSayisi}/{grup.maddeler.length}
    </Text>
  );

  return (
    <BolumKarti baslik={grup.baslik} ikon={grup.ikon} renk={renkler.guvenli} sagTaraf={sayac}>
      {grup.maddeler.map((madde) => {
        const isaretliMi = isaretler[madde.id] === true;
        return (
          <Pressable key={madde.id} onPress={() => maddeyeDokun(madde.id)} style={stiller.madde}>
            {/* İşaret kutusu: işaretliyse yeşil dolu ve tikli */}
            <MaterialCommunityIcons
              name={isaretliMi ? 'checkbox-marked' : 'checkbox-blank-outline'}
              size={28}
              color={isaretliMi ? renkler.guvenli : renkler.ikincilYazi}
            />
            <View style={stiller.yazilar}>
              <Text style={[stiller.ad, isaretliMi ? stiller.tamamlanmis : null]}>{madde.ad}</Text>
              {madde.aciklama ? <Text style={stiller.aciklama}>{madde.aciklama}</Text> : null}
            </View>
          </Pressable>
        );
      })}
    </BolumKarti>
  );
}

const stiller = StyleSheet.create({
  sayac: { color: renkler.ikincilYazi, fontSize: yaziBoyutlari.normal, fontWeight: 'bold' },
  madde: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: renkler.icKart,
    borderRadius: 12,
    padding: bosluklar.orta,
    marginTop: bosluklar.kucuk,
  },
  yazilar: { flex: 1, marginLeft: bosluklar.orta },
  ad: { color: renkler.yazi, fontSize: yaziBoyutlari.normal + 1, fontWeight: 'bold' },
  tamamlanmis: { color: renkler.ikincilYazi, textDecorationLine: 'line-through' }, // Hazır olanın üstü çizili
  aciklama: { color: renkler.ikincilYazi, fontSize: yaziBoyutlari.kucuk + 1, marginTop: 2 },
});
