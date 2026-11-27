// Bu dosya Hazırlık Listesi'nin altındaki "Aile Afet Planı" formudur:
// buluşma noktaları (mahalle dışı ve mahalle içi), şehir dışındaki irtibat kişisi ve bir not.
// Plan telefona kaydedilir; ekran açılınca kayıtlı plan geri yüklenir.

import { useState, useEffect } from 'react';
import { renkler } from '../araclar/tema';
import { ailePlaniniOku, ailePlaniniKaydet } from '../araclar/depolama';
import BolumKarti from './BolumKarti';
import MetinAlani from './MetinAlani';
import AracDugmesi from './AracDugmesi';

const PLAN_RENGI = '#4EA6FD'; // Mavi

// kaydedilince: kayıt bitince çağrılır (ekran "Kaydedildi" bildirimini gösterir)
export default function AilePlani({ kaydedilince }) {
  const [plan, setPlan] = useState({}); // { mahalleDisiBulusma, mahalleIciBulusma, irtibatAdi, irtibatTelefonu, not }

  // Kayıtlı planı telefondan oku
  useEffect(() => {
    async function planiYukle() {
      setPlan(await ailePlaniniOku());
    }
    planiYukle();
  }, []);

  // Planın tek bir alanını değiştirir
  function alanDegistir(alan, yeniDeger) {
    setPlan({ ...plan, [alan]: yeniDeger });
  }

  async function kaydet() {
    await ailePlaniniKaydet(plan);
    kaydedilince();
  }

  return (
    <BolumKarti
      baslik="Aile Afet Planı"
      ikon="account-group"
      renk={PLAN_RENGI}
      aciklama="Afette eve ulaşamazsanız nerede buluşacağınızı ve kimi arayacağınızı ailece önceden belirleyin."
    >
      <MetinAlani etiket="Buluşma noktası (mahalle dışı)" deger={plan.mahalleDisiBulusma}
        degisince={(yazi) => alanDegistir('mahalleDisiBulusma', yazi)} ipucu="Ör. Teyzemin evi, ... Sokak" />
      <MetinAlani etiket="Buluşma noktası (mahalle içi)" deger={plan.mahalleIciBulusma}
        degisince={(yazi) => alanDegistir('mahalleIciBulusma', yazi)} ipucu="Ör. Okulun bahçesi" />
      <MetinAlani etiket="Şehir dışındaki irtibat kişisi – ad" deger={plan.irtibatAdi}
        degisince={(yazi) => alanDegistir('irtibatAdi', yazi)} ipucu="Ör. Ankara’daki dayım" />
      <MetinAlani etiket="Şehir dışındaki irtibat kişisi – telefon" deger={plan.irtibatTelefonu}
        degisince={(yazi) => alanDegistir('irtibatTelefonu', yazi)} ipucu="05xx xxx xx xx" klavye="phone-pad" enFazla={20} />
      <MetinAlani etiket="Not" deger={plan.not} degisince={(yazi) => alanDegistir('not', yazi)}
        ipucu="Ör. Kim kimi okuldan alacak?" cokSatirli />

      <AracDugmesi yazi="Planı Kaydet" ikon="content-save" renk={renkler.guvenli} aktifMi dokununca={kaydet} />
    </BolumKarti>
  );
}
