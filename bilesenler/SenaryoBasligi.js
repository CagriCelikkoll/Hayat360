// Bu dosya senaryo ekranının başlık alanını çizer:
// solda kategori renginde büyük ikon kutusu, sağda kalın başlık ve altında kısa özet.
// Özet, seçili sekmeye (Durum Anı / Sonrası) göre değişir.

import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { renkler, yaziBoyutlari, bosluklar } from '../araclar/tema';

export default function SenaryoBasligi({ ikon, baslik, ozet, renk }) {
  return (
    <View style={stiller.alan}>
      {/* Kategori renginde ikon kutusu */}
      <View style={[stiller.ikonKutusu, { backgroundColor: renk }]}>
        <MaterialCommunityIcons name={ikon} size={56} color={renkler.yazi} />
      </View>

      <View style={stiller.yazilar}>
        <Text style={stiller.baslik}>{baslik}</Text>
        {/* Özet yoksa (sekme boşsa) hiçbir şey gösterme */}
        {ozet ? <Text style={stiller.ozet}>{ozet}</Text> : null}
      </View>
    </View>
  );
}

const stiller = StyleSheet.create({
  alan: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: bosluklar.kucuk,
  },
  ikonKutusu: {
    width: 88,
    height: 88,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.25)', // İkon kutusuna hafif parlak bir kenar
  },
  yazilar: {
    flex: 1,
    marginLeft: bosluklar.buyuk,
  },
  baslik: {
    color: renkler.yazi,
    fontSize: 26,
    fontWeight: 'bold',
  },
  ozet: {
    color: renkler.ikincilYazi,
    fontSize: yaziBoyutlari.normal,
    marginTop: bosluklar.cokKucuk,
  },
});
