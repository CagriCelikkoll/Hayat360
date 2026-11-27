// Bu dosya "Barınma ve Temel İhtiyaçlar" kategorisinin senaryolarını tutar.
// Metinler referans/ fotoğraflarından HARFİ HARFİNE aktarıldı; değiştirmeyin.
// Alanların ne anlama geldiği veri/senaryolar/index.js dosyasının başında yazıyor.

const barinmaSenaryolari = [
  // ===== referans/05 =====
  {
    id: 'sogukta-barinma',
    kategori: 'barinma',
    ad: 'Soğukta Barınma',
    ikon: 'home-thermometer-outline',
    durumAni: null, // Fotoğrafı yok
    sonrasi: {
      baslik: 'Soğukta Barındıktan Sonra',
      ozet: 'Üşümenin azalması tehlikenin bittiğini göstermez. Barınmanı sürdür ve belirtilerini takip et.',
      yapilacaklar: [
        { ikon: 'thermometer-low', baslik: 'Hipotermi şüphesini ciddiye al.', aciklama: 'Konuşma bozulması, bilinç bulanıklığı, aşırı uykuluk veya yavaş solunum yaşadıysan 112’ye haber ver. Isınmış olsan bile değerlendirmeyi erteleme.' },
        { ikon: 'tshirt-crew-outline', baslik: 'Kuru ve sıcak kal.', aciklama: 'Islak giysileri kuru katmanlarla değiştir. Başını ve boynunu ört; kuru battaniyeyi ısındıktan hemen sonra bırakma.' },
        { ikon: 'bed-outline', baslik: 'Nazikçe ısınmaya devam et.', aciklama: 'Korunaklı, ılık bir yerde dinlen. Uyuşmuş cildini soba, radyatör veya sıcak su torbasıyla doğrudan ısıtmaya çalışma.' },
        { ikon: 'coffee-outline', baslik: 'İçeceği güvenle tüket.', aciklama: 'Tam uyanıksan ve rahat yutabiliyorsan ılık, alkolsüz bir içecek içebilirsin. Bilinci bulanık veya çok uykulu kişiye içecek verme.' },
        { ikon: 'home-variant-outline', baslik: 'Barınmanı sürdür.', aciklama: 'Yeterli ısı sağlayamıyorsan yetkililerin yönlendirdiği ısınma merkezine ulaşmak için yardım iste. Güvenli ulaşım ve kalacak yer olmadan dışarı çıkma.' },
      ],
      guvenliIpuclari: ['Yanında biri kalsın.', 'Yakınlarına bulunduğun yeri bildir.', 'Sağlık ekibinin önerilerine uy.'],
      kacinilmasiGerekenler: ['Alkol alma.', 'Sıcak banyo yapma.', 'Uyuşmuş bölgeleri ovuşturma.'],
      ozelDurum: {
        ikon: 'snowflake',
        baslik: 'Donma Belirtisi Fark Edersen',
        aciklama: 'Beyazlaşan, sertleşen veya uyuşan cilt için sağlık yardımı iste. Zorunlu olmadıkça donmuş ayaklarının üzerinde yürüme. Yeniden üşümeyi önle; hasarlı bölgeyi sertçe ovalama veya doğrudan ısı kaynağına dayama.',
      },
      kaynak: 'CDC · NHS · American Red Cross',
      kontrolEdilecek: false,
    },
  },
];

export default barinmaSenaryolari;
