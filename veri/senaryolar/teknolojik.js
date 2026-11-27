// Bu dosya "Teknolojik ve Sistemsel Krizler" kategorisinin senaryolarını tutar.
// Metinler referans/ fotoğraflarından HARFİ HARFİNE aktarıldı; değiştirmeyin.
// Alanların ne anlama geldiği veri/senaryolar/index.js dosyasının başında yazıyor.

const teknolojikSenaryolar = [
  // ===== referans/02 =====
  {
    id: 'kopmus-elektrik-hatti',
    kategori: 'teknolojik',
    ad: 'Kopmuş Elektrik Hattı',
    ikon: 'transmission-tower',
    durumAni: null, // Fotoğrafı yok
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
    durumAni: null, // Fotoğrafı yok
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
    durumAni: null, // Fotoğrafı yok
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
    sonrasi: null, // Fotoğrafı yok
  },
];

export default teknolojikSenaryolar;
