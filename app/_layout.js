// Bu dosya uygulamanın kök düzenidir; uygulama açılınca ilk burası çalışır.
// Tüm ekranları bir "Stack" (üst üste açılan sayfalar) içine koyar ve
// telefonun üstteki saat/pil yazılarını koyu temaya uygun olarak beyaz yapar.

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { renkler } from '../araclar/tema';

export default function KokDuzen() {
  return (
    <>
      {/* Üstteki saat ve pil simgeleri açık renkte görünsün */}
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false, // Hazır üst başlığı kullanmıyoruz, kendi başlığımızı çizeceğiz
          contentStyle: { backgroundColor: renkler.arkaPlan },
        }}
      />
    </>
  );
}
