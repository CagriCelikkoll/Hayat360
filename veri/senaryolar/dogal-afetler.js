// Bu dosya "Doğal Afetler" kategorisinin senaryolarını tutar.
// Metinler referans/ fotoğraflarından HARFİ HARFİNE aktarıldı; değiştirmeyin.
// Alanların ne anlama geldiği veri/senaryolar/index.js dosyasının başında yazıyor.

const dogalAfetSenaryolari = [
  // ===== referans/21 =====
  {
    id: 'deprem',
    kategori: 'dogal-afetler',
    ad: 'Deprem',
    ikon: 'pulse',
    durumAni: null, // Fotoğrafı yok
    sonrasi: {
      baslik: 'Deprem Sonrası',
      ozet: 'Artçılar, hasarlı yapılar ve gaz kaçakları tehlike yaratabilir. Önce kendi güvenliğini kontrol et.',
      yapilacaklar: [
        { ikon: 'medical-bag', baslik: 'Yaralanmaları kontrol et.', aciklama: 'Kendini ve yanındakileri kontrol et. Ciddi yaralanma veya mahsur kalma varsa 112’yi ara; bildiğin ilk yardımı güvenli yerde uygula.' },
        { ikon: 'exit-run', baslik: 'Güvenli çıkıştan toplanma alanına git.', aciklama: 'Sarsıntı bittiyse ve çıkış yolu güvenliyse merdivenleri kullan. Düşebilecek parçalardan uzaklaş; asansöre binme.' },
        { ikon: 'home-alert-outline', baslik: 'Hasarlı binaya geri dönme.', aciklama: 'Eşya almak için içeri girme. Yetkililer güvenli olduğunu bildirmeden hasarlı yapıları kullanma; balkonlardan ve dış cephelerden uzak dur.' },
        { ikon: 'table-furniture', baslik: 'Artçıda yeniden korun.', aciklama: 'Sarsıntı tekrar başlarsa bulunduğun güvenli yerde çök, kapan, tutun. Koşarak merdivene veya bina girişine yönelme.' },
        { ikon: 'fire', baslik: 'Gaz kokusunu ciddiye al.', aciklama: 'Alev yakma, elektrik düğmesine dokunma. Güvenli çıkıştan uzaklaş; kaçağı dışarıdan bildir ve tesisata uzman kontrolü olmadan müdahale etme.' },
      ],
      guvenliIpuclari: ['Yakınlarına kısa mesaj gönder.', 'Resmî duyuruları izle.', 'Acil yardım yollarını açık tut.'],
      kacinilmasiGerekenler: ['Enkaza kontrolsüz girme.', 'Hasarlı eve dönme.', 'Asansör kullanma.'],
      ozelDurum: {
        ikon: 'waves',
        baslik: 'Kıyıdaysan',
        aciklama: 'Güçlü veya uzun sarsıntı tsunami uyarısı olabilir. Sarsıntı bitince güvenle hareket edebiliyorsan kıyıdan uzaklaşıp yüksek, iç bölgelere geç. Deniz çekilmesini izleme; resmî uyarıyı bekleme.',
      },
      kaynak: 'İletişim Başkanlığı • CDC • NOAA / NWS',
      kontrolEdilecek: false,
    },
  },

  // ===== referans/19 =====
  {
    id: 'sel',
    kategori: 'dogal-afetler',
    ad: 'Sel',
    ikon: 'home-flood',
    durumAni: null, // Fotoğrafı yok
    sonrasi: {
      baslik: 'Sel Sonrası',
      ozet: 'Suyun çekilmesi tehlikenin bittiğini göstermez. Elektrik, yapı hasarı ve kirlenmeye dikkat et.',
      yapilacaklar: [
        { ikon: 'clipboard-check-outline', baslik: 'Dönüş için resmî izni bekle.', aciklama: 'Yetkililer güvenli olduğunu söylemeden bölgeye dönme. Duvarı çatlamış, çevresi suyla dolu veya kablosu kopmuş yapıya girme.' },
        { ikon: 'power-plug-outline', baslik: 'Elektriğe güvenli mesafede kal.', aciklama: 'Suyun içindeyken sigortaya, prize veya cihaza dokunma. Islanan tesisat ve cihazları elektrikçi kontrol etmeden kullanma.' },
        { ikon: 'food-apple-outline', baslik: 'İçme suyunu ve gıdayı koru.', aciklama: 'Güvenli ambalajlı su kullan; şebeke suyu için resmî açıklamayı bekle. Sel suyuyla kirlenmiş yiyecekleri tüketme.' },
        { ikon: 'hand-wash-outline', baslik: 'Temas eden yerlerini temizle.', aciklama: 'Sel suyu değen cildini sabun ve temiz suyla yıka. Kirlenmiş giysilerini değiştir; açık yaralarını temiz, su geçirmez bandajla ört.' },
        { ikon: 'safety-goggles', baslik: 'Temizliği güvenle planla.', aciklama: 'Yapı ve elektrik güvenliği sağlandıktan sonra eldiven, çizme ve gözlük kullan. Küf temizliğinde uygun maske ve uzman desteği al.' },
      ],
      guvenliIpuclari: ['Çocukları sudan uzak tut.', 'Hasarı güvenli yerden kaydet.', 'Yerel duyuruları izle.'],
      kacinilmasiGerekenler: ['Su basmış yoldan geçme.', 'Islak cihazı çalıştırma.', 'Temizlik kimyasallarını karıştırma.'],
      ozelDurum: {
        ikon: 'bandage',
        baslik: 'Yaran Kirlendiyse',
        aciklama: 'Yaranı temiz suyla yıka. Artan ağrı, kızarıklık, şişlik, akıntı veya ateş gelişirse gecikmeden sağlık kuruluşuna başvur. Kirli ya da delici yaralarda tetanos korumanı sağlık çalışanına değerlendirt.',
      },
      kaynak: 'CDC',
      kontrolEdilecek: false,
    },
  },

  // ===== referans/18 =====
  {
    id: 'tsunami',
    kategori: 'dogal-afetler',
    ad: 'Tsunami',
    ikon: 'waves',
    durumAni: null, // Fotoğrafı yok
    sonrasi: {
      baslik: 'Tsunami Sonrası',
      ozet: 'İlk dalga son veya en büyük dalga olmayabilir. Kıyıdan uzaktaki güvenli bölgede kal.',
      yapilacaklar: [
        { ikon: 'boom-gate-outline', baslik: 'Kıyıya dönmek için izin bekle.', aciklama: 'Yerel yetkililer dönüşe izin verene kadar tahliye bölgesinden uzak dur. Tsunami uyarısının iptali, tek başına dönüş izni değildir.' },
        { ikon: 'waves', baslik: 'Yeni dalgalar için tetikte kal.', aciklama: 'Denizin sakin görünmesine güvenme. Plaja, limana ve su yollarına yaklaşma; tekneni veya eşyalarını kurtarmak için geri dönme.' },
        { ikon: 'office-building-outline', baslik: 'Hasarlı yapılardan uzak dur.', aciklama: 'Hasarlanmış veya çevresinde su bulunan binaya girme. Yapı güvenliği uzmanlarca değerlendirilmeden içeride kalma.' },
        { ikon: 'phone-in-talk-outline', baslik: 'Kopan hatları ve yaralıları bildir.', aciklama: 'Elektrik kablolarına ve hasarlı borulara yaklaşma. Yaralı veya mahsur kalanları güvenli yerden 112’ye bildir; kurtarma yolunu açık bırak.' },
        { ikon: 'bottle-soda-outline', baslik: 'Temiz suya ve bilgiye ulaş.', aciklama: 'Güvenli içme suyu kullan. Barınma noktaları ve dönüş güzergâhları için yerel resmî duyuruları takip et.' },
      ],
      guvenliIpuclari: ['Yakınlarına kısa mesaj gönder.', 'Tahliye bölgesinin dışında kal.', 'Görevlilerin yönlendirmesine uy.'],
      kacinilmasiGerekenler: ['Dalgaları izlemek için dönme.', 'Suya veya çamura girme.', 'Hasarlı köprüden geçme.'],
      ozelDurum: {
        ikon: 'home-flood',
        baslik: 'Evin Su Altında Kaldıysa',
        aciklama: 'Dönüş izni verilse bile hasarlı yapıya girme. Islak elektrik tesisatını kullanma; su ve gıda güvenliğini kontrol et. Temizlik öncesi tehlikeleri değerlendir.',
      },
      kaynak: 'NOAA / NWS • CDC',
      kontrolEdilecek: false,
    },
  },

  // ===== referans/20 =====
  {
    id: 'firtina',
    kategori: 'dogal-afetler',
    ad: 'Fırtına',
    ikon: 'weather-windy',
    durumAni: null, // Fotoğrafı yok
    sonrasi: {
      baslik: 'Fırtına Sonrası',
      ozet: 'Kırık dallar, gevşeyen çatılar ve kopan kablolar tehlikelidir. Dışarı çıkmadan resmî uyarıları kontrol et.',
      yapilacaklar: [
        { ikon: 'bullhorn-outline', baslik: 'Uyarıların sona erdiğinden emin ol.', aciklama: 'Rüzgâr kısa süreli dinmiş olabilir. Meteoroloji ve yerel yetkililerin açıklamalarını takip et; gereksiz yolculukları ertele.' },
        { ikon: 'power-plug-off-outline', baslik: 'Kopan kablolardan uzak dur.', aciklama: 'Yerdeki veya sallanan kablolara dokunma; elektrik kesik görünse bile güvenli sayma. İnsanları uzak tutup arızayı bildir.' },
        { ikon: 'home-alert-outline', baslik: 'Ağaçlara ve hasarlı yapılara yaklaşma.', aciklama: 'Duvarlar, çatılar ve büyük dallar sonradan düşebilir. Bina diplerinden yürüme; hasarlı yapıya kontrol edilmeden girme.' },
        { ikon: 'account-group-outline', baslik: 'Yakınlarının durumunu kontrol et.', aciklama: 'Çocukların, yaşlıların ve yardıma ihtiyacı olan komşularının güvende olduğundan emin ol. Acil yaralanma veya mahsur kalmada 112’yi ara.' },
        { ikon: 'tools', baslik: 'Onarımı güvenli biçimde planla.', aciklama: 'Hasarı güvenli yerden kaydet; çatıya çıkma. Yapısal hasarı ve elektrik arızasını uzmanlara bırak; eşya için risk alma.' },
      ],
      guvenliIpuclari: ['Sağlam ayakkabı giy.', 'Resmî duyuruları izle.', 'Acil araçlara yol bırak.'],
      kacinilmasiGerekenler: ['Kablolara dokunma.', 'Kırık dalın altından geçme.', 'Hasarlı çatıya çıkma.'],
      ozelDurum: {
        ikon: 'weather-lightning-rainy',
        baslik: 'Su Baskını veya Gök Gürültüsü Sürüyorsa',
        aciklama: 'Su basmış yola yaya veya araçla girme. Gök gürültüsünde sağlam sığınakta kal; son gök gürültüsü veya şimşekten sonra en az 30 dakika bekle.',
      },
      kaynak: 'MGM • CDC • NOAA / NWS',
      kontrolEdilecek: false,
    },
  },

  // ===== referans/16 =====
  {
    id: 'yildirim-tehlikesi',
    kategori: 'dogal-afetler',
    ad: 'Yıldırım Tehlikesi',
    ikon: 'weather-lightning',
    durumAni: null, // Fotoğrafı yok
    sonrasi: {
      baslik: 'Yıldırım Tehlikesi Geçtikten Sonra',
      ozet: 'Yağmurun dinmesi tehlikenin bittiğini göstermez. Dışarı çıkmadan bekleme süresini tamamla; yaralanmada yardım iste.',
      yapilacaklar: [
        { ikon: 'clock-outline', baslik: 'En az 30 dakika bekle.', aciklama: 'Son gök gürültüsü veya şimşekten sonra en az 30 dakika sağlam binada ya da kapalı, metal tavanlı araçta kal.' },
        { ikon: 'weather-lightning', baslik: 'Yeni gök gürültüsünde süreyi yeniden başlat.', aciklama: 'Yeniden gök gürültüsü duyarsan veya şimşek görürsen süreyi yeniden başlat. Açık alan etkinliğini ertele.' },
        { ikon: 'phone-in-talk', baslik: 'Çarpılan kişi için 112’yi ara.', aciklama: 'Yıldırım çarpan kişi elektrik taşımaz. Ortam güvenliyse yaklaş; iyi görünse bile sağlık değerlendirmesini bekle.' },
        { ikon: 'tree-outline', baslik: 'Dışarıdaki hasarlardan uzak dur.', aciklama: 'Düşmüş kablolara, kırılmış dallara ve zayıflamış yapılara yaklaşma. Hasarı uzaktan bildir; kendin onarmaya çalışma.' },
        { ikon: 'radio', baslik: 'Uyarıları kontrol ederek hareket et.', aciklama: 'Yeni fırtına uyarılarını kontrol et. Tehlike sürüyorsa sığınakta kal; denize veya açık araziye dönme.' },
      ],
      guvenliIpuclari: ['Son gök gürültüsünü not et.', 'Yanındakileri kontrol et.', 'Acil durumda konumunu bildir.'],
      kacinilmasiGerekenler: ['Yağmur durunca hemen çıkma.', 'Kopan kabloya dokunma.', 'Yaralıyı yalnız bırakma.'],
      ozelDurum: {
        ikon: 'heart-pulse',
        baslik: 'Kişi Tepkisiz ve Normal Solumuyorsa',
        aciklama: '112’yi hoparlöre alıp kalp masajına başla. Eğitimliysen kurtarıcı soluk ekle; varsa otomatik şok cihazının talimatlarını izle. Kendi güvenliğini de koru.',
      },
      kaynak: 'NOAA / NWS • Red Cross • MGM',
      kontrolEdilecek: false,
    },
  },
];

export default dogalAfetSenaryolari;
