# KULE İstanbul Cafe — QR Menü Yazılımı

Bu klasör menünün **kaynak kodudur**. Menüyü kullanmak için buna ihtiyacın yok
(yönetici panelinden düzenleyebilirsin) — burası, sıfırdan yeniden üretmek veya
başka birine devretmek istediğinde lazım olur.

## Ne nerede

| Dosya | Ne işe yarar |
|---|---|
| `kule-data.js` | Menünün ham verisi: 9 bölüm, 173 ürün. Her ürün tek satır: TR/EN/AR ad, fiyat, TR/EN/AR içindekiler, alerjen kodları, ikon, fotoğraf anahtarı. |
| `photos.json` | Basılı menüden kesilen 39 ürün fotoğrafı (data URI). Orijinalleri `../fotograflar/` klasöründe. |
| `icons.js` | 37 adet çizgi illüstrasyon (SVG). Fotoğrafı olmayan ürünlerde görünür. |
| `page.css` | Sayfanın tüm stili. `:root` paleti aydınlık zemin + siyah–altındır; sondaki "KULE marka katmanı" bloğu bileşenleri buna göre boyar. Geniş ekranda (≥760px) kategori çubuğu satırlara sarılır, araçlar sağa yaslanır. |
| `page.js` | Sayfanın tüm davranışı: dil değiştirme, arama, filtre, açılır detay, yönetici paneli, kendi kendini yayınlama. |
| `build.js` | Hepsini birleştirip `menu.html` (Claude artifact) ve `site/index.html` (bağımsız site) üretir. |
| `all.js` | build + sözdizimi kontrolü. |
| `social.json` | WhatsApp / Instagram / Google Maps logoları (data URI). |
| `emblem.b64`, `emblem-mime.txt` | Yuvarlak kule amblemi (PSD'den, WebP) — üst bölümde. Orijinali `../kule-amblem.png`. |
| `logo-full.b64` | Yazı logosu, gerçek renkleriyle (beyaz + altın). |
| `logo-mask.b64`, `logo-size.txt` | Yazı logosu alfa maskesi — alt bilgide marka altınıyla basılır. |
| `card.py` | A6 masa kartı PDF'i + QR kod üretir. `python3 card.py <MENÜ ADRESİ>` |
| `sheet.py` | Alerjen/içerik kontrol Excel dosyasını üretir (`state.json`'dan). |
| `state.json` | Sayfaya gömülen nihai veri (build çıktısı). |

## Yeniden üretmek

Node.js 18+ ve Python 3 gerekir.

```bash
cd kaynak
node all.js          # kule-data.js -> menu.html + site/index.html + state.json
python3 card.py      # kule-masa-karti.pdf + kule-qr.png   (pillow, opencv-python gerekir)
python3 sheet.py     # KULE-alerjen-kontrol.xlsx           (openpyxl gerekir)
```

## Sayfa nasıl çalışıyor

Sayfa **tek bir HTML dosyasıdır**; sunucu, veritabanı, dış bağlantı yoktur.
İçinde `STATE` (menü verisi) ve `SHELL` (sayfanın kendi şablonu) vardır.
Yönetici panelinde **Kaydet ve Yayınla** dediğinde sayfa güncel veriyle yeni bir
HTML üretir ve `claude.use("artifact").publish(html)` ile kendini yeniden yayınlar.
QR kod hiç değişmez.

Statik bir sunucuda (Netlify/Vercel/GitHub Pages) `publish` çalışmaz; panel bunun
yerine güncel `index.html`'i indirtir, sen de onu tekrar yüklersin.

## Yönetici paneline giriş (üç yol)

1. Arama kutusuna **`yönetici`** yaz (İngilizce `admin`, Arapça `مدير` de olur)
2. Adresin sonuna **`#admin`** ekle
3. Üstteki yuvarlak ambleme ~1 saniye basılı tut

Varsayılan PIN **7161** — Ayarlar sekmesinden değiştir.

## Veri sözlüğü

**Alerjen kodları:** G gluten · M süt · Y yumurta · B balık · K kabuklu deniz
ürünleri · S soya · SS susam · N sert kabuklu yemişler · F yer fıstığı ·
H hardal · C kereviz · SO sülfit · MO yumuşakçalar · L acı bakla

**Ürün kimliği:** `<bölüm>-<grup sırası>-<ürün sırası>` — örn. `et-1-1` =
Kırmızı Etler / Izgaralar / Karışık Izgara.

**Bölüm renkleri:** `--t1..--t9` / `--k1..--k9` (page.css), ürün görsellerinin zemininde.

## Bilinmesi gerekenler

- **Alerjen ve içindekiler bilgileri taslaktır.** Basılı menüdeki açıklamalardan ve
  standart tariflerden çıkarıldı. Mutfak `KULE-alerjen-kontrol.xlsx` üzerinden kontrol etmeli.
- Google Maps bağlantısı adres aramasıyla üretildi; işletmenin kısa "share.google" linki
  varsa panelden **Google bağlantısı** alanına yapıştır.
- WhatsApp numarası cep hattı (0541 551 71 61). Farklıysa panelden değiştir.
- Fotoğraflar sayfaya gömülü (data URI). Sayfa sınırı 16 MB; şu an ~2.9 MB.
- Çubuk yüksekliği JS ile ölçülüp `--barh` değişkenine yazılır; bölümlerin `scroll-margin-top`'u buna bağlıdır
  (`--stick` sabit kalır — ikisini birbirine bağlamak sonsuz büyüme döngüsü yaratır).
- `body`'ye `overflow-x:hidden` verme: yapışkan (sticky) çubuğu bozar; `html` üzerindeki yeterli.
- Yazı tipleri Google Fonts'tan çekilir (Cormorant Garamond, Montserrat, Amiri, Tajawal).
  İnternet yoksa sistem yazı tiplerine düşer, sayfa yine çalışır.
