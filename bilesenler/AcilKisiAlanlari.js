// Bu dosya Profil'deki "Acil Kişiler" bölümünü çizer: en fazla 3 kişi (ad + telefon).
// Bu kişiler Ana Sayfa'daki "Konumumu Gönder" SMS'inde alıcı olarak kullanılır.
// "kisiler" her zaman 3 elemanlı bir listedir; boş satırlar kaydedilirken atılır.

import { View, Text, StyleSheet } from 'react-native';
import MetinAlani from './MetinAlani';
import { renkler, yaziBoyutlari, bosluklar } from '../araclar/tema';

export default function AcilKisiAlanlari({ kisiler, degisince }) {
  // Bir kişinin bir alanını (ad veya telefon) değiştirir; listenin geri kalanı aynı kalır
  function kisiyiDegistir(sira, alan, yeniDeger) {
    const yeniListe = kisiler.map((kisi, i) => {
      if (i === sira) {
        return { ...kisi, [alan]: yeniDeger };
      }
      return kisi;
    });
    degisince(yeniListe);
  }

  return (
    <View>
      {kisiler.map((kisi, sira) => (
        <View key={sira} style={stiller.kisi}>
          <Text style={stiller.kisiBasligi}>{sira + 1}. kişi</Text>
          <MetinAlani
            etiket="Ad"
            deger={kisi.ad}
            degisince={(yazi) => kisiyiDegistir(sira, 'ad', yazi)}
            ipucu="Ör. Annem"
          />
          <MetinAlani
            etiket="Telefon"
            deger={kisi.telefon}
            degisince={(yazi) => kisiyiDegistir(sira, 'telefon', yazi)}
            ipucu="05xx xxx xx xx"
            klavye="phone-pad"
            enFazla={20}
          />
        </View>
      ))}
    </View>
  );
}

const stiller = StyleSheet.create({
  kisi: {
    borderTopColor: renkler.kartKenari,
    borderTopWidth: 1,
    marginTop: bosluklar.buyuk,
    paddingTop: bosluklar.orta,
  },
  kisiBasligi: {
    color: renkler.yazi,
    fontSize: yaziBoyutlari.normal,
    fontWeight: 'bold',
  },
});
