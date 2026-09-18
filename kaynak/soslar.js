// -*- coding: utf-8 -*-
// KULE İstanbul Cafe — SOS KARTLARI
// Hazır/özel sosların KENDİ içindekileri ve alerjenleri. Ürünün içindekileriyle karışmaz;
// menüde ürün detayında ayrı bir "Soslar" bloğu olarak görünür.
//   a     : sosun KESİN alerjenleri (ürünün alerjen listesine de otomatik eklenir)
//   trace : "eser miktarda / aynı hatta üretilmiştir" uyarısı (alerjen çipi olarak sayılmaz)
//   note  : ek not (örn. domuz beyanı)
// Cafe de Paris 100 g toz ürün besin değerleri (üretici beyanı, menüde gösterilmiyor):
//   Enerji 560 kJ · Yağ 2,00 g (doymuş 1,00 g) · Karbonhidrat 14,00 g (şeker 6,00 g)
//   Protein 10,00 g · Lif 8,00 g · Tuz 9,00 g · Sodyum 20,20 g
//   Kullanım: 800 g toz sosa 4 lt su; ocakta karıştırarak 1 dakika pişirilir.

const SAUCES = {
 sweetchili:{
  name:{tr:"Sweet Chili Sos", en:"Sweet Chilli Sauce", ar:"صوص سويت تشيلي"},
  ing:{
   tr:"Su, şeker (%37,5), sirke, biber salçası, modifiye nişasta, tuz, sarımsak püresi, acı pul biber (%1,5), ayçiçek yağı, baharatlar, koruyucu (potasyum sorbat), asitlik düzenleyici (sitrik asit), kıvam artırıcı (ksantan gam), acı biber ekstraktı, aroma verici.",
   en:"Water, sugar (37.5%), vinegar, pepper paste, modified starch, salt, garlic purée, chilli flakes (1.5%), sunflower oil, spices, preservative (potassium sorbate), acidity regulator (citric acid), thickener (xanthan gum), chilli extract, flavouring.",
   ar:"ماء، سكر (37,5%)، خل، معجون فلفل، نشا معدّل، ملح، معجون ثوم، رقائق فلفل حار (1,5%)، زيت عبّاد الشمس، بهارات، مادة حافظة (سوربات البوتاسيوم)، منظّم حموضة (حمض الستريك)، مادة مثخّنة (صمغ الزانثان)، مستخلص الفلفل الحار، منكّه."},
  a:[],
  trace:{
   tr:"Yer fıstığı, fındık, ceviz, kereviz, hardal, süt ve soya içeren ürünlerle aynı hatta üretilmiştir.",
   en:"Produced on the same line as products containing peanuts, hazelnuts, walnuts, celery, mustard, milk and soy.",
   ar:"يُنتَج على نفس الخط مع منتجات تحتوي على الفول السوداني والبندق والجوز والكرفس والخردل والحليب والصويا."},
  note:{
   tr:"Domuz yağı ve domuz türevi katkı içermez.",
   en:"Contains no pork fat or pork-derived additives.",
   ar:"لا يحتوي على شحم الخنزير أو مشتقاته."}
 },
 cafedeparis:{
  name:{tr:"Cafe de Paris Sos", en:"Café de Paris Sauce", ar:"صوص كافيه دو باري"},
  ing:{
   tr:"Tereyağı tozu (%16), modifiye mısır nişastası, bitkisel yağ (ayçiçek), maltodekstrin, yağsız süt tozu, domates tozu, buğday unu, yağ tozu, aroma verici (et aroması), zerdeçal, köri, maya ekstraktı, tuz, asitlik düzenleyici (sitrik asit), şeker, soğan tozu, karabiber, sarımsak tozu, paprika ekstraktı, baharatlar, tarhun (%0,3), kırmızı biber, kekik, mercanköşk, biberiye.",
   en:"Butter powder (16%), modified maize starch, vegetable oil (sunflower), maltodextrin, skimmed milk powder, tomato powder, wheat flour, fat powder, flavouring (meat flavour), turmeric, curry, yeast extract, salt, acidity regulator (citric acid), sugar, onion powder, black pepper, garlic powder, paprika extract, spices, tarragon (0.3%), red pepper, thyme, marjoram, rosemary.",
   ar:"مسحوق زبدة (16%)، نشا ذرة معدّل، زيت نباتي (عبّاد الشمس)، مالتوديكسترين، حليب مجفف خالي الدسم، مسحوق طماطم، دقيق قمح، مسحوق دهون، منكّه (نكهة اللحم)، كركم، كاري، مستخلص الخميرة، ملح، منظّم حموضة (حمض الستريك)، سكر، مسحوق بصل، فلفل أسود، مسحوق ثوم، مستخلص البابريكا، بهارات، طرخون (0,3%)، فلفل أحمر، زعتر، مردقوش، إكليل الجبل."},
  a:["G","M"],
  trace:{
   tr:"Eser miktarda kereviz, yumurta, badem, yer fıstığı, Antep fıstığı, sülfit ve soya içerebilir.",
   en:"May contain traces of celery, egg, almond, peanut, pistachio, sulphites and soy.",
   ar:"قد يحتوي على آثار من الكرفس والبيض واللوز والفول السوداني والفستق الحلبي والكبريتيت والصويا."},
  note:null
 },
 demiglace:{
  name:{tr:"Demi Glace Et Sosu", en:"Demi-Glace Meat Sauce", ar:"صوص ديمي غلاس للحوم"},
  ing:{
   tr:"Mısır nişastası, buğday unu (gluten), patates nişastası, aroma vericiler, iyotlu tuz, aroma artırıcı (monosodyum glutamat), renklendirici (karamel), maya özütü, yağ tozu (bitkisel yağ (palm), glukoz şurubu, süt proteini), kurutulmuş öğütülmüş domates, bitkisel yağ (palm), kurutulmuş öğütülmüş soğan, şeker, kurutulmuş öğütülmüş kereviz, kurutulmuş öğütülmüş havuç, kurutulmuş öğütülmüş defne yaprağı.",
   en:"Maize starch, wheat flour (gluten), potato starch, flavourings, iodised salt, flavour enhancer (monosodium glutamate), colour (caramel), yeast extract, fat powder (vegetable oil (palm), glucose syrup, milk protein), dried ground tomato, vegetable oil (palm), dried ground onion, sugar, dried ground celery, dried ground carrot, dried ground bay leaf.",
   ar:"نشا ذرة، دقيق قمح (غلوتين)، نشا بطاطس، منكّهات، ملح ميوّد، معزّز نكهة (غلوتامات أحادية الصوديوم)، ملوّن (كراميل)، مستخلص الخميرة، مسحوق دهون (زيت نباتي (نخيل)، شراب غلوكوز، بروتين الحليب)، طماطم مجففة مطحونة، زيت نباتي (نخيل)، بصل مجفف مطحون، سكر، كرفس مجفف مطحون، جزر مجفف مطحون، ورق غار مجفف مطحون."},
  a:["G","M","C"],
  trace:{
   tr:"İz miktarda yumurta, hardal, soya, Antep fıstığı, fındık, badem ve susam içerebilir.",
   en:"May contain traces of egg, mustard, soy, pistachio, hazelnut, almond and sesame.",
   ar:"قد يحتوي على آثار من البيض والخردل والصويا والفستق والبندق واللوز والسمسم."},
  note:null
 },
 bbq:{
  name:{tr:"Barbekü Sos", en:"BBQ Sauce", ar:"صوص باربكيو"},
  ing:{
   tr:"Su, şeker, domates salçası, modifiye nişasta, sirke, tuz, tütsü aroma vericisi, renklendirici (amonyak karamel — gluten içerir), bitkisel sıvı yağ (değişen oranlarda kanola, ayçiçek, sarımsak), kıvam artırıcı (ksantan gam), koruyucu (sodyum benzoat), baharatlar (karabiber, kırmızı biber).",
   en:"Water, sugar, tomato paste, modified starch, vinegar, salt, smoke flavouring, colour (ammonia caramel — contains gluten), vegetable oil (canola, sunflower, garlic in varying proportions), thickener (xanthan gum), preservative (sodium benzoate), spices (black pepper, red pepper).",
   ar:"ماء، سكر، معجون طماطم، نشا معدّل، خل، ملح، منكّه دخان، ملوّن (كراميل الأمونيا — يحتوي على غلوتين)، زيت نباتي (كانولا، عبّاد الشمس، ثوم بنسب متغيّرة)، مادة مثخّنة (صمغ الزانثان)، مادة حافظة (بنزوات الصوديوم)، بهارات (فلفل أسود، فلفل أحمر)."},
  a:["G"],
  trace:{
   tr:"İz miktarda süt ve süt ürünleri, yumurta, hardal ve kereviz içerebilir.",
   en:"May contain traces of milk and milk products, egg, mustard and celery.",
   ar:"قد يحتوي على آثار من الحليب ومنتجاته والبيض والخردل والكرفس."},
  note:{
   tr:"Domuz yağı ve domuz türevi katkı içermez.",
   en:"Contains no pork fat or pork-derived additives.",
   ar:"لا يحتوي على شحم الخنزير أو مشتقاته."}
 },
 kori:{
  name:{tr:"Köri Baharat Karışımı", en:"Curry Spice Blend", ar:"خلطة بهارات الكاري"},
  ing:{
   tr:"Karabiber, kişniş, kimyon, çemen, sarımsak, zerdeçal, tuz, kırmızı tatlı biber, tarçın.",
   en:"Black pepper, coriander, cumin, fenugreek, garlic, turmeric, salt, sweet red pepper, cinnamon.",
   ar:"فلفل أسود، كزبرة، كمّون، حلبة، ثوم، كركم، ملح، فلفل أحمر حلو، قرفة."},
  a:[],
  trace:null,
  note:{
   tr:"Üretici etiketinde alerjen beyanı bulunmamaktadır. Tabaktaki köri sosu ayrıca krema ile hazırlanır (süt).",
   en:"No allergen declaration on the manufacturer's label. The curry sauce on the plate is finished with cream (milk).",
   ar:"لا يوجد بيان مسبّبات حساسية على ملصق المُنتِج. يُحضَّر صوص الكاري في الطبق مع الكريمة (حليب)."}
 }
};

// Hangi üründe hangi sos kartı görünecek (anahtar: Türkçe ürün adı)
const SOS_MAP = {
 "Kule İstanbul Burger":["sweetchili"],
 "Cheese Burger":["sweetchili"],
 "Jumbo Cheese Burger":["sweetchili"],
 "Tavuk Burger":["sweetchili"],
 "Etli Wrap":["sweetchili"],
 "Tavuklu Wrap":["sweetchili"],
 "Kaşarlı Köfteli Wrap":["sweetchili"],
 "Sweet Chili Kule Topları":["sweetchili"],
 "Big Combo Mix":["sweetchili"],
 "Fajita":["sweetchili"],
 "Combo Fajita":["sweetchili"],
 "Cafe de Paris Soslu Tavuk Lokum":["cafedeparis"],
 "Cafe de Paris Soslu Bonfile":["cafedeparis"],
 "Mantar Soslu Bonfile":["cafedeparis","demiglace"],
 "BBQ Soslu Tavuk":["bbq"],
 "Kaymaklı Kule Tavuk":["bbq"],
 "Köri Soslu Tavuk":["kori"]
};

module.exports = { SAUCES, SOS_MAP };
