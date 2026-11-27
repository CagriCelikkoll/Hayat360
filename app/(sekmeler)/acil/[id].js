// Bu dosya tek bir senaryonun ekranıdır (ör. "Deprem Sonrası").
// Adresteki [id] kısmı hangi senaryonun açılacağını söyler: /acil/deprem-sonrasi gibi.
// Şimdilik sadece iskelet: alt menüdeki "Acil Durum" hapını kategorinin rengine boyar ve başlık gösterir.

import { useLocalSearchParams } from 'expo-router';
import BosEkran from '../../../bilesenler/BosEkran';
import kategoriler from '../../../veri/kategoriler';
import { useHapRengi } from '../../../araclar/hapRengi';
import { renkler } from '../../../araclar/tema';

export default function SenaryoEkrani() {
  // Adresten senaryonun kimliğini ve kategorisini al.
  // GEÇİCİ: Kategori şimdilik adresten geliyor (/acil/deneme?kategori=teknolojik).
  // Bir sonraki adımda veri/senaryolar.js yazılınca kategori senaryonun kendi verisinden okunacak.
  const { id, kategori } = useLocalSearchParams();

  // Kategoriyi listede bul; bulunamazsa varsayılan vurgu rengini kullan
  const bulunanKategori = kategoriler.find((k) => k.id === kategori);
  const renk = bulunanKategori ? bulunanKategori.renk : renkler.vurgu;

  // Alt menüdeki "Acil Durum" hapı bu rengi alsın
  useHapRengi(renk);

  return <BosEkran baslik={`Senaryo: ${id}`} aciklama="Senaryo içeriği bir sonraki adımda eklenecek." />;
}
