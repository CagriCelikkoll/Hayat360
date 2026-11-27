// Bu dosya "İnsan Kaynaklı Felaketler" kategorisinin senaryolarını tutar.
// Metinler referans/ fotoğraflarından HARFİ HARFİNE aktarıldı; değiştirmeyin.
// Alanların ne anlama geldiği veri/senaryolar/index.js dosyasının başında yazıyor.

const insanKaynakliSenaryolar = [
  // ===== referans/12 =====
  {
    id: 'dogal-gaz-kacagi',
    kategori: 'insan-kaynakli',
    ad: 'Doğal Gaz Kaçağı',
    ikon: 'fire',
    durumAni: null, // Fotoğrafı yok
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
    durumAni: null, // Fotoğrafı yok
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
    durumAni: null, // Fotoğrafı yok
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
];

export default insanKaynakliSenaryolar;
