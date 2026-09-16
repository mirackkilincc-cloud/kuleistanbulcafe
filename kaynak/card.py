# -*- coding: utf-8 -*-
# KULE İstanbul Cafe — QR kod (kule-qr.png) + A6 masa kartı (kule-masa-karti.pdf)
from PIL import Image, ImageDraw, ImageFont
import cv2, numpy as np, base64, io, sys

URL = sys.argv[1] if len(sys.argv) > 1 else "https://kuleistanbulcafe.vercel.app"

p = cv2.QRCodeEncoder_Params()
p.correction_level = cv2.QRCodeEncoder_CORRECT_LEVEL_Q
grid = (np.array(cv2.QRCodeEncoder_create(p).encode(URL)) == 0).astype(int)
n = len(grid)
det = cv2.QRCodeDetector()

def draw(g, module, quiet=4, fg=(0,0,0), bg=(255,255,255)):
    k = len(g); side = (k + quiet*2) * module
    im = Image.new("RGB", (side, side), bg); d = ImageDraw.Draw(im)
    for r in range(k):
        for c in range(k):
            if g[r][c]:
                x = (c+quiet)*module; y = (r+quiet)*module
                d.rectangle([x, y, x+module-1, y+module-1], fill=fg)
    return im

draw(grid, 40).save("../kule-qr.png")

MM = 300/25.4
W, H = int(105*MM), int(148*MM)
NIGHT=(15,14,12); GOLD=(212,182,90); GOLD2=(176,141,60); CREAM=(243,237,224); MUTED=(160,150,125)
GF = "/usr/share/fonts/truetype/google-fonts/"
DV = "/usr/share/fonts/truetype/dejavu/"
serif_i = ImageFont.truetype(GF+"Lora-Italic-Variable.ttf", 40)
sans_b  = ImageFont.truetype(GF+"Poppins-Bold.ttf", 34)
small   = ImageFont.truetype(GF+"Poppins-Regular.ttf", 22)

card = Image.new("RGB", (W, H), NIGHT)
d = ImageDraw.Draw(card); cx = W//2

# ince altın çerçeve
m = 46
d.rectangle([m, m, W-m, H-m], outline=GOLD2, width=3)
d.rectangle([m+10, m+10, W-m-10, H-m-10], outline=GOLD2, width=1)

def tracked(dr, cx, y, text, font, fill, track):
    ws = [dr.textlength(ch, font=font) for ch in text]
    x = cx - (sum(ws) + track*(len(text)-1))/2
    for ch, w in zip(text, ws):
        dr.text((x, y), ch, font=font, fill=fill); x += w + track
def centered(dr, cx, y, text, font, fill):
    dr.text((cx - dr.textlength(text, font=font)/2, y), text, font=font, fill=fill)

# amblem (PSD'den, gerçek renkleriyle)
em = Image.open("../kule-amblem.png").convert("RGBA")
es = 430; em = em.resize((es, es), Image.LANCZOS)
# altın hale
glow = Image.new("RGBA", (W, H), (0,0,0,0)); gd = ImageDraw.Draw(glow)
gd.ellipse([cx-es//2-70, 80-70, cx+es//2+70, 80+es+70], fill=(212,182,90,70))
from PIL import ImageFilter
glow = glow.filter(ImageFilter.GaussianBlur(60))
card.paste(glow, (0,0), glow)
card.paste(em, (cx - es//2, 80), em)

ly = 80 + es + 36
d.line([(cx-120, ly), (cx-24, ly)], fill=GOLD, width=2)
d.line([(cx+24, ly), (cx+120, ly)], fill=GOLD, width=2)
d.ellipse([cx-6, ly-6, cx+6, ly+6], fill=GOLD)

qsize = 520; qy = ly + 40
qim = draw(grid, max(1, qsize//(n+8)), quiet=4).resize((qsize, qsize), Image.NEAREST)
d.rounded_rectangle([cx-qsize//2-26, qy-26, cx+qsize//2+26, qy+qsize+26], radius=14, fill=(255,255,255))
card.paste(qim, (cx-qsize//2, qy))

y = qy + qsize + 48
tracked(d, cx, y, "MENÜ  ·  MENU", sans_b, GOLD, 12)
centered(d, cx, y+56, "Kamerayı QR koda tutun", serif_i, CREAM)
centered(d, cx, y+100, "Point your camera at the QR code", serif_i, CREAM)

# yazı logosu (beyaz + altın), altta küçük
lg = Image.open("../kule-logo.png").convert("RGBA")
lw = 220; lh = round(lg.height * lw / lg.width)
lg = lg.resize((lw, lh), Image.LANCZOS)
card.paste(lg, (cx - lw//2, y+166), lg)
print('logo alt:', y+166+lh)
tiny = ImageFont.truetype(GF+"Poppins-Regular.ttf", 17)
centered(d, cx, H-200, "İçerik, alerjen ve enerji (kcal) bilgilerine karekod ile ulaşabilirsiniz.", tiny, MUTED)
centered(d, cx, H-174, "Karekod kullanamayan misafirlerimize bilgiler talep halinde ayrıca sunulur.", tiny, MUTED)
tracked(d, cx, H-118, "TÜRKÇE  ·  ENGLISH  ·  ARABIC", small, MUTED, 8)

card.save("../kule-masa-karti.pdf", "PDF", resolution=300.0)
card.resize((W//3, H//3), Image.LANCZOS).save("card-preview.png")

crop = card.crop((cx-qsize//2-28, qy-28, cx+qsize//2+28, qy+qsize+28))
t,_,_ = det.detectAndDecode(cv2.cvtColor(np.array(crop), cv2.COLOR_RGB2GRAY))
print("kart QR:", "OK" if t == URL else "HATA: "+t)
t2,_,_ = det.detectAndDecode(cv2.imread("../kule-qr.png"))
print("png QR:", "OK" if t2 == URL else "HATA")
