// Bu dosya "Sağlık ve Yaşam Mücadelesi" kategorisinin senaryolarını tutar.
// Metinler referans/ fotoğraflarından HARFİ HARFİNE aktarıldı; değiştirmeyin.
// Alanların ne anlama geldiği veri/senaryolar/index.js dosyasının başında yazıyor.

const saglikSenaryolari = [
  // ===== referans/14 =====
  {
    id: 'inme-suphesi',
    kategori: 'saglik',
    ad: 'İnme Şüphesi',
    ikon: 'brain',
    durumAni: null, // Fotoğrafı yok
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
    durumAni: null, // Fotoğrafı yok
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
    sonrasi: null, // Fotoğrafı yok
  },

  // ===== referans/32 =====
  {
    id: 'nobet',
    kategori: 'saglik',
    ad: 'Nöbet',
    ikon: 'head-flash-outline',
    durumAni: null, // Fotoğrafı yok
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
