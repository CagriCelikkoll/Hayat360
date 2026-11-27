// Bu dosya Ana Sayfa sekmesinin kendi sayfa yığınını (Stack) kurar.
// En altta Ana Sayfa (index.js) durur; Hızlı Erişim'den açılan senaryo (senaryo/[id].js) onun üstüne açılır.
// Böylece Hızlı Erişim, Acil Durum sekmesinin geçmişine hiç dokunmaz.

import { Stack } from 'expo-router';
import { renkler } from '../../../araclar/tema';

// Bir senaryo doğrudan açılsa bile altında Ana Sayfa dursun; geri ok Ana Sayfa'ya dönsün
export const unstable_settings = {
  initialRouteName: 'index',
};

export default function AnaSayfaDuzeni() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: renkler.arkaPlan },
      }}
    />
  );
}
