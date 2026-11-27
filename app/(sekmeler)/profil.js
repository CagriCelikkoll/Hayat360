// Bu dosya "Profil" sekmesidir: kişinin Acil Durum Kartı.
// Ad soyad, doğum yılı, kan grubu, sağlık bilgileri ve en fazla 3 acil kişi girilip telefona kaydedilir.
// Acil kişiler "Konumumu Gönder" SMS'inin alıcılarıdır. "Kartı Göster" tam ekran kartı açar.

import { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { acilKartiOku, acilKartiKaydet, acilKisileriOku, acilKisileriKaydet } from '../../araclar/depolama';
import { renkler, bosluklar } from '../../araclar/tema';

import EkranBasligi from '../../bilesenler/EkranBasligi';
import BolumKarti from '../../bilesenler/BolumKarti';
import MetinAlani from '../../bilesenler/MetinAlani';
import KanGrubuSecici from '../../bilesenler/KanGrubuSecici';
import AcilKisiAlanlari from '../../bilesenler/AcilKisiAlanlari';
import AracDugmesi from '../../bilesenler/AracDugmesi';
import AcilDurumKarti from '../../bilesenler/AcilDurumKarti';
import KaydedildiBildirimi, { useKaydedildiBildirimi } from '../../bilesenler/KaydedildiBildirimi';

const EN_FAZLA_KISI = 3;
const BOS_KISI = { ad: '', telefon: '' };

// Kayıtlı kişi listesini her zaman 3 satıra tamamlar (formda 3 kutu görünsün diye)
function ucSatiraTamamla(kisiler) {
  const liste = kisiler.slice(0, EN_FAZLA_KISI);
  while (liste.length < EN_FAZLA_KISI) {
    liste.push(BOS_KISI);
  }
  return liste;
}

export default function Profil() {
  const [kart, setKart] = useState({}); // { adSoyad, dogumYili, kanGrubu, alerjiler, kronikHastaliklar, ilaclar }
  const [kisiler, setKisiler] = useState(ucSatiraTamamla([]));
  const [kartAcikMi, setKartAcikMi] = useState(false);
  const [bildirimGorunur, bildirimGoster] = useKaydedildiBildirimi();

  // Ekran ilk açıldığında kayıtlı bilgileri telefondan oku
  useEffect(() => {
    async function kayitlariYukle() {
      setKart(await acilKartiOku());
      setKisiler(ucSatiraTamamla(await acilKisileriOku()));
    }
    kayitlariYukle();
  }, []);

  // Kartın tek bir alanını değiştirir (ör. alanDegistir('alerjiler', 'Penisilin'))
  function alanDegistir(alan, yeniDeger) {
    setKart({ ...kart, [alan]: yeniDeger });
  }

  // "Kaydet": kartı ve acil kişileri telefona yazar
  async function kaydet() {
    // Adı ve telefonu tamamen boş olan satırları kaydetme; boşlukları kırp
    const doluKisiler = kisiler
      .map((kisi) => ({ ad: (kisi.ad || '').trim(), telefon: (kisi.telefon || '').trim() }))
      .filter((kisi) => kisi.ad !== '' || kisi.telefon !== '');

    await acilKartiKaydet(kart);
    await acilKisileriKaydet(doluKisiler);
    bildirimGoster();
  }

  return (
    <SafeAreaView style={stiller.ekran} edges={['top']}>
      <ScrollView contentContainerStyle={stiller.icerik} keyboardShouldPersistTaps="handled">
        <EkranBasligi baslik="Profil" altYazi="Acil durum kartın" />

        <AracDugmesi yazi="Kartı Göster" ikon="card-account-details" renk={renkler.tehlike} aktifMi dokununca={() => setKartAcikMi(true)} />

        {/* Kişisel ve sağlık bilgileri */}
        <BolumKarti baslik="Acil Durum Kartı" ikon="card-account-details-outline" renk={renkler.tehlike}
          aciklama="Kurtarma ekibine gösterilir. Boş bıraktığın alanlar kartta görünmez.">
          <MetinAlani etiket="Ad soyad" deger={kart.adSoyad} degisince={(yazi) => alanDegistir('adSoyad', yazi)} />
          <MetinAlani etiket="Doğum yılı" deger={kart.dogumYili} degisince={(yazi) => alanDegistir('dogumYili', yazi)}
            ipucu="Ör. 2008" klavye="number-pad" enFazla={4} />
          <KanGrubuSecici secili={kart.kanGrubu} degisince={(kanGrubu) => alanDegistir('kanGrubu', kanGrubu)} />
          <MetinAlani etiket="Alerjiler" deger={kart.alerjiler} degisince={(yazi) => alanDegistir('alerjiler', yazi)}
            ipucu="Ör. Penisilin, fıstık" cokSatirli />
          <MetinAlani etiket="Kronik hastalıklar" deger={kart.kronikHastaliklar}
            degisince={(yazi) => alanDegistir('kronikHastaliklar', yazi)} ipucu="Ör. Astım, diyabet" cokSatirli />
          <MetinAlani etiket="Kullandığı ilaçlar" deger={kart.ilaclar} degisince={(yazi) => alanDegistir('ilaclar', yazi)}
            cokSatirli />
        </BolumKarti>

        {/* Acil kişiler: Konumumu Gönder SMS'inin alıcıları */}
        <BolumKarti baslik="Acil Kişiler" ikon="account-multiple" renk="#4EA6FD"
          aciklama="En fazla 3 kişi. Ana Sayfa’daki “Konumumu Gönder” SMS’i bu kişilere hazırlanır.">
          <AcilKisiAlanlari kisiler={kisiler} degisince={setKisiler} />
        </BolumKarti>

        <AracDugmesi yazi="Kaydet" ikon="content-save" renk={renkler.guvenli} aktifMi dokununca={kaydet} />
        <View style={stiller.altBosluk} />
      </ScrollView>

      <KaydedildiBildirimi gorunur={bildirimGorunur} />
      <AcilDurumKarti acikMi={kartAcikMi} kapat={() => setKartAcikMi(false)} kart={kart} kisiler={kisiler} />
    </SafeAreaView>
  );
}

const stiller = StyleSheet.create({
  ekran: { flex: 1, backgroundColor: renkler.arkaPlan },
  icerik: { paddingHorizontal: bosluklar.buyuk, paddingBottom: bosluklar.cokBuyuk },
  altBosluk: { height: 60 }, // "Kaydedildi" bildirimi son düğmenin üstüne binmesin
});
