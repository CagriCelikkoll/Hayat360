// Bu dosya "Yapılacaklar" (Durum Anı'nda "Hemen Yapılacaklar") kartını çizer.
// Kartın içinde her madde ayrı bir kutudur: solda ikon, sağında kalın başlık ve açıklama.
// (Fotoğraflardaki › okları bilerek konmadı: dokununca bir şey olmayan ok kullanıcıyı yanıltır.)

import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { renkler, yaziBoyutlari, bosluklar, koseler } from '../araclar/tema';

export default function YapilacaklarKarti({ baslik, maddeler, renk }) {
  return (
    <View style={stiller.kart}>
      {/* Kartın başlığı: hedef ikonu + "Yapılacaklar" */}
      <View style={stiller.baslikSatiri}>
        <MaterialCommunityIcons name="bullseye" size={30} color={renk} />
        <Text style={stiller.baslik}>{baslik}</Text>
      </View>

      {/* Her madde için bir kutu çiz */}
      {maddeler.map((madde, sira) => (
        <View key={sira} style={stiller.madde}>
          <View style={stiller.ikonAlani}>
            <MaterialCommunityIcons name={madde.ikon} size={40} color={renkler.yazi} />
          </View>
          <View style={stiller.maddeYazilari}>
            <Text style={stiller.maddeBaslik}>{madde.baslik}</Text>
            <Text style={stiller.maddeAciklama}>{madde.aciklama}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const stiller = StyleSheet.create({
  kart: {
    backgroundColor: renkler.kart,
    borderColor: renkler.kartKenari,
    borderWidth: 1,
    borderRadius: koseler.kart,
    padding: bosluklar.orta,
    marginTop: bosluklar.buyuk,
  },
  baslikSatiri: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: bosluklar.orta,
    marginLeft: bosluklar.kucuk,
  },
  baslik: {
    color: renkler.yazi,
    fontSize: yaziBoyutlari.buyuk,
    fontWeight: 'bold',
    marginLeft: bosluklar.orta,
  },
  madde: {
    flexDirection: 'row', // İkon ve yazılar yan yana
    alignItems: 'center',
    backgroundColor: renkler.icKart,
    borderColor: renkler.kartKenari,
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: bosluklar.kucuk,
    paddingHorizontal: bosluklar.orta,
    marginBottom: bosluklar.kucuk,
  },
  ikonAlani: {
    width: 56, // Bütün ikonlar aynı genişlikte yer kaplasın, yazılar hizalı dursun
    alignItems: 'center',
    marginRight: bosluklar.orta,
  },
  maddeYazilari: {
    flex: 1,
  },
  maddeBaslik: {
    color: renkler.yazi,
    fontSize: yaziBoyutlari.orta,
    fontWeight: 'bold',
  },
  maddeAciklama: {
    color: renkler.ikincilYazi,
    fontSize: yaziBoyutlari.kucuk,
    marginTop: 2,
  },
});
