// Bu dosya alttaki 5 sekmeli menüyü kurar.
// Bu klasördeki her dosya (index, rehber, acil, hazirlik, profil) bir sekme olur.
// Menünün görünüşü bilesenler/AltMenu.js dosyasında çizilir.

import { Tabs } from 'expo-router';
import AltMenu from '../../bilesenler/AltMenu';
import { renkler } from '../../araclar/tema';

export default function SekmeDuzeni() {
  return (
    <Tabs
      // Hazır menü yerine kendi çizdiğimiz alt menüyü kullan
      tabBar={(ozellikler) => <AltMenu {...ozellikler} />}
      screenOptions={{
        headerShown: false,
        sceneStyle: { backgroundColor: renkler.arkaPlan },
      }}
    >
      {/* Sekmelerin soldan sağa sırası */}
      <Tabs.Screen name="index" />
      <Tabs.Screen name="rehber" />
      <Tabs.Screen name="acil" />
      <Tabs.Screen name="hazirlik" />
      <Tabs.Screen name="profil" />
    </Tabs>
  );
}
