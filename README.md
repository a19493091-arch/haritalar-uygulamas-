# haritalar-uygulamas-
OmniFlow Harita uygulaması - akıllı yol tarifi ve navigasyon

## Özellikler
- Tam ekran harita: **Hibrit** (uydu + yollar ve isimler), **Uydu** ve **Standart** görünüm
- Sol üstte bulunduğun yerin anlık hava durumu
- Sağda yuvarlak düğmeler: **3D/2D**, harita türü, **Konumum** (pusula yönüyle mavi nokta)
- Alttan kaydırılan panel: arama (sesle arama destekli), profil/ayarlar
- **Yerler:** Ev, İş ve kayıtlı yerler; tek dokunuşla yol tarifi
- **Son Arananlar**
- Haritada basılı tutarak işaret bırakma
- Tam adres: Ülke, İl, İlçe, Mahalle/Köy, Cadde/Sokak, Posta kodu (arama sonuçları, yer kartı, son arananlar ve "Konumun" satırı)
- Yol tarifi: durak ekleme, araç / otobüs / metrobüs / bisiklet / yaya süreleri, Türkçe adım adım tarif
- Navigasyon: sonraki dönüşe kalan mesafe, varış saati, kalan süre ve km; rotadan çıkınca yeniden hesaplama
- 3D modda binalar OpenStreetMap'teki yükseklik ve kat bilgisine göre çizilir
- Telefon, tablet, iPhone, Surface Duo (çift ekran) ve bilgisayar uyumlu; ana ekrana eklenebilir (PWA)

## Kullanılan servisler (ücretsiz, anahtar gerektirmez)
- Harita: [OpenFreeMap](https://openfreemap.org) vektör karoları, [MapLibre GL JS](https://maplibre.org) (lib/ klasöründe)
- Rota: [routing.openstreetmap.de](https://routing.openstreetmap.de) (OSRM)
- Uydu görüntüsü: Esri World Imagery
- Adres arama: [Nominatim](https://nominatim.org)
- Hava durumu: [Open-Meteo](https://open-meteo.com)
- Veriler © OpenStreetMap katkıcıları

## Yayınlama (GitHub Pages)
Settings → Pages → Source: "Deploy from a branch" → Branch: `main` / `(root)` → Save.
Birkaç dakika sonra uygulama `https://a19493091-arch.github.io/haritalar-uygulamas-/` adresinde açılır.
