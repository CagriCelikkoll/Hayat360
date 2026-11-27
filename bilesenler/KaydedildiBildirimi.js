// Bu dosya ekranın altında kısa süre görünen yeşil "Kaydedildi" bildirimini çizer.
// "gorunur" true olunca görünür; ekran onu bir süre sonra kendisi kapatır (useKaydedildiBildirimi).

import { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { renkler, yaziBoyutlari, bosluklar } from '../araclar/tema';

// Bildirimi açıp birkaç saniye sonra kendiliğinden kapatan yardımcı.
// Kullanımı: const [bildirimGorunur, bildirimGoster] = useKaydedildiBildirimi();
export function useKaydedildiBildirimi() {
  const [gorunur, setGorunur] = useState(false);
  const zamanlayici = useRef(null);

  function goster() {
    setGorunur(true);
    clearTimeout(zamanlayici.current); // Üst üste basılırsa süre baştan başlasın
    zamanlayici.current = setTimeout(() => setGorunur(false), 2000); // 2 saniye sonra kapat
  }

  // Ekran kapanırsa bekleyen zamanlayıcıyı temizle
  useEffect(() => () => clearTimeout(zamanlayici.current), []);

  return [gorunur, goster];
}

export default function KaydedildiBildirimi({ gorunur, yazi }) {
  if (!gorunur) {
    return null;
  }
  return (
    <View style={stiller.kutu} pointerEvents="none">
      <MaterialCommunityIcons name="check-circle" size={22} color={renkler.yazi} />
      <Text style={stiller.yazi}>{yazi || 'Kaydedildi'}</Text>
    </View>
  );
}

const stiller = StyleSheet.create({
  kutu: {
    position: 'absolute', // Sayfanın üstünde, alt kısımda yüzer
    bottom: bosluklar.buyuk,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#14874A', // Koyu yeşil
    borderRadius: 24,
    paddingVertical: bosluklar.kucuk + 2,
    paddingHorizontal: bosluklar.cokBuyuk,
  },
  yazi: {
    color: renkler.yazi,
    fontSize: yaziBoyutlari.normal + 1,
    fontWeight: 'bold',
    marginLeft: bosluklar.kucuk,
  },
});
