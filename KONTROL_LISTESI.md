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

Hepsi `veri/senaryolar/dogal-afetler.js` dosyasında.

| Senaryo | Sekme | Kaynak satırı | Dayanılan sayfalar |
|---|---|---|---|
| Deprem | Durum Anı | AFAD • CDC • FEMA • Red Cross | [AFAD İstanbul: Çök, Kapan, Tutun](https://istanbul.afad.gov.tr/deprem-sirasinda-hayat-kurtaran-uc-hareket-cok-kapan-tutun), [CDC: During an Earthquake](https://www.cdc.gov/earthquakes/safety/stay-safe-during-an-earthquake.html), [Red Cross: Earthquake Safety](https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/earthquake.html), [Ready.gov: Earthquakes](https://www.ready.gov/earthquakes) |
| Sel | Durum Anı | FEMA • NOAA / NWS | [Ready.gov (FEMA): Floods](https://www.ready.gov/floods), [NWS: During a Flood](https://www.weather.gov/safety/flood-during), [NWS: Turn Around Don't Drown](https://www.weather.gov/tsa/hydro_tadd) |
| Tsunami | Durum Anı | AFAD • FEMA • Red Cross • NOAA / NWS | [Ready.gov (FEMA): Tsunamis](https://www.ready.gov/tsunamis), [Red Cross: Tsunami](https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/tsunami.html), [NWS: Tsunami Infographics](https://www.weather.gov/wrn/tsunami_infographics), AFAD İstanbul İl Müdürü'nün tsunami tatbikatı açıklaması ([NTV haberi](https://www.ntv.com.tr/turkiye/istanbulda-tsunami-tatbikatisirenler-caldi-ogrenciler-okuldan-cikti,-27_P780dkSaqBp6pDyGow)) |
| Fırtına | Durum Anı | NOAA / NWS • CDC • Red Cross | [NWS: Severe Thunderstorm Safety Rules](https://www.weather.gov/bmx/sps_svrsafetyrules), [NWS: Strong Winds](https://www.weather.gov/lmk/ref_svr_winds), [Red Cross: High Wind Safety](https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/high-winds.html), [CDC: Lightning Safety](https://www.cdc.gov/lightning/safety/index.html), [CDC: After a Disaster (jeneratör/karbonmonoksit)](https://www.cdc.gov/natural-disasters/response/) |
| Yıldırım Tehlikesi | Durum Anı | CDC • NOAA / NWS • Red Cross | [CDC: Lightning Safety](https://www.cdc.gov/lightning/safety/index.html), [CDC: Lightning FAQ](https://www.cdc.gov/lightning/faq/index.html), [NWS: When Thunder Roars](https://www.weather.gov/dlh/lightningsafety), [Red Cross: Thunderstorm Safety](https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/thunderstorm.html) |
| Hortum | Sonrası | CDC • NOAA / NWS • Red Cross | [CDC: After a Tornado](https://www.cdc.gov/tornadoes/safety/stay-safe-after-a-tornado-safety.html), [CDC: After a Disaster](https://www.cdc.gov/natural-disasters/response/), [NWS: What to do After a Tornado](https://www.weather.gov/safety/tornado-after), [Red Cross: Tornado Safety](https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/tornado.html) |
| Heyelan | Durum Anı | AFAD • CDC • FEMA • USGS | [AFAD Bursa: Heyelan](https://bursa.afad.gov.tr/heyelan), [CDC: Landslides and Mudslides](https://www.cdc.gov/landslides-and-mudslides/about/index.html), [USGS: Landslide Preparedness](https://www.usgs.gov/natural-hazards/landslide-hazards/science/landslide-preparedness), [Ready.gov: Landslides](https://www.ready.gov/landslides-debris-flow) |

### Uzmanın özellikle bakması gerekenler

- **Sel → "Bodruma ve otoparka inme."** Bu madde AFAD'ın uyarısına dayanıyor ama AFAD metnini yalnızca
  haber sitelerinden okuyabildim (AFAD sitesinde doğrulayamadım). Bu yüzden Sel'in kaynak satırına AFAD yazılmadı.
- **Tsunami → "Kıyıya dik yönde uzaklaş."** AFAD İstanbul İl Müdürü'nün açıklamasına dayanıyor; bu açıklama
  da AFAD sitesinden değil, bir haber sitesinden okundu.
- **Fırtına:** Türkiye'ye özel (AFAD/MGM) fırtına anı rehberi bulamadım; içerik ABD kurumlarına (NWS, Red Cross, CDC) dayanıyor.
- **Yıldırım → "Açıkta Sığınak Bulamıyorsan" kartı:** CDC'ye göre açık alanda güvenli yer yoktur; çömelme
  sadece son çare olarak anlatıldı.
