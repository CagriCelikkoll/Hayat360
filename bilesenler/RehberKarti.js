// Bu dosya Rehber sekmesindeki bir konunun kartını çizer (ör. "Deprem").
// Kapalıyken: renkli ikon kutusu + başlık + kısa özet. Dokununca açılır ve maddeler görünür.
// Kartın rengi konunun kategorisinin rengidir; içerik taslaksa "Taslak" etiketi görünür.

import { View, Text, Pressable, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TaslakEtiketi from './TaslakEtiketi';
import KaynakSatiri from './KaynakSatiri';
import { renkler, yaziBoyutlari, bosluklar, koseler } from '../araclar/tema';

export default function RehberKarti({ konu, renk, acikMi, dokununca }) {
  return (
    <View style={[stiller.kart, { borderColor: acikMi ? renk : renkler.kartKenari }]}>
      {/* Kartın başlık kısmı: dokununca açılır/kapanır */}
      <Pressable onPress={dokununca} style={stiller.baslikSatiri}>
        <View style={[stiller.ikonKutusu, { backgroundColor: renk }]}>
          <MaterialCommunityIcons name={konu.ikon} size={30} color={renkler.yazi} />
        </View>
        <View style={stiller.yazilar}>
          <View style={stiller.baslikVeEtiket}>
            <Text style={stiller.baslik}>{konu.baslik}</Text>
            {konu.kontrolEdilecek ? <TaslakEtiketi /> : null}
          </View>
          <Text style={stiller.ozet}>{konu.ozet}</Text>
        </View>
        <MaterialCommunityIcons name={acikMi ? 'chevron-up' : 'chevron-down'} size={28} color={renkler.ikincilYazi} />
      </Pressable>

      {/* Açıksa maddeler ve kaynak */}
      {acikMi ? (
        <View style={stiller.maddeler}>
          {konu.maddeler.map((madde, sira) => (
            <View key={sira} style={stiller.madde}>
              {/* Kategori renginde sıra numarası */}
              <View style={[stiller.numara, { backgroundColor: renk }]}>
                <Text style={stiller.numaraYazisi}>{sira + 1}</Text>
              </View>
              <View style={stiller.maddeYazilari}>
                <Text style={stiller.maddeBasligi}>{madde.baslik}</Text>
                <Text style={stiller.maddeAciklamasi}>{madde.aciklama}</Text>
              </View>
            </View>
          ))}
          <KaynakSatiri kaynak={konu.kaynak} />
        </View>
      ) : null}
    </View>
  );
}

const stiller = StyleSheet.create({
  kart: {
    backgroundColor: renkler.kart,
    borderWidth: 1.5,
    borderRadius: koseler.kart,
    padding: bosluklar.orta,
    marginTop: bosluklar.orta,
  },
  baslikSatiri: { flexDirection: 'row', alignItems: 'center' },
  ikonKutusu: {
    width: 56,
    height: 56,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  yazilar: { flex: 1, marginLeft: bosluklar.orta },
  baslikVeEtiket: { flexDirection: 'row', alignItems: 'center' },
  baslik: { color: renkler.yazi, fontSize: yaziBoyutlari.orta + 1, fontWeight: 'bold' },
  ozet: { color: renkler.ikincilYazi, fontSize: yaziBoyutlari.kucuk + 1, marginTop: 2 },
  maddeler: { marginTop: bosluklar.orta },
  madde: {
    flexDirection: 'row',
    backgroundColor: renkler.icKart,
    borderRadius: 12,
    padding: bosluklar.orta,
    marginTop: bosluklar.kucuk,
  },
  numara: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numaraYazisi: { color: renkler.yazi, fontSize: yaziBoyutlari.kucuk, fontWeight: 'bold' },
  maddeYazilari: { flex: 1, marginLeft: bosluklar.orta },
  maddeBasligi: { color: renkler.yazi, fontSize: yaziBoyutlari.normal, fontWeight: 'bold' },
  maddeAciklamasi: { color: renkler.ikincilYazi, fontSize: yaziBoyutlari.kucuk + 1, marginTop: 2 },
});
