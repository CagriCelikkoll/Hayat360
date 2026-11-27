// Bu dosya "Barınma ve Temel İhtiyaçlar" kategorisinin senaryolarını tutar.
// Fotoğraftan gelen metinler HARFİ HARFİNE aktarıldı; değiştirmeyin.
// "TASLAK" yorumlu sekmeleri fotoğraf olmadığı için biz yazdık (kontrolEdilecek: true);
// bunlar uzman kontrolünden geçene kadar ekranda sarı "Taslak" etiketiyle görünür.
// Alanların ne anlama geldiği veri/senaryolar/index.js dosyasının başında yazıyor.

const barinmaSenaryolari = [
  // ===== referans/05 =====
  {
    id: 'sogukta-barinma',
    kategori: 'barinma',
    ad: 'Soğukta Barınma',
    ikon: 'home-thermometer-outline',
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    durumAni: {
      baslik: 'Soğukta Isınamıyorum',
      ozet: 'Isıtma yoksa ya da yetersizse vücut ısısı hızla düşebilir. Tek bir odada toplan, kat kat giyin ve güvenli olmayan ısınma yollarından uzak dur.',
      yapilacaklar: [
        { ikon: 'door-closed', baslik: 'Tek bir odada toplan.', aciklama: 'Kullanmadığın odaların kapılarını kapat; kapı ve pencere altlarındaki aralıkları havlu veya bezle kapat.' },
        { ikon: 'tshirt-crew-outline', baslik: 'Kat kat giyin.', aciklama: 'Birkaç ince kat giysi, tek kalın giysiden daha iyi ısıtır. Battaniye ve montla da örtün.' },
        { ikon: 'silverware-fork-knife', baslik: 'Yemek ye ve sıvı al.', aciklama: 'Yemek yemek vücudunun ısı üretmesine yardım eder.' },
        { ikon: 'stove', baslik: 'Evi fırın veya ocakla ısıtma.', aciklama: 'Fırın, ocak, mangal veya jeneratörle ısınmaya çalışma; karbonmonoksit zehirlenmesine ve yangına yol açabilir.' },
        { ikon: 'radiator', baslik: 'Isıtıcıyı güvenli kullan.', aciklama: 'Isıtıcıyı yanıcı eşyalardan uzak tut; uyurken veya odadan çıkarken kapat.' },
      ],
      guvenliIpuclari: ['Titreme ve yorgunluğu ciddiye al.', 'Yaşlıları ve çocukları sık kontrol et.', 'Başını ve ellerini örtülü tut.'],
      kacinilmasiGerekenler: ['Isıtıcıyı yatağa yakın bırakma.', 'Sobalı odayı havasız bırakma.', 'Uykulu ve şaşkın kişiyi yalnız bırakma.'],
      ozelDurum: {
        ikon: 'heart-pulse',
        baslik: 'Bebek Varsa',
        aciklama: 'Bebekte parlak kırmızı ve soğuk cilt ya da çok düşük enerji soğuktan etkilendiğini gösterebilir. Bu belirtileri görürsen hemen sağlık yardımı iste.',
      },
      kaynak: 'CDC • FEMA • Red Cross',
      kontrolEdilecek: true,
    },
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
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    durumAni: {
      baslik: 'Kesinti Sırasında Gıdalar',
      ozet: 'Elektrik kesildiğinde buzdolabı ve dondurucudaki gıdalar ısınmaya başlar. Kapakları kapalı tut ve gıdaları soğuk tutmanın güvenli yollarını kullan.',
      yapilacaklar: [
        { ikon: 'fridge-outline', baslik: 'Kapakları kapalı tut.', aciklama: 'Buzdolabını ve dondurucuyu gerekmedikçe açma; her açışta içerisi ısınır.' },
        { ikon: 'cube-outline', baslik: 'Buz veya soğutucu kalıp kullan.', aciklama: 'Kesinti uzayacaksa gıdaları buz veya donmuş soğutucu kalıplarla doldurulmuş bir soğutma kabına koy.' },
        { ikon: 'food-variant', baslik: 'Önce bozulabilecek gıdaları tüket.', aciklama: 'Önce buzdolabındaki, sonra dondurucudaki gıdaları; en son konserve ve kuru gıdaları kullan.' },
        { ikon: 'grill-outline', baslik: 'Yemeği güvenli yerde pişir.', aciklama: 'Kapalı alanda mangal, kamp ocağı veya jeneratör kullanma; karbonmonoksit zehirlenmesine yol açabilir.' },
        { ikon: 'water-outline', baslik: 'İçme suyunu ayır.', aciklama: 'Kesinti suyu da etkileyebilir; ambalajlı veya güvenli suyu içme ve yemek için ayır.' },
      ],
      guvenliIpuclari: ['Konserve ve kuru gıdaları elde tut.', 'Ellerini yemekten önce yıka.', 'Soğutma kabını gölgede tut.'],
      kacinilmasiGerekenler: ['Kuru buzu gıdaya doğrudan değdirme.', 'Dondurucudaki gıdaları gereksiz yere çıkarma.', 'Çözülen gıdayı oda sıcaklığında bırakma.'],
      ozelDurum: {
        ikon: 'medical-bag',
        baslik: 'Buzdolabında İlaç Varsa',
        aciklama: 'Soğukta saklanması gereken ilacın ne kadar süre ısındığını not et ve kullanmadan önce eczacına danış.',
      },
      kaynak: 'CDC • FEMA',
      kontrolEdilecek: true,
    },
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
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    durumAni: {
      baslik: 'Temiz Su Bulamıyorum',
      ozet: 'Şebeke suyu kesildiğinde veya kirlendiğinde önce ambalajlı su kullan. Ambalajlı su yoksa suyu güvenli hale getirmeden içme.',
      yapilacaklar: [
        { ikon: 'bottle-soda-outline', baslik: 'Önce ambalajlı su kullan.', aciklama: 'İçmek, yemek yapmak ve diş fırçalamak için mümkünse ambalajlı su kullan.' },
        { ikon: 'kettle-steam-outline', baslik: 'Ambalajlı su yoksa suyu kaynat.', aciklama: 'Suyu fokur fokur kaynayana kadar ısıt ve en az bir dakika kaynamaya bırak. Kullanmadan önce soğut.' },
        { ikon: 'water-outline', baslik: 'Bulanık suyu önce durult.', aciklama: 'Su bulanıksa temiz bir bezden süz veya çökelmesini bekle, sonra kaynat.' },
        { ikon: 'water-alert-outline', baslik: 'Suyu idareli kullan.', aciklama: 'Güvenli suyu önce içme ve yemek için ayır; temizlik için daha az kullan.' },
        { ikon: 'map-marker-outline', baslik: 'Su dağıtım noktalarını öğren.', aciklama: 'Belediye, AFAD veya Kızılay’ın duyurduğu su dağıtım yerlerini takip et.' },
      ],
      guvenliIpuclari: ['Bebekler için güvenli su ayır.', 'Çocukları kaynar sudan uzak tut.', 'Kaynattığın suyu kapalı kapta beklet.'],
      kacinilmasiGerekenler: ['Dere veya kaynak suyunu kaynatmadan içme.', 'Taşınabilir filtrenin her mikrobu temizlediğini düşünme.', 'Kapalı alanda kamp ocağıyla su kaynatma.'],
      ozelDurum: {
        ikon: 'alert',
        baslik: 'Kaynatamıyorsan',
        aciklama: 'Ambalajlı su için yetkililerden veya su dağıtım noktalarından yardım iste. Su arıtma tableti kullanacaksan yalnızca ürünün talimatına göre kullan.',
      },
      kaynak: 'CDC • Kızılay',
      kontrolEdilecek: true,
    },
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
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    sonrasi: {
      baslik: 'Barınma Alanına Yerleştikten Sonra',
      ozet: 'Kalabalık barınma alanlarında hastalıklar ve kazalar kolay yayılabilir. Temizliğe dikkat et, sağlık durumunu görevlilere bildir ve alan kurallarına uy.',
      yapilacaklar: [
        { ikon: 'hand-wash-outline', baslik: 'Ellerini sık yıka.', aciklama: 'Yemekten önce ve tuvaletten sonra ellerini sabunla yıka; su yoksa el antiseptiği kullan.' },
        { ikon: 'water-outline', baslik: 'Sadece güvenli suyu iç.', aciklama: 'Barınma alanının verdiği veya güvenli olarak işaretlenen suyu kullan.' },
        { ikon: 'account-multiple-outline', baslik: 'Kişisel eşyalarını paylaşma.', aciklama: 'Yiyecek, içecek, yatak ve kişisel eşyalarını başkalarıyla paylaşmamaya çalış.' },
        { ikon: 'card-account-details-outline', baslik: 'Acil iletişim bilgisi bırak.', aciklama: 'Görevlilere ve güvendiğin kişilere sana ulaşabilecekleri bir yakınının bilgilerini ver.' },
        { ikon: 'emoticon-sad-outline', baslik: 'Zorlanırsan destek iste.', aciklama: 'Korku, uykusuzluk veya üzüntü yaşamak normaldir. Zorlanırsan görevlilerden destek iste.' },
      ],
      guvenliIpuclari: ['Öksürürken ağzını kapat.', 'Çocukları göz önünde tut.', 'Alan kurallarına uy.'],
      kacinilmasiGerekenler: ['Çadırda sigara içme.', 'Çöpü yaşadığın yerin yanında biriktirme.', 'Hastalığını görevlilerden saklama.'],
      ozelDurum: {
        ikon: 'thermometer',
        baslik: 'Ateş, İshal veya Kusma Olursa',
        aciklama: 'Kendinde veya çevrendekilerde bu belirtileri fark edersen hemen barınma alanındaki sağlık görevlisine bildir.',
      },
      kaynak: 'CDC • Hacettepe Ü. Halk Sağlığı',
      kontrolEdilecek: true,
    },
  },
];

export default barinmaSenaryolari;
