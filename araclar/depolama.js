// Bu dosya telefonda kalıcı bilgi saklamak için AsyncStorage yardımcılarını içerir.
// Bilgiler internete gitmez, sadece bu telefonda saklanır.
// Şimdilik acil kişiler listesi burada okunur; Profil ekranı yazılınca kaydetme de buradan yapılacak.

import AsyncStorage from '@react-native-async-storage/async-storage';

// Acil kişilerin saklandığı anahtar (dolap etiketi gibi düşünebilirsin)
const ACIL_KISILER_ANAHTARI = 'acilKisiler';

// Kayıtlı acil kişileri okur. Biçim: [{ ad: 'Annem', telefon: '05xx...' }, ...]
// Hiç kayıt yoksa veya okuma başarısız olursa boş liste döner.
export async function acilKisileriOku() {
  try {
    const kayit = await AsyncStorage.getItem(ACIL_KISILER_ANAHTARI);
    if (kayit === null) {
      return [];
    }
    return JSON.parse(kayit);
  } catch (hata) {
    return [];
  }
}

// Acil kişi listesini kaydeder (Profil ekranı kullanacak)
export async function acilKisileriKaydet(kisiler) {
  await AsyncStorage.setItem(ACIL_KISILER_ANAHTARI, JSON.stringify(kisiler));
}
