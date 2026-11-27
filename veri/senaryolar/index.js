// Bu dosya 7 kategorinin senaryo dosyalarını tek bir listede birleştirir.
// Uygulamanın geri kalanı senaryolara hep buradan ulaşır: import senaryolar from '.../veri/senaryolar'
// Yeni bir senaryo eklemek için ilgili kategori dosyasını (ör. dogal-afetler.js) düzenlemek yeterli.

// --- Bir senaryonun alanları ---
// id:        Adreste görünen kimlik (ör. 'deprem' -> /acil/deprem)
// kategori:  veri/kategoriler.js'deki kategori kimliği (ör. 'dogal-afetler')
// ad:        Listede görünen genel ad (ör. 'Deprem')
// ikon:      Başlıktaki büyük ikon (MaterialCommunityIcons setinden)
// durumAni:  Olay sırasındaki sekme; fotoğrafı yoksa null (buton soluk görünür)
// sonrasi:   Olaydan sonraki sekme; fotoğrafı yoksa null
//
// --- Bir sekmenin (durumAni / sonrasi) alanları ---
// baslik:                 Sekme seçiliyken ekranda görünen başlık (ör. 'Deprem Anında', 'Deprem Sonrası')
// ozet:                   Başlığın altındaki 1-2 satırlık açıklama
// yapilacaklar:           Her madde { ikon, baslik, aciklama }
// guvenliIpuclari:        Yeşil kutudaki 3 madde
// kacinilmasiGerekenler:  Kırmızı kutudaki 3 madde
// ozelDurum:              Alttaki özel durum kartı { ikon, baslik, aciklama }
// kaynak:                 En alttaki "Kaynak:" satırı
// kontrolEdilecek:        true ise bu metni fotoğraftan değil biz yazdık; uzman kontrol etmeli.
//                         Ekranda başlığın yanında sarı "Taslak" etiketi çıkar; KONTROL_LISTESI.md'de listelenir.

import dogalAfetSenaryolari from './dogal-afetler';
import insanKaynakliSenaryolar from './insan-kaynakli';
import kurtarmaSenaryolari from './kurtarma';
import saglikSenaryolari from './saglik';
import dogaSartlariSenaryolari from './doga-sartlari';
import teknolojikSenaryolar from './teknolojik';
import barinmaSenaryolari from './barinma';

// Bütün kategorilerin senaryolarını uç uca ekleyip tek liste yapıyoruz.
// Sıra, kategorilerin veri/kategoriler.js'deki sırasıyla aynı.
const senaryolar = [
  ...dogalAfetSenaryolari,
  ...insanKaynakliSenaryolar,
  ...kurtarmaSenaryolari,
  ...saglikSenaryolari,
  ...dogaSartlariSenaryolari,
  ...teknolojikSenaryolar,
  ...barinmaSenaryolari,
];

// Kimliği (id) verilen senaryoyu bulur; bulamazsa undefined döner
export function senaryoBul(id) {
  return senaryolar.find((senaryo) => senaryo.id === id);
}

export default senaryolar;
