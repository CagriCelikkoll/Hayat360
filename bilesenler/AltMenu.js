// Bu dosya ekranın altındaki 5 sekmeli menüyü çizer.
// Seçili olan sekme, referans fotoğraflarındaki gibi renkli bir "hap" (yuvarlak köşeli kutu) içinde gösterilir.
// expo-router bu bileşene hangi sekmenin seçili olduğunu (state), sekmelerin ayarlarını (descriptors),
// "dokunuldu" haberi gönderme aracını (emitter) ve sekme değiştirme aracını (navigateToTab) verir. Hapın rengi bir ekrandan değiştirilebilir (araclar/hapRengi.js).

import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { renkler, yaziBoyutlari, bosluklar, koseler } from '../araclar/tema';

// Her sekmenin dosya adı -> ekranda görünecek yazı ve ikon
const sekmeBilgileri = {
  '(anasayfa)': { yazi: 'Ana Sayfa', ikon: 'home' }, // Ana Sayfa artık kendi klasöründe
  rehber: { yazi: 'Rehber', ikon: 'book-open' },
  acil: { yazi: 'Acil Durum', ikon: 'alert-triangle' },
  hazirlik: { yazi: 'Hazırlık Listesi', ikon: 'check-square' },
  profil: { yazi: 'Profil', ikon: 'user' },
};

export default function AltMenu({ state, descriptors, emitter, navigateToTab }) {
  // Telefonun altındaki çentik/çubuk alanına yazı taşmasın diye boşluk payı
  const kenarBosluklari = useSafeAreaInsets();

  return (
    <View style={[stiller.menu, { paddingBottom: kenarBosluklari.bottom + bosluklar.kucuk }]}>
      {state.routes.map((sekme, sira) => {
        const bilgi = sekmeBilgileri[sekme.name];
        const seciliMi = state.index === sira; // Bu sekme şu an açık mı?

        // Seçili sekmenin yazısı ve ikonu beyaz, diğerleri soluk renkte
        const yaziRengi = seciliMi ? renkler.yazi : renkler.pasifIkon;

        // Hapın rengi: bir ekran özel renk verdiyse (ör. senaryo ekranı) o renk, yoksa varsayılan vurgu rengi
        const ozelRenk = descriptors[sekme.key].options.hapRengi;
        const hapRengi = ozelRenk ? ozelRenk : renkler.vurgu;

        // Sekmeye dokunulunca o ekrana geç
        function sekmeyeDokun() {
          // Önce "sekmeye dokunuldu" haberini gönderiyoruz. Böylece zaten açık olan
          // Acil Durum sekmesine tekrar dokunulursa senaryo ekranı kapanıp listeye dönülür.
          const haber = emitter.emit({ type: 'tabPress', target: sekme.key, canPreventDefault: true });

          if (!seciliMi && !haber.defaultPrevented) {
            navigateToTab(sekme.key); // O sekmenin ekranını aç
          }
        }

        return (
          <Pressable key={sekme.key} onPress={sekmeyeDokun} style={stiller.dugme}>
            {/* Seçiliyse arkasına renkli hap şekli koyuyoruz */}
            <View style={[stiller.hap, seciliMi && { backgroundColor: hapRengi }]}>
              <Feather name={bilgi.ikon} size={26} color={yaziRengi} />
              <Text style={[stiller.yazi, { color: yaziRengi }]} numberOfLines={1}>
                {bilgi.yazi}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}

const stiller = StyleSheet.create({
  menu: {
    flexDirection: 'row', // Sekmeler yan yana dizilsin
    backgroundColor: renkler.altMenu,
    borderTopWidth: 1,
    borderTopColor: renkler.kartKenari,
    paddingTop: bosluklar.kucuk,
    paddingHorizontal: bosluklar.cokKucuk,
  },
  dugme: {
    flex: 1, // 5 sekme eşit genişlikte olsun
    alignItems: 'center',
  },
  hap: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: bosluklar.kucuk,
    paddingHorizontal: bosluklar.kucuk,
    borderRadius: koseler.hap,
    width: '100%',
  },
  yazi: {
    fontSize: yaziBoyutlari.kucuk,
    marginTop: bosluklar.cokKucuk,
  },
});
