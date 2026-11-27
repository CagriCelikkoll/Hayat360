// Bu dosya "Teknolojik ve Sistemsel Krizler" kategorisinin senaryolarını tutar.
// Fotoğraftan gelen metinler HARFİ HARFİNE aktarıldı; değiştirmeyin.
// "TASLAK" yorumlu sekmeleri fotoğraf olmadığı için biz yazdık (kontrolEdilecek: true);
// bunlar uzman kontrolünden geçene kadar ekranda sarı "Taslak" etiketiyle görünür.
// Alanların ne anlama geldiği veri/senaryolar/index.js dosyasının başında yazıyor.

const teknolojikSenaryolar = [
  // ===== referans/02 =====
  {
    id: 'kopmus-elektrik-hatti',
    kategori: 'teknolojik',
    ad: 'Kopmuş Elektrik Hattı',
    ikon: 'transmission-tower',
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    durumAni: {
      baslik: 'Kopmuş Elektrik Hattı Gördüm',
      ozet: 'Yere düşmüş veya sarkan her kabloyu elektrik taşıyor kabul et. Kabloya ve dokunduğu hiçbir şeye yaklaşma; güvenli uzaklıktan haber ver.',
      yapilacaklar: [
        { ikon: 'flash-alert', baslik: 'Kabloyu elektrik taşıyor kabul et.', aciklama: 'Hareketsiz veya sessiz görünse bile kablo enerjili olabilir; yakınından geçme.' },
        { ikon: 'arrow-expand-all', baslik: 'Güvenli mesafede dur.', aciklama: 'Kablodan ve dokunduğu çit, araç veya su birikintisi gibi her şeyden uzak dur.' },
        { ikon: 'phone-in-talk', baslik: 'Güvenli uzaklıktan 112’ye bildir.', aciklama: 'Kablonun yerini ve çevredeki tehlikeleri anlat. Yaralı varsa bunu da söyle.' },
        { ikon: 'car', baslik: 'Kablo aracına düştüyse içeride kal.', aciklama: 'Dışarıdakilere araca dokunmamalarını söyle. Araç çalışıyorsa kablodan uzaklaşacak şekilde sürmeye devam et.' },
        { ikon: 'road-variant', baslik: 'Kablonun üzerinden geçme.', aciklama: 'Yürürken veya araç kullanırken yere düşmüş kablonun üzerinden geçmeye çalışma; başka bir yol kullan.' },
      ],
      guvenliIpuclari: ['Sakin kal ve geri çekil.', 'Kablonun yerini aklında tut.', 'Yetkililer gelene kadar uzakta bekle.'],
      kacinilmasiGerekenler: ['Kabloyu sopayla itmeye çalışma.', 'Kablonun dokunduğu araca veya çite dokunma.', 'Yaklaşıp fotoğraf çekme.'],
      ozelDurum: {
        ikon: 'fire-alert',
        baslik: 'Araç Yanmaya Başlarsa',
        aciklama: 'Araç alev almadıkça içeride kal. Yangın nedeniyle çıkman gerekirse araca ve yere aynı anda dokunmadan çık, kablodan uzaklaş ve 112’yi ara.',
      },
      kaynak: 'CDC • Red Cross • FEMA',
      kontrolEdilecek: true,
    },
    sonrasi: {
      baslik: 'Kopmuş Elektrik Hattı Sonrası',
      ozet: 'Kabloya artık kıvılcım çıkarmıyor diye yaklaşma. Alanın güvenli olduğuna yetkili elektrik ekibi karar verir; onay gelene kadar uzak kal.',
      yapilacaklar: [
        { ikon: 'boom-gate-outline', baslik: 'Ekip onayını bekle.', aciklama: 'Barikatı geçme; kablonun veya temas ettiği araç ve çitlerin yanına dönme. Enerjinin kesildiğini kendin varsayma.' },
        { ikon: 'phone-in-talk-outline', baslik: 'Yeni tehlikeleri bildir.', aciklama: 'Başka sarkan hat, hasarlı direk veya yangın görürsen güvenli uzaklıktan 112’ye ve dağıtım şirketine konumu bildir.' },
        { ikon: 'medical-bag', baslik: 'Temas olduysa sağlık yardımı al.', aciklama: 'Elektrik çarpmasına maruz kaldıysan dışarıdan yanık görünmese bile 112’den yardım iste. Elektrik vücudun içinde de hasar oluşturabilir.' },
        { ikon: 'power-plug-off-outline', baslik: 'Hasarlı tesisatı kullanma.', aciklama: 'Elektrikçi kontrol etmeden zarar görmüş tesisatı veya cihazı yeniden çalıştırma. Islak alanlara girerek sigortaya ulaşmaya çalışma.' },
        { ikon: 'account-multiple-outline', baslik: 'Çevrendekileri uzak tut.', aciklama: 'Çocukları ve hayvanları tehlikeli bölgeye yaklaştırma. İnsanları güvenli bir yerden uyar; ekiplere ulaşmak için kablonun yanına gitme.' },
      ],
      guvenliIpuclari: ['Güvenlik sınırına uy.', 'Aramaları güvenli uzaklıktan yap.', 'Şikâyetlerini sağlık ekibine söyle.'],
      kacinilmasiGerekenler: ['Kabloyu kendin taşıma.', 'Su birikintisine girme.', 'Deneme için sigorta açma.'],
      ozelDurum: {
        ikon: 'account-hard-hat',
        baslik: 'Birine Yardım Edeceksen',
        aciklama: 'Elektrik ekibi enerjinin kesildiğini ve yaklaşmanın güvenli olduğunu doğrulamadan kişiye dokunma. Güvenli erişim sağlanınca kişi yanıt vermiyor ve normal nefes almıyorsa 112 yönlendirmesiyle canlandırmaya başla.',
      },
      kaynak: 'CDC · FirstEnergy · Türkiye 112',
      kontrolEdilecek: false,
    },
  },

  // ===== referans/03 =====
  {
    id: 'elektrik-kesintisi',
    kategori: 'teknolojik',
    ad: 'Elektrik Kesintisi',
    ikon: 'power-plug',
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    durumAni: {
      baslik: 'Elektrik Kesildi',
      ozet: 'Kesinti sırasında asıl tehlike mum, jeneratör ve ısıtıcıların yanlış kullanılmasıdır. Güvenli aydınlatma kullan ve gıdalarını korumaya çalış.',
      yapilacaklar: [
        { ikon: 'flashlight', baslik: 'Mum yerine fener kullan.', aciklama: 'Aydınlatma için pilli veya şarjlı fener kullan. Mum yangına yol açabilir.' },
        { ikon: 'fridge-outline', baslik: 'Buzdolabının kapağını kapalı tut.', aciklama: 'Buzdolabını ve dondurucuyu gerekmedikçe açma; böylece içindekiler daha uzun süre soğuk kalır.' },
        { ikon: 'power-plug-off-outline', baslik: 'Cihazların fişini çek.', aciklama: 'Elektrik geri geldiğinde oluşabilecek dalgalanmaya karşı cihazları kapat veya fişten çek. Elektriğin geldiğini anlamak için bir lambayı açık bırakabilirsin.' },
        { ikon: 'engine-outline', baslik: 'Jeneratörü içeride çalıştırma.', aciklama: 'Jeneratörü yalnızca dışarıda, pencere, kapı ve havalandırma deliklerinden uzakta çalıştır.' },
        { ikon: 'medical-bag', baslik: 'Elektrikli tıbbi cihazları düşün.', aciklama: 'Evde elektrikle çalışan tıbbi cihaz kullanan biri varsa ve cihaz çalışmıyorsa 112’den yardım iste.' },
      ],
      guvenliIpuclari: ['Telefon pilini idareli kullan.', 'Üşüyorsan kat kat giyin.', 'Yaşlı komşularının durumunu sor.'],
      kacinilmasiGerekenler: ['Evi fırın veya ocakla ısıtmaya çalışma.', 'Kapalı alanda mangal yakma.', 'Arızaya kendin müdahale etme.'],
      ozelDurum: {
        ikon: 'home-thermometer-outline',
        baslik: 'Kesinti Uzun Sürerse',
        aciklama: 'Ev çok soğur veya çok ısınırsa, yolculuk güvenliyse elektriği olan bir yakınına ya da yetkililerin açtığı merkezlere geç.',
      },
      kaynak: 'CDC • FEMA • Red Cross',
      kontrolEdilecek: true,
    },
    sonrasi: {
      baslik: 'Elektrik Geldikten Sonra',
      ozet: 'Elektriğin gelmesi hasarlı tesisatı veya bozulmuş gıdayı güvenli yapmaz. Cihazları kullanmadan önce kontrol et.',
      yapilacaklar: [
        { ikon: 'power-socket-eu', baslik: 'Hasarlı veya ıslak sisteme dokunma.', aciklama: 'Su almış priz, cihaz ve tesisatı kullanma. Elektrikçi güvenli olduğunu doğrulamadan sigortayı açma veya cihazı çalıştırma.' },
        { ikon: 'laptop', baslik: 'Cihazları kontrollü kullan.', aciklama: 'Tesisat ve cihazlar güvenliyse talimatlarına göre kullan. Kıvılcım, yanık kokusu veya hasar varsa denemeyi bırak.' },
        { ikon: 'fridge-outline', baslik: 'Gıdayı kontrol et.', aciklama: 'Buzdolabı 4 saatten uzun süre elektriksiz kaldıysa ve yiyecekler soğuk tutulmadıysa et, süt ve artan yemekleri tüketme.' },
        { ikon: 'bottle-tonic-plus-outline', baslik: 'Soğukta saklanan ilacı danış.', aciklama: 'Kesinti süresini ve ilacın saklama koşullarını eczacıya bildir. Kullanılabilirliğini öğren; tedaviyi kendiliğinden değiştirme veya bırakma.' },
        { ikon: 'cellphone-charging', baslik: 'Öncelikli ihtiyaçları tamamla.', aciklama: 'Güvenli priz ve şarj cihazıyla telefonunu şarj et. Elektriğe bağlı tıbbi cihazları kullanım planına göre kontrol et.' },
      ],
      guvenliIpuclari: ['Kesintinin süresini not et.', 'Gıdayı tatmadan değerlendir.', 'Dağıtım şirketinin duyurularını izle.'],
      kacinilmasiGerekenler: ['Islak cihazı deneme.', 'Şüpheli gıdayı tüketme.', 'Arızalı sigortayı tekrar tekrar açma.'],
      ozelDurum: {
        ikon: 'fire-alert',
        baslik: 'Duman, Alev veya Çarpılma Varsa',
        aciklama: 'Güvenli uzaklığa geç ve 112’yi ara. Elektrikli donanıma veya akımla temas eden kişiye dokunma. Tehlike giderilmeden geri dönme; arızalı sistemi yetkili incelemesi olmadan yeniden kullanma.',
      },
      kaynak: 'American Red Cross · CDC · FDA',
      kontrolEdilecek: false,
    },
  },

  // ===== referans/04 =====
  {
    id: 'iletisim-kesintisi',
    kategori: 'teknolojik',
    ad: 'İletişim Kesintisi',
    ikon: 'radio-tower',
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    durumAni: {
      baslik: 'İletişim Kesildi',
      ozet: 'Afetlerde telefon ve internet hatları çökebilir veya aşırı yüklenebilir. Hatları yalnızca acil durumda kullan; arama yerine mesajı tercih et.',
      yapilacaklar: [
        { ikon: 'message-text-outline', baslik: 'Arama yerine kısa mesaj dene.', aciklama: 'Sesli arama geçmiyorsa SMS veya internet üzerinden mesajlaşmayı dene; mesajlar daha kolay ulaşabilir.' },
        { ikon: 'phone-in-talk', baslik: 'Hayati tehlikede 112’den vazgeçme.', aciklama: 'Hat meşgulse kısa aralarla yeniden dene.' },
        { ikon: 'radio', baslik: 'Pilli radyodan duyuruları dinle.', aciklama: 'Telefon ve internet çalışmıyorsa resmî açıklamaları pilli radyodan takip et.' },
        { ikon: 'map-marker-outline', baslik: 'Kararlaştırdığınız buluşma yerine git.', aciklama: 'Ailenle iletişim kuramıyorsan ve yol güvenliyse önceden belirlediğiniz buluşma noktasına git.' },
        { ikon: 'account-group-outline', baslik: 'Yakınındakilerle bilgi paylaş.', aciklama: 'Komşularınla ve görevlilerle konuşarak bilgi al; duyduklarını resmî kaynaktan doğrula.' },
      ],
      guvenliIpuclari: ['Mesajlarını kısa ve net yaz.', 'Konum bilgisini mesaja ekle.', 'Sakin kal ve bekle.'],
      kacinilmasiGerekenler: ['Sesli aramada ısrar etme.', 'Telefonu oyun veya video için kullanma.', 'Kimseye haber vermeden yerinden ayrılma.'],
      ozelDurum: {
        ikon: 'whistle-outline',
        baslik: 'Yardım Çağırman Gerekirse',
        aciklama: 'Telefon çalışmıyorsa düdük, fener veya sesinle çevrendekilere ulaşmaya çalış; görevlilere yerini bildir.',
      },
      kaynak: 'AFAD • Kızılay',
      kontrolEdilecek: true,
    },
    sonrasi: {
      baslik: 'İletişim Yeniden Kurulduğunda',
      ozet: 'Bağlantı kurulunca acil ihtiyacını ve konumunu bildir. Aileni kısa mesajla bilgilendir; pilini koru.',
      yapilacaklar: [
        { ikon: 'message-processing-outline', baslik: 'Kısa durum mesajı gönder.', aciklama: 'Yakınlarına durumunu, konumunu ve yardım ihtiyacını kısa SMS veya mesajla yaz. Uzun görüşmelerden kaçın.' },
        { ikon: 'phone-in-talk', baslik: 'Acil durumda 112’yi ara.', aciklama: 'Can güvenliği tehlikesinde 112’yi aramayı geciktirme. Genel haber veya kesinti bilgisi için acil hattı meşgul etme.' },
        { ikon: 'map-marker-outline', baslik: 'Konumunu güncelle.', aciklama: 'Yer veya sağlık durumun değiştiyse ilgili yardım ekibine bildir. Kurtarıldıysan veya güvendeysen bunu da söyle.' },
        { ikon: 'bullhorn-outline', baslik: 'Resmî uyarıları kontrol et.', aciklama: 'AFAD, valilik ve ilgili kurumların güncel duyurularını izle. Mesajın tarihini ve hangi bölgeyi kapsadığını kontrol et; doğrulanmamış bilgiyi paylaşma.' },
        { ikon: 'battery-charging-outline', baslik: 'Pili ve ulaşılabilirliği koru.', aciklama: 'Ekran parlaklığını azalt, gereksiz uygulamaları kapat. Güvenli şarj imkânı varsa kullan; yardım ekibi arayacaksa telefonunu açık ve ulaşılabilir tut.' },
      ],
      guvenliIpuclari: ['Mesajına saat bilgisini ekle.', 'Buluşma yerini netleştir.', 'Önemli numaraları not et.'],
      kacinilmasiGerekenler: ['Uzun görüntülü görüşme yapma.', 'Peş peşe gereksiz arama yapma.', 'Eski konumu güncelmiş gibi paylaşma.'],
      ozelDurum: {
        ikon: 'radio-tower',
        baslik: 'Bağlantı Yine Kesilirse',
        aciklama: 'Sinyal için tehlikeli bir yere gitme. Acil yardım gerekiyorsa yakındaki görevlilerden veya güvenle ulaşabildiğin kişilerden destek iste; konumunu açıkça belirt.',
      },
      kaynak: 'İletişim Başkanlığı · NC Emergency Management · 112',
      kontrolEdilecek: false,
    },
  },

  // ===== referans/27 =====
  {
    id: 'sisen-telefon-pili',
    kategori: 'teknolojik',
    ad: 'Şişen Telefon Pili',
    ikon: 'battery-alert',
    durumAni: {
      baslik: 'Telefonun Pili Şişti',
      ozet: 'Şişme, pilin hasarlandığını ve yangın riski taşıdığını gösterebilir. Telefonu kullanmayı bırak; tehlike belirtilerinde cihazı kurtarmaya çalışma.',
      yapilacaklar: [
        { ikon: 'cellphone-off', baslik: 'Kullanımı ve şarjı durdur.', aciklama: 'Cihaz normal sıcaklıktaysa ve güvenle yaklaşabiliyorsan şarj bağlantısını kesip telefonu kapat. Duman, hışırtı veya aşırı ısı varsa dokunma.' },
        { ikon: 'battery-alert-variant-outline', baslik: 'Pili sıkıştırma ve sökme.', aciklama: 'Şişen kapağı yerine bastırma; kasayı açma, pili delme veya bükme. Hasar, kısa devreye ve hızla gelişen yangına yol açabilir.' },
        { ikon: 'exit-run', baslik: 'Tehlike belirtisinde uzaklaş.', aciklama: 'Duman, hışırtı, aşırı ısı veya alev görürsen cihazı bırak, çevrendekileri uyar ve dışarı çık. Güvenli yerden 112’yi ara.' },
        { ikon: 'headset', baslik: 'Yetkili servisten yönlendirme al.', aciklama: 'Acil tehlike yoksa üretici veya yetkili servisle başka cihazdan iletişime geç. Pilin şiştiğini belirt; taşıma önerisini öğren.' },
        { ikon: 'recycle', baslik: 'Evsel çöpe atma.', aciklama: 'Telefonu veya pilini çöp ya da genel geri dönüşüm kutusuna bırakma. Hasarlı pil için servisin veya belediyenin yönlendirdiği teslim yöntemini kullan.' },
      ],
      guvenliIpuclari: ['Çocukları ve hayvanları uzak tut.', 'Çıkış yolunu açık bırak.', 'Şişmeyi servise bildir.'],
      kacinilmasiGerekenler: ['Şarj ederek deneme.', 'Pili delme veya ezme.', 'Dumanlı cihazı taşıma.'],
      ozelDurum: {
        ikon: 'fire-alert',
        baslik: 'Duman veya yangın varsa',
        aciklama: 'Söndürmeye çalışırken çıkışı geciktirme. İçeri yeniden girme; 112’ye lityum pilli bir cihazın duman çıkardığını söyle. Dumanı soluduysan bunu da bildir.',
      },
      kaynak: 'London Fire Brigade • EPA',
      kontrolEdilecek: false,
    },
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    sonrasi: {
      baslik: 'Şişen Pil Sonrası',
      ozet: 'Hasarlı pil, kullanılmadığında da ısınabilir veya alev alabilir. Teslim edene kadar güvenli bir yerde sakla.',
      yapilacaklar: [
        { ikon: 'package-variant', baslik: 'Yanmaz bir kapta sakla.', aciklama: 'Cihazı kum veya kedi kumu dolu metal bir kovaya ya da yanmaz bir kaba koy.' },
        { ikon: 'home-export-outline', baslik: 'Yanıcı eşyalardan uzak tut.', aciklama: 'Kabı perde, kâğıt ve kumaş gibi yanıcı eşyalardan uzakta, mümkünse serin bir yerde tut.' },
        { ikon: 'battery-off-outline', baslik: 'Başka pillerle bir araya koyma.', aciklama: 'Hasarlı pili diğer pillerden ve cihazlardan ayrı tut.' },
        { ikon: 'thermometer-alert', baslik: 'Isınma ve kokuya dikkat et.', aciklama: 'Kaptaki cihaz ısınır, ses çıkarır, duman veya koku yayarsa yanına yaklaşma ve 112’yi ara.' },
        { ikon: 'power-plug-off-outline', baslik: 'Diğer cihazlarını kontrol et.', aciklama: 'Aynı şarj aletiyle şarj ettiğin cihazlarda şişme, aşırı ısınma veya hasar olup olmadığına bak.' },
      ],
      guvenliIpuclari: ['Cihazı teslim edene kadar kullanma.', 'Kabın yerini ev halkına söyle.', 'Teslim yerini önceden sor.'],
      kacinilmasiGerekenler: ['Cihazı yatak veya koltuk üstünde bırakma.', 'Kabı güneş altında bırakma.', 'Pili bantlayıp kullanmaya devam etme.'],
      ozelDurum: {
        ikon: 'alert',
        baslik: 'Taşıman Gerekirse',
        aciklama: 'Servisin önerdiği şekilde, yanmaz bir kapta ve yanında yanıcı eşya olmadan taşı. Cihazı cebinde veya çantanın içinde taşıma.',
      },
      kaynak: 'EPA • NFPA',
      kontrolEdilecek: true,
    },
  },

  // ===== referans/33 =====
  {
    id: 'karbonmonoksit-suphesi',
    kategori: 'teknolojik',
    ad: 'Karbonmonoksit Şüphesi',
    ikon: 'molecule-co',
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    durumAni: {
      baslik: 'Karbonmonoksit Şüphesi Anında',
      ozet: 'Karbonmonoksit kokusuz ve renksizdir; baş ağrısı, bulantı ve baş dönmesi ilk belirtiler olabilir. Hemen temiz havaya çık ve 112’yi ara.',
      yapilacaklar: [
        { ikon: 'exit-run', baslik: 'Herkesi hemen dışarı çıkar.', aciklama: 'Yanındakileri ve evcil hayvanları alıp temiz havaya çık. Uyuyanları uyandır.' },
        { ikon: 'window-open-variant', baslik: 'Çıkarken pencere ve kapıları aç.', aciklama: 'Ortamı havalandır ama bunun için içeride oyalanma.' },
        { ikon: 'phone-in-talk', baslik: 'Dışarıdan 112’yi ara.', aciklama: 'Temiz havaya ulaşınca 112’yi ara ve karbonmonoksit şüphesini söyle.' },
        { ikon: 'lightbulb-off-outline', baslik: 'Elektrik düğmelerine dokunma.', aciklama: 'Ortamda gaz da olabilir; ışık açıp kapatma.' },
        { ikon: 'stove', baslik: 'Kaynağı bulmak için içeride kalma.', aciklama: 'Soba, şofben veya jeneratörü kontrol etmeyi yetkili ekiplere bırak.' },
      ],
      guvenliIpuclari: ['Yardım ederken kendi güvenliğini koru.', 'Belirtileri grip sanma.', 'Açık havada bekle.'],
      kacinilmasiGerekenler: ['İçeride uyumaya devam etme.', 'Kapalı odada yardım beklemeye kalma.', 'Kapalı alanda mangal veya jeneratör çalıştırma.'],
      ozelDurum: {
        ikon: 'heart-pulse',
        baslik: 'Kişi Bilinçsizse',
        aciklama: 'Kendini tehlikeye atmadan kişiyi temiz havaya çıkar. Nefes almıyorsa 112’nin yönlendirmesiyle temel yaşam desteğine başla.',
      },
      kaynak: 'Hacettepe Ü. Halk Sağlığı • CDC • Red Cross',
      kontrolEdilecek: true,
    },
    sonrasi: {
      baslik: 'Karbonmonoksit Şüphesi Sonrası',
      ozet: 'Dışarı çıkınca rahatlaman, tehlikenin geçtiğini göstermez. Açık havada kal ve karbonmonoksit şüphesini acil yardım ekibine bildir.',
      yapilacaklar: [
        { ikon: 'account-group-outline', baslik: 'Açık havada bekle.', aciklama: 'Herkesin dışarı çıktığını kontrol et. İçeride kalan varsa yerini 112’ye söyle; kurtarmak için tehlikeli ortama geri girme.' },
        { ikon: 'ambulance', baslik: 'Tıbbi değerlendirmeyi geciktirme.', aciklama: '112’ye maruz kalma şüphesini, belirtilerini ve adresini bildir. Baş ağrısı, bulantı veya baş dönmesi azalsa bile ekibin önerdiği değerlendirmeyi tamamla.' },
        { ikon: 'clipboard-check-outline', baslik: 'Maruz kalmayı ayrıntılı anlat.', aciklama: 'Ne zaman dışarı çıktığını, olası kaynağı ve başka kimlerin etkilendiğini sağlık ekibine söyle. Gebelik veya önemli hastalık varsa bildir.' },
        { ikon: 'home-alert-outline', baslik: 'İzin verilmeden eve dönme.', aciklama: 'Alarmın susması veya kokusuz bir ortam güvenli olduğunu kanıtlamaz. Yetkili ekip güvenli olduğunu bildirmeden binaya girme.' },
        { ikon: 'tools', baslik: 'Cihazları kontrol ettir.', aciklama: 'Yakıtla çalışan cihazı yeniden kullanmadan önce yetkili servise kontrol ettir. Arıza giderilmeden çalıştırma; taburculuk sonrası kontrol randevularını aksatma.' },
      ],
      guvenliIpuclari: ['Başlangıç saatini not et.', 'Taburculuk talimatlarını sakla.', 'Etkilenen diğer kişileri bildir.'],
      kacinilmasiGerekenler: ['İçeriye eşya almaya dönme.', 'Alarmı susturup kalma.', 'Cihazı denemek için çalıştırma.'],
      ozelDurum: {
        ikon: 'molecule-co',
        baslik: 'Sonradan yeni belirti çıkarsa',
        aciklama: 'Taburculuktan sonra unutkanlık, denge bozukluğu veya davranış değişikliği gelişirse gecikmeden tıbbi yardım al. Bilinç kaybı, göğüs ağrısı ya da solunum güçlüğünde 112’yi ara.',
      },
      kaynak: 'CDC • CPSC • UKHSA',
      kontrolEdilecek: false,
    },
  },
];

export default teknolojikSenaryolar;
