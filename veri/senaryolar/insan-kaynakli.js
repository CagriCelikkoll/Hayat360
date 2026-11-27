// Bu dosya "İnsan Kaynaklı Felaketler" kategorisinin senaryolarını tutar.
// Fotoğraftan gelen metinler HARFİ HARFİNE aktarıldı; değiştirmeyin.
// "TASLAK" yorumlu sekmeleri fotoğraf olmadığı için biz yazdık (kontrolEdilecek: true);
// bunlar uzman kontrolünden geçene kadar ekranda sarı "Taslak" etiketiyle görünür.
// Alanların ne anlama geldiği veri/senaryolar/index.js dosyasının başında yazıyor.

const insanKaynakliSenaryolar = [
  // ===== referans/12 =====
  {
    id: 'dogal-gaz-kacagi',
    kategori: 'insan-kaynakli',
    ad: 'Doğal Gaz Kaçağı',
    ikon: 'fire',
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    durumAni: {
      baslik: 'Doğal Gaz Kokusu Aldım',
      ozet: 'Çürük sarımsağa benzeyen koku gaz kaçağı belirtisi olabilir. Kıvılcım çıkaracak hiçbir şeye dokunmadan ortamı havalandır ve dışarı çık.',
      yapilacaklar: [
        { ikon: 'lightbulb-off-outline', baslik: 'Kıvılcım çıkaracak hiçbir şeye dokunma.', aciklama: 'Işık düğmesine, prize veya elektrikli cihazlara dokunma. Çakmak ve kibrit yakma.' },
        { ikon: 'pipe-valve', baslik: 'Güvenle ulaşabiliyorsan vanayı kapat.', aciklama: 'Sayaç veya cihaz vanasını kapat. Vanaya ulaşmak için kokunun yoğun olduğu yerde oyalanma.' },
        { ikon: 'window-open-variant', baslik: 'Kapı ve pencereleri aç.', aciklama: 'Çıkarken ortamı havalandır. Bunun için aspiratör veya elektrikli fan çalıştırma.' },
        { ikon: 'exit-run', baslik: 'Herkesi dışarı çıkar.', aciklama: 'Yanındakileri ve evcil hayvanları alıp binadan çık. Eşya toplamak için oyalanma.' },
        { ikon: 'bell-off-outline', baslik: 'Komşuların zilini çalma.', aciklama: 'Zil kıvılcım çıkarabilir. Komşuları kapıyı elle çalarak veya seslenerek uyar.' },
      ],
      guvenliIpuclari: ['Sakin ve hızlı hareket et.', 'Çürük sarımsak kokusunu ciddiye al.', 'Komşuları sesli uyar.'],
      kacinilmasiGerekenler: ['Kokunun kaynağını arama.', 'Asansör çalıştırma.', 'Sigara yakma.'],
      ozelDurum: {
        ikon: 'alert',
        baslik: 'Koku Çok Yoğunsa veya Biri Fenalaştıysa',
        aciklama: 'Vana veya pencere için içeride oyalanma; hemen dışarı çık. Bayılan, baş dönmesi veya nefes darlığı olan biri varsa güvenli yerden 112’yi ara.',
      },
      kaynak: 'GAZBİR • İGDAŞ',
      kontrolEdilecek: true,
    },
    sonrasi: {
      baslik: 'Doğal Gaz Kaçağı Sonrası',
      ozet: 'Dışarı çıkman veya kokunun azalması, kaçağın giderildiğini göstermez. Güvenli alanda bekle ve gaz dağıtım ekibinin talimatlarını izle.',
      yapilacaklar: [
        { ikon: 'home-export-outline', baslik: 'Binadan uzakta kal.', aciklama: 'Herkesin tehlikeli alandan çıktığını kontrol et. İçeride kalan birini veya hayvanı ekiplere bildir; yeniden içeri girme.' },
        // 187: Doğal gaz acil hattı (fotoğrafta yazıyor, uydurma değil)
        { ikon: 'phone-in-talk', baslik: 'Güvenli yerden 187’yi ara.', aciklama: 'Doğal gaz kokusunu, açık adresi ve gördüğün hasarı anlat. Aramayı gaz kokusu bulunan ortamdan yapma; operatörün yönlendirmesini izle.' },
        { ikon: 'alarm-light-outline', baslik: 'Yangın veya yaralanmada 112’yi ara.', aciklama: 'Alev, patlama, bayılma veya nefes alma güçlüğü varsa 112’ye haber ver. Kurtarmak için gazlı ortama girme.' },
        { ikon: 'account-hard-hat-outline', baslik: 'Giriş iznini bekle.', aciklama: 'Ekip güvenli olduğunu söylemeden binaya dönme. Kontrol için ışık açma, zile basma veya kaçak yakınında araç çalıştırma.' },
        { ikon: 'pipe-valve', baslik: 'Gazı kendin yeniden açma.', aciklama: 'Arıza ve tesisat kontrolünü dağıtım şirketinin yönlendirdiği yetkili kişilere bırak. Onarım ve güvenlik işlemleri tamamlanmadan cihazları deneme.' },
      ],
      guvenliIpuclari: ['Adresini hazırla.', 'Çocukları güvenli yerde tut.', 'Ekiplerin yolunu açık bırak.'],
      kacinilmasiGerekenler: ['Kaçağı kendin onarma.', 'Vanayı izinsiz yeniden açma.', 'Kokulu alanda telefon kullanma.'],
      ozelDurum: {
        ikon: 'fire-alert',
        baslik: 'Dönüşten sonra yeniden koku varsa',
        aciklama: 'Yeniden gaz kokusu alırsan ortamı tekrar terk et. Elektrik düğmelerine dokunma; güvenli yerden 187’ye bildir. Yangın, patlama veya sağlık sorunu varsa ayrıca 112’yi ara.',
      },
      kaynak: 'GAZBİR • Con Edison • Sağlık Bakanlığı',
      kontrolEdilecek: false,
    },
  },

  // ===== referans/13 =====
  {
    id: 'kimyasal-sizinti',
    kategori: 'insan-kaynakli',
    ad: 'Kimyasal Sızıntı',
    ikon: 'flask-outline',
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    durumAni: {
      baslik: 'Kimyasal Sızıntı Anında',
      ozet: 'Havaya karışan kimyasal kısa sürede yayılabilir. Yetkililer aksini söylemedikçe kapalı bir yerde kal ve dış havanın içeri girmesini engelle.',
      yapilacaklar: [
        { ikon: 'home-lock', baslik: 'İçerideysen içeride kal.', aciklama: 'Yetkililer tahliye demedikçe binadan çıkma. Çocukları ve evcil hayvanları hemen içeri al.' },
        { ikon: 'window-closed-variant', baslik: 'Kapı ve pencereleri kapat.', aciklama: 'Fanları, klimayı ve kaloriferi kapat. Az pencereli bir iç odaya geç.' },
        { ikon: 'door-closed', baslik: 'Aralıkları kapat.', aciklama: 'Kapı ve pencere kenarlarını bant veya kumaşla kapatarak dış havanın içeri girmesini azalt.' },
        { ikon: 'weather-windy', baslik: 'Dışarıdaysan uzaklaş.', aciklama: 'Sızıntının olduğu alandan olabildiğince uzaklaş. Mümkünse rüzgârın geldiği yöne doğru git.' },
        { ikon: 'radio', baslik: 'Resmî talimatları dinle.', aciklama: 'Radyo, televizyon veya telefon uyarılarından tahliye mi gerektiğini yoksa içeride mi kalman gerektiğini öğren. Polis ve itfaiyenin talimatlarına uy.' },
      ],
      guvenliIpuclari: ['Sakin kal ve bekle.', 'Telefonunu yanında tut.', 'Yakınlarına nerede olduğunu bildir.'],
      kacinilmasiGerekenler: ['Başkasına yardım için dışarı çıkma.', 'Sızıntıyı görmeye gitme.', 'Havalandırmak için pencere açma.'],
      ozelDurum: {
        ikon: 'water',
        baslik: 'Gözüne veya Cildine Bulaştıysa',
        aciklama: 'Bulaşan yeri hemen bol temiz suyla yıka. Nefes darlığı, bilinç değişikliği veya gözde şiddetli yanma varsa 112’yi ara.',
      },
      kaynak: 'CDC • FEMA • Red Cross • Emniyet Genel Müdürlüğü',
      kontrolEdilecek: true,
    },
    sonrasi: {
      baslik: 'Kimyasal Sızıntı Sonrası',
      ozet: 'Kokunun kaybolması tehlikenin bittiğini kanıtlamaz. Güvenli yerde kal; dönüş, arındırma ve sağlık talimatlarını yetkililerden al.',
      yapilacaklar: [
        { ikon: 'bullhorn-outline', baslik: 'Resmî güvenli dönüş duyurusunu bekle.', aciklama: 'Sığınma yerinden çıkmak veya bölgeye dönmek için yetkililerin talimatını bekle. Kapalı yolları ve güvenlik şeritlerini aşma.' },
        { ikon: 'medical-bag', baslik: 'Maruz kaldıysan ekibe bildir.', aciklama: 'Kimyasalı soluduysan veya cildine, gözüne bulaştıysa 112’ye söyle. Nefes darlığı, bilinç değişikliği veya şiddetli yakınmalarda yardım istemeyi geciktirme.' },
        { ikon: 'shower-head', baslik: 'Arındırma yönlendirmesini izle.', aciklama: 'Üzerinde kimyasal kalmış olabileceğini ekibe bildir ve arındırma talimatını hemen al. Bilinmeyen maddelere başka kimyasal karıştırarak müdahale etme.' },
        { ikon: 'tshirt-crew-outline', baslik: 'Kirlenmiş eşyaları kullanma.', aciklama: 'Kimyasala temas eden giysi ve eşyalara çıplak elle dokunma. Bunları evsel çöpe atma; teslim ve uzaklaştırma talimatını yetkililerden öğren.' },
        { ikon: 'heart-pulse', baslik: 'Sağlık takibini tamamla.', aciklama: 'Kendini iyi hissetsen bile önerilen muayene ve izlemi tamamla. Maruz kaldığın yeri, zamanı ve gözlediğin belirtileri sağlık ekibine anlat.' },
      ],
      guvenliIpuclari: ['Resmî duyuruları takip et.', 'Maruziyet saatini not et.', 'Çocukları kirli eşyalardan uzak tut.'],
      kacinilmasiGerekenler: ['Sızıntıyı temizlemeye girişme.', 'Kimyasalı koklayarak kontrol etme.', 'Kirlenmiş giysiyi yeniden giyme.'],
      ozelDurum: {
        ikon: 'smoke',
        baslik: 'Yeni belirtiler başlarsa',
        aciklama: 'Güvenli alana çıktıktan sonra yeni yakınmalar gelişirse sağlık yardımı al ve kimyasal maruziyeti belirt. Solunum güçlüğü veya bilinç bozukluğu varsa 112’yi ara.',
      },
      kaynak: 'CDC • Sağlık Bakanlığı',
      kontrolEdilecek: false,
    },
  },

  // ===== referans/17 =====
  {
    id: 'bina-yangini',
    kategori: 'insan-kaynakli',
    ad: 'Bina Yangını',
    ikon: 'office-building-outline',
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    durumAni: {
      baslik: 'Binada Yangın Var',
      ozet: 'Yangında duman, alevden daha hızlı ve daha tehlikeli olabilir. Hemen dışarı çık, dışarıda kal ve güvenli yerden 112’yi ara.',
      yapilacaklar: [
        { ikon: 'bullhorn-outline', baslik: 'Herkesi uyar ve çıkmaya başla.', aciklama: 'Yüksek sesle "Yangın var!" diye seslen ve binadan çıkmaya başla. Güvenli bir yere ulaşınca 112’yi ara.' },
        { ikon: 'arrow-down-bold-outline', baslik: 'Dumanın altından eğilerek ilerle.', aciklama: 'Duman ve zehirli gazlar önce tavanda birikir. Yere yakın, eğilerek veya emekleyerek çıkışa git.' },
        { ikon: 'door', baslik: 'Kapıyı açmadan önce kontrol et.', aciklama: 'Kapıya ve koluna elinin tersiyle dokun. Sıcaksa veya kenarından duman geliyorsa açma; diğer çıkışı kullan.' },
        { ikon: 'door-closed', baslik: 'Çıktığın kapıları kapat.', aciklama: 'Arkandaki kapıları kapatmak yangının ve dumanın yayılmasını yavaşlatır.' },
        { ikon: 'fire', baslik: 'Giysin tutuşursa dur, yat, yuvarlan.', aciklama: 'Koşma; yere yat, yüzünü ellerinle kapat ve alevler sönene kadar yuvarlan.' },
      ],
      guvenliIpuclari: ['Sakin ve hızlı hareket et.', 'Çocukları yanından ayırma.', 'İkinci çıkış yolunu düşün.'],
      kacinilmasiGerekenler: ['Eşya toplamak için oyalanma.', 'Dolap veya yatak altına saklanma.', 'Söndürmek için kendini riske atma.'],
      ozelDurum: {
        ikon: 'window-open-variant',
        baslik: 'Odadan Çıkamıyorsan',
        aciklama: 'Kapıyı kapalı tut ve aralıkları havlu veya kumaşla kapat. 112’yi ara ve pencereden açık renkli bir kumaş ya da fenerle yerini göster.',
      },
      kaynak: 'Red Cross • FEMA',
      kontrolEdilecek: true,
    },
    sonrasi: {
      baslik: 'Bina Yangını Sonrası',
      ozet: 'Alevlerin sönmesi, binanın güvenli olduğu anlamına gelmez. Duman, hasarlı yapı ve elektrik tesisatı tehlike yaratmayı sürdürebilir.',
      yapilacaklar: [
        { ikon: 'account-group', baslik: 'Güvenli buluşma yerinde kal.', aciklama: 'Binadan ve dumandan uzakta bekle. Yanındakileri say; eksik birinin son görüldüğü yeri itfaiyeye bildir, aramak için geri dönme.' },
        { ikon: 'medical-bag', baslik: 'Sağlık durumunu bildir.', aciklama: 'Duman soluduysan veya yandıysan sağlık ekibine söyle. Ciddi nefes darlığı, göğüs ağrısı, bilinç bulanıklığı ya da ağır yanıkta 112’yi ara.' },
        { ikon: 'door-closed-cancel', baslik: 'Binaya izinsiz girme.', aciklama: 'İtfaiye ve yetkililer güvenli olduğunu bildirmeden içeri girme. Güvenlik şeritlerini aşma; hasarlı duvarlara ve merdivenlere yaklaşma.' },
        { ikon: 'tools', baslik: 'Tesisatı uzmanlara kontrol ettir.', aciklama: 'Elektrik ve gaz sistemlerini kendin yeniden çalıştırma. Hasarlı tesisat ve cihazlar, yetkili kişiler kontrol edip güvenli bulmadan kullanılmamalı.' },
        { ikon: 'home-outline', baslik: 'Güvenli konaklama ayarla.', aciklama: 'Eve dönemiyorsan yakınlarınla veya yerel destek birimleriyle iletişim kur. Çocukları, yaşlıları ve hayvanları yangın alanından uzak tut.' },
      ],
      guvenliIpuclari: ['Yakınlarına güvende olduğunu bildir.', 'Ekiplerin geçiş yolunu açık tut.', 'İlaç ihtiyacını ekibe söyle.'],
      kacinilmasiGerekenler: ['Eşya almak için dönme.', 'Dumana maruz kalan yiyeceği tüketme.', 'Hasarlı cihazları deneme.'],
      ozelDurum: {
        ikon: 'lungs',
        baslik: 'Öksürük veya nefes darlığı sürerse',
        aciklama: 'Dumandan uzaklaşınca düzelmeyen ya da artan şikayetleri sağlık uzmanına bildir. Solunum zorlaşırsa veya kişi uyandırılamıyorsa 112’yi ara; bekleyerek geçmesini umma.',
      },
      kaynak: 'American Red Cross • NHS',
      kontrolEdilecek: false,
    },
  },

  // ===== referans/26 =====
  {
    id: 'trafik-kazasi',
    kategori: 'insan-kaynakli',
    ad: 'Trafik Kazası',
    ikon: 'car-emergency',
    durumAni: {
      baslik: 'Trafik Kazası Oldu',
      ozet: 'Kazadan sonra ikinci bir çarpışma riski vardır. Önce kendini koru; yaralı veya acil tehlike varsa 112’yi ara.',
      yapilacaklar: [
        { ikon: 'road-variant', baslik: 'Trafikten uzaklaş.', aciklama: 'Güvenliyse dörtlüleri yak. Yaralanmadıysan trafikten uzak taraftan çık; araçlardan ve akan trafikten uzakta güvenli bir yere geç.' },
        { ikon: 'phone-in-talk', baslik: '112’ye açık bilgi ver.', aciklama: 'Yol adını, gidiş yönünü ve konumunu bildir. Yaralı sayısını, sıkışanları, yangın veya yakıt sızıntısını söyle.' },
        { ikon: 'account-injury-outline', baslik: 'Yaralıyı gereksiz yere oynatma.', aciklama: 'Yangın gibi doğrudan tehlike yoksa yaralıyı çekerek araçtan çıkarma. Başını veya boynunu zorlayarak hareket ettirme.' },
        { ikon: 'lungs', baslik: 'Solunumu kontrol et.', aciklama: 'Yanıt vermiyor ve normal nefes almıyorsa 112’ye hemen bildir. Telefonu hoparlöre al; görevlinin yönlendirdiği canlandırma adımlarını uygula.' },
        { ikon: 'bandage', baslik: 'Kanamayı ve üşümeyi azalt.', aciklama: 'Şiddetli dış kanamada temiz bezle sıkıca bası uygula; batmış cismin üzerine bastırma. Yaralıyı sıcak tut; yiyecek, içecek verme.' },
      ],
      guvenliIpuclari: ['Varsa eldiven kullan.', '112’nin sorularını yanıtla.', 'Ekiplerin erişimini açık tut.'],
      kacinilmasiGerekenler: ['Sigara veya ateş yakma.', 'Trafiğin içine girme.', 'Yaralıyı yürütmeye çalışma.'],
      ozelDurum: {
        ikon: 'car-outline',
        baslik: 'Araçtan Güvenle Çıkamıyorsan',
        aciklama: 'Trafiğe adım atma. Yangın gibi doğrudan tehlike yoksa kemerin bağlı kalsın; dörtlüleri yak. 112’ye araçtan çıkamadığını bildir ve verilen talimatları izle.',
      },
      kaynak: 'Sağlık Bakanlığı · GOV.UK Highway Code',
      kontrolEdilecek: false,
    },
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    sonrasi: {
      baslik: 'Trafik Kazası Sonrası',
      ozet: 'Kazadan sonra iyi hissetsen bile bazı yaralanmaların belirtileri saatler sonra başlayabilir. Kendini izle ve gerekirse sağlık desteği al.',
      yapilacaklar: [
        { ikon: 'stethoscope', baslik: 'Sağlık kontrolünü erteleme.', aciklama: 'Başını çarptıysan, boynunda ağrı ya da uyuşma varsa sağlık kuruluşuna başvur. Belirtilerin geçmesini bekleme.' },
        { ikon: 'clock-outline', baslik: 'Gecikmeli belirtileri izle.', aciklama: 'Boyun ağrısı ve tutulma kazadan saatler sonra başlayabilir. Kötüleşen ağrı, karıncalanma veya güçsüzlükte hemen yardım iste.' },
        { ikon: 'car-off', baslik: 'Kendini iyi hissetmeden araç kullanma.', aciklama: 'Baş dönmesi, ağrı veya dikkat dağınıklığı varsa direksiyona geçme. Sağlık çalışanına danışmadan araç kullanmayı ertele.' },
        { ikon: 'account-group-outline', baslik: 'Yakınlarına haber ver.', aciklama: 'Güvende olduğunu ve nerede olduğunu bildir. Seni eve güvenle götürecek birinden destek iste.' },
        { ikon: 'clipboard-text-outline', baslik: 'Olayı ve belirtilerini not et.', aciklama: 'Kazanın saatini, nasıl olduğunu ve fark ettiğin belirtileri yaz. Bu bilgileri sağlık çalışanına aktar.' },
      ],
      guvenliIpuclari: ['Dinlenmeye zaman ayır.', 'Yanında biri kalsın.', 'Sağlık çalışanının önerisine uy.'],
      kacinilmasiGerekenler: ['Ağrıyı önemsiz sayma.', 'Hasarlı aracı kontrol ettirmeden kullanma.', 'Belirtilerini saklama.'],
      ozelDurum: {
        ikon: 'alert-circle-outline',
        baslik: 'Acil Belirtiler Görürsen',
        aciklama: 'Kollarda veya bacaklarda güçsüzlük, yürüme ya da dik oturma güçlüğü, ağrı kesiciye rağmen geçmeyen şiddetli ağrı veya bilinç bulanıklığı olursa 112’yi ara.',
      },
      kaynak: 'NHS',
      kontrolEdilecek: true,
    },
  },
];

export default insanKaynakliSenaryolar;
