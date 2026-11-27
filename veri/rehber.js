// Bu dosya "Rehber" sekmesinin içeriğidir: afetlerden ÖNCE yapılacak hazırlıklar.
// Her konu bir karttır; kategori alanı kartın rengini veri/kategoriler.js'den almak için kullanılır.
// Metinler AFAD, MGM ve Kandilli sayfalarından özetlendi; fotoğraftan gelmediği için hepsi
// kontrolEdilecek: true (uygulamada "Taslak" etiketiyle görünür, KONTROL_LISTESI.md'de listelenir).

const rehberKonulari = [
  {
    id: 'deprem',
    baslik: 'Deprem',
    kategori: 'dogal-afetler',
    ikon: 'pulse',
    ozet: 'Evi sabitle, toplanma alanını öğren, ailece plan yap.',
    kontrolEdilecek: true,
    maddeler: [
      {
        baslik: 'Binanın deprem tehlikesini öğren.',
        aciklama: 'Binanın bulunduğu noktanın deprem tehlikesini AFAD’ın tdth.afad.gov.tr adresinden öğren.',
      },
      {
        baslik: 'Dolapları ve devrilebilecek eşyaları sabitle.',
        aciklama: 'Dolapları birbirine ve duvara sabitle. Eşya ile duvar arasında boşluk kalıyorsa araya dolgu malzemesi koy.',
      },
      {
        baslik: 'Kombi, termosifon, buzdolabı ve fırını sabitle.',
        aciklama: 'Su ısıtıcısını, buzdolabını, fırın ve gaz tertibatını uygun malzemelerle duvara ve/veya yere sabitle.',
      },
      {
        baslik: 'Yatağının yerini kontrol et.',
        aciklama: 'Yatağı pencerenin ve devrilebilecek ağır dolapların yanına koyma; üstünde ağır eşyalı raf bulundurma.',
      },
      {
        baslik: 'Raflardaki küçük eşyaları güvene al.',
        aciklama: 'Şişe ve küçük eşyaları devrilmeyecek şekilde kutulara yerleştir; ağır eşyalı dolap kapaklarına kilit tak.',
      },
      {
        baslik: 'Çıkış yolunu açık tut.',
        aciklama: 'Binadan çıkarken kullanacağın yoldaki tehlikeleri ve çıkışı engelleyen eşyaları kaldır.',
      },
      {
        baslik: 'Taşıyıcı kolon ve duvarlara dokundurma.',
        aciklama: 'Binanın yük taşıyan kolon ve duvarlarına müdahale edilmesine izin verme.',
      },
      {
        baslik: 'Toplanma alanını ve buluşma yerini belirle.',
        aciklama: 'En yakın acil toplanma alanını e-Devlet’ten öğren. Deprem sonrası ailece buluşacağınız yeri belirleyin.',
      },
      {
        baslik: 'Çök-Kapan-Tutun’u ailece öğrenin.',
        aciklama: 'Tüm aile Çök-Kapan-Tutun hareketini öğrensin ve uygulasın.',
      },
      {
        baslik: 'Evrak kopyası hazırla, sigorta yaptır.',
        aciklama: 'Önemli evrakların kopyalarını su geçirmeyecek şekilde sakla. Konutunu deprem sigortasıyla (DASK) sigortalat.',
      },
    ],
    kaynak: 'AFAD – AFADEM Deprem sayfası · AFAD Muğla İl Müdürlüğü',
  },
  {
    id: 'yangin',
    baslik: 'Ev Yangını',
    kategori: 'insan-kaynakli',
    ikon: 'fire',
    ozet: 'Söndürme tüpü, duman dedektörü ve kaçış planı.',
    kontrolEdilecek: true,
    maddeler: [
      {
        baslik: 'Evde yangın söndürme tüpü bulundur.',
        aciklama: 'Kolay ulaşılan bir yerde dursun, yerini herkes bilsin, düzenli bakımı yapılsın. Kullanımı: pimi çek, ateşin kaynağına yönelt, sık, süpür.',
      },
      {
        baslik: 'Duman dedektörü tak.',
        aciklama: 'Yangında erken uyarı çok önemlidir. Mümkünse evde duman dedektörü bulundur ve düzenli kontrol et.',
      },
      {
        baslik: 'Kaçış (tahliye) planı yap.',
        aciklama: 'Ev yangınlarında kaçmak için zaman çok azdır. Evden nasıl çıkacağınızı ailece önceden planlayın.',
      },
      {
        baslik: 'Elektrik tesisatına bakım yaptır.',
        aciklama: 'Elektrik tesisatından çıkabilecek yangınlara karşı tesisatın düzenli bakımını yaptır.',
      },
      {
        baslik: 'Soba ve bacalara dikkat et.',
        aciklama: 'Soba, kalorifer ve ocakları dikkatli kullan. Sıvasız, çatlak veya dolmuş bacaları kullanma.',
      },
      {
        baslik: 'Yanıcı maddeleri doğru sakla.',
        aciklama: 'Yanıcı maddeleri evin uygun bir yerinde sakla; tavan arası ve bodrumu temiz tut.',
      },
      {
        baslik: 'Çocukları ateşten uzak tut.',
        aciklama: 'Çocukların ateşle oynamasına izin verme.',
      },
    ],
    kaynak: 'AFAD – AFADEM Yangın sayfası',
  },
  {
    id: 'sel',
    baslik: 'Sel',
    kategori: 'dogal-afetler',
    ikon: 'home-flood',
    ozet: 'Riskini öğren, uyarıları takip et, malzemeni hazır tut.',
    kontrolEdilecek: true,
    maddeler: [
      {
        baslik: 'Bulunduğun yerin sel riskini öğren.',
        aciklama: 'Sel yataklarına yerleşmemeye özen göster. Yaşadığın yerdeki sel uyarı işaretlerini ve uyarı sistemlerini öğren.',
      },
      {
        baslik: 'Uyarıları takip et.',
        aciklama: 'Sel uyarılarını radyo ve televizyondan takip et.',
      },
      {
        baslik: 'Yağışın türünü bil.',
        aciklama: 'Kısa süreli yoğun yağışlar ani sele, uzun süreli yağışlar nehirlerin taşmasına neden olabilir.',
      },
      {
        baslik: 'Aile planında sel riskini düşün.',
        aciklama: 'Aile afet planını hazırlarken sel riskini göz önünde bulundur.',
      },
      {
        baslik: 'Malzemeleri hazır tut.',
        aciklama: 'Kum torbası, naylon, çivi, kontrplak, tahta gibi malzemeleri ve bir alet sandığını hazır bulundur.',
      },
      {
        baslik: 'Sigorta yaptır.',
        aciklama: 'Konutunu sele karşı da sigortalat.',
      },
    ],
    kaynak: 'AFAD – Sel Öncesi, Anı ve Sonrası Tedbirli Olun · AFADEM Sel sayfası',
  },
  {
    id: 'firtina',
    baslik: 'Fırtına',
    kategori: 'dogal-afetler',
    ikon: 'weather-windy',
    ozet: 'Uçabilecek eşyaları topla, kapı ve pencereleri bağla.',
    kontrolEdilecek: true,
    maddeler: [
      {
        baslik: 'Fırtına uyarılarını takip et.',
        aciklama: 'Fırtına uyarılarını radyo ve televizyondan takip et.',
      },
      {
        baslik: 'Uçabilecek eşyaları topla.',
        aciklama: 'Balkon ve bahçedeki hafif eşyaları, çöp bidonlarını ve saksıları güvenli alana al veya sabitle.',
      },
      {
        baslik: 'Kapı ve pencereleri bağla.',
        aciklama: 'Özellikle rüzgâr alan taraftaki kapı ve pencereleri kapatıp emniyetli şekilde bağla. Panjur veya kepenk varsa kapatıp bağla.',
      },
      {
        baslik: 'Çatı ve bacayı kontrol et.',
        aciklama: 'Çatı ve baca bağlantılarını kontrol et; gevşek kiremit ve sacları onar.',
      },
      {
        baslik: 'Aracını güvenli yere park et.',
        aciklama: 'Aracını bina, ağaç, duvar ve aydınlatma direklerinden uzakta park et.',
      },
    ],
    kaynak: 'MGM – Rüzgar Fırtınasından Korunma · AFAD Antalya İl Müdürlüğü',
  },
  {
    id: 'heyelan',
    baslik: 'Heyelan',
    kategori: 'dogal-afetler',
    ikon: 'landslide',
    ozet: 'Riskli yamaçları tanı, kuşkulanınca haber ver.',
    kontrolEdilecek: true,
    maddeler: [
      {
        baslik: 'Bölgenin tehlikelerini öğren.',
        aciklama: 'Yaşadığın bölgedeki heyelan gibi jeolojik tehlikeler hakkında bilgi edin.',
      },
      {
        baslik: 'Riskli alanları tanı.',
        aciklama: 'Eski heyelan bölgeleri, dik yamaçların üst ve etek kısımları ve eski dolgular heyelana karşı duyarlıdır.',
      },
      {
        baslik: 'Dik yamaçlara dokunma.',
        aciklama: 'Dik yamaçların eteğinde kazı yapma, kenarına veya eteğine yapı yapma, eğimli yamaçlara dolgu dökme.',
      },
      {
        baslik: 'Arsa ve inşaattan önce danış.',
        aciklama: 'Arazi almadan ve inşaata başlamadan önce ilgili kurumlardan bilgi al.',
      },
      {
        baslik: 'Kuşkulanırsan haber ver.',
        aciklama: 'Heyelan tehlikesinden kuşkulanırsan hemen yerel yönetime haber ver, çevreni bilgilendir ve binaları boşaltın.',
      },
    ],
    kaynak: 'AFAD – AFADEM Heyelan sayfası',
  },
  {
    id: 'tsunami',
    baslik: 'Tsunami',
    kategori: 'dogal-afetler',
    ikon: 'waves',
    ozet: 'Kıyıdaysan yüksek yeri ve oraya giden yolu önceden bil.',
    kontrolEdilecek: true,
    maddeler: [
      {
        baslik: 'Kıyıda deprem = yükseğe çık.',
        aciklama: 'Deniz kenarında deprem hissedersen en kısa zamanda en yakın yüksek yere (tepe veya hasar yoksa çok katlı betonarme bina) gitmen gerektiğini önceden bil.',
      },
      {
        baslik: 'Yüksek yeri önceden belirle.',
        aciklama: 'Kıyıda yaşıyor ya da tatil yapıyorsan en yakın yüksek yeri ve oraya giden yolu önceden öğren.',
      },
      {
        baslik: 'Ailene öğret: sahile gidilmez.',
        aciklama: 'Dalgaları görmek için limana ya da sahile gidilmez; nehir ve dere kenarlarına yaklaşılmaz.',
      },
      {
        baslik: 'Yüzme bilmek yetmez.',
        aciklama: 'Yüzme biliyor olmak güvende olmak demek değildir; alçak dalgalar bile öldürücü olabilir.',
      },
      {
        baslik: 'Denizdeysen açığa git.',
        aciklama: 'Uyarı geldiğinde denizde veya teknedeysen daha derine, açık denize doğru gidilir.',
      },
    ],
    kaynak: 'Kandilli Rasathanesi – Tsunami Bilgi Notu · AFAD Muğla İl Müdürlüğü',
  },
];

export default rehberKonulari;
