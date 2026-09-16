#!/bin/bash
# KULE İstanbul Cafe menüsünü yayınlar (GitHub'a gönderir; Vercel 1-2 dakika içinde kendiliğinden yayına alır).
# Bu dosyaya çift tıklayın — Terminal açılır ve yayınlama başlar.

cd "$(dirname "$0")" || exit 1

echo "──────────────────────────────────────────────"
echo "  KULE İSTANBUL CAFE MENÜ — YAYINLAMA"
echo "──────────────────────────────────────────────"
echo

if [ ! -f index.html ]; then
  echo "HATA: Bu klasörde index.html yok."
  echo "Klasör: $(pwd)"
  echo
  read -n 1 -s -r -p "Kapatmak için bir tuşa basın..."
  exit 1
fi

BOYUT=$(ls -lh index.html | awk '{print $5}')
TARIH=$(date -r index.html "+%d.%m.%Y %H:%M")
echo "Yüklenecek dosya : index.html  ($BOYUT, $TARIH)"
echo

# kule-menu-site kopyasını da güncel tut
mkdir -p kule-menu-site && cp -f index.html kule-menu-site/index.html

echo "▸ Uzak sunucudaki değişiklikler alınıyor…"
git pull --rebase --autostash origin main 2>&1 | sed 's/^/   /'
echo
echo "▸ Değişiklikler kaydediliyor…"
git add -A . 2>&1 | sed 's/^/   /'
git commit -m "Menü güncelleme $(date '+%d.%m.%Y %H:%M')" 2>&1 | sed 's/^/   /'
echo
echo "▸ GitHub'a gönderiliyor…"
git push origin main 2>&1 | sed 's/^/   /'
KOD=${PIPESTATUS[0]}

echo
if [ $KOD -eq 0 ]; then
  echo "✅ GÖNDERİLDİ. Vercel 1-2 dakika içinde yayına alır:"
  echo "   https://kuleistanbulcafe.vercel.app"
  echo "   Kontrol için menüyü telefonda açıp en alttaki 'Menü sürümü' tarihine bakın."
else
  echo "❌ Gönderilemedi (hata kodu $KOD). Yukarıdaki mesajı Claude'a iletin."
fi
echo
read -n 1 -s -r -p "Kapatmak için bir tuşa basın..."
