// Bu dosya kan grubu seçme düğmelerini çizer (A Rh+, A Rh−, ... 0 Rh−).
// Bir düğmeye dokununca o kan grubu seçilir; seçili düğmeye tekrar dokununca seçim kalkar.

import { View, Text, Pressable, StyleSheet } from 'react-native';
import { renkler, yaziBoyutlari, bosluklar } from '../araclar/tema';

const KAN_GRUPLARI = ['A Rh+', 'A Rh−', 'B Rh+', 'B Rh−', 'AB Rh+', 'AB Rh−', '0 Rh+', '0 Rh−'];

export default function KanGrubuSecici({ secili, degisince }) {
  function dokun(kanGrubu) {
    if (secili === kanGrubu) {
      degisince(''); // Aynısına tekrar dokunduysa seçimi kaldır
    } else {
      degisince(kanGrubu);
    }
  }

  return (
    <View style={stiller.alan}>
      <Text style={stiller.etiket}>Kan grubu</Text>
      <View style={stiller.izgara}>
        {KAN_GRUPLARI.map((kanGrubu) => {
          const seciliMi = secili === kanGrubu;
          return (
            <Pressable
              key={kanGrubu}
              onPress={() => dokun(kanGrubu)}
              style={[stiller.dugme, seciliMi ? stiller.seciliDugme : null]}
            >
              <Text style={stiller.yazi}>{kanGrubu}</Text>
            </Pressable>
          );
        })}
      </View>
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
  izgara: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Sığmayan düğmeler alt satıra geçsin
  },
  dugme: {
    borderColor: renkler.kartKenari,
    borderWidth: 1.5,
    borderRadius: 10,
    paddingVertical: bosluklar.kucuk,
    paddingHorizontal: bosluklar.orta,
    marginRight: bosluklar.kucuk,
    marginBottom: bosluklar.kucuk,
    backgroundColor: renkler.icKart,
  },
  seciliDugme: {
    backgroundColor: renkler.tehlike, // Seçili kan grubu kırmızı dolu
    borderColor: renkler.tehlike,
  },
  yazi: {
    color: renkler.yazi,
    fontSize: yaziBoyutlari.normal,
    fontWeight: 'bold',
  },
});
