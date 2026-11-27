// Bu dosya Ana Sayfa'daki Hızlı Erişim'den açılan senaryo ekranıdır: /senaryo/deprem gibi.
// Acil Durum sekmesindeki senaryo ekranıyla aynı bileşeni (bilesenler/SenaryoEkrani.js) kullanır.
// Ana Sayfa'nın kendi sayfa yığınında açıldığı için Acil Durum sekmesinin geçmişini bozmaz; geri ok Ana Sayfa'ya döner.

import SenaryoEkrani from '../../../../bilesenler/SenaryoEkrani';

export default function AnaSayfaSenaryoEkrani() {
  return <SenaryoEkrani yedekAdres="/" />;
}
