// Bu dosya uygulamanın "tasarım sözlüğüdür".
// Renkler, yazı boyutları, boşluklar ve köşe yuvarlaklığı burada tek yerde durur.
// Bir rengi değiştirmek istersek sadece bu dosyayı değiştirmemiz yeterli olur.

// Uygulamada kullanılan renkler (referans fotoğraflarından alındı)
export const renkler = {
  arkaPlan: '#071322', // Ekranın en arkadaki koyu lacivert rengi
  kart: '#16212F', // Kartların (kutuların) iç rengi
  kartKenari: '#26344A', // Kartların etrafındaki ince, biraz daha açık çizgi
  altMenu: '#0B1726', // Alttaki sekmeli menünün arka planı
  yazi: '#FFFFFF', // Ana yazı rengi (beyaz)
  ikincilYazi: '#C9D1DC', // Açıklama yazıları için biraz soluk beyaz
  pasifIkon: '#E6EAF0', // Alt menüde seçili olmayan ikon ve yazıların rengi
  guvenli: '#1ECB6B', // "Güvenli İpuçları" kutusunun yeşili
  tehlike: '#E5394B', // "Kaçınılması Gerekenler" kutusunun kırmızısı
  vurgu: '#E23A77', // Varsayılan vurgu rengi (Doğal Afetler pembesi)
};

// Yazı boyutları: küçükten büyüğe
export const yaziBoyutlari = {
  kucuk: 13, // Alt menü yazıları, kaynak satırı
  normal: 15, // Açıklama metinleri
  orta: 17, // Kart başlıkları
  buyuk: 22, // Bölüm başlıkları
  baslik: 30, // Ekranın en büyük başlığı
};

// Boşluklar: kutuların içindeki ve arasındaki mesafeler
export const bosluklar = {
  cokKucuk: 4,
  kucuk: 8,
  orta: 12,
  buyuk: 16,
  cokBuyuk: 24,
};

// Köşe yuvarlaklıkları
export const koseler = {
  kart: 16, // Kartların köşeleri
  hap: 14, // Alt menüdeki seçili "hap" şeklinin köşeleri
};
