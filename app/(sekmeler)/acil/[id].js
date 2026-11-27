// Bu dosya tek bir senaryonun ekranıdır (ör. "Elektrik Kesintisi").
// Adresteki [id] kısmı hangi senaryonun açılacağını söyler: /acil/elektrik-kesintisi gibi.
// Senaryo verisi veri/senaryolar/ klasöründen okunur; ekranın parçaları bilesenler/ klasöründedir.

import { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';

import { senaryoBul } from '../../../veri/senaryolar';
import kategoriler from '../../../veri/kategoriler';
import { useHapRengi } from '../../../araclar/hapRengi';
import { renkler, bosluklar } from '../../../araclar/tema';

import BosEkran from '../../../bilesenler/BosEkran';
import SenaryoUstBar from '../../../bilesenler/SenaryoUstBar';
import SenaryoBasligi from '../../../bilesenler/SenaryoBasligi';
import SekmeButonu from '../../../bilesenler/SekmeButonu';
import YapilacaklarKarti from '../../../bilesenler/YapilacaklarKarti';
import IpucuKutusu from '../../../bilesenler/IpucuKutusu';
import OzelDurumKarti from '../../../bilesenler/OzelDurumKarti';
import KaynakSatiri from '../../../bilesenler/KaynakSatiri';

export default function SenaryoEkrani() {
  const router = useRouter();

  // 1) Adresten senaryonun kimliğini al ve veriden senaryoyu bul
  const { id } = useLocalSearchParams();
  const senaryo = senaryoBul(id);

  // 2) Senaryonun kategorisini bul (rengi ve adı için)
  const kategori = senaryo ? kategoriler.find((k) => k.id === senaryo.kategori) : undefined;
  const renk = kategori ? kategori.renk : renkler.vurgu;

  // 3) Alt menüdeki "Acil Durum" hapı bu kategorinin rengini alsın
  useHapRengi(renk);

  // 4) Hangi sekme açık? İçeriği olan ilk sekmeyle başla (önce Durum Anı, yoksa Sonrası)
  let ilkSekme = 'sonrasi';
  if (senaryo && senaryo.durumAni) {
    ilkSekme = 'durumAni';
  }
  const [seciliSekme, setSeciliSekme] = useState(ilkSekme);

  // Senaryo bulunamazsa (yanlış adres) kısa bir mesaj göster
  if (!senaryo) {
    return <BosEkran baslik="Senaryo bulunamadı" aciklama={`"${id}" adında bir senaryo yok.`} />;
  }

  // Seçili sekmenin içeriği (durumAni veya sonrasi)
  const icerik = senaryo[seciliSekme];

  // Geri okuna basınca: önceki ekran varsa oraya, yoksa Acil Durum listesine dön
  function geriGit() {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/acil');
    }
  }

  return (
    <SafeAreaView style={stiller.ekran} edges={['top']}>
      <ScrollView contentContainerStyle={stiller.icerik}>
        <SenaryoUstBar kategoriAdi={kategori.ad} renk={renk} geriGit={geriGit} />

        {/* Başlık ve özet seçili sekmeden gelir (ör. "Deprem Anında" / "Deprem Sonrası") */}
        <SenaryoBasligi
          ikon={senaryo.ikon}
          baslik={icerik ? icerik.baslik : senaryo.ad}
          ozet={icerik ? icerik.ozet : null}
          renk={renk}
          // Bu sekmeyi biz yazdıysak (kontrolEdilecek: true) başlıkta "Taslak" etiketi çıksın
          taslakMi={icerik ? icerik.kontrolEdilecek === true : false}
        />

        {/* Durum Anı / Sonrası butonları. İçeriği olmayan sekme soluk ve dokunulamaz. */}
        <View style={stiller.sekmeler}>
          <SekmeButonu
            yazi="Durum Anı"
            ikon="lightning-bolt"
            seciliMi={seciliSekme === 'durumAni'}
            bosMu={senaryo.durumAni === null}
            renk={renk}
            dokununca={() => setSeciliSekme('durumAni')}
          />
          <View style={stiller.sekmeArasi} />
          <SekmeButonu
            yazi="Sonrası"
            ikon="history"
            seciliMi={seciliSekme === 'sonrasi'}
            bosMu={senaryo.sonrasi === null}
            renk={renk}
            dokununca={() => setSeciliSekme('sonrasi')}
          />
        </View>

        {/* Sekmenin içeriği varsa kartları çiz */}
        {icerik ? (
          <>
            <YapilacaklarKarti
              baslik={seciliSekme === 'durumAni' ? 'Hemen Yapılacaklar' : 'Yapılacaklar'}
              maddeler={icerik.yapilacaklar}
              renk={renk}
            />

            {/* Yeşil ve kırmızı kutular yan yana */}
            <View style={stiller.ipuclari}>
              <IpucuKutusu tur="guvenli" maddeler={icerik.guvenliIpuclari} />
              <View style={stiller.sekmeArasi} />
              <IpucuKutusu tur="tehlike" maddeler={icerik.kacinilmasiGerekenler} />
            </View>

            <OzelDurumKarti
              ikon={icerik.ozelDurum.ikon}
              baslik={icerik.ozelDurum.baslik}
              aciklama={icerik.ozelDurum.aciklama}
              renk={renk}
            />

            <KaynakSatiri kaynak={icerik.kaynak} />
          </>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

const stiller = StyleSheet.create({
  ekran: {
    flex: 1,
    backgroundColor: renkler.arkaPlan,
  },
  icerik: {
    paddingHorizontal: bosluklar.buyuk,
    paddingBottom: bosluklar.cokBuyuk,
  },
  sekmeler: {
    flexDirection: 'row', // İki sekme butonu yan yana
    marginTop: bosluklar.buyuk,
  },
  sekmeArasi: {
    width: bosluklar.orta, // Yan yana iki öğe arasındaki boşluk
  },
  ipuclari: {
    flexDirection: 'row',
    marginTop: bosluklar.buyuk,
  },
});
