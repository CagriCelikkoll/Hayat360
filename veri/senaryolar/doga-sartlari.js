// Bu dosya "Doğa Şartlarında Hayatta Kalma" kategorisinin senaryolarını tutar.
// Metinler referans/ fotoğraflarından HARFİ HARFİNE aktarıldı; değiştirmeyin.
// Alanların ne anlama geldiği veri/senaryolar/index.js dosyasının başında yazıyor.

const dogaSartlariSenaryolari = [
  // ===== referans/01 =====
  {
    id: 'dogada-kaybolma',
    kategori: 'doga-sartlari',
    ad: 'Doğada Kaybolma',
    ikon: 'image-filter-hdr',
    durumAni: null, // Fotoğrafı yok
    sonrasi: {
      baslik: 'Doğada Kaybolduktan Sonra',
      ozet: 'Bulunduğunda veya güvenli bir yere ulaştığında arama ekibini ve yakınlarını haberdar et. Yorgunluğunu ve olası yaralanmaları önemse.',
      yapilacaklar: [
        { ikon: 'radio-handheld', baslik: 'Arama ekibine haber ver.', aciklama: 'Kendi yolunu bulduysan seni arayan birime hemen güvende olduğunu ve konumunu bildir. Yardım çağrısının kendiliğinden sonlandığını varsayma.' },
        { ikon: 'account-hard-hat-outline', baslik: 'Kurtarıcıların talimatını izle.', aciklama: 'Ekip ulaştığında tek başına yeniden yola koyulma. Güvenli dönüş ve gerekiyorsa taşınma için verilen talimatlara uy.' },
        { ikon: 'medical-bag', baslik: 'Sağlık sorunlarını açıkla.', aciklama: 'Yaralanma, aşırı üşüme, göğüs ağrısı veya nefes darlığını ekibe söyle. Ekip yoksa ciddi belirtilerde 112’den yardım iste.' },
        { ikon: 'tent', baslik: 'Korunaklı yerde dinlen.', aciklama: 'Hava koşullarından korun; ıslaksan kuru giysilerle değiştir. Tam uyanıksan ve rahat yutabiliyorsan güvenli içme suyundan küçük yudumlar al.' },
        { ikon: 'account-group-outline', baslik: 'Yakınlarına durumunu bildir.', aciklama: 'Konumunu, kimlerle olduğunu ve dönüş planını güvendiğin kişiye ilet. Kaybolan başka biri varsa ekibe son görüldüğü yeri anlat.' },
      ],
      guvenliIpuclari: ['Grubunla birlikte kal.', 'Belirtilerini gizleme.', 'Telefonunu ulaşılabilir tut.'],
      kacinilmasiGerekenler: ['Kestirme aramak için ayrılma.', 'Yorgunken yolculuğu zorlama.', 'Arama sürerken habersiz uzaklaşma.'],
      ozelDurum: {
        ikon: 'hiking',
        baslik: 'Yürümekte Zorlanıyorsan',
        aciklama: 'Ağrı, baş dönmesi veya güçsüzlük nedeniyle güvenle yürüyemiyorsan bunu kurtarma ekibine söyle. Yürümeye zorlayarak yeniden tehlikeye girme. Yardımın ve ulaşımın nasıl sağlanacağını ekiple birlikte netleştir.',
      },
      kaynak: 'NPS · NSW Police · CDC',
      kontrolEdilecek: false,
    },
  },

  // ===== referans/11 =====
  {
    id: 'yilan-isirigi',
    kategori: 'doga-sartlari',
    ad: 'Yılan Isırığı',
    ikon: 'snake',
    durumAni: null, // Fotoğrafı yok
    sonrasi: {
      baslik: 'Yılan Isırığı Sonrası',
      ozet: 'İlk yardım tehlikeyi ortadan kaldırmaz. Yılan ısırığı şüphesinde acil sağlık değerlendirmesini beklemeden iste.',
      yapilacaklar: [
        { ikon: 'phone-in-talk', baslik: '112 ile iletişimi sürdür.', aciklama: 'Isırılan kişinin yerini ve olay saatini bildir. Sağlık kuruluşuna güvenli ulaştırma için yönlendirme al; kişinin kendisinin araç kullanmasına izin verme.' },
        { ikon: 'bed-outline', baslik: 'Hareketi mümkün olduğunca azalt.', aciklama: 'Kişiyi sakin tut ve ısırılan uzvu hareketsiz destekle. Yardım beklerken yürütme veya koşturma; gereksiz hareketten kaçın.' },
        { ikon: 'ring', baslik: 'Sıkan eşyaları çıkar.', aciklama: 'Şişmeye karşı yüzük, saat veya dar giysiyi dikkatle çıkar ya da gevşet. Isırılan bölgeyi sıkan yeni bir bağ uygulama.' },
        { ikon: 'lungs', baslik: 'Solunumunu ve bilincini izle.', aciklama: 'Kusuyor veya bilinci kapalı ama normal nefes alıyorsa yan çevir. Tepkisiz ve normal nefes almıyorsa 112 yönlendirmesiyle kalp masajına başla.' },
        { ikon: 'clipboard-check-outline', baslik: 'Bilgileri sağlık ekibine aktar.', aciklama: 'Isırılma saatini, belirtileri ve yapılan ilk yardımı anlat. Yılanın görünüşünü hatırlıyorsan tarif et; yakalamaya veya öldürmeye çalışma.' },
      ],
      guvenliIpuclari: ['Kişinin yanında kal.', 'Kullanılan ilaçları ekibe bildir.', 'Hastane gözlemini tamamla.'],
      kacinilmasiGerekenler: ['Turnike veya sıkı bağ uygulama.', 'Yarayı kesme veya emme.', 'Aspirin veya ibuprofen verme.'],
      ozelDurum: {
        ikon: 'snake',
        baslik: 'İyi görünüyorsa bile',
        aciklama: 'Belirti çıkmasını bekleyerek hastaneye başvuruyu erteleme. Gözlem, tetanoz değerlendirmesi ve gerekiyorsa panzehir kararını sağlık ekibi verir; bitkisel veya ev yapımı tedaviler kullanma.',
      },
      kaynak: 'WHO • NHS • St John Ambulance',
      kontrolEdilecek: false,
    },
  },

  // ===== referans/23 =====
  {
    id: 'kene-tutunmasi',
    kategori: 'doga-sartlari',
    ad: 'Kene Tutunması',
    ikon: 'bug-outline',
    durumAni: {
      baslik: 'Doğada Kene Tutundu',
      ozet: 'Kene tutunduysa çıkarmayı geciktirme. Türkiye’de KKKA riski nedeniyle doğru çıkarma ve sonraki belirtileri izlemek önemlidir.',
      yapilacaklar: [
        { ikon: 'medical-bag', baslik: 'İnce uçlu cımbız kullan.', aciklama: 'Temiz cımbızla keneyi deriye tutunduğu en yakın noktadan kavra. Çıplak elle dokunma; şişkin gövdesini sıkma.' },
        { ikon: 'arrow-up', baslik: 'Sabitçe, düz çek.', aciklama: 'Keneyi yavaş ve kesintisiz bir kuvvetle deriden uzaklaştır. Döndürme, ani çekiştirme veya ezme.' },
        { ikon: 'hospital-building', baslik: 'Çıkaramıyorsan yardım al.', aciklama: 'Vakit kaybetmeden en yakın sağlık kuruluşuna başvur. Keneyi çıkarmak için günlerce bekleme; cildi kesme veya kazıma.' },
        { ikon: 'hand-wash-outline', baslik: 'Bölgeyi ve ellerini temizle.', aciklama: 'Çıkardıktan sonra tutunma yerini ve ellerini sabunlu suyla yıka. Keneyi parmaklarınla ezmeden kapalı bir kaba koy.' },
        { ikon: 'account-search-outline', baslik: 'Başka kene var mı kontrol et.', aciklama: 'Kulak arkası, koltuk altı, kasık ve diz arkası dahil tüm vücudunu kontrol et. Tutunma tarihini ve yerini not al.' },
      ],
      guvenliIpuclari: ['Çıkarmayı geciktirme.', 'Çocukları da kontrol et.', 'Başvuruda kene temasını söyle.'],
      kacinilmasiGerekenler: ['Sigara ile yakma.', 'Yağ, kolonya veya oje sürme.', 'Keneyi sıkma veya döndürme.'],
      ozelDurum: {
        ikon: 'calendar-alert',
        baslik: 'Sonraki Günlerde Belirti Varsa',
        aciklama: '10 gün boyunca ateş, halsizlik, kas veya baş ağrısı, kusma ve ishali izle; olursa hemen sağlık kuruluşuna başvur. Sonraki haftalarda döküntü veya ateş gelişirse de sağlık kuruluşuna başvur.',
      },
      kaynak: 'Sağlık Bakanlığı · CDC',
      kontrolEdilecek: false,
    },
    sonrasi: null, // Fotoğrafı yok
  },

  // ===== referans/29 =====
  {
    id: 'orman-yangini',
    kategori: 'doga-sartlari',
    ad: 'Orman Yangını',
    ikon: 'pine-tree-fire',
    durumAni: null, // Fotoğrafı yok
    sonrasi: {
      baslik: 'Orman Yangını Sonrası',
      ozet: 'Alev görünmese de yanmış orman güvenli olmayabilir. Parka veya kamp alanına dönmeden önce resmî duyuruları kontrol et.',
      yapilacaklar: [
        { ikon: 'boom-gate-outline', baslik: 'Dönüş iznini bekle.', aciklama: 'Alan yeniden açılmadan kamp yerine veya patikaya dönme. Barikatları geçme; görevlilerin belirttiği erişim koşullarına uy.' },
        { ikon: 'shoe-print', baslik: 'Külün üzerine basma.', aciklama: 'Kül, korları ve yanmış kök boşluklarını örtebilir. İzin verilen işaretli yolda kal; zeminin soğuduğunu görünüşünden anlamaya çalışma.' },
        { ikon: 'tree-outline', baslik: 'Hasarlı ağaçlardan uzak dur.', aciklama: 'Yanmış ağaçlar rüzgâr olmasa da devrilebilir. Altlarında bekleme; sarkan dallara ve hasarlı direklere dikkat et.' },
        { ikon: 'transmission-tower', baslik: 'Elektrik hatlarına yaklaşma.', aciklama: 'Yere düşmüş kabloyu elektrik taşıyor kabul et. Dokunma, üzerinden geçme ve yerini yetkililere bildir.' },
        { ikon: 'smoke', baslik: 'Dumanı ve külü soluma.', aciklama: 'Duman sürüyorsa bölgeden uzaklaş. Külü karıştırma; cildine bulaşan külü temiz suyla yıka.' },
      ],
      guvenliIpuclari: ['Sağlam, kapalı ayakkabı giy.', 'Güncel resmî duyuruları izle.', 'Çocukları yanmış alandan uzak tut.'],
      kacinilmasiGerekenler: ['Kapalı kamp alanına girme.', 'Yanmış odunları toplama.', 'Maskeye güvenip dumana girme.'],
      ozelDurum: {
        ikon: 'fire',
        baslik: 'Yeniden Duman veya Alev Görürsen',
        aciklama: 'Güvenli güzergâhla uzaklaş, 112’ye konumu bildir. Köz aramak veya yangını söndürmek için geri dönme. Nefes almakta zorlanıyorsan acil yardım iste; görevlinin talimatını izle.',
      },
      kaynak: 'NPS · CDC/NIOSH · Türkiye 112',
      kontrolEdilecek: false,
    },
  },
];

export default dogaSartlariSenaryolari;
