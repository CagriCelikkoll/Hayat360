// Bu dosya Fener aracındaki SOS ışık deseninin süreleri ile tanımlıdır.
// SOS Mors alfabesinde "· · · — — — · · ·" demektir: 3 kısa, 3 uzun, 3 kısa ışık.
// Her adım: ışık açık mı (acik) ve kaç milisaniye sürecek (sure).

const KISA = 200; // Nokta (·): kısa ışık
const UZUN = 600; // Çizgi (—): uzun ışık
const ARA = 200; // Aynı harfteki ışıklar arası karanlık
const HARF_ARASI = 600; // Harfler arası karanlık
const TEKRAR_ARASI = 1400; // SOS bittikten sonra yeniden başlamadan önceki karanlık

// Desen: S (· · ·) + O (— — —) + S (· · ·)
export const sosDeseni = [
  // S
  { acik: true, sure: KISA }, { acik: false, sure: ARA },
  { acik: true, sure: KISA }, { acik: false, sure: ARA },
  { acik: true, sure: KISA }, { acik: false, sure: HARF_ARASI },
  // O
  { acik: true, sure: UZUN }, { acik: false, sure: ARA },
  { acik: true, sure: UZUN }, { acik: false, sure: ARA },
  { acik: true, sure: UZUN }, { acik: false, sure: HARF_ARASI },
  // S
  { acik: true, sure: KISA }, { acik: false, sure: ARA },
  { acik: true, sure: KISA }, { acik: false, sure: ARA },
  { acik: true, sure: KISA }, { acik: false, sure: TEKRAR_ARASI },
];
