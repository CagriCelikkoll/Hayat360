// Bu dosya uygulamadaki 7 acil durum kategorisini listeler.
// Her kategorinin bir kimliği (id), adı, rengi ve ikonu vardır.
// İkon adları @expo/vector-icons içindeki "MaterialCommunityIcons" setinden gelir.

const kategoriler = [
  {
    id: 'dogal-afetler',
    ad: 'Doğal Afetler',
    renk: '#E23A77',
    ikon: 'pulse', // Deprem dalgasını andıran çizgi
  },
  {
    id: 'insan-kaynakli',
    ad: 'İnsan Kaynaklı Felaketler',
    renk: '#F88F3E',
    ikon: 'fire', // Yangın, gaz kaçağı gibi olaylar
  },
  {
    id: 'kurtarma',
    ad: 'Acil Kurtarma ve Mahsur Kalma',
    renk: '#EE4B6A',
    ikon: 'lifebuoy', // Can simidi
  },
  {
    id: 'saglik',
    ad: 'Sağlık ve Yaşam Mücadelesi',
    renk: '#A46FE1',
    ikon: 'heart-pulse', // Kalp atışı
  },
  {
    id: 'doga-sartlari',
    ad: 'Doğa Şartlarında Hayatta Kalma',
    renk: '#BB8CDC',
    ikon: 'pine-tree', // Orman
  },
  {
    id: 'teknolojik',
    ad: 'Teknolojik ve Sistemsel Krizler',
    renk: '#4EA6FD',
    ikon: 'flash-alert', // Elektrik kesintisi, pil sorunu
  },
  {
    id: 'barinma',
    ad: 'Barınma ve Temel İhtiyaçlar',
    renk: '#0ED9C3',
    ikon: 'home-variant', // Dolu ev ikonu (barınak)
  },
];

export default kategoriler;
