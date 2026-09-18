# -*- coding: utf-8 -*-
import json
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter
from openpyxl.worksheet.datavalidation import DataValidation

ST = json.load(open("state.json", encoding="utf-8"))
S=[{"tr":sec["title"]["tr"],"g":[{"tr":g["title"]["tr"],"i":[{"n":it["name"]["tr"],"ne":it["name"]["en"],"p":it["p"],"ing":it["ing"]["tr"],"inge":it["ing"]["en"],"a":it["a"],"asrc":it.get("asrc"),"aunk":it.get("aunk"),"kcal":it.get("kcal"),"nut":it.get("nut"),"sos":it.get("sos"),"alc":it.get("alc",0),"pork":it.get("pork",0),"sec_id":sec["id"]} for it in g["i"]]} for g in sec["g"]]} for sec in ST["sections"]]
ALG = {"G":"Gluten","M":"Süt","Y":"Yumurta","B":"Balık","K":"Kabuklu deniz ürünleri",
       "S":"Soya","SS":"Susam","N":"Sert kabuklu yemişler","F":"Yer fıstığı",
       "H":"Hardal","C":"Kereviz","SO":"Sülfit","MO":"Yumuşakçalar","L":"Acı bakla"}
CODES = list(ALG.keys())

INK="FF21201A"; MOSS="FF1A1814"; BRASS="FF8A6A1F"
wb = Workbook(); ws = wb.active; ws.title = "Menü"

hdr = ["Bölüm","Grup","Ürün (TR)","Ürün (EN)","Fiyat ₺","İçindekiler (TR)","İçindekiler (EN)"] + CODES + ["Enerji kcal (porsiyon)","Protein g","Yağ g","Karbonhidrat g","Alkol (X)","Domuz türevi (X)","Sos kartı","Alerjen kaynağı (otomatik)","Notunuz"]
ws.append(hdr)

thin = Side(style="thin", color="FFD5D2C4")
for c in range(1, len(hdr)+1):
    cell = ws.cell(row=1, column=c)
    cell.font = Font(name="Arial", bold=True, size=10, color="FFFFFFFF")
    cell.fill = PatternFill("solid", fgColor=MOSS)
    cell.alignment = Alignment(vertical="center", horizontal="center", wrap_text=True)
ws.row_dimensions[1].height = 40

r = 2
for s in S:
    for g in s["g"]:
        for it in g["i"]:
            row = [s["tr"], g["tr"], it["n"], it["ne"], it["p"],
                   it.get("ing",""), it.get("inge","")]
            a = set(it.get("a", []))
            row += ["X" if c in a else "" for c in CODES]
            nu = it.get("nut") or {}
            row += [("" if it.get("kcal") is None else it["kcal"]), nu.get("p",""), nu.get("f",""), nu.get("c",""), ("X" if it.get("alc") else ""), ("X" if it.get("pork") else ""), ", ".join(it.get("sos") or []),
                    ("içerik günlük değişir" if it.get("aunk") else " · ".join(f"{c}: " + ", ".join(v["tr"]) for c, v in (it.get("asrc") or {}).items())), ""]
            ws.append(row)
            for c in range(1, len(hdr)+1):
                cell = ws.cell(row=r, column=c)
                cell.font = Font(name="Arial", size=10)
                cell.border = Border(bottom=thin)
                cell.alignment = Alignment(vertical="top", wrap_text=(c in (6,7)))
            ws.cell(row=r, column=5).number_format = '#,##0'
            ws.cell(row=r, column=5).font = Font(name="Arial", size=10, bold=True, color=BRASS)
            ws.cell(row=r, column=5).alignment = Alignment(vertical="top", horizontal="right")
            for c in range(8, 8+len(CODES)):
                cell = ws.cell(row=r, column=c)
                cell.alignment = Alignment(vertical="center", horizontal="center")
                cell.font = Font(name="Arial", size=10, bold=True, color=BRASS)
                cell.fill = PatternFill("solid", fgColor="FFFFF9E8")
            for c in range(8+len(CODES), len(hdr)+1):
                cell = ws.cell(row=r, column=c)
                cell.fill = PatternFill("solid", fgColor="FFFFFFCC")
                cell.alignment = Alignment(vertical="center", horizontal="center" if c < len(hdr) else "left")
            for c in range(8+len(CODES), 12+len(CODES)):
                ws.cell(row=r, column=c).font = Font(name="Arial", size=10, bold=(c==8+len(CODES)), color=BRASS)
            r += 1
last = r-1

widths = [15,24,32,32,9,52,52] + [5]*len(CODES) + [12,9,8,13,9,11,16,46,26]
for i,w in enumerate(widths, start=1):
    ws.column_dimensions[get_column_letter(i)].width = w
ws.freeze_panes = "C2"
ws.auto_filter.ref = f"A1:{get_column_letter(len(hdr))}{last}"

dv = DataValidation(type="list", formula1='"X,"', allow_blank=True, showDropDown=False)
ws.add_data_validation(dv)
dv.add(f"H2:{get_column_letter(7+len(CODES))}{last}")
dv.add(f"{get_column_letter(12+len(CODES))}2:{get_column_letter(13+len(CODES))}{last}")
for _r in range(2, last+1):
    ws.cell(row=_r, column=len(hdr)-1).alignment = Alignment(vertical="top", wrap_text=True)

# --- Nasıl kullanılır ---
ws2 = wb.create_sheet("Nasıl kullanılır")
lines = [
 ("KULE CAFE — Alerjen, içerik ve enerji kontrol listesi", True),
 ("", False),
 ("İçindekiler: mutfağın 16.09.2026 tarihli düzeltmeleri işlenmiştir.", False),
 ("Alerjen işaretleri ve BESİN DEĞERLERİ (kcal, protein, yağ, karbonhidrat) TASLAKTIR: standart tarif ve porsiyon", False),
 ("büyüklüklerinden hesaplanmış yaklaşık değerlerdir. Mevzuata uygun beyan için mutfak", False),
 ("gramajlarıyla bir gıda mühendisi / diyetisyen tarafından doğrulanmalıdır.", False),
 ("Alkol ve Domuz türevi sütunları: ürün içeriyorsa X yazın (şu an hepsi boş = içermez).", False),
 ("Sos kartı sütunu: o üründe hangi hazır sosun ayrı kartı gösteriliyor (sweetchili / cafedeparis / demiglace / bbq / kori).", False),
 ("", False),
 ("Nasıl düzeltirsiniz:", True),
 ("1. \"Menü\" sekmesinde her satır bir üründür.", False),
 ("2. Alerjen sütunlarında (G, M, Y, ...) ürün o alerjeni içeriyorsa hücreye X yazın,", False),
 ("   içermiyorsa hücreyi boş bırakın. Sarı hücreler doldurulacak alanlardır.", False),
 ("3. İçindekiler sütunlarını serbestçe düzeltebilir, boş olanları doldurabilirsiniz.", False),
 ("4. Enerji / protein / yağ / karbonhidrat sütunlarına porsiyon başına değerleri yazın; Alkol / Domuz türevi sütunlarına içeriyorsa X.", False),
 ("5. Fiyat değişikliklerini de bu dosyada yapabilirsiniz.", False),
 ("6. Dosyayı bana geri gönderin; menüyü güncellerim. QR kod değişmez.", False),
 ("", False),
 ("Örnek satır:", True),
 ("Bölüm: Tatlılar | Grup: Tatlılar | Ürün: Künefe | Fiyat: 420", False),
 ("İçindekiler: Kadayıf, dil peyniri, tereyağı, şerbet, Antep fıstığı", False),
 ("G: X   M: X   N: X   (gluten, süt ve sert kabuklu yemiş içerir)", False),
 ("", False),
 ("Alerjen kodları:", True),
]
for code, name in ALG.items():
    lines.append((f"   {code}  =  {name}", False))
for i,(txt,bold) in enumerate(lines, start=1):
    c = ws2.cell(row=i, column=1, value=txt)
    c.font = Font(name="Arial", size=11, bold=bold, color=MOSS if bold else INK)
ws2.column_dimensions["A"].width = 95


# --- Mutfak teyidi gereken maddeler ---
ws3 = wb.create_sheet("Teyit gerekenler")
rows = [
 ("MUTFAK / TEDARİKÇİ TEYİDİ GEREKEN ALERJEN MADDELERİ", True, ""),
 ("", False, ""),
 ("Alerjenler ürünlerin içindekiler listesinden kural tabanlı çıkarılmıştır. Aşağıdaki maddeler", False, ""),
 ("sektör normuna göre işaretlendi; ürün etiketinden doğrulanmalı. Farklıysa bana bildirin.", False, ""),
 ("", False, ""),
 ("MALZEME / ÜRÜN", True, "DURUM — NE TEYİT EDİLMELİ"),
 ("Soya sosu", False, "GLUTEN olarak işaretlendi (soya sosları genelde buğday içerir). Glutensiz tamari kullanılıyorsa kaldırılır."),
 ("Sosis", False, "GLUTEN olarak işaretlendi (nişasta/galeta unu). Etiketi kontrol edin."),
 ("Köri sos", False, "ÇÖZÜLDÜ — üretici etiketi alındı (karabiber, kişniş, kimyon, çemen, sarımsak, zerdeçal, tuz, kırmızı tatlı biber, tarçın): beyan edilen alerjen yok. Tabaktaki sos krema ile hazırlandığı için SÜT ürünün kendi içindekilerinden geliyor."),
 ("Köfte (tüm köfteler)", False, "Harç yazıldı: sarımsak, galeta unu, karabiber, kimyon, pul biber → GLUTEN. Harçta YUMURTA da varsa bildirin, eklenir. Burger köftesine ayrıca uygulanmadı — aynı harç mı?"),
 ("Sweet Chili Kule Topları", False, "ÇÖZÜLDÜ — gerçek kaplama malzemeleri yazıldı (süt, un, soya sosu, Cajun baharatı, galeta unu, pane): GLUTEN, SÜT ve SOYA artık içindekilerden türüyor."),
 ("Soğan halkası", False, "Sadece GLUTEN işaretli. Kaplamasında yumurta varsa YUMURTA eklenmeli."),
 ("Fettuccine / noodle", False, "Sadece GLUTEN işaretli. Yumurtalı makarna/noodle kullanılıyorsa YUMURTA eklenmeli."),
 ("Cheesecake'ler, Cedric tatlıları", False, "Yumurta işaretlenmedi (içindekilerde yok). Fırınlanan/yumurtalı tarif varsa YUMURTA eklenmeli."),
 ("Barbekü sos", False, "ÇÖZÜLDÜ — üretici etiketi alındı: renklendirici (amonyak karamel) GLUTEN içeriyor; iz miktarda süt, yumurta, hardal, kereviz uyarısı sos kartında gösteriliyor. Domuz türevi yok."),
 ("Cajun baharatı", False, "Alerjen işaretlenmedi. Baharat karışımları HARDAL / KEREVİZ içerebilir — etiketi kontrol edin."),
 ("Acı sos", False, "Alerjen işaretlenmedi. Etiketi kontrol edin."),
 ("Turşu", False, "SÜLFİT işaretlenmedi. Hazır turşu kullanılıyorsa etiketinde sülfit olabilir."),
 ("Jambon (serpme kahvaltı)", False, "DOMUZ TÜREVİ beyanı 'içermez' olarak duruyor. Hindi/dana jambon ise doğru; domuz jambonu ise beyan değişmeli."),
 ("Demi Glace et sosu", False, "ÇÖZÜLDÜ — Mantar Soslu Bonfile'nin mantar sosunda kullanılıyor (GLUTEN, SÜT, KEREVİZ). Başka yemekte de kullanılıyorsa bildirin."),
 ("Susamlı burger ekmeği / lavaş", False, "İçindekiler listesine eklendi (gluten + susam kaynağı). Farklı ekmek kullanılıyorsa bildirin."),
 ("", False, ""),
 ("BESİN DEĞERLERİ", True, "Tüm kcal / protein / yağ / karbonhidrat değerleri TAHMİNDİR — diyetisyen doğrulaması gerekir."),
]
for i, (a, bold, c) in enumerate(rows, start=1):
    c1 = ws3.cell(row=i, column=1, value=a); c1.font = Font(name="Arial", size=11, bold=bold, color=MOSS if bold else INK)
    c1.alignment = Alignment(vertical="top")
    c2 = ws3.cell(row=i, column=2, value=c); c2.font = Font(name="Arial", size=11, bold=bold, color=MOSS if bold else INK)
    c2.alignment = Alignment(vertical="top", wrap_text=True)
ws3.column_dimensions["A"].width = 34; ws3.column_dimensions["B"].width = 95

wb.save("KULE-alerjen-kontrol.xlsx")
print("satır:", last-1, "| sütun:", len(hdr))
