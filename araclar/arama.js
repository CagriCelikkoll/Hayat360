// Bu dosya Acil Durum ekranındaki arama kutusunun mantığını içerir.
// Türkçe karakterleri sadeleştirir (ı→i, ş→s, ç→c...) ve büyük/küçük harfi yok sayar;
// böylece "sicak" yazınca "Sıcak", "deprem" yazınca "Deprem Anında" bulunur.

import senaryolar from '../veri/senaryolar';

// Türkçe harflerin sadeleştirilmiş karşılıkları
const harfKarsiliklari = {
  ç: 'c',
  ğ: 'g',
  ı: 'i',
  ö: 'o',
  ş: 's',
  ü: 'u',
  â: 'a',
  î: 'i',
  û: 'u',
};

// Bir metni aramaya uygun hale getirir: "Sıcak Ağrı" -> "sicak agri"
export function aramaIcinSadelestir(metin) {
  // 1) Büyük "İ" ve "I" harflerini önce elle çeviriyoruz.
  //    (Telefonlar bazen Türkçe küçük harf kuralını bilmez; "I" harfi "i" yerine "ı" olmalı.)
  let sonuc = metin.replace(/İ/g, 'i').replace(/I/g, 'ı');

  // 2) Geri kalan her şeyi küçük harfe çevir
  sonuc = sonuc.toLowerCase();

  // 3) Türkçe harfleri tek tek sade karşılıklarıyla değiştir
  let sadeMetin = '';
  for (const harf of sonuc) {
    if (harfKarsiliklari[harf]) {
      sadeMetin = sadeMetin + harfKarsiliklari[harf];
    } else {
      sadeMetin = sadeMetin + harf;
    }
  }

  // 4) Baştaki ve sondaki boşlukları at
  return sadeMetin.trim();
}

// Aranan metni senaryonun adında ve iki sekmenin başlığında arar; eşleşen senaryoları döndürür
export function senaryolariAra(arananMetin) {
  const aranan = aramaIcinSadelestir(arananMetin);

  // Arama kutusu boşsa sonuç yok
  if (aranan === '') {
    return [];
  }

  const sonuclar = [];
  for (const senaryo of senaryolar) {
    // Aranacak yerler: genel ad + Durum Anı başlığı + Sonrası başlığı
    const aranacakYerler = [senaryo.ad];
    if (senaryo.durumAni) {
      aranacakYerler.push(senaryo.durumAni.baslik);
    }
    if (senaryo.sonrasi) {
      aranacakYerler.push(senaryo.sonrasi.baslik);
    }

    // Yerlerden herhangi birinde geçiyorsa sonuca ekle
    const bulunduMu = aranacakYerler.some((yer) => aramaIcinSadelestir(yer).includes(aranan));
    if (bulunduMu) {
      sonuclar.push(senaryo);
    }
  }
  return sonuclar;
}
