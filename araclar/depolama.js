// Bu dosya telefonda kalıcı bilgi saklamak için AsyncStorage yardımcılarını içerir.
// Bilgiler internete gitmez, sadece bu telefonda saklanır.
// Profil (acil durum kartı ve acil kişiler), Hazırlık Listesi işaretleri ve Aile Afet Planı buradan kaydedilir.

import AsyncStorage from '@react-native-async-storage/async-storage';

// Kayıt anahtarları (dolaptaki çekmecelerin etiketleri gibi düşünebilirsin)
const ACIL_KISILER_ANAHTARI = 'acilKisiler'; // "Konumumu Gönder" SMS'i de bu çekmeceden okur
const ACIL_KART_ANAHTARI = 'acilKart';
const HAZIRLIK_ISARETLERI_ANAHTARI = 'hazirlikIsaretleri';
const AILE_PLANI_ANAHTARI = 'ailePlani';

// Genel okuma: anahtardaki kaydı okur. Kayıt yoksa ya da okunamazsa "varsayilan" döner.
async function oku(anahtar, varsayilan) {
  try {
    const kayit = await AsyncStorage.getItem(anahtar);
    if (kayit === null) {
      return varsayilan;
    }
    return JSON.parse(kayit);
  } catch (hata) {
    return varsayilan;
  }
}

// Genel kaydetme: değeri yazıya (JSON) çevirip anahtara kaydeder
async function kaydet(anahtar, deger) {
  await AsyncStorage.setItem(anahtar, JSON.stringify(deger));
}

// --- Acil kişiler. Biçim: [{ ad: 'Annem', telefon: '05xx...' }, ...] ---
export async function acilKisileriOku() {
  return oku(ACIL_KISILER_ANAHTARI, []);
}
export async function acilKisileriKaydet(kisiler) {
  await kaydet(ACIL_KISILER_ANAHTARI, kisiler);
}

// --- Acil durum kartı. Biçim: { adSoyad, dogumYili, kanGrubu, alerjiler, kronikHastaliklar, ilaclar } ---
export async function acilKartiOku() {
  return oku(ACIL_KART_ANAHTARI, {});
}
export async function acilKartiKaydet(kart) {
  await kaydet(ACIL_KART_ANAHTARI, kart);
}

// --- Hazırlık listesi işaretleri. Biçim: { 'su': true, 'el-feneri': true, ... } ---
export async function hazirlikIsaretleriniOku() {
  return oku(HAZIRLIK_ISARETLERI_ANAHTARI, {});
}
export async function hazirlikIsaretleriniKaydet(isaretler) {
  await kaydet(HAZIRLIK_ISARETLERI_ANAHTARI, isaretler);
}

// --- Aile afet planı. Biçim: { mahalleDisiBulusma, mahalleIciBulusma, irtibatAdi, irtibatTelefonu, not } ---
export async function ailePlaniniOku() {
  return oku(AILE_PLANI_ANAHTARI, {});
}
export async function ailePlaniniKaydet(plan) {
  await kaydet(AILE_PLANI_ANAHTARI, plan);
}
