// Bu dosya "Fener" aracıdır: telefonun flaşını açıp kapatır ve SOS deseninde yakıp söndürür.
// Flaş için kamera izni gerekir (fotoğraf çekilmez). Flaş yoksa veya izin verilmezse
// tam ekran beyaz "ekran feneri" kullanılabilir. Ekrandan çıkınca flaş mutlaka kapanır.

import { useState, useEffect, useCallback } from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';
import { useFocusEffect } from 'expo-router';
import { CameraView, useCameraPermissions } from 'expo-camera';

import { sosDeseni } from '../../araclar/sos';
import { renkler, yaziBoyutlari, bosluklar } from '../../araclar/tema';
import AracEkrani from '../../bilesenler/AracEkrani';
import AracDugmesi from '../../bilesenler/AracDugmesi';
import EkranFeneri from '../../bilesenler/EkranFeneri';

const FENER_RENGI = '#E0A800'; // Koyu sarı

export default function FenerEkrani() {
  const [kameraIzni, kameraIzniIste] = useCameraPermissions();
  const [isikAcik, setIsikAcik] = useState(false); // Şu an ışık yanıyor mu?
  const [sosAcik, setSosAcik] = useState(false); // SOS deseni çalışıyor mu?
  const [ekranFeneriAcik, setEkranFeneriAcik] = useState(false);

  // Flaş kullanılabilir mi? Web'de flaş yoktur; telefonda kamera izni gerekir.
  const webMi = Platform.OS === 'web';
  const flasKullanilabilir = !webMi && kameraIzni !== null && kameraIzni.granted;

  // SOS açıkken ışığı desene göre sırayla yakıp söndür
  useEffect(() => {
    if (!sosAcik) {
      return;
    }
    let adim = 0;
    let zamanlayici;
    function sonrakiAdim() {
      const simdiki = sosDeseni[adim];
      setIsikAcik(simdiki.acik);
      zamanlayici = setTimeout(() => {
        adim = (adim + 1) % sosDeseni.length; // Desen bitince başa dön
        sonrakiAdim();
      }, simdiki.sure);
    }
    sonrakiAdim();

    // SOS kapanınca zamanlayıcıyı durdur ve ışığı söndür
    return () => {
      clearTimeout(zamanlayici);
      setIsikAcik(false);
    };
  }, [sosAcik]);

  // Ekrandan çıkınca her şeyi kapat (flaş, SOS, ekran feneri)
  useFocusEffect(
    useCallback(() => {
      return () => {
        setSosAcik(false);
        setIsikAcik(false);
        setEkranFeneriAcik(false);
      };
    }, [])
  );

  function feneriAcKapat() {
    setSosAcik(false);
    setIsikAcik(!isikAcik);
  }

  function sosAcKapat() {
    if (sosAcik) {
      setSosAcik(false);
      setEkranFeneriAcik(false);
    } else {
      setSosAcik(true);
      // Flaş yoksa SOS'u ekranda göster
      if (!flasKullanilabilir) {
        setEkranFeneriAcik(true);
      }
    }
  }

  function ekranFeneriniAc() {
    setSosAcik(false);
    setIsikAcik(true);
    setEkranFeneriAcik(true);
  }

  function ekranFeneriniKapat() {
    setSosAcik(false);
    setIsikAcik(false);
    setEkranFeneriAcik(false);
  }

  return (
    <View style={stiller.kok}>
      <AracEkrani
        baslik="Fener"
        aciklama="Karanlıkta yolunu bul ya da SOS deseniyle yerini göster."
        ikon="flashlight"
        renk={FENER_RENGI}
      >
        {/* Flaş kullanılamıyorsa nedenini açıkla */}
        {webMi ? (
          <Text style={stiller.bilgi}>Bu cihazda flaş kullanılamıyor. Ekran fenerini kullanabilirsin.</Text>
        ) : null}
        {!webMi && kameraIzni !== null && !kameraIzni.granted ? (
          <View style={stiller.izinKutusu}>
            <Text style={stiller.bilgi}>
              Flaşı açmak için kamera izni gerekiyor. Hayat360 fotoğraf veya video çekmez; kamerayı sadece flaşı
              yakmak için kullanır.
            </Text>
            {kameraIzni.canAskAgain ? (
              <AracDugmesi yazi="Kamera İzni Ver" ikon="camera" renk={FENER_RENGI} dokununca={kameraIzniIste} />
            ) : (
              <Text style={stiller.bilgi}>
                İzin daha önce reddedildi. Telefonun Ayarlar bölümünden Hayat360’a kamera izni verebilirsin.
              </Text>
            )}
          </View>
        ) : null}

        <AracDugmesi
          yazi={isikAcik && !sosAcik ? 'Feneri Kapat' : 'Feneri Aç'}
          ikon="flashlight"
          renk={FENER_RENGI}
          aktifMi={isikAcik && !sosAcik && !ekranFeneriAcik}
          devreDisiMi={!flasKullanilabilir}
          dokununca={feneriAcKapat}
        />
        <AracDugmesi
          yazi={sosAcik ? 'SOS’u Durdur' : 'SOS (· · · — — — · · ·)'}
          ikon="alarm-light-outline"
          renk={renkler.tehlike}
          aktifMi={sosAcik}
          dokununca={sosAcKapat}
        />
        <AracDugmesi yazi="Ekran Feneri" ikon="cellphone" renk={renkler.ikincilYazi} dokununca={ekranFeneriniAc} />
      </AracEkrani>

      {/* Flaşı yakmak için görünmeyen küçük kamera. Ekrandan çıkınca kaldırılır ve flaş söner. */}
      {flasKullanilabilir ? (
        <CameraView style={stiller.gizliKamera} facing="back" enableTorch={isikAcik && !ekranFeneriAcik} />
      ) : null}

      {/* Tam ekran beyaz ışık (ve flaş yoksa SOS deseni) */}
      {ekranFeneriAcik ? <EkranFeneri isikAcik={isikAcik} kapat={ekranFeneriniKapat} /> : null}
    </View>
  );
}

const stiller = StyleSheet.create({
  kok: {
    flex: 1,
    backgroundColor: renkler.arkaPlan,
  },
  izinKutusu: {
    marginBottom: bosluklar.orta,
  },
  bilgi: {
    color: renkler.ikincilYazi,
    fontSize: yaziBoyutlari.normal,
    textAlign: 'center',
    marginBottom: bosluklar.kucuk,
  },
  gizliKamera: {
    position: 'absolute',
    width: 1, // 1 piksellik kamera görüntüsü fark edilmez; flaşın çalışması için kameranın açık olması yeterli
    height: 1,
  },
});
