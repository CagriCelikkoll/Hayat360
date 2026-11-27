// Bu dosya "Acil Kurtarma ve Mahsur Kalma" kategorisinin senaryolarını tutar.
// Fotoğraftan gelen metinler HARFİ HARFİNE aktarıldı; değiştirmeyin.
// "TASLAK" yorumlu sekmeleri fotoğraf olmadığı için biz yazdık (kontrolEdilecek: true);
// bunlar uzman kontrolünden geçene kadar ekranda sarı "Taslak" etiketiyle görünür.
// Alanların ne anlama geldiği veri/senaryolar/index.js dosyasının başında yazıyor.

const kurtarmaSenaryolari = [
  // ===== referans/08 =====
  {
    id: 'tipide-mahsur-kalma',
    kategori: 'kurtarma',
    ad: 'Tipide Mahsur Kalma',
    ikon: 'snowflake-alert',
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    durumAni: {
      baslik: 'Tipide Mahsur Kaldım',
      ozet: 'Tipide görüş hızla kaybolabilir ve yönünü şaşırabilirsin. Aracındaysan araçta kal; ısını ve yakıtını dikkatli kullan.',
      yapilacaklar: [
        { ikon: 'car', baslik: 'Araçtan ayrılma.', aciklama: 'Yakında sığınabileceğin bir bina görmüyorsan araçta kal. Kar ve rüzgârda yürümek yönünü kaybettirebilir.' },
        { ikon: 'phone-in-talk', baslik: '112’yi ara ve konumunu bildir.', aciklama: 'Yol adını, gidiş yönünü ve yakındaki işaretleri söyle. Pilini korumak için telefonu gereksiz kullanma.' },
        { ikon: 'car-cog', baslik: 'Motoru kısa aralıklarla çalıştır.', aciklama: 'Isınmak için motoru belirli aralıklarla kısa süre çalıştır. Bu sırada camı biraz aralık tut.' },
        { ikon: 'flag-outline', baslik: 'Görünür ol.', aciklama: 'Antene veya kapıya parlak renkli bir kumaş bağla. Gece motor çalışırken iç lambayı yak.' },
        { ikon: 'tshirt-crew-outline', baslik: 'Sıcak kalmaya çalış.', aciklama: 'Kat kat giyin; battaniye veya giysiyle örtün. Yanında biri varsa birbirinize yakın durun.' },
      ],
      guvenliIpuclari: ['Biriniz hep uyanık kalsın.', 'Kollarını ve bacaklarını hareket ettir.', 'Ellerini ve başını örtülü tut.'],
      kacinilmasiGerekenler: ['Egzozu karla kapalı bırakma.', 'Motor kapalıyken ışıkları uzun süre açık bırakma.', 'Yakıtı bitirecek kadar motoru çalıştırma.'],
      ozelDurum: {
        ikon: 'walk',
        baslik: 'Araçta Değil, Yaya İsen',
        aciklama: 'Rüzgâr ve kardan korunacak bir yer bul; ıslanmamaya çalış. Açıkta kalan vücut bölgelerini ört ve 112’den yardım iste.',
      },
      kaynak: 'NOAA / NWS • Red Cross • FEMA',
      kontrolEdilecek: true,
    },
    sonrasi: {
      baslik: 'Tipiden Kurtulduktan Sonra',
      ozet: 'Güvenli yere ulaşınca soğuğa maruz kalmayı bitir. Üşüme, bilinç değişikliği ve donma belirtilerini ciddiye al; yalnız kalma.',
      yapilacaklar: [
        { ikon: 'home-outline', baslik: 'Ilık ve korunaklı yere geç.', aciklama: 'Kurtarma ekibinin gösterdiği barınma alanında kal. Isınmadan veya güvenli ulaşım sağlanmadan yeniden dışarı çıkma.' },
        { ikon: 'tshirt-crew-outline', baslik: 'Islak giysileri değiştir.', aciklama: 'Islak katmanları çıkarıp kuru giysiler giy. Başını ve boynunu da örten kuru battaniyeyle sarın.' },
        { ikon: 'thermometer', baslik: 'Gövdeni nazikçe ısıt.', aciklama: 'Öncelikle göğüs ve gövdeni kuru katmanlarla sıcak tut. Uyuşmuş cildi sobaya, radyatöre veya sıcak su torbasına dayama.' },
        { ikon: 'phone-in-talk-outline', baslik: 'Hipotermi belirtilerinde yardım iste.', aciklama: 'Konuşman bozuluyor, kafan karışıyor veya aşırı uykulu hissediyorsan 112’yi ara. Kendin araç kullanma; yanında biri kalsın.' },
        { ikon: 'medical-bag', baslik: 'Donma şüphesini bildir.', aciklama: 'Beyazlaşan, sertleşen veya uyuşan cilt için sağlık değerlendirmesi iste. Zorunlu olmadıkça donmuş ayaklarının üzerinde yürüme.' },
      ],
      guvenliIpuclari: ['Tam uyanıksan ılık alkolsüz içecek iç.', 'Kuru kal.', 'Ekiplerin yönlendirmesini izle.'],
      kacinilmasiGerekenler: ['Alkol alma.', 'Sıcak banyo yapma.', 'Uyuşmuş yerleri ovuşturma.'],
      ozelDurum: {
        ikon: 'car-outline',
        baslik: 'Egzoz Gazından Şüpheleniyorsan',
        aciklama: 'Araçta bekledikten sonra baş ağrısı, bulantı, sersemlik veya bayılma varsa temiz havaya çık ve 112’yi ara. Egzoza maruz kalmış olabileceğini söyle; değerlendirilmeden yola devam etme.',
      },
      kaynak: 'CDC/NIOSH · NHS',
      kontrolEdilecek: false,
    },
  },

  // ===== referans/09 =====
  {
    id: 'asansorde-mahsur-kalma',
    kategori: 'kurtarma',
    ad: 'Asansörde Mahsur Kalma',
    ikon: 'elevator-passenger-outline',
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    durumAni: {
      baslik: 'Asansörde Mahsur Kaldım',
      ozet: 'Asansör durduysa sakin kal. Yardım çağır ve eğitimli ekip gelene kadar kabinin içinde bekle.',
      yapilacaklar: [
        { ikon: 'bell-ring-outline', baslik: 'Alarm veya acil çağrı düğmesine bas.', aciklama: 'Kabindeki telefonu ya da alarm düğmesini kullan. Yanıt gelmezse cep telefonunla yardım iste.' },
        { ikon: 'map-marker-outline', baslik: 'Yerini açıkça bildir.', aciklama: 'Binanın adresini, hangi asansörde ve yaklaşık hangi katta olduğunu söyle. Kabinde kaç kişi olduğunu da belirt.' },
        { ikon: 'hand-back-left-off-outline', baslik: 'Kabinden kendin çıkmaya çalışma.', aciklama: 'Asansör her an yeniden hareket edebilir. Tavandaki kapaktan veya kapı aralığından çıkmaya çalışma.' },
        { ikon: 'meditation', baslik: 'Sakin kal ve nefesini düzenle.', aciklama: 'Yavaş ve derin nefes al. Yanındakileri de sakinleştir; kabinde gereksiz hareket etme.' },
        { ikon: 'door-closed', baslik: 'Yanıt yoksa kapıya vurarak dikkat çek.', aciklama: 'Çağrına cevap gelmezse kapıya vurarak dışarıdakilere seslen. Ekip gelene kadar kabinde bekle.' },
      ],
      guvenliIpuclari: ['Telefon pilini koru.', 'Yanındakilerle konuş.', 'Ekibin talimatlarını bekle.'],
      kacinilmasiGerekenler: ['Düğmelere gelişigüzel basma.', 'Kapı aralığına el veya eşya sokma.', 'Kurtarmayı ekip dışından birine yaptırma.'],
      ozelDurum: {
        ikon: 'heart-pulse',
        baslik: 'Kabinde Biri Fenalaşırsa',
        aciklama: 'Hemen 112’yi ara ve asansörde mahsur kaldığınızı söyle. Görevlinin yönlendirmesine uy.',
      },
      kaynak: 'Otis',
      kontrolEdilecek: true,
    },
    sonrasi: {
      baslik: 'Asansörden Çıktıktan Sonra',
      ozet: 'Kurtarıldıktan sonra kapı ve kuyu çevresinden uzaklaş. Kendini kontrol et; arızalı asansörü yeniden kullanmadan yetkililerin onayını bekle.',
      yapilacaklar: [
        { ikon: 'account-group', baslik: 'Güvenli alana geç.', aciklama: 'Kurtarma ekibinin gösterdiği yerde bekle. Kabinin eşiğinde durma; görevlilerin ve diğer yolcuların geçişini açık bırak.' },
        { ikon: 'stethoscope', baslik: 'Sağlık durumunu kontrol et.', aciklama: 'Ciddi nefes darlığı, göğüs ağrısı, bayılma veya yaralanma varsa 112’den yardım iste. Şikâyetlerini yalnızca korkuya bağlama.' },
        { ikon: 'clipboard-list-outline', baslik: 'Arızayı yönetime bildir.', aciklama: 'Hangi asansörde, hangi katta ve ne yaşandığını bina görevlisine anlat. Gördüğün hasarı bakım ekibine iletilmek üzere bildir.' },
        { ikon: 'elevator-passenger-off', baslik: 'Kontrol edilmeden tekrar binme.', aciklama: 'Yetkili bakım ekibi güvenli kullanımı doğrulayana kadar asansörü kullanma. Elektriğin gelmesi tek başına arızanın düzeldiğini göstermez.' },
        { ikon: 'stairs-up', baslik: 'Güvenli ulaşım için yardım iste.', aciklama: 'Başka kata gitmen gerekiyorsa bina görevlisinin yönlendirmesini al. Merdiven kullanamıyorsan hareket kısıtlılığını söyle; arızalı kabine dönme.' },
      ],
      guvenliIpuclari: ['Kurtarma ekibini dinle.', 'Çocukları kapıdan uzak tut.', 'Yakınlarına güvende olduğunu bildir.'],
      kacinilmasiGerekenler: ['Kapıları zorlamaya çalışma.', 'Elektrik panosunu kurcalama.', 'Asansörü denemek için çağırma.'],
      ozelDurum: {
        ikon: 'bag-suitcase',
        baslik: 'İçeride Eşyan Kaldıysa',
        aciklama: 'Telefon veya çantan kabinde kaldıysa görevliye bildir. Kapıyı zorlayarak ya da açıklıktan uzanarak almaya çalışma. Eşyanın alınmasını yetkili ekibe bırak; kurtarma alanının dışında güvenle bekle.',
      },
      kaynak: 'Otis · Schindler · NHS',
      kontrolEdilecek: false,
    },
  },

  // ===== referans/10 =====
  {
    id: 'enkaz-altinda-kalma',
    kategori: 'kurtarma',
    ad: 'Enkaz Altında Kalma',
    ikon: 'hard-hat',
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    durumAni: {
      baslik: 'Enkaz Altında Kaldım',
      ozet: 'Kurtarma uzun sürebilir; enerjini koru ve paniğe kapılma. Toz kaldırmadan bekle, ağzını ve burnunu kapat, yerini vurarak bildir.',
      yapilacaklar: [
        { ikon: 'face-mask-outline', baslik: 'Ağzını ve burnunu koru.', aciklama: 'Toz solumamak için ağzını ve burnunu mendil veya kıyafetinle kapat.' },
        { ikon: 'hammer', baslik: 'Boruya veya duvara vurarak ses çıkar.', aciklama: 'Su, kalorifer veya gaz borularına, duvara ya da zemine vurarak yerini bildir. Islık çalabiliyorsan çal.' },
        { ikon: 'ear-hearing', baslik: 'Kurtarıcılar seslenirse cevap ver.', aciklama: 'Ekipler çağrı yaptığında vurarak veya seslenerek yanıt ver. Bağırmayı son çare olarak kullan; toz yutmana yol açabilir.' },
        { ikon: 'human-handsdown', baslik: 'Vücudunu kontrol et.', aciklama: 'Kollarını ve bacaklarını küçük hareketlerle oynatarak yaralanıp yaralanmadığını anla. Kırık şüphesi varsa kıpırdamadan bekle.' },
        { ikon: 'fire-off', baslik: 'Çakmak veya kibrit yakma.', aciklama: 'Ortamda gaz kaçağı olabilir. Işık gerekiyorsa varsa fener veya telefon ışığı kullan.' },
      ],
      guvenliIpuclari: ['Paniğe kapılma; enerjini koru.', 'Telefonun varsa 112’ye konumunu bildir.', 'Yanında biri varsa onunla konuş.'],
      kacinilmasiGerekenler: ['Toz kaldıracak şekilde hareket etme.', 'Kesin çıkış yolu yoksa riskli hareket yapma.', 'Üstündeki enkazı zorla itmeye çalışma.'],
      ozelDurum: {
        ikon: 'medical-bag',
        baslik: 'Yaralıysan',
        aciklama: 'Kanayan bir yer varsa kumaşla doğrudan bastır. Kırık şüphesi olan bölgeyi oynatma; kurtarıcılar ulaştığında yaralandığını söyle.',
      },
      kaynak: 'AFAD • Kızılay • FEMA • CDC',
      kontrolEdilecek: true,
    },
    sonrasi: {
      baslik: 'Enkazdan Kurtarıldıktan Sonra',
      ozet: 'Enkazdan çıktıktan sonra kendini iyi hissetsen bile sağlık ekibinden değerlendirme iste. Ezilme yaralanmaları dışarıdan fark edilmeyebilir.',
      yapilacaklar: [
        { ikon: 'medical-bag', baslik: 'Acil sağlık değerlendirmesi al.', aciklama: 'Sağlık ekibi yanındaysa değerlendirmeden ayrılma. Kendi imkânınla çıktıysan 112’yi ara; konumunu ve enkaz altında kaldığını bildir.' },
        { ikon: 'bone', baslik: 'Yaralı uzuvlarını zorlama.', aciklama: 'Ezilen kolunu veya bacağını yürüyerek ya da hareket ettirerek deneme. Ekiplerin taşıma ve hareket talimatlarına uy.' },
        { ikon: 'blood-bag', baslik: 'Dış kanamayı bildir.', aciklama: 'Kanayan yere temiz bir bezle doğrudan bası uygula. Saplanmış bir cisim varsa çıkarma; cismin üzerine bastırma.' },
        { ikon: 'thermometer-low', baslik: 'Isı kaybını azalt.', aciklama: 'Güvenli yerde kuru bir örtü veya battaniyeyle korun. Soğuk zemine doğrudan temas etme; sağlık ekibinin yanında kal.' },
        { ikon: 'message-alert-outline', baslik: 'Belirtilerini hemen söyle.', aciklama: 'Nefes darlığı, göğüs ağrısı, artan şişlik, uyuşma veya sersemlik varsa sağlık görevlisine bildir. Belirtilerin geçmesini bekleme.' },
      ],
      guvenliIpuclari: ['Sıkışma süreni anlat.', 'İlaçlarını ve alerjilerini bildir.', 'Sağlık kontrollerine uy.'],
      kacinilmasiGerekenler: ['Enkaza geri dönme.', 'Yaralı uzvu zorlayarak yürüme.', 'Ezilme için rutin turnike uygulama.'],
      ozelDurum: {
        ikon: 'water-alert-outline',
        baslik: 'İdrarın Azalır veya Koyulaşırsa',
        aciklama: 'Taburcu olduktan sonra idrarının azalmasını veya koyulaşmasını bekletme; hemen sağlık kuruluşuna başvur. Enkaz altında kaldığını anlat. Görünür yara ya da ağrı olmaması ezilme riskini dışlamaz.',
      },
      kaynak: 'Türk Kızılay · ANZCOR · Sağlık Bakanlığı',
      kontrolEdilecek: false,
    },
  },

  // ===== referans/24 =====
  {
    id: 'rip-akintisi',
    kategori: 'kurtarma',
    ad: 'Rip Akıntısı',
    ikon: 'swim',
    durumAni: {
      baslik: 'Rip Akıntısına Kapıldım',
      ozet: 'Çeken akıntı seni kıyıdan açığa sürükleyebilir. Gücünü koru; doğrudan kıyıya yüzerek akıntıyla savaşma.',
      yapilacaklar: [
        { ikon: 'swim', baslik: 'Akıntıya karşı yüzmeyi bırak.', aciklama: 'Aynı yerde kalıyor veya açığa sürükleniyorsan kıyıya doğru zorlanma. Güçlü akıntıya karşı yüzmek seni hızla yorabilir.' },
        { ikon: 'waves', baslik: 'Yüzeyde kal ve nefesini düzenle.', aciklama: 'Varsa tahta veya can simidine tutun. Sırtüstü yüzebiliyorsan başını geriye bırak, kollarını aç ve nefesine odaklan.' },
        { ikon: 'bullhorn-outline', baslik: 'Yardım için seslen.', aciklama: 'Cankurtarana veya kıyıdakilere seslen. Yüzeyde kalabiliyorsan bir elini kaldırarak yerini göster; yardım çağırırken gücünü tüketme.' },
        { ikon: 'arrow-right-bold-outline', baslik: 'Yüzebiliyorsan akıntıdan yana çık.', aciklama: 'Gücün yeterliyse akıntının yönüne dik, kıyı çizgisine paralel yüzerek çekişten çıkmayı dene. Başaramıyorsan zorlamayı bırak.' },
        { ikon: 'flag-outline', baslik: 'Çekişten çıkınca kıyıya yönel.', aciklama: 'Akıntıdan uzaklaşacak şekilde kıyıya çapraz yüz. Kıyıya ulaşamıyorsan yüzeyde kalıp yardım iste; yeniden akıntıya girme.' },
      ],
      guvenliIpuclari: ['Yüzen desteğe tutun.', 'Nefesini düzenle.', 'Cankurtaranı dinle.'],
      kacinilmasiGerekenler: ['Akıntıyla yarışma.', 'Tahtanı veya simidini bırakma.', 'Gücün tükenene kadar yüzme.'],
      ozelDurum: {
        ikon: 'lifebuoy',
        baslik: 'Yüzemiyorsan veya Çok Yorulduysan',
        aciklama: 'Paralel yüzmeye kendini zorlama. Yüzeyde kalmaya odaklan; başını geriye al, kollarını aç ve küçük el hareketleriyle destek al. Yakındaki yüzdürücüye tutun; kıyıdakilerden 112’yi aramalarını iste.',
      },
      kaynak: 'RNLI • NOAA / NWS',
      kontrolEdilecek: false,
    },
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    sonrasi: {
      baslik: 'Rip Akıntısından Kurtulduktan Sonra',
      ozet: 'Kıyıya ulaşmak yorgunluğun ve yuttuğun suyun etkilerini hemen gidermez. Dinlen, kendini kontrol et ve başkalarını uyar.',
      yapilacaklar: [
        { ikon: 'lifebuoy', baslik: 'Cankurtarana haber ver.', aciklama: 'Akıntıya kapıldığın yeri cankurtarana veya görevliye bildir. Böylece başkaları da korunabilir.' },
        { ikon: 'stethoscope', baslik: 'Nefes darlığını ciddiye al.', aciklama: 'Su yuttuysan ve öksürük, nefes darlığı veya göğüs ağrısı sürüyorsa 112’yi ara. İyi görünse bile sağlık değerlendirmesi iste.' },
        { ikon: 'bed-outline', baslik: 'Dinlen ve ısın.', aciklama: 'Kuru giysiler giy ve rüzgârdan korunaklı bir yerde dinlen. Hemen suya geri girme.' },
        { ikon: 'account-group-outline', baslik: 'Çevredekileri uyar.', aciklama: 'Akıntının yerini yanındakilere göster. Uyarı bayrağı veya tabelası varsa herkesin görmesini sağla.' },
        { ikon: 'flag-outline', baslik: 'Yeniden girmeden önce koşulları öğren.', aciklama: 'Cankurtarana su durumunu sor ve uyarı bayraklarına bak. Cankurtaran olmayan yerde yüzme.' },
      ],
      guvenliIpuclari: ['Cankurtarana yakın yüz.', 'Yanında biri olsun.', 'Yorgunsan suya girme.'],
      kacinilmasiGerekenler: ['Akıntı olan yerde yeniden yüzme.', 'Belirtileri önemsiz sayma.', 'Başkasını kurtarmak için suya atlama.'],
      ozelDurum: {
        ikon: 'lifebuoy',
        baslik: 'Başka Biri Akıntıya Kapılırsa',
        aciklama: 'Suya atlama; cankurtarana haber ver, yoksa 112’yi ara. Yüzen bir cisim at ve kişiye kıyıya paralel yüzmesini seslen.',
      },
      kaynak: 'NOAA / NWS • Red Cross',
      kontrolEdilecek: true,
    },
  },

  // ===== referans/31 =====
  {
    id: 'suda-bogulma',
    kategori: 'kurtarma',
    ad: 'Suda Boğulma',
    ikon: 'lifebuoy',
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    durumAni: {
      baslik: 'Biri Suda Boğuluyor',
      ozet: 'Boğulmakta olan kişi çoğu zaman bağıramaz ve el sallayamaz. Hemen yardım çağır; suya atlamadan uzan veya yüzen bir şey at.',
      yapilacaklar: [
        { ikon: 'bullhorn-outline', baslik: 'Hemen yardım çağır.', aciklama: 'Cankurtarana veya yakındakilere seslen. Kimse yoksa hemen 112’yi ara.' },
        { ikon: 'hand-extended-outline', baslik: 'Kıyıdan uzanarak ulaş.', aciklama: 'Yere çömel veya yat; sopa, kürek ya da havluyu uzatıp kişiyi yavaşça kendine çek.' },
        { ikon: 'lifebuoy', baslik: 'Yüzen bir şey at.', aciklama: 'Can simidi, boş bidon veya yüzen başka bir cismi kişiye çarpmadan yakınına at. Varsa ipe bağla.' },
        { ikon: 'swim', baslik: 'Eğitimin yoksa suya atlama.', aciklama: 'Panik içindeki kişi sana tutunarak seni de batırabilir. Kurtarmayı eğitimli kişilere bırak.' },
        { ikon: 'eye-outline', baslik: 'Kişiyi gözden kaybetme.', aciklama: 'Yardım gelene kadar kişinin yerini izle ve kurtarıcılara göster.' },
      ],
      guvenliIpuclari: ['Sakin ve hızlı hareket et.', 'Kıyıda güvenli bir yerde dur.', 'Çocukları sudan uzak tut.'],
      kacinilmasiGerekenler: ['Akıntılı veya derin suya girme.', 'Kaygan kenarda ayakta uzanma.', 'Yardım çağırmayı geciktirme.'],
      ozelDurum: {
        ikon: 'alert',
        baslik: 'Kişi Suyun Altına Battıysa',
        aciklama: 'Beklemeden 112’yi ara ve kişiyi son gördüğün yeri kurtarıcılara göster. Eğitimin yoksa dalmaya çalışma.',
      },
      kaynak: 'Red Cross',
      kontrolEdilecek: true,
    },
    sonrasi: {
      baslik: 'Sudan Kurtarıldıktan Sonra',
      ozet: 'Sudan çıkarılan kişinin solunumu ve bilinci değişebilir. Yanında kal; nefes almasını düzenli kontrol et.',
      yapilacaklar: [
        { ikon: 'heart-pulse', baslik: 'Normal solumuyorsa hemen müdahale et.', aciklama: 'Tepkisizse ve normal solumuyorsa 112’yi hoparlöre al. Kalp masajına başla; eğitimliysen kurtarıcı soluk ekle.' },
        { ikon: 'clipboard-plus-outline', baslik: 'Tıbbi değerlendirme iste.', aciklama: 'Suda solunum güçlüğü yaşadıysa iyi görünse bile sağlık desteği al. Canlandırma uygulandıysa mutlaka acil değerlendirme gerekir.' },
        { ikon: 'stethoscope', baslik: 'Belirtileri izle.', aciklama: 'Süren öksürük, zor veya hızlı solunum, dalgınlık ya da bilinç değişikliğinde 112’yi ara; yalnız bırakma.' },
        { ikon: 'bed-outline', baslik: 'Üşümesini önle.', aciklama: 'Güvenli yerde ıslak giysilerini çıkarabiliyorsan kuru giysiyle değiştir. Battaniyeyle ört; solunumunu görmeni engelleme.' },
        { ikon: 'account-injury-outline', baslik: 'Yan pozisyonu koşuluna göre uygula.', aciklama: 'Tepkisiz ama normal soluyorsa ve yaralanma şüphesi yoksa yan yatır. Solunumu sürekli kontrol et.' },
      ],
      guvenliIpuclari: ['Yanında kal.', 'Ekipleri yönlendir.', 'Durum değişikliğini bildir.'],
      kacinilmasiGerekenler: ['Yeniden suya sokma.', 'Su çıkarmak için karnına basma.', 'Bilinci kapalıysa içecek verme.'],
      ozelDurum: {
        ikon: 'lifebuoy',
        baslik: 'Kusma veya Boyun Yaralanması Varsa',
        aciklama: 'Kusmuk hava yolunu kapatıyorsa kişiyi yan çevir. Boyun yaralanmasından şüpheleniyorsan baş ve boynu mümkün olduğunca aynı hizada tut; 112’nin yönlendirmesini izle. Hava yolunun açık kalması önceliklidir.',
      },
      kaynak: 'St John Ambulance • Red Cross • AHA',
      kontrolEdilecek: false,
    },
  },
];

export default kurtarmaSenaryolari;
