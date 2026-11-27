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

  // ===== referans/06 =====
  {
    id: 'kesintide-gida-guvenligi',
    kategori: 'barinma',
    ad: 'Kesintide Gıda Güvenliği',
    ikon: 'basket-outline',
    durumAni: null, // Fotoğrafı yok
    sonrasi: {
      baslik: 'Gıda Güvenliği — Kesinti Sonrası',
      ozet: 'Elektriğin gelmesi ısınmış gıdayı güvenli yapmaz. Kesinti süresini, kapakları ve gıda sıcaklığını değerlendir.',
      yapilacaklar: [
        { ikon: 'fridge-outline', baslik: 'Buzdolabında 4 saat sınırını hatırla.', aciklama: 'Kapak kapalıysa buzdolabı yaklaşık 4 saat korur. Daha uzun kesintide soğuk kaldığı doğrulanamayan et, süt, yumurta ve artan yemekleri at.' },
        { ikon: 'snowflake-variant', baslik: 'Doluluğu dikkate al.', aciklama: 'Kapak açılmadıysa dolu dondurucu yaklaşık 48, yarı dolu dondurucu 24 saat korur. Bu süreler sıcaklık kontrolünün yerine geçmez.' },
        { ikon: 'thermometer', baslik: 'Elektrik gelir gelmez sıcaklığı ölç.', aciklama: 'Et, süt ve artan yemekler 4°C’nin üzerinde 2 saatten uzun kaldıysa tüketme. Yeniden soğuması önceki riski ortadan kaldırmaz.' },
        { ikon: 'package-variant-closed', baslik: 'Her donmuş paketi ayrı değerlendir.', aciklama: 'Et veya sebzeler hâlâ buz kristalliyse ya da 4°C ve altındaysa yeniden dondurabilirsin. Çözünmüş dondurmayı at.' },
        { ikon: 'trash-can-outline', baslik: 'Şüpheli gıdayı ayır ve at.', aciklama: 'Güvenliğini anlamak için tadına bakma. Normal kokması veya görünmesi yeterli değildir; şüpheli gıdayı başkasına verme.' },
      ],
      guvenliIpuclari: ['Kesinti süresini not et.', 'Gıda termometresi kullan.', 'Güvenli gıdayı soğuk tut.'],
      kacinilmasiGerekenler: ['Tadına bakarak test etme.', 'Kokusuna güvenme.', 'Şüpheli gıdayı tekrar dondurma.'],
      ozelDurum: {
        ikon: 'basket-outline',
        baslik: 'Süre veya Sıcaklık Bilinmiyorsa',
        aciklama: 'Et, balık, süt, yumurta ve pişmiş yemeklerde risk alma. Güvenli sıcaklıkta kaldığını doğrulayamıyorsan tüketme; bozulabilir gıdayı at.',
      },
      kaynak: 'CDC • FoodSafety.gov',
      kontrolEdilecek: false,
    },
  },

  // ===== referans/07 =====
  {
    id: 'temiz-su-ihtiyaci',
    kategori: 'barinma',
    ad: 'Temiz Su İhtiyacı',
    ikon: 'water-outline',
    durumAni: null, // Fotoğrafı yok
    sonrasi: {
      baslik: 'Temiz Suya Ulaştıktan Sonra',
      ozet: 'Suyun yeniden akması içilebilir olduğunu göstermez. Güvenli suyu kirletmeden sakla; resmî uyarıları izlemeyi sürdür.',
      yapilacaklar: [
        { ikon: 'bullhorn-outline', baslik: 'İçilebilirlik duyurusunu bekle.', aciklama: 'Su idaresi ve sağlık yetkililerinin açıklamasını izle. Şebeke güvenli ilan edilmediyse güvenilir ambalajlı su kullan.' },
        { ikon: 'clipboard-check-outline', baslik: 'Uyarının türüne göre davran.', aciklama: 'Kaynatma, içmeme ve hiç kullanmama uyarıları farklıdır. Hiç kullanmama uyarısında musluk suyunu temizlik veya yıkanma için de kullanma.' },
        { ikon: 'bottle-tonic-outline', baslik: 'Suyu temiz, kapaklı kaba koy.', aciklama: 'Gıda temasına uygun, temizlenip dezenfekte edilmiş kap kullan. Daha önce yakıt, ilaçlama ürünü veya temizlik kimyasalı içeren kaba su doldurma.' },
        { ikon: 'cup-water', baslik: 'Kabın içini yeniden kirletme.', aciklama: 'Elini veya kirli bardağı suya sokma; dökerek al. Kapağı kapat, hazırlama tarihini yaz; serin ve gölgede sakla.' },
        { ikon: 'silverware-fork-knife', baslik: 'Yiyecek ve buzda da güvenli su kullan.', aciklama: 'Uyarı sürerken yemek, diş fırçalama ve buz için güvenli su seç. Şebekeye bağlı buzdolabının su ve buzunu kullanma.' },
      ],
      guvenliIpuclari: ['Kabını etiketle.', 'Kapağını kapalı tut.', 'Duyuruları izle.'],
      kacinilmasiGerekenler: ['Berraklığına güvenip içme.', 'Kimyasal bidonunu kullanma.', 'Kirli kaba temiz su ekleme.'],
      ozelDurum: {
        ikon: 'flask-outline',
        baslik: 'Kimyasal Kirlenme Şüphesi Varsa',
        aciklama: 'Kaynatmak yakıt, zehirli kimyasal veya radyoaktif madde içeren suyu güvenli yapmaz. İçme; ambalajlı ya da yetkililerin güvenli bildirdiği başka kaynağı kullan.',
      },
      kaynak: 'CDC',
      kontrolEdilecek: false,
    },
  },

  // ===== referans/22 =====
  {
    id: 'guvenli-barinak-arama',
    kategori: 'barinma',
    ad: 'Güvenli Barınak Arama',
    ikon: 'home-variant-outline',
    durumAni: {
      baslik: 'Güvenli Barınak Arıyorum',
      ozet: 'Evin güvenli değilse önce tehlikeden uzaklaş. Kalacak yer için resmî yönlendirmeyi izle; hasarlı binada bekleme.',
      yapilacaklar: [
        { ikon: 'map-marker-radius-outline', baslik: 'Önce güvenli bölgeye geç.', aciklama: 'Bulunduğun afete uygun güvenli yere ulaş. Toplanma alanı geçici buluşma noktasıdır; konaklama merkeziyle aynı şey değildir.' },
        { ikon: 'tent', baslik: 'Açık barınma noktasını doğrula.', aciklama: 'AFAD, valilik ve belediyenin güncel duyurularını izle. Görevlilerden açık merkezin yerini ve güvenli ulaşım yolunu öğren.' },
        { ikon: 'boom-gate-outline', baslik: 'Yolda tehlikeli alanlardan uzak dur.', aciklama: 'Hasarlı binalara, kopan kablolara ve sel suyuna yaklaşma. Kapanmış yolu aşma; riskli kestirmeler yerine görevli yönlendirmesine uy.' },
        { ikon: 'bag-personal-outline', baslik: 'Zaman varsa temel eşyalarını al.', aciklama: 'İlaç, su, giysi ve acil çantanı al. Eşya toplamak tahliyeyi geciktirecekse bırak; can güvenliğini öncele.' },
        { ikon: 'police-badge-outline', baslik: 'İhtiyaçlarını görevliye bildir.', aciklama: 'Vardığında ilaç, erişilebilirlik, bebek bakımı veya özel beslenme ihtiyacını anlat. Ailendekilerin nerede olduğunu ve eksik kişileri bildir.' },
      ],
      guvenliIpuclari: ['Çocukları yanında tut.', 'Yakınlarına konumunu bildir.', 'Görevlilerin açıklamalarını izle.'],
      kacinilmasiGerekenler: ['Hasarlı binada kalma.', 'Resmî olmayan adreslere güvenme.', 'Eşya için tehlikeye dönme.'],
      ozelDurum: {
        ikon: 'grill-outline',
        baslik: 'Beklerken Isınman Gerekiyorsa',
        aciklama: 'Kapalı yerde, çadırda veya araç içinde mangal ve yakıtlı kamp ocağı çalıştırma. Karbonmonoksit kokusuzdur ve öldürebilir. Baş dönmesi veya bulantıda açık havaya çıkıp 112’yi ara.',
      },
      kaynak: 'AFAD • Red Cross • CDC',
      kontrolEdilecek: false,
    },
    sonrasi: null, // Fotoğrafı yok
  },
];

export default barinmaSenaryolari;
