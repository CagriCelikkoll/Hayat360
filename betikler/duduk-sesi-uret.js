// Bu dosya uygulamanın içindeki düdük sesini (assets/sesler/duduk.wav) üretir.
// Uygulamanın parçası değildir; bilgisayarda bir kez çalıştırılır:  node betikler/duduk-sesi-uret.js
// 3000 Hz'lik, yüksek sesli, 2 saniyelik bir ses üretir. Ses döngüde çalınca araya boşluk girmez.

const fs = require('fs');
const path = require('path');

// --- Ses ayarları ---
const ornekHizi = 44100; // Saniyedeki örnek (nokta) sayısı. CD kalitesi.
const frekans = 3000; // Hz. İnsan kulağının en iyi duyduğu aralıkta, keskin bir düdük sesi.
const sureSaniye = 2; // Ses dosyasının uzunluğu
const sesSeviyesi = 0.95; // 0 ile 1 arası. 1'e yakın = çok yüksek ses.

// 3000 Hz x 2 saniye = tam 6000 dalga. Dalga sayısı tam olduğu için ses sonunda
// tam başlangıç noktasına döner; döngüde çalarken "tık" sesi duyulmaz.
const ornekSayisi = ornekHizi * sureSaniye;

// Her örnek 2 bayt (16 bit) yer kaplar
const veriBoyutu = ornekSayisi * 2;
const dosya = Buffer.alloc(44 + veriBoyutu); // 44 bayt WAV başlığı + ses verisi

// --- WAV dosya başlığı (her WAV dosyasının başında bulunan standart bilgiler) ---
dosya.write('RIFF', 0);
dosya.writeUInt32LE(36 + veriBoyutu, 4); // Dosyanın geri kalan boyutu
dosya.write('WAVE', 8);
dosya.write('fmt ', 12);
dosya.writeUInt32LE(16, 16); // Biçim bölümünün boyutu
dosya.writeUInt16LE(1, 20); // 1 = sıkıştırılmamış ses (PCM)
dosya.writeUInt16LE(1, 22); // 1 kanal (mono)
dosya.writeUInt32LE(ornekHizi, 24);
dosya.writeUInt32LE(ornekHizi * 2, 28); // Saniyedeki bayt sayısı
dosya.writeUInt16LE(2, 32); // Bir örneğin bayt sayısı
dosya.writeUInt16LE(16, 34); // Örnek başına bit sayısı
dosya.write('data', 36);
dosya.writeUInt32LE(veriBoyutu, 40);

// --- Ses verisi: sinüs dalgası ---
for (let i = 0; i < ornekSayisi; i++) {
  const zaman = i / ornekHizi; // Bu örneğin saniye cinsinden zamanı
  const deger = Math.sin(2 * Math.PI * frekans * zaman) * sesSeviyesi; // -1 ile 1 arası
  dosya.writeInt16LE(Math.round(deger * 32767), 44 + i * 2); // 16 bitlik sayıya çevir
}

// --- Dosyayı kaydet ---
const hedefKlasor = path.join(__dirname, '..', 'assets', 'sesler');
fs.mkdirSync(hedefKlasor, { recursive: true });
const hedefDosya = path.join(hedefKlasor, 'duduk.wav');
fs.writeFileSync(hedefDosya, dosya);

console.log('Düdük sesi oluşturuldu:', hedefDosya, '(' + dosya.length + ' bayt)');
