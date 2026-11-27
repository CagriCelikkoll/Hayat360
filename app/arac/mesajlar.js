// Bu dosya "Yakındakilere Mesaj" aracıdır.
// İleride internet olmadan, yakındaki telefonlarla Bluetooth/Wi-Fi üzerinden mesajlaşmayı sağlayacak.
// Şimdilik sadece "Yakında" bilgisini gösteriyor.

import { Text, StyleSheet } from 'react-native';
import AracEkrani from '../../bilesenler/AracEkrani';
import { renkler, yaziBoyutlari } from '../../araclar/tema';

export default function MesajlarEkrani() {
  return (
    <AracEkrani
      baslik="Yakındakilere Mesaj"
      aciklama="İnternet ve şebeke yokken yakındaki Hayat360 kullanıcılarıyla mesajlaşma."
      ikon="access-point"
      renk="#0ED9C3"
    >
      <Text style={stiller.yakinda}>Yakında</Text>
      <Text style={stiller.not}>
        Bu özellik, uygulamanın telefona yüklenen APK sürümünde çalışacak.
      </Text>
    </AracEkrani>
  );
}

const stiller = StyleSheet.create({
  yakinda: {
    color: renkler.yazi,
    fontSize: yaziBoyutlari.buyuk,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  not: {
    color: renkler.ikincilYazi,
    fontSize: yaziBoyutlari.normal,
    textAlign: 'center',
    marginTop: 8,
  },
});
