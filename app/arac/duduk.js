// Bu dosya "Düdük" aracıdır: yüksek sesli bir düdük sesini döngüde çalar.
// Ses dosyası (assets/sesler/duduk.wav) uygulamanın içinde gelir, internet gerekmez.
// Telefon sessiz moddayken de çalar; ekrandan çıkınca ses mutlaka durur.

import { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from 'expo-router';
import { useAudioPlayer, setAudioModeAsync } from 'expo-audio';

import AracEkrani from '../../bilesenler/AracEkrani';
import AracDugmesi from '../../bilesenler/AracDugmesi';

const DUDUK_RENGI = '#F88F3E'; // Turuncu

export default function DudukEkrani() {
  // Ses oynatıcı: ekran açılınca hazırlanır, ekran kapanınca kendiliğinden silinir
  const oynatici = useAudioPlayer(require('../../assets/sesler/duduk.wav'));
  const [caliyor, setCaliyor] = useState(false);

  // Ekran açılınca: sessiz modda da çalsın, döngüde çalsın, ses en yüksekte olsun
  useEffect(() => {
    setAudioModeAsync({ playsInSilentMode: true }).catch(() => {});
    oynatici.loop = true;
    oynatici.volume = 1;
  }, [oynatici]);

  // Ekrandan çıkınca (geri dönünce veya başka ekrana geçince) sesi mutlaka durdur
  useFocusEffect(
    useCallback(() => {
      return () => {
        try {
          oynatici.pause();
        } catch (hata) {
          // Oynatıcı zaten kapanmışsa yapılacak bir şey yok
        }
        setCaliyor(false);
      };
    }, [oynatici])
  );

  // Düğmeye basınca: çalıyorsa durdur, duruyorsa başlat
  function dudukuAcKapat() {
    if (caliyor) {
      oynatici.pause();
      setCaliyor(false);
    } else {
      oynatici.seekTo(0); // Sesi baştan başlat
      oynatici.play();
      setCaliyor(true);
    }
  }

  return (
    <AracEkrani
      baslik="Düdük"
      aciklama="Enkaz altındaysan veya yardım çağırman gerekiyorsa düdük sesi bağırmaktan daha uzağa ulaşır ve seni yormaz."
      ikon="whistle"
      renk={DUDUK_RENGI}
    >
      <AracDugmesi
        yazi={caliyor ? 'Düdüğü Durdur' : 'Düdüğü Çal'}
        ikon={caliyor ? 'stop' : 'play'}
        renk={DUDUK_RENGI}
        aktifMi={caliyor}
        dokununca={dudukuAcKapat}
      />
    </AracEkrani>
  );
}
