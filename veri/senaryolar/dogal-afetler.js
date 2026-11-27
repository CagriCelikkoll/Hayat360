// Bu dosya "Doğal Afetler" kategorisinin senaryolarını tutar.
// Fotoğraftan gelen metinler HARFİ HARFİNE aktarıldı; değiştirmeyin.
// "TASLAK" yorumlu sekmeleri fotoğraf olmadığı için biz yazdık (kontrolEdilecek: true);
// bunlar uzman kontrolünden geçene kadar ekranda sarı "Taslak" etiketiyle görünür.
// Alanların ne anlama geldiği veri/senaryolar/index.js dosyasının başında yazıyor.

const dogalAfetSenaryolari = [
  // ===== referans/21 =====
  {
    id: 'deprem',
    kategori: 'dogal-afetler',
    ad: 'Deprem',
    ikon: 'pulse',
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    durumAni: {
      baslik: 'Deprem Anında',
      ozet: 'Sarsıntı sürerken dışarı koşma. Bulunduğun yerde çök, kapan, tutun; sarsıntı bitene kadar başını ve enseni koru.',
      yapilacaklar: [
        { ikon: 'table-furniture', baslik: 'Çök, kapan, tutun.', aciklama: 'Dizlerinin üzerine çök, başını ve enseni kollarınla koru. Yakınındaki sağlam masa veya sıraya tutun; sarsıntı bitene kadar bu pozisyonda kal.' },
        { ikon: 'window-closed-variant', baslik: 'Camlardan ve devrilebilecek eşyalardan uzaklaş.', aciklama: 'Pencere, dolap ve raflardan uzak dur. Yakında masa yoksa iç duvarın yanında çök ve başını kollarınla koru.' },
        { ikon: 'door-closed-cancel', baslik: 'Sarsıntı sırasında binadan çıkmaya çalışma.', aciklama: 'İçerideysen sarsıntı sürerken dışarı koşma; düşen parçalar ve camlar yaralayabilir. Sarsıntı bitene kadar olduğun yerde korun.' },
        { ikon: 'bed-outline', baslik: 'Yataktaysan orada kal.', aciklama: 'Kıvrıl ve başını yastıkla koru. Sarsıntı bitene kadar kalkıp yürümeye çalışma.' },
        { ikon: 'pine-tree', baslik: 'Dışarıdaysan açık alana geç.', aciklama: 'Binalardan, ağaçlardan, direklerden ve elektrik hatlarından uzaklaş. Açık bir yerde çök ve başını koru.' },
      ],
      guvenliIpuclari: ['Sakin kalmaya çalış.', 'Başını ve enseni koru.', 'Tekerlekli sandalyedeysen frenleri kilitle.'],
      kacinilmasiGerekenler: ['Pencere kenarında durma.', 'Balkona çıkma.', 'Kapı eşiğinin güvenli olduğunu düşünme.'],
      ozelDurum: {
        ikon: 'car',
        baslik: 'Araçtaysan',
        aciklama: 'Binalardan, ağaçlardan, köprü ve üst geçitlerden ve elektrik hatlarından uzak, güvenli bir yerde dur. Sarsıntı bitene kadar aracın içinde kal.',
      },
      kaynak: 'AFAD • CDC • FEMA • Red Cross',
      kontrolEdilecek: true,
    },
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
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    durumAni: {
      baslik: 'Sel Anında',
      ozet: 'Sel suyu hızla yükselebilir ve akıntı insanı sürükleyebilir. Hemen yüksek ve güvenli bir yere çık; suya girme.',
      yapilacaklar: [
        { ikon: 'arrow-up-bold-outline', baslik: 'Hemen yüksek yere çık.', aciklama: 'Dere yataklarını ve çukur alanları terk et. Tahliye uyarısı geldiyse beklemeden yetkililerin gösterdiği yöne git.' },
        { ikon: 'waves', baslik: 'Akan suya girme.', aciklama: 'Sel suyunda yürüme, yüzme veya araç kullanma. Sığ görünen akan su bile seni düşürüp sürükleyebilir.' },
        { ikon: 'bridge', baslik: 'Hızlı akan suyun üzerindeki köprüden geçme.', aciklama: 'Akıntı köprüyü haber vermeden yıkabilir. Başka bir güzergâh bul veya güvenli yerde bekle.' },
        { ikon: 'stairs-up', baslik: 'Binada mahsur kaldıysan üst kata çık.', aciklama: 'Su yükseliyorsa binanın en üst katına çık. Kapalı çatı arasına sıkışma; gerekirse çatıya çıkıp 112’den yardım iste.' },
        { ikon: 'home-flood', baslik: 'Bodruma ve otoparka inme.', aciklama: 'Su dolmaya başlayan bodrumda eşya kurtarmaya ya da aracını çıkarmaya çalışma. Bu alanlar çok hızlı dolabilir.' },
      ],
      guvenliIpuclari: ['Yakınlarına konumunu bildir.', 'Değerli eşya için zaman kaybetme.', 'Çocukları yanından ayırma.'],
      kacinilmasiGerekenler: ['Selin fotoğrafını çekmek için yaklaşma.', 'Kapatılmış yolun bariyerini aşma.', 'Dere kenarında bekleme.'],
      ozelDurum: {
        ikon: 'car',
        baslik: 'Araçta Mahsur Kaldıysan',
        aciklama: 'Araç hızlı akan suya kapıldıysa içinde kal. Su aracın içine doluyorsa çatıya çık ve 112’den yardım iste.',
      },
      kaynak: 'FEMA • NOAA / NWS',
      kontrolEdilecek: true,
    },
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
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    durumAni: {
      baslik: 'Tsunami Anında',
      ozet: 'Kıyıda güçlü bir sarsıntı, denizin aniden çekilmesi veya denizden gelen gürültü tsunami işareti olabilir. Resmî uyarıyı beklemeden yüksek yere çık.',
      yapilacaklar: [
        { ikon: 'arrow-up-bold-outline', baslik: 'Hemen yüksek veya iç bölgelere git.', aciklama: 'Kıyıdan uzaklaş ve olabildiğince yüksek bir yere çık. Siren, anons veya mesaj gelmesini bekleme.' },
        { ikon: 'table-furniture', baslik: 'Sarsıntıda önce korun.', aciklama: 'Kıyıdayken deprem olursa sarsıntı sürerken çök, kapan, tutun. Sarsıntı biter bitmez kıyıdan uzaklaş.' },
        { ikon: 'eye-off-outline', baslik: 'Denizin çekildiği alana girme.', aciklama: 'Deniz aniden çekilirse açılan alana inme veya kıyıda bekleme. Dalgayı görebiliyorsan kaçmak için çok yakınsın demektir.' },
        { ikon: 'sail-boat', baslik: 'Teknedeysen açık denize yönel.', aciklama: 'Açık denizdeysen dalgalara karşı açığa doğru ilerle. Limandaysan tekneyi bırakıp karada yüksek bir yere çık.' },
        { ikon: 'account-group-outline', baslik: 'Yanındakileri de uyar.', aciklama: 'Çevrendekilere yüksek yere çıkmalarını söyle. Eşya toplamak için zaman kaybetme; can güvenliğini öncele.' },
      ],
      guvenliIpuclari: ['Kıyıya dik yönde uzaklaş.', 'Çocukları yanından ayırma.', 'Telefonunu yanına al.'],
      kacinilmasiGerekenler: ['Kıyıda uyarı bekleme.', 'Kıyıya paralel ilerleme.', 'Dere yatağı boyunca ilerleme.'],
      ozelDurum: {
        ikon: 'bullhorn-outline',
        baslik: 'Resmî Uyarı Gelirse',
        aciklama: 'Sarsıntı hissetmesen bile tsunami uyarısı geldiyse yetkililerin tahliye talimatına hemen uy. Uzakta olan bir deprem de tsunamiye yol açabilir.',
      },
      kaynak: 'AFAD • FEMA • Red Cross • NOAA / NWS',
      kontrolEdilecek: true,
    },
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
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    durumAni: {
      baslik: 'Fırtına Anında',
      ozet: 'Kuvvetli rüzgâr çatıları uçurabilir, ağaç ve direkleri devirebilir. Sağlam bir binada, camlardan uzak bir iç odada bekle.',
      yapilacaklar: [
        { ikon: 'home-outline', baslik: 'Sağlam bir binada kal.', aciklama: 'Zorunlu değilse dışarı çıkma. Prefabrik yapı, çadır ve karavan kuvvetli rüzgârda güvenli değildir.' },
        { ikon: 'window-closed-variant', baslik: 'Camlardan uzak bir iç odaya geç.', aciklama: 'Binanın alt katındaki penceresiz, küçük bir odayı seç. Dış duvarlarla arana mümkün olduğunca çok duvar koy.' },
        { ikon: 'table-furniture', baslik: 'Uçan parçalara karşı korun.', aciklama: 'Yere yakın dur ve sağlam bir masanın altına gir. Başını yastık, battaniye veya montla koru.' },
        { ikon: 'car', baslik: 'Yoldaysan yavaşla.', aciklama: 'Direksiyonu iki elinle tut ve hızını düşür. Ağaç, köprü veya üst geçit altında durup sığınma.' },
        { ikon: 'weather-lightning', baslik: 'Şimşek varsa elektrikli aletlerden uzak dur.', aciklama: 'Fişe takılı cihazları ve su tesisatını kullanma. Gök gürültüsü duyuyorsan dışarı çıkma.' },
      ],
      guvenliIpuclari: ['Telefonunu şarjlı tut.', 'Yakınlarına nerede olduğunu bildir.', 'Evcil hayvanları içeride tut.'],
      kacinilmasiGerekenler: ['Ağaç altında bekleme.', 'Balkonda veya pencere önünde durma.', 'Uçan eşyayı yakalamaya çalışma.'],
      ozelDurum: {
        ikon: 'flash-alert',
        baslik: 'Elektrik Kesilirse',
        aciklama: 'Kapalı alanda jeneratör, mangal veya ızgara çalıştırma; karbonmonoksit zehirlenmesine yol açabilir. Baş ağrısı, baş dönmesi veya bulantı olursa hemen temiz havaya çık ve 112’yi ara.',
      },
      kaynak: 'NOAA / NWS • CDC • Red Cross',
      kontrolEdilecek: true,
    },
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
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    durumAni: {
      baslik: 'Yıldırım Tehlikesi Anında',
      ozet: 'Gök gürültüsünü duyabiliyorsan yıldırım düşebilecek kadar yakınsın. Hemen sağlam bir binaya veya kapalı bir araca gir.',
      yapilacaklar: [
        { ikon: 'home-outline', baslik: 'Hemen kapalı bir yere gir.', aciklama: 'Duvarları ve çatısı olan sağlam bir bina seç. Açık sundurma, çardak ve çadırlar yıldırıma karşı korumaz.' },
        { ikon: 'tree-outline', baslik: 'Ağaç altına sığınma.', aciklama: 'Tek başına duran ağaçlar tehlikelidir. Kapalı bir sığınağa ulaşana kadar ilerlemeye devam et.' },
        { ikon: 'swim', baslik: 'Sudan hemen çık.', aciklama: 'Denizde, gölde veya havuzdaysan sudan çık ve kıyıdan uzaklaş. Teknedeysen en yakın kıyıya yönel.' },
        { ikon: 'power-plug-off-outline', baslik: 'İçeride elektrik ve sudan uzak dur.', aciklama: 'Duş alma, bulaşık yıkama ve fişe takılı cihazları kullanma. Pencere ve kapılardan uzak dur.' },
        { ikon: 'fence', baslik: 'Metal çit ve korkuluklardan uzaklaş.', aciklama: 'Metal çit, direk ve korkuluklara dokunma. Tepeler gibi yüksek ve açık noktalardan aşağı in.' },
      ],
      guvenliIpuclari: ['Gök gürültüsünü ciddiye al.', 'Araçtaysan camları kapat.', 'Çocukları içeri al.'],
      kacinilmasiGerekenler: ['Yere yüzüstü uzanma.', 'Açık çardağa sığınma.', 'Kablolu sabit telefon kullanma.'],
      ozelDurum: {
        ikon: 'image-filter-hdr',
        baslik: 'Açıkta Sığınak Bulamıyorsan',
        aciklama: 'Yüksek noktalardan, ağaçlardan ve sudan uzaklaş. Yere uzanmadan çömel ve yere olabildiğince az temas et. Bu son çaredir; ilk fırsatta kapalı bir yere geç.',
      },
      kaynak: 'CDC • NOAA / NWS • Red Cross',
      kontrolEdilecek: true,
    },
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

  // ===== referans/25 =====
  {
    id: 'hortum',
    kategori: 'dogal-afetler',
    ad: 'Hortum',
    ikon: 'weather-tornado',
    durumAni: {
      baslik: 'Hortum Tehlikesi',
      ozet: 'Yakınında hortum varsa veya resmî uyarı geldiyse hemen sığın. Uçan parçalar, camlar ve çöken yapılar ağır yaralanmalara yol açabilir.',
      yapilacaklar: [
        { ikon: 'home-outline', baslik: 'Sağlam bir binaya gir.', aciklama: 'Güvenli ulaşabiliyorsan en yakın sağlam yapıya geç. Çadır, baraka ve karavan hortuma karşı güvenli sığınak değildir.' },
        { ikon: 'stairs-down', baslik: 'En alt kattaki iç odaya geç.', aciklama: 'Varsa bodrumu veya penceresiz, küçük bir iç odayı seç. Dış duvarlarla arana mümkün olduğunca çok duvar koy.' },
        { ikon: 'table-furniture', baslik: 'Başını ve boynunu koru.', aciklama: 'Yere yakın dur; kollarınla başını kapat. Yakınındaki sağlam masa, yastık veya battaniyeyle uçan parçalardan korun.' },
        { ikon: 'window-closed-variant', baslik: 'Camlardan ve geniş salonlardan uzaklaş.', aciklama: 'Pencereye yaklaşma. Spor salonu ve büyük çatılı alanlardan çıkıp binanın belirlenmiş sığınağına veya alt kattaki iç bölümüne geç.' },
        { ikon: 'radio', baslik: 'Resmî uyarıları takip et.', aciklama: 'Güvenli yerde kal; tehlike sürerken dışarı çıkma. Yakınındakileri uyar ve çocukları yanında tut.' },
      ],
      guvenliIpuclari: ['Hemen sığın.', 'Başını koru.', 'Telefonunu yanında tut.'],
      kacinilmasiGerekenler: ['Hortumu izlemek için çıkma.', 'Pencereleri açma.', 'Köprü altına sığınma.'],
      ozelDurum: {
        ikon: 'car',
        baslik: 'Araçtaysan',
        aciklama: 'Ulaşılabilir sağlam sığınağa geç. Uçan parçalar araca çarpıyorsa güvenle dur, kemerini takılı tut, başını cam hizasının altına indirip kollarınla koru. Trafikte hortumla yarışmaya çalışma.',
      },
      kaynak: 'NOAA / NWS',
      kontrolEdilecek: false,
    },
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    sonrasi: {
      baslik: 'Hortum Sonrası',
      ozet: 'Hortum geçtikten sonra da devrilen yapılar, kopan kablolar ve keskin enkaz tehlikelidir. Önce yaralıları kontrol et.',
      yapilacaklar: [
        { ikon: 'medical-bag', baslik: 'Yaralanmaları kontrol et.', aciklama: 'Ciddi yaralanma varsa 112’yi ara. Hemen tehlikede değilse ağır yaralıyı yerinden oynatma.' },
        { ikon: 'home-alert-outline', baslik: 'Hasarlı binaya girme.', aciklama: 'Yetkililer güvenli olduğunu bildirmeden içeri girme. İçerideyken çatırdama veya kayma sesi duyarsan hemen dışarı çık.' },
        { ikon: 'power-plug-off-outline', baslik: 'Kopan kablolara dokunma.', aciklama: 'Yerdeki her kabloyu elektrik taşıyor kabul et. Kablo aracının üzerine düştüyse araçtan çıkma ve yardım iste.' },
        { ikon: 'shoe-print', baslik: 'Enkazda korunarak hareket et.', aciklama: 'Sağlam ayakkabı, uzun pantolon ve eldiven giy. Kırık cam ve çıkıntılı çivilere dikkat et.' },
        { ikon: 'account-group-outline', baslik: 'Yakınlarına haber ver.', aciklama: 'Güvende olduğunu kısa mesajla bildir. Hatları meşgul etmemek için gereksiz arama yapma.' },
      ],
      guvenliIpuclari: ['Aydınlatma için fener kullan.', 'Gereksiz yolculuk yapma.', 'Hasarı güvenli yerden kaydet.'],
      kacinilmasiGerekenler: ['Mum yakma.', 'Kapalı alanda jeneratör çalıştırma.', 'Enkazı tek başına kaldırmaya çalışma.'],
      ozelDurum: {
        ikon: 'fire-alert',
        baslik: 'Gaz Kokusu veya Yangın Varsa',
        aciklama: 'Binayı hemen terk et ve güvenli yerden 112’yi ara. Kıvılcım çıkarabilecek düğme, çakmak veya kibrit kullanma.',
      },
      kaynak: 'CDC • NOAA / NWS • Red Cross',
      kontrolEdilecek: true,
    },
  },

  // ===== referans/30 =====
  {
    id: 'heyelan',
    kategori: 'dogal-afetler',
    ad: 'Heyelan',
    ikon: 'landslide',
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    durumAni: {
      baslik: 'Heyelan Anında',
      ozet: 'Toprak ve kaya kayması çok hızlı ilerleyebilir. Eşyalarını bırak; kaymanın yolundan çıkıp yüksek ve güvenli bir yere git.',
      yapilacaklar: [
        { ikon: 'arrow-top-right-thick', baslik: 'Kaymanın yolundan çık.', aciklama: 'Kaymanın geldiği yönden yana doğru uzaklaş ve en yakın yüksek yere çık. Beklemeden hareket et.' },
        { ikon: 'table-furniture', baslik: 'Çıkamıyorsan içeride korun.', aciklama: 'Binadan çıkacak zamanın yoksa içeride kal. Sağlam bir eşyanın yanında çök, kapan, tutun.' },
        { ikon: 'bridge', baslik: 'Çamur akan yoldan veya köprüden geçme.', aciklama: 'Üzerinden su veya çamur akan yolu geçmeye çalışma. Yaklaşan bir akış görürsen köprüye çıkma.' },
        { ikon: 'car', baslik: 'Araçtaysan yoldaki işaretlere dikkat et.', aciklama: 'Yola düşen taş, çamur veya çökmüş asfalt görürsen ilerleme. Yamaç dibinde bekleme; güvenli bir yere dön.' },
        { ikon: 'account-group-outline', baslik: 'Çevrendekileri uyar.', aciklama: 'Kaymayı fark edersen yakınındakilere bağırarak haber ver. Herkesin yüksek ve güvenli yere ilerlemesini sağla.' },
      ],
      guvenliIpuclari: ['Hemen hareket et.', 'Çocukları yanından ayırma.', 'Telefonunu yanına al.'],
      kacinilmasiGerekenler: ['Kaymayı izlemek için durma.', 'Eşya kurtarmak için geri dönme.', 'Dere yatağında bekleme.'],
      ozelDurum: {
        ikon: 'shield-account-outline',
        baslik: 'Kaçamıyorsan',
        aciklama: 'Kaçış mümkün değilse sıkıca kıvrıl ve başını kollarınla koru. Kurtulduğunda kendini kontrol et ve 112’den yardım iste.',
      },
      kaynak: 'AFAD • CDC • FEMA • USGS',
      kontrolEdilecek: true,
    },
    sonrasi: {
      baslik: 'Heyelan Sonrası',
      ozet: 'Toprak hareketi durmuş görünse bile yeni kaymalar ve su baskınları gelişebilir. Güvenli bölgede kal; dönüş için acele etme.',
      yapilacaklar: [
        { ikon: 'image-filter-hdr', baslik: 'Heyelan alanından uzak dur.', aciklama: 'Toprağın durması tehlikenin bittiğini göstermez. Kayma yoluna, yamacın altına ve birikmiş çamura yaklaşma; başkalarını da güvenli mesafeden uyar.' },
        { ikon: 'ambulance', baslik: 'Yaralıları güvenli yerden kontrol et.', aciklama: 'Kayma alanına girmeden görebildiğin yaralı veya mahsur kalanları 112’ye bildir. Konumu ve gördüğün tehlikeleri açıkça anlat.' },
        { ikon: 'power-plug-off-outline', baslik: 'Kopan altyapı hatlarını bildir.', aciklama: 'Elektrik kablolarından ve hasarlı borulardan uzaklaş. Gaz kokusu veya sızıntıyı güvenli yerden bildir; arızayı kendin onarmaya çalışma.' },
        { ikon: 'home-alert-outline', baslik: 'Eve dönmek için onay bekle.', aciklama: 'Hasarlı binaya eşya almak için girme. Zemin ve yapı güvenliği yetkililerce değerlendirilmeden içeride kalma.' },
        { ikon: 'bullhorn-outline', baslik: 'Duyuruları ve yol uyarılarını izle.', aciklama: 'Resmî açıklamaları takip et. Yol kapalıysa bariyeri aşma; hasarlı köprülerden ve heyelan kenarından geçmeye çalışma.' },
      ],
      guvenliIpuclari: ['Yakınlarına güvenli olduğunu bildir.', 'Acil araçlara yol bırak.', 'Tehlikeleri uzaktan bildir.'],
      kacinilmasiGerekenler: ['Çamurun içine girme.', 'Yamaçta kazı yapma.', 'Hasarlı yapıya dönme.'],
      ozelDurum: {
        ikon: 'landslide',
        baslik: 'Yeni Kayma Belirtisi Varsa',
        aciklama: 'Yeni çatlak, ağaç devrilmesi, uğultu veya derede ani seviye değişikliği görürsen çevredekileri uyar. Akış yoluna girmeden güvenli bölgeye uzaklaş ve 112’ye bildir.',
      },
      kaynak: 'CDC • USGS',
      kontrolEdilecek: false,
    },
  },
];

export default dogalAfetSenaryolari;
