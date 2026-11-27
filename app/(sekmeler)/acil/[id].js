// Bu dosya Acil Durum sekmesinin içindeki senaryo ekranıdır: /acil/deprem gibi.
// Ekranın kendisi bilesenler/SenaryoEkrani.js'de; Ana Sayfa'daki Hızlı Erişim de aynı bileşeni kullanır.
// Geri ok bu sekmenin içinde geri gider (kategori listesi veya arama sonuçları).

import SenaryoEkrani from '../../../bilesenler/SenaryoEkrani';

export default function AcilSenaryoEkrani() {
  return <SenaryoEkrani yedekAdres="/acil" />;
}
