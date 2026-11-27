// Bu dosya yan yana duran iki kutudan birini çizer:
// tur="guvenli" ise yeşil "Güvenli İpuçları" (✓), tur="tehlike" ise kırmızı "Kaçınılması Gerekenler" (✗).
// İçinde madde işaretli (•) kısa cümleler listelenir.

import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { renkler, yaziBoyutlari, bosluklar, koseler } from '../araclar/tema';

export default function IpucuKutusu({ tur, maddeler }) {
  // Kutunun türüne göre başlığı, ikonu ve renkleri seç
  let baslik = 'Güvenli İpuçları';
  let ikon = 'check-circle';
  let anaRenk = renkler.guvenli;
  let zeminRengi = renkler.guvenliZemin;

  if (tur === 'tehlike') {
    baslik = 'Kaçınılması Gerekenler';
    ikon = 'close-circle';
    anaRenk = renkler.tehlike;
    zeminRengi = renkler.tehlikeZemin;
  }

  return (
    <View style={[stiller.kutu, { backgroundColor: zeminRengi, borderColor: anaRenk }]}>
      <View style={stiller.baslikSatiri}>
        <MaterialCommunityIcons name={ikon} size={26} color={anaRenk} />
        <Text style={stiller.baslik}>{baslik}</Text>
      </View>

      {/* Her madde: solda nokta, sağda cümle */}
      {maddeler.map((madde, sira) => (
        <View key={sira} style={stiller.madde}>
          <Text style={stiller.nokta}>•</Text>
          <Text style={stiller.maddeYazisi}>{madde}</Text>
        </View>
      ))}
    </View>
  );
}

const stiller = StyleSheet.create({
  kutu: {
    flex: 1, // İki kutu eşit genişlikte yan yana dursun
    borderWidth: 1,
    borderRadius: koseler.kart,
    padding: bosluklar.orta,
  },
  baslikSatiri: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: bosluklar.kucuk,
  },
  baslik: {
    flex: 1,
    color: renkler.yazi,
    fontSize: yaziBoyutlari.normal,
    fontWeight: 'bold',
    marginLeft: bosluklar.kucuk,
  },
  madde: {
    flexDirection: 'row',
    marginTop: bosluklar.cokKucuk,
  },
  nokta: {
    color: renkler.yazi,
    fontSize: yaziBoyutlari.normal,
    marginRight: bosluklar.kucuk,
  },
  maddeYazisi: {
    flex: 1,
    color: renkler.yazi,
    fontSize: yaziBoyutlari.kucuk + 1,
  },
});
