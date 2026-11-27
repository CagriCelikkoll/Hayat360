// Bu dosya kurtarma ekibine gösterilecek tam ekran "Acil Durum Kartı"nı çizer.
// Beyaz zemin üstüne siyah, büyük yazı kullanılır (yüksek kontrast, uzaktan okunur).
// Boş bırakılan alanlar kartta hiç gösterilmez.

import { Modal, View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { bosluklar } from '../araclar/tema';

const KIRMIZI = '#C8102E';

// Tek bir satır: küçük etiket + büyük değer. Değer boşsa hiçbir şey çizmez.
function KartSatiri({ etiket, deger }) {
  if (!deger || deger.trim() === '') {
    return null;
  }
  return (
    <View style={stiller.satir}>
      <Text style={stiller.etiket}>{etiket}</Text>
      <Text style={stiller.deger}>{deger}</Text>
    </View>
  );
}

export default function AcilDurumKarti({ acikMi, kapat, kart, kisiler }) {
  // Sadece adı veya telefonu dolu olan kişileri göster
  const doluKisiler = kisiler.filter((kisi) => (kisi.ad || '').trim() !== '' || (kisi.telefon || '').trim() !== '');

  // Kartta gösterilecek hiçbir bilgi yoksa kullanıcıya ne yapacağını söyle
  const kartAlanlari = [kart.adSoyad, kart.dogumYili, kart.kanGrubu, kart.alerjiler, kart.kronikHastaliklar, kart.ilaclar];
  const kartBosMu = kartAlanlari.every((alan) => !alan || alan.trim() === '') && doluKisiler.length === 0;

  return (
    <Modal visible={acikMi} animationType="slide" onRequestClose={kapat}>
      <SafeAreaView style={stiller.ekran}>
        {/* Kırmızı şerit başlık */}
        <View style={stiller.serit}>
          <MaterialCommunityIcons name="medical-bag" size={34} color="#FFFFFF" />
          <Text style={stiller.seritYazisi}>ACİL DURUM KARTI</Text>
        </View>

        <ScrollView contentContainerStyle={stiller.icerik}>
          {kartBosMu ? (
            <Text style={stiller.etiket}>Kart boş. Profil’de bilgilerini doldurup kaydet.</Text>
          ) : null}
          <KartSatiri etiket="Ad Soyad" deger={kart.adSoyad} />
          <KartSatiri etiket="Doğum Yılı" deger={kart.dogumYili} />
          <KartSatiri etiket="Kan Grubu" deger={kart.kanGrubu} />
          <KartSatiri etiket="Alerjiler" deger={kart.alerjiler} />
          <KartSatiri etiket="Kronik Hastalıklar" deger={kart.kronikHastaliklar} />
          <KartSatiri etiket="Kullandığı İlaçlar" deger={kart.ilaclar} />

          {doluKisiler.length > 0 ? (
            <View style={stiller.satir}>
              <Text style={stiller.etiket}>Acil Kişiler</Text>
              {doluKisiler.map((kisi, sira) => (
                <Text key={sira} style={stiller.deger}>
                  {kisi.ad}
                  {kisi.ad && kisi.telefon ? ': ' : ''}
                  {kisi.telefon}
                </Text>
              ))}
            </View>
          ) : null}
        </ScrollView>

        <Pressable onPress={kapat} style={stiller.kapatDugmesi}>
          <Text style={stiller.kapatYazisi}>Kapat</Text>
        </Pressable>
      </SafeAreaView>
    </Modal>
  );
}

const stiller = StyleSheet.create({
  ekran: { flex: 1, backgroundColor: '#FFFFFF' },
  serit: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: KIRMIZI,
    paddingVertical: bosluklar.buyuk,
  },
  seritYazisi: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: bosluklar.orta,
  },
  icerik: { padding: bosluklar.cokBuyuk },
  satir: {
    borderBottomColor: '#D0D0D0',
    borderBottomWidth: 1,
    paddingVertical: bosluklar.orta,
  },
  etiket: { color: '#444444', fontSize: 18, fontWeight: '600' },
  deger: { color: '#000000', fontSize: 30, fontWeight: 'bold', marginTop: 2 },
  kapatDugmesi: {
    backgroundColor: '#000000',
    margin: bosluklar.buyuk,
    borderRadius: 16,
    paddingVertical: bosluklar.buyuk,
    alignItems: 'center',
  },
  kapatYazisi: { color: '#FFFFFF', fontSize: 22, fontWeight: 'bold' },
});
