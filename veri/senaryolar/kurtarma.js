// Bu dosya "Acil Kurtarma ve Mahsur Kalma" kategorisinin senaryolarını tutar.
// Metinler referans/ fotoğraflarından HARFİ HARFİNE aktarıldı; değiştirmeyin.
// Alanların ne anlama geldiği veri/senaryolar/index.js dosyasının başında yazıyor.

const kurtarmaSenaryolari = [
  // ===== referans/08 =====
  {
    id: 'tipide-mahsur-kalma',
    kategori: 'kurtarma',
    ad: 'Tipide Mahsur Kalma',
    ikon: 'snowflake-alert',
    durumAni: null, // Fotoğrafı yok
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
    durumAni: null, // Fotoğrafı yok
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
    durumAni: null, // Fotoğrafı yok
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
    sonrasi: null, // Fotoğrafı yok
  },
];

export default kurtarmaSenaryolari;
