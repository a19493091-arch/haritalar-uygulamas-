# haritalar-uygulamas-
OmniFlow Harita uygulaması - akıllı yol tarifi ve navigasyon

## Özellikler
- Nereden / Nereye arama kutusu (otomatik öneri), haritaya tıklayarak nokta seçme, "Konumum"
- Durak ekleme / silme, gidiş–dönüş ters çevirme
- Araç, otobüs, metrobüs, bisiklet ve yaya süreleri (otobüs ve metrobüs süreleri tahminidir)
- Toplam mesafe (km), süre (saat/dk) ve varış saati
- Türkçe adım adım yol tarifi
- Navigasyon: sonraki dönüşe kalan metre, toplam kalan km, kalan süre (GPS veya simülasyon)
- **2D / 3D görünüm**: 3D modda binalar OpenStreetMap'teki yükseklik ve kat bilgisine göre çizilir, harita eğilip döndürülebilir
- Telefon, tablet, iPhone, Surface Duo (çift ekran) ve bilgisayar uyumlu; ana ekrana uygulama olarak eklenebilir (PWA)

## Kullanılan servisler (ücretsiz, anahtar gerektirmez)
- Harita: [OpenFreeMap](https://openfreemap.org) vektör karoları, [MapLibre GL JS](https://maplibre.org) (lib/ klasöründe)
- Rota: [routing.openstreetmap.de](https://routing.openstreetmap.de) (OSRM)
- Adres arama: [Nominatim](https://nominatim.org)
- Veriler © OpenStreetMap katkıcıları

## Yayınlama (GitHub Pages)
Settings → Pages → Source: "Deploy from a branch" → Branch: `main` / `(root)` → Save.
Birkaç dakika sonra uygulama `https://a19493091-arch.github.io/haritalar-uygulamas-/` adresinde açılır.
