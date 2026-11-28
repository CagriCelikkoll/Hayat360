// Bu dosya "Yakındakilere Mesaj"ın MESAJ AĞI (mesh) kuralını içerir; jüriye anlatılacak kısım budur.
// Telefonların birbirini bulup bağlanması araclar/bluetooth.js'tedir; bu dosya sadece
// "bir mesaj gelince ne yapılır?" sorusunu cevaplar.
//
// Düşün ki Ayşe, Burak ve Can sırayla 50'şer metre arayla duruyor. Ayşe'nin telefonu Can'ınkine
// yetişmiyor ama Burak'ınkine yetişiyor. Ayşe "Yaralıyım" yazınca:
//   1) Mesaj Burak'a gider (sekmeSayisi = 0, yani "doğrudan geldi").
//   2) Burak'ın telefonu mesajı ekrana yazar, sekmeSayisi'ni 1 yapıp Ayşe DIŞINDAKİ herkese,
//      yani Can'a iletir. Can'ın ekranında "1 telefon üzerinden geldi" yazar.
//   3) Can da aynısını yapar; mesaj daha da uzağa gider. sekmeSayisi 3 olunca artık iletilmez.
// Aynı mesaj bir telefona iki farklı yoldan gelebilir. Her mesajın benzersiz bir kimliği (id)
// olduğu için telefon "bunu zaten gördüm" der; ikinci kopyayı ne gösterir ne de iletir.
// Böylece mesajlar sonsuz döngüye girmez ve pil boşa harcanmaz.

// Bir mesaj en fazla kaç kez "atlayabilir"? Gönderen 0 ile yollar; her ileten telefon 1 ekler.
export const EN_FAZLA_SEKME = 3;

let gorulenMesajlar = new Set(); // Daha önce gördüğümüz mesajların kimlikleri
let herkeseGonder = () => 0; // bluetooth.js verir: mesajı bağlı telefonlara yollar, kaç telefona gittiğini döner
let ekranaYaz = () => {}; // Ekran verir: gelen mesajı listeye ekler

// Tahmin edilemeyen kısa bir kimlik üretir (ör. "lq3x9k-4f8a2c")
export function rastgeleKimlik() {
  return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);
}

// Ağ başlarken bluetooth.js çağırır: gönderme yöntemini, ekran fonksiyonunu ve eski mesajları bildirir
export function mesajAginiHazirla({ gonderici, mesajGelince, oncekiMesajIdleri }) {
  herkeseGonder = gonderici;
  ekranaYaz = mesajGelince;
  oncekiMesajIdleri.forEach((id) => gorulenMesajlar.add(id)); // Kayıtlı mesajlar tekrar gösterilmesin
}

// Başka bir telefondan mesaj gelince çalışır. gonderenPeerId: mesajı bize getiren telefon
export function mesajGeldi(gonderenPeerId, yazi) {
  // 1) Gelen yazıyı tekrar mesaj nesnesine çevir; bozuksa yok say
  let mesaj;
  try {
    mesaj = JSON.parse(yazi);
  } catch (hata) {
    return;
  }
  if (!mesaj || typeof mesaj.id !== 'string' || typeof mesaj.metin !== 'string') {
    return;
  }

  // 2) Bu mesajı daha önce gördüm mü? Gördüysem hiçbir şey yapma (döngüyü engelleyen kural)
  if (gorulenMesajlar.has(mesaj.id)) {
    return;
  }
  gorulenMesajlar.add(mesaj.id);

  // 3) Mesajı temizle (çok uzun yazıları kes, sekme sayısını 0 ile 3 arasında tut) ve ekrana yaz
  const temizMesaj = {
    id: mesaj.id,
    gonderen: String(mesaj.gonderen || 'Hayat360 kullanıcısı').slice(0, 40),
    metin: mesaj.metin.slice(0, 500),
    zaman: Number(mesaj.zaman) || Date.now(),
    sekmeSayisi: Math.min(Math.max(Number(mesaj.sekmeSayisi) || 0, 0), EN_FAZLA_SEKME),
  };
  ekranaYaz(temizMesaj);

  // 4) Sınıra gelmediyse sekme sayısını 1 artır ve mesajı getiren telefon DIŞINDAKİ herkese ilet
  if (temizMesaj.sekmeSayisi < EN_FAZLA_SEKME) {
    const iletilecekMesaj = { ...temizMesaj, sekmeSayisi: temizMesaj.sekmeSayisi + 1 };
    herkeseGonder(iletilecekMesaj, gonderenPeerId);
  }
}

// Kendi yazdığımız mesajı oluşturup bağlı herkese yollar. Sonuç: { mesaj, ulasilanKisi }
export function mesajGonder(metin, gonderen) {
  const mesaj = {
    id: rastgeleKimlik(),
    gonderen: gonderen,
    metin: metin,
    zaman: Date.now(),
    sekmeSayisi: 0, // Kendi mesajımız henüz hiç atlamadı
  };
  gorulenMesajlar.add(mesaj.id); // Başka yoldan bize geri dönerse tekrar göstermeyelim
  const ulasilanKisi = herkeseGonder(mesaj, null);
  return { mesaj, ulasilanKisi };
}
