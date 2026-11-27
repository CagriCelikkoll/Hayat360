# Kontrol Listesi

## Öğretmen için özet

- **Toplam:** 33 senaryo × 2 sekme = 66 sekme. Bunların **33'ü fotoğraftan harfi harfine** aktarıldı,
  **33'ü fotoğraf olmadığı için resmi kaynaklara dayanarak yazıldı** (uygulamada sarı "Taslak" etiketiyle
  görünür, veride `kontrolEdilecek: true`). Her senaryonun bir sekmesi fotoğraftan, diğeri taslaktır.
- **Türk resmi kaynağına hiç dayanmayan 17 taslak sekme** (ABD/İngiltere kurumlarına dayanıyor):
  Sel, Fırtına, Yıldırım Tehlikesi, Hortum (Sonrası), Bina Yangını, Trafik Kazası (Sonrası),
  Tipide Mahsur Kalma, Asansörde Mahsur Kalma, Rip Akıntısı (Sonrası), Suda Boğulma,
  Burun Kanaması (Sonrası), Doğada Kaybolma, Kopmuş Elektrik Hattı, Elektrik Kesintisi,
  Şişen Telefon Pili (Sonrası), Soğukta Barınma, Kesintide Gıda Güvenliği.
  (Parantez yoksa yazılan sekme "Durum Anı"dır.)
- **Türk kaynağı yalnızca haber sitelerinden okunabilenler:** Tsunami (AFAD açıklaması), Doğal Gaz Kaçağı
  (GAZBİR/İGDAŞ), Orman Yangını (OGM), İletişim Kesintisi (AFAD), İnme Şüphesi (Sağlık Bakanlığı uyarısı;
  kaynak satırında yalnızca MEB var).
- **Bilerek yazılmayan numaralar** (kural: fotoğrafta olmayan numara yazılmaz; uygulamada sadece 112 ve
  fotoğraftaki 187 var):
  - **114** – Ulusal Zehir Danışma Merkezi (Yılan Isırığı için kaynaklarda öneriliyor)
  - **177** – Orman Yangın İhbar Hattı (Orman Yangını için)
  - **186** – Elektrik arıza hattı (Kopmuş Elektrik Hattı ve Elektrik Kesintisi için)
  Uzman uygun görürse bu numaralar ilgili sekmelere eklenebilir.
- **Bilerek yazılmayan süre ve dozlar:** Turnike süresi, burun kanaması sonrası sümkürmeme süresi, tipide
  motoru çalıştırma süresi, suyu klorla arıtma ölçüsü. Kaynaklar çelişkili olduğu veya tıbbi ayrıntı olduğu
  için yazılmadı. Tek istisna: suyu "en az bir dakika" kaynatma (CDC).
- **Hazırlık Listesi (çanta) ve Rehber (6 konu) de taslaktır.** Ayrıntılar en alttaki "Hazırlık Listesi ve Rehber"
  bölümünde. Hepsi AFAD/MGM/Kandilli sayfalarına dayanıyor; Kızılay sitesi açılmadığı için Kızılay'a dayanmıyor.

---

Bu dosya, bir öğretmen veya uzmanın AFAD ve Kızılay kaynaklarıyla kontrol etmesi gereken içerikleri listeler.
İki tür madde vardır:
- **Bizim yazdığımız içerik:** Fotoğrafta olmayan, uygulamaya eklenmiş metin (veride `kontrolEdilecek: true`).
- **Kaynakta şüpheli ifade:** Fotoğraftan aynen aktarılmış ama yazım hatası olabilecek metin.

## Kaynakta şüpheli ifadeler

Henüz yok.

## Bizim yazdığımız içerik

Bu sekmeler fotoğraftan gelmedi; resmi kurumların sayfalarına dayanarak yazıldı. Uygulamada başlığın
yanında sarı **"Taslak"** etiketiyle görünürler. Kontrol edildikten sonra veride `kontrolEdilecek: false`
yapılmalı ve satır buradan silinmeli.

### Doğal Afetler (`veri/senaryolar/dogal-afetler.js`)

| Senaryo | Sekme | Kaynak satırı | Dayanılan sayfalar |
|---|---|---|---|
| Deprem | Durum Anı | AFAD • CDC • FEMA • Red Cross | [AFAD İstanbul: Çök, Kapan, Tutun](https://istanbul.afad.gov.tr/deprem-sirasinda-hayat-kurtaran-uc-hareket-cok-kapan-tutun), [CDC: During an Earthquake](https://www.cdc.gov/earthquakes/safety/stay-safe-during-an-earthquake.html), [Red Cross: Earthquake Safety](https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/earthquake.html), [Ready.gov: Earthquakes](https://www.ready.gov/earthquakes) |
| Sel | Durum Anı | FEMA • NOAA / NWS | [Ready.gov (FEMA): Floods](https://www.ready.gov/floods), [NWS: During a Flood](https://www.weather.gov/safety/flood-during), [NWS: Turn Around Don't Drown](https://www.weather.gov/tsa/hydro_tadd) |
| Tsunami | Durum Anı | AFAD • FEMA • Red Cross • NOAA / NWS | [Ready.gov (FEMA): Tsunamis](https://www.ready.gov/tsunamis), [Red Cross: Tsunami](https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/tsunami.html), [NWS: Tsunami Infographics](https://www.weather.gov/wrn/tsunami_infographics), AFAD İstanbul İl Müdürü'nün tsunami tatbikatı açıklaması ([NTV haberi](https://www.ntv.com.tr/turkiye/istanbulda-tsunami-tatbikatisirenler-caldi-ogrenciler-okuldan-cikti,-27_P780dkSaqBp6pDyGow)) |
| Fırtına | Durum Anı | NOAA / NWS • CDC • Red Cross | [NWS: Severe Thunderstorm Safety Rules](https://www.weather.gov/bmx/sps_svrsafetyrules), [NWS: Strong Winds](https://www.weather.gov/lmk/ref_svr_winds), [Red Cross: High Wind Safety](https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/high-winds.html), [CDC: Lightning Safety](https://www.cdc.gov/lightning/safety/index.html), [CDC: After a Disaster (jeneratör/karbonmonoksit)](https://www.cdc.gov/natural-disasters/response/) |
| Yıldırım Tehlikesi | Durum Anı | CDC • NOAA / NWS • Red Cross | [CDC: Lightning Safety](https://www.cdc.gov/lightning/safety/index.html), [CDC: Lightning FAQ](https://www.cdc.gov/lightning/faq/index.html), [NWS: When Thunder Roars](https://www.weather.gov/dlh/lightningsafety), [Red Cross: Thunderstorm Safety](https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/thunderstorm.html) |
| Hortum | Sonrası | CDC • NOAA / NWS • Red Cross | [CDC: After a Tornado](https://www.cdc.gov/tornadoes/safety/stay-safe-after-a-tornado-safety.html), [CDC: After a Disaster](https://www.cdc.gov/natural-disasters/response/), [NWS: What to do After a Tornado](https://www.weather.gov/safety/tornado-after), [Red Cross: Tornado Safety](https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/tornado.html) |
| Heyelan | Durum Anı | AFAD • CDC • FEMA • USGS | [AFAD Bursa: Heyelan](https://bursa.afad.gov.tr/heyelan), [CDC: Landslides and Mudslides](https://www.cdc.gov/landslides-and-mudslides/about/index.html), [USGS: Landslide Preparedness](https://www.usgs.gov/natural-hazards/landslide-hazards/science/landslide-preparedness), [Ready.gov: Landslides](https://www.ready.gov/landslides-debris-flow) |

### İnsan Kaynaklı Felaketler (`veri/senaryolar/insan-kaynakli.js`)

| Senaryo | Sekme | Kaynak satırı | Dayanılan sayfalar |
|---|---|---|---|
| Doğal Gaz Kaçağı | Durum Anı | GAZBİR • İGDAŞ | [GAZBİR: 187 Doğal Gaz Acil](https://gazbir.org.tr/en/187-natural-gas-emergency/175), İGDAŞ ve Bursagaz açıklamaları ([Milliyet](https://www.milliyet.com.tr/gundem/evdeki-bomba-dogal-gaz-curuk-sarimsak-kokusu-alirsaniz-187yi-arayin-7012972), [memurlar.net](https://www.memurlar.net/haber/802222/hayati-uyari-curuk-sarimsak-kokusu-alirsaniz-187-yi-arayin.html), [haberler.com](https://www.haberler.com/bursagaz-dan-abonelerine-guvenli-dogalgaz-kullanim-12707456-haberi/)) |
| Kimyasal Sızıntı | Durum Anı | CDC • FEMA • Red Cross • Emniyet Genel Müdürlüğü | [CDC: What to Do in a Chemical Emergency](https://www.cdc.gov/chemical-emergencies/response/index.html), [CDC: Shelter in Place](https://cdc.gov/chemical-emergencies/response/shelter-in-place.html), [Ready.gov (FEMA): Hazmat](https://www.ready.gov/hazmat), [Red Cross: Chemical Emergency](https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/chemical-emergency.html), [EGM: Kimyasal Tehdit (PDF)](https://www.egm.gov.tr/kurumlar/egm.gov.tr/IcSite/kriminal/Bomba/Kimyasal%20Tehdit.pdf) |
| Bina Yangını | Durum Anı | Red Cross • FEMA | [Red Cross: If a Fire Starts](https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/fire/if-a-fire-starts.html), [Ready.gov (FEMA): Home Fires](https://www.ready.gov/home-fires), [USFA (FEMA): Feeling the Door](https://www.usfa.fema.gov/gallery/pictographs/pictograph13.html) |
| Trafik Kazası | Sonrası | NHS | [NHS: Whiplash](https://www.nhs.uk/conditions/whiplash/), [Royal Berkshire NHS: Neck Injury](https://www.royalberkshire.nhs.uk/media/hytpuxp1/neck-injury_dec25.pdf) |

### Acil Kurtarma ve Mahsur Kalma (`veri/senaryolar/kurtarma.js`)

| Senaryo | Sekme | Kaynak satırı | Dayanılan sayfalar |
|---|---|---|---|
| Tipide Mahsur Kalma | Durum Anı | NOAA / NWS • Red Cross • FEMA | [NWS: Caught in a Winter Storm](https://www.weather.gov/safety/winter-during), [NWS: Vehicle Safety](https://www.weather.gov/mqt/cartips), [Red Cross: Winter Roads](https://www.redcross.org/local/montana/about-us/news-and-events/news/Stay-safe-on-the-roads-this-winter.html), [Ready.gov (FEMA): Stay Safe and Warm Toolkit](https://www.ready.gov/sites/default/files/2026-01/ready_toolkit_stay-safe-and-warm_01272026.pdf) |
| Asansörde Mahsur Kalma | Durum Anı | Otis | [Otis: 5 Steps If Your Elevator Stops](https://www.otis.com/en/us/w/5-steps-to-take-if-your-elevator-stops), ek olarak üniversite acil durum rehberleri ([Cornell](https://emergency.cornell.edu/elevator-emergencies), [Northeastern](https://nupd.northeastern.edu/safety/general-safety-tips/emergency-guidebook/elevator-failure/)) |
| Enkaz Altında Kalma | Durum Anı | AFAD • Kızılay • FEMA • CDC | [AFAD: Deprem Anında Neler Yapmalısınız?](https://www.afad.gov.tr/deprem-aninda-neler-yapmalisiniz), [AFAD Bursa: Deprem](https://bursa.afad.gov.tr/deprem), [AFAD broşürü (MEB sitesinde)](https://reyhanli.meb.gov.tr/meb_iys_dosyalar/2016_02/26033958_afad5.pdf), [Türk Kızılay: Afette İlk 72 Saat](https://afetyonetimi.kizilay.org.tr/tr/afette-ilk-72-saat/aile.html), [Ready.gov (FEMA): Earthquakes](https://www.ready.gov/earthquakes), [Ready.gov (FEMA): Explosions](https://www.ready.gov/explosions), [CDC: During an Earthquake](https://www.cdc.gov/earthquakes/safety/stay-safe-during-an-earthquake.html), [Red Cross: Earthquake Safety](https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/earthquake.html) |
| Rip Akıntısı | Sonrası | NOAA / NWS • Red Cross | [NOAA: Rip Current Survival Guide](https://oceantoday.noaa.gov/ripcurrentfeature/), [NWS: Rip Current Safety Rules](https://www.weather.gov/mlb/ripcurrent_rules), [NWS: Before You Go in the Water](https://www.weather.gov/safety/ripcurrent-surviving), [Red Cross: Beach Safety](https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/water-safety/beach-safety.html) |
| Suda Boğulma | Durum Anı | Red Cross | [Red Cross: Reach or Throw, Don't Go](https://www.redcross.org/content/dam/redcross/training-services/whale-tales/pdfs/Lesson_8_LessonPlan_Final.pdf), [Red Cross: Would You Know What to Do?](https://www.redcross.org/content/dam/redcross/atg/PDF_s/Preparedness___Disaster_Recovery/Disaster_Preparedness/Water_Safety/WouldYouKnowWhattodo.pdf) |

### Sağlık ve Yaşam Mücadelesi (`veri/senaryolar/saglik.js`)

| Senaryo | Sekme | Kaynak satırı | Dayanılan sayfalar |
|---|---|---|---|
| İnme Şüphesi | Durum Anı | MEB İlk Yardım | [MEB: Bilinç Bozuklukları ve Ciddi Hastalık Durumunda İlk Yardım (PDF)](https://ilkyardim.meb.gov.tr/media/h2obhvve/bilin%C3%A7-bozukluklari-ve-ciddi-hastalik-durumunda-ilk-yardim.pdf), [MEB: Bilinç Bozuklukları](https://ilkyardim.meb.gov.tr/ilk-yardim-uygulamalari/bilinc-bozukluklari/), Sağlık Bakanlığı'nın inme uyarısı ([Milliyet haberi](https://www.milliyet.com.tr/gundem/saglik-bakanligi-uyardi-iste-inme-belirtileri-ve-yapilmasi-gerekenler-7473581)) |
| Şiddetli Kanama | Durum Anı | MEB İlk Yardım • Red Cross • FEMA | [MEB: Yaralanmalarda İlk Yardım (PDF)](https://ilkyardim.meb.gov.tr/media/e4qb2x10/yaralanmalarda-ilk-yardim.pdf), [MEB: Genel İlk Yardım Bilgileri (PDF)](https://ilkyardim.meb.gov.tr/media/w4nb0htr/genel-ilk-yardim-bilgileri.pdf), [Red Cross: Life-Threatening Bleeding](https://www.redcross.org/take-a-class/resources/learn-first-aid/bleeding-life-threatening-external), [Ready.gov (FEMA): Steps to Control Bleeding](https://www.ready.gov/training/steps_to_control_bleeding.pdf) |
| Burun Kanaması | Sonrası | NHS | [NHS: Nosebleed](https://www.nhs.uk/conditions/nosebleed/), [NHS Tayside: Nosebleed](https://www.nhstaysidecdn.scot.nhs.uk/NHSTaysideWeb/idcplg?IdcService=GET_SECURE_FILE&Rendition=web&RevisionSelectionMethod=LatestReleased&noSaveAs=1&dDocName=prod_350651), [Hull NHS: Nosebleeds](https://www.hey.nhs.uk/patient-leaflet/nosebleeds-epistaxis-adults/) |
| Nöbet | Durum Anı | MEB İlk Yardım • CDC | [MEB: Bilinç Bozuklukları ve Ciddi Hastalık Durumunda İlk Yardım (PDF)](https://ilkyardim.meb.gov.tr/media/h2obhvve/bilin%C3%A7-bozukluklari-ve-ciddi-hastalik-durumunda-ilk-yardim.pdf), [CDC: First Aid for Seizures](https://www.cdc.gov/epilepsy/first-aid-for-seizures/index.html), Türkçe sağlık haberleri ([CNN Türk](https://cnnturk.com/saglik/sara-krizi-geciren-kisiye-bunlari-yapmayin-531447)) |

### Doğa Şartlarında Hayatta Kalma (`veri/senaryolar/doga-sartlari.js`)

| Senaryo | Sekme | Kaynak satırı | Dayanılan sayfalar |
|---|---|---|---|
| Doğada Kaybolma | Durum Anı | NPS • US Forest Service | [US Forest Service: If You Get Lost](https://www.fs.usda.gov/visit/know-before-you-go/if-you-get-lost), [NPS: Outdoor Emergency Plan](https://www.nps.gov/articles/gtgemergencyplan.htm), [NPS: Junior Ranger – My Favorite Tree](https://www.nps.gov/articles/000/junior-ranger-my-favorite-tree.htm) |
| Yılan Isırığı | Durum Anı | MEB İlk Yardım | [MEB: Böcek Sokmaları ve Hayvan Isırıklarında İlk Yardım (PDF)](https://ilkyardim.meb.gov.tr/media/sbtnaxju/13-boecek-sokmalari-ve-hayvan-isriklarinda-ilk-yardim.pdf) |
| Kene Tutunması | Sonrası | Sağlık Bakanlığı • CDC | [Sağlık Bakanlığı HSGM: KKKA](https://hsgm.saglik.gov.tr/tr/zoonotik-ve-vektorel-hastaliklar/kkka.html), [Sağlık Bakanlığı: KKKA Uyarı ve Önlemler](https://www.saglik.gov.tr/TR-55309/kirim-kongo-kanamali-atesi--uyari-ve-onlemler.html), [Atakum İlçe Sağlık Müdürlüğü](https://atakumsm.saglik.gov.tr/TR-251433/kene-icin-tedbiri-elden-birakmayalim.html), [HSGM: KKKA okul eğitimi (PDF)](https://hsgm.saglik.gov.tr/depo/birimler/zoonotik-ve-vektorel-hastaliklar-db/Dokumanlar/Sunumlar/KKKA_okul_egitim_2023.pdf) |
| Orman Yangını | Durum Anı | Red Cross • CDC • OGM | [Red Cross: If a Wildfire Threatens](https://www.redcross.org/about-us/news-and-events/news/2019/how-to-stay-safe-if-a-wildfire-threatens.html), [CDC: Wildfires and Wildfire Smoke](https://www.cdc.gov/wildfires/safety/how-to-safely-stay-safe-during-a-wildfire.html), OGM'nin "en küçük dumanı 112'ye bildirin" açıklaması ([BirGün haberi](https://www.birgun.net/haber/orman-genel-mudurlugu-yanginda-onemli-olan-karadan-mudahale-392857)), [TEMA: Yangın Sırasında](https://tema.org.tr/en/our-works/forest/before-forest-fires/during-forest-fires) |

### Teknolojik ve Sistemsel Krizler (`veri/senaryolar/teknolojik.js`)

| Senaryo | Sekme | Kaynak satırı | Dayanılan sayfalar |
|---|---|---|---|
| Kopmuş Elektrik Hattı | Durum Anı | CDC • Red Cross • FEMA | [CDC: Electrical Hazards](https://www.cdc.gov/natural-disasters/response/what-to-do-protect-yourself-from-electrical-hazards.html), [Red Cross: Power Outage Safety](https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/power-outage.html), [Ready.gov (FEMA): Car Safety](https://www.ready.gov/car), [CDC: Electrical Safety During a Hurricane](https://tools.cdc.gov/podcasts/media/pdf/Hurricane_ElecSafety_30.pdf) |
| Elektrik Kesintisi | Durum Anı | CDC • FEMA • Red Cross | [Ready.gov (FEMA): Power Outages](https://www.ready.gov/power-outages), [CDC: During a Power Outage](https://www.cdc.gov/natural-disasters/response/what-to-do-protect-yourself-during-a-power-outage.html), [CDC: Keep Food Safe](https://www.cdc.gov/food-safety/foods/keep-food-safe-after-emergency.html), [Red Cross: Winter Storm](https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/winter-storm.html); Türkçe: [Dicle EDAŞ uyarısı (haber)](https://www.yeniakit.com.tr/haber/dicle-edastan-arizalara-bireysel-mudahale-etmeyin-uyarisi--573797.html), [Sözcü](https://www.sozcu.com.tr/elektrik-kesildiginde-8-hatayi-asla-yapmayin-cok-tehlikeli-p190613) |
| İletişim Kesintisi | Durum Anı | AFAD • Kızılay | AFAD'ın "SMS ve internet tercih edin" açıklaması ([Habertürk](https://www.haberturk.com/son-dakika-afad-deprem-sonrasi-sms-ve-internetin-tercih-edilmesini-tavsiye-etti-2853633-teknoloji), [TGRT](https://www.tgrthaber.com/gundem/afaddan-deprem-uyarisi-internet-ve-smssi-tercih-edin-2751117)), [Türk Kızılay: Afette İlk 72 Saat](https://afetyonetimi.kizilay.org.tr/tr/afette-ilk-72-saat/aile.html) |
| Şişen Telefon Pili | Sonrası | EPA • NFPA | [EPA: Lithium-Ion Batteries FAQ](https://www.epa.gov/recycle/frequent-questions-lithium-ion-batteries), [EPA: Damaged Batteries (PDF)](https://www.epa.gov/system/files/documents/2026-05/collecting_household_small_format_damaged_and_defective_batteries.pdf), [NFPA: Lithium-Ion Battery Safety](https://www.nfpa.org/education-and-research/energy-transition/lithium-ion-batteries) |
| Karbonmonoksit Şüphesi | Durum Anı | Hacettepe Ü. Halk Sağlığı • CDC • Red Cross | [Hacettepe Halk Sağlığı: CO bilgi notu (PDF)](https://halksagligi.hacettepe.edu.tr/duyurular/halkayonelik/cobilginotu2026.pdf), [Hacettepe: CO zehirlenmeleri (PDF)](https://halksagligi.hacettepe.edu.tr/diger/toplumayonelik/cozehir.pdf), [CDC: During a Power Outage](https://www.cdc.gov/natural-disasters/response/what-to-do-protect-yourself-during-a-power-outage.html), [Red Cross: Winter Storm](https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/winter-storm.html) |

### Barınma ve Temel İhtiyaçlar (`veri/senaryolar/barinma.js`)

| Senaryo | Sekme | Kaynak satırı | Dayanılan sayfalar |
|---|---|---|---|
| Soğukta Barınma | Durum Anı | CDC • FEMA • Red Cross | [CDC: Preventing Hypothermia](https://www.cdc.gov/winter-weather/prevention/index.html), [Ready.gov (FEMA): Stay Safe and Warm Toolkit](https://www.ready.gov/sites/default/files/2026-01/ready_toolkit_stay-safe-and-warm_01272026.pdf), [Red Cross: Winter Storm](https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/winter-storm.html), [Red Cross: Hypothermia](https://www.redcross.org/take-a-class/resources/learn-first-aid/hypothermia) |
| Kesintide Gıda Güvenliği | Durum Anı | CDC • FEMA | [CDC: Keep Food Safe After a Disaster](https://www.cdc.gov/food-safety/foods/keep-food-safe-after-emergency.html), [Ready.gov (FEMA): Food](https://www.ready.gov/food), [Ready.gov (FEMA): Power Outages](https://www.ready.gov/power-outages) |
| Temiz Su İhtiyacı | Durum Anı | CDC • Kızılay | [CDC: Make Water Safe During an Emergency (PDF)](https://www.cdc.gov/water-emergency/media/pdfs/make-water-safe-during-emergency-p.pdf), [CDC: Drinking Water Advisories](https://www.cdc.gov/water-emergency/about/drinking-water-advisories-an-overview.html), [Türk Kızılay: Afette İlk 72 Saat](https://afetyonetimi.kizilay.org.tr/tr/afette-ilk-72-saat/aile.html), [Türk Kızılay: Afetlerde Beslenme Hizmetleri Kılavuzu (PDF)](https://www.kizilay.org.tr/Upload/Dokuman/Dosya/86107045_afetlerde-beslenme-hizmetleri-kilavuzu.pdf) |
| Güvenli Barınak Arama | Sonrası | CDC • Hacettepe Ü. Halk Sağlığı | [CDC: Staying Safe at a Disaster Shelter](https://www.cdc.gov/natural-disasters/safety/staying-safe-at-a-disaster-shelter.html), [Hacettepe Halk Sağlığı: Toplu barınma alanı notu (PDF)](https://halksagligi.hacettepe.edu.tr/duyurularogrenci/afetbilgi/nottoplubarinmaalani.pdf) |

### Teknolojik ve Barınma için notlar

- **Kopmuş Elektrik Hattı → "Araç Yanmaya Başlarsa" kartı:** "Araca ve yere aynı anda dokunmadan çık"
  ifadesi CDC'nin eski (2004) bir belgesine dayanıyor; güncel CDC sayfası sadece "araç yanmadıkça içeride
  kal" diyor. Uzman kontrol etmeli.
- **Elektrik Kesintisi:** Elektrik dağıtım şirketlerinin veya TEDAŞ'ın resmi uyarı metnine ulaşamadım;
  Türkçe kaynaklar haber siteleri. Arıza hattı numarası kural gereği yazılmadı.
- **İletişim Kesintisi:** AFAD'ın "SMS ve internet tercih edin" önerisini haber sitelerinden okudum;
  AFAD veya BTK sitesinde birebir görmedim.
- **Karbonmonoksit Şüphesi ve Güvenli Barınak (Sonrası):** Türk kaynağı olarak Hacettepe Üniversitesi Halk
  Sağlığı Anabilim Dalı'nın halka yönelik notları kullanıldı. Sağlık Bakanlığı'nın karbonmonoksit eğitim
  setini buldum ama yalnızca bir kısmını görebildim; kaynak satırına yazmadım.
- **Temiz Su → "en az bir dakika kaynat":** CDC'nin süresi. Fotoğraf dışından yazılan tek süre budur;
  CDC'de açıkça geçtiği için yazıldı.
- **Güvenli Barınak (Sonrası) → "Zorlanırsan destek iste":** Sağlık Bakanlığı'nın depremzedelerin ruh sağlığı
  sayfasını buldum ama içeriğini okuyamadım; madde genel tutuldu.
- **Soğukta Barınma ve Kesintide Gıda Güvenliği:** Türk resmi kaynağı bulunamadı (MEB'in hipotermi
  önerileri fotoğraftaki Sonrası sekmesiyle örtüştüğü için tekrar edilmedi).

### Sağlık ve Doğa Şartları için notlar

- **Bu turdaki numaralar:** Kaynaklarda yılan ısırığı için Ulusal Zehir Danışma Merkezi'nin, orman yangını için
  Orman Yangın İhbar Hattı'nın ayrı numaraları geçiyor. Kural gereği (fotoğrafta olmayan numara yazılmaz)
  bu numaraları yazmadım; uzman eklenmesini isterse eklenebilir.
- **Süre ve sayı yazılmayanlar:** Burun kanaması sonrası için kaynaklar sümkürmemeyi farklı sürelerle
  anlatıyor (bir gün ile üç gün arası). Nöbette 112 için süre ölçütü zaten Sonrası sekmesinde (fotoğrafta)
  olduğu için Durum Anı'nda tekrar yazmadım. Turnike için süre kaynaklarda çelişkiliydi; süre yazmadım.
- **Türkiye'ye özel kaynak bulunamayanlar (bu tur):** Burun Kanaması (Sonrası) ve Doğada Kaybolma (Durum
  Anı) için Türk resmi kaynağı bulamadım; içerik NHS, NPS ve US Forest Service'e dayanıyor. Orman Yangını
  için OGM/İletişim Başkanlığı rehberinin adım adım tahliye talimatlarını okuyamadım; tahliye adımları
  Red Cross ve CDC'ye dayanıyor.
- **İnme Şüphesi:** Sağlık Bakanlığı'nın inme uyarısını sadece haberlerden okuyabildim; bu yüzden kaynak
  satırında yalnızca MEB İlk Yardım var.
- **Nöbet → "Gözlüğü varsa çıkar", "Soğan veya kolonya koklatma":** Türkçe sağlık haberlerine ve
  ilk yardım eğitim materyallerine dayanıyor; resmi Bakanlık sayfasında birebir görmedim.
- **Kene Tutunması (Sonrası):** Fotoğraftaki Durum Anı sekmesi 10 günlük belirti takibini zaten anlattığı
  için Sonrası sekmesinde bunu tekrar yazmadım; korunma önlemlerine ağırlık verdim.

### İnsan Kaynaklı ve Kurtarma için notlar

- **Türkiye'ye özel kaynak bulunamayanlar:** Bina Yangını, Trafik Kazası, Tipide Mahsur Kalma, Asansörde
  Mahsur Kalma, Rip Akıntısı ve Suda Boğulma sekmeleri için AFAD, Kızılay, 112 veya Sağlık Bakanlığı'nın
  konuya özel bir sayfasını bulamadım; içerik ABD/İngiltere kurumlarına dayanıyor.
- **Enkaz Altında Kalma (güncellendi):** AFAD ve Kızılay'ın enkaz altı önerileri bulundu ve sekme bunlara
  göre yeniden düzenlendi: ağzı mendil/kıyafetle kapatma, borulara/duvara/zemine vurma ve ıslık, bağırmayı
  son çare olarak kullanma, ekiplere cevap verme, vücudu kontrol edip kırık şüphesinde kıpırdamama, toz
  kaldırmama, kesin çıkış yolu yoksa riskli hareket yapmama, çakmak/kibrit yakmama. Kızılay önerisi
  (paniğe kapılmama, enerjiyi koruma, riskli hareket yapmama) "Afette İlk 72 Saat" sayfasından.
  "Telefonun varsa 112'ye konumunu bildir" maddesi AFAD'ın 112 bildirimi açıklamasına dayanıyor ama bunu
  AFAD sayfasında birebir okuyamadım.
- **Doğal Gaz Kaçağı:** GAZBİR ve İGDAŞ'ın önerilerini çoğunlukla haber sitelerindeki açıklamalarından
  okuyabildim. Haberler, pencerelerdeki havalandırma menfezleri konusunda birbiriyle çelişiyordu; bu yüzden
  menfez hakkında bir şey yazmadım.
- **Asansörde Mahsur Kalma:** Tek kurumsal kaynak asansör üreticisi Otis; diğerleri üniversite rehberleri.
  "Yanıt yoksa kapıya vurarak dikkat çek." maddesi bir kurumsal rehbere (USPS) dayanıyor, resmi kurum değil.
- **Trafik Kazası → "Acil Belirtiler Görürsen":** NHS'nin boyun yaralanması uyarılarına dayanıyor. "Bilinç
  bulanıklığı" genel bir güvenlik eklemesi; NHS sayfasında boyun yaralanması için geçmiyor.
- **Tipide Mahsur Kalma → motor:** Kaynaklar motorun saatte yaklaşık 10 dakika çalıştırılmasını öneriyor;
  süre yazmamak için "kısa aralıklarla" dedim. Uzman isterse süre eklenebilir.

### Doğal Afetler için notlar

- **Sel → "Bodruma ve otoparka inme."** Bu madde AFAD'ın uyarısına dayanıyor ama AFAD metnini yalnızca
  haber sitelerinden okuyabildim (AFAD sitesinde doğrulayamadım). Bu yüzden Sel'in kaynak satırına AFAD yazılmadı.
- **Tsunami → "Kıyıya dik yönde uzaklaş."** AFAD İstanbul İl Müdürü'nün açıklamasına dayanıyor; bu açıklama
  da AFAD sitesinden değil, bir haber sitesinden okundu.
- **Fırtına:** Türkiye'ye özel (AFAD/MGM) fırtına anı rehberi bulamadım; içerik ABD kurumlarına (NWS, Red Cross, CDC) dayanıyor.
- **Yıldırım → "Açıkta Sığınak Bulamıyorsan" kartı:** CDC'ye göre açık alanda güvenli yer yoktur; çömelme
  sadece son çare olarak anlatıldı.

## Hazırlık Listesi ve Rehber

Bu içerikler fotoğraftan gelmedi; veride `kontrolEdilecek: true`, uygulamada sarı **"Taslak"** etiketiyle görünür.
AFAD sayfaları tarayıcıda açılıp okundu (27.11.2026). Türk Kızılay'ın afet sitesi (afetyonetimi.kizilay.org.tr)
açılmadığı için **Kızılay kaynağı kullanılamadı**; uzman Kızılay ile karşılaştırabilir.

### Afet ve acil durum çantası (`veri/hazirlik.js`)

- **Dayanılan sayfa:** [AFAD: Afet ve Acil Durum Çantası Hazırlayın – Basın Bülteni (03.03.2021)](https://www.afad.gov.tr/afet-ve-acil-durum-cantasi-hazirlayin-basin-bulteni).
  AFAD'ın 16 maddesinin hepsi alındı. Ek olarak bültenin son paragrafındaki "özel ihtiyaçlar" ve "evcil hayvan
  malzemeleri" iki madde yapıldı (toplam 19 madde).
- **Bize ait olan:** Maddelerin 6 gruba (Su ve Gıda, İlk Yardım, Aydınlatma ve İletişim, Belgeler, Giysi ve Hijyen,
  Diğer) ayrılması ve açıklamaların kısaltılması. AFAD listesi gruplu değil.
- **Bilerek yazılmayan miktarlar:** Kişi başı su miktarı ve kaç günlük gıda. Bunlar AFAD bülteninde geçmiyor;
  sadece haber sitelerinde var. Listedeki sayılar yalnızca AFAD'da açıkça geçenler: "1 adet yağmurluk",
  "1 not defteri ve 1 kalem", "6 ayda bir güncelleme".
- Haber sitelerinde geçen ama AFAD bülteninde olmayan maddeler (nakit para, battaniye, çakı vb.) eklenmedi.

### Aile Afet Planı (`bilesenler/AilePlani.js`)

- Alanlar kullanıcının isteğine göre; AFAD'ın "alternatif buluşma yerleri ve bölge dışı bağlantı kişisi
  belirlenmelidir" önerisiyle uyumlu ([AFADEM: Deprem](https://www.afad.gov.tr/afadem/deprem)).
- Açıklama cümlesi ("Afette eve ulaşamazsanız nerede buluşacağınızı ve kimi arayacağınızı ailece önceden
  belirleyin.") bize ait.

### Rehber – afetlerden önce (`veri/rehber.js`)

| Konu | Kaynak satırı | Dayanılan sayfalar |
|---|---|---|
| Deprem | AFAD – AFADEM Deprem · AFAD Muğla | [AFADEM: Deprem](https://www.afad.gov.tr/afadem/deprem), [AFAD Muğla: Sevdikleriniz ve Kendiniz İçin Önlem Alın](https://mugla.afad.gov.tr/sevdikleriniz-ve-kendiniz-icin-onlem-alin-guvende-kalin) |
| Ev Yangını | AFAD – AFADEM Yangın | [AFADEM: Yangın](https://www.afad.gov.tr/afadem/yangin) |
| Sel | AFAD – Sel Öncesi… · AFADEM Sel | [AFAD: Sel Öncesi, Anı ve Sonrası Tedbirli Olun](https://www.afad.gov.tr/sel-oncesi-ani-ve-sonrasi-tedbirli-olun-guvende-kalin), [AFADEM: Sel](https://www.afad.gov.tr/afadem/sel) |
| Fırtına | MGM · AFAD Antalya | [MGM: Rüzgar Fırtınası](https://mgm.gov.tr/arastirma/dogal-afetler.aspx?s=kuvvetliruzgar), [AFAD Antalya: Şiddetli Rüzgar ve Fırtınadan Korunma](https://antalya.afad.gov.tr/siddetli-ruzgar-ve-firtinadan-korunma) |
| Heyelan | AFAD – AFADEM Heyelan | [AFADEM: Heyelan](https://www.afad.gov.tr/afadem/heyelan) |
| Tsunami | Kandilli · AFAD Muğla | [Kandilli: Tsunami Bilgi Notu (2021)](http://www.koeri.boun.edu.tr/sismo/TSUNAMI_BILGI/BDTIM_Tsunami_Turkce_Haziran_2021.html), [AFAD Muğla](https://mugla.afad.gov.tr/sevdikleriniz-ve-kendiniz-icin-onlem-alin-guvende-kalin) |

**Notlar:**
- **Bilerek yazılmayan numara:** AFADEM Yangın sayfası itfaiye için **110** numarasını veriyor. Kural gereği
  (sadece 112) yazılmadı.
- **Tsunami → "Yüksek yeri önceden belirle":** Kandilli'nin tsunami el kitabındaki "tahliye yollarını öğrenin"
  önerisine dayanıyor; el kitabının PDF'ini açamadım, bu cümleyi yalnızca arama sonucundaki alıntıdan okudum.
  AFAD'ın kendi sitesinde tsunami öncesi için ayrı bir sayfa bulamadım.
- **Tsunami → "Kıyıda deprem = yükseğe çık":** Kandilli bunu "uyarı geldiğinde / deprem hissettiğinizde" diye
  anlatıyor; Rehber'de "bunu önceden bil" şeklinde hazırlık maddesine çevrildi.
- **Sel:** AFAD sayfasındaki "MGM'den telefonla bilgi alın" önerisi numara gerektirdiği için alınmadı.
- **Fırtına:** AFADEM'de fırtına sayfası yok (adres 404 veriyor); MGM ve AFAD Antalya kullanıldı.
- Her maddenin kısa kalın başlığı (ör. "Yatağının yerini kontrol et.") bize ait; açıklamalar kaynaktaki
  cümlelerin sadeleştirilmiş hâli.
