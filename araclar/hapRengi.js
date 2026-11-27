// Bu dosya, alt menüdeki seçili sekmenin "hap" rengini bir ekranın içinden değiştirmeye yarar.
// Örneğin bir senaryo ekranı açıkken "Acil Durum" hapı o senaryonun kategori rengini alır.
// Ekrandan çıkınca renk tekrar varsayılana (tema.js'deki vurgu rengine) döner.

import { useCallback } from 'react';
import { useFocusEffect, useNavigation } from 'expo-router';

// Kullanımı: bir ekranın içinde useHapRengi('#4EA6FD') yazmak yeterli.
export function useHapRengi(renk) {
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      // getParent(): bu ekranın bir üstündeki gezgin, yani alttaki sekmeli menü.
      // Rengi o sekmenin ayarlarına "hapRengi" adıyla yazıyoruz; AltMenu.js oradan okuyor.
      const sekmeMenusu = navigation.getParent();
      sekmeMenusu?.setOptions({ hapRengi: renk });

      // Ekran kapanınca veya başka ekrana geçilince rengi sıfırla
      return () => {
        sekmeMenusu?.setOptions({ hapRengi: undefined });
      };
    }, [navigation, renk])
  );
}
