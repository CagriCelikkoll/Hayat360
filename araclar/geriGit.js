// Bu dosya ekranlardaki geri okunun ortak mantığını içerir.
// Geri ok, ekranın İÇİNDE BULUNDUĞU sayfa yığınında bir önceki ekrana döner; başka sekmeye atlamaz.
// Yığında önceki ekran yoksa (ör. adres doğrudan açıldıysa) "yedekAdres"e gider.

import { useNavigation, useRouter } from 'expo-router';

// Kullanımı: const geriGit = useGeriGit('/acil');  ...  <Pressable onPress={geriGit} />
export function useGeriGit(yedekAdres) {
  const navigation = useNavigation(); // Bu ekranın içinde bulunduğu sayfa yığını
  const router = useRouter();

  return function geriGit() {
    // Yığının durumu: index = şu an kaçıncı ekrandayız (0 = en alttaki ilk ekran)
    const yigin = navigation.getState();
    if (yigin && yigin.index > 0) {
      navigation.goBack(); // Aynı yığında bir önceki ekrana dön
    } else {
      router.replace(yedekAdres); // Önceki ekran yoksa listeye/ana ekrana git
    }
  };
}
