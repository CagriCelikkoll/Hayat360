// Bu dosya "Doğa Şartlarında Hayatta Kalma" kategorisinin senaryolarını tutar.
// Fotoğraftan gelen metinler HARFİ HARFİNE aktarıldı; değiştirmeyin.
// "TASLAK" yorumlu sekmeleri fotoğraf olmadığı için biz yazdık (kontrolEdilecek: true);
// bunlar uzman kontrolünden geçene kadar ekranda sarı "Taslak" etiketiyle görünür.
// Alanların ne anlama geldiği veri/senaryolar/index.js dosyasının başında yazıyor.

const dogaSartlariSenaryolari = [
  // ===== referans/01 =====
  {
    id: 'dogada-kaybolma',
    kategori: 'doga-sartlari',
    ad: 'Doğada Kaybolma',
    ikon: 'image-filter-hdr',
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    durumAni: {
      baslik: 'Doğada Kayboldum',
      ozet: 'Kaybolduğunu fark edince dur, sakin ol ve olduğun yerde kal. Yer değiştirmek, seni arayanların bulmasını zorlaştırır.',
      yapilacaklar: [
        { ikon: 'hand-back-right-outline', baslik: 'Dur ve sakin ol.', aciklama: 'Kaybolduğunu fark edince yürümeyi bırak. Derin nefes al ve durumunu düşün.' },
        { ikon: 'map-marker-radius-outline', baslik: 'Olduğun yerde kal.', aciklama: 'Hemen bir tehlike yoksa yer değiştirme. Hava kararırken, yaralıysan veya çok yorgunsan özellikle bekle.' },
        { ikon: 'phone-in-talk', baslik: 'Çekiyorsa 112’yi ara.', aciklama: 'Son bildiğin konumu ve çevrende gördüklerini anlat. Pilini korumak için telefonu gereksiz kullanma.' },
        { ikon: 'whistle-outline', baslik: 'Düdükle işaret ver.', aciklama: 'Düdüğe üç kez üfle, kısa bir ara ver ve tekrarla. Gece fenerle, gündüz parlak bir yüzeyle işaret ver.' },
        { ikon: 'tshirt-crew-outline', baslik: 'Sıcak kal ve enerjini koru.', aciklama: 'Rüzgârdan korunaklı bir yere geç ve kat kat giyin. Gereksiz yere yürüyüp yorulma.' },
      ],
      guvenliIpuclari: ['Sakin kalmaya çalış.', 'Yere görünür bir işaret yap.', 'Çocuklar bir ağaca sarılıp beklesin.'],
      kacinilmasiGerekenler: ['Panikle koşma.', 'Dere yatağını izleyerek ilerleme.', 'Telefon pilini boşa harcama.'],
      ozelDurum: {
        ikon: 'weather-night',
        baslik: 'Gece Bastırırsa',
        aciklama: 'Karanlıkta yürümeye çalışma. Rüzgâr almayan bir yere geç, ısını korumaya çalış ve sabahı ve arama ekiplerini bekle.',
      },
      kaynak: 'NPS • US Forest Service',
      kontrolEdilecek: true,
    },
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
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    durumAni: {
      baslik: 'Yılan Isırdı',
      ozet: 'Her yılan ısırığını zehirli kabul et. Yılandan uzaklaş, sakin kal ve hemen 112’yi ara.',
      yapilacaklar: [
        { ikon: 'walk', baslik: 'Yılandan uzaklaş.', aciklama: 'Yılanın tekrar ısırmaması için sakin hareketlerle ondan uzaklaş.' },
        { ikon: 'phone-in-talk', baslik: 'Hemen 112’yi ara.', aciklama: 'Isırık hafif görünse bile beklemeden yardım iste.' },
        { ikon: 'bed-outline', baslik: 'Isırılan kişiyi uzandır.', aciklama: 'Kişiyi güvenli bir yere uzandır ve sakinleştir.' },
        { ikon: 'snowflake-off', baslik: 'Buz veya soğuk uygulama.', aciklama: 'Isırık yerine buz, kar veya soğuk su koyma.' },
        { ikon: 'block-helper', baslik: 'Zehir pompası kullanma.', aciklama: 'Yaraya vakumlu pompa veya benzeri bir araç uygulama; yararı yoktur ve yarayı kirletebilir.' },
      ],
      guvenliIpuclari: ['Her yılanı zehirli kabul et.', 'Yılanın yerini çevrendekilere söyle.', 'Telefonunu yanında tut.'],
      kacinilmasiGerekenler: ['Isırılan yere herhangi bir şey sürme.', 'Paniğe kapılıp koşma.', 'Isırığı önemsiz sayma.'],
      ozelDurum: {
        ikon: 'alert',
        baslik: 'Nefes Darlığı veya Bayılma Olursa',
        aciklama: 'Kişide nefes darlığı, yüzde şişme, bilinç bulanıklığı veya bayılma olursa 112’ye hemen bildir ve görevlinin talimatlarına uy.',
      },
      kaynak: 'MEB İlk Yardım',
      kontrolEdilecek: true,
    },
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
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    sonrasi: {
      baslik: 'Kene Çıkarıldıktan Sonra',
      ozet: 'Kene çıkarılsa da hastalık belirtileri günler sonra başlayabilir. Tutunma yerini izle ve doğaya çıkarken kenelerden korun.',
      yapilacaklar: [
        { ikon: 'bandage', baslik: 'Tutunma yerini izle.', aciklama: 'Tutunma yerinde kızarıklık veya şişlik artarsa sağlık kuruluşuna başvur.' },
        { ikon: 'tshirt-crew-outline', baslik: 'Riskli alanlarda vücudunu ört.', aciklama: 'Tarla, bahçe, orman ve piknik alanlarında uzun kollu giysi giy; pantolon paçalarını çorabının içine sok.' },
        { ikon: 'palette-outline', baslik: 'Açık renkli giysi tercih et.', aciklama: 'Açık renkli giysilerin üzerinde keneyi daha kolay fark edersin.' },
        { ikon: 'shoe-print', baslik: 'Kapalı ayakkabı giy.', aciklama: 'Riskli alanlara sandalet veya terlikle girme; ayaklarını kapalı tut.' },
        { ikon: 'home-import-outline', baslik: 'Eve dönünce giysilerini kontrol et.', aciklama: 'Doğadan dönünce giysilerinde ve çantanda kene olup olmadığına bak.' },
      ],
      guvenliIpuclari: ['Gezide birbirinizi kontrol edin.', 'Evcil hayvanlarını da kontrol et.', 'Belirti yoksa da tetikte ol.'],
      kacinilmasiGerekenler: ['Belirtileri yorgunluğa bağlama.', 'Kene mevsiminde tedbiri bırakma.', 'Çalılık alanlarda bacakların açıkta yürüme.'],
      ozelDurum: {
        ikon: 'cow',
        baslik: 'Hayvanlarla Çalışıyorsan',
        aciklama: 'Hayvanların üzerindeki keneleri çıplak elle toplama veya ezme; eldiven kullan. Hayvan bakımından sonra kendini kontrol et.',
      },
      kaynak: 'Sağlık Bakanlığı • CDC',
      kontrolEdilecek: true,
    },
  },

  // ===== referans/29 =====
  {
    id: 'orman-yangini',
    kategori: 'doga-sartlari',
    ad: 'Orman Yangını',
    ikon: 'pine-tree-fire',
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    durumAni: {
      baslik: 'Orman Yangını Anında',
      ozet: 'Orman yangını rüzgârla çok hızlı yayılabilir. Tahliye uyarısını beklemeden, tehlikeyi hissettiğinde uzaklaş ve 112’ye bildir.',
      yapilacaklar: [
        { ikon: 'phone-in-talk', baslik: 'Yangını hemen 112’ye bildir.', aciklama: 'Küçük bir duman bile görsen yerini ve büyüklüğünü 112’ye anlat.' },
        { ikon: 'exit-run', baslik: 'Tehlikeyi hissedince hemen uzaklaş.', aciklama: 'Tahliye uyarısını bekleme. Yetkililerin belirlediği tahliye yollarını kullan; kestirmeler kapalı olabilir.' },
        { ikon: 'water', baslik: 'Kaçamıyorsan su veya açık alan bul.', aciklama: 'Yakında göl, dere veya havuz varsa suya gir. Yoksa bitkisiz, açık veya taşlık bir alanda yere yüzüstü uzan.' },
        { ikon: 'arrow-down-bold-outline', baslik: 'Dumanda yere yakın kal.', aciklama: 'Duman solumamak için nefesini yere yakın tut.' },
        { ikon: 'car', baslik: 'Araçtaysan havalandırmayı içeri çevir.', aciklama: 'Klimayı iç hava dolaşımına al ve camları kapat. Belirlenen tahliye yolundan ilerle.' },
      ],
      guvenliIpuclari: ['Yetkililerin talimatlarına uy.', 'Yakınlarına nerede olduğunu bildir.', 'Çocukları ve yaşlıları önce çıkar.'],
      kacinilmasiGerekenler: ['Eşya için zaman kaybetme.', 'Yangını izlemek için yaklaşma.', 'Islak bezi yüzüne bağlama.'],
      ozelDurum: {
        ikon: 'home-outline',
        baslik: 'Evdeysen ve Tahliye Emri Yoksa',
        aciklama: 'Duman yoğunsa kapı ve pencereleri kapatıp içeride kal. Nefes almakta zorlanırsan veya tehlike yaklaşırsa beklemeden uzaklaş.',
      },
      kaynak: 'Red Cross • CDC • OGM',
      kontrolEdilecek: true,
    },
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
