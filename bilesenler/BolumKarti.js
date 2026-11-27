// Bu dosya koyu renkli bir bölüm kartı çizer: üstte ikon + başlık (+ istenirse Taslak etiketi),
// altında "children" ile verilen içerik (form alanları, madde listesi vb.).
// Profil, Hazırlık Listesi ve Aile Afet Planı bölümleri bu kartı kullanır.

import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TaslakEtiketi from './TaslakEtiketi';
import { renkler, yaziBoyutlari, bosluklar, koseler } from '../araclar/tema';

export default function BolumKarti({ baslik, ikon, renk, aciklama, taslakMi, sagTaraf, children }) {
  const ikonRengi = renk || renkler.vurgu;
  return (
    <View style={stiller.kart}>
      <View style={stiller.baslikSatiri}>
        {ikon ? <MaterialCommunityIcons name={ikon} size={24} color={ikonRengi} /> : null}
        <Text style={stiller.baslik}>{baslik}</Text>
        {taslakMi ? <TaslakEtiketi /> : null}
        <View style={stiller.bosluk} />
        {/* Sağ köşeye ek bir şey konabilir (ör. ilerleme yüzdesi) */}
        {sagTaraf}
      </View>
      {aciklama ? <Text style={stiller.aciklama}>{aciklama}</Text> : null}
      {children}
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
  baslikSatiri: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  baslik: {
    color: renkler.yazi,
    fontSize: yaziBoyutlari.orta + 1,
    fontWeight: 'bold',
    marginLeft: bosluklar.kucuk,
  },
  bosluk: { flex: 1 }, // Sağ taraftakini en sağa iter
  aciklama: {
    color: renkler.ikincilYazi,
    fontSize: yaziBoyutlari.normal,
    marginTop: bosluklar.kucuk,
  },
});
