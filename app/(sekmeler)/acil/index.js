// Bu dosya "Acil Durum" sekmesinin ilk ekranıdır (alt menünün ortasındaki sekme).
// İleride 7 kategori ve her kategorinin senaryo listesi burada gösterilecek;
// bir senaryoya dokununca aynı klasördeki [id].js açılacak. Şimdilik sadece başlık gösteriyor.

import BosEkran from '../../../bilesenler/BosEkran';

export default function AcilDurum() {
  return <BosEkran baslik="Acil Durum" aciklama="Kategoriler ve senaryolar burada olacak." />;
}
