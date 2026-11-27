// Bu dosya renkli çerçeveli bir bilgi kutusu çizer (ör. konum izni açıklaması, hata mesajı).
// "yazi" kutunun içindeki metindir; "children" ile altına düğmeler eklenebilir.
// "renk" çerçeve rengini belirler (bilgi için mavi, uyarı için kırmızı gibi).

import { View, Text, StyleSheet } from 'react-native';
import { renkler, yaziBoyutlari, bosluklar, koseler } from '../araclar/tema';

export default function BilgiKutusu({ yazi, renk, children }) {
  return (
    <View style={[stiller.kutu, { borderColor: renk }]}>
      <Text style={stiller.yazi}>{yazi}</Text>
      {children}
    </View>
  );
}

const stiller = StyleSheet.create({
  kutu: {
    backgroundColor: renkler.kart,
    borderWidth: 1.5,
    borderRadius: koseler.kart,
    padding: bosluklar.buyuk,
    marginTop: bosluklar.orta,
  },
  yazi: {
    color: renkler.yazi,
    fontSize: yaziBoyutlari.normal,
  },
});
