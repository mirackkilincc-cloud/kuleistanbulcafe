# -*- coding: utf-8 -*-
"""fotograflar/*.jpg -> photos.json (data URI) + photo-size.json (gerçek en/boy).
Kullanım: python3 fotolar.py   (kaynak/ içinde çalıştırılır)"""
import base64, glob, json, os
from PIL import Image
SRC = "../fotograflar"
photos, sizes, tot = {}, {}, 0
for f in sorted(glob.glob(os.path.join(SRC, "*.jpg"))):
    key = os.path.splitext(os.path.basename(f))[0]
    b = open(f, "rb").read(); tot += len(b)
    photos[key] = "data:image/jpeg;base64," + base64.b64encode(b).decode()
    sizes[key] = list(Image.open(f).size)
json.dump(photos, open("photos.json", "w", encoding="utf8"), ensure_ascii=False)
json.dump(sizes, open("photo-size.json", "w", encoding="utf8"), ensure_ascii=False, indent=0)
print("photos.json: %d fotoğraf, %.1f MB ham -> %.1f MB data URI"
      % (len(photos), tot/1048576, tot*4/3/1048576))
