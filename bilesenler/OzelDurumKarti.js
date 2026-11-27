// Bu dosya senaryo ekranının altındaki "özel durum" kartını çizer
// (ör. "Yürümekte Zorlanıyorsan"): solda koyu kutu içinde kategori renginde ikon,
// sağında başlık ve açıklama. (Dokununca bir şey olmadığı için sağda › oku yok.)

import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { renkler, yaziBoyutlari, bosluklar, koseler } from '../araclar/tema';

export default function OzelDurumKarti({ ikon, baslik, aciklama, renk }) {
  return (
    <View style={stiller.kart}>
      <View style={stiller.ikonKutusu}>
        <MaterialCommunityIcons name={ikon} size={48} color={renk} />
      </View>
      <View style={stiller.yazilar}>
        <Text style={stiller.baslik}>{baslik}</Text>
        <Text style={stiller.aciklama}>{aciklama}</Text>
      </View>
    </View>
  );
}

const stiller = StyleSheet.create({
  kart: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: renkler.kart,
    borderColor: renkler.kartKenari,
    borderWidth: 1,
    borderRadius: koseler.kart,
    padding: bosluklar.orta,
    marginTop: bosluklar.buyuk,
  },
  ikonKutusu: {
    width: 76,
    height: 76,
    borderRadius: 12,
    backgroundColor: renkler.icKart,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: bosluklar.orta,
  },
  yazilar: {
    flex: 1,
  },
  baslik: {
    color: renkler.yazi,
    fontSize: yaziBoyutlari.orta + 1,
    fontWeight: 'bold',
  },
  aciklama: {
    color: renkler.ikincilYazi,
    fontSize: yaziBoyutlari.kucuk,
    marginTop: 2,
  },
});
