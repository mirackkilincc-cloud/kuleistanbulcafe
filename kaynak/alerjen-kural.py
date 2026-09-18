# -*- coding: utf-8 -*-
"""KULE İstanbul Cafe — alerjen türetici.

Menüdeki HER malzeme ifadesi aşağıdaki tabloda sınıflandırılmıştır. Ürünün alerjenleri,
içindekiler listesindeki malzemelerden kural tabanlı çıkarılır; hangi malzemenin hangi
alerjeni doğurduğu da (üç dilde) kaydedilir ve menüde gösterilir.

Tabloda olmayan bir malzeme geçerse betik HATA verir — böylece yeni ürün eklendiğinde
alerjeni sessizce atlanmaz.

Alerjen kodları (TGK / AB Ek-II, 14 grup):
G gluten · K kabuklu deniz ürünleri · Y yumurta · B balık · F yer fıstığı · S soya
M süt · N sert kabuklu yemişler · C kereviz · H hardal · SS susam · SO sülfit
L acı bakla · MO yumuşakçalar
"""
import json, re, unicodedata

# ---------------------------------------------------------------- kural tablosu
# malzeme (küçük harf, miktarı atılmış)  ->  (alerjen kodları, İngilizce ad, Arapça ad)
R = {
 # --- tahıl / unlu ---
 "un":(["G"],"flour","دقيق"),
 "galeta unu":(["G"],"breadcrumbs","بقسماط"),
 "panko":(["G"],"panko","بانكو"),
 "pane":(["G"],"breading","خلطة تغليف"),
 "tost ekmeği":(["G"],"toast bread","خبز توست"),
 "susamlı burger ekmeği":(["G","SS"],"sesame burger bun","خبز برجر بالسمسم"),
 "kruton ekmek":(["G"],"croutons","خبز محمّص"),
 "sınırsız ekmek sepeti":(["G"],"bread basket","سلة خبز"),
 "lavaş":(["G"],"lavash","خبز لافاش"),
 "yufka":(["G"],"yufka pastry","عجينة يوفكا"),
 "çıtır yufka":(["G"],"crispy yufka","يوفكا مقرمشة"),
 "kalem böreği":(["G","M"],"cheese rolls","لفائف جبنة"),
 "sigara böreği":(["G","M"],"cheese rolls","لفائف جبنة"),
 "mozzarella stick":(["G","M"],"mozzarella sticks","أصابع موزاريلا"),
 "makarna":(["G"],"macaroni","معكرونة"),
 "spagetti":(["G"],"spaghetti","سباغيتي"),
 "penne":(["G"],"penne","بيني"),
 "fettuccine":(["G"],"fettuccine","فيتوتشيني"),
 "noodle":(["G"],"noodles","نودلز"),
 "bisküvi":(["G"],"biscuit","بسكويت"),
 "bisküvi tabanı":(["G","M"],"biscuit base","قاعدة بسكويت"),
 "kedidili bisküvi":(["G","Y"],"ladyfingers","بسكويت أصابع"),
 "lotus bisküvi":(["G","S"],"Lotus biscuit","بسكويت لوتس"),
 "oreo bisküvi":(["G","S"],"Oreo biscuit","بسكويت أوريو"),
 "karamelize bisküvi kreması":(["G","S"],"caramelised biscuit spread","كريمة بسكويت مكرمل"),
 "kakaolu kek":(["G","Y","M"],"cocoa sponge","كيك كاكاو"),
 "kat kat ballı kek":(["G","Y","M"],"layered honey cake","كيك بالعسل"),
 "linzer hamuru":(["G","Y","M","N"],"linzer pastry","عجينة لينزر"),
 "mısır unu":([],"corn flour","دقيق ذرة"),          # mısır — glutensiz
 # --- köfte / pane ürünleri (galeta unu–ekmek içi) ---
 "köfte":(["G"],"meatballs","كفتة"),
 "anne köfte":(["G"],"homestyle meatballs","كفتة بيتية"),
 "şişte köfte":(["G"],"skewered meatballs","كفتة بالسيخ"),
 "burger köftesi":(["G"],"beef patty","لحم برجر"),
 "çıtır tavuk":(["G","Y","M"],"crispy chicken","دجاج مقرمش"),
 "cajun baharatlı çıtır tavuk parçaları":(["G","Y","M"],"Cajun crispy chicken","دجاج كاجون مقرمش"),
 "panelenmiş tavuk":(["G","Y"],"breaded chicken","دجاج مغلّف"),
 "özel soslu tavuk":(["G","Y","M","S"],"chicken in special coating","دجاج بخلطة خاصة"),
 "cajun tavuk":(["G","Y","M","S"],"Cajun chicken","دجاج كاجون"),
 "soğan halkası":(["G"],"onion rings","حلقات بصل"),
 "sosis":(["G"],"sausage","نقانق"),                  # nişasta/galeta — mutfak teyidi
 "ızgara sosis":(["G"],"grilled sausage","نقانق مشوية"),
 # --- süt ürünleri ---
 "süt":(["M"],"milk","حليب"),
 "soğuk süt":(["M"],"cold milk","حليب بارد"),
 "süt köpüğü":(["M"],"milk foam","رغوة حليب"),
 "az süt köpüğü":(["M"],"milk foam","رغوة حليب"),
 "bol süt köpüğü":(["M"],"milk foam","رغوة حليب"),
 "süt reçeli":(["M"],"dulce de leche","مربى الحليب"),
 "krema":(["M"],"cream","كريمة"),
 "özel krema":(["M"],"cream","كريمة"),
 "çikolata krema":(["M","S"],"chocolate cream","كريمة شوكولاتة"),
 "limon kreması":(["M"],"lemon cream","كريمة ليمون"),
 "mango kreması":(["M"],"mango cream","كريمة مانجو"),
 "hindistan cevizi kreması":(["M"],"coconut cream","كريمة جوز الهند"),
 "antep fıstığı kreması":(["M","N"],"pistachio cream","كريمة فستق"),
 "tereyağı":(["M"],"butter","زبدة"),
 "kaymak":(["M"],"clotted cream","قشطة"),
 "özel kaymak sos":(["M"],"cream sauce","صوص القشطة"),
 "yoğurt":(["M"],"yoghurt","لبن"),
 "süzme yoğurt":(["M"],"strained yoghurt","لبن مصفّى"),
 "dondurma":(["M"],"ice cream","آيس كريم"),
 "beyaz peynir":(["M"],"white cheese","جبنة بيضاء"),
 "kaşar":(["M"],"kashar cheese","قشقوان"),
 "kaşar peyniri":(["M"],"kashar cheese","قشقوان"),
 "taze kaşar":(["M"],"fresh kashar","قشقوان طازج"),
 "çift kaşar peyniri":(["M"],"kashar cheese","قشقوان"),
 "cheddar":(["M"],"cheddar","شيدر"),
 "cheddar peyniri":(["M"],"cheddar","جبنة شيدر"),
 "cheddar sos":(["M"],"cheddar sauce","صوص شيدر"),
 "parmesan":(["M"],"parmesan","بارميزان"),
 "mascarpone":(["M"],"mascarpone","ماسكاربوني"),
 "krem peynir":(["M"],"cream cheese","جبنة كريمية"),
 "çeçil peyniri":(["M"],"chechil cheese","جبنة شيشيل"),
 "burgu peynir":(["M"],"braided cheese","جبنة مضفورة"),
 "lor peyniri":(["M"],"curd cheese","جبنة لور"),
 "dil peyniri":(["M"],"dil cheese","جبنة دل"),
 "kolot":(["M"],"kolot cheese","جبنة كولوت"),
 "patlıcan beğendi":(["M"],"aubergine purée","بيغندي باذنجان"),
 "mantar sos":(["M"],"mushroom sauce","صوص فطر"),
 "çikolata":(["M","S"],"chocolate","شوكولاتة"),
 "çikolata sosu":(["M","S"],"chocolate sauce","صوص شوكولاتة"),
 "beyaz çikolata":(["M","S"],"white chocolate","شوكولاتة بيضاء"),
 "karamel":(["M"],"caramel","كراميل"),
 "tuzlu karamel":(["M"],"salted caramel","كراميل مملّح"),
 "nutella":(["M","N","S"],"Nutella","نوتيلا"),
 # --- yumurta ---
 "yumurta":(["Y"],"egg","بيض"),
 "sahanda yumurta":(["Y"],"fried egg","بيض مقلي"),
 "menemen":(["Y"],"menemen (egg)","منمن (بيض)"),
 "mayonez":(["Y"],"mayonnaise","مايونيز"),
 "hamburger sosu":(["Y"],"burger sauce","صوص البرجر"),
 "özel kule sos":(["Y"],"special Kule sauce","صوص كوله الخاص"),
 "sezar sos":(["Y","B","H"],"Caesar dressing","صوص سيزر"),
 # --- balık ---
 "ançüez":(["B"],"anchovy","أنشوجة"),
 # --- soya / susam ---
 "soya sosu":(["S","G"],"soy sauce (contains wheat)","صلصة صويا (تحتوي على قمح)"),
 "soya sos":(["S","G"],"soy sauce (contains wheat)","صلصة صويا (تحتوي على قمح)"),
 "soya filizi":(["S"],"bean sprouts","براعم الصويا"),
 "susam":(["SS"],"sesame","سمسم"),
 "susam yağı":(["SS"],"sesame oil","زيت سمسم"),
 # --- sert kabuklu / yer fıstığı / hardal ---
 "fındık":(["N"],"hazelnut","بندق"),
 "yer fıstığı":(["F"],"peanut","فول سوداني"),
 "acuka":(["N"],"acuka (walnut)","أجوكا (جوز)"),
 "fesleğenli pesto sos":(["N","M"],"basil pesto","بيستو الريحان"),
 "hardal":(["H"],"mustard","خردل"),
 "ballı hardal sos":(["H"],"honey mustard dressing","صوص عسل وخردل"),
 "köri sos":(["H"],"curry sauce","صوص كاري"),        # köri karışımı hardal içerir — mutfak teyidi
 # --- birleşik soslar (alt malzemeleri ayrıca taranır) ---
 "schnitzel sosu":([],"schnitzel coating","خلطة الشنيتزل"),
 "özel sos":([],"special sauce","صوص خاص"),
 "sos":([],"sauce","صوص"),
 "domates sos":([],"tomato sauce","صلصة طماطم"),
 "sweet chili sos":([],"sweet chilli sauce","صوص سويت تشيلي"),
 "cafe de paris sos":(["G","M"],"Café de Paris sauce","صوص كافيه دو باري"),
 "barbekü sos":([],"BBQ sauce","صوص باربكيو"),
 "barbekü":([],"BBQ","باربكيو"),
 "acı sos":([],"hot sauce","صوص حار"),
 "frambuaz sos":([],"raspberry sauce","صوص توت"),
 # --- alerjen içermeyen malzemeler ---
}
# alerjensiz malzemeler (yalnızca kapsama güvencesi için listelenir)
NONE = """
kuzu pirzola|tavuk bonfile|et|tavuk|tavuk but|tavuk kanat|tavuk parçaları|tavuk göğsü|marine edilmiş tavuk göğsü|
jülyen et|jülyen tavuk|dana kıyma|antrikot|bonfile|et kavurma|sucuk|jambon|et ve tavuk|
domates|salatalık|soğan|sivri biber|biber|renkli biber|renkli biberler|kıvırcık|göbek salata|karışık yeşillik|taze yeşillikler|
mini salata|söğüş tabağı|patates|patates tabağı|patates eşliğinde|parmak patates eşliğinde|elma dilim patates eşliğinde|
patates ve sweet chili sos eşliğinde|pilav eşliğinde|pilav ve patates eşliğinde|domates ve salatalık eşliğinde|limon eşliğinde|
közlenmiş biber & domates|mantar|havuç|kabak|sarımsak|turşu|maydanoz|salça|zeytin salatası|siyah zeytin|siyah–yeşil zeytin|
kekik|taze kekik|pul biber|karabiber|tuz|şeker|şeker tercihe göre|şeker · sıcak servis edilir|az acı|kırmızı tatlı toz biber|
cajun baharatı|tarçın|tarçın şurubu|vanilya|vanilya şurubu|karamel şurubu|tuzlu karamel şurubu|çikolatalı kurabiye şurubu|
zeytinyağı|ayçiçek yağı|soda|su|soğuk su|sıcak su|buz|maden suyu|doğal kaynak suyu|gazlı içecek|şekersiz gazlı içecek|
limon aromalı gazlı içecek|portakal aromalı gazlı içecek|limon aromalı soğuk çay|şeftali aromalı soğuk çay|meyve aromalı maden suyu|
karışık meyve suyu|vişne suyu|şeftali suyu|karadut suyu|taze sıkılmış portakal|limon|lime|nane|taze nane|
espresso|çift shot espresso|kahve|çekirdek kahve|filtre kahve|türk kahvesi|çift porsiyon türk kahvesi|sıcak su|
demlenmiş siyah çay|yeşil çay yaprağı|adaçayı yaprağı|ihlamur çiçeği|kuşburnu|sınırsız çay|baharatlı çay konsantresi|
özel kule karışımı|salep|kakao|bal|reçel|mevsim meyveleri|elma|muz|çilek|karpuz|kavun|kivi|mango|vişne|frambuaz|böğürtlen|
yaban mersini|yaban mersini dolgusu|karadut|orman meyveleri|oryantal meyveler|tropikal meyveler|passion meyvesi|
kapari çiçeği|yumuşak dokulu iç|günlük değişir — servis ekibimize danışınız|kule'ye özel karışım — servis ekibimize danışınız|
mentol|şekerleme|çift elma aroması|üzüm aroması|karpuz aroması|çilek aroması|nane aroması|limon aroması|
fırınlanmış şeftali aroması|cappuccino aroması|kekik ve pul biber ile marine edilmiş|zeytinyağı ve pul biber ile marine edilmiş|
zeytinyağı ve pul biber ile marine edilmiş et|pul biber ile marine edilmiş|tatlı kırmızı toz biber ile marine edilmiş
"""
for t in [x.strip() for x in NONE.replace("\n","").split("|") if x.strip()]:
    R.setdefault(t, ([], t, t))

# Mutfak teyidi bekleyen EK alerjenler (ürün id -> {kod: kaynak TR|EN|AR})
EXTRA = {
 "ana-4-3": {"G":"çıtır kaplama|crispy coating|طبقة مقرمشة", "Y":"çıtır kaplama|crispy coating|طبقة مقرمشة"},  # Sweet Chili Kule Topları
}

QTY = re.compile(r"^\s*\d+([.,]\d+)?\s*(g|gr|adet|parça|kişilik|top|shot|porsiyon)?\s*")
def norm(tok):
    t = tok.lower().strip(" .")
    prev = None
    while prev != t:                      # "150 g et ve 150 g tavuk" gibi
        prev = t; t = QTY.sub("", t)
    return t.strip(" .")

def split(t):
    t = t.replace("(", ", ").replace(")", ", ").replace(";", ",").replace(" / ", ", ")
    return [x.strip(" .") for x in t.split(",") if x.strip(" .")]

def analyse(ing_tr):
    """-> {kod: [TR kaynak malzemeler]}, {kod: [EN]}, {kod: [AR]}"""
    src = {}
    for raw in split(ing_tr):
        t = norm(raw)
        if t.startswith("et ve "): t = "et"
        if t not in R:
            raise KeyError(t)
        codes, en, ar = R[t]
        for c in codes:
            d = src.setdefault(c, {"tr": [], "en": [], "ar": []})
            if t not in d["tr"]:
                d["tr"].append(t); d["en"].append(en); d["ar"].append(ar)
    return src

if __name__ == "__main__":
    st = json.load(open("state.json", encoding="utf8"))
    out, missing = {}, set()
    for s in st["sections"]:
        for g in s["g"]:
            for it in g["i"]:
                try:
                    src = analyse(it["ing"]["tr"])
                except KeyError as e:
                    missing.add(str(e)); continue
                for c, lab in EXTRA.get(it["id"], {}).items():
                    tr, en, ar = lab.split("|")
                    d = src.setdefault(c, {"tr": [], "en": [], "ar": []})
                    if tr not in d["tr"]:
                        d["tr"].append(tr); d["en"].append(en); d["ar"].append(ar)
                out[it["id"]] = {"ad": it["name"]["tr"], "a": sorted(src.keys()), "src": src}
    if missing:
        print("TABLODA OLMAYAN MALZEMELER (%d):" % len(missing))
        for m in sorted(missing): print("   -", m)
        raise SystemExit(1)
    open("alerjen.json", "w", encoding="utf8").write(json.dumps(out, ensure_ascii=False, indent=0))
    print("alerjen.json yazıldı — %d ürün" % len(out))
