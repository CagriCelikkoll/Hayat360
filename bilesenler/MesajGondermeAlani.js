// Bu dosya Yakındakilere Mesaj ekranının alt kısmıdır:
// hazır mesaj düğmeleri ("Güvendeyim" vb.), "SOS + Konumum" düğmesi ve serbest yazı kutusu.
// Düğmeye basınca "gonder(metin)" çağrılır; asıl gönderme işini ekran yapar.

import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { renkler, yaziBoyutlari, bosluklar } from '../araclar/tema';

const MESAJ_RENGI = '#0ED9C3';

// Tek dokunuşla gönderilen hazır mesajlar
const HAZIR_MESAJLAR = [
  { metin: 'Güvendeyim', ikon: 'shield-check', renk: renkler.guvenli },
  { metin: 'Yaralıyım', ikon: 'bandage', renk: '#F88F3E' },
  { metin: 'Enkaz altındayım', ikon: 'home-alert', renk: renkler.tehlike },
  { metin: 'Suya ihtiyacım var', ikon: 'cup-water', renk: '#4EA6FD' },
];

export default function MesajGondermeAlani({ gonder, sosGonder, sosHazirlaniyor }) {
  const [yazi, setYazi] = useState('');

  // Serbest yazıyı gönder ve kutuyu temizle
  function yaziyiGonder() {
    const temizYazi = yazi.trim();
    if (temizYazi === '') {
      return;
    }
    gonder(temizYazi);
    setYazi('');
  }

  return (
    <View style={stiller.alan}>
      {/* Hazır mesajlar: 2x2 düğme */}
      <View style={stiller.hazirlar}>
        {HAZIR_MESAJLAR.map((hazir) => (
          <Pressable key={hazir.metin} onPress={() => gonder(hazir.metin)} style={[stiller.hazirDugme, { borderColor: hazir.renk }]}>
            <MaterialCommunityIcons name={hazir.ikon} size={20} color={hazir.renk} />
            <Text style={stiller.hazirYazi}>{hazir.metin}</Text>
          </Pressable>
        ))}
      </View>

      {/* SOS + Konumum: GPS konumunu ve harita bağlantısını ekler */}
      <Pressable onPress={sosGonder} disabled={sosHazirlaniyor} style={[stiller.sosDugmesi, sosHazirlaniyor ? stiller.soluk : null]}>
        <MaterialCommunityIcons name="map-marker-alert" size={24} color={renkler.yazi} />
        <Text style={stiller.sosYazisi}>{sosHazirlaniyor ? 'Konum alınıyor…' : 'SOS + Konumum'}</Text>
      </Pressable>

      {/* Serbest yazı kutusu ve gönder düğmesi */}
      <View style={stiller.yaziSatiri}>
        <TextInput
          style={stiller.yaziKutusu}
          value={yazi}
          onChangeText={setYazi}
          placeholder="Mesaj yaz…"
          placeholderTextColor="#7D8A9C"
          maxLength={300}
          onSubmitEditing={yaziyiGonder} // Klavyedeki "Gönder"e basınca da gönder
          returnKeyType="send"
        />
        <Pressable onPress={yaziyiGonder} style={stiller.gonderDugmesi}>
          <MaterialCommunityIcons name="send" size={24} color={renkler.arkaPlan} />
        </Pressable>
      </View>
    </View>
  );
}

const stiller = StyleSheet.create({
  alan: {
    borderTopColor: renkler.kartKenari,
    borderTopWidth: 1,
    paddingTop: bosluklar.kucuk,
    paddingHorizontal: bosluklar.buyuk,
    paddingBottom: bosluklar.kucuk,
  },
  hazirlar: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  hazirDugme: {
    width: '49%', // Yan yana iki düğme
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: renkler.kart,
    borderWidth: 1.5,
    borderRadius: 12,
    paddingVertical: bosluklar.kucuk,
    paddingHorizontal: bosluklar.orta,
    marginTop: bosluklar.kucuk,
  },
  hazirYazi: { color: renkler.yazi, fontSize: yaziBoyutlari.normal, fontWeight: 'bold', marginLeft: bosluklar.kucuk },
  sosDugmesi: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: renkler.tehlike,
    borderRadius: 12,
    paddingVertical: bosluklar.orta,
    marginTop: bosluklar.kucuk,
  },
  soluk: { opacity: 0.5 },
  sosYazisi: { color: renkler.yazi, fontSize: yaziBoyutlari.orta, fontWeight: 'bold', marginLeft: bosluklar.kucuk },
  yaziSatiri: { flexDirection: 'row', alignItems: 'center', marginTop: bosluklar.kucuk },
  yaziKutusu: {
    flex: 1,
    backgroundColor: renkler.icKart,
    borderColor: renkler.kartKenari,
    borderWidth: 1,
    borderRadius: 22,
    color: renkler.yazi,
    fontSize: yaziBoyutlari.normal + 1,
    paddingHorizontal: bosluklar.buyuk,
    paddingVertical: bosluklar.kucuk + 2,
  },
  gonderDugmesi: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: MESAJ_RENGI,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: bosluklar.kucuk,
  },
});
