// Bu dosya "Acil Durum" sekmesinin içindeki sayfa yığınını (Stack) kurar.
// Önce liste ekranı (index.js) açılır; bir senaryoya dokununca [id].js onun üstüne açılır.
// Senaryo ekranı sekmenin içinde olduğu için alt menü ekranda kalmaya devam eder.

import { Stack } from 'expo-router';
import { renkler } from '../../../araclar/tema';

// Bir senaryo doğrudan açılsa bile (ör. Ana Sayfa'daki kısayoldan) altında liste ekranı dursun;
// böylece geri dönünce veya "Acil Durum"a tekrar dokununca listeye gelinir.
export const unstable_settings = {
  initialRouteName: 'index',
};

export default function AcilDuzeni() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Üst başlığı kendimiz çizeceğiz
        contentStyle: { backgroundColor: renkler.arkaPlan },
      }}
    />
  );
}
