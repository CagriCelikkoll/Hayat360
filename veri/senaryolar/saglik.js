// Bu dosya "Sağlık ve Yaşam Mücadelesi" kategorisinin senaryolarını tutar.
// Fotoğraftan gelen metinler HARFİ HARFİNE aktarıldı; değiştirmeyin.
// "TASLAK" yorumlu sekmeleri fotoğraf olmadığı için biz yazdık (kontrolEdilecek: true);
// bunlar uzman kontrolünden geçene kadar ekranda sarı "Taslak" etiketiyle görünür.
// Alanların ne anlama geldiği veri/senaryolar/index.js dosyasının başında yazıyor.

const saglikSenaryolari = [
  // ===== referans/14 =====
  {
    id: 'inme-suphesi',
    kategori: 'saglik',
    ad: 'İnme Şüphesi',
    ikon: 'brain',
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    durumAni: {
      baslik: 'İnme Şüphesi Anında',
      ozet: 'Yüzde kayma, kolda güçsüzlük veya konuşma bozukluğu aniden başladıysa inme olabilir. Belirtilerin geçmesini bekleme; hemen 112’yi ara.',
      yapilacaklar: [
        { ikon: 'emoticon-outline', baslik: 'Gülümsemesini iste.', aciklama: 'Yüzünün bir tarafı düşüyor veya kayıyorsa bu inme belirtisi olabilir.' },
        { ikon: 'arm-flex-outline', baslik: 'İki kolunu kaldırmasını iste.', aciklama: 'Bir kol aşağı düşüyor veya hiç kalkmıyorsa güçsüzlük vardır.' },
        { ikon: 'chat-processing-outline', baslik: 'Basit bir cümle söylet.', aciklama: 'Konuşması bozuk, anlaşılmaz veya söyleneni anlamıyorsa durum acildir.' },
        { ikon: 'phone-in-talk', baslik: 'Belirtilerden biri bile varsa 112’yi ara.', aciklama: 'Belirtilerin geçmesini bekleme. 112 ekibi gelene kadar kişinin yanında kal.' },
        { ikon: 'seat-recline-normal', baslik: 'Rahat bir pozisyonda beklet.', aciklama: 'Kişiyi güvenli bir yerde oturt veya uzandır ve sıkan giysilerini gevşet. Düşmemesi için yalnız bırakma.' },
      ],
      guvenliIpuclari: ['Sakin konuş ve kişiyi rahatlat.', 'Yanındakilerden yardım iste.', 'Kişinin söylediklerini dikkatle dinle.'],
      kacinilmasiGerekenler: ['Kişiyi uyumaya bırakma.', 'Kendi aracınla hastaneye götürmeye çalışma.', 'Kişiyi yalnız bırakma.'],
      ozelDurum: {
        ikon: 'eye-off-outline',
        baslik: 'Belirtiler Farklıysa',
        aciklama: 'Ani görme kaybı, çift görme, denge kaybı veya nedeni belli olmayan çok şiddetli baş ağrısı da inme belirtisi olabilir. Bu durumda da hemen 112’yi ara.',
      },
      kaynak: 'MEB İlk Yardım',
      kontrolEdilecek: true,
    },
    sonrasi: {
      baslik: 'İnme Şüphesi Sonrası',
      ozet: 'Yüzde kayma, kol güçsüzlüğü veya konuşma bozukluğu geçse bile acil durum sürer. 112 yardımını ve hastane değerlendirmesini iptal etme.',
      yapilacaklar: [
        { ikon: 'ambulance', baslik: 'Ambulansı beklemeyi sürdür.', aciklama: 'Belirtiler düzelse de 112’ye inme şüphesini bildir. Geçici düzelme güvenli olduğunu göstermez; kişinin kendisinin araç kullanmasına izin verme.' },
        { ikon: 'calendar-clock', baslik: 'Zaman bilgisini hazırla.', aciklama: 'Belirtilerin başladığı saati veya kişinin en son normal görüldüğü zamanı not et. Uykudan belirtilerle uyandıysa bunu özellikle söyle.' },
        { ikon: 'account-heart-outline', baslik: 'Güvenli ve rahat tut.', aciklama: 'Yanında kal, sakin ve yavaş konuş. Güçsüz kolunu destekle; kolundan çekerek ayağa kaldırma veya yürümeye zorlama.' },
        { ikon: 'cup-off-outline', baslik: 'Ağızdan bir şey verme.', aciklama: 'Yiyecek, su veya aspirin dahil ilaç verme. Yutma bozulmuş olabilir; tedaviyi ve ağızdan alımı sağlık ekibi değerlendirmeli.' },
        { ikon: 'lungs', baslik: 'Bilinç ve solunumu izle.', aciklama: 'Tepkisiz ama normal nefes alıyorsa yan çevir. Tepkisiz ve normal nefes almıyorsa 112 yönlendirmesiyle kalp masajına başla.' },
      ],
      guvenliIpuclari: ['Belirti saatlerini kaydet.', 'İlaç listesini ekibe hazırla.', 'Ambulansın girişini kolaylaştır.'],
      kacinilmasiGerekenler: ['Düzeldi diye çağrıyı iptal etme.', 'Aspirin veya yemek verme.', 'Zorla yürütme.'],
      ozelDurum: {
        ikon: 'hospital-building',
        baslik: 'Hastane değerlendirmesinden sonra',
        aciklama: 'Sağlık ekibinin verdiği ilaç ve kontrol planını uygula. Yüzde kayma, yeni kol güçsüzlüğü veya konuşma bozukluğu tekrar başlarsa randevuyu bekleme; yeniden 112’yi ara.',
      },
      kaynak: 'NHS • Stroke Foundation • Red Cross',
      kontrolEdilecek: false,
    },
  },

  // ===== referans/15 =====
  {
    id: 'siddetli-kanama',
    kategori: 'saglik',
    ad: 'Şiddetli Kanama',
    ikon: 'water-plus-outline',
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    durumAni: {
      baslik: 'Şiddetli Kanama Anında',
      ozet: 'Fışkıran veya durmadan akan kan hayatı tehdit eder. Hemen 112’yi ara ve kanayan yere güçlü, sürekli bası uygula.',
      yapilacaklar: [
        { ikon: 'shield-alert-outline', baslik: 'Önce ortam güvenliğini kontrol et.', aciklama: 'Trafik, yangın veya elektrik gibi bir tehlike varsa önce kendi güvenliğini sağla.' },
        { ikon: 'phone-in-talk', baslik: 'Hemen 112’yi ara.', aciklama: 'Kanama fışkırıyor veya durmadan akıyorsa vakit kaybetme. Yanında biri varsa aramasını iste, sen kanamaya müdahale et.' },
        { ikon: 'hand-back-right-outline', baslik: 'Yaraya doğrudan bastır.', aciklama: 'Temiz bir bez, gazlı bez veya giysiyle yaranın tam üzerine güçlü ve sürekli bası uygula.' },
        { ikon: 'medical-bag', baslik: 'Bası yetmezse turnikeyi düşün.', aciklama: 'Kol veya bacaktaki hayatı tehdit eden kanama bası ile durmuyorsa ve eğitimin varsa turnike uygula. Uygulama saatini not et.' },
        { ikon: 'bed-outline', baslik: 'Kişiyi yatır ve sakin tut.', aciklama: 'Kişiyi güvenli bir yerde yatır. Bası yaparken onunla konuşarak yanında olduğunu hissettir.' },
      ],
      guvenliIpuclari: ['Bastırmayı ekip gelene kadar sürdür.', 'Yardımcı varsa görev paylaş.', 'Temiz bez yoksa giysi kullan.'],
      kacinilmasiGerekenler: ['Kontrol etmek için bastırmaya ara verme.', 'Yaraya ilaç veya başka madde sürme.', 'Eğitimin yoksa turnike uygulama.'],
      ozelDurum: {
        ikon: 'alert',
        baslik: 'Kanama Durmazsa',
        aciklama: 'Bası ve turnikeye rağmen kanama sürüyorsa bastırmaya devam et ve durumu 112’ye yeniden bildir. Görevlinin talimatlarını izle.',
      },
      kaynak: 'MEB İlk Yardım • Red Cross • FEMA',
      kontrolEdilecek: true,
    },
    sonrasi: {
      baslik: 'Şiddetli Kanama Sonrası',
      ozet: 'Kanamanın azalması, kaybedilen kanın etkilerini ortadan kaldırmaz. Acil yardım çağrısını iptal etme; kişi sağlık ekibine ulaşana kadar yanında kal.',
      yapilacaklar: [
        { ikon: 'phone-in-talk-outline', baslik: '112 yönlendirmesini sürdür.', aciklama: 'Kanama durmuş görünse bile ciddi kan kaybı tıbbi değerlendirme gerektirir. Kişinin durumundaki değişiklikleri telefondaki görevliye bildir.' },
        { ikon: 'bandage', baslik: 'Yeniden kanamayı izle.', aciklama: 'Yaraya temas eden ilk örtüyü kaldırıp kontrol etme. Kanama yeniden başlarsa doğrudan, güçlü ve sürekli bası uygula; saplı cismin çevresine bas.' },
        { ikon: 'bed-outline', baslik: 'Dinlenmesini ve sıcak kalmasını sağla.', aciklama: 'Kişiyi gereksiz yere yürütme. Üşüyorsa üzerini ört; solukluk, soğuk terleme, sersemlik veya bilinç değişikliği geliştiğini 112’ye bildir.' },
        { ikon: 'lungs', baslik: 'Solunumunu takip et.', aciklama: 'Tepkisizleşir ve normal nefes almazsa 112’ye hemen söyle; yönlendirmeyle kalp masajına başla. Normal nefes alıyorsa solunumunu izlemeyi sürdür.' },
        { ikon: 'clipboard-list-outline', baslik: 'Yapılan yardımı ekibe anlat.', aciklama: 'Yaralanma saatini, uyguladığın basıyı ve varsa turnikenin uygulanma saatini bildir. Bildiğin ilaçları ve alerjileri sağlık ekibiyle paylaş.' },
      ],
      guvenliIpuclari: ['Kanla temasta eldiven kullan.', 'Kişiyle sakin konuş.', 'Ekibin ulaşmasını kolaylaştır.'],
      kacinilmasiGerekenler: ['Saplı cismi çıkarma.', 'Yiyecek veya içecek verme.', 'Turnikeyi gevşetme.'],
      ozelDurum: {
        ikon: 'medical-bag',
        baslik: 'Turnike uygulanmışsa',
        aciklama: 'Kanama durmuş olsa da turnikeyi çıkarma veya gevşetme. Uygulama saatini ekibe açıkça söyle; ağrı nedeniyle çözme. Değişiklikleri 112’ye bildir ve profesyonel yardımı bekle.',
      },
      kaynak: 'American Red Cross • St John Ambulance',
      kontrolEdilecek: false,
    },
  },

  // ===== referans/28 =====
  {
    id: 'burun-kanamasi',
    kategori: 'saglik',
    ad: 'Burun Kanaması',
    ikon: 'water',
    durumAni: {
      baslik: 'Burun Kanaması',
      ozet: 'Otur ve öne eğil. Doğru yere kesintisiz baskı uygulamak çoğu burun kanamasını durdurabilir; yoğun kanamada yardım istemeyi geciktirme.',
      yapilacaklar: [
        { ikon: 'seat-recline-normal', baslik: 'Otur, başını öne eğ.', aciklama: 'Başını hafifçe öne tut ve ağzından nefes al. Ağzına gelen kanı yutmak yerine tükür; geriye yaslanma.' },
        { ikon: 'gesture-pinch', baslik: 'Burnunun yumuşak kısmını sık.', aciklama: 'Başparmağın ve işaret parmağınla burun deliklerinin hemen üzerindeki yumuşak kısmı iki taraftan sıkıştır. Kemikli burun köprüsüne basmakla yetinme.' },
        { ikon: 'timer-outline', baslik: '10–15 dakika bırakma.', aciklama: 'Saate bakarak basıyı kesintisiz sürdür. Kanama durmuş mu diye parmaklarını aralıklarla gevşetme; bu, oluşan pıhtıyı bozabilir.' },
        { ikon: 'hospital-building', baslik: 'Durmuyorsa acile başvur.', aciklama: '10–15 dakikalık doğru basıya rağmen kanama sürüyorsa acil değerlendirme al. Başına darbe aldıysan veya çok kan yutuyorsan bekleme.' },
        { ikon: 'phone-in-talk', baslik: 'Ağır belirtilerde 112’yi ara.', aciklama: 'Kanama çok fazlaysa, güçsüzlük, baş dönmesi veya nefes alma güçlüğün varsa 112’yi ara. Kendin araç kullanma.' },
      ],
      guvenliIpuclari: ['Süreyi saatle takip et.', 'Ağzından sakin nefes al.', 'Kan sulandırıcı kullanıyorsan bildir.'],
      kacinilmasiGerekenler: ['Başını geriye atma.', 'Sırtüstü uzanma.', 'Kontrol için basıyı bırakma.'],
      ozelDurum: {
        ikon: 'bandage',
        baslik: 'Kanama durduktan sonra',
        aciklama: 'İlk 24 saat burnunu sümkürme veya karıştırma. Sıcak içecek, alkol ve ağır egzersizden kaçın. Tekrarlayan kanamaları bir sağlık uzmanına danış.',
      },
      kaynak: 'NHS • Leeds Teaching Hospitals',
      kontrolEdilecek: false,
    },
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    sonrasi: {
      baslik: 'Burun Kanaması Sonrası',
      ozet: 'Kanama durduktan sonra da burnun içi kolayca yeniden kanayabilir. Burnunu zorlamadan dinlen ve uyarı belirtilerini izle.',
      yapilacaklar: [
        { ikon: 'bed-outline', baslik: 'Düz yatma.', aciklama: 'Dinlenirken başını yüksekte tut; dümdüz uzanma.' },
        { ikon: 'water-outline', baslik: 'Burnundaki salgıyı nazikçe temizle.', aciklama: 'Burnunu sümkürmek yerine salgıyı içine çekip bir mendile tükür.' },
        { ikon: 'emoticon-outline', baslik: 'Hapşırırken ağzını aç.', aciklama: 'Hapşırık gelirse ağzını açık tut; böylece burnuna binen basınç azalır.' },
        { ikon: 'stethoscope', baslik: 'Uyarı belirtilerini izle.', aciklama: 'Baş dönmesi, bayılma hissi veya kan kusma olursa sağlık kuruluşuna başvur.' },
        { ikon: 'pill', baslik: 'İlacını kendiliğinden bırakma.', aciklama: 'Kan sulandırıcı kullanıyorsan ilacını kesmeden önce doktoruna danış.' },
      ],
      guvenliIpuclari: ['Yanında mendil bulundur.', 'Kanama tekrarlarsa aynı ilk yardımı uygula.', 'Tekrarlarsa ne zaman olduğunu not et.'],
      kacinilmasiGerekenler: ['Burnundaki kabukları koparma.', 'Yeniden başlayan kanamayı önemsiz sayma.', 'Burnuna bir şey sokma.'],
      ozelDurum: {
        ikon: 'alert-circle-outline',
        baslik: 'Kanama Darbeden Sonra Başladıysa',
        aciklama: 'Başına veya burnuna darbe aldıktan sonra kanama olduysa ya da nefes almakta zorlanıyorsan beklemeden acile başvur.',
      },
      kaynak: 'NHS',
      kontrolEdilecek: true,
    },
  },

  // ===== referans/32 =====
  {
    id: 'nobet',
    kategori: 'saglik',
    ad: 'Nöbet',
    ikon: 'head-flash-outline',
    // TASLAK: Fotoğrafı yok; resmi kaynaklara dayanarak biz yazdık (KONTROL_LISTESI.md)
    durumAni: {
      baslik: 'Nöbet Anında',
      ozet: 'Kasılmalar sırasında amaç kişiyi yaralanmalardan korumaktır. Hareketlerini durdurmaya çalışma; yanında kal ve süreyi takip et.',
      yapilacaklar: [
        { ikon: 'alert-octagon-outline', baslik: 'Çevresindeki tehlikeli eşyaları uzaklaştır.', aciklama: 'Sert, keskin veya sıcak eşyaları kişinin yakınından kaldır. Kişiyi gerekmedikçe yerinden taşıma.' },
        { ikon: 'bed-outline', baslik: 'Başının altına yumuşak bir şey koy.', aciklama: 'Katlanmış bir giysi veya yastıkla başını yere çarpmaktan koru.' },
        { ikon: 'hand-back-left-off-outline', baslik: 'Hareketlerini durdurmaya çalışma.', aciklama: 'Kollarını veya bacaklarını tutup kasılmaları engellemeye çalışma.' },
        { ikon: 'timer-outline', baslik: 'Nöbetin başladığı saati not et.', aciklama: 'Nöbetin ne kadar sürdüğü 112 ve sağlık ekibi için önemli bir bilgidir.' },
        { ikon: 'tshirt-crew-outline', baslik: 'Sıkan giysilerini gevşet.', aciklama: 'Boynundaki kravat, atkı veya sıkı yakayı gevşet. Gözlüğü varsa çıkar.' },
      ],
      guvenliIpuclari: ['Sakin kal.', 'Hareketleri aklında tutmaya çalış.', 'Yanındakilerden yardım iste.'],
      kacinilmasiGerekenler: ['Ağzını zorla açmaya çalışma.', 'Soğan veya kolonya koklatma.', 'Nöbet sırasında ilaç vermeye çalışma.'],
      ozelDurum: {
        ikon: 'shield-account-outline',
        baslik: 'Kişiyi Tanımıyorsan',
        aciklama: 'Üzerinde sağlık bilgisi kartı veya bileklik olup olmadığına bak. Bulduğun bilgiyi gelen sağlık ekibine göster.',
      },
      kaynak: 'MEB İlk Yardım • CDC',
      kontrolEdilecek: true,
    },
    sonrasi: {
      baslik: 'Nöbet Sonrası',
      ozet: 'Kasılmaların bitmesi, kişinin tamamen toparlandığı anlamına gelmez. Yanında kal, solunumunu izle ve yardım gerektiren belirtileri kontrol et.',
      yapilacaklar: [
        { ikon: 'lungs', baslik: 'Solunumunu kontrol et.', aciklama: 'Normal nefes alıyorsa, bilinci kapalı kişiyi yan çevir. Tepkisiz ve normal nefes almıyorsa 112’yi ara; yönlendirmeyle kalp masajına başla.' },
        // Fotoğrafta "toparlaıncaya" yazım hatası vardı; "toparlanıncaya" olarak düzeltildi
        { ikon: 'account-heart-outline', baslik: 'Toparlanana kadar yanında kal.', aciklama: 'Nerede olduğunu ve nöbet geçirdiğini sakin bir sesle açıkla. Tam toparlanıncaya kadar yalnız bırakma; aceleyle ayağa kaldırma.' },
        { ikon: 'phone-in-talk', baslik: 'Acil belirtilerde 112’yi ara.', aciklama: 'İlk nöbette, beş dakikayı aşan veya aralıksız tekrarlayan nöbette 112’yi ara. Bilinci açılmıyorsa, ciddi yaralanma veya solunum güçlüğü varsa bekleme.' },
        { ikon: 'clipboard-edit-outline', baslik: 'Gördüklerini ekibe anlat.', aciklama: 'Başlama ve bitiş saatlerini, hareketleri, düşme veya yaralanmaları not et. Bu bilgileri sağlık ekibiyle paylaş.' },
        { ikon: 'cup-off-outline', baslik: 'Yemek ve içecek için bekle.', aciklama: 'Tamamen uyanıp toparlanmadan yiyecek, içecek veya ağızdan ilaç verme. Yutma güvenliğinden emin olmadan acele etme.' },
      ],
      guvenliIpuclari: ['Sakin ve kısa konuş.', 'Mahremiyetini koru.', 'Solunumunu izlemeyi sürdür.'],
      kacinilmasiGerekenler: ['Ağzına bir şey koyma.', 'Zorla ayağa kaldırma.', 'Toparlanmadan yalnız bırakma.'],
      ozelDurum: {
        ikon: 'clipboard-list-outline',
        baslik: 'Kişisel nöbet planı varsa',
        aciklama: 'Doktorun hazırladığı planı yalnızca uygulamayı biliyor ve bunun için eğitim aldıysan izle. Plan dışı ilaç verme; acil belirtilerde 112’ye başvur.',
      },
      kaynak: 'NHS • CDC • St John Ambulance',
      kontrolEdilecek: false,
    },
  },
];

export default saglikSenaryolari;
