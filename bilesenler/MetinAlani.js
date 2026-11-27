// Bu dosya üstünde etiket yazısı olan bir yazı kutusu (TextInput) çizer.
// Profil ve Aile Afet Planı formlarındaki tüm alanlar bu bileşeni kullanır.
// "klavye" ile telefon/sayı klavyesi seçilebilir, "cokSatirli" ile uzun not yazılabilir.

import { View, Text, TextInput, StyleSheet } from 'react-native';
import { renkler, yaziBoyutlari, bosluklar } from '../araclar/tema';

export default function MetinAlani({ etiket, deger, degisince, ipucu, klavye, enFazla, cokSatirli }) {
  return (
    <View style={stiller.alan}>
      <Text style={stiller.etiket}>{etiket}</Text>
      <TextInput
        style={[stiller.kutu, cokSatirli ? stiller.cokSatirliKutu : null]}
        value={deger || ''}
        onChangeText={degisince}
        placeholder={ipucu}
        placeholderTextColor="#7D8A9C"
        keyboardType={klavye || 'default'} // 'phone-pad' veya 'number-pad' verilebilir
        maxLength={enFazla}
        multiline={cokSatirli}
      />
    </View>
  );
}

const stiller = StyleSheet.create({
  alan: { marginTop: bosluklar.orta },
  etiket: {
    color: renkler.ikincilYazi,
    fontSize: yaziBoyutlari.kucuk + 1,
    fontWeight: '600',
    marginBottom: bosluklar.cokKucuk,
  },
  kutu: {
    backgroundColor: renkler.icKart,
    borderColor: renkler.kartKenari,
    borderWidth: 1,
    borderRadius: 12,
    color: renkler.yazi,
    fontSize: yaziBoyutlari.normal + 1,
    paddingHorizontal: bosluklar.orta,
    paddingVertical: bosluklar.kucuk + 2,
  },
  cokSatirliKutu: {
    minHeight: 80,
    textAlignVertical: 'top', // Android'de yazı en üstten başlasın
  },
});
