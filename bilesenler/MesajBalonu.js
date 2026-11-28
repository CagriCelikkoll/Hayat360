// Bu dosya Yakındakilere Mesaj ekranındaki tek bir mesaj balonunu çizer.
// Kendi mesajlarım sağda (yeşil-mavi), gelen mesajlar solda (koyu kart rengi).
// Gelen mesajın altında kaç telefondan atlayarak geldiği küçük yazıyla görünür.

import { View, Text, StyleSheet } from 'react-native';
import { renkler, yaziBoyutlari, bosluklar } from '../araclar/tema';

const MESAJ_RENGI = '#0ED9C3';

// Zamanı "14:05" biçiminde yazar
function saatYazisi(zaman) {
  const tarih = new Date(zaman);
  const saat = String(tarih.getHours()).padStart(2, '0');
  const dakika = String(tarih.getMinutes()).padStart(2, '0');
  return saat + ':' + dakika;
}

// Mesajın altındaki küçük bilgi yazısı
function bilgiYazisi(mesaj) {
  if (mesaj.benimMi) {
    if (mesaj.ulasilanKisi === 0) {
      return 'Yakında bağlı kimse yoktu, kimseye ulaşmadı';
    }
    return mesaj.ulasilanKisi + ' telefona gönderildi';
  }
  if (mesaj.sekmeSayisi === 0) {
    return 'Doğrudan geldi';
  }
  return mesaj.sekmeSayisi + ' telefon üzerinden geldi';
}

export default function MesajBalonu({ mesaj }) {
  const benimMi = mesaj.benimMi === true;
  return (
    <View style={[stiller.satir, benimMi ? stiller.sagaYasla : stiller.solaYasla]}>
      <View style={[stiller.balon, benimMi ? stiller.benimBalonum : stiller.gelenBalon]}>
        {/* Gelen mesajda gönderenin adı */}
        {benimMi ? null : <Text style={stiller.gonderen}>{mesaj.gonderen}</Text>}
        <Text style={[stiller.metin, benimMi ? stiller.benimMetnim : null]} selectable>
          {mesaj.metin}
        </Text>
        <Text style={[stiller.bilgi, benimMi ? stiller.benimBilgim : null]}>
          {saatYazisi(mesaj.zaman)} · {bilgiYazisi(mesaj)}
        </Text>
      </View>
    </View>
  );
}

const stiller = StyleSheet.create({
  satir: { flexDirection: 'row', marginTop: bosluklar.kucuk },
  sagaYasla: { justifyContent: 'flex-end' },
  solaYasla: { justifyContent: 'flex-start' },
  balon: {
    maxWidth: '82%', // Balon ekranın tamamını kaplamasın
    borderRadius: 16,
    paddingVertical: bosluklar.kucuk,
    paddingHorizontal: bosluklar.orta,
  },
  benimBalonum: { backgroundColor: MESAJ_RENGI, borderBottomRightRadius: 4 },
  gelenBalon: {
    backgroundColor: renkler.kart,
    borderColor: renkler.kartKenari,
    borderWidth: 1,
    borderBottomLeftRadius: 4,
  },
  gonderen: { color: MESAJ_RENGI, fontSize: yaziBoyutlari.kucuk, fontWeight: 'bold', marginBottom: 2 },
  metin: { color: renkler.yazi, fontSize: yaziBoyutlari.normal + 1 },
  benimMetnim: { color: renkler.arkaPlan }, // Açık zemin üstünde koyu yazı
  bilgi: { color: renkler.ikincilYazi, fontSize: 11, marginTop: 4 },
  benimBilgim: { color: '#0B3A36' },
});
