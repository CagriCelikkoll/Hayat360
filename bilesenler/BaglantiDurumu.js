// Bu dosya Yakındakilere Mesaj ekranının üstündeki durum kutusunu çizer.
// Çalışırken "Yakında 2 kişi bağlı" yazar; özellik kullanılamıyorsa, izin gerekiyorsa
// ya da bir hata olduysa nedenini ve (gerekirse) bir düğme gösterir.

import { View, Text, Pressable, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { renkler, yaziBoyutlari, bosluklar, koseler } from '../araclar/tema';

const MESAJ_RENGI = '#0ED9C3';

// durum: 'kontrol' | 'desteklenmiyor' | 'izinGerekli' | 'calisiyor' | 'hata'
export default function BaglantiDurumu({ durum, kisiSayisi, mesaj, dugmeYazisi, dugmeyeBasinca }) {
  // Duruma göre renk, ikon ve yazı seç
  let renk = MESAJ_RENGI;
  let ikon = 'access-point';
  let yazi = mesaj;

  if (durum === 'kontrol') {
    ikon = 'progress-clock';
    yazi = 'Hazırlanıyor…';
  } else if (durum === 'calisiyor') {
    ikon = kisiSayisi > 0 ? 'account-multiple-check' : 'access-point';
    yazi = kisiSayisi > 0 ? 'Yakında ' + kisiSayisi + ' kişi bağlı' : 'Yakındaki Hayat360 kullanıcıları aranıyor…';
  } else if (durum === 'desteklenmiyor') {
    renk = renkler.taslak;
    ikon = 'cellphone-off';
  } else if (durum === 'izinGerekli') {
    renk = '#4EA6FD';
    ikon = 'shield-key-outline';
  } else if (durum === 'hata') {
    renk = renkler.tehlike;
    ikon = 'alert-circle-outline';
  }

  return (
    <View style={[stiller.kutu, { borderColor: renk }]}>
      <View style={stiller.satir}>
        <MaterialCommunityIcons name={ikon} size={26} color={renk} />
        <Text style={[stiller.yazi, durum === 'calisiyor' ? stiller.buyukYazi : null]}>{yazi}</Text>
      </View>
      {dugmeYazisi ? (
        <Pressable onPress={dugmeyeBasinca} style={[stiller.dugme, { backgroundColor: renk }]}>
          <Text style={stiller.dugmeYazisi}>{dugmeYazisi}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const stiller = StyleSheet.create({
  kutu: {
    backgroundColor: renkler.kart,
    borderWidth: 1.5,
    borderRadius: koseler.kart,
    padding: bosluklar.orta,
    marginTop: bosluklar.kucuk,
  },
  satir: { flexDirection: 'row', alignItems: 'center' },
  yazi: { flex: 1, color: renkler.yazi, fontSize: yaziBoyutlari.normal, marginLeft: bosluklar.orta },
  buyukYazi: { fontSize: yaziBoyutlari.orta, fontWeight: 'bold' },
  dugme: { borderRadius: 10, paddingVertical: bosluklar.kucuk + 2, alignItems: 'center', marginTop: bosluklar.orta },
  dugmeYazisi: { color: renkler.arkaPlan, fontSize: yaziBoyutlari.normal, fontWeight: 'bold' },
});
