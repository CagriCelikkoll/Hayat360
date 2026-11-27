# Kontrol Listesi

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

### Uzmanın özellikle bakması gerekenler

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
