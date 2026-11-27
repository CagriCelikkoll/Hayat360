// Bu dosya tam ekran "ekran feneri"ni çizer: bütün ekranı beyaz yapar (ya da SOS'ta siyah/beyaz yanıp söner).
// Flaşı olmayan veya kamera izni verilmeyen telefonlarda ışık kaynağı olarak kullanılır.
// Ekrana dokununca "kapat" fonksiyonu çalışır.

import { Text, Pressable, StyleSheet } from 'react-native';
import { yaziBoyutlari } from '../araclar/tema';

// Renkler bilerek sabit beyaz/siyah: ışık en parlak olsun diye tema rengi kullanılmadı.

export default function EkranFeneri({ isikAcik, kapat }) {
  return (
    <Pressable
      onPress={kapat}
      style={[stiller.tamEkran, { backgroundColor: isikAcik ? '#FFFFFF' : '#000000' }]}
    >
      <Text style={[stiller.yazi, { color: isikAcik ? '#555555' : '#777777' }]}>
        Kapatmak için ekrana dokun
      </Text>
    </Pressable>
  );
}

const stiller = StyleSheet.create({
  tamEkran: {
    // Ekranın tamamını kaplasın (başka her şeyin üstünde)
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 60,
    zIndex: 10,
  },
  yazi: {
    fontSize: yaziBoyutlari.normal,
  },
});
