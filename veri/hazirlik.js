// Bu dosya "Hazırlık Listesi" sekmesindeki afet ve acil durum çantası maddelerini içerir.
// Maddeler AFAD'ın "Afet ve Acil Durum Çantası Hazırlayın" basın bülteninden (03.03.2021) alındı;
// gruplara ayırma ve kısaltmalar bize ait olduğu için kontrolEdilecek: true (KONTROL_LISTESI.md'de).
// Her maddenin bir kimliği (id) var; işaretler bu kimlikle telefonda saklanır.

export const hazirlikKaynagi = 'AFAD – Afet ve Acil Durum Çantası Hazırlayın (Basın Bülteni, 03.03.2021)';

// AFAD bülteninde açıkça geçen öneri (6 ay AFAD'ın kendi ifadesidir)
export const cantaNotu = 'Çantanızı 6 ayda bir güncellemelisiniz. (AFAD)';

export const kontrolEdilecek = true;

const hazirlikGruplari = [
  {
    id: 'su-ve-gida',
    baslik: 'Su ve Gıda',
    ikon: 'cup-water',
    maddeler: [
      { id: 'su', ad: 'Su' },
      { id: 'kuru-gida', ad: 'Uzun süre bozulmayacak kuru gıdalar' },
    ],
  },
  {
    id: 'ilk-yardim',
    baslik: 'İlk Yardım',
    ikon: 'medical-bag',
    maddeler: [
      { id: 'ilk-yardim-cantasi', ad: 'İlk yardım çantası' },
      { id: 'ilaclar', ad: 'Sağlık kayıtları ve ilaçlar' },
      { id: 'maske', ad: 'Maske', aciklama: 'Sağlığınız için.' },
    ],
  },
  {
    id: 'aydinlatma-iletisim',
    baslik: 'Aydınlatma ve İletişim',
    ikon: 'flashlight',
    maddeler: [
      { id: 'el-feneri', ad: 'El feneri', aciklama: 'Aydınlatma ihtiyacınız için.' },
      { id: 'pilli-radyo', ad: 'Pilli radyo', aciklama: 'Son gelişmelerden haberdar olabilmeniz için.' },
      { id: 'yedek-pil', ad: 'Radyo ve fener için yedek pil' },
      { id: 'duduk', ad: 'Düdük', aciklama: 'İletişim kurabilmeniz ve yerinizin belirlenmesine yardımcı olması için.' },
    ],
  },
  {
    id: 'belgeler',
    baslik: 'Belgeler',
    ikon: 'file-document-outline',
    maddeler: [
      { id: 'evrak-fotokopileri', ad: 'Önemli evrakların birer fotokopisi (kimlik vb.)' },
      { id: 'not-defteri', ad: '1 not defteri ve 1 kalem', aciklama: 'Notlarınızı alabilmeniz için.' },
    ],
  },
  {
    id: 'giysi-hijyen',
    baslik: 'Giysi ve Hijyen',
    ikon: 'tshirt-crew-outline',
    maddeler: [
      {
        id: 'yagmurluk',
        ad: '1 adet yağmurluk',
        aciklama: 'Sadece yağmurdan değil, afet anında tozdan, çamurdan ve benzeri etkilerden korur.',
      },
      {
        id: 'koruma-ortusu',
        ad: 'Acil durum koruma örtüsü',
        aciklama: 'Su ve rüzgâr geçirmez; ısınızı koruyarak hipotermi ve benzeri durumlarda korur.',
      },
      { id: 'sabun-tuvalet-kagidi', ad: 'Sabun ve tuvalet kâğıdı' },
      { id: 'dis-fircasi', ad: 'Diş fırçası ve macunu' },
    ],
  },
  {
    id: 'diger',
    baslik: 'Diğer',
    ikon: 'bag-personal-outline',
    maddeler: [
      { id: 'cop-posetleri', ad: 'Çöp poşeti ve saklama poşeti' },
      { id: 'koli-bandi', ad: 'Koli bandı' },
      {
        id: 'ozel-ihtiyaclar',
        ad: 'Ailedeki özel ihtiyaçlar',
        aciklama: 'Engelli, küçük çocuk, bebek, yaşlı veya kronik hasta varsa onların özel ihtiyaçları.',
      },
      { id: 'evcil-hayvan', ad: 'Evcil hayvan malzemeleri', aciklama: 'Evcil hayvanınız varsa.' },
    ],
  },
];

export default hazirlikGruplari;
